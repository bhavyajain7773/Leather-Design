import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uywnnwuoshdqgmfuprdx.supabase.co';
const supabaseAnonKey = 'sb_publishable_7clmR3syxUzKaHFaI2H9rw_r5I1hRJ6';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
