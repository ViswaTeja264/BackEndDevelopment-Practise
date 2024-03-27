const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data Received User ${name} With Id ${id}`);
});

customEmitter.on('response', () => {
    console.log('Some Other Login Here');
})

customEmitter.emit('response', 'Viswa', 7);