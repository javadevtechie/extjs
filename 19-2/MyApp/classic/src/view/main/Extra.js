Ext.define ('MyApp.view.main.Extra',{
    extend: 'Ext.grid.Panel',
    xtype: 'extra',
    store :{type: 'extra'}, //store.extra
    columns :[
        { text: 'Name',  dataIndex: 'name', width: 200 },
        { text: 'Email', dataIndex: 'email', width: 250 },
        { text: 'Phone', dataIndex: 'phone', width: 120 }
    ],
    height: 200
})