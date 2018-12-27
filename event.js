const EventEmitter = require('events');

const emitter =new EventEmitter();

emitter.on('messageLoaded', function(){
    console.log('Listner loaded')
})


//loaded the listener
emitter.emit('messageLoaded');