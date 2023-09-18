class imp_ContentBarByCat{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    DELETE_CAT(id_cat){

        SSAPI.SUBMIT({
            uri:"/Bar/deleteCategory",
            onsuccess:"catBarDeleted",
            onerror:"catBarDeleted_error",
            data:{
                id:id_cat,

            }
        })
        barContent_ui.CANCEL_ALERTE();
    }



/*
    ENABLE_SERVICE(list){
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
        document.addEventListener("filterDrinksByCat", function(e){
            var id_cat = e.detail.id_cat

            SSAPI.SUBMIT({
                uri:"/Bar/getAllFC",
                data :{id:barCard_ui.selectedBar.id,
                    cat_id: id_cat ,
                },
                onsuccess:"reciveDrinbksByCat"

            })

            //ss-api.submit({
            //uri:"/foodByCat",
            //data:{id:id_cat},
            //onsuccess:""
            //});
/*            var event = new CustomEvent("reciveDrinbksByCat", {
                detail: {
                    data:[ {
                        title:"cocktail",
                        description:"no description",
                        id:1,
                        enable:true,
                        img:"/assets/img/restaurant/testImage.jpg",
                        price:18,
                        categories_id:1
                    }


                    ]
                }
            });

            document.dispatchEvent(event);*/
        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("reciveDrinbksByCat", function(e){

            barContent_ui.DATALIST(e.detail);
            dati_cardRestaurant.UPDATE("drinksList");
            barContent_ui.SHOW_BT_ADD();

        }, false);
        /* ADD CAT */
        document.addEventListener("catBarAdded", function(e){
            SSAPI.SUBMIT({
                uri:"/Bar/getCategory",
                data :{id:e.detail.res[0],

                },
                onsuccess:"getCategoryBarByID"

            })

        }, false);

        document.addEventListener("getCategoryBarByID", function(e){

            var myList=eval(barContent_ui.categorie);
            myList.push(e.detail.res[0]);
            dati_headerBar.UPDATE("HeaderCB");
            CategoriesBar_ui.setSelectedCategoriesDetailsToNull();
            CategoriesBar_ui.RESET_ADD_CAT();
        }, false);

        document.addEventListener("catBarAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();

        }, false);
        /*END ADD CAT */
        /* DELETE CAT */
        document.addEventListener("catBarDeleted", function(e){

            CategoriesBar_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);
        document.addEventListener("catAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();

        }, false);

        document.addEventListener("catBarDeleted_error", function(e){

        }, false);
        /* END DELETE CAT */
        /* UPDATE CAT */
        document.addEventListener("catHeaderCBUpdated", function(e){

            SSAPI.SUBMIT({
                uri:"/Bar/getCategory",
                data :{id:e.detail.res[0],

                },
                onsuccess:"getCategoryBarByIDUpdate"

            })

        }, false);
        document.addEventListener("getCategoryBarByIDUpdate", function(e){

            var listCategories = barContent_ui.categorie;
            for ( var i=0; i<listCategories.length ; i++){
                if(listCategories[i].id==e.detail.res[0].id){
                    barContent_ui.categorie[i].name = e.detail.res[0].name ;
                    barContent_ui.categorie[i].image = e.detail.res[0].image ;
                    barContent_ui.categorie[i].translate = e.detail.res[0].translate ;
                    break;
                }
            }
            CategoriesBar_ui.setSelectedCategoriesDetailsToNull();
            dati_headerBar.UPDATE("HeaderCB");
        }, false);

        document.addEventListener("catHeaderCBUpdated_error", function(e){

        }, false);
        /* END UPDATE CAT */
    }
}

let iContentBarByCat = new imp_ContentBarByCat();