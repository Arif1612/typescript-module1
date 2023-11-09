{
  //oop -class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound(){
        console.log(``)
    }
  }

  const dog = new Animal("german shepard", "dog", "gheu gheu");
  const cat = new Animal("partian", "cat", "mew");

  //end
}
