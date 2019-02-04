$(document).ready(function() {

  init();
  function init(){
    var setwords = ["NOT","OUT","NUT","UNTO"];
    var letters = ["N","O", "U", "T"];
    var word_select = "";

    link_words();

    function link_words(){

      $(letters).each(function(index, letter){
        $("#words").append("<li>" + letter + "</li>");
      });


        $("li").click(function(){
          while ("li" !== letters.length) {
          word_select = $("<h2> "+ this.innerHTML +" </h2>");
          $(".display_letters").html(word_select);
          }
        });

    }

    function checkWords(){

    }

  }
});
