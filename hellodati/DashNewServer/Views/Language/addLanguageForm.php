<div  DATI-PAGE="formAddLanguage" DATI-PAGE-TYPE="pop-up">

           <div class="modal_language">
<div class="container_form_languages">

                              <div  class="languages"
                              DATI-COMPOSENT="languageItem"
                              DATI-LIST="langueItem_ui.langues"
                              DATI-ID="LanguageList"
                              DATI-SWITECH="";
                              DATI-UPDATE="LanguageReceive"
                              >

                              </div>








            <div  class="form_languages">
            <div class="myForm" DATI-ROLE="form-language" >
            <h4 DATI-LANGUAGE-TITLE ></h4>
            <div class="title" >
             <label for="" style=" padding-bottom: 10px;" >Title: </label>
            <input type="text" DATI-LANGUAGE-TITLE-PLACEHOLDER DATI-NAME="input_title_language" onchange="iAddLang.updateProp()" id="" placeholder="" disabled >
            </div>
            <div class="details" >
            <div class="description" >
            <label for=""> Description : </label>
            <textarea name="" id="" cols="30" rows="10" DATI-LANGUAGE-DESCRIPTION-PLACEHOLDER DATI-NAME="input_des_language" onchange="iAddLang.updateProp()" id="" placeholder="" disabled></textarea>
            </div>
            <div class="img_uploader">
            <label for="" >Image : </label>
            <div  class="imageUploader"
            DATI-COMPOSENT="UploaderTrans"
            DATI-ID="uploadIamgeTranslate"
            DATI-UPDATE="AddRestauForm"
            UPLOAD-INPUT-NAME="lalalallal">
            </div>

            </div>
            </div>
             </div>


    </div>
             </div>
                 <div class="Actions_APPLY_CANCEL">
                     <div class="cancel" onclick="iAddLang.CANCEL_DATA()">Cancel</div>
                     <div class="apply" onclick="iAddLang.GET_DATA()">Apply</div>
                 </div>
                               <span  class="closBt"
                                              dati-composent="close-pop-up"

                                             >
                                             x
                                              </span>
</div>
</div>