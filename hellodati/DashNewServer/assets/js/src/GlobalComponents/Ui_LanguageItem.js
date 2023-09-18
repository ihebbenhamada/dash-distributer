let Ui_LanguageItem = class {
    constructor() {
        this.EVENTS_UI();
        this.selectedLang=null;
        this.translateLear=null ;

    }

    LANG_BLOCK(list){
        return  '<div class="langage"  DATI-SELECTOR="'+list.id+'" DATI-ID="'+list.id+'"  onclick="Language_Item.SELECT_LANG(this)">' +
            '</div>';
    }
    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }
    SELECT_LANG(element){
        iAddLang.saveChange = false;
        this.VIDER_INPUTS();
        iAddLang.saveChange = true;
        var id = $(element).attr("DATI-ID");
        var listLang = eval($(element).parent().attr("DATI-LIST"));
        this.selectedLang = this.FIN_BY_ID_IN_LIST(listLang,id);
        try {
            $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[dati-language-title-placeholder]").val(iAddLang.recent_addTrx[this.selectedLang.code]["title"]);
        }catch (e) {
            $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[dati-language-title-placeholder]").val("");

        }
        try {
            $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER]").val(iAddLang.recent_addTrx[this.selectedLang.code]["description"]);
        }catch (e) {
            $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER]").val("");

        }


        this.CHANGE_CSS_SELECTED(this.selectedLang);
        this.REMPLIR_FORM(this.selectedLang);
        var code = this.selectedLang.code;
        var id_db = this.selectedLang.id;
        var myTitle = $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=title"+id_db+"]");
        var myDesc = $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=description"+id_db+"]");
        var isCheck = $("[DATI-PAGE=formAddLanguage]").find("[DATI-ID="+code+"]").find("[type=checkbox]").is(":checked");
        if(isCheck){
            if(iAddLang.recent_addTrx[code] != null){
                var titleTXT = iAddLang.recent_addTrx[code]["title"];
            }else{
                var titleTXT = "";
            }
            $(myTitle).val(titleTXT);
            $(myTitle).removeAttr("disabled");
            $(myDesc).removeAttr("disabled");

        }else {
            $(myTitle).prop('disabled', true);
            $(myDesc).prop('disabled', true);
        }

       /* lear translate*/

        if(Language_Item.translateLear != null){
            var getMyTrans = Language_Item.translateLear ;
            for ( var i=0 ; i< getMyTrans.length ; i++){
      if(this.selectedLang.id == getMyTrans[i].trx_id ){
         var id_db = this.selectedLang.id;

         $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=title"+id_db+"]").val(getMyTrans[i].title);
          $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[id=description"+id_db+"]").val(getMyTrans[i].description);
          $("[DATI-PAGE=formAddLanguage]").find("[DATI-ROLE=form-language]").find("[dati-role=clickableTrans]").css("background-image", "url("+getMyTrans[i].image+")");

      }

            }

        }
        /*end lear translate*/
    }
/*    VIDER_INPUTS(){

        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[dati-language-title-placeholder]").val("");
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[dati-language-description-placeholder]").val("");
    }*/
    REMPLIR_FORM(list){
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-TITLE]").html(list.languageName);
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-TITLE-PLACEHOLDER]").attr("placeholder",list.maternalName);
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-TITLE-PLACEHOLDER]").attr("id","title"+list.id);
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER]").attr("id","description"+list.id);
    }
    VIDE_FORM(){
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-TITLE]").html("");
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-LANGUAGE-TITLE-PLACEHOLDER]").attr("placeholder","");
    }
    CHANGE_CSS_SELECTED(list){
        $("[DATI-PAGE=formAddLanguage]").find("[class=languages]").find("[DATI-SELECTOR]").css("background", "#ffffff");
        $("[DATI-PAGE=formAddLanguage]").find("[class=languages]").find("[DATI-SELECTOR=" + list.id +" ]").css("background", "#eeeeee");
    }
    SWITCHER(is_check,list,style, global_list){
        var onchange = "iAddLang.ENABLE_LANG('"+list.code+"',"+list.id+"  )";

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



    TITLE(name,code){
        return  '<div class="title"  >' +
             '<p class="name">'+name+'</p>' +
            '<p class="code">'+code+'</p>' +
            '</div>';
    }

    SHOWFORM(id){
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-ROLE=form-language]").css("display", "none");
        $("[DATI-PAGE=formAddLanguage]").find("[class=form_languages]").find("[DATI-ID="+id+"]").css("display", "flex");
    }

    SELECTITEM(id){
        $("[DATI-PAGE=formAddLanguage]").find("[class=languages]").find("[DATI-SELECTOR]").css("background", "#ffffff");
        $("[DATI-PAGE=formAddLanguage]").find("[class=languages]").find("[DATI-SELECTOR=" + id +" ]").css("background", "#eeeeee");
    }


    UPDATE(id){

        var langI = $("[DATI-ID="+id+"]");
        var sw = $(langI).attr("DATI-SWITECH");
        var lists_name = $(langI).attr("DATI-LIST");
        var lists = eval(lists_name);
        var translateLangage = lists.filter(list => list.isPrimary == 0);
        $(langI).html("");
        for(var i=0; i<translateLangage.length; i++) {
            var list = translateLangage[i];
            var itemLang = "";
            itemLang += this.LANG_BLOCK(list);
            if(iAddLang.GET_TRX_BY_CODE(list.code) != -1){
                var s = this.SWITCHER(true, list, sw, lists_name+"["+i+"]");
            }else{
                var s = this.SWITCHER(false, list, sw, lists_name+"["+i+"]");
            }
            $(langI).append(itemLang);
            var langueBlock = $(langI).find("[DATI-ID=" + list.id + "]");
            $(langueBlock).append(s);
            dati_switcher.ADD_TO_DOM( list.code);
            var titleLang = this.TITLE(list.languageName,list.code);
            $(langueBlock).append(titleLang);





        }

    }






    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=languageItem]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                document.addEventListener($(myComposent).attr("dati-update"), function(e){
                    setTimeout(function(){
                        Language_Item.UPDATE($(myComposent).attr("dati-id"))
                    }, 100);
                }, false);
            }
        }

    }

};

let Language_Item = new Ui_LanguageItem();