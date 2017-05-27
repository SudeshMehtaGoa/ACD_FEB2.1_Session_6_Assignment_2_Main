/*
   finding greatest of three numbers
*/
function greatestOfThreeNumbers() {
   
    /* assumed values will be always numeric, validation is not done */
    var numFirst = document.getElementById("txtFirstNumber").value;
    var numSecond = document.getElementById("txtSecondNumber").value;
    var numThird = document.getElementById("txtThirdNumber").value;

    console.log("First Number :" + numFirst);
    console.log("Second Number :" + numSecond);
    console.log("Third Number :" + numThird);

    /* used inbuild library function to find greatest number */
    var numGreatestNumber = Math.max(numFirst,numSecond,numThird)

    document.getElementById("lblGreatestNumber").innerText = "Greatest number is " + numGreatestNumber;
    console.log("Greatest number is:" + numGreatestNumber);
    

}