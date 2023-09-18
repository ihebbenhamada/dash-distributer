<div class="addForm_container" DATI-PAGE="editItemConcierge"  FORM-ID="form_edit_Item_Concierge"
     DATI-SEND="congContent_ui.VERIF_FORM_EDIT_ITEM" DATI-DISPLAY="grid">
    <div class="device_preview">
        <p class="title">Preview</p>

        <div class="device_img_preview">
            <div style="display:inline-block; position: relative; ">
                <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
         <div class="preview_Conc_item" DATI-PREVIEW-CONC-ITEM-UP style="position: absolute; top:100px; left:0px">
                    <h2 class="title" DATI-TITLE-CONC-ITEM-UP></h2>

                    <img class="imgConc" DATI-IMAGE-CONC-ITEM-UP src="" alt="image">
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
                DATI-ID="ConcItemUpErreurs"
                DATI-UPDATE="showMsgConcItemUp"
                DATI-LIST="congContent_ui.msgErreurConcItemUp"
        >
        </div>
        <!-- End Ereur msg   -->

        <div class="add_service_container">
            <div class="header_form">
                <p>Edit Form</p>
            </div>
            <div class="body_form">
                <div class="body_main_container">
                    <div class="main_container_left">
                        <label for="title">Title :</label>
                        <input type="text" DATI-INPUT-NAME-TITLE-CONCIERGE placeholder="title">
                        <label for="summary">Summary :</label>
                        <input type="text" placeholder="summary"  DATI-INPUT-NAME="val_summary"   DATI-INPUT-SUMMARY-ITEM-CONC >
                        <label for="description">Description :</label>
                        <textarea name="" id="" DATI-INPUT-DESCRIPTION-CONCIERGE ></textarea>
                    </div>
                    <div class="main_container_right">
                          <label for="image">Swap Categorie :</label>
                          <select name="" id="" DATI-SELECT-CATEGORIES-CONC> </select>
                        <label for="image">Image :</label>
                        <div class="imageUploader"
                             DATI-COMPOSENT="UploaderTrans"
                             DATI-ID="uploadItemConciergePhotoUp"
                             DATI-UPDATE="AddRestauFormUp"
                             UPLOAD-INPUT-NAME="RESTAU_INPUT"

                        >


                        </div>
                                <!--   check box service -->

                                                              <div class="container">
                                                               <p>Let Guest Make :</p>
                             <dati-checkBox   class="container_order"  ID="CheckBoxConciergeItemOrderUp" UPDATE="showCheckBoxConciergeItemUp" DATA="Order" PAGE="editItemConcierge" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                             <dati-checkBox   class="container_order"  ID="CheckBoxConciergeItemReservationUp" UPDATE="showCheckBoxConciergeItemUp" DATA="Reservation" PAGE="editItemConcierge" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                             <dati-checkBox   class="container_order"  ID="CheckBoxConciergeItemResquestUp" UPDATE="showCheckBoxConciergeItemUp" DATA="Request"  CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                                                               <div class="inputs_price">
                                                                 <input DATI-ID="Order" DATI-INPUT-NAME="price"  type="text" placeholder="Price Order"  DATI-INPUT-PRICE-ORDER-CONCIERGE-ITEM-UPDATE >
                                                                 <input DATI-ID="Reservation"  DATI-INPUT-NAME="price"  type="text" placeholder="Price Reservation"  DATI-INPUT-PRICE-RESERVATION-CONCIERGE-ITEM-UPDATE >

                                                               </div>
                                                               </div>

                                               <!--  end check box service -->

                    </div>
                </div>
            </div>
            <div class="footer_form">
                <div class="language_form">
                    <div class="popUp">
                        <div class="add_langage" dati-show-trx-concierge-up id="addLang">
                            <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                            <p>Edit a language</p>
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

                <!-- bt add  -->
                <div class="action_add">
                    <div class="bt_add" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_edit_Item_Concierge">
                        <img src="/assets/img//ui/valideWhite.png" alt="validate">
                        <p>Edit</p>
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
                        <div>successfully Added</div>
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
                                                                   DATI-ID="formTranslateConcItemUp"
                                                                   DATI-UPDATE="showformTranslateConciergeItemUp"
                                                                   DATI-LIST="formTrx_ui.langues"
                                                                   DATI-TRANS-DATA="UpdateConc_ui.translateItem"
                                                                   DATI-BTN="dati-show-trx-concierge-up"
                                                                   DATI-ID-UPLOADER="uploaderConc"
                                                                   DATI-UPDATE-UPLOADER="updateProp"
                                                                   >
                                                                    </div>



                                                                   <!--    end form language trx-->
</div>
