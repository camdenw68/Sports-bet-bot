import requests

from balldontlie import BalldontlieAPI

api = BalldontlieAPI(api_key="9834f6a1-7ff9-4061-b60e-349065f9170b")

# Function to fetch all players
def fetch_all_players():
    url = "https://api.balldontlie.io/v1/players"
    headers = {
        'Authorization': 'Bearer 9834f6a1-7ff9-4061-b60e-349065f9170b'  # Your API key
    }
    
    try:
        response = requests.get(url, headers=headers)
        
        # Debugging output
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")
        
        if response.status_code == 200:
            return response.json()  # Return the list of players
        else:
            print(f"Error fetching player data. Status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None

# Function to fetch player game stats by player_id
def fetch_player_game_stats(player_id):
    url = f"https://api.balldontlie.io/v1/stats?player_ids[]={player_id}"
    headers = {
        'Authorization': 'Bearer 9834f6a1-7ff9-4061-b60e-349065f9170b'  # Your API key
    }
    
    try:
        response = requests.get(url, headers=headers)
        
        # Debugging output
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")
        
        if response.status_code == 200:
            return response.json()  # Return game stats
        else:
            print(f"Error fetching player stats. Status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None
