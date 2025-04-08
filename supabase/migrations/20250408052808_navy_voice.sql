/*
  # Create waitlist table with environment variable name

  1. New Tables
    - Table name from environment variable (default: 'waitlist')
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null, unique)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'pending')

  2. Security
    - Enable RLS on the table
    - Add policy for inserting new entries
    - Add policy for admins to read all entries
*/

DO $$
DECLARE
  table_name text := current_setting('app.table_waitlist', true);
BEGIN
  -- Use default name if environment variable is not set
  IF table_name IS NULL THEN
    table_name := 'waitlist';
  END IF;

  -- Create the dynamic table
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      email text NOT NULL UNIQUE,
      created_at timestamptz DEFAULT now(),
      status text DEFAULT ''pending''
    )', table_name);

  -- Enable Row Level Security
  EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', table_name);

  -- Create policies
  EXECUTE format('
    CREATE POLICY "Anyone can join waitlist" ON %I
      FOR INSERT
      TO public
      WITH CHECK (true)
  ', table_name);

  EXECUTE format('
    CREATE POLICY "Admins can read waitlist" ON %I
      FOR SELECT
      TO authenticated
      USING (auth.jwt()->>''role'' = ''admin'')
  ', table_name);
END $$;