let Ui_updateDish = class {
    constructor() {
        this.EVENT_UI();
        this.translate = {};
    }

    RESET_PROMOTION(){
        $("[ dati-page=editDishPage]").find("[dati_promo_begin_time_update]").val("");
        $("[ dati-page=editDishPage]").find("[dati_promo_begin_date_update]").val("");
        $("[ dati-page=editDishPage]").find("[dati_promo_end_time_update]").val("");
        $("[ dati-page=editDishPage]").find("[dati_promo_end_date_update]").val("");
        $("[ dati-page=editDishPage]").find("[dati-price_promo-food-input_update]").val("");
        $("[ dati-page=editDishPage]").find("[dati-percent_promo-food-input_update]").val("");

    }
    ENABLE_PROMO(){
        var val = $("[DATI-ID=switcherEditDish]").find("[type=checkbox]").is(":checked");
        if (($("[dati-input-price-order-food-update]").val()!="" &&  ($("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").attr("button-checked") == "true") )|| !val) {
            if (val) {
                $("[DATI-ID=Promo_Dish_Update]").slideDown();
                $("main").animate({scrollTop: $("[DATI-PAGE=editDishPage]").height()}, 'slow');
            } else {
                $("[DATI-ID=Promo_Dish_Update]").slideUp();

            }
        }else{
            dati_switcher.TOGGLE_VAL($("[DATI-ID=switcherEditDish]"));
        }
    }
    READ_VALUE_INPUT(){
        $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_title]").val(restauContent_ui.selectedFood.title);
        $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_desc]").val(restauContent_ui.selectedFood.descrip);
        $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_summary]").val(restauContent_ui.selectedFood.summary);
        $("[DATI-PAGE=editDishPage]").find("[dati-input-name=price_order]").val(restauContent_ui.selectedFood.price);
        $("[dati-page=editDishPage]").find("[DATI-SELECT-CATEGORIES-UP]").val(restauContent_ui.selectedFood.cat_rest_id);

        $("[DATI-PAGE=editDishPage]").find("[dati-role=clickableTrans]").css('background-image','url('+restauContent_ui.selectedFood.image+')');
        $("[dati-title-food]").html(restauContent_ui.selectedFood.title);
        $("[dati-price-food]").html(restauContent_ui.selectedFood.price);
        $("[dati-image-food]").attr("src",restauContent_ui.selectedFood.image);
        $("[dati-id-img=val_image]").css("background-image","url('"+restauContent_ui.selectedFood.image+"')");
        $("[dati-id-img=val_image]").css("background-position","center");
        $("[dati-id-img=val_image]").css("background-size","100% 100%");
        $("[dati-id-img=val_image]").css("background-repeat","no-repeat");
        setTimeout(function(){

            if (restauContent_ui.selectedFood.type === 0) {
           ;
                $("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").attr("button-checked", "false");
                $("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").find("[is_checked=OrderCheckBoxFoodOrderUp]").css("display", "none");


            }
            if (restauContent_ui.selectedFood.type === 1) {
                $("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").attr("button-checked", "true");
                $("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").find("[is_checked=OrderCheckBoxFoodOrderUp]").css("display", "inline-block");

            }

        }, 500);

        if (restauContent_ui.selectedFood.discount != null) {


            var elem = $("[DATI-ID=switcherEditDish]");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=Promo_Dish_Update]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editDishPage]").height()}, 'slow');

            $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_discount]").val(restauContent_ui.selectedFood.discount);
            $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_begin_time]").val(restauContent_ui.selectedFood.begin_time);
            $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_end_time]").val(restauContent_ui.selectedFood.end_time);
            $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_begin_date]").val(restauContent_ui.selectedFood.begin_date);
            $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_end_date]").val(restauContent_ui.selectedFood.end_date);
            $("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_price_after_discount]").val(
                $("[DATI-PAGE=editDishPage]").find("[dati-input-price-order-food-update]").val()-($("[DATI-PAGE=editDishPage]").find("[dati-input-price-order-food-update]").val()*$("[DATI-PAGE=editDishPage]").find("[DATI-ID=val_discount]").val()/100)
            );

        }else{
            var elem = $("[DATI-ID=switcherEditDish]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            this.ENABLE_PROMO();
            $("[DATI-ID=Promo_Dish_Update]").css("display", "none");
        }
    }
    EVENT_UI(){


        $("[DATI-INPUT-TITLE-FOOD-UPDATE]").on('keyup', function() {
            $("[dati-title-food]").html($("[DATI-INPUT-TITLE-FOOD-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-PRICE-FOOD-UPDATE]").on('keyup', function() {
            $("[dati-price-food]").html( $("[DATI-INPUT-PRICE-FOOD-UPDATE]").val());

        });


        //calculate price promo
        $(document).on('keyup','[dati-input-price-food-update]',function() {
            $("[dati-percent_promo-food-input-update]").val(100-($("[dati-input-price-food-update]").val() * 100 / $("[dati-input-price-order-food-update]").val()));
        });

        $(document).on('keyup','[dati-percent_promo-food-input-update]',function() {
            $("[dati-input-price-food-update]").val($("[dati-input-price-order-food-update]").val()-($("[dati-input-price-order-food-update]").val() * $("[dati-percent_promo-food-input-update]").val() / 100));
        });

        $(document).on('keyup','[dati-input-price-order-food-update]',function() {
            if($("[dati-percent_promo-food-input-update]").val() != ""){
                $("[dati-input-price-food-update]").val($("[dati-input-price-order-food-update]").val()-($("[dati-input-price-order-food-update]").val() * $("[dati-percent_promo-food-input-update]").val() / 100));
            }else if($("[dati-input-price-food-update]").val() != ""){
                $("[dati-percent_promo-food-input-update]").val($("[dati-input-price-food-update]").val() * 100 / $("[dati-input-price-order-food-update]").val());
            }
        });

        /* ******************************** End PREVIEW REST ****************************************** */

    }
};

let updateDish_ui = new Ui_updateDish();

