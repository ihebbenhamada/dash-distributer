class imp_NotifHistory{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgLeisureUploaded=null;
    }

    ENABLE_NOTIF(list){
        var id =list.id;
        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Advertisment/makeDisable",
                data:{
                    id: id
                },
                onsuccess:"NotifDisabled"
            })
            //if changed in database
            list.enable=false;
        }else{
            SSAPI.SUBMIT({
                uri:"/Advertisment/makeEnable",
                data:{
                    id: id
                },
                onsuccess:"NotifEnabled"
            })
            //if changed in database
            list.enable=true;
        }
    }
    DELETE_NOTIF(id){

        SSAPI.SUBMIT({
            uri:"/Advertisment/delete",
            onsuccess:"NotifDeleted",
            onerror:"NotifDeleted_error",
            data:{
                id:id
            }
        })
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;

                if(page == "NotificationHistory"){


                SSAPI.SUBMIT({
                    uri:"/Advertisment/getAll",
                    onsuccess:"NotifCardReceive"
                })

                    var eventAlerte = new CustomEvent("showAlerteNotif");


                    document.dispatchEvent(eventAlerte);

            }
            if(page == "detailNotif"){


                $("[DATI-COMPOSENT=pop-up]").css("width","1036px");
                $("[DATI-COMPOSENT=pop-up]").css("height","300px");


            }
            if(page == "EditNotification") {

                notifHistory_ui.READ_VALUE_INPUT();
                notifHistory_ui.READ_VALUE_PREVIEW();
            }

        }, false);
        $(document).on('change','[DATI-ID=uploadIamgeNotifUpfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageNotifUploadedUp",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI() {
        document.addEventListener("imageNotifUploadedUp", function(e){
            $("[dati-id=uploadIamgeNotifUp]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-id=uploadIamgeNotifUp]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-id=uploadIamgeNotifUp]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-id=uploadIamgeNotifUp]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-page=EditNotification]").find(".image_notif").find("img").attr("src",e.detail.res[0]);
            notifHistory_ui.image = e.detail.res[0] ;

        }, false);

        document.addEventListener("NotifCardReceive", function (e) {
            notifHistory_ui.DATALIST(e.detail);

        }, false);

        /* DELETE Notif */
        document.addEventListener("NotifDeleted", function(e){
            notifHistory_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("NotifDeleted_error", function(e){


        }, false);
        /* UPDATE Notif */
        document.addEventListener("NotifEditSucces", function(e){
            notifHistory_ui.SHOW_POPUP_SUCCESS_NOTIF_UP();
        }, false);

        document.addEventListener("NotifEdit_error", function(e){
            notifHistory_ui.SHOW_POPUP_ECHEC_NOTIF_UP();

        }, false);

    }
}

let iNotifHistory= new imp_NotifHistory();