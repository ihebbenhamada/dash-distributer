class Ui_listHotels {
    constructor() {
        this.total = 0;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.selectedHotel=null;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.filterBy={
            "Name" : 1,
            "Reference" : 2,
            "Category" : 3,
        };
        this.stars={
            "Select category" : -1,
            "★" : 1,
            "★★" : 2,
            "★★★" : 3,
            "★★★★" : 4,
            "★★★★★" : 5,
        };

        $(document).on('change','[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]',function(){
            var filterSelected = $(this).val();

            switch (filterSelected) {
                case "1" :
                    iHotel.GET_ALL_HOTELS2();
                    $("[DATI-ID=searchBarListHotels] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListHotels] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_search_byname]").css("display","inline-block");
                    break;
                case "2" :
                    iHotel.GET_ALL_HOTELS2();
                    $("[DATI-ID=searchBarListHotels] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListHotels] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_search_byreference]").css("display","inline-block");
                    break;
                case "3" :
                    iHotel.GET_ALL_HOTELS2();
                    $("[DATI-ID=searchBarListHotels] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListHotels] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listhotels_search_bycategory]").css("display","inline-block");
                    $("[DATI-ID=searchBarListHotels] [DATI-ID=listhotels_search_bycategory]").val(-1);
                    break;

            }
        });


    }

    DATALIST(data){
        this.hotels = data;
        try{
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
        }catch (e) {
            this.total = 0;
            this.nbrRows = 0;
        }
    }
    DATA_SEARCH(data){
        this.hotels = data;
        dati_table.UPDATE("hotelList");

    }
    getStars(attribute){
        if (attribute!=null || attribute!="null"){


            var stars = "";
            for(var i= 0; i<attribute; i++){
                stars+="★";
            }
            return "<div class=\"stars_container\"><span style=\"color: #ffde66\" DATI-STAR-HOTEL >"+stars+"</span></div>";

        }else {
            return "";
        }
    }

    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/edit_button.png"  title="Edit" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditHotel"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="hotelList_ui.setSelected(this)"/>';
        }else{
            return "";
        }

    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/delete_button.png" title="Delete" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" onclick="hotelList_ui.DELETE(this)"/>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" DATI-LINK="DetailHotel" onclick="hotelList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Hotels]").find("[dati-id=HotelDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=Hotels]").find("[dati-id=HotelDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_hotel = this.selectedHotel.id;

        iHotel.DELETE_HOTEL(id_hotel);

    }


    DELETE_NAME(){
        var name = this.selectedHotel.name;
        name = name.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete hotel "+name);
    }

    DELETE(rest_element){
        console.log("raed");
        dati_alerte.UPDATE("HotelDeleteAlerte");
        this.setSelected(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    GET_POSITION_IN_TAB(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    fillAccessEdit(data){
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsManagerNameEdit]").find("input").val(data.name);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsManagerNameEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsManagerEmailEdit]").find("input").val(data.User[0].email);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsManagerEmailEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsLoginEdit]").find("input").val(data.User[0].username);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsLoginEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsPasswordEdit]").find("input").val(data.User[0].password);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsPasswordEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsConfirmPasswordEdit]").find("input").val(data.User[0].password);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsConfirmPasswordEdit]").find("input").val('');
        }
    }


    fillPageEdit(){
        iHotel.GET_HOTEL_ACCESS(this.selectedHotel.id);
        console.log(this.selectedHotel,"this.selectedHotelselectedHotel");
        console.log(this.selectedHotel.Time_Zone.id,"this.selectedHotel.Time_Zone.id");
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsChainEdit]").find("select").val(this.selectedHotel.name);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsChainEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsNameHotelEdit]").find("input").val(this.selectedHotel.name);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsNameHotelEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsCategoriesEdit]").find("select").val(this.selectedHotel.stars);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsCategoriesEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsAdresseEdit]").find("input").val(this.selectedHotel.address);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsAdresseEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsCityEdit]").find("input").val(this.selectedHotel.city);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsCityEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsPostalCodeEdit]").find("input").val(this.selectedHotel.postal_code);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsPostalCodeEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsCountryEdit]").find("input").val(this.selectedHotel.Country.id);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputHotelsCountryEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[DATI-DOMAIN-NAME-HOTEL-PAGE-EDIT-HOTEL]").val(this.selectedHotel.url);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[DATI-DOMAIN-NAME-HOTEL-PAGE-EDIT-HOTEL]").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsCommercialOfferEdit]").find("select").val(this.selectedHotel.Offer.id);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsCommercialOfferEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsBusinessManagerEdit]").find("select").val(this.selectedHotel.BusinessManager.id);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsBusinessManagerEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputPhoneRequestEdit]").find("input").val(this.selectedHotel.tel_demande);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputPhoneRequestEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputTabletRequestEdit]").find("input").val(this.selectedHotel.tab_demande);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputTabletRequestEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsTimeZoneEdit]").find("select").val(this.selectedHotel.Time_Zone.id);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=selectHotelsTimeZoneEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputPhoneEdit]").find("input").val(this.selectedHotel.Contact[0].Contacts[0].libelle);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputPhoneEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputFaxEdit]").find("input").val(this.selectedHotel.Contact[4].Contacts[0].libelle);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputFaxEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputEmailEdit]").find("input").val(this.selectedHotel.Contact[2].Contacts[0].libelle);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputEmailEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputWebSiteEdit]").find("input").val(this.selectedHotel.Contact[5].Contacts[0].libelle);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputWebSiteEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputCapacityEdit]").find("input").val(this.selectedHotel.capacity);
        } catch (e) {
            $("[DATI-PAGE=EditHotel]").find("[ID=inputCapacityEdit]").find("select").val('');
        }
    }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedHotel = this.hotels[i];
        console.log(this.selectedHotel,"aaaaa");
    }
}

let hotelList_ui = new Ui_listHotels();