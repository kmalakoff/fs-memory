import EventHandlers from './event-handlers';

export default class FSEvent {
  constructor() {}

  start(filename, persistent, recursive) { EventHandlers.add(this, filename, persistent, recursive); }
  close() { EventHandlers.remove(this); }
}
