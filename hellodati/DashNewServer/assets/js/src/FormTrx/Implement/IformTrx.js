class imp_FormTrx{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();


    }


    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            SSAPI.SUBMIT({
                uri:"/Hotel_language/getAllLang",
                onsuccess:"LanguageReceive"
            })
            var page = e.detail.pageLink;



        }, false);

    }

    EVENTS_SSAPI(){
/*        document.addEventListener("imageTransUploaded", function(e){

            $("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            /!*   $("[dati-image-bar]").attr("src", e.detail.res[0]);*!/
            formTrx_ui.imgTransUploaded = e.detail.res[0] ;
            formTrx_ui.updateProp();

        }, false);*/

        document.addEventListener("LanguageReceive", function(e){
            formTrx_ui.DATALIST(e.detail);



        }, false);
    }




}

let iFormTrx= new imp_FormTrx();


