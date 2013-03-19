Ext.define('jeneste.store.Products',{

extend:'Ext.data.Store',

config:
{
 
model:'jeneste.model.Product',

sorters:'productname',

grouper:function(record)
{
	return record.get('productname')[0];
},

data:
[
{productname:'Product 1'},
{productname:'Product 2'},
{productname:'Product 3'},
{productname:'Product 4'}
],
}
});