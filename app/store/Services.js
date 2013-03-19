
Ext.define('jeneste.store.Services', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['title'],
        data: [
            { title: "<img src='resources/images/Groceries.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Groceries' },
            { title: "<img src='resources/images/dry_cleaning.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Dry Cleaning'},
            { title: "<img src='resources/images/travel.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Travel'},
            { title: "<img src='resources/images/Shopping.png' width=30 height=30 >&nbsp;&nbsp;&nbsp;"+'Shopping'},

        ]
    }
});