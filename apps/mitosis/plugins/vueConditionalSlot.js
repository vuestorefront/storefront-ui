const traverse = require('traverse');

function hasSlot(code) {
  if (!code) return null;
  return code.match(/props.slot\w+/g);
}

module.exports =
  ({ type = '' }) =>
  () => ({
    json: {
      pre: (json) => {
        traverse(json).forEach(function (item) {
          // parse <Slot> prop slot name to string
          if (item.name === 'Slot') {
            const hasSlotProps = hasSlot(item.bindings.name?.code);
            if (hasSlotProps) {
              hasSlotProps.forEach((slot) => {
                const slotName = slot.replace('props.slot', '').toLowerCase();
                delete item.bindings.name;
                item.properties['name'] = slotName;
              });
            }
          }
          // replaces 'props.slotName' property with Vue' '$slots.name' propery in template conditional parts
          if (item.bindings?.when?.code) {
            const hasSlotProps = hasSlot(item.bindings.when.code);
            if (hasSlotProps) {
              hasSlotProps.forEach((slot) => {
                const slotName = slot.replace('props.slot', '').toLowerCase();
                const updatedSlotCode = item.bindings.when.code.replace(slot, '$slots.' + slotName);
                item.bindings.when.code = updatedSlotCode;
              });
            }
          }
        });

        return json;
      },
      post: (json) => {
        return json;
      },
    },
    code: {
      pre: (code) => {
        return code;
      },
      post: (code) => {
        return code;
      },
    },
  });
