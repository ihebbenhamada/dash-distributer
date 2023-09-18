class imp_notif{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "Notification"){
                Ui_notification.msgErreurNotif = [];
                dati_Erreurs.UPDATE("NotifErreurs");
            }
            if(page == "Notification" ){
                  $("[dati-role=clickableTrans]").css("background-image","");
                Ui_notification.DATALIST_AVAILABLE_COUNTRY(country_ui.list);
            }
            if(page != "Notification"){
                Ui_notification.RESET_PREVIEW()

            }

        }, false);
        $(document).on('change','[DATI-ID=uploadIamgeNotiffile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageNotifUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){

        document.addEventListener("imageNotifUploaded", function(e){
            $("[DATI-PREVIEW-NOTIF]").css("opacity","1");
            $("[dati-page=Notification]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-page=Notification]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-page=Notification]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-page=Notification]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-page=Notification]").find(".image_notif").find("img").attr("src",e.detail.res[0]);
            Ui_notification.image = e.detail.res[0] ;

        }, false);


        //send notif
        document.addEventListener("NotifSendSucces", function(e){
            Ui_notification.SHOW_POPUP_SUCCESS_NOTIF();
            Ui_notification.RESET_NOTIF();
            Ui_notification.RESET_PREVIEW();
        }, false);
        //not send notif
        document.addEventListener("NotifSend_error", function(e){
            Ui_notification.SHOW_POPUP_ECHEC_NOTIF();
        }, false);



    }
}

let inotif = new imp_notif();