/**
 * get translated text, parse it to extract sentences and then output them to a text area
 * 
 * @param {*} data_translation : clean translated text 
 */
export function format_translation(data_translation){
        var translation_box = document.getElementById("translation")
        var splitted_translation =  data_translation.split(/[.?!]/)

        // Parse the translation and write them to a newbox
        var translation = Object.values(splitted_translation)
        // get all ponctuation to later insert them before a break line
        var ponctuation = data_translation.match(/[.!?]/g);
        translation_box.value = ""
        for(let i = 0; i < translation.length ; i ++){
          if((translation[i].replace(/\s+/g, ' ') + ponctuation[i] +"\n").startsWith(" ")){
            translation_box.value += (translation[i].replace(/\s+/g, ' ').substring(1) + ponctuation[i] +"\n")
          }
          else{
            translation_box.value += (translation[i].replace(/\s+/g, ' ') + ponctuation[i] +"\n")
          }
          
        } 

        //do the same for the original text, to troubleshoot text with break line
        var translation_input = document.getElementById("my_input").value
        var splitted_translation_input =  translation_input.split(/[.?!]/)
        var matches = translation_input.match(/[.!?]/g);

        var splitted_translation_input_array = Object.values(splitted_translation)
        for(let sentences of matches){
                console.log(sentences)            
        }




      
}