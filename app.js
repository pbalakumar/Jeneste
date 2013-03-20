
branch
Ext.application({
    controllers: ["Signin", "Main"],

    name: 'jeneste',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'Signin', 'Home', 'Requests', 'Notifications', 'Calendar', 'More','SpecialProductOrder','Products'],

    stores:['Requests','Notifications','Products','MoreCards','Services'],

    models:['Request','Notification','Product'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.png',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('jeneste.view.Main'));
        Ext.Viewport.add(Ext.create('jeneste.view.Signin'));
        Ext.Viewport.add(Ext.create('jeneste.view.Home'));
        Ext.Viewport.add(Ext.create('jeneste.view.SpecialProductOrder'));
        Ext.Viewport.add(Ext.create('jeneste.view.Products'));
		Ext.Viewport.setActiveItem(0);
        username="";
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
