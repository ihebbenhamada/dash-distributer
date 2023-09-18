<div class="addForm_container" DATI-PAGE="editConcierge"  FORM-ID="form_edit_Concierge"
     DATI-SEND="Concierge_ui.VERIF_FORM_EDIT_CONC" DATI-DISPLAY="grid">
    <div class="device_preview">
        <p class="title">Preview</p>

        <div class="device_img_preview">
            <div style="display:inline-block; position: relative; ">
                <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
      <div class="preview_Conc" DATI-PREVIEW-CONC style="position: absolute; top:100px; left:0px">
                    <h2 class="title" DATI-TITLE-CONC></h2>
                    <div class="container_details">
                    <p class="description" DATI-DESCRIPTION-CONC-UP>See the details</p>
                     <img  class="flesh" DATI-IMAGE-FLESH-UP src="/assets/img/ui/vector.svg" alt="image">
                     </div>
                    <img class="imgConc" DATI-IMAGE-CONC-UP src="" alt="image">
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
                DATI-ID="ConcUpErreurs"
                DATI-UPDATE="showMsgConcUp"
                DATI-LIST="Concierge_ui.msgErreurConciergeUp"
        >
        </div>
        <!-- End Ereur msg   -->

        <div class="add_service_container">
            <div class="header_form">
                <p>Edit Concierge Form</p>
            </div>
            <div class="body_form">
                <div class="body_main_container">
                    <div class="main_container_left">
                        <label for="title">Title :</label>
                        <input type="text" DATI-INPUT-NAME-TITLE-CONCIERGE placeholder="title" DATI-INPUT-TITLE-REST>
                        <label for="summary">Summary :</label>
                         <input type="text" DATI-INPUT-SUMMARY-TITLE-CONCIERGE placeholder="summary" DATI-INPUT-TITLE-REST>
                        <label for="description">Description :</label>
                        <textarea style="height: 120px;" name="" id="" DATI-INPUT-DESCRIPTION-CONCIERGE DATI-INPUT-DESCRIPTION-REST></textarea>
                    </div>
                    <div class="main_container_right">
                        <label for="image">Image :</label>
                        <div class="imageUploader"
                             DATI-COMPOSENT="UploaderTrans"
                             DATI-ID="uploadConciergePhotoUp"
                             DATI-UPDATE="AddRestauFormUp"
                             UPLOAD-INPUT-NAME="RESTAU_INPUT"

                        >


                        </div>

                                      <!--   check box service -->

                                                               <div class="container">
                                                                <p>Let Guest Make :</p>
                              <dati-checkBox   class="container_order"  ID="CheckBoxConciergeOrderUp" UPDATE="showCheckBoxConciergeUp" DATA="Order" PAGE="editConcierge" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                              <dati-checkBox   class="container_order"  ID="CheckBoxConciergeReservationUp" UPDATE="showCheckBoxConciergeUp" DATA="Reservation" PAGE="editConcierge" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                              <dati-checkBox   class="container_order"  ID="CheckBoxConciergeResquestUp" UPDATE="showCheckBoxConciergeUp" DATA="Request" PAGE="editConcierge" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                                                                <div class="inputs_price">
                                                                  <input DATI-ID="Order" DATI-INPUT-NAME="price"  type="text" placeholder="Price Order"  DATI-INPUT-PRICE-ORDER-CONCIERGE-UPDATE >
                                                                  <input DATI-ID="Reservation"  DATI-INPUT-NAME="price"  type="text" placeholder="Price Reservation"  DATI-INPUT-PRICE-RESERVATION-CONCIERGE-UPDATE >

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
                           <div class="add_langage" dati-show-contact-concierge-up>
                           <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                           <p>Update Contact</p>
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
         <!-- contact  -->
                                                     <div class="has_contact"
                                                     DATI-COMPOSENT="contactListService"
                                                     DATI-ID="contactListServiceConciergeUp"
                                                     DATI-UPDATE="showcontactListServiceConciergeUp"
                                                     DATI-LIST="dati_contactForm.contact"
                                                     DATI-ID-ALERTE="contactAlerteConciergeUp"
                                                     DATI-DATA-CONTACT="UpdateConc_ui.contact"
                                                     DATI-DATA-CONTACT-DB="UpdateConc_ui.contactDb"
                                                     >
                                                     </div>
                                                     <!-- end contact  -->
                <!-- bt add  -->
                <div class="action_add">
                    <div class="bt_add" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_edit_Concierge">
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
                                                                   DATI-ID="formTranslateConcUp"
                                                                   DATI-UPDATE="showformTranslateConciergeUp"
                                                                   DATI-LIST="formTrx_ui.langues"
                                                                   DATI-TRANS-DATA="UpdateConc_ui.translate"
                                                                   DATI-BTN="dati-show-trx-concierge-up"
                                                                   DATI-ID-UPLOADER="uploaderConc"
                                                                   DATI-UPDATE-UPLOADER="updateProp"
                                                                   >
                                                                    </div>



                                                                   <!--    end form language trx-->
                                                <!--    form contact-->
                                                                                                                                                      <div
                                                                                                                                                      DATI-COMPOSENT="contactFormService"
                                                                                                                                                      DATI-ID="contactFormConciergeUp"
                                                                                                                                                     DATI-UPDATE="showcontactFormConciergeUp"
                                                                                                                                                     DATI-LIST="serviceCard_ui.contact"
                                                                                                                                                     DATI-BTN="dati-show-contact-concierge-up"
                                                                                                                                                     DATI-PAGE="editConcierge"
                                                                                                                                                     DATI-LIST-CONTACT-SHOW="contactListServiceConciergeUp"

                                                                                                                                                     >
                                                                                                                                                     </div>
                                                                                                                                                      <!--    end form contact-->
                                                                                                                                                        <!--   alert-->
                                                                                                                                                       <div
                                                                                                                                                        DATI-COMPOSENT="alerteContainer"
                                                                                                                                                        DATI-ID="contactAlerteConciergeUp"
                                                                                                                                                        DATI-UPDATE="showContactAlerteConciergeUp"
                                                                                                                                                        DATI-CANCEL = "dati_ReseauxSociaux.CANCEL_ALERTE()"
                                                                                                                                                        DATI-VALIDATE = "dati_ReseauxSociaux.VALIDATE_ALERTE()"
                                                                                                                                                        >
                                                                                                                                                         </div>
                                                                                                                                                         <!-- end  alert-->
</div>
