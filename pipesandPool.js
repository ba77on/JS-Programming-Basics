function pipesWater(arg1, arg2, arg3, arg4) {
    let poolCapacity = arg1;
    let firsPipeWaterPerHour = arg2;
    let secondPipeWaterPerHour = arg3;
    let hours = arg4;
    let result = 0;
    let result1 = 0;
    let result2 = 0;

    let fullFirstPipeTotalcapacity = firsPipeWaterPerHour * hours;
    let fullSecondPipeTotalCapacity = secondPipeWaterPerHour * hours;
    let TotalWaterfropPipes = fullFirstPipeTotalcapacity + fullSecondPipeTotalCapacity;

    if (poolCapacity >= TotalWaterfropPipes) {
        result = TotalWaterfropPipes / poolCapacity * 100;
        result1 = (fullFirstPipeTotalcapacity / TotalWaterfropPipes * 100).toFixed(2);
        result2 = (fullSecondPipeTotalCapacity / TotalWaterfropPipes * 100).toFixed(2);

        console.log(`The pool is ${result}% full. Pipe 1: ${result1}%. Pipe 2: ${result2}%.`);
  
    } else {
        result = (TotalWaterfropPipes - poolCapacity)
        console.log(`For ${hours} hours the pool overflows with ${result.toFixed(2)} liters.`)
    }


}
pipesWater (1000, 100, 120, 3)