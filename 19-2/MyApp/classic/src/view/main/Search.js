Ext.define('MyApp.view.main.Search',{
    extend: 'Ext.form.Panel',
    title: 'Add airLine',
    controller :'controller.search',
    defaultType: 'textfield',
    items:[{
        fieldLabel: 'Name',
        name: 'name'
    },
    {
        fieldLabel: 'Country',
        name: 'country'
    },
    {
        fieldLabel: 'logo',
        name: 'logo'
    },
    {
        fieldLabel: 'slogan',
        name: 'slogan'
    },
    {
        fieldLabel: 'head_quaters',
        name: 'head_quaters'
    },
    {
        fieldLabel: 'website',
        name: 'website'
    },
    {
        fieldLabel: 'established',
        name: 'established'
    },
    {
        xtype: 'button',
        name: 'click',
        formBind: true,
        text: 'Submit',
        handler: 'onCreateClick'
    }
]
})