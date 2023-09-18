<div class="hotelContainer" style="display:none" DATI-PAGE="EditHotel">
    <div class="container-information">
        <div class="title">General Information</div>
      <dati-select class="dati-select-container" ID="selectHotelsChainEdit"  UPDATE="showInputHotelsEdit" LABEL="Chain" LIST="editHotel_ui.chains" OPTION="name"></dati-select>
      <dati-input class="dati-input-container" ID="inputHotelsNameHotelEdit"  UPDATE="showInputHotelsEdit" LABEL="Hotel name"></dati-input>
      <dati-select class="dati-select-container" ID="selectHotelsCategoriesEdit"  UPDATE="showInputHotelsEdit" LABEL="Category" LIST="editHotel_ui.stars"  OPTION="name"></dati-select>
       <dati-input class="dati-input-container" ID="inputHotelsAdresseEdit"  UPDATE="showInputHotelsEdit" LABEL="Adresse" ></dati-input>

        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputHotelsCityEdit"  UPDATE="showInputHotelsEdit" LABEL="City" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputHotelsPostalCodeEdit"  UPDATE="showInputHotelsEdit" LABEL="ZIP" style="margin: 0px"></dati-input>
            <dati-select class="dati-select-container" ID="selectHotelsCountryEdit"  LIST="editHotel_ui.country" OPTION="name" UPDATE="showInputHotelsEdit" LABEL="Country" style="margin: 0px;box-sizing: content-box"></dati-select>
        </div>
        <div class="title">Access</div>
        <div style="border: 1px solid #ffff;justify-items: center;height: 30px;padding-left: 1%;margin: 2%;width: 96%;box-sizing: border-box;float: left;display: table; ">
            <input type="text" DATI-DOMAIN-NAME-HOTEL-PAGE-EDIT-HOTEL value="" placeholder="Domain name" style="border: none;background-color: rgba(0,0,0,0);width: 100%;height: 100%;box-sizing: border-box;">

        </div>
        <dati-input class="dati-input-container" ID="inputHotelsManagerNameEdit"  UPDATE="showInputHotelsEdit" LABEL="Manager name" ></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelsManagerEmailEdit"  UPDATE="showInputHotelsEdit" LABEL="Manager email" ></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelsLoginEdit"  UPDATE="showInputHotelsEdit" LABEL="Login" ></dati-input>
        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputHotelsPasswordEdit"  UPDATE="showInputHotelsEdit" LABEL="Password" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputHotelsConfirmPasswordEdit"  UPDATE="showInputHotelsEdit" LABEL="Confirm password" style="margin: 0px"></dati-input>
        </div>



        <div class="title">Commercial offer</div>
        <dati-select class="dati-select-container" ID="selectHotelsCommercialOfferEdit"  UPDATE="showInputHotelsEdit" LABEL="Commercial offer" LIST="editHotel_ui.offreHotel" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="selectHotelsBusinessManagerEdit"  UPDATE="showInputHotelsEdit" LABEL="Business manager" LIST="editHotel_ui.businessManager" OPTION="Employe.name"></dati-select>


        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputPhoneRequestEdit"  UPDATE="showInputHotelsEdit" LABEL="Phone request" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputTabletRequestEdit"  UPDATE="showInputHotelsEdit" LABEL="Tablet request" style="margin: 0px"></dati-input>
        </div>

    </div>
    <div class="container-information">
        <div class="container-information-image">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeHotelEdit" UPDATE="showInputHotelsEdit"></dati-image-uploader>
        </div>
        <dati-input class="dati-input-container" ID="inputPhoneEdit"  UPDATE="showInputHotelsEdit" LABEL="Phone"></dati-input>
        <dati-input class="dati-input-container" ID="inputFaxEdit"  UPDATE="showInputHotelsEdit" LABEL="Fax"></dati-input>
        <dati-input class="dati-input-container" ID="inputEmailEdit"  UPDATE="showInputHotelsEdit" LABEL="Email"></dati-input>
        <dati-input class="dati-input-container" ID="inputWebSiteEdit"  UPDATE="showInputHotelsEdit" LABEL="Web site"></dati-input>
        <dati-input class="dati-input-container" ID="inputCapacityEdit"  UPDATE="showInputHotelsEdit" LABEL="Capacity"></dati-input>
        <div class="map-search-container">
            <div class="map-search-input-container">
                <input DATI-SERACH-QUERY-MAP  DATI-SEARCH-MAP="request" placeholder="Search Request">
                <div class="map-search-coordinates-container" DATI-SEARCH-MAP="coordinates" style="display: none" >
                    <input placeholder="Latitude" DATI-SERACH-LATITUDE-MAP>
                    <input placeholder="Longitude" DATI-SERACH-LONGITUDE-MAP>
                    <input placeholder="Zoom" DATI-SERACH-ZOOM-MAP>
                    </div>
                </div>
            <div  class="map-search-select-container" >
                <select DATI-SEARCH-MAP-SELECT>
                    <option value="request">Search Request</option>
                    <option value="coordinates">Search Map coordinates</option>
                    </select>
                </div>
            </div>
        <dati-map ID="MapHotelEdit" UPDATE="showInputHotelsEdit"  ></dati-map>


    </div>


    <div class="container-services" style="padding-bottom: 1%;">
        <div class="title">Applications</div>
        <div class="container_item_services">
            <div class="arrow_left" onclick="DatiListApplications_ui.SCROLL_LEFT(this)">
                <i class="fas fa-angle-left" DATI-ARROW></i>
                </div>
        <dati-list-application class="list-services"  ID="ListApplicationHotelEdit" UPDATE="showServicesHotelsEdit" LIST="editHotel_ui.cards"></dati-list-application>
            <div class="arrow_right" onclick="DatiListApplications_ui.SCROLL_RIGHT(this)">
                <i class="fas fa-angle-right" DATI-ARROW></i>
                </div>
        </div>
    </div>
    <div class="container-configuration">
        <div class="title">Other configuration</div>
 <dati_multichoose class="dati-multichoose-container"  ID="inputListOfLanguagesEdit" BRAND="false"  UPDATE="showInputHotelsEdit" LIST="editHotel_ui.languages" LABEL="List of languages"></dati_multichoose>
 <dati-select class="dati-select-container" ID="selectHotelsTimeZoneEdit"  UPDATE="showInputHotelsEdit" LABEL="Time zone" LIST="editHotel_ui.timeZone" OPTION="region"></dati-select>
    </div>
    <div class="container-configuration">
        <div class="title-hidden" >Other configuration</div>
        <dati_onechoose class="dati-multichoose-container"  ID="inputListOfDefaultLanguageEdit"  UPDATE="showInputHotelsEditLanguage" LIST="dati_multichoose.defaultLnagugeList" LABEL="Primary language" ></dati_onechoose>
        <div class="hotel-action-add">
            <div  onclick="editHotel_ui.Submit_form_edit()">Edit</div>

        </div>


    </div>

</div>