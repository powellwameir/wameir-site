-- Widen the lead audience to the four-way triage selector (founder / board /
-- resident / other). Apply after 001_leads.sql and before enabling the form.
--
-- Apply with e.g.:  psql "$DATABASE_URL" -f migrations/002_lead_audience.sql

BEGIN;

ALTER TABLE leads DROP CONSTRAINT IF EXISTS leads_audience_check;

UPDATE leads SET audience = 'founder'  WHERE audience = 'seller';
UPDATE leads SET audience = 'resident' WHERE audience = 'community';

ALTER TABLE leads
  ADD CONSTRAINT leads_audience_check
  CHECK (audience IN ('founder', 'board', 'resident', 'other'));

COMMIT;
