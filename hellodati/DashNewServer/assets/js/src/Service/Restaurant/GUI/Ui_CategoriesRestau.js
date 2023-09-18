let Ui_CategoriesRestau = class {
    constructor() {
        this.selectedCatId=null;
        this.selectedCatTitle=null;
        this.addTrx={} ;
        this.add_name=null;
        this.updateTrx ={};
        this.update_name=null;
        this.selectedCategoriesDetails= null;
        this.langues = [];
        this.imageCat = null ;
        this.msgErreurCatRest = null;
        $(document).on('click',".categories span",function(){
            $(".categories > span").css("background-color","rgba(0,0,0,0)");
            $(".categories > span > span").css("background-color","#1a3e64");
            $(".categories > span").css("color","#1a3e64");
            $(this).css("background-color","#1a3e64");
            $(this).css("color","#FAFAFA");
            $(this).find("span").css("background-color","red");
        })
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

    READ_INPUT_CAT(){
        this.msgErreurCatRest= [];
        dati_Erreurs.UPDATE("ErreursCatRestau");
        if(Categories_ui.selectedCategoriesDetails == null) {

            /* ADD*/
            var languages = dati_headerBar.LANGUAGES;
            this.addTrx = {};
            for (var i = 0; i < languages.length; i++) {
                var language = languages[i];
                var myCat=$("[dati-composent=barHeader][DATI-ID=Bar]").find("[dati-id=inputCatAdd" + language.code + "]").val();
                var image= this.imageCat;
                if(language.isPrimary == 1 && myCat !== ""){
                    this.add_name = myCat;
                }else if (myCat !== "" && language.isPrimary != 1 ){
                      this.addTrx[language.code] = {name:myCat,image:image};

                }
            }
            if(  this.add_name == null  ){
                this.msgErreurCatRest.push("Name categorie is required");
                dati_Erreurs.UPDATE("ErreursCatRestau");
            }
            if(this.imageCat == null){
                this.msgErreurCatRest.push("Image categorie is required");
                dati_Erreurs.UPDATE("ErreursCatRestau");
            }

             var dataAdd = {
                id: restaurantCard_ui.selectedRest.id,
                name: this.add_name,
                image: this.imageCat,
                translate:  this.addTrx ,
        };
            if(this.msgErreurCatRest.length == 0) {
                SSAPI.SUBMIT({
                    uri: "/Restaurant/addCategory",
                    data: dataAdd,
                    onsuccess: "catAdded",
                    onerror: "catAdded_error"
                });
            }
        } else {
          /*  UPDATE*/
            var  languages = this.langues ;
            this.updateTrx={};
            for( var i=0; i<languages.length ; i++){
                var language = languages[i];
                var myCat=$("[dati-composent=barHeader][DATI-ID=Bar]").find("[dati-id=inputCatAdd" + language.code + "]").val();


                if(this.imageCat!= null){
                    var image =this.imageCat;
                }else {
                    var image = Categories_ui.selectedCategoriesDetails.image;
                };
                if(language.isPrimary == 1 && myCat !== ""){
                    this.update_name = myCat;
                }
                if (myCat !== "" && language.isPrimary != 1 ){
                    this.updateTrx[language.code] = {name:myCat,image:image};
                }
            }
            if(  this.update_name == null  ){
                this.msgErreurCatRest.push("Name categorie is required");
                dati_Erreurs.UPDATE("ErreursCatRestau");
            }
            if(image == null){
                this.msgErreurCatRest.push("Image categorie is required");
                dati_Erreurs.UPDATE("ErreursCatRestau");
            }
            var data= {
                id: Categories_ui.selectedCategoriesDetails.id,
                name:  this.update_name,
                image: image,
                translate:  this.updateTrx,
            };
            if(this.msgErreurCatRest.length == 0) {
                SSAPI.SUBMIT({
                    uri: "/Restaurant/updateCategory",
                    data: data,
                    onsuccess: "catBarUpdated",
                    onerror: "catBarUpdated_error"
                });
            }
        }

    }
    RESET_ADD_CAT(){
        Categories_ui.add_name = null;
        Categories_ui.imageCat=null;
        Categories_ui.addTrx=null ;
    }
    setSelectedCategoriesDetailsToNull(){
        Categories_ui.selectedCategoriesDetails = null ;
        $("[dati-composent=barHeader]").find("input").val("");
        $("[dati-composent=barHeader]").find("[dati-id=uploadIamgeCatBar]").find("input").val("");
        $(".categories > span").css("background-color","rgba(0,0,0,0)");
        $(".categories > span > span").css("background-color","#1a3e64");
        $(".categories > span").css("color","#1a3e64");
    }
    GET_PRIMARY_LANGUAGE(){

        for(var i=0; i<this.langues.length;i++){
            if(this.langues[i].isPrimary){
                return this.langues[i];
            }
        }
        return -1;
    }
    
    REMPLIR_UPDATE(){
        var  languages = this.langues ;
        var primaryLangue = this.GET_PRIMARY_LANGUAGE();
        if(primaryLangue != -1){
            $("[dati-composent=barHeader]").find("[dati-id=inputCatAdd"+primaryLangue.code+"]").val( Categories_ui.selectedCategoriesDetails.name);
            $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-image","url("+Categories_ui.selectedCategoriesDetails.image+")");
        }
        if(Categories_ui.selectedCategoriesDetails.translate != null && Categories_ui.selectedCategoriesDetails.translate != ""){
            for( var i=0; i<Categories_ui.selectedCategoriesDetails.translate.length ; i++){
                var trx = Categories_ui.selectedCategoriesDetails.translate[i];
                if(Categories_ui.selectedCategoriesDetails.translate != null ) {
                    if(Categories_ui.selectedCategoriesDetails.translate[i].trx_code){
                        $("[dati-composent=barHeader]").find("[dati-id=inputCatAdd"+trx.trx_code+"]").val( trx.name);
                        $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-image","url("+trx.image+")");
                    }
                }
            }
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
        var MyList = restauContent_ui.categorie;
        var pos = this.FIN_BY_ID_IN_LIST(MyList, id_cat);
        if(pos != -1){
            Categories_ui.selectedCategoriesDetails = MyList[pos];
            Categories_ui.REMPLIR_UPDATE();
        }
    }
    /*cancel form cat*/

    TEST_CANCEL_FORM(){

        if(  Categories_ui.selectedCategoriesDetails == null ){
            dati_headerBar.CANCEL_FORM(Categories_ui.selectedCategoriesDetails);
        }else if(Categories_ui.selectedCategoriesDetails != null ) {
            Categories_ui.selectedCategoriesDetails = null;
            dati_headerBar.CANCEL_UPDATE(Categories_ui.selectedCategoriesDetails);
        }

        $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-image","none");
    }

    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Restaurant\\/Contents]").find("[dati-id=CatAlerte]").find("[class=overlay_restau]").css("display", "block");
        $("[DATI-PAGE=Restaurant\\/Contents]").find("[dati-id=toggelCat]").css("display", "none");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Restaurant\\/Contents]").find("[dati-id=CatAlerte]").find("[class=overlay_restau]").css("display", "none");
    }




    SELECT_CAT(bar_element){
         this.selectedCatId =$(bar_element).parent().attr("dati-id");
        this.selectedCatTitle =$(bar_element).parent().attr("dati-title");

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
    VALIDATE_ALERTE(){
        var id = this.selectedCatId;
        iContentRestByCat.DELETE_CAT(id);


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
        var pos = Categories_ui.GET_POSITION_IN_LIST(restauContent_ui.categorie,id);
        if(pos != -1){
            restauContent_ui.categorie.splice(pos, 1);
        }
        dati_headerBar.UPDATE("Bar");
        Categories_ui.CANCEL_ALERTE();
    }
    /* ******* END DELETE ******* */



};

let Categories_ui = new Ui_CategoriesRestau();