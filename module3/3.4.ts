{
    // instanceof Guard
    class Animal {
        name: string;
        species: string;

        constructor (name: string, species: string){
            this.name = name;
            this.species = species
        }
        makeSound (){
            console.log(`I am Making sound`)
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log(`I am barkeing`)
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMew(){
            console.log(`I am Meaw`)
        }
    }


    // smart way te hanlde korar jonno chile amera funciton bebhohar krote pari


    const isDog = (animal: Animal) : animal is Dog =>{
        return animal instanceof Dog
    }

    const isCat = (animal: Animal) : animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal  = (animal: Animal){
        if(isDog(animal)){
            animal.makeBark
        }
        else if(isCat(animal)){
            animal.makeMew
        }else{
            animal.makeSound()
        }
    }

    const dog  = new Dog("Dog Bhai", "Dog")
    const cat  = new Cat("Cat Bhai", "Cat")

    getAnimal(dog)
    //
}