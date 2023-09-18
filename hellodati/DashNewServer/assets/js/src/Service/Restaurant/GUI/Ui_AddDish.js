let Ui_AddDish = class {
    constructor() {

    }




    ENABLE_PROMO(){
        var val = $("[DATI-ID=switcherAddDish]").find("[type=checkbox]").is(":checked");
        if (($("[dati-input-price-order-food]").val()!="" && $("[dati-page=addDish]").find("[bt_checked=CheckBoxFoodOrder]").attr("button-checked") == "true" )|| !val){
            if(val){
                $("[DATI-ID=Promo_Dish]").slideDown();
                $("main").animate({ scrollTop: $("[DATI-PAGE=addDish]").height() }, 'slow');
            }else{
                $("[DATI-ID=Promo_Dish]").slideUp();

            }
        }else {
            dati_switcher.TOGGLE_VAL($("[DATI-ID=switcherAddDish]"));
        }

    }
};

let addDish_ui = new Ui_AddDish();