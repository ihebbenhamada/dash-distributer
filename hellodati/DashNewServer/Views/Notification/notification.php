<div class="notification_container" FORM-ID="form_send_notif" DATI-SEND="Ui_notification.SEND_NOTIF" DATI-PAGE="Notification" DATI-DISPLAY="grid">
                <div class="device">
                    <p class="title">Preview</p>
                    <div class="preview" DATI-PREVIEW-NOTIF >

                           <img src="/assets/img/notification/promo_logo.svg" alt="device preview" class="svg" style="display:none;" DATI-IMG-PROMO>
                           <img  class="prix_promotion" src="/assets/img/notification/prix_promotion.svg" alt="device preview" class="svg" DATI-CONTAINER-PROMO style="display:none;">
                          <p class="promo" DATI-TAUX-PROMO></p>
                          <p class="title" DATI-TITLE-PRIX></p>
                          <p class="prix" DATI-TAUX-PRIX></p>
                          <div class="container_prix" DATI-CONTAINER-PRIX style="display:none;"></div>


                          <div class="image_notif">
                               <img  src="/assets/img/ui/white.png" alt="device preview">
                          </div>
                          <div class="description_notif">
                              <p style="color: #b51e00;" DATI-TITLE-PROMO></p>
                              <p style="color: #5c5c5c;   font-size: 1em;" DATI-DESC-PROMO></p>

                          </div>
                    </div>
                    <img src="/assets/img/C15pro.png" alt="device preview" class="svg">

                </div>
                <div class="target">
                                                                         <!-- Ereur msg  -->
                                                                                                  <div
                                                                                                  class="container_msg_erreur"
                                                                                                  DATI-COMPOSENT="msgErreurContainer"
                                                                                                  DATI-ID="NotifErreurs"
                                                                                                  DATI-UPDATE="showMsgNotif"
                                                                                                  DATI-LIST="Ui_notification.msgErreurNotif"
                                                                                                  >
                                                                                                  </div>
                                                                                                    <!-- End Ereur msg   -->
                    <div class="target_container">
                        <div class="title_target">
                            <p>TARGET</p>
                        </div>
                        <div class="body_target">
                            <div class="gender_container">
                                <div class="label_gender">
                                    <label>Gender</label>
                                </div>
                                <div class="gender_body" DATI-GENDER>
                                    <div class="all"  DATI-GENDER-ALL >
                                        <p>All</p>
                                    </div>
                                    <div class="men" DATI-GENDER-MEN >
                                        <p>Men</p>
                                    </div>
                                    <div class="women" DATI-GENDER-WOMEN >
                                        <p>Women</p>
                                    </div>
                                </div>
                            </div>
                            <div class="age_container">
                                <div class="label_age">Age :</div>
                                <div class="age_body">
                                    <select name="" id="" DATI-INPUT-NAME="trancheAge" >
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
                            <p>Notification</p>
                        </div>
                        <div class="body_container">
                            <p>Messages Details</p>
                            <div class="first_container">
                                <div class="text_container">
                                    <div class="title">
                                        <label for="title">Title* :</label>
                                        <input type="text" DATI-INPUT-TITLE-PROMO>
                                    </div>
                                    <div class="description">
                                        <label for="description">Description* :</label>
                                        <textarea name="" id="" cols="30" rows="10" DATI-INPUT-DESC-PROMO></textarea>
                                    </div>
                                </div>
                                <div class="image_container">
                                    <label for="image">Image* :</label>
                                          <div  class="imageUploader"
                                                 DATI-COMPOSENT="UploaderTrans"
                                                 DATI-ID="uploadIamgeNotif"
                                                 DATI-UPDATE="AddNotifForm"

                                                 >


                                                 </div>
                                </div>
                            </div>

                            <div class="second_container">
                                <div class="price">
                                    <label for="price">Price* :</label>
                                    <input type="text"  DATI-INPUT-PRICE-PROMO>
                                </div>
                                <div class="promo">
                                    <label for="price">Promo* :</label>
                                    <input type="text" DATI-INPUT-TAUX-PROMO>
                                </div>
                            </div>
                                 <div class="second_container">
                                                            <div class="price">
                                                                <label for="price">Beginning Date* :</label>
                                                                <div class="container_time_date">
                                                                <input type="date" DATI-BEGIN-DATE >
                                                                <input type="time"  DATI-BEGIN-TIME>
                                                                 </div>
                                                            </div>
                                                            <div class="promo">
                                                                <label for="price">End Date* :</label>
                                                                 <div class="container_time_date">
                                                                 <input type="date"  DATI-END-DATE>
                                                                 <input type="time"  DATI-END-TIME>
                                                                  </div>
                                                            </div>
                                                        </div>

                            <button class="send_button"  DATI-COMPOSENT="SUBMIT" DATI-FOR="form_send_notif">

                                Send
                                       </button>
                        </div>
                    </div>
                </div>
                           <!-- success modal  -->

                                                              <div class="success_send_notif"  DATI-SEND-NOTIF-POP-UP>
                                                                  <div class="body_modal">
                                                                      <div>Send notification with succes!</div>
                                                                  </div>
                                                              </div>


                                                              <!-- end success modal  -->
                                                                             <!-- not success modal  -->
                                                               <div class="echec_send_notif"  DATI-ECHEC-NOTIF-POP-UP>
                                                                <div class="body_modal">
                                                                <div>Retry please!</div>
                                                               </div>
                                                               </div>

                                                              <!-- end not success modal  -->
            </div>
