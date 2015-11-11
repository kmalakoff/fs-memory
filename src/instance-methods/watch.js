import FSWatcher from '../lib/watcher';
import nullCheck from '../lib/null-check';

export default function watch(filename, options, listener) {
  nullCheck(filename);
  var watcher;
  var options;
  var listener;

  if (arguments[1] !== null && typeof arguments[1] === 'object') {
    options = arguments[1];
    listener = arguments[2];
  } else {
    options = {};
    listener = arguments[1];
  }

  if (options.persistent === undefined) options.persistent = true;
  if (options.recursive === undefined) options.recursive = false;

  watcher = new FSWatcher();
  watcher.start(filename, options.persistent, options.recursive);
  if (listener) watcher.addListener('change', listener);
  return watcher;
}
