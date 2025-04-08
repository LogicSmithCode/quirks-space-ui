/*
  # Update waitlist table to include domain

  1. Changes
    - Add domain column to waitlist table
    - Maintain existing RLS policies
    - Keep all other columns and constraints
    
  2. Security
    - Maintain RLS enabled
    - Keep existing access policies
*/

DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist;
  DROP POLICY IF EXISTS "Admins can read waitlist" ON waitlist;
  
  -- Create or update the table with domain column
  CREATE TABLE IF NOT EXISTS waitlist (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    domain text NOT NULL,
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