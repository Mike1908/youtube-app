export async function searchYouTube(q) {
  q = encodeURIComponent(q);
  const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "cec5e37f39msh94503cb3fcc77edp1b0aa5jsn8a7bdc174061",
  "x-rapidapi-host": "youtube-search-results.p.rapidapi.com"
    }
  });
  const body = await response.json();
  //console.log(body);
  return body.items.filter(item => item.type === 'video');
}