let Ui_notifHistory = class {
    constructor() {
        this.cards=[];
        this.image=null;
        this.selectedNotif=null;
        this.gender=null;
        this.msgErreurNotifUp=[];
        this.EVENT_UI();
        $("[DATI-GENDER-ALL-UPDATE]").click(function () {
            $(this).css("background-color","rgb(17, 31, 53)");
            $(this).find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-MEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-MEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-WOMEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            notifHistory_ui.gender=-1;
        })
        $("[DATI-GENDER-MEN-UPDATE]").click(function () {
            $(this).css("background-color","rgb(17, 31, 53)");
            $(this).find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-ALL-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-ALL-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-WOMEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            notifHistory_ui.gender=1;
        })
        $("[DATI-GENDER-WOMEN-UPDATE]").click(function () {
            $(this).css("background-color","rgb(17, 31, 53)");
            $(this).find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-ALL-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-ALL-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-MEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-MEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            notifHistory_ui.gender=2;
        })
    }

    DATALIST(data){


        this.cards = [];
        for(var i=0;i < data.res.length; i++) {
            var card = {};
            card.id = data.res[i].id;
            card.gender_id = data.res[i].gender_id;
            card.nationality_id = data.res[i].nationality_id;
            card.min_age = data.res[i].min_age;
            card.max_age = data.res[i].max_age;
            card.title = data.res[i].title;
            card.descrip = data.res[i].descrip;
            card.price = data.res[i].price;
            card.promo = data.res[i].promo;
            card.image = data.res[i].media;
            card.media_type = data.res[i].media_type;
            card.num_views = data.res[i].num_views;
            card.clicked = data.res[i].clicked;
            card.atteint = data.res[i].atteint;
            card.end_date = data.res[i].end_date;
            card.begin_date = data.res[i].begin_date;
            card.enable = data.res[i].enable;
            this.cards.push(card);
        }

    }
    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }
    SETSELECTED_detail(rest_element){

        var id = $(rest_element).parent().parent().parent().attr("DATI-id");
        var listSearch = eval($(rest_element).parent().parent().parent().parent().attr("DATI-LIST"));
        this.selectedNotif = this.FIN_BY_ID_IN_LIST(listSearch,id);
        this.HEDEAR_DETAIL_Leisure();


    }

    HEDEAR_DETAIL_Leisure(){

        $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedNotif.title);
        $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedNotif.descrip);
        $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedNotif.image);
        $("[DATI-PAGE=detailNotif]").find("[dati-taux-clics]").html(this.selectedNotif.clicked);
        $("[DATI-PAGE=detailNotif]").find("[dati-taux-views]").html(this.selectedNotif.num_views);

    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    DELETE_NAME(){
        var title = this.selectedNotif.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to ending "+titleUper+" Notifivation");
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=NotificationHistory]").find("[dati-id=notifAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=NotificationHistory]").find("[dati-id=notifAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var notif_id = this.selectedNotif.id;
        iNotifHistory.DELETE_NOTIF(notif_id);

    }
    /* ******* DELETE ******* */
    GET_POSITION_IN_LIST(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_LIST(id){
        var pos = notifHistory_ui.GET_POSITION_IN_LIST(notifHistory_ui.cards,id);
        if(pos != -1){
            notifHistory_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("NotifList");
        notifHistory_ui.CANCEL_ALERTE();
    }

    /*    Update Notification*/
    EDIT_NOTIF(element){
        this.msgErreurNotifUp= [];
        dati_Erreurs.UPDATE("NotifErreursUp");
        var AgeTranche = $(element).find("[DATI-INPUT-NAME-UPDATE]").val()
        var array = AgeTranche.split("/");
        var min_age  = array[0] ;
        var max_age= array[1] ;
        var type = 1 ;
        var title = $(element).find("[dati-input-title-promo-update]").val();
        var description = $(element).find("[dati-input-desc-promo-update]").val();
        var price = $(element).find("[dati-input-price-promo-update]").val();
        var promo = $(element).find("[dati-input-taux-promo-update]").val();
        var nationality_id= $(element).find("[dati-input-country=AllCountry]").val();
        var begin_date = $(element).find("[DATI-DATE-BEGIN-UPDATE]").val() +" "+  $(element).find("[DATI-BEGIN-TIME-UPDATE]").val();
        var end_date = $(element).find("[ DATI-END-DATE-UPDATE]").val() +" "+  $(element).find("[DATI-END-TIME-UPDATE]").val();
        var gender_id;
        var media ;
        if(this.gender == null){
            gender_id= -1;
        }else{
            gender_id= this.gender;
        }
         if(this.image == null ){
             media =  notifHistory_ui.selectedNotif.image ;
         }else{
             media=this.image ;
         }

        var media_type = 1;
        if(title ==""){
            this.msgErreurNotifUp.push("title is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if(description===""){
            this.msgErreurNotifUp.push("descriptiopn is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if(price === ""){
            this.msgErreurNotifUp.push("Price is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if(promo === ""){
            this.msgErreurNotifUp.push("Promo is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if(nationality_id === ""){
            this.msgErreurNotifUp.push("Country is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if($(element).find("[DATI-BEGIN-DATE]").val() == "" && $(element).find("[DATI-BEGIN-TIME]").val() ==""){
            this.msgErreurNotifUp.push("Begin Date is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if($(element).find("[ DATI-END-DATE]").val() == "" &&  $(element).find("[DATI-END-TIME]").val()==""){
            this.msgErreurNotif.push("End Date is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }

        if(array[0] === ""){
            this.msgErreurNotifUp.push("Age is required");
            dati_Erreurs.UPDATE("NotifErreursUp");
        }
        if(this.image === null && notifHistory_ui.selectedNotif.image ==null){
            this.msgErreurNotifUp.push("image is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }


        if(this.msgErreurNotifUp.length == 0) {
            var data = {
                id:this.selectedNotif.id,
                type: type,
                title: title,
                description: description,
                price: price,
                promo: promo,
                media: media,
                gender_id: gender_id,
                media_type: media_type,
                nationality_id: nationality_id,
                min_age: min_age,
                max_age: max_age,
                begin_date:begin_date,
                end_date:end_date

            }

            SSAPI.SUBMIT({
                uri: "/Advertisment/update",
                data: data,
                onsuccess: "NotifEditSucces",
                onerror: "NotifEdit_error"
            });

        }
    }
    SHOW_POPUP_SUCCESS_NOTIF_UP(){
        $("[DATI-SEND-NOTIF-POP-UP-UPDATE]").css("display","block");
        setTimeout(function() {
            $("[DATI-SEND-NOTIF-POP-UP-UPDATE]").animate({bottom: '15px'});
            setTimeout(function() {
                $("[DATI-SEND-NOTIF-POP-UP-UPDATE]").css("display","none");
            }, 300);
        }, 1000);

    }
    SHOW_POPUP_ECHEC_NOTIF_UP(){
        $("[DATI-ECHEC-NOTIF-POP-UP-UPDATE]").css("display","flex");
        setTimeout(function() {
            $("[DATI-ECHEC-NOTIF-POP-UP-UPDATE]").animate({bottom: '15px'});
            setTimeout(function() {
                $("[DATI-ECHEC-NOTIF-POP-UP-UPDATE]").css("display","none");
            }, 300);
        }, 1000);

    }
    READ_VALUE_INPUT(){

        var begin_date_time = notifHistory_ui.selectedNotif.begin_date;
        var arrayBegin = begin_date_time.split(" ");
        var begin_date  = arrayBegin[0] ;
        var begin_time= arrayBegin[1] ;
        var end_date_time = notifHistory_ui.selectedNotif.end_date;
        var arrayEnd = end_date_time.split(" ");
        var end_date  = arrayEnd[0];
        var end_time= arrayEnd[1] ;


        $("[DATI-PAGE=EditNotification]").find("[dati-input-title-promo-update]").val(notifHistory_ui.selectedNotif.title);
        $("[DATI-PAGE=EditNotification]").find("[dati-input-desc-promo-update]").val(notifHistory_ui.selectedNotif.descrip);
        $("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").val(notifHistory_ui.selectedNotif.price);
        $("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").val(notifHistory_ui.selectedNotif.promo);
        $("[DATI-PAGE=EditNotification]").find("[DATI-INPUT-NAME-UPDATE]").val(notifHistory_ui.selectedNotif.min_age+"/"+ notifHistory_ui.selectedNotif.max_age );
        Ui_notification.DATALIST_AVAILABLE_COUNTRY(country_ui.list);

        $("[DATI-PAGE=EditNotification]").find("[dati-input-country=AllCountry]").val(notifHistory_ui.selectedNotif.nationality_id)
        if(begin_date != null){

            $("[DATI-PAGE=EditNotification]").find("[DATI-DATE-BEGIN-UPDATE]").val(begin_date);
        }
        if(begin_time != null){

            $("[DATI-PAGE=EditNotification]").find("[dati-begin-time-update]").val(begin_time);
        }
        if(end_date != null){

            $("[DATI-PAGE=EditNotification]").find("[dati-end-date-update]").val(end_date);
        }
        if(end_time != null){
            $("[DATI-PAGE=EditNotification]").find("[dati-end-time-update]").val(end_time);
        }


        $("[DATI-PAGE=EditNotification]").find("[dati-begin-date-update]").val(notifHistory_ui.selectedNotif.end_date);
        $("[DATI-PAGE=EditNotification]").find("[dati-role=clickableTrans]").css('background-image','url('+notifHistory_ui.selectedNotif.image+')');

        if(notifHistory_ui.selectedNotif.gender_id == -1 ){
            $("[DATI-GENDER-ALL-UPDATE]").css("background-color","rgb(17, 31, 53)");
            $("[DATI-GENDER-ALL-UPDATE]").find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-MEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-MEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-WOMEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
        }else if(notifHistory_ui.selectedNotif.gender_id == 1 ){
            $("[DATI-GENDER-MEN-UPDATE]").css("background-color","rgb(17, 31, 53)");
            $("[DATI-GENDER-MEN-UPDATE]").find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-ALL-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-ALL-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-WOMEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
        }else  if(notifHistory_ui.selectedNotif.gender_id == 2 ){
            $("[DATI-GENDER-WOMEN-UPDATE]").css("background-color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN-UPDATE]").find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-ALL-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-ALL-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-MEN-UPDATE]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-MEN-UPDATE]").find("p").css("color","rgb(17, 31, 53)");
        }

    }
    READ_VALUE_PREVIEW(){
        $("[DATI-PAGE=EditNotification]").find(".image_notif").find("img").attr("src",notifHistory_ui.selectedNotif.image);
        $("[DATI-PAGE=EditNotification]").find("[DATI-TITLE-PRIX-UPDATE]").html("PRIX");
        if( $("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").val() == ""){
            $("[DATI-PAGE=EditNotification]").find("[DATI-IMG-PROMO-UPDATE]").css("display","none");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PROMO-UPDATE]").css("display","none");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("display","inline-block");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("width","70px");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("top","70px");
        }

            if( $("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").val() == ""){
                $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("display","none");
                $("[DATI-PAGE=EditNotification]").find("[DATI-TITLE-PRIX-UPDATE]").html("");

            }

        $("[DATI-PAGE=EditNotification]").find("[DATI-TAUX-PRIX-UPDATE]").html(notifHistory_ui.selectedNotif.price+"DT");
        $("[DATI-PAGE=EditNotification]").find("[DATI-TAUX-PROMO-UPDATE]").html("-"+notifHistory_ui.selectedNotif.promo+"%")
        $("[DATI-PAGE=EditNotification]").find("[DATI-TITLE-PROMO-UPDATE]").html(notifHistory_ui.selectedNotif.title);
        $("[DATI-PAGE=EditNotification]").find("[DATI-DESC-PROMO-UPDATE]").html(notifHistory_ui.selectedNotif.descrip);



    }
    EVENT_UI(){

        $("[DATI-PAGE=EditNotification]").find("[dati-input-title-promo-update]").on('keyup', function() {
            $("[DATI-PAGE=EditNotification]").find("[dati-title-promo-update]").html($("[dati-input-title-promo-update]").val());


        });


        $("[DATI-PAGE=EditNotification]").find("[dati-input-desc-promo-update]").on('keyup', function() {
            $("[DATI-PAGE=EditNotification]").find("[dati-desc-promo-update]").html( $("[dati-input-desc-promo-update]").val());

        });

        $("[DATI-PAGE=EditNotification]").find("[DATI-INPUT-PRICE-PROMO-UPDATE]").on('keyup', function() {
            $("[DATI-PAGE=EditNotification]").find("[dati-taux-prix-update]").html( $("[DATI-INPUT-PRICE-PROMO-UPDATE]").val()+"DT");
            $("[DATI-PAGE=EditNotification]").find("[DATI-TITLE-PRIX-UPDATE]").html("PRIX");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("display","inline-block");

        });


        $("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").on('keyup', function() {
            $("[DATI-PAGE=EditNotification]").find("[dati-taux-promo-update]").html("-"+ $("[dati-input-taux-promo-update]").val()+"%");
            $("[DATI-PAGE=EditNotification]").find("[DATI-IMG-PROMO-UPDATE]").css("display","inline-block");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PROMO-UPDATE]").css("display","inline-block");


        });
        $("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").on('keyup', function() {
        if( $("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").val() == ""){
            $("[DATI-PAGE=EditNotification]").find("[DATI-IMG-PROMO-UPDATE]").css("display","none");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PROMO-UPDATE]").css("display","none");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("width","70px");
            $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("top","70px");
            $("[DATI-PAGE=EditNotification]").find("[dati-taux-promo-update]").html("")
        }
            if( ($("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").val() != "") && ($("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").val() != "")){
                $("[DATI-PAGE=EditNotification]").find("[dati-container-prix-update]").css("display","none");
            }
            if( ($("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").val() == "") && ($("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").val() != "")){
                $("[DATI-PAGE=EditNotification]").find("[dati-container-prix-update]").css("display","inline-block");
            }
        });
        $("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").on('keyup', function() {
            if( $("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").val() == ""){
                $("[DATI-PAGE=EditNotification]").find("[DATI-CONTAINER-PRIX-UPDATE]").css("display","none");
                $("[DATI-PAGE=EditNotification]").find("[DATI-TITLE-PRIX-UPDATE]").html("");
                $("[DATI-PAGE=EditNotification]").find("[dati-taux-prix-update]").html("");

            }
            if( ($("[DATI-PAGE=EditNotification]").find("[dati-input-taux-promo-update]").val() != "") && ($("[DATI-PAGE=EditNotification]").find("[dati-input-price-promo-update]").val() != "")){
                $("[DATI-PAGE=EditNotification]").find("[dati-container-prix-update]").css("display","none");
            }
        });
    }


};

let notifHistory_ui = new Ui_notifHistory();