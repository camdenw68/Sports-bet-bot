const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: __dirname + '/.env' }) 


const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'famous_nba_players.json')
const players = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

console.log(`📦 Loaded ${players.length} players...`)

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

const cleanedPlayers = players.map(({ team_abbreviation, ...rest }) => rest)

async function insertPlayers() {
  const { data, error } = await supabase.from('nba_players').insert(cleanedPlayers)


  if (error) {
    console.error('❌ Error inserting players:', error)
  } else {
    console.log('✅ Successfully inserted players:', data)
  }
}

insertPlayers()

