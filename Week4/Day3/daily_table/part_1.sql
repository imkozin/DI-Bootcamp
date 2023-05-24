-- CREATE TABLE Customer (
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE Customer_Profile (
--     id SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INT UNIQUE REFERENCES Customer (id)
-- )

-- INSERT INTO Customer (first_name, last_name)
-- VALUES 
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- INSERT INTO Customer_Profile (isLoggedIn, customer_id)
-- VALUES 
-- ((SELECT true FROM customer
-- WHERE first_name = 'John'),
--  (SELECT id FROM customer
-- WHERE first_name = 'John'))

-- INSERT INTO Customer_Profile (isLoggedIn, customer_id)
-- VALUES 
-- ( DEFAULT, (SELECT id FROM customer
-- WHERE first_name = 'Jerome'))

-- select * from customer_profile
-- The first_name of the LoggedIn customers
-- SELECT c.first_name
-- FROM customer AS c
-- JOIN customer_profile AS cp
-- ON cp.customer_id = c.id
-- WHERE isLoggedIn = true

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- SELECT c.first_name, cp.isLoggedIn
-- FROM customer AS c
-- LEFT JOIN customer_profile AS cp
-- ON cp.customer_id = c.id

-- The number of customers that are not LoggedIn
-- SELECT COUNT(*) as number
-- FROM customer AS c
-- JOIN customer_profile AS cp
-- ON cp.customer_id = c.id
-- WHERE isLoggedIn = false or isLoggedIn is NULL 


