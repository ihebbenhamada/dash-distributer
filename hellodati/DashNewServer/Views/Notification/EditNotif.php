<div class="notification_container" FORM-ID="form_edit_notif" DATI-SEND="notifHistory_ui.EDIT_NOTIF" DATI-PAGE="EditNotification" DATI-DISPLAY="grid">
                <div class="device">
                    <p class="title">Preview</p>
                    <div class="preview_edit" DATI-PREVIEW-NOTIF-UPDATE >

                           <img src="/assets/img/notification/promo_logo.svg" alt="device preview" class="svg" DATI-IMG-PROMO-UPDATE>
                           <img  class="prix_promotion" src="/assets/img/notification/prix_promotion.svg" alt="device preview" class="svg" DATI-CONTAINER-PROMO-UPDATE >
                          <p class="promo" DATI-TAUX-PROMO-UPDATE>20%</p>
                          <p class="title" DATI-TITLE-PRIX-UPDATE>PRIX</p>
                          <p class="prix" DATI-TAUX-PRIX-UPDATE>200</p>
                          <div class="container_prix" DATI-CONTAINER-PRIX-UPDATE ></div>

                          <div class="image_notif">
                               <img  src="/assets/img/ui/white.png" alt="device preview">
                          </div>
                          <div class="description_notif">
                              <p style="color: #b51e00;" DATI-TITLE-PROMO-UPDATE>Abdeli show time</p>
                              <p style="color: #5c5c5c;     font-size: 1em;" DATI-DESC-PROMO-UPDATE>abdeliiiiii showwww</p>

                          </div>
                    </div>
                    <img src="/assets/img/C15pro.png" alt="device preview" class="svg">

                </div>
                <div class="target">
                                                                         <!-- Ereur msg  -->
                                                                                                  <div
                                                                                                  class="container_msg_erreur"
                                                                                                  DATI-COMPOSENT="msgErreurContainer"
                                                                                                  DATI-ID="NotifErreursUp"
                                                                                                  DATI-UPDATE="showMsgNotif"
                                                                                                  DATI-LIST="notifHistory_ui.msgErreurNotifUp"
                                                                                                  >
                                                                                                  </div>
                                                                                                    <!-- End Ereur msg   -->
                    <div class="target_container">
                        <div class="title_target">
                            <p>EDIT TARGET</p>
                        </div>
                        <div class="body_target">
                            <div class="gender_container">
                                <div class="label_gender">
                                    <label>Gender</label>
                                </div>
                                <div class="gender_body" DATI-GENDER>
                                    <div class="all"  DATI-GENDER-ALL-UPDATE >
                                        <p>All</p>
                                    </div>
                                    <div class="men" DATI-GENDER-MEN-UPDATE >
                                        <p>Men</p>
                                    </div>
                                    <div class="women" DATI-GENDER-WOMEN-UPDATE >
                                        <p>Women</p>
                                    </div>
                                </div>
                            </div>
                            <div class="age_container">
                                <div class="label_age">Age :</div>
                                <div class="age_body">
                                    <select name="" id="" DATI-INPUT-NAME-UPDATE >
                                        <option value="">Age Range</option>
                                        <option value="18/25" > [18ans -> 25ans]</option>
                                        <option value="25/40"> [25ans -> 40ans]</option>
                                        <option value="40/60" > [40ans -> 60ans]</option>

                                    </select>
                                </div>
                            </div>
                            <div class="age_container">
                            <div class="label_age">Country :</div>
                            <div class="age_body">
                            <select name="" id="" DATI-INPUT-COUNTRY="AllCountry">
                            <option value="">Country</option>
                                                                </select>
                                                            </div>
                                                        </div>

                        </div>
                    </div>
                </div>
                <div class="notification">
                    <div class="notification_item">
                        <div class="title_container">
                            <p>Edit Notification</p>
                        </div>
                        <div class="body_container">
                            <p>Messages Details</p>
                            <div class="first_container">
                                <div class="text_container">
                                    <div class="title">
                                        <label for="title">Title* :</label>
                                        <input type="text" DATI-INPUT-TITLE-PROMO-UPDATE>
                                    </div>
                                    <div class="description">
                                        <label for="description">Description* :</label>
                                        <textarea name="" id="" cols="30" rows="10" DATI-INPUT-DESC-PROMO-UPDATE></textarea>
                                    </div>
                                </div>
                                <div class="image_container">
                                    <label for="image">Image* :</label>
                                          <div  class="imageUploader"
                                                 DATI-COMPOSENT="UploaderTrans"
                                                 DATI-ID="uploadIamgeNotifUp"
                                                 DATI-UPDATE="AddNotifFormUp"

                                                 >


                                                 </div>
                                </div>
                            </div>
                            <div class="second_container">
                                <div class="price">
                                    <label for="price">Price* :</label>
                                    <input type="text"  DATI-INPUT-PRICE-PROMO-UPDATE>
                                </div>
                                <div class="promo">
                                    <label for="price">Promo* :</label>
                                    <input type="text" DATI-INPUT-TAUX-PROMO-UPDATE>
                                </div>
                            </div>
                                                           <div class="second_container">
                                                                                        <div class="price">
                                                                                            <label for="price">Beginning Date* :</label>
                                                                                            <div class="container_time_date">
                                                                                            <input type="date" DATI-DATE-BEGIN-UPDATE >
                                                                                            <input type="time"  DATI-BEGIN-TIME-UPDATE>
                                                                                             </div>
                                                                                        </div>
                                                                                        <div class="promo">
                                                                                            <label for="price">End Date* :</label>
                                                                                             <div class="container_time_date">
                                                                                             <input type="date"  DATI-END-DATE-UPDATE>
                                                                                             <input type="time"  DATI-END-TIME-UPDATE>
                                                                                              </div>
                                                                                        </div>
                                                                                    </div>
                            <button class="send_button"  DATI-COMPOSENT="SUBMIT" DATI-FOR="form_edit_notif">
                                <img src="/assets/img/ui/valid.png" alt="Notification" class="svg">
                                <p>Edit</p>
                                       </button>
                        </div>
                    </div>
                </div>
                           <!-- success modal  -->

                                                              <div class="success_send_notif"  DATI-SEND-NOTIF-POP-UP-UPDATE>
                                                                  <div class="body_modal">
                                                                      <div>Edit notification with succes!</div>
                                                                  </div>
                                                              </div>


                                                              <!-- end success modal  -->
                                                                             <!-- not success modal  -->
                                                               <div class="echec_send_notif"  DATI-ECHEC-NOTIF-POP-UP-UPDATE>
                                                                <div class="body_modal">
                                                                <div>Retry please!</div>
                                                               </div>
                                                               </div>

                                                              <!-- end not success modal  -->
            </div>
