import psycopg2
from daily import get_countries

def create_table():
    try:
        conn = psycopg2.connect(
            database='bootcamp',
            user='ivankozin',
            password='2158310',
            host='localhost',
            port='5432'
        )
    except Exception as e:
        print(f'Error: {e}')
        return 'ERROR'
    cur = conn.cursor()
    try:
        query = """
        CREATE TABLE countries (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(50) NOT NULL, 
        capital VARCHAR(50) NOT NULL,
        flag_code VARCHAR(50) NOT NULL, 
        subregion VARCHAR(50) NOT NULL, 
        population INTEGER
    )
        """
        cur.execute(query)
    except:
        return None
    
    conn.commit()
    conn.close()
    cur.close()

# create_table()
# get_countries()
