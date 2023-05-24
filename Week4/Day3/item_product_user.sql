-- CREATE TABLE product_orders (
-- 	order_id SERIAL PRIMARY KEY,
-- 	order_date DATE,
-- 	customer_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	order_id INT REFERENCES product_orders (order_id),
-- 	item VARCHAR(50) NOT NULL,
-- 	price DECIMAL NOT NULL
-- )

-- SELECT * from product_orders
-- SELECT * FROM items

-- INSERT INTO product_orders (order_id, order_date, customer_name)
-- VALUES 
-- (1, '2023-05-01', 'John Doe'),
-- (2, '2023-05-05', 'Jane Smith'),
-- (3, '2023-05-10', 'Peter Parker')

-- INSERT INTO items (order_id, item, price)
-- VALUES 
-- (1, 'IPhone', 1000),
-- (2, 'MacBook', 2000),
-- (1, 'AirPods', 200),
-- (3, 'AppleWatch', 800),
-- (2, 'IPad', 1500),
-- (3, 'IPhone', 1200)


-- Create a function that returns the total price for a given order.
-- SELECT SUM(price) AS total_price
-- FROM product_orders AS po
-- RIGHT JOIN items AS i
-- ON i.order_id = po.order_id
-- WHERE po.order_id = 2
-- GROUP BY customer_name

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL
-- )

-- ALTER TABLE product_orders
-- ADD COLUMN user_id INT REFERENCES users(user_id)

-- INSERT INTO users (username, email)
-- VALUES 
-- ('john.doe', 'john.doe@example.com'),
-- ('jane.smith', 'jane.smith@example.com'),
-- ('alex.wilson', 'alex.wilson@example.com'),
-- ('spiderman', 'peter.parker@example.com')

-- SELECT SUM(i.price) AS total_price
-- FROM product_orders AS po
-- JOIN items AS i 
-- ON i.order_id = po.order_id
-- LEFT JOIN users AS u
-- ON u.user_id = po.user_id
-- WHERE u.user_id = 1 AND po.order_id = 1

-- select * from items