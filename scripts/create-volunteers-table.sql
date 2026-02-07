-- Create volunteers table
CREATE TABLE IF NOT EXISTS public.volunteers (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name character varying NOT NULL,
  last_name character varying NOT NULL,
  email character varying NOT NULL,
  phone character varying NOT NULL,
  interest character varying NOT NULL,
  availability character varying NOT NULL,
  skills text NOT NULL,
  status character varying DEFAULT 'pending'::character varying,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS volunteers_email_idx ON public.volunteers(email);
CREATE INDEX IF NOT EXISTS volunteers_status_idx ON public.volunteers(status);
CREATE INDEX IF NOT EXISTS volunteers_created_at_idx ON public.volunteers(created_at DESC);

-- Enable RLS
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow public to insert volunteers (for form submissions)
CREATE POLICY "Allow public insert" ON public.volunteers
  FOR INSERT WITH CHECK (true);

-- Create policy: Allow authenticated users to view all volunteers
CREATE POLICY "Authenticated can view all" ON public.volunteers
  FOR SELECT USING (auth.role() = 'authenticated');

-- Insert sample volunteer for testing
INSERT INTO public.volunteers (first_name, last_name, email, phone, interest, availability, skills, status)
VALUES (
  'John',
  'Doe',
  'john@example.com',
  '+233123456789',
  'education',
  'weekends',
  'Teaching, mentoring, community engagement',
  'approved'
)
ON CONFLICT DO NOTHING;
