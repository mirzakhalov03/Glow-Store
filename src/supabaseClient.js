import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eetqcfpyziptmrzwftem.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVldHFjZnB5emlwdG1yendmdGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODc4NTMsImV4cCI6MjA0MzQ2Mzg1M30.yL4A8waZ1JIXmBohwn17Uy7jH24UwVQKjOsAkvXmPag'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);