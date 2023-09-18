class imp_UpdateDish{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page != "editDishPage"){
                $("[DATI-ID=Promo_Dish_Update]").slideUp();
                restauContent_ui.msgErreurFoodUpdate = [];
                dati_Erreurs.UPDATE("FoodErreursUpdate");
                updateDish_ui.RESET_PROMOTION();
            }
            else if(page == "editDishPage"){
                updateDish_ui.READ_VALUE_INPUT();
                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = restauContent_ui.selectedFood.translate;
                updateDish_ui.translate = {};
                if(restauContent_ui.selectedFood.hasOwnProperty("translate")){
                    if(restauContent_ui.selectedFood.translate != null && restauContent_ui.selectedFood.translate != ""){
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
                                updateDish_ui.translate[code] = {};
                                updateDish_ui.translate[code]["title"] = title;
                                updateDish_ui.translate[code]["image"] = image;
                                updateDish_ui.translate[code]["description"] = description;
                                updateDish_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                var eventTrans = new CustomEvent("showformTranslateFoodUpdate");
                document.dispatchEvent(eventTrans);
// event to show my switcher
                var event = new CustomEvent("showPageEditDish");
                document.dispatchEvent(event);
                var eventTypeService= new CustomEvent("showCheckBoxFoodUp");
                document.dispatchEvent(eventTypeService);
            }


        }, false);
    }


}

let iUpdateDish = new imp_UpdateDish();