export const SUPABASE_CONFIG = {
  tables: {
    waitlist: import.meta.env.VITE_SUPABASE_TABLE_WAITLIST || 'waitlist'
  }
} as const;