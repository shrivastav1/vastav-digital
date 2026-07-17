/*
# Create leads table for form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `source` (text, not null) — which form: 'contact', 'audit', 'newsletter'
  - `name` (text, nullable) — submitter name
  - `email` (text, not null) — submitter email
  - `company` (text, nullable)
  - `website` (text, nullable)
  - `budget` (text, nullable)
  - `message` (text, nullable)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT only (public forms).
- No SELECT/UPDATE/DELETE for anon (only service role can read).
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text NOT NULL,
  name text,
  email text NOT NULL,
  company text,
  website text,
  budget text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
TO anon, authenticated WITH CHECK (true);
