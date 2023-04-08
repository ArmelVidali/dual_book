const endpoint = 'https://api-free.deepl.com/v2/translate';


const data = {
  auth_key: authKey,
  text: 'Hello, world. My name is autin', 
  target_lang: 'DE',
  
};

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(data)
})
.then(response => response.json())
.then(data => console.log(data.translations[0].text))
.catch(error => console.error(error));
