{
    // function with generic 

    const createAray = (param: string) : string[] =>{
        return [param]
    }

    const createArayWithGeneric = <T>(param: T): T[] =>{
        return [param]
    }

    const res1 = createAray("Banglaesh")
    const resGeneric = createArayWithGeneric<string>('Bangldehs')

    type User = {id: number; name: string}
    const resGenericObj = createArayWithGeneric<User>({
        id: 12,
        name: "m"
    })


    const createArayWithGenericTuple = <T, Q>(param1: T, param2: Q) : [T, Q] =>{
        return [param1, param2]
    }

    const res10 = createArayWithGenericTuple<string, number>("B", 1)
    const resGeneric11 = createArayWithGenericTuple<string, {name: string}>("B", {name: "Ma"})



    const addCourseToStudent = <T> (student: T) =>{
        const course = "Next level web Development"
        return{
            ...student,
            course
        }


    }

    const student  = addCourseToStudent({name: "mahabub", email: "m@gmail.com", devType: "LOd"})
    const student2  = addCourseToStudent({name: "u", email: "u@gmail.com", hasWatch: "a"})
    //
}