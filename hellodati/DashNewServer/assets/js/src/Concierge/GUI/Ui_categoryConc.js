let Ui_CategoriesConc = class {
    constructor() {
        this.addTrx={} ;
        this.add_name=null;
        this.selectedCategoriesDetails= null;
        this.updateTrx ={};
        this.update_name=null;
        this.selectedCatId=null;
        this.selectedCatTitle=null;
        this.imageCat=null;
        $(document).on('click',".categories span",function(){
            $(".categories > span").css("background-color","rgba(0,0,0,0)");
            $(".categories > span > span").css("background-color","#1a3e64");
            $(".categories > span").css("color","#1a3e64");
            $(this).css("background-color","#1a3e64");
            $(this).css("color","#FAFAFA");
            $(this).find("span").css("background-color","red");
        })
    }


    READ_INPUT_CAT(){
        if(CategoriesConc_ui.selectedCategoriesDetails == null) {

            /* ADD*/
            var languages = dati_headerBar.LANGUAGES;
            this.addTrx = {};
            for (var i = 0; i < languages.length; i++) {
                var language = languages[i];
                var myCat=$("[dati-composent=barHeader][DATI-ID=ConciergeBar]").find("[dati-id=inputCatAdd" + language.code + "]").val();
                var image= this.imageCat;
                if(language.isPrimary == 1 && myCat !== ""){
                    this.add_name = myCat;
                }else if (myCat !== "" && language.isPrimary != 1 ){
                    this.addTrx[language.code] = {name:myCat,image:image};

                }
            }

            var dataAdd = {
                id: Concierge_ui.selectedConcierge.id,
                name: this.add_name,
                image: image,
                translate:  this.addTrx ,
            };

                SSAPI.SUBMIT({
                    uri: "/Concierge/addCategory",
                    data: dataAdd,
                    onsuccess: "catConcAdded",
                    onerror: "catConcAdded_error"
                });

        } else {
            /*  UPDATE*/
            var languages = dati_headerBar.LANGUAGES;
            this.updateTrx={};
            for( var i=0; i<languages.length ; i++){
                var language = languages[i];
                var myCat=$("[dati-composent=barHeader][DATI-ID=ConciergeBar]").find("[dati-id=inputCatAdd" + language.code + "]").val();


                if(this.imageCat!= null){
                    var image =this.imageCat;;
                }else {
                    var image = CategoriesConc_ui.selectedCategoriesDetails.image;
                };
                if(language.isPrimary == 1 && myCat !== ""){
                    this.update_name = myCat;
                }
                if (myCat !== "" && language.isPrimary != 1 ){
                    this.updateTrx[language.code] = {name:myCat,image:image};
                }
            }
            var data= {
                id: CategoriesConc_ui.selectedCategoriesDetails.id,
                name:  this.update_name,
                image: image,
                translate:  this.updateTrx,
            };


                SSAPI.SUBMIT({
                    uri: "/Concierge/updateCategory",
                    data: data,
                    onsuccess: "catConcUpdated",
                    onerror: "catConcUpdated_error"
                });

        }
    }

    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }
    update(bar_element){
        /*  vider les input on seconde clique */
        //if()
        //this.langues = formTrx_ui.langues;
        this.langues = dati_headerBar.LANGUAGES;
        $("[dati-composent=barHeader]").find("input").val("");
        var id_cat = $(bar_element).attr("dati-id");
        var MyList = congContent_ui.categorie;
        var pos = this.FIN_BY_ID_IN_LIST(MyList, id_cat);
        if(pos != -1){
            CategoriesConc_ui.selectedCategoriesDetails = MyList[pos];
            CategoriesConc_ui.REMPLIR_UPDATE();
        }
    }
    RESET_ADD_CAT(){
        CategoriesConc_ui.add_name =null;
        CategoriesConc_ui.imageCat=null;
        CategoriesConc_ui.addTrx=null ;
    }
    setSelectedCategoriesDetailsToNull(){
        CategoriesConc_ui.selectedCategoriesDetails = null ;
        $("[dati-composent=barHeader]").find("input").val("");
        $("[dati-composent=barHeader]").find("[dati-id=uploadIamgeCatBar]").find("input").val("");
        $(".categories > span").css("background-color","rgba(0,0,0,0)");
        $(".categories > span > span").css("background-color","#1a3e64");
        $(".categories > span").css("color","#1a3e64");
    }
    GET_PRIMARY_LANGUAGE(languages){
        for(var i=0; i<languages.length;i++){
            if(languages[i].isPrimary){
                return languages[i];
            }
        }
        return -1;
    }
    REMPLIR_UPDATE(){
        var languages = dati_headerBar.LANGUAGES;
        var primaryLangue = this.GET_PRIMARY_LANGUAGE(languages);
        if(primaryLangue != -1){
            $("[dati-composent=barHeader]").find("[dati-id=inputCatAdd"+primaryLangue.code+"]").val( CategoriesConc_ui.selectedCategoriesDetails.name);
            $("[dati-id=ConciergeBar]").find("[dati-role=clickableTrans]").css("background-image","url("+CategoriesConc_ui.selectedCategoriesDetails.image+")");
        }
        if(CategoriesConc_ui.selectedCategoriesDetails.translate != null && CategoriesConc_ui.selectedCategoriesDetails.translate != ""){
            for( var i=0; i<CategoriesConc_ui.selectedCategoriesDetails.translate.length ; i++){
                var trx = CategoriesConc_ui.selectedCategoriesDetails.translate[i];
                if(CategoriesConc_ui.selectedCategoriesDetails.translate != null ) {
                    if(CategoriesConc_ui.selectedCategoriesDetails.translate[i].trx_code){
                        $("[dati-composent=barHeader]").find("[dati-id=inputCatAdd"+trx.trx_code+"]").val( trx.name);
                        $("[dati-id=ConciergeBar]").find("[dati-role=clickableTrans]").css("background-image","url("+trx.image+")");
                    }
                }
            }
        }
    }

    TEST_CANCEL_FORM(){

        if(  CategoriesConc_ui.selectedCategoriesDetails == null ){
            dati_headerBar.CANCEL_FORM(CategoriesConc_ui.selectedCategoriesDetails);
        }else if(CategoriesConc_ui.selectedCategoriesDetails != null ) {
            CategoriesConc_ui.selectedCategoriesDetails = null;
            dati_headerBar.CANCEL_UPDATE(CategoriesConc_ui.selectedCategoriesDetails);
        }

        $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-image","none");
    }

    SELECT_CAT(bar_element){
        this.selectedCatId =$(bar_element).parent().attr("dati-id");
        this.selectedCatTitle =$(bar_element).parent().attr("dati-title");

    }

    VALIDATE_ALERTE(){
        var id = this.selectedCatId;
        iContentConcByCat.DELETE_CAT(id);
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=ConciergeContents]").find("[dati-id=CatAlerte]").find("[class=overlay_restau]").css("display", "block");
        $("[DATI-PAGE=ConciergeContents]").find("[dati-id=toggelCat]").css("display", "none");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=ConciergeContents]").find("[dati-id=CatAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    DELETE_NAME(){
        var title = this.selectedCatTitle;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Categorie");
    }
    delete(bar_element){
        this.TOGGEL_ALERTE();
        this.SELECT_CAT(bar_element);
        this.DELETE_NAME();
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
        var pos = CategoriesConc_ui.GET_POSITION_IN_LIST(congContent_ui.categorie,id);
        if(pos != -1){
            congContent_ui.categorie.splice(pos, 1);
        }
        dati_headerBar.UPDATE("ConciergeBar");
        CategoriesConc_ui.CANCEL_ALERTE();
    }
    /* ******* END DELETE ******* */


};

let CategoriesConc_ui = new Ui_CategoriesConc();