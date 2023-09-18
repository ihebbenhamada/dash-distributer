class i_OffreHotel{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    ADD_OFFRE_HOTEL(name,offer_operator_id,brand_id,model_id,accessory_id,comm_day,data_day,accessories,payment_method,price_ht,tva,image){
        var data = {
            name:name,
            offer_operator_id:offer_operator_id,
            brand_id:brand_id,
            model_id:model_id,
            accessory_id:accessory_id,
            comm_day:comm_day,
            data_day:data_day,
            accessories:accessories,
            payment_method:payment_method,
            price_ht:price_ht,
            tva:tva,
            image:image
        };
        SSAPI.SUBMIT({
            uri:"/Offer_hotel/addOfferHotel",
            onsuccess:"addOffreHotelSuccess",
            onerror:"addOffreHotel_error",
            data:data
        });

        console.log(data,'daataa add HotelHotel');


    }
    GET_OFFRE_OPERATOR(){
        SSAPI.SUBMIT({
            uri:"/Offer_operator/getAll",
            onsuccess:"offreOperatorReceive",
            onerror:"offreOperatorReceive_error",
        });
    }
    GET_ACCESSSORY(){
        SSAPI.SUBMIT({
            uri:"/Accessory/getAll",
            onsuccess:"AccessoryReceive",
            onerror:"AccessoryReceive_error",
        });
    }
    GET_OFFRETYPE(){
        var eventListOffre = new CustomEvent("TypeOffreReceive", {
            detail: {
                res:[{
                    id:1,
                    name:"Monthly",
                },
                    {
                        id:2,
                        name:"Weekly",
                    },
                    {
                        id:3,
                        name:"Yearly",
                    }

                ]
            }
        });
        document.dispatchEvent(eventListOffre);
    }
    GET_ALL_BRANDS(){
        SSAPI.SUBMIT({
            uri:"/Brand/getAllBrands",
            onsuccess:"brandsReceive",
            onerror:"brandsReceive_error"
        })
    }
    GET_MODELS(id){
        console.log("brand",id);
        SSAPI.SUBMIT({
            uri:"/Brand/getModelByBrandId",
            onsuccess:"modelReceive",
            onerror:"modelReceive_error",
            data:{
                brand_id:id,
            }
        })
    }
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "OfferHotel" ){
                var event = new CustomEvent("showInputOffreHotel");
                document.dispatchEvent(event);
                IOffreHotel.GET_OFFRE_OPERATOR();
                IOffreHotel.GET_ALL_BRANDS();
                IOffreHotel.GET_ACCESSSORY();
                IOffreHotel.GET_OFFRETYPE();

            }


        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("addOffreHotelSuccess", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Add Offre Hotel With Success!");
        }, false);
        document.addEventListener("addOffreHotel_error", function(e){
            addProvider_ui.SHOW_POPUP_ERROR("Offre Hotel Add  Failed!");
        }, false);
        document.addEventListener("offreOperatorReceive", function(e){
            OffreHotel_ui.DATALISTOFFRE_OPERATOR(e.detail);
        }, false);
        document.addEventListener("AccessoryReceive", function(e){
            OffreHotel_ui.DATALISTACCESSORY(e.detail);
        }, false);
        document.addEventListener("TypeOffreReceive", function(e){
            OffreHotel_ui.DATALISTTYPEOFFRE(e.detail);
        }, false);
        document.addEventListener("brandsReceive", function(e){
            OffreHotel_ui.DATALIST_BRANDS(e.detail);

        }, false);
        document.addEventListener("modelReceive", function(e){
            OffreHotel_ui.DATALIST_Modal(e.detail);
            console.log("brand model",e.detail);

        }, false);
    }
}

let IOffreHotel= new  i_OffreHotel();