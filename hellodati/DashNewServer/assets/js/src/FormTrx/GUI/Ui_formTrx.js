let Ui_formTrx = class {
    constructor() {
        this.save_addTrx={};
        this.recent_addTrx={};
        this.imgTransUploaded=null;
        this.imgTransUploadedTrx=null;
        this.langues=[];
        this.is_checked=[] ;
        this.erreurTranslate=[];
        this.EVENTS_UI();


    }

    DATALIST(data){
        for ( var i=0; i<data.res.length ; i++){
            if(data.res[i].isPrimary==1){
                data.res.unshift(data.res[i]);
                data.res.splice(i+1, 1);
                break;
            }
        }
        this.langues = data.res;
    }
    TRX_CONTAINER(datiId){
        return '<div class="trx_bg_transparant" DATI-FORM-TRX >'+
        '<div  class="form_trx_container">'+

            '<div class="modal_language">'+
            '<div class="container_form_languages">'+

            '<div  class="languages" DATI-LANGUAGE-ITEM-FORM-TRX>' +

            '</div>'+

            '<div  class="form_languages" DATI-LANGUAGE-FORM-GLOBAL-TRX>'+


            '</div>'+
            '</div>'+
            '<div class="Actions_APPLY_CANCEL">'+
            '<div class="cancel" onclick="formTrx_ui.CANCEL_DATA()">Cancel</div>'+
            '<div class="apply" onclick="formTrx_ui.GET_DATA(\''+datiId+'\')">Apply</div>'+
            '</div>'+
            '<span  class="closBt" DATI-CLOSE-TRX >x </span>'+
            '</div>'+
            '</div>'+
            '</div>'
    }

    VERIFY_DATA_TRX(id,code,datiId){

        var test = true;
        if( $("[DATI-ID="+datiId+"]").find("[DATI-ID="+code+"]").find("[type=checkbox]").is(":checked")) {
            try {
                var title = this.recent_addTrx[code].title;
                var summary = this.recent_addTrx[code].summary;
                var description = this.recent_addTrx[code].description;
            } catch (e) {
                var title = "";
                var summary = "";
                var description = "";
            }

            if (title == "") {
                $("[DATI-ID="+datiId+"]").find("[DATI-INPUT-TRX-TITLE=" + id + "]").css("border", "2px solid #ef5749");
                $("[DATI-ID="+datiId+"]").find("[DATI-INPUT-TRX-TITLE=" + id + "]").attr("placeholder", "Title " + code + " is required!");
                $("[DATI-ID="+datiId+"]").find(" [dati-selector=" + id + "]").css("background", "rgba(239, 87, 73, 0.15)");
                test = false;
            }
            if (summary == "") {
                $("[DATI-ID="+datiId+"]").find("[DATI-INPUT-TRX-SUMMARY=" + id + "]").css("border", "2px solid #ef5749");
                $("[DATI-ID="+datiId+"]").find("[DATI-INPUT-TRX-SUMMARY=" + id + "]").attr("placeholder", "Summary " + code + " is required!");
                $("[DATI-ID="+datiId+"]").find(" [dati-selector=" + id + "]").css("background", "rgba(239, 87, 73, 0.15)");
                test = false;
            }
            if (description == "") {
                $("[DATI-ID="+datiId+"]").find("[DATI-TEXTAREA-TRX-DESCRIPTION=" + id + "]").css("border", "2px solid #ef5749");
                $("[DATI-ID="+datiId+"]").find("[DATI-TEXTAREA-TRX-DESCRIPTION=" + id + "]").attr("placeholder", "Description " + code + " is required!");
                $("[DATI-ID="+datiId+"]").find(" [dati-selector=" + id + "]").css("background", "rgba(239, 87, 73, 0.15)");
                test = false;
            }
        }
        return test;
    }

    GET_DATA(datiId){


        var i = 0;
        var test = true;
        var code = "";
        var id = 0;
        while(i < this.is_checked.length && test==true){
            var is_checked=  this.is_checked[i];
            code = is_checked.code;
            id = is_checked.id ;
            test = this.VERIFY_DATA_TRX(id,code,datiId);
            i=i+1;
        }

        if(test == false){
            formTrx_ui.SHOW_FORM_TRX(id,code,datiId);
            $("[DATI-ID="+datiId+"]").find("[dati-language-item-form-trx]").find("[dati-selector="+id+"]").css("background","rgba(239, 87, 73, 0.15)");
            return false;
        }

        $("[DATI-ID="+datiId+"]").find("[dati-form-trx]").css("display","none");
        // add trx

        for (const [lan, value] of Object.entries(this.recent_addTrx)) {
            if(!this.save_addTrx.hasOwnProperty(lan)){
                this.save_addTrx[lan]={};
            }
            this.save_addTrx[lan].title = value["title"];
            this.save_addTrx[lan].description = value["description"];
            this.save_addTrx[lan].image = value["image"];
            this.save_addTrx[lan].summary = value["summary"];
        }

    }
    CANCEL_DATA(){
//        this.recent_addTrx =this.save_addTrx ;
        if(Object.entries(this.save_addTrx).length > 0){
            for (const [lan, value] of Object.entries(this.save_addTrx)) {
                if(!this.recent_addTrx.hasOwnProperty(lan)){
                    this.recent_addTrx[lan]={};
                }
                this.recent_addTrx[lan].title = value["title"];
                this.recent_addTrx[lan].summary = value["summary"];
                this.recent_addTrx[lan].description = value["description"];
            }
        }else{
            this.recent_addTrx = {};
        }
        $("[dati-form-trx]").css("display","none");
    }
    LANG_BLOCK(list ,trans,datiId){
        var id = list.id;
        var code = list.code;
        return  '<div class="langage" DATI-SELECTOR-LANG-TO-SHOW-FROM  DATI-SELECTOR="'+list.id+'" DATI-ID="'+list.id+'"  onclick="formTrx_ui.SHOW_FORM_TRX('+id+',\''+code+'\',\''+datiId+'\')">' +
            '</div>';
    }
    TITLE(name,code){
        return  '<div class="title"  >' +
            '<p class="name">'+name+'</p>' +
            '<p class="code">'+code+'</p>' +
            '</div>';
    }

    updatePropImage(id,code,datiId){
        if(!this.recent_addTrx.hasOwnProperty(code)){
            this.recent_addTrx[code] = {};
        }
        if(!this.recent_addTrx[code].hasOwnProperty("description")){
            this.recent_addTrx[code].description = "";
        }
        if(!this.recent_addTrx[code].hasOwnProperty("title")){
            this.recent_addTrx[code].title = "";
        }
        if(!this.recent_addTrx[code].hasOwnProperty("summary")){
            this.recent_addTrx[code].summary = "";
        }
        this.recent_addTrx[code]["image"] = this.imgTransUploadedTrx;
    }
    updateProp(id,code,datiId){
        var titelTXT = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[DATI-INPUT-TRX-TITLE="+id+"]").val();
        var summaryTXT = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[DATI-INPUT-TRX-SUMMARY="+id+"]").val();
        var desTXT = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[DATI-TEXTAREA-TRX-DESCRIPTION="+id+"]").val();
        if(!this.recent_addTrx.hasOwnProperty(code)){
            this.recent_addTrx[code] = {};
        }
        this.recent_addTrx[code]["title"] = titelTXT;
        this.recent_addTrx[code]["summary"] = summaryTXT;
        this.recent_addTrx[code]["description"] = desTXT;

    }

    ENABLE_LANG(code,id_db,datiId){
        var isCheck = $("[DATI-ID="+datiId+"]").find("[DATI-ID="+code+"]").find("[type=checkbox]").is(":checked");
        var myTitle = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[DATI-INPUT-TRX-TITLE="+id_db+"]");
        var mySummary = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[DATI-INPUT-TRX-SUMMARY="+id_db+"]");
        var myDesc = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[DATI-TEXTAREA-TRX-DESCRIPTION="+id_db+"]");
        var myUploader = $("[DATI-ID="+datiId+"]").find("[DATI-ROLE=form-language]").find("[dati-composent=UploaderTrans]");
        if(isCheck){
            this.is_checked.push({
                code:  code ,
                id : id_db
            });
/*            this.is_checked_id=id_db;*/
            
            /*        if(this.addTrx[code] != null){
                        var titleTXT = this.addTrx[code]["title"];
                    }else{
                        var titleTXT = "";
                    }*/
            /*  $(myTitle).val(titleTXT);*/
            $(myTitle).removeAttr("disabled");
            $(myDesc).removeAttr("disabled");
            $(mySummary).removeAttr("disabled");
            $(myUploader).attr("DATI-ENABLE","true");
            $("[dati-composent=formTranslate]").find("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+this.imgTransUploaded+"')");
        }else {
            delete this.recent_addTrx[code];
            delete this.save_addTrx[code];
            $("[dati-composent=formTranslate]").find("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","none");
            this.VIDER_INPUTS();
            $(myTitle).prop('disabled', true);
            $(myDesc).prop('disabled', true);
            $(mySummary).prop('disabled', true);
            $(myUploader).attr("DATI-ENABLE","false");
        }

    }


    VIDER_INPUTS(){

        $("[class=form_languages]").find("[dati-language-title-placeholder]").val("");
        $("[class=form_languages]").find("[dati-language-description-placeholder]").val("");
        $("[class=form_languages]").find("[dati-language-summary-placeholder]").val("");
    }
    SWITCHER(is_check,list,datiId){
        var onchange = "formTrx_ui.ENABLE_LANG('"+list.code+"',"+list.id+" ,'"+datiId+"' )";

        return '<div  class="switcherContainer"\n' +
            '  DATI-COMPOSENT="switcherContainer"\n' +
            '  DATI-ID="'+list.code+'"\n' +
            '  DATI-UPDATE="LanguageReceive"\n' +
            'DATI-CHANGE="'+onchange+'"' +
            'DATI-DEFAULt_VALUE="'+is_check+'"' +
            ' DATI-CHANGE-COLOR-SWITCHER="#9f9f9f">\n' +
            '\n' +
            '\n' +
            '  </div>';
    }
    FORM_LANG_BLOCK(list,id,update,datiId){
        return  '<div class="myForm" DATI-ROLE="form-language" DATI-FORM-TRX-DISPLAY="'+list.id+'">'+
            '<h4 DATI-LANGUAGE-TITLE ></h4>'+
            '<div class="title" >'+
            '<label for="" style=" padding-bottom: 10px;" >Title: </label>'+
            "<input type='text' DATI-LANGUAGE-TITLE-PLACEHOLDER DATI-NAME='input_title_language' onchange='formTrx_ui.updateProp("+list.id+",\""+list.code+"\",\""+datiId+"\")' DATI-INPUT-TRX-TITLE='"+list.id+"' placeholder='Title in "+list.languageName+"' disabled>"+
            '</div>'+
            '<div class="title" >'+
            '<label for="" style=" padding-bottom: 10px;" >Summary: </label>'+
            "<input type='text' DATI-LANGUAGE-SUMMARY-PLACEHOLDER DATI-NAME='input_title_language' onchange='formTrx_ui.updateProp("+list.id+",\""+list.code+"\",\""+datiId+"\")' DATI-INPUT-TRX-SUMMARY='"+list.id+"' placeholder='Summary in "+list.languageName+"' disabled>"+
            '</div>'+
            '<div class="details" >'+
            '<div class="description" >'+
            '<label for=""> Description : </label>'+
            '<textarea name="" cols="30" rows="10" DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER DATI-NAME="input_des_language" onchange="formTrx_ui.updateProp('+list.id+',\''+list.code+'\',\''+datiId+'\')" DATI-TEXTAREA-TRX-DESCRIPTION="'+list.id+'"  placeholder=\'Description in '+list.languageName+'\' disabled></textarea>'+
            '</div>'+
            '<div class="img_uploader">'+
            '<label for="" >Image : </label>'+
            '<div  class="imageUploader"\n' +
            'DATI-COMPOSENT="UploaderTrans"\n' +
            'DATI-ID="'+id+list.code+'"\n' +
            "DATI-UPDATE='formTrx_ui.updatePropImage("+list.id+",\""+list.code+"\",\""+datiId+"\")'" +
            'DATI-VAR-URL="formTrx_ui.imgTransUploadedTrx"' +
            'DATI-ENABLE="false">' +
            '</div>'+

            '</div>'+
            '</div>'+
            '</div>'
    }
    FORM_LANG_BLOCK_DEFAULT(){
        return  '<div class="myForm" DATI-ROLE="form-language" DATI-FORM-TRX-DISPLAY-DEFAULT style="display: inline-block">'+
            '<h4 DATI-LANGUAGE-TITLE ></h4>'+
            '<div class="title" >'+
            '<label for="" style=" padding-bottom: 10px;" >Title: </label>'+
            '<input type="text" DATI-LANGUAGE-TITLE-PLACEHOLDER DATI-NAME="input_title_language"  id="" placeholder="" disabled >'+
            '</div>'+
            '<div class="details" >'+
            '<div class="description" >'+
            '<label for=""> Description : </label>'+
            '<textarea name="" id="" cols="30" rows="10" DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER DATI-NAME="input_des_language"  id="" placeholder="" disabled></textarea>'+
            '</div>'+
            '<div class="img_uploader">'+
            '<label for="" >Image : </label>'+
            '<div  class="imageUploader"\n' +

            '</div>'+

            '</div>'+
            '</div>'+
            '</div>'
    }
    UPDATE(id){
        /*this.save_addTrx={};
        this.recent_addTrx={};
        this.imgTransUploaded=null;
        this.langues=[];
        this.is_checked=[] ;
        this.erreurTranslate=[];*/
        this.imgTransUploaded=null;
        this.imgTransUploadedTrx=null;
        var formTrx = $("[DATI-ID="+id+"]");
        $(formTrx).html("");
        var formTrxContainer = this.TRX_CONTAINER(id);
        $(formTrx).append(formTrxContainer);
        var lists_name = $(formTrx).attr("DATI-LIST");
        var button = $(formTrx).attr("DATI-BTN");
        if($(formTrx).attr("DATI-TRANS-DATA")){
            var transUpdate = $(formTrx).attr("DATI-TRANS-DATA");
            var trans =  eval(transUpdate);

            if(trans != null && trans != ""){
                for (const [lan, value] of Object.entries(trans)) {

                    if(!this.recent_addTrx.hasOwnProperty(lan)){
                        this.recent_addTrx[lan]={};
                    }
                    if(!this.save_addTrx.hasOwnProperty(lan)){
                        this.save_addTrx[lan]={};
                    }
                    this.recent_addTrx[lan].title = value["title"];
                    this.recent_addTrx[lan].description = value["description"];
                    this.recent_addTrx[lan].image = value["image"];
                    this.recent_addTrx[lan].summary = value["summary"];

                    this.save_addTrx[lan].title = value["title"];
                    this.save_addTrx[lan].description = value["description"];
                    this.save_addTrx[lan].image = value["image"];
                    this.save_addTrx[lan].summary = value["summary"];


                }

            }else{
                this.save_addTrx = {};
                this.recent_addTrx = {};
            }
        }else{
            this.save_addTrx = {};
            this.recent_addTrx = {};
        }
        this.SHOW_TRX(button, id);
        var lists = eval(lists_name);
        var idUploader;
        var updateUploader;
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];

            if(list.isPrimary != 1){
                /* ITEM LANG LEFT SIDE*/
                var ItemBlockLang =  $(formTrx).find("[DATI-LANGUAGE-ITEM-FORM-TRX]");
                var itemLang = "";

                if( $(formTrx).attr("DATI-TRANS-DATA")){
                    itemLang += this.LANG_BLOCK(list,transUpdate,id);
                }else{
                    itemLang += this.LANG_BLOCK(list,null,id);
                }

                $(ItemBlockLang).append(itemLang);
                if(this.GET_TRX_BY_CODE(list.code) != -1){
                    var s = this.SWITCHER(true, list,id);

                }else{
                    var s = this.SWITCHER(false, list,id);
                }
                var langueBlock = $(ItemBlockLang).find("[DATI-ID=" + list.id + "]");
                $(langueBlock).append(s);
                dati_switcher.ADD_TO_DOM( list.code);
                var titleLang = this.TITLE(list.languageName,list.code);
                $(langueBlock).append(titleLang);
                /* FORM LANG REIGHT SIDE*/
                var fORMBlockLang =  $(formTrx).find("[DATI-LANGUAGE-FORM-GLOBAL-TRX]");
                var formLang = "";
                 idUploader = $(formTrx).attr("DATI-ID-UPLOADER");
                 updateUploader = $(formTrx).attr("DATI-UPDATE-UPLOADER");
                formLang += this.FORM_LANG_BLOCK(list,idUploader,updateUploader,id);
                $(fORMBlockLang).append(formLang);
                Uploader_ui.ADDTODOM(idUploader+list.code);
            }




        }
/*        var  formLangDefault = this.FORM_LANG_BLOCK_DEFAULT();
        $(fORMBlockLang).append(formLangDefault);*/


    }
    SHOW_TRX(button,datiId){

        /* click to show trx event*/
        $(document).ready(function(){
            $(document).off('click','['+button+']');
            $(document).on('click','['+button+']',function() {
                var lists_name = $("[DATI-ID="+datiId+"]").attr("DATI-LIST");
                var lists = eval(lists_name);
                for(var i=0; i<lists.length; i++) {
                    var list = lists[i];
                    if(list.isPrimary != 1) {
                        var isEnable = formTrx_ui.GET_TRX_BY_CODE(list.code);
                        var isCheck = $("[DATI-ID=" + datiId + "]").find("[DATI-ID=" + list.code + "]").find("[type=checkbox]").is(":checked");
                        $("[DATI-ID=" + datiId + "]").find("[DATI-ID=" + list.code + "]")
                        if ((isEnable != -1 && !isCheck) || (isEnable == -1 && isCheck)) {
                            dati_switcher.TOGGLE_VAL($("[DATI-ID=" + datiId + "]").find("[DATI-ID=" + list.code + "]"));
                        }
                    }
                }
                $("[DATI-ID="+datiId+"]").find("[DATI-FORM-TRX]").css("display","flex");
                try {
                    if(!formTrx_ui.langues[0].isPrimary){
                        formTrx_ui.SHOW_FORM_TRX(formTrx_ui.langues[0].id,formTrx_ui.langues[0].code,datiId);
                    }else{
                        formTrx_ui.SHOW_FORM_TRX(formTrx_ui.langues[1].id,formTrx_ui.langues[1].code,datiId);
                    }

                }catch (e) {

                }
            });

        });
        /* end click to show trx event*/
    }
    SHOW_FORM_TRX(id,code,datiId){
            $("[DATI-ID="+datiId+"]").find("[DATI-FORM-TRX-DISPLAY]").css("display","none");
            $("[DATI-ID="+datiId+"]").find("[DATI-FORM-TRX-DISPLAY="+id+"]").css("display","inline-block");
            this.SELECT_LANG(id,code,datiId);

    }
    SELECT_LANG(id,cd,datiId){
        try {
            $("[DATI-ID="+datiId+"]").find("[class=form_languages]").find("[dati-language-title-placeholder]").val(this.recent_addTrx[cd]["title"]);
        }catch (e) {
            $("[DATI-ID="+datiId+"]").find("[class=form_languages]").find("[dati-language-title-placeholder]").val("");
        }
        try {
            $("[DATI-ID="+datiId+"]").find("[class=form_languages]").find("[dati-language-summary-placeholder]").val(this.recent_addTrx[cd]["summary"]);
        }catch (e) {
            $("[DATI-ID="+datiId+"]").find("[class=form_languages]").find("[dati-language-summary-placeholder]").val("");
        }
        try {
            $("[DATI-ID="+datiId+"]").find("[class=form_languages]").find("[DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER]").val(this.recent_addTrx[cd]["description"]);
        }catch (e) {
            $("[DATI-ID="+datiId+"]").find("[class=form_languages]").find("[DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER]").val("");
        }
        try {
            this.CHANGE_CSS_SELECTED(id,datiId);
            this.ENABLE_LANG(cd,id,datiId);
            if($("[DATI-ID="+datiId+"]").attr("DATI-ID-UPLOADER")){
                var idUploder = $("[DATI-ID="+datiId+"]").attr("DATI-ID-UPLOADER");
                var element = $("[DATI-ID="+datiId+"]").find("[DATI-ID="+idUploder+cd+"]").find("[dati-role=clickableTrans]");
                if(this.recent_addTrx[cd].hasOwnProperty("image")){
                    if(this.recent_addTrx[cd]["image"] != null){
                        $(element).css("background-image","url('"+this.recent_addTrx[cd]["image"]+"')");
                    }else{
                        $(element).css("background-image","url('"+formTrx_ui.imgTransUploaded+"')");
                    }
                }else{
                    $(element).css("background-image","url('"+formTrx_ui.imgTransUploaded+"')");
                }
                $(element).css("background-position","center");
                $(element).css("background-size","100% 100%");
                $(element).css("background-repeat","no-repeat");
            }
        }catch (e) {
            this.CHANGE_CSS_SELECTED(id,datiId);
            this.ENABLE_LANG(cd,id,datiId);
            var idUploder = $("[DATI-ID="+datiId+"]").attr("DATI-ID-UPLOADER");
            var element = $("[DATI-ID="+datiId+"]").find("[DATI-ID="+idUploder+cd+"]").find("[dati-role=clickableTrans]");
            if($("[DATI-ID=" + datiId + "]").find("[DATI-ID=" + cd + "]").find("[type=checkbox]").is(":checked")){
                $(element).css("background-image","url(" + formTrx_ui.imgTransUploaded + ")");
            }else{
                $(element).css("background-image","none");
            }
        }

    }

    CHANGE_CSS_SELECTED(id,datiId){
        $("[DATI-ID="+datiId+"]").find("[class=languages]").find("[DATI-SELECTOR]").css("background", "#ffffff");
        $("[DATI-ID="+datiId+"]").find("[class=languages]").find("[DATI-SELECTOR=" + id +" ]").css("background", "#eeeeee");
    }

    GET_TRX_BY_CODE(code){
        try {
            if(this.save_addTrx[code] != null){
                return this.save_addTrx[code];
            }else{
                return -1;
            }
        }catch (e) {
            return -1;
        }
    }
    EVENTS_UI(){
        $( document ).on( "keyup", "[DATI-ROLE=form-language] input", function() {
            $("[DATI-ROLE=form-language]").find("[DATI-INPUT-TRX-TITLE="+$(this).attr("DATI-INPUT-TRX-TITLE")+"]").css("border","1px solid #d2d2d2") ;
        });
        $( document ).on( "keyup", "[DATI-ROLE=form-language] input", function() {
            $("[DATI-ROLE=form-language]").find("[dati-input-trx-summary="+$(this).attr("dati-input-trx-summary")+"]").css("border","1px solid #d2d2d2") ;
        });
        $( document ).on( "keyup", "[DATI-ROLE=form-language] textarea", function() {
            $("[DATI-ROLE=form-language]").find("[dati-textarea-trx-description="+$(this).attr("dati-textarea-trx-description")+"]").css("border","1px solid #d2d2d2") ;
        });

        var myComposents = document.querySelectorAll("[dati-composent=formTranslate]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }
    }


    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                formTrx_ui.save_addTrx = {};
                formTrx_ui.recent_addTrx = {};
                formTrx_ui.UPDATE(id);
            }, 100);
        }, false);



    }


};

let formTrx_ui = new Ui_formTrx();