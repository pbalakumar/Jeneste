Ext.define('jeneste.view.Requests',{

extend: 'Ext.List',

xtype: 'requests',

config: {

iconCls:'requests',

title:'Requests',

fullscreen:true, 

items:[ 
{
               xtype:'titlebar',
               docked:'top',
               title:'Jeneste',
               items:[{
                   xtype:'button',
                   text:'Logout',
                   align:'right',
                   handler:function(){
                   Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right',duration: 500,easing: 'ease-in-out'});
                   Ext.Viewport.setActiveItem(1);
                   console.log(sessionStorage.getItem('loggedin'));
                   }
               },
               
               {
                   xtype:'button',
                   text:'Back',
                   ui:'back',
                   align:'left',
                   handler:function(){
                   Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right',duration: 500,easing: 'ease-in-out'});
                   Ext.Viewport.setActiveItem(1);
                   }
               }]
                },

                {
                html:'<h3> <center> Your Current Requests </center> </h3>',
                style:'margin-top:12px;'
                }],
  
fullscreen: true,
ui:'round',
itemTpl: '{title}',
store:'Requests',
onItemDisclosure:true,
}
});