<div class="addForm_container" FORM-ID="form_Update_Drink" DATI-SEND="barContent_ui.VERIF_FORM_EDIT_DRINK"  DATI-PAGE="editDrinks" DATI-DISPLAY="grid">
    <div class="device_preview">
        <p class="title">Preview</p>

        <div class="device_img_preview">
            <div style="display:inline-block; position: relative; ">
                <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
                <div class="preview" style="position: absolute; top:100px; left:0px">
                <div class="details_preview_food">
                    <h2 class="title" DATI-TITLE-DRINK></h2>
                    <p class="description" DATI-PRICE-DRINK>></p>
                </div>

                    <img class="imgFood"   DATI-IMAGE-DRINK src="" alt="image">
                </div>
            </div>

        </div>

    </div>
    <!-- form add  -->
    <div class="add">
                            <!-- Ereur msg  -->
                                                      <div
                                                      class="container_msg_erreur"
                                                      DATI-COMPOSENT="msgErreurContainer"
                                                      DATI-ID="DrinkErreursUpdate"
                                                      DATI-UPDATE="showMsgBar"
                                                      DATI-LIST="barContent_ui.msgErreurDrinksUpdate"
                                                      >
                                                      </div>
                                                        <!-- End Ereur msg   -->
        <div class="add_service_container">
            <div class="header_form">
                <p>edit Drinks Form</p>
            </div>
            <div class="body_form">
                <div class="body_main_container">
                    <div class="main_container_left">
                        <label for="title">Title :</label>
                        <input type="text" DATI-ID="val_title" placeholder="title"  DATI-INPUT-TITLE-DRINK-UPDATE><br>
                        <label for="Price">Summary :</label>
                        <input type="text" placeholder="summary" DATI-ID="val_summary"   DATI-INPUT-SUMMARY-DRINK-UPDATE ><br>
                        <label for="description">Description :</label>
                        <textarea style="height: 118px;" DATI-ID="val_desc" name="" id=""  DATI-INPUT-DESCRIPTION-DRINK-UPDATE></textarea>

                    </div>
                    <div class="main_container_right">
                      <label for="image">Swap Categorie :</label>
                       <select name="" id="" DATI-SELECT-CATEGORIES-BAR-UP> </select>
                        <label for="image">Image :</label>
                        <div class="imageUploader" DATI-COMPOSENT="Uploader" DATI-ID="uploadIamgeDrink"
                            DATI-UPDATE="AddRestauForm" UPLOAD-INPUT-NAME="RESTAU_INPUT" DATI-ID-IMG="val_image">


                        </div>
                  <!--   check box service -->

                                   <div class="container">
                                    <p>Let Guest Make :</p>
                                   <dati-checkBox   class="container_order"  ID="CheckBoxDrinkOrderUp" UPDATE="showCheckBoxDrinkUp" DATA="Order" PAGE="editDrinks" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                                    <div class="inputs_price">
                                   <input DATI-ID="Order" DATI-INPUT-NAME="price_order"  type="text" placeholder="Price Order"  DATI-INPUT-PRICE-ORDER-DRINK-UPDATE >
                                    </div>
                                    </div>

                    <!--  end check box service -->

                    </div>
                </div>
            </div>
            <div class="footer_form">
                <div class="language_form">
                    <div class="popUp">
                        <div class="add_langage" dati-show-trx-drink-update id="addLang" style=" width: 170px;">
                            <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                           <p>Update languages</p>
                        </div>
                    </div>

                </div>
            </div>
            <!-- add language modal  -->
            <div class="modal_language" id="modalLanguage">
                <span class="close_button">x</span>
                <div class="language_container">
                    <div class="fr_container">
                        <p class="fr">Fr</p>
                    </div>
                    <div class="ar-container">
                        <p class="ar">Ar</p>
                    </div>
                </div>
                <div>
                    <div class="main_container">
                        <label for="title">Title :</label>
                        <div class="input_fr">
                            <p>Select a language to continue</p>
                        </div>
                        <label for="description">Description :</label>
                        <div class="description_fr">
                            <p>Select a language to continue</p>
                        </div>
                    </div>
                    <div class="button_container">
                        <div class="bt_valid">
                            <img src="/assets/img/ui/valideWhite.png" alt="validate">
                            <p>Confirm</p>
                        </div>
                    </div>
                </div>


            </div>
            <!-- end add language modal  -->

            <div class="openingAndTimes">


                <!-- no promotion  -->
                <div class="has_no_promotion">
                    <div>
                        <img src="/assets/img/ui/promo.png" alt="No promotion">
                        <p>Promotion</p>
                    </div>
                    <!-- switcher  -->
                    <div class="switcherContainer" DATI-COMPOSENT="switcherContainer" DATI-ID="switcherEditDrinks"
                        DATI-UPDATE="showPageEditDrinks" DATI-CHANGE="updateDrinks_ui.ENABLE_PROMO()">
                    </div>
                    <!-- end switcher  -->
                </div>
                <!-- end no promotion  -->
                <!-- has promotion  -->
                <div class="has_promo" dati-id="Promo_Drinks" style="display:none">
                    <div class="promotion_container" style="display:flex">

                        <div class="promotion_main">
                            <div class="time_container_promo">
                                <div class="time">

                                    <input type="time" placeholder="00:00" dati-id="val_begin_time_drink"  DATI_PROMO_BEGIN_TIME_DRINK_UPDATE>
                                </div>
                                <div class="date">

                                    <input type="date"  dati-id="val_begin_date_drink" DATI_PROMO_BEGIN_DATE_DRINK_UPDATE>
                                </div>
                                <div class="time">

                                    <input type="time" placeholder="00:00" dati-id="val_end_time_drink" DATI_PROMO_END_TIME_DRINK_UPDATE>
                                </div>
                                <div class="date">

                                    <input type="date" dati-id="val_end_date_drink" DATI_PROMO_END_DATE_DRINK_UPDATE>
                                </div>
                            </div>
                            <div class="value_container_promo">
                                <div class="value_prix">
                                    <p>Price</p>
                                    <input type="text" placeholder="--,--"  DATI-ID="val_price_after_discount_drink" DATI-PRICE_PROMO-DRINK-INPUT_UPDATE>
                                    <p>DT</p>
                                </div>
                                <div class="value_promo">
                                    <p>Promo</p>
                                    <input type="text" placeholder="--%"  DATI-ID="val_discount_drink" DATI-PERCENT-PROMO-DRINK-INPUT-UPDATE>
                                    <p>%</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <!-- end has promotion  -->
                <!-- bt add  -->
                <div class="action_add">
                    <div class="bt_add" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_Update_Drink">
                        <img src="/assets/img//ui/valideWhite.png" alt="validate">
                        <p>Update</p>
                    </div>
                </div>
                <!-- end  bt add  -->


                <!-- for the dark backgrouand  -->
                <div class="active" id="overlay"></div>
                <!-- end the dark backgrouand  -->

                <!-- success modal  -->
                <div class="success_modal">
                    <div class="body_modal">
                        <img src="/assets/img/ui/succes.png" alt="Success">
                        <div>successfully Added </div>
                    </div>
                </div>
                <!-- end success modal  -->

                <!-- success modal  -->
                <div class="echec_modal" style="display:none">
                    <div class="body_modal">
                        <img src="/assets/img/ui/echec.png" alt="Echec">
                        <div>Reinsert Information Please</div>
                    </div>
                </div>
                <!-- end success modal  -->


                <!-- suppression modal  -->
                <div class="Suppression_modal">
                    <div class="body_modal">
                        <p> Are you sure to delete this ?</p>
                        <div class="bt_actions">
                            <div class="validate">
                                <img src="/assets/img/ui/succes.png" alt="Validate">
                                <p>Validate</p>
                            </div>
                            <div class="cancel">
                                <img src="/assets/img/ui/echec.png" alt="Echec">
                                <p>Echec</p>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end suppression modal  -->
            </div>
        </div>
        <!-- end form add  -->


        <div id="scrollBottomRestau"></div>

    </div>
                             <!--    form language trx-->
                                                   <div
                                                   DATI-COMPOSENT="formTranslate"
                                                   DATI-ID="formTranslateDrinkUpdate"
                                                   DATI-UPDATE="showformTranslateDrinkUpdate"
                                                   DATI-LIST="formTrx_ui.langues"
                                                   DATI-TRANS-DATA="updateDrinks_ui.translate"
                                                   DATI-BTN="dati-show-trx-drink-update"
                                                   DATI-ID-UPLOADER="uploaderDrinkUpdate"
                                                   DATI-UPDATE-UPLOADER="updatePropImage"
                                                   >
                                                    </div>





                                                   <!--    end form language trx-->
</div>