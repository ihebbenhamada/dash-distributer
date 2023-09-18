class imp_ContentConcByCat{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    DELETE_CAT(id){

        SSAPI.SUBMIT({
            uri:"/Concierge/deleteCategory",
            onsuccess:"catConcDeleted",
            onerror:"catConcDeleted_error",
            data:{
                id:id,

            }
        })
        CategoriesConc_ui.CANCEL_ALERTE();
    }


    /*    ENABLE_SERVICE(list){
            var id =list.id;

            if(list.enable){
                // ss-api /Service/disable

                //if changed in database
                list.enable=false;

            }else{
                // ss-api /Service/enable

                //if changed in database
                list.enable=true;


            }
        }*/



    EVENTS_UI(){
        document.addEventListener("filterConcByCat", function(e){
            var id_cat = e.detail.id_cat;

            SSAPI.SUBMIT({
                uri:"/Concierge/getAllItemByCat",
                data :{id:Concierge_ui.selectedConcierge.id,
                    cat_id: id_cat ,
                },
                onsuccess:"reciveConcByCat"

            })


        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("reciveConcByCat", function(e){

            congContent_ui.DATALIST(e.detail);

            Concierge_ui.UPDATE("ConciergeContentList");
   /*         restauContent_ui.SHOW_BT_ADD();*/

        }, false);
        /* ADD CAT */
        document.addEventListener("catConcAdded", function(e){
            SSAPI.SUBMIT({
                uri:"/Concierge/getCategory",
                data :{id:e.detail.res[0],

                },
                onsuccess:"getCategoryConcByID"

            })

        }, false);
        document.addEventListener("getCategoryConcByID", function(e){
            var myList=eval(congContent_ui.categorie);
            myList.push(e.detail.res[0]);
            dati_headerBar.UPDATE("ConciergeBar");
            CategoriesConc_ui.setSelectedCategoriesDetailsToNull();
            CategoriesConc_ui.RESET_ADD_CAT();

        }, false);

        document.addEventListener("catConcAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /*END ADD CAT */
        /* DELETE CAT */
        document.addEventListener("catConcDeleted", function(e){
            CategoriesConc_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("catConcDeleted_error", function(e){
        }, false);
        /* END DELETE CAT */
        /* UPDATE CAT */
        document.addEventListener("catConcUpdated", function(e){
            SSAPI.SUBMIT({
                uri:"/Concierge/getCategory",
                data :{id:e.detail.res[0],

                },
                onsuccess:"getCategoryConcByIDUpdate"

            })

        }, false);
        document.addEventListener("getCategoryConcByIDUpdate", function(e){

            var listCategories = congContent_ui.categorie;
            for ( var i=0; i<listCategories.length ; i++){
                if(listCategories[i].id==e.detail.res[0].id){
                    congContent_ui.categorie[i].name = e.detail.res[0].name ;
                    congContent_ui.categorie[i].image = e.detail.res[0].image ;
                    congContent_ui.categorie[i].translate = e.detail.res[0].translate ;
                    break;
                }
            }
            CategoriesConc_ui.setSelectedCategoriesDetailsToNull();
            dati_headerBar.UPDATE("ConciergeBar");
        }, false);

        document.addEventListener("catConcUpdated_error", function(e){

        }, false);
        /* END UPDATE CAT */
    }
}

let iContentConcByCat = new imp_ContentConcByCat();