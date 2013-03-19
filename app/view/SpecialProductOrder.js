Ext.define('jeneste.view.SpecialProductOrder',{

		extend:'Ext.form.Panel',

        xtype:'special',

		config:{
            title:'Jeneste',
            fullscreen:true,
            styleHtmlContent:true,  
//title bar items
            items:[
            {
            
            xtype:'toolbar',
            ui:'plain',
            title:'Special Order',        
            
            },

            {
            
            layout:'vbox',
            items:[{
            
            xtype:'fieldset',
            
            items:[{

            xtype:'textfield',
            label:'<font size=2>Name</font>',
            id:'textlabel'
            },
            {
            xtype:'checkboxfield',
            label:'<font size=2>Option1</font>',
            name:'one'                
            },
            {
            xtype:'checkboxfield',
            label:'<font size=2>Option2</font>'
            },

            {
            
            xtype:'selectfield',
                         	
            label:'<font size=2>Select</font>',

            options:[
            {
            text:'First',value:'First'
            },
            {
            text:'Second',value:'Second'
            }]    
            }]},
            {
            xtype:'button',
            text:'Add to My Requests',
            ui:'buttons',
            handler:function()
            {
                                // Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left',duration: 500,easing: 'ease-in-out'});
                                //  Ext.Viewport.setActiveItem(2);
            }
            }],
            }]
}
});