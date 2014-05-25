Ext.define('Glasgow2014.store.Places', {
  extend: 'Ext.data.Store',
  
  
  

  config: {
    model: 'Glasgow2014.model.Place',
    proxy: {
      type: 'ajax',
      url: Glasgow2014.util.Util.api.nearestPlaces,
      reader: {
        type: 'json',
        rootProperty: 'results'
      }
    }
  }




});