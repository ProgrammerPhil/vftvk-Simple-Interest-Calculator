/*Computing Interest Rate With User Inputs */
function compute()
{
    var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = parseFloat(principal).toFixed(2) * parseFloat(years).toFixed(2) * parseFloat(rate).toFixed(2) /100;
	var year = new Date().getFullYear()+parseInt(years);
	
	
	
	if(principal<=0){
		alert("Enter a postive number");
		document.getElementById("principal").focus();
		document.getElementById("principal").value = "";
		return false;
	}
	
	document.getElementById("result").innerHTML="If you deposit";
	document.getElementById("number").innerHTML= principal;
	document.getElementById("result2").innerHTML= "at an interest rate of"; 
	document.getElementById("percentage").innerHTML= rate + "%,";
	document.getElementById("result3").innerHTML="you will receive an amount of";
	document.getElementById("amount").innerHTML= interest;
	document.getElementById("result4").innerHTML="\ in the year";
	document.getElementById("year").innerHTML=year;
}

/*Updating Rate Number When Slider Moves*/
function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval+"%";
}
