Ext.define('Glasgow2014.store.Categories', {
  extend: 'Ext.data.Store',
  config: {
    model: 'Glasgow2014.model.Category',
    autoLoad: true,
    id:'CategoriesStoreId',
    sorters: 'name',
    grouper: {
      groupFn: function (record) {
        return record.get('name')[0];
      }
    },
    proxy: {
      type: 'ajax',
      url: Glasgow2014.util.Util.api.categories,
      reader: {
        type: 'json',
        rootProperty: 'categories'
      }
    }
  }
});