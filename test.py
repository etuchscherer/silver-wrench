from urllib.parse import urlparse, unquote
from typing import Dict, List
import json, urllib.request

def fetch_question():
    url = "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple"

    parsed_url = urlparse(url)

    if parsed_url.scheme and parsed_url.netloc:
        return send_request(url)
    else:
        print('error while fetching question')

def send_request(url: str):
    with urllib.request.urlopen(url) as payload:
        return parse_results(payload)

def parse_results(payload) -> List[Dict[str, str]]:
    return json.load(payload)['results']



# print(test())

url = "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple"
a = fetch_question()
print(a)