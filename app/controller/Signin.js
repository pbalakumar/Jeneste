Ext.define('jeneste.controller.Signin', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        
         signinbutton:{
         	
         	selector:'#signinbtn',
         	xtype:'button'
          },
          
          email:{

          	selector:'#email',
          	xtype:'textfield'
          },
          password:{

          	selector:'#password',
          	xtype:'passwordfield'
          }

        },
        control: {
            
            signinbutton:{
               
                
            	tap:'onSignin'
            }

        }


    },

    onSignin:function(button,e,options)
    {
    	   Ext.Ajax.request({
                                   
                                   url: '/Jeneste_web/Signin.php',
                                   
                                   params : {
                                    
                                    email:this.getEmail().getValue(),

                                    password:this.getPassword().getValue(),

                                   },
                                   success: function(response) {
                                   
                                   var text = response.responseText;

                                   if(text=='login')
                                   {
                                      Ext.Msg.alert('Success'); 
                                      sessionStorage.setItem('loggedin',true);
                                      Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left',duration: 500,easing: 'ease-in-out'});
                                      Ext.Viewport.setActiveItem(2);
                                   }
                                   else{
                                   
                                    Ext.Msg.alert('Invalid Login'); 

                                   }
                                   
                                   }
                                
                           });
    }
    

   
});