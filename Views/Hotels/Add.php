<div class="hotelContainer" style="display:none" DATI-PAGE="AddHotel">
    <div class="container-information">
        <div class="title">General Information</div>
      <dati-select class="dati-select-container" ID="selectHotelsChain"  UPDATE="showInputHotels" LABEL="Chain" LIST="addHotel_ui.chains" OPTION="name"></dati-select>
      <dati-input class="dati-input-container" ID="inputHotelsNameHotel"  UPDATE="showInputHotels" LABEL="Hotel name"></dati-input>
      <dati-select class="dati-select-container" ID="selectHotelsCategories"  UPDATE="showInputHotels" LABEL="Category" LIST="addHotel_ui.stars"  OPTION="name"></dati-select>
       <dati-input class="dati-input-container" ID="inputHotelsAdresse"  UPDATE="showInputHotels" LABEL="Adresse" ></dati-input>

        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputHotelsCity"  UPDATE="showInputHotels" LABEL="City" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputHotelsPostalCode"  UPDATE="showInputHotels" LABEL="ZIP" style="margin: 0px"></dati-input>
            <dati-select class="dati-select-container" ID="selectHotelsCountry"  UPDATE="showInputHotels" LABEL="Country" LIST="addHotel_ui.country" OPTION="name" style="margin: 0px;    box-sizing: content-box;"></dati-select>
        </div>
        <div class="title">Access</div>
        <div style="border: 1px solid #ffff;justify-items: center;height: 30px;padding-left: 1%;margin: 2%;width: 96%;box-sizing: border-box;float: left;display: table; ">
            <input type="text" DATI-DOMAIN-NAME-HOTEL-PAGE-ADD-HOTEL value="" placeholder="Domain name" style="border: none;background-color: rgba(0,0,0,0);width: 100%;box-sizing: border-box;">
            <div style="text-transform: lowercase;color: var(--header-color);height: 30px;line-height: 30px;text-overflow: ellipsis;white-space: nowrap;width: 40px;display: table-cell; font-size: 12px; font-family: CLB; padding-right: 1%;">
                .datihotel.com
            </div>
        </div>
        <dati-input class="dati-input-container" ID="inputHotelsManagerName"  UPDATE="showInputHotels" LABEL="Manager name" ></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelsManagerEmail"  UPDATE="showInputHotels" LABEL="Manager email" ></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelsLogin"  UPDATE="showInputHotels" LABEL="Login" ></dati-input>
        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputHotelsPassword"  UPDATE="showInputHotels" LABEL="Password" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputHotelsConfirmPassword"  UPDATE="showInputHotels" LABEL="Confirm password" style="margin: 0px"></dati-input>
        </div>



        <div class="title">Commercial offer</div>
        <dati-select class="dati-select-container" ID="selectHotelsCommercialOffer"  UPDATE="showInputHotels" LABEL="Commercial offer" LIST="addHotel_ui.offreHotel" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="selectHotelsBusinessManager"  UPDATE="showInputHotels" LABEL="Business manager" LIST="addHotel_ui.businessManager" OPTION="Employe.name"></dati-select>


        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputPhoneRequest"  UPDATE="showInputHotels" LABEL="Phone request" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputTabletRequest"  UPDATE="showInputHotels" LABEL="Tablet request" style="margin: 0px"></dati-input>
        </div>

    </div>
    <div class="container-information">
        <div class="container-information-image">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeHotel" UPDATE="showInputHotels"></dati-image-uploader>
        </div>
        <dati-input class="dati-input-container" ID="inputPhoneHotel"  UPDATE="showInputHotels" LABEL="Phone"></dati-input>
        <dati-input class="dati-input-container" ID="inputFaxHotel"  UPDATE="showInputHotels" LABEL="Fax"></dati-input>
        <dati-input class="dati-input-container" ID="inputEmailHotel"  UPDATE="showInputHotels" LABEL="Email"></dati-input>
        <dati-input class="dati-input-container" ID="inputWebSiteHotel"  UPDATE="showInputHotels" LABEL="Web site"></dati-input>
        <dati-input class="dati-input-container" ID="inputCapacityHotel"  UPDATE="showInputHotels" LABEL="Capacity"></dati-input>
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
        <dati-map ID="MapHotel" UPDATE="showInputHotels"  ></dati-map>


    </div>


    <div class="container-services" style="padding-bottom: 1%;">
        <div class="title">Applications</div>
        <div class="container_item_services">
            <div class="arrow_left" onclick="DatiListApplications_ui.SCROLL_LEFT(this)">
                <i class="fas fa-angle-left" DATI-ARROW></i>
                </div>
        <dati-list-application class="list-services"  ID="ListApplicationHotel" UPDATE="showServicesHotels" LIST="addHotel_ui.cards"></dati-list-application>
            <div class="arrow_right" onclick="DatiListApplications_ui.SCROLL_RIGHT(this)">
                <i class="fas fa-angle-right" DATI-ARROW></i>
                </div>
        </div>
    </div>
    <div class="container-configuration">
        <div class="title">Other configuration</div>
 <dati_multichoose class="dati-multichoose-container" BRAND="false"  ID="inputListOfLanguages"  UPDATE="showInputHotels" LIST="addHotel_ui.languages" LABEL="List of languages"></dati_multichoose>
 <dati-select class="dati-select-container" ID="selectHotelsTimeZone"  UPDATE="showInputHotels" LABEL="Time zone" LIST="addHotel_ui.timeZone" OPTION="region"></dati-select>
    </div>
    <div class="container-configuration">
        <div class="title-hidden" >Other configuration</div>
        <dati_onechoose class="dati-multichoose-container"  ID="inputListOfDefaultLanguage"  UPDATE="showInputHotelsLanguage" LIST="dati_multichoose.defaultLnagugeList" LABEL="Primary language" ></dati_onechoose>
        <div class="hotel-action-add">
            <div  onclick="addHotel_ui.Submit_form_add()">Save</div>
   <!--         <div dati-link="SuccessAddHotel">Next</div>-->
        </div>


    </div>

</div>