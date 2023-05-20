
# Python program to check the
# loading time of the website
  
# Importing the libraries
# from time import time
# from urllib.request import urlopen

# # Obtaining the URL of website
# website = urlopen('https://google.com/')

# # Return the number of seconds
# # passed since epoch
# open_time = time()

# # Read the complete website
# output = website.read()

# # Return the number of seconds 
# # passed since epoch
# close_time = time()

# # Close the website
# website.close()

# print('The loading time of website is', round(close_time-open_time,3),'seconds')


import requests
import time

def loading_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    load_time = end_time - start_time
    return load_time

websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]
for site in websites:
    load_time = loading_time(site)
    print(f"Page loading time for site {site}: {round(load_time, 3)} seconds")
