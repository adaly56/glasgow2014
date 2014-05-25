Ext.define('Glasgow2014.view.details.Info', {
				extend: 'Ext.Container',
				xtype: 'info',
				config: {
								cls : 'transparent details-info',
								iconCls : 'info',
								title : 'info',
								scrollable : true,
								tpl : Ext.create('Ext.XTemplate', 
												document.getElementById('tpl_place_details_info').innerHTML, {
																getRating : function(rating){
																				return Glasgow2014.util.Util.getRating(rating);
																}
												})
				}
});
