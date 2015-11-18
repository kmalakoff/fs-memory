import bodec from 'bodec';
import {PassThrough} from 'stream';

export default function createReadStream(path, options) {
  let fs = this;

  let contents = fs.readFileSync(path, options);

  if (options && (options.start || options.end)) {
    contents = bodec.slice(contents, options.start, options.end);
  }

  var stream = new PassThrough();
  setTimeout(function() { stream.end(new Buffer(contents)); }, 0);
  return stream;
}
