class Ui_addProvider {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI()
        this.country=null;

    }

     DATALISTCOUNTRY(data) {
        this.country = data.res;
        console.log(this.country,"country");
         dati_select.UPDATE("inputProviderCountry");
    }

    Submit_form_add(){
        var provider_name = $("[id=inputProviderName]").find("input").val();
        var tax_registration = $("[id=inputProviderTaxRegistration]").find("input").val();
        var admission_date = $("[id=inputProviderAdmissionDate]").find("input").val();
        var adresse = $("[id=inputProviderAdress]").find("input").val();
        var city = $("[id=inputProvidersCity]").find("input").val();
        var zip = $("[id=inputProviderZIP]").find("input").val();
        var country = $("[id=inputProviderCountry]").find("select").val();
        var manager_name = $("[id=inputProviderManagerName]").find("input").val();
        var manager_email = $("[id=inputProviderManagerEmail]").find("input").val();
        var post = $("[id=inputProviderPost]").find("input").val();
        var logo = $("[id=inputProviderPost]").find("input").val();

        IAddProvider.ADD_PROVIDER(provider_name,tax_registration,admission_date,adresse,city,zip,country,manager_name,manager_email,post,logo);



    }

    EVENTS_UI(){
    }

    EVENTS_SSAPI(){
    }

    /*ALL POP UP*/
    SHOW_POPUP_SUCCESS(msg){
        $("[DATI-POPUP=sucess]").find("[DATI-MSG-SUCCESS]").html(msg)
        $("[DATI-POPUP=sucess]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=sucess]").css("display","none");
        }, 1000);

    }

    SHOW_POPUP_ERROR(msg){
        $("[DATI-POPUP=error]").find("[DATI-MSG-ERROR]").html(msg)
        $("[DATI-POPUP=error]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=error]").css("display","none");
        }, 1000);
    }
    /* END ALL POP UP*/
}
let addProvider_ui = new Ui_addProvider();