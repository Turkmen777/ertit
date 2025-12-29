// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://oewhlfyqfazfrrequait.supabase.co
const supabaseAnonKey = process.env.sb_publishable_jFg3OshZLFGPG5LA2ADgFQ_3huf-vQK

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
