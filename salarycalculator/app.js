//declares function to calculate salary
function calculateWage(hours, extraPay) {

    const rate = 1000;
    var hours = parseInt(document.getElementById("worked").value); 

  //if hours worked for is greater or equals to 4 hours
    if (hours > 4){
        extraPay = (hours - 4) * 200;
        workpay = (hours * rate) + extraPay;

        document.getElementById("result").innerHTML = "You worked atleast 4 hours today, Your total pay is " + workpay + " Naira.";
    }

    else {
        workpay = (rate * hours);
        document.getElementById("result").innerHTML = "Thank you for being sincere, Your total pay is " + workpay + " Naira.";
    }
}

calculateSalary()