class imp_AddLang{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.addTrx={};
        this.recent_addTrx={};
        this.imgTransUploaded=null;
        this.saveChange=true;

    }
    ENABLE_SERVICE(list){
        var id =list.id;
        if(list.enable){
            list.enable=false;
        }else{
            list.enable=true;

        }
    }

/*    updateProp(){
        var titelTXT = $("[DATI-ROLE=form-language]").find("[DATI-NAME=input_title_language]").val();
        var desTXT = $("[DATI-ROLE=form-language]").find("[DATI-NAME=input_des_language]").val();
        var image = iAddLang.imgTransUploaded
        console.log(this.saveChange,"saveChange");
        if(this.saveChange){
            this.recent_addTrx[Language_Item.selectedLang.code] = {title: titelTXT, description:desTXT , image:image ,summary:desTXT};
            console.log("recent save");
        }
        console.log(this.recent_addTrx,"recent change");
    }*/
    ENABLE_LANG(code,id_db){

        var isCheck = $("[DATI-PAGE=formAddLanguage]").find("[DATI-ID="+code+"]").find("[type=checkbox]").is(":checked");
        var myTitle = $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[DATI-INPUT-TRX-TITLE=id_db]");
        var myDesc = $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=description"+id_db+"]");
        if(isCheck){
    /*        if(this.addTrx[code] != null){
                var titleTXT = this.addTrx[code]["title"];
            }else{
                var titleTXT = "";
            }*/
          /*  $(myTitle).val(titleTXT);*/
            $(myTitle).removeAttr("disabled");
            $(myDesc).removeAttr("disabled");

        }else {
            delete this.recent_addTrx[code];
            Language_Item.VIDER_INPUTS();
            $(myTitle).prop('disabled', true);
            $(myDesc).prop('disabled', true);
        }

    }

    GET_DATA(){
        this.addTrx =  this.recent_addTrx ;
        console.log( this.addTrx," this.addTrx");
    }
    GET_TRX_BY_CODE(code){
        if(this.addTrx[code] != null){
            return this.addTrx[code];
        }else{
            return -1;
        }

    }

    CANCEL_DATA(){
        var myTranclate = Language_Item.selectedLang ;
        var id_db = myTranclate.id;
        $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=title"+id_db+"]").val("");
        $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=description"+id_db+"]").val("");
    }
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;

            SSAPI.SUBMIT({
                uri:"/Hotel_language/getAllLang",
                onsuccess:"LanguageReceive"
            })
            if( page ==  "addEventServices" || page == "formAddLanguage" || page ==  "Restaurant\\/Contents" ||  page ==  "Bar\\/Contents" ||  page ==  "editEventPage" ) {
                console.log(page,"tttttteeeeeeiiii");
                SSAPI.SUBMIT({
                    uri:"/Hotel_language/getAllLang",
                    onsuccess:"LanguageReceive"
                })
            }

            if(page == "formAddLanguage"){
                iAddLang.recent_addTrx = {};
                $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[dati-language-title-placeholder]").prop('disabled', true);
                $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[dati-language-description-placeholder]").prop('disabled', true);
                console.log(iAddLang.addTrx,"trx");
                Uploader_ui.ADDTODOM();
                $("[DATI-COMPOSENT=pop-up]").css("height","420px");

            }

            $(document).on('change','[DATI-ID=uploadIamgeTranslatefile]',function(){
                console.log("testtttttttttt dkhal");
                console.log($(this).val(),"value");
                var image =$(this)[0].files[0];
                console.log(image);
                var form = new FormData();
                form.append("img", image, $(this).val());
                SSAPI.upload({
                    uri:"/Cdn/upload_img",
                    onsuccess:"imageTransUploaded",
                    data:form
                })
                //$(this).parent().find("img").attr("src",src);
            });
        }, false);

    }

    EVENTS_SSAPI(){
        document.addEventListener("imageTransUploaded", function(e){
            console.log(e.detail.res,"img_link");
            $("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
         /*   $("[dati-image-bar]").attr("src", e.detail.res[0]);*/
            iAddLang.imgTransUploaded = e.detail.res[0] ;
     /*       iAddLang.updateProp();*/

        }, false);

        document.addEventListener("LanguageReceive", function(e){
            langueItem_ui.DATALIST(e.detail);
            formTrx_ui.DATALIST(e.detail);
           console.log(e.detail.res,"llol");


        }, false);
    }




}

let iAddLang= new imp_AddLang();


