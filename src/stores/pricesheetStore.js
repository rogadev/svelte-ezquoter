import { writable } from 'svelte/store';

//import { supabase } from '../supabase/client.js';
// await supabase.from('pricesheets').select()

export const pricesheets = writable([{ a: 'b' }]);
