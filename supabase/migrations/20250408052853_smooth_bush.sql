/*
  # Update waitlist table with environment variable name

  1. Changes
    - Safely create or update waitlist table
    - Ensure RLS is enabled
    - Safely create or update policies
    
  2. Security
    - Maintain existing RLS policies
    - Ensure proper access control
*/

DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist;
  DROP POLICY IF EXISTS "Admins can read waitlist" ON waitlist;
  
  -- Create or update the table
  CREATE TABLE IF NOT EXISTS waitlist (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    created_at timestamptz DEFAULT now(),
    status text DEFAULT 'pending'
  );

  -- Enable RLS
  ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

  -- Create policies
  CREATE POLICY "Anyone can join waitlist" ON waitlist
    FOR INSERT
    TO public
    WITH CHECK (true);

  CREATE POLICY "Admins can read waitlist" ON waitlist
    FOR SELECT
    TO authenticated
    USING (auth.jwt()->>'role' = 'admin');
END $$;