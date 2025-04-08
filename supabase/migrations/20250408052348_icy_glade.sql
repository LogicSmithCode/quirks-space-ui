/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null, unique)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'pending')

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
    - Add policy for admins to read all entries
*/

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (but they can't read their own entries)
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users with admin role can read waitlist entries
CREATE POLICY "Admins can read waitlist" ON waitlist
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'role' = 'admin');