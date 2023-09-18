<div class="notification_container" DATI-PAGE="Notification">
                <div class="device">
                    <p class="title">Preview</p>
                    <div class="preview">
                        <h2 class="title">Cola</h2>
                        <p class="description">Drinks</p>
                        <div class="price">
                            <span class="price">
                                15 <sup>DT</sup>
                            </span>
                            <span class="promo">30%</span>
                        </div>

                        <img src="/assets/img/restaurant/restau_exemple.png" alt="image">
                    </div>
                    <img src="/assets/img/C15pro.png" alt="device preview" class="svg">

                </div>
                <div class="target">
                    <div class="target_container">
                        <div class="title_target">
                            <p>TARGET</p>
                        </div>
                        <div class="body_target">
                            <div class="gender_container">
                                <div class="label_gender">
                                    <label>Gender</label>
                                </div>
                                <div class="gender_body">
                                    <div class="all">
                                        <p>All</p>
                                    </div>
                                    <div class="men">
                                        <p>Men</p>
                                    </div>
                                    <div class="women">
                                        <p>Women</p>
                                    </div>
                                </div>
                            </div>
                            <div class="age_container">
                                <div class="label_age">Age :</div>
                                <div class="age_body">
                                    <select name="" id="">
                                        <option value="">age Range</option>
                                        <option value="">tranche one</option>
                                        <option value="">tranche two</option>

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
                                        <input type="text">
                                    </div>
                                    <div class="description">
                                        <label for="description">Description* :</label>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div class="image_container">
                                    <label for="image">Image* :</label>
                                          <div  class="imageUploader"
                                                 DATI-COMPOSENT="Uploader"
                                                 DATI-ID="uploadIamgeRestau"
                                                 DATI-UPDATE="AddRestauForm"
                                                 UPLOAD-INPUT-NAME="RESTAU_INPUT"
                                                 >


                                                 </div>
                                </div>
                            </div>
                            <div class="second_container">
                                <div class="price">
                                    <label for="price">Price* :</label>
                                    <input type="text">
                                </div>
                                <div class="promo">
                                    <label for="price">Promo* :</label>
                                    <input type="text">
                                </div>
                            </div>
                            <button class="send_button">
                                <img src="/assets/img/ui/valid.png" alt="Notification" class="svg">
                                <p>Send</p>
                        </div>
                    </div>
                </div>
            </div>
