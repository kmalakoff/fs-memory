import EventEmitter from 'eventemitter3';
import EventHandlers from './event-handlers';
import nullCheck from './null-check';

export default class FSWatcher extends EventEmitter {
  constructor() { super(); }

  start(filename, persistent, recursive) {
    nullCheck(filename);

    var err = EventHandlers.add(this, filename, persistent, recursive);
    if (err) {
      this.close();
      const error = errnoException(err, `watch ${filename}`);
      error.filename = filename;
      throw error;
    }
  }

  close() { EventHandlers.remove(this); }

  onChange = (status, event, filename) => {
    if (status >= 0) return this.emit('change', event, filename);

    this.close();
    const error = errnoException(status, `watch ${filename}`);
    error.filename = filename;
    this.emit('error', error);
  };
}
