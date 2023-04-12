const auth_key = 'a8db5aeb-3207-c596-329c-1b074f22227a:fx';


/**
 * Sends a request to deepL API
 * 
 * @returns translation
 */
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


/**
 * sends a request to https://dictionaryapi.dev, add the results to a global dictionnary to avoid further requests
 * 
 */
export function get_word_definiton(target_language, word){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "",
      'X-RapidAPI-Host': 'lexicala1.p.rapidapi.com'

    }
  };
  let definition =  fetch(`https://lexicala1.p.rapidapi.com/search?text=${word}`, options)
                      .then(response => response.json())
                      .then(response => {
                        return response
                      })
                      .catch(err => console.error(err));
  console.log(definition)
  return definition
  


}