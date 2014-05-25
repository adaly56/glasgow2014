Ext.define('Glasgow2014.view.Places',
 {
  extend: 'Ext.Container',
  xtype: 'places',
  config: {
    layout: 'card',
    items: [{
      xtype: 'placelist'
    }]
  }
});