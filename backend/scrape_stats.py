import requests
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv

url = 'https://www.espn.com/nba/stats/player'

headers = {
    'User-Agent': 'Mozilla/5.0'
}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

# Example: parse table rows
players = []
table = soup.find('table')
if table:
    for row in table.find_all('tr')[1:]:  # Skip header
        cols = row.find_all('td')
        if len(cols) > 5:  # just a safety check
            name = cols[1].text.strip()
            team = cols[2].text.strip()
            ppg = cols[3].text.strip()  # Points per game
            players.append({
                'name': name,
                'team': team,
                'ppg': ppg
            })



from supabase import create_client, Client


SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# Insert scraped data
for player in players:
    supabase.table("nba_player_stats").insert({
        "name": player["name"],
        "team": player["team"],
        "ppg": float(player["ppg"])
    }).execute()


print(players[:5])  # Preview
