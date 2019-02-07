$(document).ready(function() {

  init();

  function init(){
    var setwords = ["SECURE","SEE","REUSE","CURE","SEER","CUE","USE","SURE","RUE","RESCUE","USER", "CURSE"];
    var letters = [ "R", "S", "U", "E", "C", "E"];
    var word_select = "";
    var points = 0;

    $(letters).each(function(index, letter){
      $("#words").append("<button class='Button btn from-top'>" + letter + "</button>");
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
              "<div class='endGame'> <div><a href='index.html'><button class='btn from-middle'><h1>GAME OVER</h1></button></a></div> <div class ='score'><p>Your score: " + points + " </p></div>");
              hStorage.setItem("keyHard", points);
            }
            $(".display_letters").html(word);
            word_select = "";
            // reread splice
            // remove word from array
          }else if(word.length > 5){
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
              "<div class='endGame'> <div><a href='index.html'><button class='btn from-middle'><h1>GAME OVER</h1></button></a></div> <div class ='score'><p>Your score: " + points + " </p></div>");
              // HACK: Storage.setItem("keyHard", points);
            }
          }, 1000);
        }

        function score(){
          points++;
          $(".points").html("Current Score: " + points);
        }

        function display_word(word) {
          switch (word) {
            case "SECURE":
            $(".secure").css("color", "#000000");
            break;
            case "SEE":
            $(".see").css("color", "#000000");
            break;
            case "REUSE":
            $(".reuse").css("color", "#000000");
            break;
            case "CURE":
            $(".cure").css("color", "#000000");
            break;
            case "SEER":
            $(".seer").css("color", "#000000");
            break;
            case "CUE":
            $(".cue").css("color", "#000000");
            break;
            case "USE":
            $(".use").css("color", "#000000");
            break;
            case "SURE":
            $(".sure").css("color", "#000000");
            break;
            case "RUE":
            $(".rue").css("color", "#000000");
            break;
            case "RESCUE":
            $(".rescue").css("color", "#000000");
            break;
            case "USER":
            $(".user").css("color", "#000000");
            break;
            case "CURSE":
            $(".curse").css("color", "#000000");
            break;
            default:

          }
        }
      }
    });
