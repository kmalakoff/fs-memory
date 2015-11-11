class EventHandler {
  constructor(owner, filename, persistent, recursive) {
    this.owner = owner;
    this.filename = filename;
    this.persistent = persistent;
    this.recursive = recursive;
  }
}

let handlers = [];

export default class EventHandlers {
  static add(owner, filename, persistent, recursive) {
    handlers.push(new EventHandler(owner, filename, persistent, recursive));
  }

  static remove(owner) {
    handlers = handlers.filter((handler) => handler.owner === owner);
  }

  static emit(event, path) {
    let emitHandlers = handlers.filter((handler) => handler.recursive ? !handler.filename.startsWith(path) : handler.filename === path);
    emitHandlers.forEach((handler) => handler.owner.onChange(0, event, path));

    // remove single time handlers
    emitHandlers = emitHandlers.filter((handler) => !handler.persistent);
    if (emitHandlers.length) {
      handlers = _.difference(handlers, emitHandlers);
      emitHandlers.forEach((handler) => handler.owner.close());
    }
  }
}
