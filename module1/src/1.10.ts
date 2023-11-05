{
    //union types
 
    type FrontendDeveloper = 'fakibaj developer' | 'junior developer';
    type FullStackDeveloper = 'frontend Developer' | 'fakibaj developer' | 'expart developer';
     const newDeveloper : FrontendDeveloper = 'junior developer' 

     type Developer = FrontendDeveloper | FullStackDeveloper;

     type User = {
        name:string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: 'O+' | 'b+' |'ab+';
     }

     const user1:User ={
        name:'Arif',
        gender: 'male',
        bloodGroup:'b+'
     }
     
    //  console.log(user1);

     type FrontendDeveloper1 = {
        skills:string[];
        designation1: 'Frontend Developer'
     }
     type BackendDeveloper1 = {
        skills:string[];
        designation2: 'Backend Developer'
     }

     type FullStackDeveloper1 = FrontendDeveloper1 & BackendDeveloper1;

     const FullStackDeveloper: FullStackDeveloper1 ={ 
        skills: ['HTML','CSS','Express'],
        designation1:'Frontend Developer',
        designation2: 'Backend Developer'

     }


    //
}