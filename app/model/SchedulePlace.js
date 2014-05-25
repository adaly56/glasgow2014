Ext.define('Glasgow2014.model.SchedulePlace', {
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