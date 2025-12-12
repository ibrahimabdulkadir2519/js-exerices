// Synchonous

function getUser() {
    console.log("Step 1: Getting user...");
    return "Ali";
}

function calculateScore() {
    console.log("Step 2: Calculating score...");
    let score = 5 + 10;
    return score;
}

function showResult(user, score) {
    console.log("Step 3: Showing result...");
    console.log(`${user} has a score of ${score}`);
}


let user = getUser();         
let score = calculateScore(); 
showResult(user, score);      

// Async

function getUser(){
    console.log('step 1 Gettig user');
    return "ibrahim"
    
}


function calculateScore (callback){
   console.log('step calculating');

   setTimeout(()=>{
      let score = 15;
//
      callback(score)
      
   },2000)
   
}

calculateScore(function(score){
   console.log(`this is result ${score}`);
   
})

getUser()