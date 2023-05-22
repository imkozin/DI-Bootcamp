CREATE TABLE city_info 
( event_datetime timestamp NOT NULL, 
city VARCHAR(50) NOT NULL, 
temperature decimal NOT NULL, 
light decimal NOT NULL,
airquality_raw decimal NOT NULL, 
sound decimal NOT NULL, 
humidity decimal NOT NULL, 
dust decimal NOT NULL )