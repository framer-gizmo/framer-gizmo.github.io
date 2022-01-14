
function getClosestFraction(x)
{
    "use strict";
    var w = Math.floor(x);
    var d = x - w;
    
     if( (0 <= d) && (d < (1/16)))
    {
        return w;    
    }
    if( ((1/16) <= d) && (d < (2/16)))
    {
        return w + " (1/16)";    
    }
    if( ((2/16) <= d) && (d < (3/16)))
    {
        return w + "(1/8) ";    
    }
    if(((3/16) <= d) && (d < (4/16)))
    {
        return w + " (1/8) plus (1/16)";
    }
    if(((4/16) <= d) && (d  < (5/16)))
    {
        return w + " (1/4)";
    }
     if(((5/16) <= d) && (d   < (6/16)))
    {
        return w + " (1/4) plus (1/16)";
    }
    if(((6/16) <= d) && (d < (7/16)))
    {
        return w + " (3/8)";
    }
    if(((7/16) <= d) && (d < (8/16)))
    {
        return w + " (3/8) plus (1/16)";
    }
    if(((8/16) <= d) && (d < (9/16)))
    {
        return w + " (1/2)";
    }
    if(((9/16) <= d) && (d < (10/16)))
    {
        return w + " (1/2) plus (1/16)";
    }
    if(((10/16) <= d) && (d < (11/16)))
    {
        return w + " (5/8)";
    }
    if(((11/16) <= d) && (d < (12/16)))
    {
        return w + " (5/8) plus (1/16)";
    }
    if(((12/16) <= d) && (d < (13/16)))
    {
        return w + " (3/4)";
    }
    if(((13/16) <= d) && (d < (14/16)))
    {
        return w + " (3/4) plus (1/16)";
    }
    if(((14/16) <= d) && (d < (15/16)))
    {
        return w + " (7/8)";
    }
    if(((15/16) <= d) && (d < (16/16)))
    {
        return w + " (7/8) plus (1/16)";
    }
   
}

function getDecimalOfFraction(x)
{
    "use strict";
    if(x == "1/8")
    {
         return 0.125;   
    }
    if(x == "1/4")
    {
         return 0.25;   
    }
    if(x == "3/8")
    {
         return 0.375;   
    }
    if(x == "1/2")
    {
         return 0.5;   
    }
    if(x == "5/8")
    {
         return 0.625;   
    }
    if(x == "3/4")
    {
         return 0.75;   
    }
    if(x == "7/8")
    {
         return 0.875;   
    }
    else
    {
        return 0;
    }
}
function getFeetNInches(x)
{
    "use strict";
    var feet = Math.floor(x/12);
    var inches = x - (feet*12);
    //var d = (x/12) - feet;
    //var inches = 12 * d;
    var finalString = feet + " Feet "+inches.toFixed(3) + " Inches";
    //var finalString = feet + " Feet "+inches.toFixed(3) + " Inches = " + feet + " Feet   " + getClosestFraction(inches) + " Inches" ; 
    //var finalString = feet + " Feet   " + getClosestFraction(inches) + " Inches" ; 
    return finalString;
}

function getFeetNInchesWithFraction(x)
{
    "use strict";
    var feet = Math.floor(x/12.0000);
    var inches = x - (feet*12);
    
    var finalString = feet + " Feet "+ getClosestFraction(inches) + " Inches";
    //var finalString = "feet=:" + feet + " d:" + d + " inches:" + inches;
    //var finalString = feet + " Feet "+inches.toFixed(3) + " Inches = " + feet + " Feet   " + getClosestFraction(inches) + " Inches" ; 
    //var finalString = feet + " Feet   " + getClosestFraction(inches) + " Inches" ; 
    return finalString;
}

function getInchesFromFeet(x)
{
     "use strict";
    
            var remainder = x % 1;
            if(remainder == 0)
            {
        
                return x*12;
            }
            else
            {
                return x*12;
            }  
   
    
    
}
function getDeets(one , two, op)
{
    "use strict"
    if(op == "-")
    {
       return one - two;
    }
     if(op == "+")
    {
       return one + two;
    }
     if(op == "/")
    {
       return one / two;
    }
     if(op == "*")
    {
       return one * two;
    }
    else
    {
        return "none";
    }
}
var resultInchesExact, resultInchesFraction, resultFeetInchesExact, resultFeetInchesFraction;
function getCalc()
{
    "use strict";
    //input one
    var inputOneFeet = parseFloat(document.getElementById("user_input_one_feet").value);
    var inputOneInches = parseFloat(document.getElementById("user_input_one_inches").value);
    var inputOneFraction = document.getElementById("dropdown_user_input_one").value;
    var totalInchesOne = getInchesFromFeet(inputOneFeet) + inputOneInches + getDecimalOfFraction(inputOneFraction); 
    
    //input operator
    var operator = document.getElementById("dropdown_operator").value;
    
    //input two
    var inputTwoFeet = parseFloat(document.getElementById("user_input_two_feet").value);
    var inputTwoInches = parseFloat(document.getElementById("user_input_two_inches").value);
    var inputTwoFraction = document.getElementById("dropdown_user_input_two").value;
    var totalInchesTwo = getInchesFromFeet(inputTwoFeet) + inputTwoInches + getDecimalOfFraction(inputTwoFraction);
    
    //iput three
    
    var inputThree = parseFloat(document.getElementById("user_input_three").value);
    
    
    
     var result;
     var finalResult;
     var finalResultWithFraction;
    if((operator == "+") || (operator == "-"))
    {
        result = getDeets(totalInchesOne, totalInchesTwo, operator);
        
    }
    if((operator == "/") || (operator == "*"))
    {
        result = getDeets(totalInchesOne, inputThree, operator);  
        
    }
   
    // the vriable result is the answer inches with decimal value
   
    finalResult = getFeetNInches(result);
    finalResultWithFraction = getFeetNInchesWithFraction(result);
    
    resultInchesExact = result + " inches";
    resultInchesFraction = getClosestFraction(result) + " inches"; 
    resultFeetInchesExact = finalResult ; 
    resultFeetInchesFraction = finalResultWithFraction;
    
   
    document.getElementById("result").setAttribute("value",finalResult);
    document.getElementById("result_with_fraction").setAttribute("value",finalResultWithFraction);
    //window.location.href = "regularGable.html";
    document.getElementById("result_container").scrollIntoView();
    
    
}
window.onload =function()
{
    //alert("load up");
    
    document.getElementById("dropdown_operator").addEventListener('change',function()
    {
        var selection = document.getElementById("dropdown_operator").value;
        if(selection == "+" || selection == "-")
          {
              document.getElementById("userInputTwoContainer").style.display = "block";
              document.getElementById("userInputThreeContainer").style.display = "none";
              document.getElementById("instructions_divide").style.display = "block";
          }
        if(selection == "/" || selection == "*")
          {
              document.getElementById("userInputTwoContainer").style.display = "none";
              document.getElementById("userInputThreeContainer").style.display = "block";
              document.getElementById("instructions_divide").style.display = "block";
          }
        //alert("value changed to "+selection);
    });
};

function resetButtons()
{
    "use strict";
    document.getElementById("button_inches").style.backgroundColor = "grey";
    document.getElementById("button_feet").style.backgroundColor = "grey";
}
function buttonFeet()
{
    "use strict";
     resetButtons();
      document.getElementById("button_feet").style.backgroundColor = "white";
     document.getElementById("result").setAttribute("value",resultFeetInchesExact);
     document.getElementById("result_with_fraction").setAttribute("value",resultFeetInchesFraction);
    
}
function buttonInches()
{
    "use strict";
    resetButtons()
    //document.getElementById("button_inches").css('background-color','white');
    document.getElementById("button_inches").style.backgroundColor = "white";
    document.getElementById("result").setAttribute("value",resultInchesExact);
    document.getElementById("result_with_fraction").setAttribute("value",resultInchesFraction);
}

