$(document).ready(function() {

  init();

  function init(){
    var setwords = ["NOT","OUT","NUT","UNTO","TON"];
    var letters = ["N","O", "U", "T"];
    var word_select = "";
    var points = 0;

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
          if(setwords.length == 0){
            $(".container").html(
              "<div class='endGame'> <div><a href='index.html'><button class='btn from-middle'><h1>GAME OVER</h1><button></a></div> <div><p>Your score: " + points + " </p></div>");
            }
            $(".display_letters").html(word);
            word_select = "";
            // reread splice
            // remove word from array
          }else if(word.length > 3){
            word_select = "";
          }
        }
      }

      function timer(complete){
        var counter = 100;
        var CountDown = setInterval(function(){
          if(counter != 0){
            counter--;
            $(".timer").html("Time left: " + counter);
          }else if(counter == 0){
            clearInterval(CountDown);
            $(".container").html(
              "<div class='endGame'> <div><a href='index.html'><button class='btn from-middle'><h1>GAME OVER</h1><button></a></div> <div><p>Your score: " + points + " </p></div>");
            }
          }, 1000);

        }

        function score(){
          points++;
          $(".points").html("Current Score: " + points);
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
