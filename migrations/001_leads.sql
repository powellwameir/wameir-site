-- Wameir leads table (spec §5A). Run against Neon before enabling the form in
-- production. Encrypted at rest by the provider; access limited to the founders (§14).
--
-- Apply with e.g.:  psql "$DATABASE_URL" -f migrations/001_leads.sql

CREATE TABLE IF NOT EXISTS leads (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  audience    TEXT NOT NULL CHECK (audience IN ('seller', 'community')),
  name        TEXT NOT NULL,
  company     TEXT,
  email       TEXT NOT NULL,
  phone       TEXT,
  message     TEXT NOT NULL,
  source      TEXT
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
