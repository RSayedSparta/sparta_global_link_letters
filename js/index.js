$(document).ready(function() {

  init();

  //   var items = [
  //   [" ", " ", " ", " "],
  //   [" ", " ", " ", " "],
  //   [" ", " ", " ", " "],
  //   [" ", " ", " ", " "]
  // ];

  function init(){
    var setwords = ["NOT","OUT","NUT","UNTO"];
    var letters = ["N","O", "U", "T"];
    var word_select = "";
    $(letters).each(function(index, letter){
      $("#words").append("<li>" + letter + "</li>");
    });

    link_words();

    function link_words(){

      $("li").click(function(){
        word_select += String(this.innerText);
        $(".display_letters").html(word_select);
        console.log(word_select);
        word_select = checkWord(word_select);
        console.log(setwords);
      });


      $("button").click(function(){
        word_select = clearButton(word_select);
      });

    }


    function clearButton(word){
      word = "";
      $(".display_letters").html(word);
      return word;
    }

    // function splitWord(word){
    //   for (var i = 0; i < word.length; i++) {
    //     return word.charAt(i);
    //   }
    // }

    function checkWord(word){
      for (var i = 0; i < setwords.length; i++) {
        if (word == setwords[i]){
          setwords.splice( setwords.indexOf(word), 1 );
          //Find the index position of the current "word" then remove one element from that position
          word = clearButton(word);
          return word;
          // reread splice
          // remove word from array
          // display_word(word);
        }
      }
    }

    function display_word(display){

    }

  }
});
