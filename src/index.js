class HelloWorld {
  constructor() {
    this.say = 'Hello World';
  }

  speak(say = this.say) {
    console.log(say);
  }
}

const helloWordl = new HelloWorld();

helloWordl.speak();
helloWordl.speak('Bonjour le monde');
helloWordl.speak('Hello GAB');
