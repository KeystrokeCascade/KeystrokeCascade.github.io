//loads the dates from dates.txt
fetch('dates.txt')
	.then(function(response) {
		return response.text();
	}).then(function(text) { 
		console.log(text);
		dates = text;
	});
//while (typeof dates != "string") {
//	var y = setInterval(function() {console.log("loading date")}, 1000);
//};
console.log(dates);

//sets date to countdown to
var countDownDate = new Date("2019-10-19 00:00:00").getTime();
//updates every second
var x = setInterval(function() {
	//gets todays date+time
	var now = new Date().getTime();
	//gets time between now and countdown date
	var distance = countDownDate - now;
	//defines days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	//stops the clock at 0
	if(distance<=0){
		clearInterval(x);
	}
	//prints the countdown
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
	document.getElementById("minutes").innerHTML = ('0' + minutes).slice(-2);
	document.getElementById("seconds").innerHTML = ('0' + seconds).slice(-2);
}, 1000);