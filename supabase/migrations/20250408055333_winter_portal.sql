/*
  # Fix domain column in waitlist table

  1. Changes
    - Add domain column to existing waitlist table
    - Make domain column nullable initially to handle existing records
    - Add NOT NULL constraint after column creation
    
  2. Security
    - Maintain existing RLS policies
*/

-- Add domain column if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'waitlist' 
    AND column_name = 'domain'
  ) THEN
    -- Add domain column as nullable first
    ALTER TABLE waitlist ADD COLUMN domain text;
    
    -- Update existing records with a default domain (you may want to update this based on email)
    UPDATE waitlist SET domain = split_part(email, '@', 2);
    
    -- Now make it NOT NULL
    ALTER TABLE waitlist ALTER COLUMN domain SET NOT NULL;
  END IF;
END $$;