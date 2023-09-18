class imp_AddDish{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;

            if(page != "addDish"){
                $("[DATI-ID=Promo_Dish]").slideUp();
            }
            else if(page == "addDish"){

               // event to show my switcher
                var event = new CustomEvent("showPageAddDish");

                document.dispatchEvent(event);
            }


        }, false);
    }


}

let iAddDish = new imp_AddDish();