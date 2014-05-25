Ext.define('Glasgow2014.model.Place', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      "formatted_address",
      "geometry",
      "icon",
      "id",
      "name",
      "rating",
      "reference",
      "types",
      "vicinity",
      "photos"]
  }
});