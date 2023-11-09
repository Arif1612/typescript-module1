{
  //utility types
  //pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type nameAge = Pick<Person, "name" | "age">;

  //omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required (ditei hobe)
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //ReadOnly

  type personReadonly = Readonly<Person>;
  const person1: personReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: 26968789845152,
  };

//   person1.name = "y";

//Record

// type MyObj = {
//     a:string;
//     b:string;

// }

type MyObj = Record <string,string>

const EmptyObj : Record <string,unknown> = {}

const obj1: MyObj = {
    a:"aa",
    b:"bb",
    c:"cc",
    d:"dd"
}
  //
}
