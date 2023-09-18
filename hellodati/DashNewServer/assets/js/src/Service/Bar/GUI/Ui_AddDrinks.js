let Ui_AddDrinks = class {
    constructor() {

    }




    ENABLE_PROMO(){
        var val = $("[DATI-ID=switcherAddDrinks]").find("[type=checkbox]").is(":checked");
        if (($("[dati-input-price-order-drink]").val()!="" && $("[dati-page=addDrinks]").find("[bt_checked=CheckBoxDrinkOrder]").attr("button-checked") == "true")|| !val) {
            if (val) {
                $("[DATI-ID=Promo_Drink]").slideDown();
                $("main").animate({scrollTop: $("[DATI-PAGE=addDrinks]").height()}, 'slow');
            } else {
                $("[DATI-ID=Promo_Drink]").slideUp();

            }
        }else{
            dati_switcher.TOGGLE_VAL($("[DATI-ID=switcherAddDrinks]"));
        }
    }
};

let AddDrinks_ui= new Ui_AddDrinks();