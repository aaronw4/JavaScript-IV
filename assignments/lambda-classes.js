// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log( `Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        console.log( `Today we are learning about ${subject}.`);
    }

    grade(obj, subject){
        console.log(`${obj.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listSubjects() {
        console.log(this.favSubjects);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(obj, subject) {
        console.log(`${this.name} debugs ${obj.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const worf = new Instructor({
    name: 'Worf',
    location: 'Kronos',
    age: 64,
    favLanguage: 'Python',
    specialty: 'Network Security',
    catchPhrase: `Todays a good day to die`
  });


  const flash = new ProjectManager({
    name: 'Barry',
    location: 'Central City',
    age: 32,
    favLanguage: 'Swift',
    specialty: 'Mobile',
    catchPhrase: `I am the fastest man alive.`,
    gradClassName: 'Android 07',
    favInstructor: 'Harrison Wells'
  });

  const data = new ProjectManager({
    name: 'Data',
    location: 'USS Enterprise',
    age: 15,
    favLanguage: 'C++',
    specialty: 'AI',
    catchPhrase: `Interesting...`,
    gradClassName: 'Data Science 05',
    favInstructor: 'Dr. Soong'
  });

  const aaron = new Student({
    name: 'Aaron',
    location: 'Oakland',
    age: 42,
    previousBackground: 'Teacher',
    className: 'Webpt9',
    favSubjects: '.Less'  
  });

  const david = new Student({
      name: 'David',
      location: 'Fremont',
      age: 34,
      previousBackground: 'Human Resources',
      className: 'Webpt11',
      favSubjects: 'CSS'
  });
