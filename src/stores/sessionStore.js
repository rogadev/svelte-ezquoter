import { writable } from 'svelte/store';

import { supabase } from '../supabase/client.js';

export const user = writable(false);

// @ts-ignore
user.set(supabase.auth.user());

/** Auth Setup */
supabase.auth.onAuthStateChange((_, session) => {
	if (session) {
		// @ts-ignore
		user.set(session.user);
	} else {
		// @ts-ignore
		user.set(false);
	}
});
