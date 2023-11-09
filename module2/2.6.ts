{
  //constraints (force kora kono rules)
  
  const addCourseToStudent = <T extends {name:string; id:number;email:string}>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id:222,
    name: "mr x",
    email: "x@gmail.com",
    devType: "Next Level",
  });
  const student2 = addCourseToStudent({
    id:223,
    name: "mr y",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });
  const student3 = addCourseToStudent({
    id:54,
    name: "mr z",
    email: "z@email.com",
    emne:'emni'
  });
  //
}
