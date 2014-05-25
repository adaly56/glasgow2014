Ext.define('Glasgow2014.view.SchedulePlaceList', {
  extend: 'Ext.List',
  xtype: 'scheduleplacelist',
  config: {
    cls: 'default-bg placelist',
    
    store: 'SchedulePlaces',
    emptyText: '',
   
    
    items: [{
        xtype: 'titlebar',
        docked: 'top',
        name: 'schedule_place_list_tbar',
        
      }]
  }
});