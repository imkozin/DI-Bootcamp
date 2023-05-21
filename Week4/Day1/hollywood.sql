-- CREATE TABLE actor (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	birth_date DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL DEFAULT 0
-- )

-- SELECT all the columns from the table
-- SELECT * FROM actor 

-- if we run SELECT first_name, last_name FROM actor 
-- it will display only chosen columns

-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Georges', 'Cloney', '1976-03-12', 2)

-- SELECT * FROM actor 

-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars)
-- VALUES 
-- ('Brad', 'Pitt', '1980-04-22', 1),
-- ('Matt', 'Damon', '1982-11-22', 2)

-- SELECT * FROM actor 

-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Jennifer', 'Lawrence', '1990-08-19', 1)

-- SELECT * FROM actor 

-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Amber', 'Heard', '1986-04-22', 0)

-- SELECT * FROM actor 

-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars)
-- VALUES 
-- ('Leonardo', 'DiCaprio', '1974-11-11', 1),
-- ('Ben', 'Affleck', '1972-08-15', 2),
-- ('Johnny', 'Depp', '1963-06-09', 0)

-- SELECT * FROM actor 
-- select an actor which firstname is ... aor lastname is ...

-- SELECT first_name, last_name FROM actor WHERE first_name = 'Jennifer' or last_name = 'Cloney'

-- SELECT first_name, last_name,  FROM actor WHERE number_oscars >= 2

-- SELECT * FROM actor ORDER BY last_name ASC

-- SELECT * FROM actor ORDER BY last_name ASC, first_name DESC

-- limit 1 the first one apperas, (the oldest)
-- SELECT * FROM actor ORDER BY birth_date ASC LIMIT 1

--born after 1980
-- SELECT * FROM actor WHERE EXTRACT(YEAR from birth_date) >= 1980

-- SELECT * FROM actor WHERE first_name LIKE '%a%'

-- SELECT * FROM actor WHERE first_name ILIKE '%A%'

-- update the actor and return the whole row modified
-- UPDATE actor
-- SET last_name = 'Clooney'
-- WHERE actor_id = 1
-- RETURNING *

-- UPDATE actor
-- SET birth_date = '1961-05-06'
-- WHERE actor_id = 1
-- RETURNING *

-- UPDATE actor
-- SET first_name = 'George'
-- WHERE actor_id = 1
-- RETURNING *

-- SELECT * from actor ORDER BY actor_id

-- DELETE from actor
-- WHERE actor_id = 5
-- RETURNING *

-- INSET INTO actor 
-- SELECT * from actor ORDER BY actor_id

-- ALTER TABLE actor 
-- ADD COLUMN nationality VARCHAR(200),
-- ADD COLUMN salary INTEGER

-- SELECT * from actor ORDER BY actor_id

-- update all actors salary multiplied by number of oscars
-- UPDATE	actor
-- SET salary = 1000000 * number_oscars
-- RETURNING *

-- UPDATE actor
-- SET nationality = 'American'
-- WHERE actor_id IN (1, 2, 3)
-- RETURNING *

-- update the nationality all other not in range of 3
-- UPDATE actor
-- SET nationality = 'FRENCH'
-- WHERE actor_id NOT IN (1, 2, 3)
-- RETURNING *

-- SELECT * from actor ORDER BY actor_id

-- update the nationality which actor id is below 7
-- UPDATE actor
-- SET nationality = 'ISRAELI'
-- WHERE actor_id < 7
-- RETURNING *

-- SELECT * from actor ORDER BY actor_id

-- The first 4 actors
-- SELECT * from actor WHERE actor_id <= 4

-- The first 4 actors ordered in descending order of the last_name (ie. sorted DESCENDING by the "last_name" column))
-- SELECT * from actor WHERE actor_id <= 4 ORDER BY last_name DESC

-- The actors that have the letter 'e' in their first_name
-- SELECT * from actor WHERE first_name LIKE '%e%'

-- The actors that got at least 5 oscars
-- INSERT INTO actor (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Clint', 'Eastwood', '1930-05-31', 5)
-- SELECT * from actor WHERE number_oscars >= 5

-- SELECT * from actor ORDER BY actor_id

-- Update the first name of Matt Damon to "Maty"
-- UPDATE actor
-- SET first_name = 'Maty'
-- WHERE actor_id = 3
-- RETURNING *

-- Update the number of oscars of George Clooney to 4, and return the updated record
-- UPDATE actor
-- SET number_oscars = 4
-- WHERE first_name = 'George'
-- RETURNING *

-- Rename the 'age' column by 'birthdate'
-- ALTER TABLE actor
-- RENAME COLUMN birth_date TO age

-- SELECT * from actor ORDER BY actor_id
-- Delete one actor and return it
-- DELETE from actor WHERE last_name = 'Depp'
-- INSERT INTO actor (first_name, last_name, age, number_oscars, nationality)
-- VALUES ('Johhny', 'Depp', '1963-06-09', 0, 'American')

-- SELECT * from actor ORDER BY actor_id

-- SELECT COUNT(actor_id) FROM actor 

-- INSERT INTO actor (first_name, last_name, age, number_oscars, nationality, salary)
-- VALUES ('Margot', 'Robbie', 0, 1000000)

-- ERROR:  INSERT has more target columns than expressions
-- LINE 163: ...actor (first_name, last_name, age, number_oscars