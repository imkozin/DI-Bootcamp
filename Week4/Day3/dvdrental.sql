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
