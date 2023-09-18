class imp_AddDrink{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;

            if(page != "addDrinks"){
                $("[DATI-ID=Promo_Drink]").slideUp();
            }
            else if(page == "addDrinks"){

                // event to show my switcher
                var event = new CustomEvent("showPageAddDrinks");

                document.dispatchEvent(event);
            }


        }, false);
    }


}

let iAddDrink = new imp_AddDrink();