import psycopg2
#2 make connection

connection = psycopg2.connect(
    database="Hollywood", 
    user='postgres',
    password='root',
    host='localhost', #or IP address
    port='5432'
)

#3 open the cursor to start making transactions
cursor = connection.cursor()

#4 Make your queries
query = "SELECT * FROM actor"
cursor.execute(query)

#5 If the query is a select - retrieve the data
result = cursor.fetchall() # --> list of tuple
result = cursor.fetchone() # --> one tuple

# --> loop to display the data 

#6 If the query is a INSERT, DELETE, UPDATE, CREATE, ALTER, DROP
connection.commit() #saving the changes in the database

#7 Close the cursor, and close the connection
cursor.close()
connection.close()