// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(1, 1));
// tutorial.kate();
// console.log(new tutorial.SomeMathObject());

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let kate = new Person('Kate');
kate.on('name', ()=>{
    console.log('My name is ' + kate.name);
});

kate.emit('name');