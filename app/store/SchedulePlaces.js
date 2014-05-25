Ext.define('Glasgow2014.store.SchedulePlaces', {
  extend: 'Ext.data.Store',
  
  
  

  config: {
    model: 'Glasgow2014.model.SchedulePlace',
    proxy: {
      type: 'ajax',
      url: Glasgow2014.util.Util.api.nearestPlaces,
      reader: {
        type: 'json',
        rootProperty: 'results'
      }
    },
    
    listeners : {
        load : function(store) {
            alert(store.getCount());
        }
    }
  }




});