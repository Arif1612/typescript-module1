/*  two types of data 1. primitive (number,string,boolean,null,undefined,,symbol) 2. Non Primitive (array,tuple,object)   */



// Basic Data Type   [implicit (onuman kore naoa), explicit] 

let lastName = "sumon" // implicit 
let firstName :string = "arif"; //string explicit
let roll:number =123; //number
let isAdmin:boolean = true; //boolean
let x:undefined = undefined; //undefined
let y:null = null; //null

// any type (use nhh korer better thahole tho javascript ee hoia gelo)
let d;

d= 123;
d="odd";
d= true;

// Array 
let friends : string[] = ['tipu','linad'];
let rollList:number[] = [1,5];

// tuple --> array --> order --> type of values

let coordinates : [number,number] = [1,5];
let ageName : [number,string,boolean] = [50,'Mr.X',true];