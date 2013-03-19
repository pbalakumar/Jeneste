Ext.define('jeneste.view.Products',{
	
  extend:'Ext.Panel',
  
  extend:'Ext.List',
	
  xtype: 'browse',
	
  config: {
		
        fullscreen:true,

        title:'Jeneste',
        
        grouped:true,
			  
              itemTpl: '{productname}',
			  
              store:'Products',
			  
              indexBar:true,
        
        items:[{

            xtype:'toolbar',                                       
            docked:'top',  
            ui:'plain',
            items:[{  
            xtype: 'searchfield', 
            width:300,                                                
            placeHolder: 'Search Available Products'  
            
            }]  
        }]  
}
});