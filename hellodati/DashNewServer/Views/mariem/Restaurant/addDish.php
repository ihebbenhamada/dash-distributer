<div class="addForm_container" DATI-PAGE="addDish" FORM-ID="form_add_Content_Restau" DATI-SEND="restauContent_ui.VERIF_FORM_ADD_CONTENT_RESTAU">
    <div class="device_preview">
        <p class="title">Preview</p>

        <div class="device_img_preview">
            <div style="display:inline-block; position: relative; ">
                <img src="/assets/img/C15pro.png" alt="device preview" class="svg">
                <div class="preview" style="position: absolute; top:100px; left:0px">
                <div class="details_preview_food">
                    <h2 class="title"  DATI-TITLE-FOOD></h2>
                    <p class="description"  DATI-PRICE-FOOD></p>
                </div>

                    <img class="imgFood"   DATI-IMAGE-FOOD  src="" alt="image">
                </div>
            </div>

        </div>

    </div>
    <!-- form add  -->
    <div class="add">
        <div class="add_service_container">
            <div class="header_form">
                <p>Add Dish Form</p>
            </div>
            <div class="body_form">
                <div class="body_main_container">
                    <div class="main_container_left">
                        <label for="title">Title :</label>
                        <input type="text" placeholder="title" DATI-INPUT-NAME="title" DATI-INPUT-TITLE-FOOD>
                        <label for="description">Description :</label>
                        <textarea name="" id="" DATI-INPUT-NAME="description" DATI-INPUT-DESCRIPTION-FOOD></textarea>
                    </div>
                    <div class="main_container_right">
                        <label for="image">Image :</label>
                        <div class="imageUploader"
                        DATI-COMPOSENT="Uploader"
                        DATI-ID="uploadIamgeRestau"
                        DATI-UPDATE="AddRestauForm"
                        UPLOAD-INPUT-NAME="RESTAU_INPUT"
                        UPLOAD-INPUT-NAME="RESTAU_CONTENT_INPUT">


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
                <div class="has_no_promotion">
                    <div>
                        <img src="/assets/img/ui/promo.png" alt="No promotion">
                        <p>Promotion</p>
                    </div>
                    <!-- switcher  -->
                    <div class="switcherContainer" DATI-COMPOSENT="switcherContainer" DATI-ID="switcherAddDish"
                        DATI-UPDATE="showPageAddDish" DATI-CHANGE="addDish_ui.ENABLE_PROMO()">
                    </div>
                    <!-- end switcher  -->
                </div>
                <!-- end no promotion  -->
                <!-- has promotion  -->
                <div class="has_promo" dati-id="Promo_Dish" style="display:none">
                    <div class="promotion_container" style="display:flex">

                        <div class="promotion_main">
                            <div class="time_container_promo">
                                <div class="time">
                                    <img src="/assets/img/ui/clock.png" alt="start">
                                    <input type="text" placeholder="00:00">
                                </div>
                                <div class="date">
                                    <img src="/assets/img/ui/agenda.png" alt="Date">
                                    <input type="date">
                                </div>
                                <div class="time">
                                    <img src="/assets/img/ui/clock.png" alt="start">
                                    <input type="text" placeholder="00:00">
                                </div>
                                <div class="date">
                                    <img src="/assets/img/ui/agenda.png" alt="Date">
                                    <input type="date">
                                </div>
                            </div>
                            <div class="value_container_promo">
                                <div class="value_prix">
                                    <p>Price</p>
                                    <input type="text" placeholder="--,--"  DATI-INPUT-NAME="price" DATI-PRICE-FOOD-INPUT>
                                    <p>DT</p>
                                </div>
                                <div class="value_promo">
                                    <p>Promo</p>
                                    <input type="text" placeholder="--%">
                                    <p>%</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <!-- end has promotion  -->
                <!-- bt add  -->
                <div class="action_add">
                    <div class="bt_add"  DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Content_Restau">
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
</div>