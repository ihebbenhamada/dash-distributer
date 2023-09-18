<div DATI-PAGE="OfferHotel" dati-display="inline-block" style="display:none" class="container_mark_dati">


    <div class="detail-container-mark">
        <dati-input class="dati-input-container" ID="inputHotelOffreName" UPDATE="showInputOffreHotel" LABEL="Offre Name"></dati-input>
        <dati-select class="dati-select-container" ID="selectOffreHotelOperatorName"  UPDATE="showInputOffreHotel" LABEL="Offre operator" LIST="OffreHotel_ui.offreOperator" OPTION="name"></dati-select>
        <dati-input class="dati-input-container" ID="inputOffreHotelDailyCommunication" UPDATE="showInputOffreHotel" LABEL="Daily communication"></dati-input>
        <dati-input class="dati-input-container" ID="inputOffreHotelDailyData" UPDATE="showInputOffreHotel" LABEL="Daily data"></dati-input>
        <dati-select class="dati-select-container" ID="selectOffreHotelPhoneMark"  UPDATE="showInputOffreHotel" LABEL="Phone brand" LIST="OffreHotel_ui.brand" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="selectOffreHotelPhoneModel"  UPDATE="showInputOffreHotel" LABEL="Phone model" LIST="OffreHotel_ui.modal" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="selectOffreHotelSupport"  UPDATE="showInputOffreHotel" LABEL="Support" LIST="OffreHotel_ui.accessory"  OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="selectOffreHotelPaymentMethod"  UPDATE="showInputOffreHotel" LABEL="Payment method" LIST="OffreHotel_ui.typeOffre" OPTION="name"></dati-select>
        <dati-input class="dati-input-container" ID="inputHotelOffrePrice" UPDATE="showInputOffreHotel" LABEL="Price HT"></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelOffreTVA" UPDATE="showInputOffreHotel" LABEL="TVA"></dati-input>


        <div class="submit" onclick="OffreHotel_ui.Submit_form_add()">
            Validate
        </div>
    </div>

    <div class="image-container-mark">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeOffreHotel" UPDATE="showInputOffreHotel"></dati-image-uploader>
        <textarea  ID="inputAddOtherAccessoriesOffreHotel" placeholder="Add Other Accessories"></textarea>

    </div>

</div>

