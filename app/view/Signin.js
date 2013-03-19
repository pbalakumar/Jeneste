Ext.define('jeneste.view.Signin',{

		extend:'Ext.form.Panel',
        
        id:'signinForm',

        requires:[
        
        'Ext.form.FieldSet',
        'Ext.field.Password'],

		config:{

            fullscreen:true,
            ui:'plain',
//title bar items
        
            items:[{
                xtype:'titlebar',
                docked:'top',
                title:'Jeneste',

                items:[{

                    xtype:'button',
                    text:'Cancel',
                    align:'left',
                    handler:function(){
                    Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right',duration: 500,easing: 'ease-in-out'});
                    Ext.Viewport.setActiveItem(0);
                    }
                }]

                },
                 
                {
                    html:'<br> </br>'
                },

                {
                    layout:'vbox',
                 
                    items:[{
                    
                    xtype:'fieldset', 
                      
                    items:[{
                    
                    xtype:'textfield',
                    label:'Email',
                    id:'email',
                    name:'email'
                            
                    },
                    {

                    xtype:'passwordfield',
                    label:'Password',
                    id:'password',
                    name:'password'
                            
                    }]

                  },
                  {
                    xtype:'button',
                    text:'Signin',
                    id:'signinbtn',
                    ui:'buttons',
                
                
                  }],

}]

}

});