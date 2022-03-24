import { writable } from 'svelte/store';

import { supabase } from '../supabase/client.js';

export const user = writable(supabase.auth.user());

/** Auth Setup */
supabase.auth.onAuthStateChange((_, session) => {
	if (session) {
		user.set(session.user);
	} else {
		// @ts-ignore
		user.set(false);
	}
});
