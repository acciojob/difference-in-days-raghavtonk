var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let fulldate1 = new Date(date1);
	let fulldate2 = new Date(date2);

	let timediff = fulldate2 - fulldate1;

	let daydiff = Math.floor(timediff/(1000*60*60*24));
	
	return daydiff; 
};  
 
// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date."); 
alert(dateDiffInDays(dateOne, dateTwo));
