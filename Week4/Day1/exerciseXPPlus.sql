-- CREATE TABLE students (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- SET datestyle TO DMY

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea',	'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980')

-- SELECT * from students

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Ivan', 'Kozin', '28/01/1994')

-- SELECT id, first_name, last_name, TO_CHAR(birth_date, 'DD/MM/YYYY') AS birth_date
-- FROM students

-- Fetch all of the students first_names and last_names.
-- SELECT first_name, last_name FROM students

-- Fetch the student which id is equal to 2.
-- SELECT first_name, last_name FROM students WHERE id = 2

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

-- Fetch the students whose first_names contain the letter a.
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'

-- Fetch the students whose first_names start with the letter a.
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%'

-- Fetch the students whose first_names end with the letter a.
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '_%a%'

-- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT first_name, last_name FROM students WHERE id in (1, 3)

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT id, first_name, last_name, TO_CHAR(birth_date, 'DD/MM/YYYY') AS birth_date FROM students WHERE birth_date >= '01/01/2000'

-- Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT id, first_name, last_name, TO_CHAR(birth_date, 'DD/MM/YYYY') AS birth_date FROM students WHERE id <= 4 ORDER BY last_name ASC
-- Fetch the details of the youngest student.
-- SELECT id, first_name, last_name, TO_CHAR(birth_date, 'DD/MM/YYYY') AS birth_date FROM students ORDER BY birth_date DESC LIMIT 1
-- Fetch three students skipping the first two students.
SELECT id, first_name, last_name, TO_CHAR(birth_date, 'DD/MM/YYYY') AS birth_date
FROM students
ORDER BY id
OFFSET 2
LIMIT 3
