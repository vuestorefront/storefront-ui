export default {
  name: "SfBadge",  
  props: {
    type: {
      type: String,
      default: "info",
      validator: function(value) {
        return ["alert", "warning", "info"].indexOf(value) !== -1;
      }
    }
  }
};
        
