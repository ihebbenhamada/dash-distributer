<div DATI-PAGE="AddProvider" dati-display="inline-block" style="display:none" class="container_mark_dati">

    <div style="width: 100%;display: inline-block">
    <div class="detail-container-mark">
        <dati-input class="dati-input-container" ID="inputProviderName" UPDATE="SHOWInputProvider" LABEL="Provider Name"></dati-input>
        <dati-input class="dati-input-container" ID="inputProviderTaxRegistration" UPDATE="SHOWInputProvider" LABEL="Tax registration number"></dati-input>
        <dati-input class="dati-input-container" ID="inputProviderAdmissionDate" UPDATE="SHOWInputProvider" LABEL="Admission date"></dati-input>
        <dati-input class="dati-input-container" ID="inputProviderAdress" UPDATE="SHOWInputProvider" LABEL="Adress"></dati-input>

        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputProvidersCity"  UPDATE="SHOWInputProvider" LABEL="City" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputProviderZIP"  UPDATE="SHOWInputProvider" LABEL="ZIP" style="margin: 0px"></dati-input>
            <dati-select class="dati-select-container" ID="inputProviderCountry"  UPDATE="SHOWInputProvider" LABEL="Country" LIST="addProvider_ui.country" OPTION="name"  style="margin: 0px; box-sizing: content-box;"></dati-select>
        </div>
        <dati-input class="dati-input-container" ID="inputProviderManagerName" UPDATE="SHOWInputProvider" LABEL="Manager Name"></dati-input>
        <dati-input class="dati-input-container" ID="inputProviderManagerEmail" UPDATE="SHOWInputProvider" LABEL="Manager Email"></dati-input>
        <dati-input class="dati-input-container" ID="inputProviderPost" UPDATE="SHOWInputProvider" LABEL="post"></dati-input>



    </div>

    <div class="image-container-mark">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeProvider" UPDATE="SHOWInputProvider"></dati-image-uploader>

    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
    <div class="btn_validate" onclick="addProvider_ui.Submit_form_add()" style="margin-top: 10px;width: 35%">
        Validate
    </div>
    </div>
</div>

<!--SUCCESS  POP UP-->
<div class="popup_success_div" DATI-POPUP="sucess">
    <div class="popup_success_container">
        <div class="validate_modal">
            <img src="/assets/img/ui/succes.png">
            <div DATI-MSG-SUCCESS></div>
        </div>
    </div>
</div>
<!--ERROR  POP UP-->
<div class="popup_success_div" DATI-POPUP="error">
    <div class="popup_success_container">
        <div class="echec_modal">
            <i  class="fas fa-exclamation-circle"></i>
            <div DATI-MSG-ERROR ></div>
        </div>
    </div>
</div>