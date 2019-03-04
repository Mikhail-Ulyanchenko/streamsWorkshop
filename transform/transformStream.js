const { Transform } = require( 'stream' );

const upperCaseTr = new Transform( {
  transform( chunk, encoding, callback ) {
    this.push( chunk.toString().toUpperCase() );
    callback();
  },
  read(){
    this.push(String.fromCharCode(this.currentCharCode++));
  }
  // write(chunk, encoding, callback) {
  //   console.log('this log: ' + chunk.toString());
  //   callback();
  // }
} );

process.stdin.pipe( upperCaseTr ).pipe( process.stdout );