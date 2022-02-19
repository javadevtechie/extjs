Ext.define('MyApp.view.main.ExtraController',{
    extend: 'Ext.app.ViewController',
    alias : 'controller.extra',
    init :function (){
       this.control({
           '#callController':{
               click: 'callOnclick'
           }
       }) 
    },
    callOnClick:function(){
        alert('Hi alert');
    }
})