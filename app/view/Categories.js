Ext.define('Glasgow2014.view.Categories', {
  extend: 'Ext.List',
  xtype: 'categories',
  config: {
    cls: 'default-bg category-list',
    itemTpl: '{name}',
    store: 'Categories',
    grouped: true,
    indexBar: true,
    title: 'Places'
  }
});