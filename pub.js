var zmq = require('zeromq')
var publisher = zmq.socket('pub')

publisher.bind('ipc:///tmp/zmq', function(err) {
  if(err)
    console.log(err)
  else
    console.log("Listening on ipc:///tmp/zmq...")
})

for (var i=1 ; i<10 ; i++)
    setTimeout(function() {
        console.log('sent');
        publisher.send("Hello there!")
    }, 1000 * i)

process.on('SIGINT', function() {
  publisher.close()
  console.log('\nClosed')
})

