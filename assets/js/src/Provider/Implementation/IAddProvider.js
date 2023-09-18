class i_AddProvider{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    ADD_PROVIDER(provider_name,tax_registration,admission_date,adresse,city,zip,country,manager_name,manager_email,post,logo){
        var data = {
            country_id:country,
            name:provider_name,
            logo:logo,
            reg_number:tax_registration,
            address:adresse,
            city:city,
            postal_code:zip,
            manager_name:manager_name,
            manager_email:manager_email,
            post:post,
            addmission_date:admission_date
        };
        SSAPI.SUBMIT({
            uri:"/Provider/add",
            onsuccess:"addProviderSuccess",
            onerror:"addProvider_error",
            data:data
        });

        console.log(data,'daataa add Provider');


    }
    GET_COUNTRY(){
        SSAPI.SUBMIT({
            uri:"/Country/getAll",
            onsuccess:"countryReceive",
            onerror:"countryReceive_error",
        });
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "AddProvider" ){
                var event = new CustomEvent("SHOWInputProvider");
                document.dispatchEvent(event);
                IAddProvider.GET_COUNTRY()
            }

        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("addProviderSuccess", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Add Provider With Success!");
        }, false);
        document.addEventListener("addProvider_error", function(e){
            addProvider_ui.SHOW_POPUP_ERROR("Provider Add  Failed!");
        }, false);
        document.addEventListener("countryReceive", function(e){
            addProvider_ui.DATALISTCOUNTRY(e.detail);
        }, false);
    }
}

let IAddProvider= new  i_AddProvider();