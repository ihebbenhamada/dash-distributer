<div class="addForm_container" DATI-PAGE="addBarServices" FORM-ID="form_add_Bar"
     DATI-SEND="barCard_ui.VERIF_FORM_ADD_BAR" DATI-DISPLAY="grid">

    <div class="device_preview">
        <p class="title">Preview</p>

        <div class="device_img_preview">
            <div style="display:inline-block; position: relative; ">
                <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
                <div class="preview_Bar" style="position: absolute; top:100px; left:0px">
                    <h2 class="title" DATI-TITLE-BAR></h2>
                    <p class="description" DATI-DESCRIPTION-BAR></p>
                    <i class="fas fa-caret-right"></i>
                    <div class="time_shift"><img src="/assets/img/ui/clock.png" alt="image" style="width: 12px;">
                        <p>Ouvert</p></div>

                    <div class="rating">
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>

                    </div>

                    <img class="imgBar" DATI-IMAGE-BAR src="" alt="image">
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
                DATI-ID="BarErreurs"
                DATI-UPDATE="showMsgBar"
                DATI-LIST="barCard_ui.msgErreurBar"
        >
        </div>
        <!-- End Ereur msg   -->

        <div class="add_service_container">
            <div class="header_form">
                <p>Add Bar Form</p>
            </div>
            <div class="body_form">
                <div class="body_main_container">
                    <div class="main_container_left">
                        <label for="title">Title :</label>
                        <input type="text" placeholder="title" DATI-INPUT-NAME="title" DATI-INPUT-TITLE-BAR>
                        <label for="title">Summary :</label>
                        <input type="text" placeholder="summary" DATI-INPUT-NAME="summary" DATI-INPUT-SUMMARY-BAR>
                        <label for="description">Description :</label>
                        <textarea name="" id="" DATI-INPUT-NAME="description" DATI-INPUT-DESCRIPTION-BAR></textarea>
                    </div>
                    <div class="main_container_right">
                        <label for="image">Image :</label>
                        <div class="imageUploader"
                             DATI-COMPOSENT="UploaderTrans"
                             DATI-ID="uploadIamgeBar"
                             DATI-UPDATE="AddBarForm"
                             DATI-VAR-URL="barCard_ui.imgTransUploaded"

                        >


                        </div>
                        <!--   check box service -->
                        <div class="container">
                            <p>Let Guest Make :</p>
                            <dati-checkBox class="container_order" ID="CheckBoxBarOrder" UPDATE="showCheckBoxBar"
                                           DATA="Order" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)"></dati-checkBox>
                            <dati-checkBox class="container_order" ID="CheckBoxBarReservation" UPDATE="showCheckBoxBar"
                                           DATA="Reservation" PAGE="addBarServices"
                                           CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)"></dati-checkBox>
                            <div class="inputs_price">
                                <input DATI-ID="Reservation" DATI-INPUT-NAME="price_reservation" type="text"
                                       placeholder="Price Reservation" DATI-INPUT-PRICE-RESERVATION-BAR>
                            </div>
                        </div>

                        <!--  end check box service -->
                    </div>
                </div>
            </div>
            <div class="footer_form">
                <div class="language_form">
                    <div class="popUp">
                        <div class="add_langage" DATI-SHOW-TRX-BAR id="addLang">
                            <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                            <p>Add a language</p>
                        </div>
                        <div class="add_langage" dati-show-contact-bar>
                            <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                            <p>Add Contact</p>
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
                     DATI-ID="contactListServiceBar"
                     DATI-UPDATE="showcontactListServiceBar"
                     DATI-LIST="dati_contactForm.contact"
                     DATI-ID-ALERTE="contactAlerteBar"
                >
                </div>
                <!-- end contact  -->
                <!-- no promotion  -->
                <div class="has_no_openingTime">
                    <div>
                        <img src="/assets/img/ui/clock.png" alt="No openingTime">
                        <p>Opening time</p>
                    </div>
                    <!-- switcher  -->
                    <div class="switcherContainer"
                         DATI-COMPOSENT="switcherContainer"
                         DATI-ID="switcherAddBar"
                         DATI-UPDATE="showPageAddBar"
                         DATI-CHANGE="barCard_ui.ENABLE_TIME()">
                    </div>
                    <!-- end switcher  -->
                </div>
                <!-- end no promotion  -->
                <!--  has opening Time  -->
                <div class="has_opening_time" DATI-ID="opening_Time_Bar" style="display:none">
                    <div class="opening_time" style="display:flex">
                        <div class="title">
                            <h2>HOURS</h2>
                        </div>
                        <div class="shifts">
                            <div class="open_close">
                                <div class="title_s">
                                    <p>Opening</p>
                                    <input type="time" name="" DATI-OPENING-TIME>
                                </div>
                            </div>
                            <div class="open_close">
                                <div class="title_sc">
                                    <p>Closing</p>
                                    <input type="time" name="" DATI-CLOSING-TIME>
                                </div>
                            </div>
                        </div>
                        <div class="days">
                            <div class="day">
                                <input type="checkbox" value="mon" DATI-OPENING-DAY="mon">
                                <p>MO</p>
                            </div>
                            <div class="day">
                                <input type="checkbox" value="tue" DATI-OPENING-DAY="tue">
                                <p>TU</p>
                            </div>
                            <div class="day">
                                <input type="checkbox" value="wed" DATI-OPENING-DAY="wed">
                                <p>WE</p>
                            </div>
                            <div class="day">
                                <input type="checkbox" value="thu" DATI-OPENING-DAY="thu">
                                <p>TH</p>
                            </div>
                            <div class="day">
                                <input type="checkbox" value="fri" DATI-OPENING-DAY="fri">
                                <p>FR</p>
                            </div>
                            <div class="day">
                                <input type="checkbox" value="sat" DATI-OPENING-DAY="sat">
                                <p>SA</p>
                            </div>
                            <div class="day">
                                <input type="checkbox" value="sun" DATI-OPENING-DAY="sun">
                                <p>SU</p>
                            </div>
                        </div>
                        <div class="bt-addS">
                            <div class="button_shifts"
                                 onclick="Shifts_ui.ADD_SHIFT('opening_Time_Bar','barCard_ui.msgErreurBar','BarErreurs');">
                                <img src="/assets/img/ui/addShift.png" alt="No promotion">
                                <p>Add Shift</p>
                            </div>
                        </div>
                        <div class="times">
                            <table>
                                <tr>
                                    <td>MONDAY</td>
                                    <td FIRST_SHIFT_MONDAY></td>
                                    <td SECOND_SHIFT_MONDAY></td>
                                    <td THIRD_SHIFT_MONDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_MONDAY','SECOND_SHIFT_MONDAY','THIRD_SHIFT_MONDAY','mon')">


                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>TUESDAY</td>
                                    <td FIRST_SHIFT_TUESDAY></td>
                                    <td SECOND_SHIFT_TUESDAY></td>
                                    <td THIRD_SHIFT_TUESDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_TUESDAY','SECOND_SHIFT_TUESDAY','THIRD_SHIFT_TUESDAY','tue')">

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>WEDNESDAY</td>
                                    <td FIRST_SHIFT_WEDNESDAY></td>
                                    <td SECOND_SHIFT_WEDNESDAY></td>
                                    <td THIRD_SHIFT_WEDNESDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_WEDNESDAY','SECOND_SHIFT_WEDNESDAY','THIRD_SHIFT_WEDNESDAY','wed')">

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>THURSDAY</td>
                                    <td FIRST_SHIFT_THURSDAY></td>
                                    <td SECOND_SHIFT_THURSDAY></td>
                                    <td THIRD_SHIFT_THURSDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_THURSDAY','SECOND_SHIFT_THURSDAY','THIRD_SHIFT_THURSDAY','thu')">

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FRYDAY</td>
                                    <td FIRST_SHIFT_FRYDAY></td>
                                    <td SECOND_SHIFT_FRYDAY></td>
                                    <td THIRD_SHIFT_FRYDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_FRYDAY','SECOND_SHIFT_FRYDAY','THIRD_SHIFT_FRYDAY','fri')">

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SATURDAY</td>
                                    <td FIRST_SHIFT_SATURDAY></td>
                                    <td SECOND_SHIFT_SATURDAY></td>
                                    <td THIRD_SHIFT_SATURDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_SATURDAY','SECOND_SHIFT_SATURDAY','THIRD_SHIFT_SATURDAY','sat')">

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SUNDAY</td>
                                    <td FIRST_SHIFT_SUNDAY></td>
                                    <td SECOND_SHIFT_SUNDAY></td>
                                    <td THIRD_SHIFT_SUNDAY></td>
                                    <td>
                                        <div class="actions">
                                            <img src="/assets/img/delete-icon.svg" alt="Add"
                                                 onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Bar','FIRST_SHIFT_SUNDAY','SECOND_SHIFT_SUNDAY','THIRD_SHIFT_SUNDAY','sun')">

                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- end has opening Time  -->

                <!-- bt add  -->
                <div class="action_add">
                    <div class="bt_add" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Bar">
                        <img src="/assets/img//ui/valideWhite.png" alt="validate">
                        <p>Add</p>
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
            DATI-ID="formTranslateBar"
            DATI-UPDATE="showformTranslateBar"
            DATI-LIST="formTrx_ui.langues"
            DATI-BTN="dati-show-trx-bar"
            DATI-ID-UPLOADER="uploaderBar"
            DATI-UPDATE-UPLOADER="updateProp"
    >
    </div>


    <!--    end form language trx-->
    <!--    form contact-->
    <div
            DATI-COMPOSENT="contactFormService"
            DATI-ID="contactFormBar"
            DATI-UPDATE="showcontactFormBar"
            DATI-LIST="serviceCard_ui.contact"
            DATI-BTN="dati-show-contact-bar"
            DATI-PAGE="addBarServices"
            DATI-LIST-CONTACT-SHOW="contactListServiceBar"

    >
    </div>
    <!--    end form contact-->
    <!--   alert-->
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="contactAlerteBar"
            DATI-UPDATE="showContactAlerteBar"
            DATI-CANCEL="dati_ReseauxSociaux.CANCEL_ALERTE()"
            DATI-VALIDATE="dati_ReseauxSociaux.VALIDATE_ALERTE()"
    >
    </div>
    <!-- end  alert-->
</div>
