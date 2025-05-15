import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'aqui la url de supabase';
const supabaseKey = 'aqui el codigo de supabase';
export const supabase = createClient(supabaseUrl, supabaseKey);