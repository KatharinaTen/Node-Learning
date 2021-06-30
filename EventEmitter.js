const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`some logic is here`)
})

customEmitter.emit('response', 'John', 34)