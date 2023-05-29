import re
import requests
from bs4 import BeautifulSoup
import pprint

response = requests.get('https://news.ycombinator.com/news')
soup = BeautifulSoup(response.text, 'html.parser')
links = soup.select('.st')
votes = soup.select('.score')
subtext = soup.select('.subtext')
print(votes)

def create_custom_hn(links, votes):
    hn = []
    for idx, item in enumerate(links):
        title = links[idx].getText()
        href = links[idx].get('href', None)
        vote = subtext[idx].select('.score')
        if len(vote):
            points = int(votes[0].getText().replace(' points', ''))
            if points > 99:
                hn.append({'title' : title, 'link' : href, 'votes' : points})

    return hn

pprint.pprint(create_custom_hn(links, votes))
