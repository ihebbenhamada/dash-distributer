<div class="addForm_container"  DATI-PAGE="addEventServices" FORM-ID="form_add_Event" DATI-SEND="eventCard_ui.VERIF_FORM_ADD_EVENT" DATI-DISPLAY="grid">
                <div class="device_preview">
                    <p class="title">Preview</p>

              <div class="device_img_preview" >
                        <div style="display:inline-block; position: relative; ">
                            <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
                            <div class="preview_Event" style="position: absolute;left:0px">
                                   <h2 class="title" DATI-TITLE-EVENT></h2>
                                   <p class="description"  DATI-DESCRIPTION-EVENT>  </p>
                                   <i class="fas fa-caret-right"  style="opacity: 0;" ></i>
                                    <div class="time_shift">   </div>


                                <img class="imgEvent" style="opacity: 0;" DATI-IMAGE-EVENT src="" alt="image" >
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
                                                                  DATI-ID="EventErreurs"
                                                                  DATI-UPDATE="showMsgEvent"
                                                                  DATI-LIST="eventCard_ui.msgErreurEvent"
                                                                  >
                                                                  </div>
                                                                    <!-- End Ereur msg   -->
                    <div class="add_service_container">
                        <div class="header_form">
                            <p>Add Event Form</p>
                        </div>
                        <div class="body_form">
                            <div class="body_main_container">
                                <div class="main_container_left">
                                    <label for="title">Title :</label>
                                    <input type="text" placeholder="title" DATI-INPUT-NAME="title" DATI-INPUT-TITLE-EVENT>
                                     <label for="price">Summary :</label>
                                     <input type="text" placeholder="summary" DATI-INPUT-NAME="summary" DATI-INPUT-SUMMARY-EVENT>

                                    <label for="description">Description :</label>
                                    <textarea style="height: 120px;" name="" id="" DATI-INPUT-NAME="description" placeholder="title"  DATI-INPUT-DESCRIPTION-EVENT></textarea>
                                </div>
                                <div class="main_container_right">
                                 <label for="image">Image :</label>
                <div  class="imageUploader"
                DATI-COMPOSENT="UploaderTrans"
                DATI-ID="uploadIamgeEvent"
                DATI-UPDATE="AddRestauForm"
                UPLOAD-INPUT-NAME="RESTAU_INPUT"
                >

                </div>

   <!--   check box service -->

                    <div class="container">
                     <p>Let Guest Make :</p>

                       <dati-checkBox   class="container_order"  ID="CheckBoxEventOrder" UPDATE="showCheckBoxEvent" DATA="Order" PAGE="addEventServices" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)" ></dati-checkBox>
                       <dati-checkBox  class="container_order" ID="CheckBoxEventReservation" UPDATE="showCheckBoxEvent" DATA="Reservation" PAGE="addEventServices" CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)"></dati-checkBox>
                       <dati-checkBox   class="container_order" ID="CheckBoxEventRequest" UPDATE="showCheckBoxEvent" DATA="Request"  CHANGE="dati_checkBoxBt.MAKE_IT_CHECKED(this)"></dati-checkBox>
                     <div class="inputs_price">
                     <input DATI-ID="Order" DATI-INPUT-NAME="price"  type="text" placeholder="Price Order"  DATI-INPUT-PRICE-ORDER-EVENT >
                     <input DATI-ID="Reservation"  DATI-INPUT-NAME="price"  type="text" placeholder="Price Reservation"  DATI-INPUT-PRICE-RESERVATION-EVENT >

                     </div>
                     </div>

     <!--  end check box service -->



                                </div>
                            </div>
                        </div>
                        <div class="footer_form">
                            <div class="language_form">
                                <div class="popUp">
                                    <div class="add_langage" DATI-SHOW-TRX-EVENT  id="addLang">
                                        <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                                        <p>Add a language</p>
                                    </div>
                                        <div class="add_langage" dati-show-contact-event>
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
                                                     DATI-ID="contactListServiceEvent"
                                                     DATI-UPDATE="showcontactListServiceEvent"
                                                     DATI-LIST="dati_contactForm.contact"
                                                     DATI-ID-ALERTE="contactAlerteEvent"
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
                                                    <div  class="switcherContainer"
                                                              DATI-COMPOSENT="switcherContainer"
                                                              DATI-ID="switcherAddEvent"
                                                              DATI-UPDATE="showPageAddEvent"
                                                              DATI-CHANGE="eventCard_ui.ENABLE_TIME()">
                                                   </div>
                                                  <!-- end switcher  -->
                                              </div>
                                              <!-- end no promotion  -->
                                              <!--  has opening Time  -->
                                              <div class="has_opening_time" DATI-ID="opening_Time_Event" style="display:none">
                                                  <div class="opening_time" style="display:flex">
                                                                      <div class="title">
                                                                                   <h2>HOURS</h2>
                                                                               </div>
                                                                               <div class="shifts">
                                                                                                           <div class="open_close">
                                                                                                               <div class="title_s">
                                                                                                                   <p>Opening</p>
                                                                                                                   <input type="time" name="" placeholder="00:00" DATI-OPENING-TIME>
                                                                                                               </div>
                                                                                                           </div>
                                                                                                           <div class="open_close">
                                                                                                               <div class="title_sc">
                                                                                                                   <p>Closing</p>
                                                                                                                   <input type="time" name="" placeholder="00:00" DATI-CLOSING-TIME>
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
                                                                                                           <div class="button_shifts" onclick="Shifts_ui.ADD_SHIFT('opening_Time_Event','eventCard_ui.msgErreurEvent','EventErreurs')">
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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add" onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_MONDAY','SECOND_SHIFT_MONDAY','THIRD_SHIFT_MONDAY','mon')">


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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add" onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_TUESDAY','SECOND_SHIFT_TUESDAY','THIRD_SHIFT_TUESDAY','tue')">

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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add" onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_WEDNESDAY','SECOND_SHIFT_WEDNESDAY','THIRD_SHIFT_WEDNESDAY','wed')">

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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add" onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_THURSDAY','SECOND_SHIFT_THURSDAY','THIRD_SHIFT_THURSDAY','thu')">

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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add" onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_FRYDAY','SECOND_SHIFT_FRYDAY','THIRD_SHIFT_FRYDAY','fri')">

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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add"  onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_SATURDAY','SECOND_SHIFT_SATURDAY','THIRD_SHIFT_SATURDAY','sat')">

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
                                                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add" onclick="Shifts_ui.DELETE_SHIFT('opening_Time_Event','FIRST_SHIFT_SUNDAY','SECOND_SHIFT_SUNDAY','THIRD_SHIFT_SUNDAY','sun')">

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
                                                   <div class="bt_add" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Event">
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
               DATI-ID="formTranslateEvent"
               DATI-UPDATE="showformTranslateEvent"
               DATI-LIST="formTrx_ui.langues"
               DATI-BTN="dati-show-trx-event"
               DATI-ID-UPLOADER="uploaderEvent"
               DATI-UPDATE-UPLOADER="updateProp"
               >
                </div>



               <!--    end form language trx-->
                             <!--    form contact-->
                                                                              <div
                                                                              DATI-COMPOSENT="contactFormService"
                                                                              DATI-ID="contactFormEvent"
                                                                             DATI-UPDATE="showcontactFormEvent"
                                                                             DATI-LIST="serviceCard_ui.contact"
                                                                             DATI-BTN="dati-show-contact-event"
                                                                             DATI-PAGE="addEventServices"
                                                                             DATI-LIST-CONTACT-SHOW="contactListServiceEvent"

                                                                             >
                                                                             </div>
                                                                              <!--    end form contact-->
                                                                                <!--   alert-->
                                                                               <div
                                                                                DATI-COMPOSENT="alerteContainer"
                                                                                DATI-ID="contactAlerteEvent"
                                                                                DATI-UPDATE="showContactAlerteEvent"
                                                                                DATI-CANCEL = "dati_ReseauxSociaux.CANCEL_ALERTE()"
                                                                                DATI-VALIDATE = "dati_ReseauxSociaux.VALIDATE_ALERTE()"
                                                                                >
                                                                                 </div>
                                                                                 <!-- end  alert-->

            </div>
