

export function deepL_translation(){

  var data = {
    auth_key: auth_key,
    text: document.getElementById("my_input").value, 
    target_lang: document.getElementById("translation_language").value,
  };

  let translation = fetch("https://api-free.deepl.com/v2/translate", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error(error));

  return translation
}