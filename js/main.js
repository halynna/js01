//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var today = new Date();

var todaysDate = "Today is " + today.toLocaleString('en-US', {weekday: 'long'})+"." +"<br>"+ "Current Time: " + today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

var date = "0"+(today.getMonth()+1)+'-'+"0"+today.getDate()+'-'+today.getFullYear() +"<br>"+ "0"+(today.getMonth()+1)+'/'+"0"+today.getDate()+'/'+today.getFullYear() +"<br>" + "0"+today.getDate()+"/"+"0"+(today.getMonth()+1)+'/'+today.getFullYear();


function myFunction(){
  document.getElementById("answer1").innerHTML=todaysDate;
  document.getElementById("answer2").innerHTML=date;
}

$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool2 = new Tool();
  tool2.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };

  paper.view.draw();
})
