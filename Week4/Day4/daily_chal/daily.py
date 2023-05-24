import requests, json, psycopg2, random

def get_countries():
    conn = psycopg2.connect(
            database='bootcamp',
            user='ivankozin',
            password='2158310',
            host='localhost',
            port='5432'
        )
    cur = conn.cursor()

    response = requests.get('https://restcountries.com/v3.1/all')
    countries_list = response.json()

    for i in range(10):
        choice = random.choice(countries_list)
        name = choice['name']['official'].replace("'","")
        capital = choice['capital'][0].replace("'","")
        flag = choice['flags']['png']
        subregion = choice['subregion'].replace("'","")
        population =  choice['population']
        query = f"""
        INSERT INTO countries (name, capital, flag_code, subregion, population)
        VALUES ('{name}', '{capital}', '{flag}', '{subregion}', '{population}')"""
        cur.execute(query)

    conn.commit()
    conn.close()
    cur.close()
    

# get_countries()

def add_to_json():
    # API endpoint for fetching country data
    api_url = 'https://restcountries.com/v3.1/all'

    # Fetch country data from the API
    response = requests.get(api_url)
    countries = response.json()

    # Select 10 random countries
    random_countries = random.sample(countries, k=10)
    
    # Extract specific attributes for each country
    countries_list = []
    for country in random_countries:
        selected_country = {
            'name': country['name']['official'],
            'capital': country.get('capital', [0]),
            'flag': country['flags']['png'],
            'subregion': country.get('subregion'),
            'population': country.get('population')
        }
        countries_list.append(selected_country)

    # Write the countries data to a JSON file
    with open('Week4/Day4/daily_chal/countries.json', 'w') as json_file:
        json.dump(random_countries, json_file, indent=4)


# Call the function to write countries to the JSON file
add_to_json()

