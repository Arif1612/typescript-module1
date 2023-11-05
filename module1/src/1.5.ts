// reference type --> Object

{
    const user : {
        firstName:string;
        middleName?:string; //optionalType
        lastName:string;
        isMarried: boolean;
        company:'bekar'; // type --> literal type (aita change kora jai nhh);
    } = {
        firstName:'Arif',
        middleName: 'Ul',
        lastName: 'Islam',
        isMarried:false,
        company:'bekar',
    }
    
}
