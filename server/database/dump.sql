-- create database

-- DROP the database first in case there's an existing one
DROP DATABASE tornado;
-- CREATE the database now
CREATE DATABASE tornado;

-- connect to the database
\connect tornado;

-- CREATE tables 
-- USERS - one to many 
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR UNIQUE, -- don't wnat to have duplicated
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- POSTS - one to many
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id), 
  title text,
  content text,
  category varchar,
  subcategory varchar,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ACHIEVEMENTS - one to many
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  points integer,
  title varchar
);

-- USER_ACHIEVEMENT - many to many
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  achievement_id UUID REFERENCES achievements(id)
)