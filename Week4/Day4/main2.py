import psycopg2

def manage_connection(query):
# connect to the database
    try:
        connection = psycopg2.connect(
            host='localhost',
            port = '5432',
            database='Hollywood',
            user='ivankozin',
            password='2158310'
        )
        with connection:
            with connection.cursor() as cursor:   #it will close the cursor automatically
                 if 'SELECT' in query:
                    cursor.execute(query)
                    result = cursor.fetchall()
                    return result
                 else:
                    cursor.execute(query)
                    connection.commit()
    except:
        pass
    finally:
        connection.close() #it will close the connection automatically

def insert_actor(*info):
    query_user = f"INSERT INTO actor (first_name, last_name, age, number_oscars, salary, nationality) VALUES {info}"
    manage_connection(query_user)
insert_actor('Jackie', 'Chan', '1963-12-18', 3, 200000, 'Chinese')

def add_column(column_name):
    query_user = f"ALTER TABLE actor ADD COLUMN {column_name}"
    manage_connection(query_user)
add_column('height')