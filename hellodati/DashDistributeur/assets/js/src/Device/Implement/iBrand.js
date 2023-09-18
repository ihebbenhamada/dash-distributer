class i_Brand{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }
    ADD_BRAND(brand,model,color){
        var data = {
            brand:brand,
            logo:"aa",
            model:model,
            previous_colors:[],
            new_colors:color,
        };
        console.log(data,"mimiiimiiimim");
        SSAPI.SUBMIT({
            uri:"/Brand/addBrand",
            onsuccess:"brandAdded",
            onerror:"brandAdded_error",
            data:data,
        })
    }
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "AddMark" ){
                iDevice.GET_ALL_COLORS();
                iDevice.GET_ALL_BRANDS();
                iDevice.GET_ALL_MODELS();
                var event = new CustomEvent("showInputMark");
                document.dispatchEvent(event);

            }
        }, false);



    }


    EVENTS_SSAPI(){
       /* document.addEventListener("showAppliactionHotels", function(e){
            console.log(e.detail,"pssssssssssssssssssssssssssst");
            addHotel_ui.DATALIST(e.detail);

        }, false);   */
    }
}

let iBrand= new  i_Brand();