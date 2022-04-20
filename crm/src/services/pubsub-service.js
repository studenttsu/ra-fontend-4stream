class PubSub {
    constructor() {
      this.listeners = {};
    }
  
    on(action, callback) {
      if (this.listeners[action]) {
        this.listeners[action].push(callback);
      } else {
        this.listeners[action] = [callback];
      }
    }
  
    emit(action, data) {
      if (this.listeners[action]) {
        this.listeners[action].forEach(l => l(data));
      }
    }
  }
  
  export default new PubSub();