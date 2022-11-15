const SUPABASE_URL = 'https://gvhgebiiqjezrhkmcque.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aGdlYmlpcWplenJoa21jcXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMzcsImV4cCI6MTk4MzY4NDAzN30.IPXrWCU6kYe9JaHUfGPnQcuwKDHonUpaRuCgs3uCEok';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchCharacters() {
    const response = await client.from('mcu-characters').select('*');
    return response.data;
}
