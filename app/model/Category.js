Ext.define('Glasgow2014.model.Category', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      "type", {
      name: "name",
      type: "string",
      convert: function (v, record) {
        // Converts to title case and returns
        return Glasgow2014.util.Util.toTitleCase(record.get('type').split('_').join(' '));
      }
    }, "size"]
  }
});