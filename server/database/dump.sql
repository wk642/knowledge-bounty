-- create database

-- DROP the database first in case there's an existing one
DROP DATABASE tornado;
-- CREATE the database now
CREATE DATABASE tornado;

-- connect to the database
\connect tornado;

-- CREATE tables 
-- USERS - one to many 
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- POSTS - one to many
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id), 
  title text,
  content text, -- can't use entry, it is a keyword
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ACHIEVEMENTS - one to many
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  ef VARCHAR,
  badges VARCHAR, -- might change this to json because what if there's multiple badges
  tornados INTEGER
);

-- USER_ACHIEVEMENT - many to many
CREATE TABLE user_achievemnt (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  achievements_id UUID REFERENCES achievements(id)
)