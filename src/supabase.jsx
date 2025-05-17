import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vqfhqiaqjkjrihhayvtu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZmhxaWFxamtqcmloaGF5dnR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzQ0NzM3NCwiZXhwIjoyMDYzMDIzMzc0fQ.mVhkYOWuscXsK44ScbmB6zVSsCehyvlJlRXPw_JP2NQ';
export const supabase = createClient(supabaseUrl, supabaseKey);