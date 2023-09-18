<div class="addForm_container"  DATI-PAGE="editLeisurePage">
                <div class="device_preview">
                    <p class="title">Preview</p>

                    <div class="device_img_preview" >
                        <div style="display:inline-block; position: relative; ">
                            <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
                            <div class="preview" style="position: absolute; top:100px; left:0px">
                                   <h2 class="title">Cola</h2>
                                   <p class="description">Drinks</p>


                                <img src="/assets/img/restaurant/restau_exemple.png" alt="image" >
                            </div>
                        </div>

                    </div>

                </div>
                <!-- form add  -->
                <div class="add">
                    <div class="add_service_container">
                        <div class="header_form">
                            <p>Edit Leisure Form</p>
                        </div>
                        <div class="body_form">
                            <div class="body_main_container">
                                <div class="main_container_left">
                                    <label for="title">Title :</label>
                                    <input DATI-ID="val_title" type="text" placeholder="title" value="">
                                    <label for="description">Description :</label>
                                    <textarea DATI-ID="val_desc" name="" id="" value=""></textarea>
                                </div>
                                <div class="main_container_right">
                                    <label for="image">Image :</label>
                <div  class="imageUploader"
                DATI-COMPOSENT="Uploader"
                DATI-ID="uploadIamgeRestau"
                DATI-UPDATE="AddRestauForm"
                UPLOAD-INPUT-NAME="RESTAU_INPUT"
                DATI-ID-IMG="val_image"
                style="background-size: 100%;background-repeat: no-repeat;"
                >


                </div>


                                </div>
                            </div>
                        </div>
                        <div class="footer_form">
                            <div class="language_form">
                                <div class="popUp">
                                    <div class="add_langage" DATI-LINK="formAddLanguage" id="addLang">
                                        <img src="/assets/img/ui/addShift.png" alt="Add Shift">
                                        <p>Add a language</p>
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
                                              <div class="has_no_openingTime">
                                              <div>
                                                  <img src="/assets/img/ui/clock.png" alt="No openingTime">
                                                  <p>Opening time</p>
                                              </div>
                                                  <!-- switcher  -->
                                                    <div  class="switcherContainer"
                                                              DATI-COMPOSENT="switcherContainer"
                                                              DATI-ID="switcherUpdateLeisure"
                                                              DATI-UPDATE="showPageUpdateLeisure"
                                                              DATI-CHANGE="updateLeisure_ui.ENABLE_TIME()">
                                                   </div>
                                                  <!-- end switcher  -->
                                              </div>
                                              <!-- end no promotion  -->
                                              <!--  has opening Time  -->
                                              <div class="has_opening_time" DATI-ID="opening_Time_Update_Leisure" style="display:none">
                                                  <div class="opening_time" style="display:flex">
                                                                      <div class="title">
                                                                                   <h2>HOURS</h2>
                                                                               </div>
                                                                               <div class="shifts">
                                                                                   <div class="open_close">
                                                                                       <div class="title_s">
                                                                                           <p>Opening</p>
                                                                                           <input type="text" name="" id="" placeholder="00:00">
                                                                                       </div>
                                                                                       <div class="img_s">
                                                                                               <img src="/assets/img/ui/clock.png" alt="clock">
                                                                                       </div>
                                                                                   </div>
                                                                                   <div class="open_close">
                                                                                       <div class="title_sc">
                                                                                           <p>Closing</p>
                                                                                           <input type="text" name="" id="" placeholder="00:00">
                                                                                       </div>
                                                                                       <div class="img_s">
                                                                                           <img src="/assets/img/ui/clock.png" alt="No promotion">
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                               <div class="days">
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>MO</p>
                                                                                   </div>
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>TU</p>
                                                                                   </div>
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>WE</p>
                                                                                   </div>
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>TH</p>
                                                                                   </div>
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>FR</p>
                                                                                   </div>
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>SA</p>
                                                                                   </div>
                                                                                   <div class="day">
                                                                                       <input type="checkbox">
                                                                                       <p>SU</p>
                                                                                   </div>
                                                                               </div>
                                                                               <div class="bt-addS">
                                                                                   <div class="button_shifts">
                                                                                          <img src="/assets/img/ui/addShift.png" alt="No promotion">
                                                                                       <p>Add Shift</p>
                                                                                   </div>
                                                                               </div>
                                                                               <div class="times">
                                                                                   <table>
                                                                                       <tr>
                                                                                           <td>Monday</td>
                                                                                           <td>1.Opening 8:00 Closing 12:00</td>
                                                                                           <td>2.Opening 13:00 Closing 18:00</td>
                                                                                           <td>3.Opening 19:00 Closing 23:00</td>
                                                                                           <td>
                                                                                               <div class="actions">
                                                                                            <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                            <img src="/assets/img/guest/edit.svg" alt="Add">

                                                                                               </div>

                                                                                           </td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Tuesday</td>
                                                                                           <td>1.Opening 8:00 Closing 12:00</td>
                                                                                           <td>2.Opening 13:00 Closing 18:00</td>
                                                                                           <td>3.Opening 19:00 Closing 23:00</td>
                                                                                           <td>
                                                                                               <div class="actions">
                                                                                               <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                               <img src="/assets/img/guest/edit.svg" alt="Add">
                                                                                               </div>
                                                                               </div>
                                                                               </td>
                                                                               </tr>
                                                                               <tr>
                                                                                   <td>Wednesday</td>
                                                                                   <td>1.Opening 8:00 Closing 12:00</td>
                                                                                   <td>2.Opening 13:00 Closing 18:00</td>
                                                                                   <td>3.Opening 19:00 Closing 23:00</td>
                                                                                   <td>
                                                                                       <div class="actions">
                                                                                           <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                          <img src="/assets/img/guest/edit.svg" alt="Add">
                                                                                       </div>
                                                                                   </td>
                                                                               </tr>
                                                                               <tr>
                                                                                   <td>ThursDay</td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td>
                                                                                       <div class="actions">
                                                                                  <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                   <img src="/assets/img/guest/edit.svg" alt="Add">
                                                                                       </div>
                                                                                   </td>
                                                                               </tr>
                                                                               <tr>
                                                                                   <td>Friday</td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td>
                                                                                       <div class="actions">
                                                                                      <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                       <img src="/assets/img/guest/edit.svg" alt="Add">
                                                                                       </div>
                                                                                   </td>
                                                                               </tr>
                                                                               <tr>
                                                                                   <td>Saturday</td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td>
                                                                                       <div class="actions">
                                                                                        <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                        <img src="/assets/img/guest/edit.svg" alt="Add">
                                                                                       </div>
                                                                                   </td>
                                                                               </tr>
                                                                               <tr>
                                                                                   <td>Sunday</td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td></td>
                                                                                   <td>
                                                                                       <div class="actions">
                                                                                        <img src="/assets/img/delete-icon.svg" alt="Add">
                                                                                         <img src="/assets/img/guest/edit.svg" alt="Add">
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
                                                   <div class="bt_add">
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
            </div>
