Ext.define('jeneste.store.Requests',{

 extend:'Ext.data.Store',

 config:
 {
    model:'jeneste.model.Request',
    data: [
       { title: "<img src='resources/images/icon_4.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'<span>Request1 </span>' },
       { title: "<img src='resources/images/icon_5.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Request 2' },
       { title: "<img src='resources/images/icon_6.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Request 3' },
       { title: "<img src='resources/images/icon_6.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Request 4' }
   ]
 }

});