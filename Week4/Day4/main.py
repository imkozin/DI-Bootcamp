import psycopg2

# connect to the database using connect() function
connection = psycopg2.connect(
            database = "Hollywood",
            user = 'ivankozin', #postgres
            password = '2158310', #root by Default
            host = 'localhost', #for IP address
            port = '5432'
        )
# creating a cursor object
cursor = connection.cursor()

# def manage_connection(query):
#     try:
#         connection = psycopg2.connect(
#             database = "Hollywood",
#             user = 'ivankozin', #postgres
#             password = '2158310', #root by Default
#             host = 'localhost', #for IP address
#             port = '5432'
#         )
        
#         with connection:
#             with connection.cursor() as cursor: # it closes the transaction / start executing / cursor needed to execute SQL and receive databank / it closes automatically when it's done
#                 cursor.execute(query) # executing transaction
#                 result = cursor.fetchall()
#                 return result
#     except: # Exception as e:
#         pass # print(e)
#     finally:
#         # if connection != None
#         connection.close() # need to specifically  close the connection

# def get_all_actors():
#     query_user = 'SELECT * FROM actor'
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f'The actor is {actor[1]} {actor[2]}. He is {actor[-2]}')

# get_all_actors()

# def get_actors_salary_higher(user_answer):
#     query_user = f"SELECT * FROM actor WHERE salary > {user_answer}"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f'The actor is {actor[1]} {actor[2]}. His salary is {actor[-1]}')

# get_actors_salary_higher(1000000)

# def get_actors_by_lastname(lastname):
#     query_user = f"SELECT * FROM actor WHERE last_name = '{lastname}'"
    
#     cursor.execute(query_user)
#     result = cursor.fetchone()
#     print(result)

# get_actors_by_lastname('Clooney')

def insert_actor(*info):
    query_user = f"""INSERT INTO actor (first_name, last_name, birth_date, number_oscars, salary, nationality)
    VALUES {info}"""
    
    cursor.execute(query_user)
    connection.commit()

insert_actor('Jackie', 'Chan', '1967-03-12', 1, 3000000, 'Chineese')


# def get_all_actors():
#     query = 'SELECT * FROM actor'
#     cursor.execute(query)
#     result = cursor.fetchall()

#     for actor in result:
#         print(f'The actor is {actor[1]} {actor[2]}. He is {actor[-2]}')

# get_all_actors()


cursor.close()
connection.close()