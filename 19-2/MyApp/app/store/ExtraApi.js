Ext.define('MyApp.store.ExtraApi',{
    extend: 'Ext.data.Store',
    alias: 'store.extraApi',
    remoteFilter:true,
    proxy: {
        type:'ajax',
        url:'https://jsonplaceholder.typicode.com/users'
    },
    autoLoad: true
})
