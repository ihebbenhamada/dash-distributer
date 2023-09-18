let Ui_CategoriesBar = class {
    constructor() {
        this.selectedCatId = null;
        this.selectedCatTitle = null;
        this.addTrx = [];
        this.add_name = null;
        this.updateTrx = [];
        this.update_name = null;
        this.selectedCategoriesDetails = null;
        this.imageCat = null ;
        this.msgErreurCatBar = null;
        $(document).on('click', ".categories span", function () {
            $(".categories > span").css("background-color", "rgba(0,0,0,0)");
            $(".categories > span > span").css("background-color", "#1a3e64");
            $(".categories > span").css("color", "#1a3e64");
            $(this).css("background-color", "#1a3e64");
            $(this).css("color", "#FAFAFA");
            $(this).find("span").css("background-color", "red");
        })

        document.addEventListener("getCategoryBarByIDSelected", function (e) {

            CategoriesBar_ui.selectedCategoriesDetails = e.detail.res[0];
            CategoriesBar_ui.REMPLIR_UPDATE();
        }, false);
    }

    READ_INPUT_CAT() {
        this.msgErreurCatBar= [];
        dati_Erreurs.UPDATE("ErreursCatBar");
        /*  ADD*/
        if (CategoriesBar_ui.selectedCategoriesDetails == null) {
            var languages = dati_headerBar.LANGUAGES;

            this.addTrx = {};
            for (var i = 0; i < languages.length; i++) {
                var language = languages[i];
                var myCat = $("[dati-composent=barHeader][DATI-ID=HeaderCB]").find("[dati-id=inputCatAdd" + language.code + "]").val();
                var image= this.imageCat;
                if ($("[dati-composent=barHeader][DATI-ID=HeaderCB]").find("[dati-id=inputCatAdd" + language.code + "]").val() !== "") {
                    this.addTrx[language.code] = {name:myCat,image:image};
                }
                if (language.isPrimary == 1) {
                    this.add_name = myCat;
                }
            }
            if(  this.add_name == null ||  this.add_name == "" ){
                this.msgErreurCatBar.push("Name categorie is required");
                dati_Erreurs.UPDATE("ErreursCatBar");
            }
            if(this.imageCat == null){
                this.msgErreurCatBar.push("Image categorie is required");
                dati_Erreurs.UPDATE("ErreursCatBar");
            }

            var data = {
                id: barCard_ui.selectedBar.id,
                name: this.add_name,
                image: this.imageCat,
                translate: this.addTrx,
            };

            if(this.msgErreurCatBar.length == 0) {
            SSAPI.SUBMIT({
                uri: "/Bar/addCategory",
                data: data,
                onsuccess: "catBarAdded",
                onerror: "catBarAdded_error"
            });}
        } else {
            /*  UPDATE*/
            var languages = dati_headerBar.LANGUAGES;
            this.updateTrx = {};
            for (var i = 0; i < languages.length; i++) {
                var language = languages[i];
                var myCat = $("[dati-composent=barHeader][DATI-ID=HeaderCB]").find("[dati-id=inputCatAdd" + language.code + "]").val();
                if(this.imageCat!= null){
                    var image =this.imageCat;
                }else {
                    var image =this.selectedCategoriesDetails.image;
                };
                if (myCat !== "" && language.isPrimary != 1 ) {
                    this.updateTrx[language.code] = {name:myCat,image:image};
                }
                if (language.isPrimary == 1  && myCat !== "") {
                    this.update_name = myCat;
                }
            }


            if(  this.update_name == null  ){
                this.msgErreurCatBar.push("Name categorie is required");
                dati_Erreurs.UPDATE("ErreursCatBar");
            }
            if(image == null){
                this.msgErreurCatBar.push("Image categorie is required");
                dati_Erreurs.UPDATE("ErreursCatBar");
            }
            var data = {
                id: CategoriesBar_ui.selectedCategoriesDetails.id,
                name: this.update_name,
                image: image,
                translate: this.updateTrx,
            };

            if(this.msgErreurCatBar.length == 0) {
            SSAPI.SUBMIT({
                uri: "/Bar/updateCategory",
                data: data,
                onsuccess: "catHeaderCBUpdated",
                onerror: "catHeaderCBUpdated_error"
            });}

        }

    }
    RESET_ADD_CAT(){
        CategoriesBar_ui.add_name = null;
        CategoriesBar_ui.imageCat=null;
        CategoriesBar_ui.addTrx=null ;
    }
    setSelectedCategoriesDetailsToNull() {
        /*        console.log( CategoriesBar_ui.selectedCategoriesDetails,"first");*/
        CategoriesBar_ui.selectedCategoriesDetails = null;
        /*        console.log( CategoriesBar_ui.selectedCategoriesDetails,"after");*/
        $("[dati-composent=barHeader]").find("[dati-id=uploadIamgeCatBar]").find("input").val("");
        $("[dati-composent=barHeader]").find("input").val("");
        $(".categories > span").css("background-color", "rgba(0,0,0,0)");
        $(".categories > span > span").css("background-color", "#1a3e64");
        $(".categories > span").css("color", "#1a3e64");
    }

    TOGGEL_ALERTE() {
        $("[DATI-PAGE=Bar\\/Contents]").find("[dati-id=CatAlerte]").find("[class=overlay_restau]").css("display", "block");
        $("[DATI-PAGE=Bar\\/Contents]").find("[dati-id=toggelCat]").css("display", "none");
    }

    CANCEL_ALERTE() {
        $("[DATI-PAGE=Bar\\/Contents]").find("[dati-id=CatAlerte]").find("[class=overlay_restau]").css("display", "none");

    }


    /*cancel form cat*/

    TEST_CANCEL_FORM() {

        if (CategoriesBar_ui.selectedCategoriesDetails == null) {
            dati_headerBar.CANCEL_FORM(CategoriesBar_ui.selectedCategoriesDetails);
        } else if (CategoriesBar_ui.selectedCategoriesDetails != null) {
            CategoriesBar_ui.selectedCategoriesDetails = null;
            dati_headerBar.CANCEL_UPDATE(CategoriesBar_ui.selectedCategoriesDetails);
        }

        $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-image","none");
    }


    SELECT_CAT(bar_element) {
        this.selectedCatId = $(bar_element).parent().attr("dati-id");
        this.selectedCatTitle = $(bar_element).parent().attr("dati-title");

    }

    DELETE_NAME() {
        var title = this.selectedCatTitle;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete " + titleUper + " Categorie");
    }


    delete(bar_element) {
        this.TOGGEL_ALERTE();
        this.SELECT_CAT(bar_element);
        this.DELETE_NAME();
    }

    GET_PRIMARY_LANGUAGE(){
        for(var i=0; i<dati_headerBar.LANGUAGES.length;i++){
            if(dati_headerBar.LANGUAGES[i].isPrimary){
                return dati_headerBar.LANGUAGES[i];
            }
        }
        return -1;
    }

    REMPLIR_UPDATE() {

        var languages = dati_headerBar.LANGUAGES;
        var primaryLangue = this.GET_PRIMARY_LANGUAGE();
        if(primaryLangue != -1){
            $("[dati-composent=barHeader]").find("[dati-id=inputCatAdd"+primaryLangue.code+"]").val( this.selectedCategoriesDetails.name);
            $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-image","url("+this.selectedCategoriesDetails.image+")");
        }
        if(this.selectedCategoriesDetails.translate != null && this.selectedCategoriesDetails.translate != ""){
            for( var i=0; i<this.selectedCategoriesDetails.translate.length ; i++){
                var trx = this.selectedCategoriesDetails.translate[i];

                if(this.selectedCategoriesDetails.translate != null ) {
                    if(this.selectedCategoriesDetails.translate[i].trx_code){
                        $("[dati-composent=barHeader]").find("[dati-id=inputCatAdd"+trx.trx_code+"]").val( trx.name);
                        $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-image","url("+trx.image+")");
                    }
                }
            }
        }
    }

    update(bar_element) {
        /*  vider les input on seconde clique */
        $("[dati-composent=barHeader]").find("input").val("");
        var id_cat = $(bar_element).attr("dati-id");
        SSAPI.SUBMIT({
            uri: "/Bar/getCategory",
            data: {
                id: id_cat,
            },
            onsuccess: "getCategoryBarByIDSelected"

        });


    }

    VALIDATE_ALERTE() {
        var id = this.selectedCatId;
        iContentBarByCat.DELETE_CAT(id);


        /*        var id_cat = parseInt(this.selectedCatId);
                var lisCat = eval(barContent_ui.categorie);
                var newList = lisCat.filter(list => list.id !== id_cat);
                barContent_ui.categorie =  newList ;
                dati_headerBar.UPDATE("HeaderCB");*/

    }

    /* ******* DELETE ******* */

    GET_POSITION_IN_LIST(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_LIST(id) {

        var pos = CategoriesBar_ui.GET_POSITION_IN_LIST(barContent_ui.categorie, id);
        if (pos != -1) {
            barContent_ui.categorie.splice(pos, 1);
        }
        dati_headerBar.UPDATE("HeaderCB");
        CategoriesBar_ui.CANCEL_ALERTE();
    }

    /* ******* END DELETE ******* */
};

let CategoriesBar_ui = new Ui_CategoriesBar();