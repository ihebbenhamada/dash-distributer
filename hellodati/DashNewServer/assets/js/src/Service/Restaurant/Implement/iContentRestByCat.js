class imp_ContentRestByCat{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    DELETE_CAT(id){

        SSAPI.SUBMIT({
            uri:"/Restaurant/deleteCategory",
            onsuccess:"catDeleted",
            onerror:"catDeleted_error",
            data:{
                id:id,

            }
        })
        restauContent_ui.CANCEL_ALERTE();
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
        document.addEventListener("filterFoodByCat", function(e){
        var id_cat = e.detail.id_cat;

            SSAPI.SUBMIT({
                uri:"/Restaurant/getAllFC",
                data :{id:restaurantCard_ui.selectedRest.id,
                    cat_id: id_cat ,
                    service_type_id:serviceCard_ui.selectedServiceId
                     },
                onsuccess:"reciveFoodByCat"

            })


        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("reciveFoodByCat", function(e){
            restauContent_ui.DATALIST(e.detail);
            dati_cardRestaurant.UPDATE("foodsList");
            restauContent_ui.SHOW_BT_ADD();

        }, false);
        /* ADD CAT */
        document.addEventListener("catAdded", function(e){
            SSAPI.SUBMIT({
                uri:"/Restaurant/getCategory",
                data :{id:e.detail.res[0],

                },
                onsuccess:"getCategoryRestByID"

            })

        }, false);
        document.addEventListener("getCategoryRestByID", function(e){
            var myList=eval(restauContent_ui.categorie);
            myList.push(e.detail.res[0]);
            dati_headerBar.UPDATE("Bar");
            Categories_ui.setSelectedCategoriesDetailsToNull();
            Categories_ui.RESET_ADD_CAT();

        }, false);

        document.addEventListener("catAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /*END ADD CAT */
        /* DELETE CAT */
        document.addEventListener("catDeleted", function(e){
            Categories_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("catDeleted_error", function(e){
        }, false);
        /* END DELETE CAT */
        /* UPDATE CAT */
        document.addEventListener("catBarUpdated", function(e){
            SSAPI.SUBMIT({
                uri:"/Restaurant/getCategory",
                data :{id:e.detail.res[0],

                },
                onsuccess:"getCategoryRestByIDUpdate"

            })

        }, false);
        document.addEventListener("getCategoryRestByIDUpdate", function(e){

            var listCategories = restauContent_ui.categorie;
            for ( var i=0; i<listCategories.length ; i++){
                if(listCategories[i].id==e.detail.res[0].id){
                    restauContent_ui.categorie[i].name = e.detail.res[0].name ;
                    restauContent_ui.categorie[i].image = e.detail.res[0].image ;
                    restauContent_ui.categorie[i].translate = e.detail.res[0].translate ;
                    break;
                }
            }
            Categories_ui.setSelectedCategoriesDetailsToNull();
            dati_headerBar.UPDATE("Bar");
        }, false);

        document.addEventListener("catBarUpdated_error", function(e){

        }, false);
        /* END UPDATE CAT */
    }
}

let iContentRestByCat = new imp_ContentRestByCat();