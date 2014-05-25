/**
 /**
 * Main view - holder of all the views.
 * Card layout by default in order to support multiple views as items
 */
Ext.define('Glasgow2014.view.Main2', {
  extend: 'Ext.Container',
  xtype: 'main2',
  
  requires: [
	           
	           'Glasgow2014.view.Categories'
	          // 'Glasgow2014.config.Config'
	           ],
  config: {
    cls: 'default-bg',
    layout:'card',
    items: [{
      xtype: 'categories'
  
    }]
  }
});