/**
 * get translated text, parse it to extract sentences and then output them to a text area
 * 
 * @param {*} data_translation : clean translated text 
 */
export function format_translation(data_translation){
        var original_text_box = document.getElementById("my_input")
        var translation_box = document.getElementById("translation")

        var original_sentences_array = parse_text(original_text_box.value)
        var traduced_sentences_array = parse_text(data_translation)
        
        for(let sentence of traduced_sentences_array){
          translation_box.value += sentence + "\n" + "\n"
        }

        original_text_box.value = ""
        
        for(let sentence of original_sentences_array){
          original_text_box.value += sentence + "\n" + "\n"
        }
}

/**
 * Parse a text to extract sentences, delimited by [  ? ! . ]
 * Deletes useless spaces
 * 
 * @param {string} text 
 * @return {Array} Array of sentences
 */
function parse_text(text){
  var parsed_text = [[]]
  var flag = true
  var counter = 0
  var text_to_push = ""
  text = text.replace(/\.{3,}/g, 'µ');
  for(let i  = 0; i < text.length ; i++){

    // a corriger, pas ouf la triple condition. Pourquoi text[i].includes("?","!",".") marche pas?
    if(text[i].includes("!") == false && text[i].includes("?") == false && text[i].includes(".") == false  ){
      text_to_push += text[i]      
    }

    // pareil
    if(text[i].includes(".") || text[i].includes("!") || text[i].includes("?")  ){          
        text_to_push += text[i] 
        parsed_text[counter].push(text_to_push)
        // removes all return line and uncessary spaces
        parsed_text[counter][0] = (parsed_text[counter][0].replace(/\n\s*/g, ' ')).trim()
        parsed_text.push([])
        counter += 1
        text_to_push = ""
    } 

  }
  return parsed_text

}