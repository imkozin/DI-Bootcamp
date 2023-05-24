import psycopg2

def manage_connection(query):
    try:
        connection = psycopg2.connect(
            host='localhost',
            port='5432',
            database='Restaurant',
            user='ivankozin',
            password='2158310'
        )
        with connection.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
            return result
    except Exception as e:
        print(e)
    finally:
        connection.close()