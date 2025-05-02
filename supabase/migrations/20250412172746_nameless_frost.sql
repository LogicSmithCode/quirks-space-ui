/*
  # Create dynamic content tables

  1. New Tables
    - `blog_posts` - For blog content and articles
    - `ventures` - For venture/project showcases
    - `inventions` - For invention/patent showcases
    - `media_features` - For media appearances
    - `speaking_engagements` - For speaking events
    - `contacts` - For contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to published content
    - Add policies for admin write access
*/

-- Function to safely create policies
CREATE OR REPLACE FUNCTION create_policy_if_not_exists(
  policy_name text,
  table_name text,
  operation text,
  roles text[],
  using_expr text,
  check_expr text DEFAULT NULL
) RETURNS void AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = table_name 
    AND policyname = policy_name
  ) THEN
    EXECUTE format(
      'CREATE POLICY %I ON %I FOR %s TO %s USING (%s) %s',
      policy_name,
      table_name,
      operation,
      array_to_string(roles, ','),
      using_expr,
      CASE WHEN check_expr IS NOT NULL THEN 'WITH CHECK (' || check_expr || ')' ELSE '' END
    );
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Blog Posts Table
DO $$ 
BEGIN
  CREATE TABLE IF NOT EXISTS blog_posts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    excerpt text NOT NULL,
    content text NOT NULL,
    image_url text NOT NULL,
    tags text[] NOT NULL,
    slug text NOT NULL UNIQUE,
    published_at timestamptz,
    created_at timestamptz DEFAULT now(),
    published boolean DEFAULT false
  );

  ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
  
  PERFORM create_policy_if_not_exists(
    'Anyone can read published blog posts',
    'blog_posts',
    'SELECT',
    ARRAY['anon'],
    'published = true'
  );
END $$;

-- Ventures Table
DO $$ 
BEGIN
  CREATE TABLE IF NOT EXISTS ventures (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    role text NOT NULL,
    description text NOT NULL,
    image_url text NOT NULL,
    tags text[] NOT NULL,
    link text,
    created_at timestamptz DEFAULT now(),
    published boolean DEFAULT false
  );

  ALTER TABLE ventures ENABLE ROW LEVEL SECURITY;
  
  PERFORM create_policy_if_not_exists(
    'Anyone can read published ventures',
    'ventures',
    'SELECT',
    ARRAY['anon'],
    'published = true'
  );
END $$;

-- Inventions Table
DO $$ 
BEGIN
  CREATE TABLE IF NOT EXISTS inventions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text NOT NULL,
    patent_number text NOT NULL,
    image_url text NOT NULL,
    demo_url text,
    created_at timestamptz DEFAULT now(),
    published boolean DEFAULT false
  );

  ALTER TABLE inventions ENABLE ROW LEVEL SECURITY;
  
  PERFORM create_policy_if_not_exists(
    'Anyone can read published inventions',
    'inventions',
    'SELECT',
    ARRAY['anon'],
    'published = true'
  );
END $$;

-- Media Features Table
DO $$ 
BEGIN
  CREATE TABLE IF NOT EXISTS media_features (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    outlet text NOT NULL,
    type text NOT NULL,
    link text,
    date date NOT NULL,
    created_at timestamptz DEFAULT now(),
    published boolean DEFAULT false
  );

  ALTER TABLE media_features ENABLE ROW LEVEL SECURITY;
  
  PERFORM create_policy_if_not_exists(
    'Anyone can read published media features',
    'media_features',
    'SELECT',
    ARRAY['anon'],
    'published = true'
  );
END $$;

-- Speaking Engagements Table
DO $$ 
BEGIN
  CREATE TABLE IF NOT EXISTS speaking_engagements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    event text NOT NULL,
    topic text NOT NULL,
    date date NOT NULL,
    location text NOT NULL,
    link text,
    created_at timestamptz DEFAULT now(),
    published boolean DEFAULT false
  );

  ALTER TABLE speaking_engagements ENABLE ROW LEVEL SECURITY;
  
  PERFORM create_policy_if_not_exists(
    'Anyone can read published speaking engagements',
    'speaking_engagements',
    'SELECT',
    ARRAY['anon'],
    'published = true'
  );
END $$;

-- Contacts Table
DO $$ 
BEGIN
  CREATE TABLE IF NOT EXISTS contacts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL,
    created_at timestamptz DEFAULT now(),
    status text DEFAULT 'new'
  );

  ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
  
  PERFORM create_policy_if_not_exists(
    'Admins can read contacts',
    'contacts',
    'SELECT',
    ARRAY['authenticated'],
    '(jwt() ->> ''role''::text) = ''admin''::text'
  );
END $$;