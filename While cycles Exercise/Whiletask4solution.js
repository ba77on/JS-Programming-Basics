function walking(input) {
 
    let command = input.shift() ;
    let target = 10000;
    let totalStepsWalked = 0 ;
 
    while ( command !=`Going home`) {
 
        let inputSteps = Number(command);
        totalStepsWalked += inputSteps ;
 
        if ( totalStepsWalked >= target ) {
 
            console.log("Goal reached! Good job!");
            break ;
        }
 
        command = input.shift() ;
     
    } 
 
    if ( command ==`Going home` ) {
 
        let lastSteps = Number(input.shift(command));
        totalStepsWalked += lastSteps ;
 
        if ( totalStepsWalked >= target) {
 
            console.log("Goal reached! Good job!");
           
 
        }
 
        else {
 
            console.log(`${target - totalStepsWalked} more steps to reach goal.`);
        }
 
    }
 
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])