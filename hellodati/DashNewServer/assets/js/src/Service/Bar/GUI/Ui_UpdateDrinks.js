let Ui_updateDrinks = class {
    constructor() {
        this.EVENT_UI();
        this.translate = {};
    }

    ENABLE_PROMO(){
        var val = $("[DATI-ID=switcherEditDrinks]").find("[type=checkbox]").is(":checked");
        if (($("[dati-input-price-order-drink-update-update]").val()!="" && $("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").attr("button-checked") == "true") || !val) {
            if (val) {
                $("[DATI-ID=Promo_Drinks]").slideDown();
                $("main").animate({scrollTop: $("[DATI-PAGE=editDrinks]").height()}, 'slow');
            } else {
                $("[DATI-ID=Promo_Drinks]").slideUp();

            }
        }else{
            dati_switcher.TOGGLE_VAL($("[DATI-ID=switcherEditDrinks]"));
        }
    }
    READ_VALUE_INPUT(){
        $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_title]").val(barContent_ui.selectedDrink.title);
        $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_desc]").val(barContent_ui.selectedDrink.descrip);
        $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_summary]").val(barContent_ui.selectedDrink.summary);
        $("[DATI-PAGE=editDrinks]").find("[dati-input-price-order-drink-update-update]").val(barContent_ui.selectedDrink.price);
        $("[DATI-PAGE=editDrinks]").find("[dati-role=clickableTrans]").css('background-image','url('+barContent_ui.selectedDrink.image+')');
        $("[dati-page=editDrinks]").find("[DATI-SELECT-CATEGORIES-BAR-UP]").val(barContent_ui.selectedDrink.cat_rest_id);
        $("[dati-title-drink]").html(barContent_ui.selectedDrink.title);
        $("[dati-price-drink]").html(barContent_ui.selectedDrink.price);
        $("[dati-image-drink]").attr("src",barContent_ui.selectedDrink.image);
        setTimeout(function(){

            if (barContent_ui.selectedDrink.type === 0) {

                $("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").attr("button-checked", "false");
                $("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").find("[is_checked=OrderCheckBoxDrinkOrderUp]").css("display", "none");


            }
            if (barContent_ui.selectedDrink.type === 1) {

                $("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").attr("button-checked", "true");
                $("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").find("[is_checked=OrderCheckBoxDrinkOrderUp]").css("display", "inline-block");

            }

        }, 500);

        if (barContent_ui.selectedDrink.discount != null) {


            var elem = $("[DATI-ID=switcherEditDrinks]");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=Promo_Drinks]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editDrinks]").height()}, 'slow');

            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_discount_drink]").val(barContent_ui.selectedDrink.discount);
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_begin_time_drink]").val(barContent_ui.selectedDrink.begin_time);
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_end_time_drink]").val(barContent_ui.selectedDrink.end_time);
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_begin_date_drink]").val(barContent_ui.selectedDrink.begin_date);
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_end_date_drink]").val(barContent_ui.selectedDrink.end_date);
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_price_after_discount_drink]").val(
                $("[DATI-PAGE=editDrinks]").find("[dati-input-price-order-drink-update]").val()-($("[DATI-PAGE=editDrinks]").find("[dati-input-price-order-drink-update]").val()*$("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_discount_drink]").val()/100)
            );

        }else{
            var elem = $("[DATI-ID=switcherEditDrinks]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            this.ENABLE_PROMO();
            $("[DATI-ID=Promo_Drinks]").css("display", "none");
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_discount_drink]").val("");
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_begin_time_drink]").val("");
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_end_time_drink]").val("");
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_begin_date_drink]").val("");
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_end_date_drink]").val("");
            $("[DATI-PAGE=editDrinks]").find("[DATI-ID=val_price_after_discount_drink]").val("");
        }
    }
    EVENT_UI(){


        $("[DATI-INPUT-TITLE-DRINK-UPDATE]").on('keyup', function() {
            $("[dati-title-drink]").html($("[DATI-INPUT-TITLE-DRINK-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-PRICE-DINK-UPDATE]").on('keyup', function() {
            $("[dati-price-drink]").html( $("[DATI-INPUT-PRICE-DINK-UPDATE]").val()+"  DT");

        });



        /* ******************************** End PREVIEW REST ****************************************** */
        //calculate price promo
        $(document).on('keyup','[dati-price_promo-drink-input_update]',function() {
            $("[dati-percent-promo-drink-input-update]").val(100-($("[dati-price_promo-drink-input_update]").val() * 100 / $("[dati-input-price-order-drink-update]").val()));
        });

        $(document).on('keyup','[dati-percent-promo-drink-input-update]',function() {
            $("[dati-price_promo-drink-input_update]").val($("[dati-input-price-order-drink-update]").val()-($("[dati-input-price-order-drink-update]").val() * $("[dati-percent-promo-drink-input-update]").val() / 100));
        });

        $(document).on('keyup','[dati-input-price-order-drink-update]',function() {
            if($("[dati-percent-promo-drink-input-update]").val() != ""){
                $("[dati-price_promo-drink-input_update]").val($("[dati-input-price-order-drink-update]").val()-($("[dati-input-price-order-drink-update]").val() * $("[dati-percent-promo-drink-input-update]").val() / 100));
            }else if($("[dati-price_promo-drink-input_update]").val() != ""){
                $("[dati-percent-promo-drink-input-update]").val($("[dati-price_promo-drink-input_update]").val() * 100 / $("[dati-input-price-order-drink-update]").val());
            }
        });

    }
};

let updateDrinks_ui = new Ui_updateDrinks();

