import {deepL_translation, get_word_definiton, chat_gpt_request } from "./request.js";
import {format_translation} from "./formatting.js"


export var dictionnary = {}

var button = document.getElementById("translate_button")
var translated_text = document.getElementById("translation")





button.onclick = function(){
    /* let request_response = deepL_translation()  */
    let text = document.getElementById("my_input").firstChild

    let translateText = async (text) => {
        try {
          const response = await fetch('/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
          });
      
          if (!response.ok) {
            throw new Error('Translation request failed');
          }
      
          const translatedText = await response.json();
          return translatedText;
        } catch (error) {
          console.error('An error occurred:', error);
          throw error;
        }
      };

    
    translateText(text)
      .then((translatedText) => {
        console.log('Translated text:', translatedText);
      })
      .catch((error) => {
        console.error('Translation failed:', error);
      });
}


translated_text.onclick = function(event){
    let word = encodeURIComponent(event.target.textContent.trim())
    let target_lang = document.getElementById("translation_language").valu

    get_word_definiton(target_lang, word)


}


