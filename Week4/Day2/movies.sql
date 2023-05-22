-- CREATE TABLE movies(
-- 	movie_id SERIAL PRIMARY KEY,
-- 	movie_title VARCHAR(50) NOT NULL,
-- 	movie_story TEXT,
-- 	actor_playnig_id INTEGER REFERENCES actor (actor_id)
-- )

-- INSERT INTO movies (movie_title, movie_story, actor_playnig_id)
-- VALUES ('Gravity', 'Gravity is 2013 science fiction movie', 
-- 		(SELECT actor_id FROM actor WHERE last_name = 'Clooney'))


-- INSERT INTO movies (movie_title, movie_story, actor_playnig_id)
-- VALUES ('Ocean Eleven', 'Danny Ocean', 
-- 		(SELECT actor_id FROM actor WHERE last_name = 'Clooney'));
		
-- INSERT INTO movies (movie_title, movie_story, actor_playnig_id)
-- VALUES ('Beauty and the Beast', 'Bla Bla Bla', 
-- 		(SELECT actor_id FROM actor WHERE last_name = 'Damon'))

-- SELECT * FROM movies

-- SELECT first_name, last_name, movie_title
-- FROM actor
-- INNER JOIN movies ON actor_id = actor_playnig_id
-- WHERE last_name = 'Clooney'

-- SELECT last_name, movie_title
-- FROM actor
-- INNER JOIN movies ON actor_id = actor_playnig_id
-- WHERE movie_title ILIKE '%beauty%'

-- SELECT last_name, movie_title
-- FROM actor
-- LEFT JOIN movies ON actor_id = actor_playnig_id

-- SHOW ONLY COMMON ROWS
-- SELECT last_name, movie_title
-- FROM actor
-- RIGHT JOIN movies ON actor_id = actor_playnig_id

-- SELECT last_name, movie_title
-- FROM actor
-- FULL JOIN movies ON actor_id = actor_playnig_id