class Ui_OffreHotel {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI()
        this.offreOperator=null;
        this.accessory=null;
        this.typeOffre=null;
        this.brand=null;
        this.modal=null;

    }

    DATALISTOFFRE_OPERATOR(data) {
        this.offreOperator = data.res;
        console.log(this.offreOperator,"offreOperator receive");
        dati_select.UPDATE("selectOffreHotelOperatorName");
    }
    DATALISTACCESSORY(data) {
        this.accessory = data.res;
        console.log(this.accessory,"accessory receive");
        dati_select.UPDATE("selectOffreHotelSupport");
    }
    DATALISTTYPEOFFRE(data) {
        this.typeOffre = data.res;
        console.log(this.typeOffre,"typeOffre receive");
        dati_select.UPDATE("selectOffreHotelPaymentMethod");
    }
    DATALIST_BRANDS(data) {
        this.brand = data.res;
        console.log(this.brand,"brand receive");
        dati_select.UPDATE("selectOffreHotelPhoneMark");
    }
    DATALIST_Modal(data) {
        this.modal = data.res;
        console.log(this.modal,"modalmodal receive");
        dati_select.UPDATE("selectOffreHotelPhoneModel");
    }

    Submit_form_add(){
        var name = $("[id=inputHotelOffreName]").find("input").val();
        var offer_operator_id  = $("[id=selectOffreHotelOperatorName]").find("select").val();
        var brand_id = $("[id=selectOffreHotelPhoneMark]").find("select").val();
        var model_id = $("[id=selectOffreHotelPhoneModel]").find("select").val();
        var accessory_id = $("[id=selectOffreHotelSupport]").find("select").val();
        var comm_day  = $("[id=inputOffreHotelDailyCommunication]").find("input").val();
        var data_day = $("[id=inputOffreHotelDailyData]").find("input").val();
        var accessories = $("[id=inputAddOtherAccessoriesOffreHotel]").val();
        var payment_method = $("[id=selectOffreHotelPaymentMethod]").find("select").val();
        var price_ht = $("[id=inputHotelOffrePrice]").find("input").val();
        var tva = $("[id=inputHotelOffreTVA]").find("input").val();
        var image = $("[id=inputHotelOffreTVA]").find("input").val();
        IOffreHotel.ADD_OFFRE_HOTEL(name,offer_operator_id,brand_id,model_id,accessory_id,comm_day,data_day,accessories,payment_method,price_ht,tva,image);

    }

    EVENTS_UI(){
        $(document).on('change','[dati-select-list-selectoffrehotelphonemark]',function(){
            var brand = $(this).val();
            console.log(brand,"khelloooobrand");
            IOffreHotel.GET_MODELS(brand);
        });
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
let OffreHotel_ui = new Ui_OffreHotel();