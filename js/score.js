$(document).ready(function() {


var easy = localStorage.getItem("keyEasy");
$('.easy').append("<li>"+ easy +"</li>");

var medium = localStorage.getItem("keyMedium");
$('.medium').append("<li>"+ medium +"</li>");

var hard = localStorage.getItem("keyHard");
$('.hard').append("<li>"+ hard +"</li>");

})
