class imp_Reviews{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.nbrRate = null;
        this.service_id=null;
        this.uri=null;
/*        $(document).on('click',"[dati-composent=close-pop-up]",function(){
console.log("rak nzelet");
            $("[DATI-PAGE=detailServices]").find("[dati-avg-rate]").html("");
            $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("");
            $("[DATI-PAGE=detailServices]").find("[dati-five-star]").css("width", "0%");
            $("[DATI-PAGE=detailServices]").find("[dati-four-star]").css("width", "0%");
            $("[DATI-PAGE=detailServices]").find("[dati-three-star]").css("width", "0%");
            $("[DATI-PAGE=detailServices]").find("[dati-two-star]").css("width", "0%");
            $("[DATI-PAGE=detailServices]").find("[dati-one-star]").css("width", "0%");
            $("[DATI-PAGE=detailServices]").find("[dati-taux-clics]").html("0");
            $("[DATI-PAGE=detailServices]").find("[dati-taux-views]").html("0");
            this.nbrRate = null;
        })*/
    }
    GET_NUMBER_STATIC(){

        /* getNbreClic*/
        SSAPI.SUBMIT({
            uri: "/Restaurant/getClicked",
            data :{rest_id:restaurantCard_ui.selectedRest.id},
            onsuccess:"clickNbreReceive",
            onerror:"clickNbreReceive_error",

        })
        /* end getNbreClics*/
        /* getNbreViews*/

        SSAPI.SUBMIT({
            uri: "/Restaurant/getNumViews",
            data :{rest_id:restaurantCard_ui.selectedRest.id},
            onsuccess:"clickNbreViews"

        })
        /* end getNbreViews*/
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "detailServices"){
                $("[DATI-PAGE=detailServices]").find("[dati-avg-rate]").html("");
                $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("");
                $("[DATI-PAGE=detailServices]").find("[dati-five-star]").css("width", "0%");
                $("[DATI-PAGE=detailServices]").find("[dati-four-star]").css("width", "0%");
                $("[DATI-PAGE=detailServices]").find("[dati-three-star]").css("width", "0%");
                $("[DATI-PAGE=detailServices]").find("[dati-two-star]").css("width", "0%");
                $("[DATI-PAGE=detailServices]").find("[dati-one-star]").css("width", "0%");
                $("[DATI-PAGE=detailServices]").find("[dati-taux-clics]").html("0");
                $("[DATI-PAGE=detailServices]").find("[dati-taux-views]").html("0");
                $("[DATI-COMPOSENT=pop-up]").css("width","1036px");
                $("[DATI-COMPOSENT=pop-up]").css("height","750px");


            }


        }, false);
        document.addEventListener("getNbreRates", function(e){

            var service_id = e.detail.service_id;
            var uri = e.detail.uri;
            this.service_id= e.detail.service_id;
            this.uri = e.detail.uri;
            /* getRateNumber*/
            SSAPI.SUBMIT({
                uri: uri+'/getAvgRate',
                data :{service_id:service_id},
                onsuccess:"AvgRate"

            })
            /* end getRateNumber*/
            /* getRateNumber*/
            SSAPI.SUBMIT({
                uri: uri+'/getNbrRate',
                data :{service_id:service_id},
                onsuccess:"rateNumber"

            })
            /* end getRateNumber*/


        })
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








        /* Avg Rate */
        document.addEventListener("AvgRate", function(e){
            var avg = e.detail.res[0].avg ;
            if(avg % 1 != 0){
                var avg = avg.toFixed(2);
            }
            $("[DATI-PAGE=detailServices]").find("[dati-avg-rate]").html(avg);

            avg = parseFloat(avg);
            var texteComment = avg.toFixed(0);

            switch (parseInt(texteComment)) {
                case 1:
                    return  $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("Terrible");
                    break;
                case 2:
                    return  $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("Bad");
                    break;
                case 3:
                    return  $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("Okey");
                    break;
                case 4:
                    return  $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("Good");
                    break;
                case 5:
                    return  $("[DATI-PAGE=detailServices]").find("[dati-avg-rate-comment]").html("Great");
                    break;

            }
        }, false);






        /* Nbre Rate */
        document.addEventListener("rateNumber", function(e){
            iReviews.nbrRate = e.detail.res[0].nbr;
            var eventStars = new CustomEvent("getStars", { detail: {service_id :  this.service_id , uri :  this.uri } });
            document.dispatchEvent(eventStars);

        }, false);


        document.addEventListener("getStars", function(e) {

            var service_id = e.detail.service_id;
            var uri = e.detail.uri;
            /* getFiveStar*/
            SSAPI.SUBMIT({
                uri: uri+'/getAvgFiveStars',
                data :{service_id:service_id},
                onsuccess:"FiveStarNbr"

            })
            /* end getFiveStar*/
            /* getFourStar*/
            SSAPI.SUBMIT({
                uri: uri+'/getAvgFourStars',
                data :{service_id:service_id},
                onsuccess:"FourStarNbr"

            })
            /* end getFourStar*/
            /* getThreeStar*/
            SSAPI.SUBMIT({
                uri: uri+'/getAvgThreeStars',
                data :{service_id:service_id},
                onsuccess:"ThreeStarNbr"

            })
            /* end getThreeStar*/
            /* gettwoStar*/
            SSAPI.SUBMIT({
                uri: uri+'/getAvgTwoStars',
                data :{service_id:service_id},
                onsuccess:"TwoStarNbr"

            })
            /* end gettwoStar*/
            /* getoneStar*/
            SSAPI.SUBMIT({
                uri: uri+'/getAvgOneStars',
                data :{service_id:service_id},
                onsuccess:"OneStarNbr"

            })
            /* end getoneStar*/

        })











        /* Nbre five Star */
        document.addEventListener("FiveStarNbr", function(e){
            var fiveStarsNbr = e.detail.res[0].nbr;
            var tauxFiveStar = (fiveStarsNbr /  iReviews.nbrRate ) * 100;
            $("[DATI-PAGE=detailServices]").find("[dati-five-star]").css("width", "0px");
            $("[DATI-PAGE=detailServices]").find("[dati-five-star]").css("width", tauxFiveStar+'%');
        }, false);

        /* Nbre four Star */
        document.addEventListener("FourStarNbr", function(e){
            var fourStarsNbr = e.detail.res[0].nbr;
            var tauxFourStar = (fourStarsNbr /  iReviews.nbrRate ) * 100;
            $("[DATI-PAGE=detailServices]").find("[dati-four-star]").css("width", "0px");
            $("[DATI-PAGE=detailServices]").find("[dati-four-star]").css("width", tauxFourStar+'%');
        }, false);

        /* Nbre three Star */
        document.addEventListener("ThreeStarNbr", function(e){

            var threeStarsNbr = e.detail.res[0].nbr;
            var tauxThreeStar = (threeStarsNbr /  iReviews.nbrRate ) * 100;
            $("[DATI-PAGE=detailServices]").find("[dati-three-star]").css("width", "0px");
            $("[DATI-PAGE=detailServices]").find("[dati-three-star]").css("width", tauxThreeStar+'%');
        }, false);

        /* Nbre two Star */
        document.addEventListener("TwoStarNbr", function(e){
            var twoStarsNbr = e.detail.res[0].nbr;
            var twoStarsNbr = (twoStarsNbr /  iReviews.nbrRate ) * 100;
            $("[DATI-PAGE=detailServices]").find("[dati-two-star]").css("width", "0px");
            $("[DATI-PAGE=detailServices]").find("[dati-two-star]").css("width", twoStarsNbr+'%');
        }, false);

        /* Nbre one Star */
        document.addEventListener("OneStarNbr", function(e){

            var oneStarsNbr = e.detail.res[0].nbr;
            var oneStarsNbr = (oneStarsNbr /  iReviews.nbrRate ) * 100;
            $("[DATI-PAGE=detailServices]").find("[dati-one-star]").css("width", "0px");
            $("[DATI-PAGE=detailServices]").find("[dati-one-star]").css("width", oneStarsNbr+'%');
        }, false);









        /* Nbre clic */
        document.addEventListener("clickNbreReceive", function(e){
            var nbreClicks =   e.detail.res[0];
            $("[DATI-PAGE=detailServices]").find("[dati-taux-clics]").html(nbreClicks);
        }, false);
        /* Nbre clic erroe */
        document.addEventListener("clickNbreReceive_error", function(e){
            var nbreClicks =   e.detail.res[0];
            $("[DATI-PAGE=detailServices]").find("[dati-taux-clics]").html(nbreClicks);
        }, false);
        /* Nbre views */
        document.addEventListener("clickNbreViews", function(e){
            var nbreViews =   e.detail.res[0];
            $("[DATI-PAGE=detailServices]").find("[dati-taux-views]").html(nbreViews);
        }, false);

    }
}

let iReviews = new imp_Reviews();