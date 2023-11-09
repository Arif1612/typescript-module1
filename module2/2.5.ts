{
  //function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const rest1 = createArray("Bangladesh");
  const restGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pasha",
  });

  //   tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const rest10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const rest11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "mr x",
    email: "x@gmail.com",
    devType: "Next Level",
  });
  const student2 = addCourseToStudent({
    name: "mr y",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });
  //
}
