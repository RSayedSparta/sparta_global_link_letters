$(document).ready(function() {

  init();

  function init(){
    var setwords = ["NOT","OUT","NUT","UNTO","TON"];
    var letters = ["N","O", "U", "T"];
    var word_select = "";
    $(letters).each(function(index, letter){
      $("#words").append("<button class= 'Button btn from-top'>" + letter + "</button>");
    });

    link_words();
    timer();

    function link_words(){
      $(".Button").click(function(){

        word_select += String(this.innerText);
        $(".display_letters").html(word_select);
        console.log(word_select);
        checkWord(word_select);
        console.log(setwords);
      });


      $(".clear").click(function(){
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
          score();
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
        }else if(word.length > 3){
          word_select = "";
        }
      }

    }

    function timer(){
      setInterval
      var counter = 100;
      var CountDown = setInterval(function(){
        $(".timer").html("Time left: " + counter);
        counter--;
        if (counter == 0) {
//``          gameOver();
          clearInterval(CountDown);
        }
      }, 1000);

    }

    function score(){
      var points = 0;
      points++;
      $(".points").html("Current Score: " + points);
    }

    function gameOver(){

    }


    function display_word(word) {
      switch (word) {
        case "NUT":
        $(".nut").css("color", "#2253CB");
        //  $(".nut").css();
        break;

        case "NOT":
        $(".not").css("color", "#2253CB");
        break;

        case "TON":
        $(".ton").css("color", "#2253CB");
        break;

        case "OUT":
        $(".out").css("color", "#2253CB");
        break;

        case "UNTO":
        $(".unto").css("color", "#2253CB");

        break;
        default:

      }
    }
  }
});
