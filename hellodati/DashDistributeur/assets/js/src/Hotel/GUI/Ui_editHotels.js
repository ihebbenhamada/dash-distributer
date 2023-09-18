class Ui_editHotel {
    constructor() {
        this.EVENTS_UI();
        this.cards=[];
        this.chains=[];
        this.stars=[];
        this.offreHotel=[];
        this.country=[];
        this.businessManager=[];
        this.languages=[];
    }

    DATALISTServices(data) {
        console.log(data,"dataHotel");
        if(data != null){
            this.cards = data.res;
            console.log(this.cards,"edittt cardsss");
            DatiListApplications_ui.UPDATE("ListApplicationHotelEdit");
        }

    }
    DATALISTCHAIN(data) {
        this.chains = data.res;
        console.log(this.chains,"offreOperator receive");
        dati_select.UPDATE("selectHotelsChainEdit");
    }
    DATALISTSTARS(data) {
        this.stars = data.res;
        console.log(   this.stars,"stars");
        dati_select.UPDATE("selectHotelsCategoriesEdit");
    }
    DATALISTOFFREHOTEL(data) {
        this.offreHotel = data.res;
        console.log(this.offreHotel,"offreHotel");
        dati_select.UPDATE("selectHotelsCommercialOfferEdit");
    }
    DATALISTBUSSINESMANAGER(data) {
        this.businessManager = data.res;
        console.log(this.businessManager,"businessManager");
        dati_select.UPDATE("selectHotelsBusinessManagerEdit");
    }
    DATALISTLANGUAGES(data) {
        this.languages = data.res;
        console.log(this.languages,"languages");
        dati_multichoose.UPDATE("inputListOfLanguagesEdit");

    }
    DATALISTCOUNTRY(data) {
        this.country = data.res;
        console.log(this.country,"country");
        dati_select.UPDATE("selectHotelsCountryEdit");
    }
    DATALISTTIMEZONE(data) {
        this.timeZone = data.res;
        console.log(this.timeZone,"timeZone");
        dati_select.UPDATE("selectHotelsTimeZoneEdit");
    }
    /* EDIT HOTEL*/
    Submit_form_edit(){
        var id = hotelList_ui.selectedHotel.id;
        var offer_id = $("[id=selectHotelsCommercialOfferEdit]").find("select").val();
        var business_manager_id = $("[id=selectHotelsBusinessManagerEdit]").find("select").val();
        var country_id = $("[id=selectHotelsCountryEdit]").find("select").val();
        var chain_id = $("[id=selectHotelsChainEdit]").find("select").val();
        var time_zone_id = $("[id=selectHotelsTimeZoneEdit]").find("select").val();
        var name = $("[id=inputHotelsNameHotelEdit]").find("input").val();
        var stars = $("[id=selectHotelsCategoriesEdit]").find("select").val();
        var address = $("[id=inputHotelsAdresseEdit]").find("input").val();
        var city = $("[id=inputHotelsCityEdit]").find("input").val();
        var postal_code = $("[id=inputHotelsPostalCodeEdit]").find("input").val();
        var capacity = $("[id=inputCapacityEdit]").find("input").val();
        var tel_demande = $("[id=inputPhoneRequestEdit]").find("input").val();
        var tab_demande = $("[id=inputTabletRequestEdit]").find("input").val();
        var logo = $("[id=inputTabletRequestEdit]").find("input").val();
        var cover = $("[id=inputTabletRequestEdit]").find("input").val();
        var prefix = 1;
        var country_id_responsable = $("[id=selectHotelsCountryEdit]").find("select").val();
        var name_responsable = $("[id=inputHotelsManagerNameEdit]").find("input").val();
        var email_responsable = $("[id=inputHotelsManagerEmailEdit]").find("input").val();
        var login = $("[id=inputHotelsLoginEdit]").find("input").val();
        var password = $("[id=inputHotelsPasswordEdit]").find("input").val();
        var languages =  dati_multichoose.defaultLnagugeListDB;
        var services =DatiListApplications_ui.listServiceDB;
        var contacts =["",$("[id=inputPhoneEdit]").find("input").val(),"",$("[id=inputEmailEdit]").find("input").val(),"","",$("[id=inputFaxEdit]").find("input").val(),$("[id=inputWebSiteEdit]").find("input").val()]

        IAddHotel.EDIT_HOTEL(id,offer_id,business_manager_id,country_id,chain_id,time_zone_id,name,stars,
            address,city,postal_code,capacity,tel_demande,tab_demande,logo,cover,prefix,country_id_responsable,
            name_responsable,email_responsable,login,password,languages,services,contacts);



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
let editHotel_ui = new Ui_editHotel();