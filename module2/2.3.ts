{
  //start

  // Generic type ( amra amader projon onujai j kono akta type toire abong remove krte pari setake bole generic type )

  type GenericArray<T> = Array<T>;

  //const rollNumbers: number[] = [3,6,8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ['Mr.X','Mr.Y','Mr. Z'];
  const mentors: GenericArray<string> = ["Mr.X", "Mr.Y", "Mr. Z"];

  // const boolArray: boolean[] = [true,false,true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Arif",
      age: 26,
    },
    {
      name: "Jhankar",
      age: 38,
    },
  ];

  //   const user: GenericArray<{ name: string; age: number }> = [
  //     {
  //       name: "Arif",
  //       age: 26,
  //     },
  //     {
  //       name: "Jhankar",
  //       age: 38,
  //     },
  //   ];

  const add = (x: number, y: number) => x + y;

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const manus: GenericTuple<string, string> = ["Mr. X", "MR. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "p@gmail.com" },
  ];

  // end
}
