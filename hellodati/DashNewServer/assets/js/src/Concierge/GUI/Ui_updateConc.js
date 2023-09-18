let Ui_updateConc = class {
    constructor() {

        this.translate = {};
        this.translateItem = {};
        this.contact = {};
        this.contactDb = {};
        this.EVENT_UI();
    }


     READ_VALUE_INPUT(){

        $("[DATI-PAGE=editConcierge]").find("[dati-input-name-title-concierge]").val(Concierge_ui.selectedConc.title);
        $("[DATI-PAGE=editConcierge]").find("[dati-input-description-concierge]").val( Concierge_ui.selectedConc.descrip);
        $("[DATI-PAGE=editConcierge]").find("[dati-input-summary-concierge]").val( Concierge_ui.selectedConc.summary);
        $("[DATI-PAGE=editConcierge]").find("[dati-role=clickableTrans]").css("background-image", "url("+Concierge_ui.selectedConc.image+")");
         $("[DATI-PAGE=editConcierge]").find("[ DATI-TITLE-CONC]").html(Concierge_ui.selectedConc.title);
         $("[DATI-PAGE=editConcierge]").find("[DATI-DESCRIPTION-CONC-UP]").css("display","inline-block");
         $("[DATI-PAGE=editConcierge]").find("[DATI-IMAGE-FLESH-UP]").css("display","inline-block");
         $("[DATI-PAGE=editConcierge]").find("[DATI-IMAGE-CONC-UP]").css("opacity" , "1");
         $("[DATI-PAGE=editConcierge]").find("[DATI-IMAGE-CONC-UP]").attr("src",Concierge_ui.selectedConc.image);
         setTimeout(function(){
             if (Concierge_ui.selectedConc.type === 0) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "none");
             }
             if (Concierge_ui.selectedConc.type === 1) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "none");
             }
             if (Concierge_ui.selectedConc.type === 2) {

                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "none");
             }
             if (Concierge_ui.selectedConc.type === 3) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "none");
             }
             if (Concierge_ui.selectedConc.type === 4) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "inline-block");
             }
             if (Concierge_ui.selectedConc.type === 5) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "inline-block");
             }
             if (Concierge_ui.selectedConc.type === 6) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "false");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "none");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "inline-block");
             }
             if (Concierge_ui.selectedConc.type === 7) {
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").find("[is_checked=OrderCheckBoxConciergeOrderUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "inline-block");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "true");
                 $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeResquestUp]").css("display", "inline-block");
             }
         }, 500);
    }
   READ_VALUE_INPUT_ITEM(){

        $("[DATI-PAGE=editItemConcierge]").find("[dati-input-name-title-concierge]").val(congContent_ui.selectedItem.title);
        $("[DATI-PAGE=editItemConcierge]").find("[dati-input-description-concierge]").val( congContent_ui.selectedItem.descrip);
        $("[DATI-PAGE=editItemConcierge]").find("[dati-input-summary-item-conc]").val( congContent_ui.selectedItem.summary);
        $("[DATI-PAGE=editItemConcierge]").find("[dati-input-name=price]").val( congContent_ui.selectedItem.price);
        $("[DATI-PAGE=editItemConcierge]").find("[dati-role=clickableTrans]").css("background-image", "url("+congContent_ui.selectedItem.image+")");
        $("[DATI-PAGE=editItemConcierge]").find("[DATI-TITLE-CONC-ITEM-UP]").html(congContent_ui.selectedItem.title);
        $("[DATI-PAGE=editItemConcierge]").find("[DATI-IMAGE-CONC-ITEM-UP]").attr("src",congContent_ui.selectedItem.image);
       $("[dati-page=editItemConcierge]").find("[DATI-SELECT-CATEGORIES-CONC]").val(congContent_ui.selectedItem.cat_conc_id);
        $("[DATI-PAGE=editItemConcierge]").find("[DATI-IMAGE-CONC-ITEM-UP]").css("opacity","1");
        $("[DATI-PAGE=editItemConcierge]").find("[DATI-PREVIEW-CONC-ITEM-UP]").css("opacity","1");
       setTimeout(function(){
           if (congContent_ui.selectedItem.type === 0) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeReservationUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "none");
           }
           if (congContent_ui.selectedItem.type === 1) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "none");
           }
           if (congContent_ui.selectedItem.type === 2) {

               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "none");
           }
           if (congContent_ui.selectedItem.type === 3) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "none");
           }
           if (congContent_ui.selectedItem.type === 4) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "inline-block");
           }
           if (congContent_ui.selectedItem.type === 5) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "inline-block");
           }
           if (congContent_ui.selectedItem.type === 6) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "false");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "none");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "inline-block");
           }
           if (congContent_ui.selectedItem.type === 7) {
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").find("[is_checked=OrderCheckBoxConciergeItemOrderUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").find("[is_checked=ReservationCheckBoxConciergeItemReservationUp]").css("display", "inline-block");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked", "true");
               $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").find("[is_checked=RequestCheckBoxConciergeItemResquestUp]").css("display", "inline-block");
           }
       }, 500);
    }

    EVENT_UI(){
        /* ******************************** PREVIEW UP CONCIERGE ****************************************** */
       $("[DATI-PAGE=editConcierge]").find("[dati-input-name-title-concierge]").on('keyup', function() {
            $("[DATI-TITLE-CONC]").html(  $("[DATI-PAGE=editConcierge]").find("[dati-input-name-title-concierge]").val());



        });

        /* ******************************** End PREVIEW UP CONCIERGE ****************************************** */
        /* ******************************** PREVIEW UP CONCIERGE ITEM****************************************** */
        $("[DATI-PAGE=editItemConcierge]").find("[dati-input-name-title-concierge]").on('keyup', function() {
            $("[dati-title-conc-item-up]").html(  $("[DATI-PAGE=editItemConcierge]").find("[dati-input-name-title-concierge]").val());



        });

        /* ******************************** End PREVIEW UP CONCIERGE ITEM****************************************** */
    }

};

let UpdateConc_ui = new Ui_updateConc();

