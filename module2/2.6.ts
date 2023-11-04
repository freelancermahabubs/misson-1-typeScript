{
  // constraints

  const addCourseToStudent = <
    T extends {id: number; name: string; email: string}
  >(
    student: T
  ) => {
    const course = "next level";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 12,
    name: "m",
    email: "em@gmail.com",
  });
  const student4 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 12,
    name: "m",
    email: "em@gmail.com",
    devType: "mdal",
  });

  const student2 = addCourseToStudent({
    id: 41,
    name: "MR Y",
    email: "y@gmail.com",
    hasWatch: "NLWD",
  });
  //
}
