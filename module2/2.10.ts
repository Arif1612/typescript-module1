{
    // mapped array

    const arrOfNumbers: number[]  = [1,2,5];

    //const arrofStrings : string[] =  [ '1','4','5']

    const arrofStrings:string[] =arrOfNumbers.map( (number) => number.toString() 
    );
    console.log(arrofStrings);

    type AreaNumber = {
        height:number;
        width:number;
    };

    type Height = AreaNumber ["height"] //look up type

    // type AreaNumber = {
    //     height:number;
    //     width:number;
    // };


    //keyof AreaNumber => "height" | "width"
 type AreaString<T> = {
    [key in keyof T ] : T[key];
 }

 const area1: AreaString<{ height: string ;width:number }> = {
    height: "100",
    width:50,
 }



    // type AreaString ={
    //     [key in "height" | "width"] : string
    // }

    //
}