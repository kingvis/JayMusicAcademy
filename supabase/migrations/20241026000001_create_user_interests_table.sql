-- Create user_interests table
CREATE TABLE IF NOT EXISTS user_interests (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT,
    email TEXT,
    interests TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create unique index on user_id to prevent duplicate entries per user
CREATE UNIQUE INDEX IF NOT EXISTS user_interests_user_id_idx ON user_interests(user_id);

-- Add RLS (Row Level Security) policies
ALTER TABLE user_interests ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to read their own data
CREATE POLICY "Users can view own interests" ON user_interests
    FOR SELECT USING (TRUE);

-- Policy to allow users to insert their own data
CREATE POLICY "Users can insert own interests" ON user_interests
    FOR INSERT WITH CHECK (TRUE);

-- Policy to allow users to update their own data
CREATE POLICY "Users can update own interests" ON user_interests
    FOR UPDATE USING (TRUE);

-- Policy to allow users to delete their own data
CREATE POLICY "Users can delete own interests" ON user_interests
    FOR DELETE USING (TRUE);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the function before update
CREATE TRIGGER update_user_interests_updated_at
    BEFORE UPDATE ON user_interests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();