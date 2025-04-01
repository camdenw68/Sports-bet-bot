from backend.data_fetcher import fetch_all_players, fetch_player_game_stats

from balldontlie import BalldontlieAPI

api = BalldontlieAPI(api_key="9834f6a1-7ff9-4061-b60e-349065f9170b")

def main():
    # Fetch all players
    players_data = fetch_all_players()

    if players_data:
        # Print first few players to check
        for player in players_data['data'][:5]:  # Display first 5 players
            print(f"Player ID: {player['id']}, Name: {player['first_name']} {player['last_name']}")
        
        # Choose a player (replace this logic as needed)
        player_id = players_data['data'][0]['id']  # Example: Take the first player ID
        
        # Fetch stats for the selected player
        player_stats = fetch_player_game_stats(player_id)
        
        if player_stats:
            print(f"Player Stats for {player_id}:")
            print(player_stats)  # You can format this further as needed
        else:
            print("Error: Failed to fetch player stats")
    else:
        print("Error: Failed to fetch players")

if __name__ == "__main__":
    main()
