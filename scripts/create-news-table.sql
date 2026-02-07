-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL,
  excerpt VARCHAR NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR NOT NULL,
  image_url VARCHAR,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create index for faster queries
CREATE INDEX idx_news_published ON news(published);
CREATE INDEX idx_news_created_at ON news(created_at DESC);
CREATE INDEX idx_news_featured ON news(featured);

-- Enable Row Level Security
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public can read published news"
  ON news
  FOR SELECT
  USING (published = true);

-- Create policy for admin to manage all news
CREATE POLICY "Service role can manage all news"
  ON news
  USING (true)
  WITH CHECK (true);

-- Insert sample news article
INSERT INTO news (title, excerpt, content, category, featured, published, published_at)
VALUES (
  'Better Dream Foundation Ghana boosts health care in Pusiga with generous donations',
  'The foundation has made significant contributions to improve healthcare infrastructure and services in Pusiga, providing essential medical supplies and equipment to local health facilities.',
  'Better Dream Foundation Ghana has announced a major healthcare initiative in the Pusiga district. Through generous donations and community partnerships, the foundation has provided essential medical equipment and supplies to local health facilities. This initiative aims to improve healthcare access and quality of life for residents in the region. The foundation remains committed to supporting sustainable development in healthcare across Ghana.',
  'Health',
  true,
  true,
  NOW()
);
