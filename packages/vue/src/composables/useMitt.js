import mitt from "mitt";

export default function useMitt() {
  const emitter = mitt();

  function off() {
    emitter.off.apply(emitter, arguments);
  }
  function on() {
    emitter.on.apply(emitter, arguments);
  }
  function emit(eventName, eventArgs) {
    // emit on self
    emitter.emit.apply(this.emitter, arguments);

    // emit event on any listeners
    const methodName = `on${
      eventName[0].toUpperCase() + eventName.substring(1)
    }`;
    if (typeof this.$attrs[methodName] == "function") {
      this.$attrs[methodName](eventArgs);
    }
  }

  return { off, on, emit };
}
