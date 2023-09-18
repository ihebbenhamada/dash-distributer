class Ui_offreOperator {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI()
        this.operator=null;
        this.typeOffre=null;

    }

    DATALISTOPERATOR(data) {
        this.operator = data.res;
        console.log(this.operator,"operator receive");
        dati_select.UPDATE("selectOffreOperatorName");
    }
    DATALISTTYPEOFFRE(data) {
        this.typeOffre = data.res;
        console.log(this.typeOffre,"typeOffre receive");
        dati_select.UPDATE("inputOffreOperatorTypeofOffer");
    }

    Submit_form_add(){
        var name = $("[id=inputOffreOperatorOffre]").find("input").val();
        var operator_id  = $("[id=selectOffreOperatorName]").find("select").val();
        var payment_method = $("[id=inputOffreOperatorTypeofOffer]").find("select").val();
        var communication = $("[id=inputOffreOperatorCommunication]").find("input").val();
        var data = $("[id=inputOffreOperatorData]").find("input").val();
        var note  = $("[id=inputOffreOperatorOtherOptions]").find("input").val();
        var price_ht = $("[id=inputOffreOperatorPriceHt]").find("input").val();
        var tva = $("[id=inputOffreOperatorTVA]").find("input").val();
        var discount = $("[id=inputOffreOperatorDiscount]").find("input").val();
        var image = $("[id=inputOffreOperatorDiscount]").find("input").val();
        IOffreOperator.ADD_OFFRE_OPERATOR(operator_id,name,image,payment_method,communication,data,note,price_ht,tva,discount);

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
let offreOperator_ui = new Ui_offreOperator();