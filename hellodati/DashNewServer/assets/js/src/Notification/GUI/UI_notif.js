let Ui_notif = class {
    constructor() {
        this.devices = [];
        this.country = [];
        this.gender=null;
        this.image=null;
        this.msgErreurNotif=[];
        this.EVENT_UI();
        $("[DATI-GENDER-ALL]").click(function () {
            $(this).css("background-color","rgb(17, 31, 53)");
            $(this).find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-MEN]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-MEN]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-WOMEN]").find("p").css("color","rgb(17, 31, 53)");
        })
        $("[DATI-GENDER-MEN]").click(function () {
            $(this).css("background-color","rgb(17, 31, 53)");
            $(this).find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-ALL]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-ALL]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-WOMEN]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-WOMEN]").find("p").css("color","rgb(17, 31, 53)");
        })
        $("[DATI-GENDER-WOMEN]").click(function () {
            $(this).css("background-color","rgb(17, 31, 53)");
            $(this).find("p").css("color","rgb(254, 254, 254)");
            $("[DATI-GENDER-ALL]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-ALL]").find("p").css("color","rgb(17, 31, 53)");
            $("[DATI-GENDER-MEN]").css("background-color","rgb(223, 231, 242)");
            $("[DATI-GENDER-MEN]").find("p").css("color","rgb(17, 31, 53)");
        })


    }
    SHOW_POPUP_SUCCESS_NOTIF(){
        $("[DATI-SEND-NOTIF-POP-UP]").css("display","block");
        setTimeout(function() {
            $("[DATI-SEND-NOTIF-POP-UP]").animate({bottom: '15px'});
            setTimeout(function() {
            $("[DATI-SEND-NOTIF-POP-UP]").css("display","none");
            }, 300);
        }, 1000);

    }
    SHOW_POPUP_ECHEC_NOTIF(){
        $("[DATI-ECHEC-NOTIF-POP-UP]").css("display","flex");
        setTimeout(function() {
            $("[DATI-ECHEC-NOTIF-POP-UP]").animate({bottom: '15px'});
            setTimeout(function() {
                $("[DATI-ECHEC-NOTIF-POP-UP]").css("display","none");
            }, 300);
        }, 1000);

    }

    DATALISTCOUNTRY(data){

        this.country = data.res;
        Ui_notification.DATALIST_AVAILABLE_COUNTRY(data.res);
    }

    EVENT_UI(){

        /* ******************************** PREVIEW REST ****************************************** */
        $("[DATI-INPUT-TITLE-PROMO]").on('keyup', function() {
            $("[DATI-TITLE-PROMO]").html( $("[DATI-INPUT-TITLE-PROMO]").val());
            $("[DATI-PREVIEW-NOTIF]").css("opacity","1");
            if(($("[DATI-INPUT-TITLE-PROMO]").val() == "") && ($("[DATI-INPUT-DESC-PROMO]").val() == "")&& ( $("[DATI-INPUT-TAUX-PROMO]").val() == "")&& ($("[ DATI-INPUT-PRICE-PROMO]").val() == "")  ){
                $("[DATI-PREVIEW-NOTIF]").css("opacity","0");
            }

        });

        $("[DATI-INPUT-DESC-PROMO]").on('keyup', function() {
            $("[DATI-DESC-PROMO]").html( $("[DATI-INPUT-DESC-PROMO]").val());
            $("[DATI-PREVIEW-NOTIF]").css("opacity","1");
            if(($("[DATI-INPUT-TITLE-PROMO]").val() == "") && ($("[DATI-INPUT-DESC-PROMO]").val() == "")&& ( $("[DATI-INPUT-TAUX-PROMO]").val() == "")&& ($("[ DATI-INPUT-PRICE-PROMO]").val() == "")  ){
                $("[DATI-PREVIEW-NOTIF]").css("opacity","0");
            }
        });

        $("[DATI-INPUT-TAUX-PROMO]").on('keyup', function() {
            $("[DATI-PREVIEW-NOTIF]").css("opacity","1");
            $("[DATI-TAUX-PROMO]").html("-"+ $("[DATI-INPUT-TAUX-PROMO]").val() +"%");
    /*        $("[DATI-TITLE-PRIX]").html( "prix");*/
            $("[DATI-PAGE=Notification]").find("[DATI-IMG-PROMO]").css("display","inline-block");
            $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PROMO]").css("display","inline-block")
            $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PRIX]").css("display","none");
            if( $("[DATI-INPUT-TAUX-PROMO]").val() == ""){
                $("[DATI-PAGE=Notification]").find("[DATI-IMG-PROMO]").css("display","none");
                $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PROMO]").css("display","none")
                $("[DATI-TITLE-PRIX]").html("");
                $("[DATI-TAUX-PROMO]").html("");
            }
            if(( $("[DATI-INPUT-PRICE-PROMO]").val() != "")&& ( $("[DATI-INPUT-TAUX-PROMO]").val() == "")){
                $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PRIX]").css("display","inline-block");
                $("[DATI-TITLE-PRIX]").html( "prix");

            }
            if(($("[DATI-INPUT-TITLE-PROMO]").val() == "") && ($("[DATI-INPUT-DESC-PROMO]").val() == "")&& ( $("[DATI-INPUT-TAUX-PROMO]").val() == "")&& ($("[ DATI-INPUT-PRICE-PROMO]").val() == "")  ){
                $("[DATI-PREVIEW-NOTIF]").css("opacity","0");
            }
        });

        $("[DATI-INPUT-PRICE-PROMO]").on('keyup', function() {
            $("[DATI-PREVIEW-NOTIF]").css("opacity","1");

            $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PRIX]").css("display","inline-block");
            $("[DATI-TAUX-PRIX]").html( $("[ DATI-INPUT-PRICE-PROMO]").val() +"DT");
            $("[DATI-TITLE-PRIX]").html( "prix");
            if ( $("[DATI-INPUT-PRICE-PROMO]").val() == ""){
                $("[DATI-TITLE-PRIX]").html( "");
                $("[DATI-TAUX-PRIX]").html( "");
                $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PRIX]").css("display","none");

            }
            if(($("[DATI-INPUT-TAUX-PROMO]").val() !="" )&& $("[ DATI-INPUT-PRICE-PROMO]").val() != ""){
                $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PRIX]").css("display","none");
            }

            if(($("[DATI-INPUT-TITLE-PROMO]").val() == "") && ($("[DATI-INPUT-DESC-PROMO]").val() == "")&& ( $("[DATI-INPUT-TAUX-PROMO]").val() == "")&& ($("[ DATI-INPUT-PRICE-PROMO]").val() == "")  ){
                $("[DATI-PREVIEW-NOTIF]").css("opacity","0");
            }
        });
        /* ******************************** End PREVIEW REST ****************************************** */

        $("[DATI-GENDER-ALL]").click(function () {
            Ui_notification.gender = -1;
        });
        $("[dati-gender-men]").click(function () {
            Ui_notification.gender = 1 ;
        });
        $("[dati-gender-women]").click(function () {
            Ui_notification.gender = 2 ;
        });


    }

    DATALIST_AVAILABLE_COUNTRY(data){
        var options = "<option value=''>select Country</option>";
        for (var i = 0; i < data.length; i++) {
            options = options + '<option value="' + data[i].id + '">'+data[i].name+'</option>';
        }
        $("[dati-page=Notification]").find("[DATI-INPUT-COUNTRY=AllCountry]").html(options);
        $("[dati-page=EditNotification]").find("[DATI-INPUT-COUNTRY=AllCountry]").html(options);
    }

    RESET_NOTIF(){
        $("[dati-page=Notification]").find("[dati-input-title-promo]").val();
        $("[dati-page=Notification]").find("[dati-input-desc-promo]").val();
        $("[dati-page=Notification]").find("[dati-input-price-promo]").val();
        $("[dati-page=Notification]").find("[dati-input-taux-promo]").val();

        $("[dati-page=Notification]").find("[dati-begin-date]").val();
        $("[dati-page=Notification]").find("[dati-begin-time]").val();
        $("[dati-page=Notification]").find("[dati-end-date]").val();
        $("[dati-page=Notification]").find("[dati-end-time]").val();

        $("[dati-page=Notification]").find("[dati-role=clickableTrans]").css("background-image","none");
        this.image= null;
        this.gender=-1;
    }
    RESET_PREVIEW(){
        $("[DATI-PREVIEW-NOTIF]").css("opacity","0");
        $(".image_notif").find("img").attr("src","/assets/img/ui/white.png");
        $("[DATI-PAGE=Notification]").find("[DATI-IMG-PROMO]").css("display","none");
        $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PROMO]").css("display","none")
        $("[DATI-PAGE=Notification]").find("[DATI-CONTAINER-PRIX]").css("display","none");
        $("[DATI-TITLE-PRIX]").html("");
        $("[DATI-TAUX-PROMO]").html("")
        $("[DATI-TITLE-PROMO]").html("");
        $("[DATI-DESC-PROMO]").html("");
        $("[DATI-INPUT-TITLE-PROMO]").val("");
        $("[DATI-INPUT-DESC-PROMO]").val("");
        $("[DATI-INPUT-TAUX-PROMO]").val("");
        $("[ DATI-INPUT-PRICE-PROMO]").val("")
    }

    /*    Send Notification*/
    SEND_NOTIF(element){
        this.msgErreurNotif = [];
        dati_Erreurs.UPDATE("NotifErreurs");
        var AgeTranche = $(element).find("[DATI-INPUT-NAME=trancheAge]").val();
        var array = AgeTranche.split("/");
        var min_age  = array[0] ;
        var max_age= array[1] ;
        var type = 1 ;
        var title = $(element).find("[dati-input-title-promo]").val();
        var description = $(element).find("[dati-input-desc-promo]").val();
        var price = $(element).find("[dati-input-price-promo]").val();
        var promo = $(element).find("[dati-input-taux-promo]").val();
        var nationality_id= $(element).find("[dati-input-country=AllCountry]").val();
        var begin_date = $(element).find("[DATI-BEGIN-DATE]").val() +" "+  $(element).find("[DATI-BEGIN-TIME]").val();
        var end_date = $(element).find("[ DATI-END-DATE]").val() +" "+  $(element).find("[DATI-END-TIME]").val();
        var gender_id;


        if(this.gender != null){
             gender_id= this.gender;
        }else{
             gender_id= -1;
        }

        var media=this.image ;
        var media_type = 1;
        if(title ==""){
            this.msgErreurNotif.push("title is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if(description===""){
            this.msgErreurNotif.push("description is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if(price === ""){
            this.msgErreurNotif.push("Price is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if(promo === ""){
            this.msgErreurNotif.push("Promo is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if(nationality_id === ""){
            this.msgErreurNotif.push("Country is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if($(element).find("[DATI-BEGIN-DATE]").val() == "" && $(element).find("[DATI-BEGIN-TIME]").val() ==""){
            this.msgErreurNotif.push("Begin Date is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if($(element).find("[ DATI-END-DATE]").val() == "" &&  $(element).find("[DATI-END-TIME]").val()==""){
            this.msgErreurNotif.push("End Date is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }

        if(array[0] === ""){
            this.msgErreurNotif.push("Age is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }
        if(this.image === null){
            this.msgErreurNotif.push("image is required");
            dati_Erreurs.UPDATE("NotifErreurs");
        }


        if(this.msgErreurNotif.length == 0) {
            var data = {
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
                uri: "/Advertisment/add",
                data: data,
                onsuccess: "NotifSendSucces",
                onerror: "NotifSend_error"
            });

        }
    }
}
let Ui_notification = new Ui_notif();