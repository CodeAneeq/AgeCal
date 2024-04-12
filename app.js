
// function for calculate age in years, months, days, weeks, hours, minutes and seconds. 

const calculateAge = () => {
  var dobInput = document.getElementById("dob").value;
  var dob = new Date(dobInput);
  var calculateDate = document.getElementById("dob2").value;
  var calDate = new Date(calculateDate);

  var ageInYears = calDate.getFullYear() - dob.getFullYear();
  var monthDiff = calDate.getMonth() - dob.getMonth();
  var daysDiff = calDate.getDate() - dob.getDate(); // Corrected this line

  if (daysDiff < 0) {
      monthDiff--;
      var daysInLastMonth = new Date(calDate.getFullYear(), calDate.getMonth(), 0).getDate(); 
      daysDiff = daysInLastMonth + daysDiff; // Correct days difference
  }

  if (monthDiff < 0) {
      age--;
      monthDiff += 12;
  }

  var ageInMonths = ageInYears * 12 + monthDiff;
  var ageInDays = Math.floor((calDate - dob) / (1000 * 60 * 60 * 24));
  var ageInWeeks = Math.floor((daysDiff / 7));
  var ageInHours = ageInDays * 24;
  var ageInMinutes = ageInHours * 60;
  var ageInSeconds = ageInMinutes * 60

  // document.getElementById("result").innerHTML = `Age:<br>
  // ${ageInYears} years ${monthDiff} months ${daysDiff} days<br>
  // ${ageInMonths} months ${daysDiff} days<br>
  // ${ageInWeeks} weeks ${daysDiff % 7} days<br>
  // ${ageInDays} days<br>
  // ${ageInHours} hours<br>
  // ${ageInMinutes} minutes<br>
  // ${ageInSeconds} seconds`;

  var resultString = `Age:<br>
        ${ageInYears} years ${monthDiff} months ${daysDiff} days<br>
        ${ageInMonths} months ${daysDiff} days<br>
        ${ageInWeeks} weeks ${ageInDays % 7} days<br>
        ${ageInDays} days<br>
        ${ageInHours} hours<br>
        ${ageInMinutes} minutes<br>
        ${ageInSeconds} seconds`;

    document.getElementById("result").innerHTML = resultString;

    // Saving to local storage
    localStorage.setItem("ageResult", resultString);
    localStorage.setItem(dobInput);
}

