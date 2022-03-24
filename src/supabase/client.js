import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	import.meta.env.VITE_PUBLIC_SUPABASE_URL.toString(),
	import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY.toString()
);
