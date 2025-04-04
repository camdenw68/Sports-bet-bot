import requests
from bs4 import BeautifulSoup, Comment
import json
from pathlib import Path

print("🧠 Script is running the FINAL fix!")

url = "https://www.basketball-reference.com/players/j/jamesle01/gamelog/2024"
opponent_team = "GSW"
season = 2024

# Request page
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# Pull all HTML comments and search manually
comments = soup.find_all(string=lambda text: isinstance(text, Comment))
table_html = None

for comment in comments:
    if 'id="pgl_basic"' in comment:
        # This is our table block
        table_soup = BeautifulSoup(comment, "html.parser")
        table_html = table_soup.find("table", {"id": "pgl_basic"})
        break

if not table_html:
    raise ValueError("❌ Still couldn't find the table — even in comments.")

rows = table_html.find("tbody").find_all("tr")
games_vs_team = []

for row in rows:
    if row.get("class") == ["thead"]:
        continue

    opp = row.find("td", {"data-stat": "opp_name_abbr"})
    if opp and opp.text.strip() == opponent_team:
        def parse(stat):
            td = row.find("td", {"data-stat": stat})
            return int(td.text.strip()) if td and td.text.strip().isdigit() else 0

        game_data = {
            "season": season,
            "date": row.find("td", {"data-stat": "date_game"}).text.strip(),
            "points": parse("pts"),
            "rebounds": parse("trb"),
            "assists": parse("ast"),
            "steals": parse("stl"),
            "blocks": parse("blk"),
            "fgm": parse("fg"),
            "fga": parse("fga"),
            "fg3m": parse("fg3"),
            "fg3a": parse("fg3a"),
            "ftm": parse("ft"),
            "fta": parse("fta"),
            "opponent": opponent_team
        }
        games_vs_team.append(game_data)

# Grab last 5 games
last_5 = games_vs_team[-5:]

# Save
output_path = Path(__file__).parent / "lebron_vs_gsw_2024.json"
with open(output_path, "w") as f:
    json.dump(last_5, f, indent=2)

print("✅ Saved last 5 games vs GSW to lebron_vs_gsw_2024.json")
