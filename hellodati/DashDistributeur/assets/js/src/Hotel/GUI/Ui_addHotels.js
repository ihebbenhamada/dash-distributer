class Ui_addHotel {
    constructor() {
        this.EVENTS_UI();
        this.cards=[];
        this.chains=[];
        this.stars=[];
        this.offreHotel=[];
        this.businessManager=[];
        this.languages=[];
        this.timeZone=[];
        this.country=[];
        this.hotelAdded=[];
        this.primaryLanguage=[];
    }

    DATALIST(data) {
        console.log(data,"dataHotel");
        if(data != null){
            this.cards = data.res;
            console.log(this.cards,"cardsss");
        }

    }
    DATALISTCHAIN(data) {
        this.chains = data.res;
        console.log(this.chains,"offreOperator receive");
        dati_select.UPDATE("selectHotelsChain");
    }
    DATALISTSTARS(data) {
        this.stars = data.res;
        console.log(   this.stars,"stars");
        dati_select.UPDATE("selectHotelsCategories");
    }
    DATALISTOFFREHOTEL(data) {
        this.offreHotel = data.res;
        console.log(this.offreHotel,"offreHotel");
        dati_select.UPDATE("selectHotelsCommercialOffer");
    }
    DATALISTBUSSINESMANAGER(data) {
        this.businessManager = data.res;
        console.log(this.businessManager,"businessManager");
        dati_select.UPDATE("selectHotelsBusinessManager");
    }
    DATALISTLANGUAGES(data) {
        this.languages = data.res;
        console.log(this.languages,"languages");
        dati_multichoose.UPDATE("inputListOfLanguages");

    }
    DATALISTCOUNTRY(data) {
        this.country = data.res;
        console.log(this.country,"country");
        dati_select.UPDATE("selectHotelsCountry");
    }
    DATALISTTIMEZONE(data) {
        this.timeZone = data.res;
        console.log(this.timeZone,"timeZone");
        dati_select.UPDATE("selectHotelsTimeZone");
    }
    HOTEL_ADDED_RECEIVE(data) {
        console.log(data.res,"hottttttttelll")
        this.hotelAdded = data.res;
        console.log(this.hotelAdded,"this.hotelAdded");
       /* dati_select.UPDATE("selectHotelsTimeZone");*/
    }
    HOTEL_PRIMARY_LANGUAGE_RECEIVE(data) {
        console.log(data.res,"hottttttttelll")
        this.primaryLanguage = data.res;
        console.log(this.primaryLanguage,"this.primaryLanguage");
       /* dati_select.UPDATE("selectHotelsTimeZone");*/
    }
     /* ADD HOTEL*/
    Submit_form_add(){
        var offer_id = $("[id=selectHotelsCommercialOffer]").find("select").val();
        var business_manager_id = $("[id=selectHotelsBusinessManager]").find("select").val();
        var country_id = $("[id=selectHotelsCountry]").find("select").val();
        var chain_id = $("[id=selectHotelsChain]").find("select").val();
        var time_zone_id = $("[id=selectHotelsTimeZone]").find("select").val();
        var name = $("[id=inputHotelsNameHotel]").find("input").val();
        var stars = $("[id=selectHotelsCategories]").find("select").val();
        var address = $("[id=inputHotelsAdresse]").find("input").val();
        var city = $("[id=inputHotelsCity]").find("input").val();
        var postal_code = $("[id=inputHotelsPostalCode]").find("input").val();
        var capacity = $("[id=inputCapacityHotel]").find("input").val();
        var tel_demande = $("[id=inputPhoneRequest]").find("input").val();
        var tab_demande = $("[id=inputTabletRequest]").find("input").val();
        var logo = $("[id=inputTabletRequest]").find("input").val();
        var cover = $("[id=inputTabletRequest]").find("input").val();
        var prefix = 1;
        var country_id_responsable = $("[id=selectHotelsCountry]").find("select").val();
        var name_responsable = $("[id=inputHotelsManagerName]").find("input").val();
        var email_responsable = $("[id=inputHotelsManagerEmail]").find("input").val();
        var login = $("[id=inputHotelsLogin]").find("input").val();
        var password = $("[id=inputHotelsPassword]").find("input").val();
        var languages =  dati_multichoose.defaultLnagugeListDB;
        var services =DatiListApplications_ui.listServiceDB;
        var contacts =["",$("[id=inputPhoneHotel]").find("input").val(),"",$("[id=inputEmailHotel]").find("input").val(),"","",$("[id=inputFaxHotel]").find("input").val(),$("[id=inputWebSiteHotel]").find("input").val()]

        IAddHotel.ADD_HOTEL(offer_id,business_manager_id,country_id,chain_id,time_zone_id,name,stars,
            address,city,postal_code,capacity,tel_demande,tab_demande,logo,cover,prefix,country_id_responsable,
            name_responsable,email_responsable,login,password,languages,services,contacts);



    }
   /* REMPLIR SUCCES ADD HOTEL*/
    fillPageSuccess() {
        console.log(this.hotelAdded,"this.hotelAddedhotelAddedhotelAdded");
        try {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-DOMAINE-NAME]").html(this.hotelAdded[0].url);
        } catch (e) {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-DOMAINE-NAME]").html('');
        }
        try {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-LOGIN-ADDED]").html(this.hotelAdded[0].Owner.User[0].username);
        } catch (e) {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-LOGIN-ADDED]").html('');
        }
        try {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-DEFAULT-LANGUAGE]").html(this.primaryLanguage[0].languageName);
        } catch (e) {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-DEFAULT-LANGUAGE]").html('');
        }
        try {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-PASSWORD-ADDED]").html(this.hotelAdded[0].Owner.User[0].password);
        } catch (e) {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-PASSWORD-ADDED]").html('');
        }
        try {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-DEFAULT-CURRENCY]").html("Dinar tunisien");
        } catch (e) {
            $("[DATI-PAGE=SuccessAddHotel]").find("[DATI-DEFAULT-CURRENCY]").html('');
        }
    }

    EVENTS_UI(){

        $(document).on('change', '[DATI-SEARCH-MAP-SELECT]', function() {
            console.log("tesssttgggt");
            var value = $(this).val();
            $('[DATI-SEARCH-MAP]').css('display','none');
            $('[DATI-SEARCH-MAP='+value+']').css('display','inline-block');
        });
        $(document).on('change', '[DATI-SEARCH-MAP-SELECT]', function() {
            console.log("tesssttgggt");
            var value = $(this).val();
            $('[DATI-SEARCH-MAP]').css('display','none');
            $('[DATI-SEARCH-MAP='+value+']').css('display','inline-block');
        });
        $(document).on('change', '[id=inputHotelsNameHotel]' > 'input', function() {
            var value = $("[id=inputHotelsNameHotel]").find("input").val();
            if(value!= undefined){
                var DomainName = value.replace(/ /g,"_");
                $('[DATI-DOMAIN-NAME-HOTEL-PAGE-ADD-HOTEL]').val(DomainName);
            }

        });
    }
}
let addHotel_ui = new Ui_addHotel();