
function checkFraction(x)
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
function toDegrees(x)
{
    "use strict";
    return x*(180/Math.PI);
}
function cosDegrees(x)
{
    "use strict";
    return Math.cos(x*(Math.PI/180));
}
function sinDegrees(x)
{
    "use strict";
    return Math.sin(x*(Math.PI/180));
}
function getClosestFraction(x)
{
    var w = Math.floor(x);
    var d = x - w;
  
    if( 0 <= d && d < (1/8))
    {
        return w;    
    }
    if((1/8) <= d && d < (1/4))
    {
        return w + " (1/8)";
    }
    if((1/4) <= d && d  < (3/8))
    {
        return w + " (1/4)";
    }
     if((3/8) <= d && d   < (1/2))
    {
        return w + " (3/8)";
    }
    if((1/2) <= d && d < (5/8))
    {
        return w + " (1/2)";
    }
    if((5/8) <= d && d < (3/4))
    {
        return w + " (5/8)";
    }
    if((3/4) <= d && d < (7/8))
    {
        return w + " (3/4)";
    }
    if((7/8) <= d && d   < 1)
    {
        return w + " (7/8)";
    }
    else
        {
            return w;
        }
}
function getFeetNInches(x)
{
    
     var feet = Math.floor(x/12);
    var d = (x/12) - feet;
    var inches = 12 * d;
    //var finalString = feet + " Feet "+inches.toFixed(3) + " Inches = " + feet + " Feet   " + getClosestFraction(inches) + " Inches" ; 
    var finalString = feet + " Feet   " + getClosestFraction(inches) + " Inches" ; 
    return finalString;
}
function getDeetsInches(x)
{
    //var finalString = x.toFixed(3)+" Inches  =  " + getClosestFraction(x) + " Inches" ;
    var finalString =  getClosestFraction(x) + " Inches" ;
    //var finalString =getClosestFraction(x);
    return finalString;
}
function getDeetsFeetInches(x)
{
    var finalString =  getFeetNInches(x);
    //var finalString =getClosestFraction(x);
    return finalString;
}

var completeFeetRafter = 0;
var completeInchesRafter = 0;
var completeFeetHeight = 0;
var completeInchesHeight = 0;
//switch language to english by redirecting to other page with english text
function buttonCalculate() {
    "use strict";
    var a = document.getElementById("user_width_feet");
    var widthFeet = parseFloat(a.value);
    var widthInches = parseFloat(document.getElementById("user_width_inches").value);
    var widthFraction = document.getElementById("dropdown_inches_width").value;
    //gets the decimal value of fraction
    var doubledFraction = checkFraction(widthFraction);
    //adds feet times 12 then adds inches and decimal of inches so gets width in inches
    //total width of roof in inches
    var totalWidth = (widthFeet * 12) + widthInches + doubledFraction;
    
    var ridgeInches = parseFloat(document.getElementById("user_ridge_inches").value);
    var widthFractionRidge = document.getElementById("dropdown_inches_ridge").value;
    //gets the decimal value of fraction
    var doubledFractionRidge = checkFraction(widthFractionRidge);
    
    //total thickness of ridge in inches
    var totalRidge = ridgeInches + doubledFractionRidge;
    
    
    
    var pitchTopValue = parseFloat(document.getElementById("user_pitch_top").value);
    var pitchBottomValue = parseFloat(document.getElementById("user_pitch_bottom").value);
    var radians = Math.atan((pitchTopValue/pitchBottomValue));
    var degrees = toDegrees(radians);
    //*****changed here "Math.cos(degrees)" to "toDegrees(Math.cos(degrees))"
    var ridgeDeduction = (totalRidge/2)/cosDegrees(degrees);
    //*******************sames as above line
    var rafterLength = ((totalWidth/2)/cosDegrees(degrees)) - ridgeDeduction;
    var totalHeight = rafterLength*sinDegrees(degrees);
    
    //document.getElementById("rafter_length_result_inches").setAttribute("value",getDeetsInches(rafterLength));
    completeFeetRafter = getDeetsFeetInches(rafterLength);
    completeInchesRafter = getDeetsInches(rafterLength);
    document.getElementById("rafter_length_result_feet_inches").setAttribute("value",completeFeetRafter);
    
    //document.getElementById("roof_height_result_inches").setAttribute("value",getDeetsInches(totalHeight));
    completeFeetHeight = getDeetsFeetInches(totalHeight);
    completeInchesHeight = getDeetsInches(totalHeight);
     document.getElementById("roof_height_result_feet_inches").setAttribute("value",completeFeetHeight);
    document.getElementById("result_pic_container").scrollIntoView();
    //window.location.href = "../events.html";
    
}
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
     document.getElementById("rafter_length_result_feet_inches").setAttribute("value",completeFeetRafter);
     document.getElementById("roof_height_result_feet_inches").setAttribute("value",completeFeetHeight);
}
function buttonInches()
{
    "use strict";
    resetButtons()
    //document.getElementById("button_inches").css('background-color','white');
    document.getElementById("button_inches").style.backgroundColor = "white";
    document.getElementById("rafter_length_result_feet_inches").setAttribute("value",completeInchesRafter);
    document.getElementById("roof_height_result_feet_inches").setAttribute("value",completeInchesHeight);
}
