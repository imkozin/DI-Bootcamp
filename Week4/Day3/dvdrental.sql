-- Select all columns from the "customer" table:
-- SELECT * FROM customer;

-- Display the names (first_name, last_name) using an alias named "full_name":
-- SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- Select all unique create_date values from the "customer" table:
-- SELECT DISTINCT create_date FROM customer;

-- Get all customer details from the customer table, displayed in descending order by their first name:
-- SELECT * FROM customer ORDER BY first_name DESC;

-- Get the film ID, title, description, year of release, and rental rate in ascending order according to their rental rate:
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;

-- Get the address and phone number of all customers living in the Texas district (from the "address" table):
-- SELECT address, phone
-- FROM address
-- WHERE district = 'Texas';

-- Retrieve movie details where the movie ID is either 15 or 150:
-- SELECT *
-- FROM film
-- WHERE film_id IN (15, 150);

-- Check if your favorite movie exists in the database and get its details (from the "film" table):
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = '500';

-- Get the film ID, title, description, length, and rental rate of all movies starting with the two first letters of your favorite movie:
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title ILIKE '5%';

-- Find the 10 cheapest movies:
-- SELECT film_id, title, description, rental_rate
-- FROM film
-- ORDER BY rental_rate
-- LIMIT 10;

-- Find the next 10 cheapest movies (excluding the previous 10):
-- SELECT film_id, title, description, rental_rate
-- FROM film
-- ORDER BY rental_rate
-- OFFSET 10
-- LIMIT 10;

-- Join the data in the "customer" table and the "payment" table, displaying first name, last name, amount, and date of every payment made by a customer, ordered by customer ID:
-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer AS c
-- JOIN payment AS p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id;

-- Get all the movies that are not in inventory:
-- SELECT *
-- FROM film
-- WHERE film_id NOT IN (
--     SELECT DISTINCT inventory.film_id
--     FROM inventory
-- );

-- Find which city is in which country:
-- SELECT city, country
-- FROM city
-- JOIN country ON city.country_id = country.country_id;

-- Get the customers ID, names (first and last), the amount, and the date of payment, ordered by the ID of the staff member who sold them the DVD:
-- SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer AS c
-- JOIN payment AS p ON c.customer_id = p.customer_id
-- ORDER BY p.staff_id;

-- Get a list of all film languages.
-- SELECT name FROM language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.
-- SELECT title, description, name
-- FROM film AS f
-- INNER JOIN language AS l
-- ON f.language_id = l.language_id
-- SELECT title, description, name
-- FROM film AS f
-- RIGHT JOIN language AS l
-- ON f.language_id = l.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
-- 	film_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(100) NOT NULL
-- );

-- INSERT INTO new_film (title)
-- VALUES 
-- ('John Wick'),
-- ('Pirates of the Caribbean'),
-- ('Shutter Island'),
-- ('Ted'),
-- ('Catch me if you can')

-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY,
-- 	film_id INTEGER NOT NULL,
-- 	language_id INTEGER NOT NULL,
-- 	title VARCHAR(100) NOT NULL,
-- 	score INTEGER NOT NULL,
-- 	review_text TEXT,
-- 	last_update TIMESTAMP DEFAULT current_timestamp,
-- 	CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id),
-- 	CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(film_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	CONSTRAINT score_value CHECK (score > 0 and score <= 10)
-- )

-- select * from customer_review
-- SELECT * FROM language
-- SELECT * FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id
-- WHERE film_id = 384
-- DELETE FROM new_film WHERE title ILIKE '%pirates%'
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- (2, 1, 'Boring movie', 1, 'Too much Johnny Depp') RETURNING *
-- (4, 1, 'My best friend', 7, 'Stupid jokes, but very funny') RETURNING *

-- UPDATE film
-- SET language_id = 6
-- WHERE film_id = 384

-- SELECT * FROM customer WHERE first_name ILIKE '%iv%'
-- INSERT INTO customer (first_name, last_name, store_id, address_id)
-- VALUES ('Ivan', 'Kozin', 1, 1)

-- DROP TABLE customer_review

-- SELECT * from rental WHERE return_date is NULL
-- SELECT inventory.film_id, film.title, film.replacement_cost 
-- FROM inventory
-- INNER JOIN film
-- ON inventory.film_id = film.film_id

-- SELECT * FROM rental
-- INNER JOIN inventory
-- ON inventory.inventory_id = rental.inventory_id
-- LEFT JOIN film
-- ON inventory.film_id = film.film_id
-- WHERE return_date is NULL
-- ORDER BY replacement_cost DESC
-- LIMIT 30

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- SELECT f.film_id, f.title, f.fulltext 
-- FROM film_actor AS fa
-- INNER JOIN film AS f
-- ON f.film_id = fa.film_id
-- WHERE (actor_id =(
-- 	SELECT actor_id FROM actor 
-- 	WHERE (first_name = 'Penelope' 
-- 		   AND last_name = 'Monroe')
-- 	AND f.description ILIKE '%sumo%'
-- 	))

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT * FROM film AS f
-- INNER JOIN film_category AS fc
-- ON f.film_id = fc.film_id
-- INNER JOIN category AS c
-- ON c.category_id = fc.category_id
-- WHERE c.name ILIKE '%documentary%' and length < 60 and rating = 'R'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT * FROM inventory AS i
-- INNER JOIN film AS f
-- ON f.film_id = i.film_id
-- INNER JOIN rental AS r
-- ON r.inventory_id = i.inventory_id
-- INNER JOIN customer AS c
-- ON c.customer_id = r.customer_id
-- WHERE c.last_name = 'Mahan' 
-- AND c.first_name = 'Matthew' 
-- AND f.rental_rate > 4
-- AND return_date 
-- BETWEEN '2005/07/28' AND '2005/08/01'

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT f.film_id, f.title, f.description FROM inventory AS i
-- INNER JOIN film AS f
-- ON f.film_id = i.film_id
-- INNER JOIN rental AS r
-- ON r.inventory_id = i.inventory_id
-- INNER JOIN customer AS c
-- ON c.customer_id = r.customer_id
-- WHERE c.last_name = 'Mahan' 
-- AND c.first_name = 'Matthew'
-- AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
-- ORDER BY replacement_cost DESC
-- LIMIT 1