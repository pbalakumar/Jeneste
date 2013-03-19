Ext.define('jeneste.view.Home',{

extend: 'Ext.tab.Panel',
    
requires:[
       
       'jeneste.view.Requests',
       'jeneste.view.Notifications',
       'jeneste.view.Calendar',
       'jeneste.view.More'],

config: {
     
     tabBar:{                      
       
        docked:'bottom',
       
       },

      ui:'tabs',
         
      layout:{

         	pack:'center'

        },

      items:[
			{
				xtype: 'requests'
			},
			{
				xtype: 'notifications'
			},
			{
				xtype: 'calendar'
			},
			
		  {
				xtype:'morecard'
			}
						      ]
    }
});
