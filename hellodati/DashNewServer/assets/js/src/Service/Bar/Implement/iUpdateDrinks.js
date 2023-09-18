class imp_UpdateDrinks{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;

            if(page != "editDrinks"){
                $("[DATI-ID=Promo_Drinks]").slideUp();
                barContent_ui.msgErreurDrinksUpdate = [];
                dati_Erreurs.UPDATE("DrinkErreursUpdate");
            }
            else if(page == "editDrinks"){
                updateDrinks_ui.READ_VALUE_INPUT();
                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx =barContent_ui.selectedDrink.translate;
                updateDrinks_ui.translate = {};
                if(barContent_ui.selectedDrink.hasOwnProperty("translate")){
                    if(barContent_ui.selectedDrink.translate != null && barContent_ui.selectedDrink.translate != ""){
                        for(var i=0; i<trx.length; i++){
                            try {
                                var image = trx[i]["img1"];
                            }catch (e) {

                            }
                            try {
                                var description = trx[i]["description"];
                            }catch (e) {

                            }
                            try {
                                var title = trx[i]["name"];
                            }catch (e) {

                            }
                            try {
                                var summary = trx[i]["summary"];
                            }catch (e) {

                            }
                            try {
                                var code = trx[i]["trx_code"];
                                updateDrinks_ui.translate[code] = {};
                                updateDrinks_ui.translate[code]["title"] = title;
                                updateDrinks_ui.translate[code]["image"] = image;
                                updateDrinks_ui.translate[code]["description"] = description;
                                updateDrinks_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                var eventTrans = new CustomEvent("showformTranslateDrinkUpdate");
                document.dispatchEvent(eventTrans);
                // event to show my switcher
                var event = new CustomEvent("showPageEditDrinks");
                document.dispatchEvent(event);
                var eventTypeService= new CustomEvent("showCheckBoxDrinkUp");
                document.dispatchEvent(eventTypeService);
            }


        }, false);
    }


}

let iUpdateDrinks = new imp_UpdateDrinks();