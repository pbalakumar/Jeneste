Ext.define('jeneste.view.More',{

extend:'Ext.Container',  

extend:'Ext.navigation.View',

xtype:'morecard',

requires:[
'Ext.dataview.List',
'jeneste.view.Products',
'jeneste.view.SpecialProductOrder',
],

config:{
 
iconCls:'more',
title:'More',  
fullscreen:true,
styleHtmlContent:true, 

navigationBar:{

items:[{
      
      text:'View Cart',
      align:'right'
    
    },
    
    {
     xtype:'button',
     iconCls:'settings',
     id:'setting',
     iconMask:true,
     align:'left',
    }],
  },

  items:[{
  
  title:'Jeneste',
  xtype:'panel',
  scrollable:true,
  items:[{    
  xtype:'list',
  flex:1,
  scrollable:false,
  itemTpl:'{title}',
  store:'MoreCards',
  ui:'round',
  listeners: {
                itemtap: function(list, index, item, record) {

                  document.getElementById('setting').style.display='none';
                    
                    this.up('morecard').push({
                        xtype: record.data.xtype
                    });
                }
            }
    },
    
    {
      html:'if a product is not in available inventory,<br>you may request a special order.',
      style:'font-size:0.8em;padding-top:1.3em;text-align:center;background-color:#EEEEEE;',
    },
    
    {
      html:'Your Personal Services',
      style:'text-align:center;font-size:1.5em;padding-top:0.4em;background-color:#EEEEEE;',
    },
    
    {
    xtype:'list',
    flex:1,
    scrollable:false,
    itemTpl:'{title}',
    store:'Services',
    ui:'round',
    style:'padding-top:0em;',
    }] 

  }],
  
}

});