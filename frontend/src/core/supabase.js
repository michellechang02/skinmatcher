import {createClient} from "@supabase/supabase-js"


export const supabase = createClient(
    env.url,
    env.secretKey,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
)