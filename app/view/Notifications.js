Ext.define('jeneste.view.Notifications',{

extend: 'Ext.List',

xtype: 'notifications',

config: {

iconCls: 'notifications',

title:'Notifications',

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
    
    }]}],

fullscreen: true,
ui:'round',
itemTpl:'{title}',
store:'Notifications',
onItemDisclosure:true,
}
});