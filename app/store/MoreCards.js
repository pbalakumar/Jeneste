Ext.define('jeneste.store.MoreCards', {

extend: 'Ext.data.Store',

    config: {
        
        fields: ['title', 'xtype'],
        
        data: [

            { title: 'Browse Available Products',xtype: 'browse' },
            
            { title: 'Special Order Product', xtype: 'special' }
            
            ]
        
        }

});