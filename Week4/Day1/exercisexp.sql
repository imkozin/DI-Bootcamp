-- CREATE TABLE customers (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- )

-- SELECT * FROM customers

-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- SELECT * FROM customers
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE last_name = 'Smith'
-- output is an empty table

-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name = 'Jones'

-- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE not first_name = 'Scott' 

-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item VARCHAR(100) NOT NULL,
-- 	price SMALLINT NOT NULL DEFAULT 0
-- )

-- SELECT * FROM items
-- INSERT INTO items (item, price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80)

-- All the items
-- SELECT * FROM items

-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE price > 80

-- All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE price <= 300

-- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE price >= 80 ORDER BY price DESC

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC

