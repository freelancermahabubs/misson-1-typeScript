{
  // unioun types

  //   type FrontEndDeveloper = "FakibazDeveloepr" | "JuniorDeveloper";
  //   type FullStackDeveloper = "FrontEndDeveloepr" | "ExpertDeveloper";
  //   type Developer = FrontEndDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontEndDeveloper = "JuniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gerder: "Meale" | "female";
  //     bloodGroup: "o+" | "a+" | "ab+";
  //   };
  // const user: User = {
  //     name: "Mahabub",
  //     email: "mahabub@gmail.com",
  //     gerder: "Meale",
  //     bloodGroup: "a+"
  //   };

  type FrontEndDeveloepr = {
    skills: string[];
    designation1: "Frontend developer";
  };
  type BackEndDeveloper = {
    skills: string[];
    desgination2: "BackEnd Developer";
  };

  type FullStackDeveloper = FrontEndDeveloepr & BackEndDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend developer",
    desgination2: "BackEnd Developer",
  };
}
