// Comprehensive NBA player database with stats
// This file serves as a mock database until a real API integration is implemented

export interface NbaPlayer {
    id: number
    first_name: string
    last_name: string
    position: string
    height_feet: number
    height_inches: number
    weight_pounds: number
    jersey_number: string
    team: {
      id: number
      abbreviation: string
      city: string
      conference: string
      division: string
      full_name: string
      name: string
    }
    stats: {
      ppg: number
      rpg: number
      apg: number
      spg: number
      bpg: number
      fg_pct: number
      fg3_pct: number
      ft_pct: number
      games_played: number
      minutes: string
      efficiency: number
    }
    college?: string
    country?: string
    draft_year?: number
    draft_round?: number
    draft_number?: number
    active: boolean
  }
  
  // NBA Teams data
  export const nbaTeams = [
    {
      id: 1,
      abbreviation: "ATL",
      city: "Atlanta",
      name: "Hawks",
      full_name: "Atlanta Hawks",
      conference: "East",
      division: "Southeast",
    },
    {
      id: 2,
      abbreviation: "BOS",
      city: "Boston",
      name: "Celtics",
      full_name: "Boston Celtics",
      conference: "East",
      division: "Atlantic",
    },
    {
      id: 3,
      abbreviation: "BKN",
      city: "Brooklyn",
      name: "Nets",
      full_name: "Brooklyn Nets",
      conference: "East",
      division: "Atlantic",
    },
    {
      id: 4,
      abbreviation: "CHA",
      city: "Charlotte",
      name: "Hornets",
      full_name: "Charlotte Hornets",
      conference: "East",
      division: "Southeast",
    },
    {
      id: 5,
      abbreviation: "CHI",
      city: "Chicago",
      name: "Bulls",
      full_name: "Chicago Bulls",
      conference: "East",
      division: "Central",
    },
    {
      id: 6,
      abbreviation: "CLE",
      city: "Cleveland",
      name: "Cavaliers",
      full_name: "Cleveland Cavaliers",
      conference: "East",
      division: "Central",
    },
    {
      id: 7,
      abbreviation: "DAL",
      city: "Dallas",
      name: "Mavericks",
      full_name: "Dallas Mavericks",
      conference: "West",
      division: "Southwest",
    },
    {
      id: 8,
      abbreviation: "DEN",
      city: "Denver",
      name: "Nuggets",
      full_name: "Denver Nuggets",
      conference: "West",
      division: "Northwest",
    },
    {
      id: 9,
      abbreviation: "DET",
      city: "Detroit",
      name: "Pistons",
      full_name: "Detroit Pistons",
      conference: "East",
      division: "Central",
    },
    {
      id: 10,
      abbreviation: "GSW",
      city: "Golden State",
      name: "Warriors",
      full_name: "Golden State Warriors",
      conference: "West",
      division: "Pacific",
    },
    {
      id: 11,
      abbreviation: "HOU",
      city: "Houston",
      name: "Rockets",
      full_name: "Houston Rockets",
      conference: "West",
      division: "Southwest",
    },
    {
      id: 12,
      abbreviation: "IND",
      city: "Indiana",
      name: "Pacers",
      full_name: "Indiana Pacers",
      conference: "East",
      division: "Central",
    },
    {
      id: 13,
      abbreviation: "LAC",
      city: "Los Angeles",
      name: "Clippers",
      full_name: "Los Angeles Clippers",
      conference: "West",
      division: "Pacific",
    },
    {
      id: 14,
      abbreviation: "LAL",
      city: "Los Angeles",
      name: "Lakers",
      full_name: "Los Angeles Lakers",
      conference: "West",
      division: "Pacific",
    },
    {
      id: 15,
      abbreviation: "MEM",
      city: "Memphis",
      name: "Grizzlies",
      full_name: "Memphis Grizzlies",
      conference: "West",
      division: "Southwest",
    },
    {
      id: 16,
      abbreviation: "MIA",
      city: "Miami",
      name: "Heat",
      full_name: "Miami Heat",
      conference: "East",
      division: "Southeast",
    },
    {
      id: 17,
      abbreviation: "MIL",
      city: "Milwaukee",
      name: "Bucks",
      full_name: "Milwaukee Bucks",
      conference: "East",
      division: "Central",
    },
    {
      id: 18,
      abbreviation: "MIN",
      city: "Minnesota",
      name: "Timberwolves",
      full_name: "Minnesota Timberwolves",
      conference: "West",
      division: "Northwest",
    },
    {
      id: 19,
      abbreviation: "NOP",
      city: "New Orleans",
      name: "Pelicans",
      full_name: "New Orleans Pelicans",
      conference: "West",
      division: "Southwest",
    },
    {
      id: 20,
      abbreviation: "NYK",
      city: "New York",
      name: "Knicks",
      full_name: "New York Knicks",
      conference: "East",
      division: "Atlantic",
    },
    {
      id: 21,
      abbreviation: "OKC",
      city: "Oklahoma City",
      name: "Thunder",
      full_name: "Oklahoma City Thunder",
      conference: "West",
      division: "Northwest",
    },
    {
      id: 22,
      abbreviation: "ORL",
      city: "Orlando",
      name: "Magic",
      full_name: "Orlando Magic",
      conference: "East",
      division: "Southeast",
    },
    {
      id: 23,
      abbreviation: "PHI",
      city: "Philadelphia",
      name: "76ers",
      full_name: "Philadelphia 76ers",
      conference: "East",
      division: "Atlantic",
    },
    {
      id: 24,
      abbreviation: "PHX",
      city: "Phoenix",
      name: "Suns",
      full_name: "Phoenix Suns",
      conference: "West",
      division: "Pacific",
    },
    {
      id: 25,
      abbreviation: "POR",
      city: "Portland",
      name: "Trail Blazers",
      full_name: "Portland Trail Blazers",
      conference: "West",
      division: "Northwest",
    },
    {
      id: 26,
      abbreviation: "SAC",
      city: "Sacramento",
      name: "Kings",
      full_name: "Sacramento Kings",
      conference: "West",
      division: "Pacific",
    },
    {
      id: 27,
      abbreviation: "SAS",
      city: "San Antonio",
      name: "Spurs",
      full_name: "San Antonio Spurs",
      conference: "West",
      division: "Southwest",
    },
    {
      id: 28,
      abbreviation: "TOR",
      city: "Toronto",
      name: "Raptors",
      full_name: "Toronto Raptors",
      conference: "East",
      division: "Atlantic",
    },
    {
      id: 29,
      abbreviation: "UTA",
      city: "Utah",
      name: "Jazz",
      full_name: "Utah Jazz",
      conference: "West",
      division: "Northwest",
    },
    {
      id: 30,
      abbreviation: "WAS",
      city: "Washington",
      name: "Wizards",
      full_name: "Washington Wizards",
      conference: "East",
      division: "Southeast",
    },
  ]
  
  // Comprehensive list of NBA players with detailed stats
  export const nbaPlayers: NbaPlayer[] = [
    // Western Conference Stars
    {
      id: 1,
      first_name: "LeBron",
      last_name: "James",
      position: "SF",
      height_feet: 6,
      height_inches: 9,
      weight_pounds: 250,
      jersey_number: "23",
      team: nbaTeams[13], // LAL
      stats: {
        ppg: 25.7,
        rpg: 7.3,
        apg: 8.3,
        spg: 1.3,
        bpg: 0.5,
        fg_pct: 0.54,
        fg3_pct: 0.41,
        ft_pct: 0.75,
        games_played: 71,
        minutes: "35.5",
        efficiency: 27.3,
      },
      college: "None",
      country: "USA",
      draft_year: 2003,
      draft_round: 1,
      draft_number: 1,
      active: true,
    },
    {
      id: 2,
      first_name: "Stephen",
      last_name: "Curry",
      position: "PG",
      height_feet: 6,
      height_inches: 3,
      weight_pounds: 185,
      jersey_number: "30",
      team: nbaTeams[9], // GSW
      stats: {
        ppg: 26.4,
        rpg: 4.5,
        apg: 5.1,
        spg: 0.9,
        bpg: 0.4,
        fg_pct: 0.45,
        fg3_pct: 0.42,
        ft_pct: 0.92,
        games_played: 74,
        minutes: "34.7",
        efficiency: 24.8,
      },
      college: "Davidson",
      country: "USA",
      draft_year: 2009,
      draft_round: 1,
      draft_number: 7,
      active: true,
    },
    {
      id: 3,
      first_name: "Kevin",
      last_name: "Durant",
      position: "SF",
      height_feet: 6,
      height_inches: 10,
      weight_pounds: 240,
      jersey_number: "35",
      team: nbaTeams[23], // PHX
      stats: {
        ppg: 27.1,
        rpg: 6.6,
        apg: 5.0,
        spg: 0.7,
        bpg: 1.2,
        fg_pct: 0.52,
        fg3_pct: 0.4,
        ft_pct: 0.9,
        games_played: 58,
        minutes: "36.0",
        efficiency: 26.0,
      },
      college: "Texas",
      country: "USA",
      draft_year: 2007,
      draft_round: 1,
      draft_number: 2,
      active: true,
    },
    {
      id: 4,
      first_name: "Nikola",
      last_name: "Jokic",
      position: "C",
      height_feet: 7,
      height_inches: 0,
      weight_pounds: 284,
      jersey_number: "15",
      team: nbaTeams[7], // DEN
      stats: {
        ppg: 26.4,
        rpg: 12.4,
        apg: 9.0,
        spg: 1.4,
        bpg: 0.9,
        fg_pct: 0.58,
        fg3_pct: 0.35,
        ft_pct: 0.82,
        games_played: 79,
        minutes: "34.6",
        efficiency: 32.8,
      },
      college: "None",
      country: "Serbia",
      draft_year: 2014,
      draft_round: 2,
      draft_number: 41,
      active: true,
    },
    {
      id: 5,
      first_name: "Luka",
      last_name: "Doncic",
      position: "PG",
      height_feet: 6,
      height_inches: 7,
      weight_pounds: 230,
      jersey_number: "77",
      team: nbaTeams[6], // DAL
      stats: {
        ppg: 33.9,
        rpg: 9.2,
        apg: 9.8,
        spg: 1.4,
        bpg: 0.5,
        fg_pct: 0.5,
        fg3_pct: 0.38,
        ft_pct: 0.77,
        games_played: 75,
        minutes: "37.1",
        efficiency: 33.5,
      },
      college: "None",
      country: "Slovenia",
      draft_year: 2018,
      draft_round: 1,
      draft_number: 3,
      active: true,
    },
  
    // Eastern Conference Stars
    {
      id: 6,
      first_name: "Giannis",
      last_name: "Antetokounmpo",
      position: "PF",
      height_feet: 6,
      height_inches: 11,
      weight_pounds: 242,
      jersey_number: "34",
      team: nbaTeams[16], // MIL
      stats: {
        ppg: 30.4,
        rpg: 11.5,
        apg: 6.5,
        spg: 1.2,
        bpg: 1.0,
        fg_pct: 0.61,
        fg3_pct: 0.27,
        ft_pct: 0.65,
        games_played: 73,
        minutes: "34.6",
        efficiency: 31.1,
      },
      college: "None",
      country: "Greece",
      draft_year: 2013,
      draft_round: 1,
      draft_number: 15,
      active: true,
    },
    {
      id: 7,
      first_name: "Joel",
      last_name: "Embiid",
      position: "C",
      height_feet: 7,
      height_inches: 0,
      weight_pounds: 280,
      jersey_number: "21",
      team: nbaTeams[22], // PHI
      stats: {
        ppg: 33.1,
        rpg: 10.2,
        apg: 4.2,
        spg: 1.0,
        bpg: 1.7,
        fg_pct: 0.54,
        fg3_pct: 0.33,
        ft_pct: 0.86,
        games_played: 66,
        minutes: "34.0",
        efficiency: 31.5,
      },
      college: "Kansas",
      country: "Cameroon",
      draft_year: 2014,
      draft_round: 1,
      draft_number: 3,
      active: true,
    },
    {
      id: 8,
      first_name: "Jayson",
      last_name: "Tatum",
      position: "SF",
      height_feet: 6,
      height_inches: 8,
      weight_pounds: 210,
      jersey_number: "0",
      team: nbaTeams[1], // BOS
      stats: {
        ppg: 30.1,
        rpg: 8.8,
        apg: 4.6,
        spg: 1.1,
        bpg: 0.7,
        fg_pct: 0.47,
        fg3_pct: 0.37,
        ft_pct: 0.85,
        games_played: 74,
        minutes: "37.6",
        efficiency: 27.8,
      },
      college: "Duke",
      country: "USA",
      draft_year: 2017,
      draft_round: 1,
      draft_number: 3,
      active: true,
    },
    {
      id: 9,
      first_name: "Jimmy",
      last_name: "Butler",
      position: "SF",
      height_feet: 6,
      height_inches: 7,
      weight_pounds: 230,
      jersey_number: "22",
      team: nbaTeams[15], // MIA
      stats: {
        ppg: 20.8,
        rpg: 5.5,
        apg: 5.0,
        spg: 1.3,
        bpg: 0.3,
        fg_pct: 0.49,
        fg3_pct: 0.35,
        ft_pct: 0.86,
        games_played: 64,
        minutes: "33.5",
        efficiency: 22.0,
      },
      college: "Marquette",
      country: "USA",
      draft_year: 2011,
      draft_round: 1,
      draft_number: 30,
      active: true,
    },
    {
      id: 10,
      first_name: "Trae",
      last_name: "Young",
      position: "PG",
      height_feet: 6,
      height_inches: 1,
      weight_pounds: 180,
      jersey_number: "11",
      team: nbaTeams[0], // ATL
      stats: {
        ppg: 26.1,
        rpg: 3.0,
        apg: 10.8,
        spg: 1.1,
        bpg: 0.1,
        fg_pct: 0.43,
        fg3_pct: 0.36,
        ft_pct: 0.88,
        games_played: 76,
        minutes: "35.0",
        efficiency: 23.2,
      },
      college: "Oklahoma",
      country: "USA",
      draft_year: 2018,
      draft_round: 1,
      draft_number: 5,
      active: true,
    },
  
    // Additional Stars
    {
      id: 11,
      first_name: "Ja",
      last_name: "Morant",
      position: "PG",
      height_feet: 6,
      height_inches: 3,
      weight_pounds: 174,
      jersey_number: "12",
      team: nbaTeams[14], // MEM
      stats: {
        ppg: 24.8,
        rpg: 5.6,
        apg: 8.1,
        spg: 1.1,
        bpg: 0.3,
        fg_pct: 0.47,
        fg3_pct: 0.3,
        ft_pct: 0.74,
        games_played: 61,
        minutes: "31.9",
        efficiency: 23.5,
      },
      college: "Murray State",
      country: "USA",
      draft_year: 2019,
      draft_round: 1,
      draft_number: 2,
      active: true,
    },
    {
      id: 12,
      first_name: "Damian",
      last_name: "Lillard",
      position: "PG",
      height_feet: 6,
      height_inches: 2,
      weight_pounds: 195,
      jersey_number: "0",
      team: nbaTeams[16], // MIL (now)
      stats: {
        ppg: 24.3,
        rpg: 4.4,
        apg: 7.3,
        spg: 0.9,
        bpg: 0.3,
        fg_pct: 0.44,
        fg3_pct: 0.37,
        ft_pct: 0.91,
        games_played: 73,
        minutes: "36.3",
        efficiency: 22.8,
      },
      college: "Weber State",
      country: "USA",
      draft_year: 2012,
      draft_round: 1,
      draft_number: 6,
      active: true,
    },
    {
      id: 13,
      first_name: "Anthony",
      last_name: "Davis",
      position: "PF",
      height_feet: 6,
      height_inches: 10,
      weight_pounds: 253,
      jersey_number: "3",
      team: nbaTeams[13], // LAL
      stats: {
        ppg: 24.7,
        rpg: 12.5,
        apg: 2.6,
        spg: 1.1,
        bpg: 2.0,
        fg_pct: 0.55,
        fg3_pct: 0.26,
        ft_pct: 0.81,
        games_played: 56,
        minutes: "34.0",
        efficiency: 28.5,
      },
      college: "Kentucky",
      country: "USA",
      draft_year: 2012,
      draft_round: 1,
      draft_number: 1,
      active: true,
    },
    {
      id: 14,
      first_name: "Devin",
      last_name: "Booker",
      position: "SG",
      height_feet: 6,
      height_inches: 5,
      weight_pounds: 206,
      jersey_number: "1",
      team: nbaTeams[23], // PHX
      stats: {
        ppg: 27.1,
        rpg: 4.5,
        apg: 6.5,
        spg: 1.0,
        bpg: 0.3,
        fg_pct: 0.49,
        fg3_pct: 0.38,
        ft_pct: 0.87,
        games_played: 68,
        minutes: "36.1",
        efficiency: 24.2,
      },
      college: "Kentucky",
      country: "USA",
      draft_year: 2015,
      draft_round: 1,
      draft_number: 13,
      active: true,
    },
    {
      id: 15,
      first_name: "Kawhi",
      last_name: "Leonard",
      position: "SF",
      height_feet: 6,
      height_inches: 7,
      weight_pounds: 225,
      jersey_number: "2",
      team: nbaTeams[12], // LAC
      stats: {
        ppg: 23.8,
        rpg: 6.5,
        apg: 3.9,
        spg: 1.6,
        bpg: 0.5,
        fg_pct: 0.52,
        fg3_pct: 0.41,
        ft_pct: 0.88,
        games_played: 68,
        minutes: "33.6",
        efficiency: 25.2,
      },
      college: "San Diego State",
      country: "USA",
      draft_year: 2011,
      draft_round: 1,
      draft_number: 15,
      active: true,
    },
    {
      id: 16,
      first_name: "Donovan",
      last_name: "Mitchell",
      position: "SG",
      height_feet: 6,
      height_inches: 3,
      weight_pounds: 215,
      jersey_number: "45",
      team: nbaTeams[5], // CLE
      stats: {
        ppg: 28.3,
        rpg: 4.4,
        apg: 6.1,
        spg: 1.5,
        bpg: 0.4,
        fg_pct: 0.48,
        fg3_pct: 0.37,
        ft_pct: 0.86,
        games_played: 79,
        minutes: "35.8",
        efficiency: 25.1,
      },
      college: "Louisville",
      country: "USA",
      draft_year: 2017,
      draft_round: 1,
      draft_number: 13,
      active: true,
    },
    {
      id: 17,
      first_name: "Jaylen",
      last_name: "Brown",
      position: "SG",
      height_feet: 6,
      height_inches: 6,
      weight_pounds: 223,
      jersey_number: "7",
      team: nbaTeams[1], // BOS
      stats: {
        ppg: 26.6,
        rpg: 6.9,
        apg: 3.5,
        spg: 1.2,
        bpg: 0.5,
        fg_pct: 0.49,
        fg3_pct: 0.35,
        ft_pct: 0.71,
        games_played: 70,
        minutes: "35.9",
        efficiency: 23.8,
      },
      college: "California",
      country: "USA",
      draft_year: 2016,
      draft_round: 1,
      draft_number: 3,
      active: true,
    },
    {
      id: 18,
      first_name: "Zion",
      last_name: "Williamson",
      position: "PF",
      height_feet: 6,
      height_inches: 6,
      weight_pounds: 284,
      jersey_number: "1",
      team: nbaTeams[18], // NOP
      stats: {
        ppg: 22.9,
        rpg: 6.8,
        apg: 4.9,
        spg: 1.1,
        bpg: 0.7,
        fg_pct: 0.6,
        fg3_pct: 0.33,
        ft_pct: 0.71,
        games_played: 29,
        minutes: "33.0",
        efficiency: 23.5,
      },
      college: "Duke",
      country: "USA",
      draft_year: 2019,
      draft_round: 1,
      draft_number: 1,
      active: true,
    },
    {
      id: 19,
      first_name: "Bam",
      last_name: "Adebayo",
      position: "C",
      height_feet: 6,
      height_inches: 9,
      weight_pounds: 255,
      jersey_number: "13",
      team: nbaTeams[15], // MIA
      stats: {
        ppg: 19.8,
        rpg: 10.4,
        apg: 3.9,
        spg: 1.1,
        bpg: 0.9,
        fg_pct: 0.54,
        fg3_pct: 0.05,
        ft_pct: 0.8,
        games_played: 75,
        minutes: "34.6",
        efficiency: 22.3,
      },
      college: "Kentucky",
      country: "USA",
      draft_year: 2017,
      draft_round: 1,
      draft_number: 14,
      active: true,
    },
    {
      id: 20,
      first_name: "Shai",
      last_name: "Gilgeous-Alexander",
      position: "PG",
      height_feet: 6,
      height_inches: 6,
      weight_pounds: 195,
      jersey_number: "2",
      team: nbaTeams[20], // OKC
      stats: {
        ppg: 31.4,
        rpg: 5.5,
        apg: 6.2,
        spg: 2.0,
        bpg: 1.0,
        fg_pct: 0.54,
        fg3_pct: 0.34,
        ft_pct: 0.9,
        games_played: 75,
        minutes: "35.5",
        efficiency: 30.0,
      },
      college: "Kentucky",
      country: "Canada",
      draft_year: 2018,
      draft_round: 1,
      draft_number: 11,
      active: true,
    },
    // Add more players as needed...
    {
      id: 21,
      first_name: "Victor",
      last_name: "Wembanyama",
      position: "PF",
      height_feet: 7,
      height_inches: 4,
      weight_pounds: 210,
      jersey_number: "1",
      team: nbaTeams[26], // SAS
      stats: {
        ppg: 21.4,
        rpg: 10.6,
        apg: 3.9,
        spg: 1.2,
        bpg: 3.6,
        fg_pct: 0.46,
        fg3_pct: 0.32,
        ft_pct: 0.8,
        games_played: 71,
        minutes: "29.7",
        efficiency: 25.8,
      },
      college: "None",
      country: "France",
      draft_year: 2023,
      draft_round: 1,
      draft_number: 1,
      active: true,
    },
    {
      id: 22,
      first_name: "Paolo",
      last_name: "Banchero",
      position: "PF",
      height_feet: 6,
      height_inches: 10,
      weight_pounds: 250,
      jersey_number: "5",
      team: nbaTeams[21], // ORL
      stats: {
        ppg: 22.6,
        rpg: 6.9,
        apg: 5.4,
        spg: 0.9,
        bpg: 0.6,
        fg_pct: 0.46,
        fg3_pct: 0.33,
        ft_pct: 0.75,
        games_played: 80,
        minutes: "34.5",
        efficiency: 21.9,
      },
      college: "Duke",
      country: "USA",
      draft_year: 2022,
      draft_round: 1,
      draft_number: 1,
      active: true,
    },
    {
      id: 23,
      first_name: "Anthony",
      last_name: "Edwards",
      position: "SG",
      height_feet: 6,
      height_inches: 4,
      weight_pounds: 225,
      jersey_number: "1",
      team: nbaTeams[17], // MIN
      stats: {
        ppg: 25.9,
        rpg: 5.4,
        apg: 5.1,
        spg: 1.3,
        bpg: 0.5,
        fg_pct: 0.46,
        fg3_pct: 0.35,
        ft_pct: 0.83,
        games_played: 79,
        minutes: "35.5",
        efficiency: 23.2,
      },
      college: "Georgia",
      country: "USA",
      draft_year: 2020,
      draft_round: 1,
      draft_number: 1,
      active: true,
    },
    {
      id: 24,
      first_name: "Tyrese",
      last_name: "Haliburton",
      position: "PG",
      height_feet: 6,
      height_inches: 5,
      weight_pounds: 185,
      jersey_number: "0",
      team: nbaTeams[11], // IND
      stats: {
        ppg: 20.1,
        rpg: 3.9,
        apg: 10.9,
        spg: 1.0,
        bpg: 0.5,
        fg_pct: 0.47,
        fg3_pct: 0.37,
        ft_pct: 0.85,
        games_played: 58,
        minutes: "33.4",
        efficiency: 22.4,
      },
      college: "Iowa State",
      country: "USA",
      draft_year: 2020,
      draft_round: 1,
      draft_number: 12,
      active: true,
    },
    {
      id: 25,
      first_name: "Chet",
      last_name: "Holmgren",
      position: "PF",
      height_feet: 7,
      height_inches: 1,
      weight_pounds: 195,
      jersey_number: "7",
      team: nbaTeams[20], // OKC
      stats: {
        ppg: 16.5,
        rpg: 7.9,
        apg: 2.4,
        spg: 0.8,
        bpg: 2.3,
        fg_pct: 0.53,
        fg3_pct: 0.39,
        ft_pct: 0.78,
        games_played: 82,
        minutes: "29.8",
        efficiency: 20.2,
      },
      college: "Gonzaga",
      country: "USA",
      draft_year: 2022,
      draft_round: 1,
      draft_number: 2,
      active: true,
    },
  ]
  
  // Function to search players by name
  export function searchPlayersByName(query: string): NbaPlayer[] {
    if (!query || query.trim() === "") {
      return []
    }
  
    const normalizedQuery = query.toLowerCase().trim()
  
    return nbaPlayers.filter((player) => {
      const fullName = `${player.first_name} ${player.last_name}`.toLowerCase()
      return (
        fullName.includes(normalizedQuery) ||
        player.first_name.toLowerCase().includes(normalizedQuery) ||
        player.last_name.toLowerCase().includes(normalizedQuery)
      )
    })
  }
  
  // Function to get player by ID
  export function getPlayerById(id: number): NbaPlayer | undefined {
    return nbaPlayers.find((player) => player.id === id)
  }
  
  // Function to get players by team
  export function getPlayersByTeam(teamAbbreviation: string): NbaPlayer[] {
    const normalizedTeam = teamAbbreviation.toUpperCase().trim()
    return nbaPlayers.filter((player) => player.team.abbreviation === normalizedTeam)
  }
  
  // Update the getPlayerHistoricalMatchup function to return individual games
  
  // Function to get historical matchup stats
  export function getPlayerHistoricalMatchup(playerId: number, teamAbbreviation: string): any {
    const player = getPlayerById(playerId)
    if (!player) {
      return null
    }
  
    const teamAbbr = teamAbbreviation.toUpperCase().trim()
    const team = nbaTeams.find((t) => t.abbreviation === teamAbbr)
    if (!team) {
      return null
    }
  
    // Generate deterministic but seemingly random stats based on player ID and team ID
    const seed = playerId * 100 + team.id
    const random = (min: number, max: number, seedOffset = 0) => {
      const x = Math.sin((seed + seedOffset) * 10000)
      const rand = x - Math.floor(x)
      return min + rand * (max - min)
    }
  
    // Generate number of games (1-8)
    const gamesPlayed = Math.floor(random(1, 9))
  
    // Generate individual games
    const games = []
  
    for (let i = 0; i < gamesPlayed; i++) {
      // Different stats ranges based on player position
      let pts, reb, ast, stl, blk, fg, threePoint, ft, min
  
      // Generate stats based on player position
      if (player.position === "C" || player.position === "PF") {
        // Big men
        pts = Math.floor(player.stats.ppg * (0.7 + random(0, 0.6, i)))
        reb = Math.floor(player.stats.rpg * (0.7 + random(0, 0.6, i + 10)))
        ast = Math.floor(player.stats.apg * (0.7 + random(0, 0.6, i + 20)))
        stl = Math.floor(player.stats.spg * (0.7 + random(0, 0.6, i + 30)))
        blk = Math.floor(player.stats.bpg * (0.7 + random(0, 0.6, i + 40)))
        fg = `${Math.floor(player.stats.fg_pct * 100 * (0.8 + random(0, 0.4, i + 50)))}%`
        threePoint = `${Math.floor(player.stats.fg3_pct * 100 * (0.8 + random(0, 0.4, i + 60)))}%`
        ft = `${Math.floor(player.stats.ft_pct * 100 * (0.8 + random(0, 0.4, i + 70)))}%`
      } else if (player.position === "PG" || player.position === "SG") {
        // Guards
        pts = Math.floor(player.stats.ppg * (0.7 + random(0, 0.6, i)))
        reb = Math.floor(player.stats.rpg * (0.7 + random(0, 0.6, i + 10)))
        ast = Math.floor(player.stats.apg * (0.7 + random(0, 0.6, i + 20)))
        stl = Math.floor(player.stats.spg * (0.7 + random(0, 0.6, i + 30)))
        blk = Math.floor(player.stats.bpg * (0.7 + random(0, 0.6, i + 40)))
        fg = `${Math.floor(player.stats.fg_pct * 100 * (0.8 + random(0, 0.4, i + 50)))}%`
        threePoint = `${Math.floor(player.stats.fg3_pct * 100 * (0.8 + random(0, 0.4, i + 60)))}%`
        ft = `${Math.floor(player.stats.ft_pct * 100 * (0.8 + random(0, 0.4, i + 70)))}%`
      } else {
        // Forwards
        pts = Math.floor(player.stats.ppg * (0.7 + random(0, 0.6, i)))
        reb = Math.floor(player.stats.rpg * (0.7 + random(0, 0.6, i + 10)))
        ast = Math.floor(player.stats.apg * (0.7 + random(0, 0.6, i + 20)))
        stl = Math.floor(player.stats.spg * (0.7 + random(0, 0.6, i + 30)))
        blk = Math.floor(player.stats.bpg * (0.7 + random(0, 0.6, i + 40)))
        fg = `${Math.floor(player.stats.fg_pct * 100 * (0.8 + random(0, 0.4, i + 50)))}%`
        threePoint = `${Math.floor(player.stats.fg3_pct * 100 * (0.8 + random(0, 0.4, i + 60)))}%`
        ft = `${Math.floor(player.stats.ft_pct * 100 * (0.8 + random(0, 0.4, i + 70)))}%`
      }
  
      // Generate minutes played
      min = `${Math.floor(20 + random(0, 15, i + 80))}`
  
      // Generate date (within the last 3 years)
      const today = new Date()
      const daysAgo = Math.floor(random(1, 1095, i + 90)) // Up to 3 years ago
      const gameDate = new Date(today)
      gameDate.setDate(today.getDate() - daysAgo)
  
      const formattedDate = gameDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
  
      // Home or away
      const isHome = random(0, 1, i + 100) > 0.5
      const result = isHome ? `vs ${team.abbreviation}` : `@ ${team.abbreviation}`
  
      games.push({
        date: formattedDate,
        opponent: team.full_name,
        result: result,
        stats: {
          pts,
          reb,
          ast,
          stl,
          blk,
          fg,
          threePoint,
          ft,
          min,
        },
      })
    }
  
    // Sort games by date (most recent first)
    games.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
    // Calculate averages
    const avgPts = games.reduce((sum, game) => sum + game.stats.pts, 0) / gamesPlayed
    const avgReb = games.reduce((sum, game) => sum + game.stats.reb, 0) / gamesPlayed
    const avgAst = games.reduce((sum, game) => sum + game.stats.ast, 0) / gamesPlayed
    const avgStl = games.reduce((sum, game) => sum + game.stats.stl, 0) / gamesPlayed
    const avgBlk = games.reduce((sum, game) => sum + game.stats.blk, 0) / gamesPlayed
  
    return {
      opponent: team.full_name,
      games_played: gamesPlayed,
      games: games,
      averages: {
        ppg: avgPts.toFixed(1),
        rpg: avgReb.toFixed(1),
        apg: avgAst.toFixed(1),
        spg: avgStl.toFixed(1),
        bpg: avgBlk.toFixed(1),
      },
    }
  }
  
  