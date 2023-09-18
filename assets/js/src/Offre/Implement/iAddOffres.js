class i_AddOffres{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;


        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("showAppliactionHotels", function(e){
            console.log(e.detail,"pssssssssssssssssssssssssssst");
            addHotel_ui.DATALIST(e.detail);

        }, false);    }
}

let IADDOFFRES= new  i_AddOffres();