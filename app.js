

// Exercise 1: Print Odds 

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
     if (i % 2 != 0){
        console.log(i);
    }
  }
}

printOdds(10); // 1,3,5,7,9
printOdds(100); // 1,3, 5-99


// Exercise 2: Check Age 

function checkAge (name,age){
    let oldEnoughMsg = `Congrats ${name}! You Can drive!`;
    let tooYoungMsg = `Sorry ${name},you need to wait ${16 - age} year(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg);
    }else{
        console.log(oldEnoughMsg);
    }
}

 checkAge("Ben", 12);
 checkAge("Seth", 16);
 checkAge("Cameron",21);


 //Exercise 3:  Quadrant
 function checkQuadrant(x,y) {
     if(x > 0 & y > 0){
         return "Quadrant 1";
     } else if (x < 0  && y > 0) {
         return "Quadrant 2"
     } else if ( x < 0 && y < 0) {
         return "Quadrant 3"
     } else if ( x > 0 && y < 0){
         return "Quadrant 4 "
     } else if ( x == 0 && y != 0) {
         return "X Axis"
     } else if (x != 0 && y == 0) {
         return "Y Axis"
     } else{
         return "Origin";
     }
 }
 console.log(checkQuadrant(1,1));
 console.log(checkQuadrant(-1,1));
 console.log(checkQuadrant(-1,-1));
 console.log(checkQuadrant(1,-1));
 console.log(checkQuadrant(0,-1));
 console.log(checkQuadrant(1,0));
 console.log(checkQuadrant(0,0));



 // Exercise 4: What Type Of Triangle? 
 function isValidTriangle(a,b,c) {
     return a + b > c && a + c > b && b + c > a;
   }

 

 function checkTriangle(a, b, c){
    let isValid = isValidTriangle (a,b,c);
    if(isValid) {
    // What Type Of Traingle?
    if (a == b && b == c) {
        return `Equalateral`;
    } else if ( a == b || b == c || a == c) {
        return ` Isosceles`; 
    }else {
        return `Scalene`;
    }
    
    }else{
        return `Not a valid triangle.`;

    }
 }

 console.log(checkTriangle(2 , 3, 4)); // scalene
 console.log(checkTriangle (2, 2, 2 )); // eq
 console.log(checkTriangle(1, 2, 2)); // isosceles
 console.log(checkTriangle(1, 1, 2)); // invalid 


 // Exercise 5: Data Plan 
// planLimit, day ,usage 
 /*
 15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/
function datausageFeedback(planLimit, day , usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day
    let  projectedUsage = remainingDays * currentAvg;
    let statusMsg; 

    
    
    console.log(`${day} days(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding"
    } else if (currentAvg < projectedAvg) {
        statusMsg = "Under";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg}  your average daily use ${currentAvg} GB/day),
    continuing this usage, you'll end up using ${planLimit - ( usage + projectedUsage)} GB from your data limit.`) ;
    } 


datausageFeedback(50, 15, 25);

     

     
 
   

    
    

        
        
    






