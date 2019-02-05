$(document).ready(function() {

  init();



  function init(){
    var setwords = ["NOT","OUT","NUT","UNTO","TON"];
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
        checkWord(word_select);
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

    function checkWord(word){
      for (var i = 0; i < setwords.length; i++) {
        if (word == setwords[i]){
          setwords.splice( setwords.indexOf(word), 1 );
          //Find the index position of the current "word" then remove one element from that position
          display_word(word);
          clearButton(word);
          $(".display_letters").html(word);
          word_select = "";
          // reread splice
          // remove word from array
        }else if(setwords == []){
          alert("Puzzle Completed");
        }else if(word.length > 4){
          word_select = "";
        }
      }
    }

    function timer(){
// setInterval
    }

    function score(){
      
    }


    function display_word(word) {
        switch (word) {
          case "NUT":
          $(".nut").css("color", "#000000");
          break;

          case "NOT":
          $(".not").css("color", "#000000");
          break;

          case "TON":
          $(".ton").css("color", "#000000");
          break;

          case "OUT":
          $(".out").css("color", "#000000");
          break;

          case "UNTO":
          $(".unto").css("color", "#000000");

          break;
          default:

      }
    }
  }
});
