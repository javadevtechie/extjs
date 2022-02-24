Ext.define('MyApp.view.main.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search',
    onCreateClick: function () {
        var form=this.getView().getForm();

        var formData=form.getValues();
        var jsonForm=Ext.JSON.encode(formData);
        console.log(formData);
        console.log(jsonForm);
        form.submit({
            url: 'https://api.instantwebtools.net/v1/airlines',
            method:'POST',
            params: jsonForm,
            
        });

    }
})