Ext.define("jeneste.view.Main", {

extend: 'Ext.Panel',

xtype: 'landingpanel',

requires:[
		
		'Ext.TitleBar'
		],

config: {
		
		title: 'Home',
		iconCls: 'home',
        fullscreen:true,
		scrollable: true,
		styleHtmlContent: true,
		cls: 'home',

		items:[
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'jeneste',
				items:[
					{
						align: 'right',
						text: 'Sign In',
						handler: function() {
						Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left',duration: 500,easing: 'ease-in-out'});
						Ext.Viewport.setActiveItem(1);
					    }
					}]
			},

			{   
				xtype: 'button',
				docked: 'bottom',
				iconCls:'icon_3',
				iconMask: true,
				text: ' &nbsp;&nbsp;Pricing plans and payment options',
				align: 'left',
				height: '50px',
				ui: 'buttons',
				handler: function(){
					
				}
			},

			{
				xtype: 'button',
				docked: 'bottom',
				iconCls: 'thumbs',	
				iconMask: true,
				text: ' &nbsp;&nbsp;Learn how Jeneste works',
				align: 'left',
				height: '50px',
				ui: 'buttons',
				handler: function() {
					
				}
			},
			
			{
				xtype: 'button',
				docked: 'bottom',
				iconCls: 'phone',
				iconMask: true,
				text: '&nbsp;&nbsp;  See a list of services and products <br/> &nbsp;&nbsp; or try out Concierge',
				align: 'left',
				height: '50px',
				labelWrap: true,
				ui: 'buttons',
				handler: function() {
					
				}
			}],

		    html:[
			'<h1> <font size="5">Run Your Errands On Our Time.</font></h1>',
			"<p>Jeneste is your own personal assistant that helps simplify your life and gives you back your free time. Sign in or register to get started.</p>"
		].join("")

}
});