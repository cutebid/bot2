let facemask = prompt("Are you with a Facemask?", "yes");
let age = prompt("How Old Are You", 13);
// let result;
let counterAllowed = 0;
let counterDenied = 0;
    if(facemask == "yes"  && age >= 12) {
             alert("Welcome To SmarieMart");
             counterAllowed +=1;
        //    result = "Welcome To SmarieMart"
    }
    else if(facemask == "yes" && age < 12) {
             alert("You Must Be 12years or Older To Enter SmartieMart");
            // result =  "You Must Be 12years or Older To Enter SmartieMart"
             counterDenied +=1;
         }
    else {
             alert("Entry Denied into SmartieMart");
            // result = "Entry Denied into SmartieMart"
            counterDenied +=1;
        }
    

    //   document.getElementById("demo").innerHTML = myFunction();
     document.getElementById("demo1").innerHTML = "accessALLOWED:" + "<br>" + counterAllowed;
     document.getElementById("demo2").innerHTML =  "accessdENIED:" + "<br>" +counterDenied;

    
   
  