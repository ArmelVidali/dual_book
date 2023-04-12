import {deepL_translation, get_word_definiton } from "./request.js";
import {format_translation} from "./formatting.js"


export var dictionnary = {}

var button = document.getElementById("translate_button")
var translated_text = document.getElementById("translation")





button.onclick = function(){
    let request_response = deepL_translation() 
    
    
     request_response.then(function(deepL_answer){ 
        var translated_text = deepL_answer.translations[0].text
        format_translation(translated_text)
        }
    )     

    /* let text = document.getElementById("my_input").value
    format_translation(text) */
}


translated_text.onclick = function(event){
    let word = encodeURIComponent(event.target.textContent.trim())
    let target_lang = document.getElementById("translation_language").value
    console.log(target_lang)

    get_word_definiton(target_lang, word)


}


