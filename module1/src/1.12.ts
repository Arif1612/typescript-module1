{
    // nullable types / unknown type
        
    const searchName = (value: string | null) =>{
        if(value){
            console.log('searching');
        }
        else{
            console.log('there is nothing to search');
        }
    }


    searchName(null);

     //unknown typeof
     const getSpeedInMeterPerSecond = (value:unknown) =>{
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if(typeof value === 'string'){
            const [result, unit] = value.split(" ");
            console.log(typeof (result))
            const convertedSpeed = (parseFloat(result)*1000)/3600;
            console.log(typeof (convertedSpeed))
            console.log(`The speed is ${convertedSpeed} ms^-1`);
         
        }
        else{
            console.log('wrong input')
        }
     }

     getSpeedInMeterPerSecond(`1000 kmn^-1`);

    //  const throwError = (msg:string):never =>{
    //     throw new Error(msg);
    //  }

    //  throwError('muskil error')


    //
}