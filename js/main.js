import { deepL_translation } from "./request.js";
import {format_translation} from "./formatting.js"

var button = document.getElementById("translate_button")


button.onclick = function(){
    let request_response = deepL_translation()
    
    request_response.then(function(deepL_answer){ 
        var translated_text = deepL_answer.translations[0].text
        format_translation(translated_text)
        }
    )    
}