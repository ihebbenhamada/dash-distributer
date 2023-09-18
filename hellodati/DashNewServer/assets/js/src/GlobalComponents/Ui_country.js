let Ui_country = class {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    DATALIST(data){
        this.list = data;
    }

    getSelectOption(element){
        var options = "<option value=''>Choose Country</option>";
        for(var i=0; i<this.list.length;i++){
            options=options+'<option value="'+this.list[i].id+'">'+this.list[i].name+'</option>';
        }
        $(element).html(options);
    }


    EVENTS_UI(){

        document.addEventListener("SSAPI_READY", function(e){
            SSAPI.SUBMIT({
                uri:"/Country/getAll",
                onsuccess:"counrty_receive",
                onerror:"counrty_receive_error",
            })
        }, false);


    }

    EVENTS_SSAPI(){
        document.addEventListener("counrty_receive", function(e){
            country_ui.DATALIST(e.detail.res);

            country_ui.getSelectOption($("[dati-input-name=country]"));
            country_ui.getSelectOption($("[dati-input-name=country_employee]"));
            country_ui.getSelectOption($("[dati-input-name=country_employee_edit]"));
            country_ui.getSelectOption($("[dati-input-name=country_edit_guest]"));
        }, false);
    }

};

let country_ui = new Ui_country();