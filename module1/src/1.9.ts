{
    // type Alias
    type Student = {
        name:string;
        age:number;
        gender: string;
        contactNo?:string;
        address: string;
    }
   
 //   const student1:{
    //     name:string;
    //     age:number;
    //     gender: string;
    //     contactNo:string;
    //     address: string;
    // } = {
    //     name:'Mezba',
    //     age:50,
    //     gender:'male',
    //     contactNo:'018',
    //     address:'ctg'
    // }
    const student1: Student = {
        name:'Mezba',
        age:50,
        gender:'male',
        contactNo:'018',
        address:'ctg'
    }

    const student2: Student= {
        name:'Mir',
        age:40,
        gender:'male',
        address:'dha'
    }
    const student3: Student= {
        name:'Mir',
        age:40,
        gender:'male',
        address:'dha'
    }



    type UserName = string;
    type IsAdmin =boolean;
    const UserName: UserName = 'Persian'
    const isAdmin:IsAdmin =true;


    // function 

    type Add = (num1: number, num2:number) => number;
    const add:Add = (num1,num2) => num1+num2;

    // const add = (num1:number,num2:number) => num1+num2;


    // 
}