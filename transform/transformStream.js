const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
  // read(){
  //   this.push(String.fromCharCode(this.currentCharCode++));
  // }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);