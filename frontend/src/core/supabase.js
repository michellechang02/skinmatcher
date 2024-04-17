import {createClient} from "@supabase/supabase-js"

export const supabase = createClient(
    "URL",
    "KEY",
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
)