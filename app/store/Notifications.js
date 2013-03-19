Ext.define('jeneste.store.Notifications',{

   extend:'Ext.data.Store',

   config:
   {

   	model:'jeneste.model.Notification',

   	data: [
     
       { title: "<img src='resources/images/bullet_1.png' width=30 height=30 padding-right=20>&nbsp;&nbsp;&nbsp;"+'Notification 1' },
       { title: "<img src='resources/images/bullet_1.png' width=30 height=30 padding-right=20>&nbsp;&nbsp;&nbsp;"+'Notification 2' },
       { title: "<img src='resources/images/bullet_2.png' width=30 height=30 padding-right=30>&nbsp;&nbsp;&nbsp;"+'Notification 3' },
       { title: "<img src='resources/images/bullet_2.png' width=30 height=30 padding-right=20>&nbsp;&nbsp;&nbsp;"+'Notification 4' }
     
        ]
   }

});