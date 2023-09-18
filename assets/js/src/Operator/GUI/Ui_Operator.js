class Ui_Operator{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI()
        this.country=null;

    }

    DATALISTCOUNTRY(data) {
        this.country = data.res;
        console.log(this.country,"country");
        dati_select.UPDATE("inputOperatorCountry");
    }

    Submit_form_add(){

        var name = $("[id=inputOperatorName]").find("input").val();
        var logo = $("[id=inputOperatorName]").find("input").val();
        var reg_number = $("[id=inputOperatorNumberTaxRegistration]").find("input").val();
        var address = $("[id=inputOperatorAdresse]").find("input").val();
        var city = $("[id=inputOperatorCity]").find("input").val();
        var country_id = $("[id=inputOperatorCountry]").find("select").val();
        var postal_code = $("[id=inputOperatorZIP]").find("input").val();
        var manager_name = $("[id=inputOperatorManagerName]").find("input").val();
        var manager_email = $("[id=inputOperatorManagerEmail]").find("input").val();
        var post = $("[id=inputOperatorPost]").find("input").val();

        IOPERATOR.ADD_OPERATOR(country_id,name,logo,reg_number,address,city,postal_code,manager_name,manager_email,post);



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
let Operator_ui = new Ui_Operator();