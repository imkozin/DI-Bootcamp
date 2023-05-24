-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- )

-- INSERT INTO Book (title, author)
-- VALUES ('Alice In Wonderland', 'Lewis Carroll'),
--        ('Harry Potter', 'J.K Rowling'),
--        ('To Kill a Mockingbird', 'Harper Lee')

-- CREATE TABLE Student (
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(100) NOT NULL UNIQUE,
-- age INTEGER, 
-- CONSTRAINT age_value CHECK (age <= 15)
-- )

-- Insert students
-- INSERT INTO Student (name, age)
-- VALUES ('John', 12),
--        ('Lera', 11),
--        ('Patrick', 10),
--        ('Bob', 14);

-- CREATE TABLE Library (
--     book_fk_id INTEGER REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_fk_id INTEGER REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date DATE, -- DEFAULT NOW() NOT NULL
--     PRIMARY KEY (book_fk_id, student_fk_id)
-- )

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM BOOK WHERE title ILIKE '%alice%'), 
-- 		(SELECT student_id FROM student WHERE name = 'John'), '2022/02/15')

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM BOOK WHERE title ILIKE '%kill%'), 
-- 		(SELECT student_id FROM student WHERE name = 'Bob'), '2021/03/03')

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM BOOK WHERE title ILIKE '%alice%'), 
-- 		(SELECT student_id FROM student WHERE name = 'Lera'), '2021/05/23')

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM BOOK WHERE title ILIKE '%harry%'), 
-- 		(SELECT student_id FROM student WHERE name = 'Bob'), '2021/08/12')

-- Select all the columns from the junction table
-- SELECT * FROM Library

-- Select the name of the student and the title of the borrowed books
-- SELECT s.name, b.title 
-- FROM Student AS s
-- INNER JOIN Library AS l
-- ON l.student_fk_id = s.student_id
-- INNER JOIN Book AS b
-- ON l.book_fk_id = b.book_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age) AS avg_age
FROM Student AS s
JOIN Library AS l
ON s.student_id = l.student_fk_id
JOIN Book AS b
ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland'

-- Delete a student from the Student table, what happened in the junction table ?
-- DELETE FROM student WHERE name = 'Patrick' - Nothing he didn't borrow a book
-- SELECT * FROM Library
-- DELETE FROM STUDENT WHERE name = 'John' - there are info about 3 borrowed books since we put CASCADE for deleting value