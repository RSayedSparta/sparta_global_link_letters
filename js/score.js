$(document).ready(function() {
var easy = eStorage.getItem("keyEasy");
$('.easy').append("<td>"+ easy +"</td>");

var medium = mStorage.getItem("keyMedium");
$('.medium').append("<td>"+ medium +"</td>");

var hard = hStorage.getItem("keyHard");
$('.hard').append("<td>"+ hard +"</td>");

})
