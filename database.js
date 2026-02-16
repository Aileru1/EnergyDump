
// 1️⃣ Supabase connection
const SUPABASE_URL ="https://rrlwaxypuaxmgtlhciis.supabase.co";
const SUPABASE_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybHdheHlwdWF4bWd0bGhjaWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MTA4NDgsImV4cCI6MjA4NDk4Njg0OH0.wVFBOKZay9e0wcm7Z9lPuOKTNxYbzQaAsO8mgmnPeLQ";

// Global namespace
window.DB = {};
DB.sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
