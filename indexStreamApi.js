const fs = require( 'fs' );
const server = require( 'http' ).createServer();
const request = require( 'request' );

server.on( 'request', ( req, res ) => {
  const readStream = request.get( 'http://127.0.0.1:1111' );

  readStream.on( 'data', () => {
    console.log( process.memoryUsage() );
  } );

  readStream.pipe( res );
} );

server.listen( 8080 );