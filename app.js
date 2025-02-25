import EventEmitter from 'events'

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
  console.log(`data recieved `);
  
})

customEmitter.emit('response')