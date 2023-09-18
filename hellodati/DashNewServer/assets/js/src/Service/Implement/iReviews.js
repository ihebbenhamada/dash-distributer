class imp_Reviews{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "detailServices"){



                $("[DATI-COMPOSENT=pop-up]").css("width","1036px");
                $("[DATI-COMPOSENT=pop-up]").css("height","750px");



            }


        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ReviewReceive", function(e){
            var service_id = e.detail.service_id;
            var uri = e.detail. uri;
            var eventRate = new CustomEvent("RateReceive", { detail: {service_id : service_id , uri:uri} });
            document.dispatchEvent(eventRate);


        }, false);
        document.addEventListener("RateReceive", function(e){
            var  service_id = e.detail.service_id;
            var uri = e.detail. uri;
            var data = {
                hotel_id: 30,
                service_id : service_id

            };
            SSAPI.SUBMIT({
                uri:uri,
                data:data,
                onsuccess:"showRateReceive"
            })

        }, false);


        /*rate show*/
        document.addEventListener("showRateReceive", function(e){

            reviews_ui.DATALIST(e.detail);
            dati_reviews.UPDATE("reviewsR");

        }, false);
        /*end rate show*/
    }
}

let iReviews = new imp_Reviews();