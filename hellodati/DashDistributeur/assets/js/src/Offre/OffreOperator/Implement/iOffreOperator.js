class i_OffreOperator{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    ADD_OFFRE_OPERATOR(operator_id,name,image,payment_method,communication,data,note,price_ht,tva,discount){
        var data = {
            operator_id:operator_id,
            name:name,
            image:image,
            payment_method:payment_method,
            communication:communication,
            data:data,
            note:note,
            price_ht:price_ht,
            tva:tva,
            discount:discount
        };
        SSAPI.SUBMIT({
            uri:"/Offer_operator/add",
            onsuccess:"addOffreOperatorSuccess",
            onerror:"addOffreOperator_error",
            data:data
        });

        console.log(data,'daataa add oFFREOperator');


    }
    GET_OPERATOR(){
        SSAPI.SUBMIT({
            uri:"/Operator/getAll",
            onsuccess:"operatorReceive",
            onerror:"operatorReceive_error",
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

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "OfferOperator" ){
                var event = new CustomEvent("showInputOffreOperator");
                document.dispatchEvent(event);
                IOffreOperator.GET_OPERATOR()
                IOffreOperator.GET_OFFRETYPE()
            }

        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("addOffreOperatorSuccess", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Add Offre Operator With Success!");
        }, false);
        document.addEventListener("addOffreOperator_error", function(e){
            addProvider_ui.SHOW_POPUP_ERROR("Offre Operator Add  Failed!");
        }, false);
        document.addEventListener("operatorReceive", function(e){
            offreOperator_ui.DATALISTOPERATOR(e.detail);
        }, false);
        document.addEventListener("TypeOffreReceive", function(e){
            offreOperator_ui.DATALISTTYPEOFFRE(e.detail);
        }, false);
    }
}

let IOffreOperator= new  i_OffreOperator();