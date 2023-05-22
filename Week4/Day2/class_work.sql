-- CREATE TABLE city_info 
-- ( event_datetime timestamp NOT NULL, 
-- city VARCHAR(50) NOT NULL, 
-- temperature decimal NOT NULL, 
-- light decimal NOT NULL,
-- airquality_raw decimal NOT NULL, 
-- sound decimal NOT NULL, 
-- humidity decimal NOT NULL, 
-- dust decimal NOT NULL )

-- COPY city_info (event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
-- FROM '/Users/ivankozin/Desktop/city_info.csv' DELIMITER ',' CSV HEADER;

-- SELECT * FROM city_info
-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
-- SELECT COUNT(*) from city_info

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- SELECT temperature FROM city_info WHERE city = 'Boston' and event_datetime = '2015/03/01 11:00:00' -- 3.08167688589856

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
-- SELECT EXTRACT(DAY FROM event_datetime) AS day, EXTRACT(HOUR FROM event_datetime) AS hour
-- FROM city_info 
-- WHERE city = 'San Francisco' and temperature BETWEEN 28 and 30

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)?
-- SELECT event_datetime, city, sound FROM city_info ORDER BY sound DESC LIMIT 1

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? 
-- SELECT event_datetime, city, sound FROM city_info ORDER BY sound ASC LIMIT 1

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- SELECT dust FROM city_info 
-- WHERE city = 'San Francisco' 
-- AND DATE(event_datetime) = '2015/03/26'
-- AND EXTRACT(HOUR FROM event_datetime) > 20

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT city, humidity, event_datetime FROM city_info WHERE city = 'Geneva' and (humidity < 40 or humidity > 60)

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
-- SELECT city, light, TO_CHAR(event_datetime, 'day')
-- FROM city_info
-- WHERE light = (SELECT MAX(light) FROM city_info)

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
SELECT DISTINCT city FROM city_info 
WHERE city ILIKE 'S%'

-- SELECT * FROM city_info
-- 10. Add to the table, todays information in Israel - of this very hour.
-- INSERT INTO city_info (event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
-- VALUES ('2023/05/22 11:10:00', 'Tel Aviv', 31.0123456789, 158.76576576, 0.131231241, 1453.4234234, 37.1312314, 1000.32131244)