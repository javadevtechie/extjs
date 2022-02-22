Ext.define ('MyApp.view.main.Extra',{
    extend: 'Ext.grid.Panel',
    xtype: 'extra',
    id: 'testGrid',
    store :{type: 'extraApi'}, //store.extra
    columns :[
        { text: 'Name',  dataIndex: 'name', width: 200 },
        { text: 'Email', dataIndex: 'email', width: 250 },
        { text: 'Phone', dataIndex: 'phone', width: 120 },
        { text: 'Website', dataIndex: 'website', width: 120 }
    ],
    selModel:{
        injectCheckbox: 'first',
        checkOnly: true,
        model:'SIMPLE',
        type: 'checkboxmodel'
    },
    buttons :[
        {
            text: 'select All',
            handler: function(){
                Ext.getCmp('testGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Remove all',
            handler :function(){
                Ext.getCmp('testGrid').getSelectionModel().deselectAll();
            }

        },
        {
            text: 'Get all',
            handler :function(){
                //alert();
              var data=  Ext.getCmp('testGrid').getSelectionModel().getSelection();
              console.log(data);
            }

        }
    ]
})