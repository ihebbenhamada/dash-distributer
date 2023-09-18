<div class="hotelContainer" style="display:none" DATI-PAGE="DetailHotel">
    <div class="container-information">
        <div class="title">General Information</div>
        <dati-input class="dati-input-container" ID="inputHotelsId"  UPDATE="showInputHotels" LABEL="Hotel ID "></dati-input>
        <dati-select class="dati-select-container" ID="selectHotelsChain"  UPDATE="showInputHotels" LABEL="Chain"></dati-select>
        <dati-input class="dati-input-container" ID="inputHotelsNameHotel"  UPDATE="showInputHotels" LABEL="Hotel name"></dati-input>
        <dati-select class="dati-select-container" ID="selectHotelsCategories"  UPDATE="showInputHotels" LABEL="Category"></dati-select>
        <dati-input class="dati-input-container" ID="inputHotelsAdresse"  UPDATE="showInputHotels" LABEL="Adresse" ></dati-input>

        <div style="width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputHotelsCity"  UPDATE="showInputHotels" LABEL="City" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputHotelsPostalCode"  UPDATE="showInputHotels" LABEL="ZIP" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputHotelsCountry"  UPDATE="showInputHotels" LABEL="Country" style="margin: 0px"></dati-input>
        </div>
        <div class="title">Access</div>
        <div style="border: 1px solid #ffff;justify-items: center;height: 30px;padding-left: 1%;margin: 2%;width: 100%;box-sizing: border-box;float: left;display: table; ">
            <input type="text" value="" placeholder="Domain name" style="border: none;background-color: rgba(0,0,0,0);width: 100%;box-sizing: border-box;">
            <div style="text-transform: lowercase;color: var(--header-color);height: 30px;line-height: 30px;text-overflow: ellipsis;white-space: nowrap;width: 40px;display: table-cell; font-size: 12px; font-family: CLB; padding-right: 1%;">
                .datihotel.com
            </div>
        </div>
        <dati-input class="dati-input-container" ID="inputHotelsManagerName"  UPDATE="showInputHotels" LABEL="Manager name" ></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelsManagerEmail"  UPDATE="showInputHotels" LABEL="Manager email" ></dati-input>
        <dati-input class="dati-input-container" ID="inputHotelsPost"  UPDATE="showInputHotels" LABEL="Post" ></dati-input>
        <div class="submit">
            Log in as administrator
        </div>



        <div class="title">Commercial offer</div>
        <dati-select class="dati-select-container" ID="selectHotelsCommercialOffer"  UPDATE="showInputHotels" LABEL="Commercial offer"></dati-select>
        <dati-select class="dati-select-container" ID="selectHotelsBusinessManager"  UPDATE="showInputHotels" LABEL="Business manager"></dati-select>
    </div>
    <div class="container-information">
        <div class="container-information-image">
            <dati-image-uploader  class="imageUploader" ID="uploadIamgeHotelDetails" UPDATE="showInputHotels"></dati-image-uploader>
        </div>
        <dati-input class="dati-input-container" ID="inputPhone"  UPDATE="showInputHotels" LABEL="Phone"></dati-input>
        <dati-input class="dati-input-container" ID="inputFax"  UPDATE="showInputHotels" LABEL="Fax"></dati-input>
        <dati-input class="dati-input-container" ID="inputEmail"  UPDATE="showInputHotels" LABEL="Email"></dati-input>
        <dati-input class="dati-input-container" ID="inputWebSite"  UPDATE="showInputHotels" LABEL="Web site"></dati-input>
        <dati-input class="dati-input-container" ID="inputCapacity"  UPDATE="showInputHotels" LABEL="Capacity"></dati-input>

        <div class="hotel-remarque-container">
            <div class="name">
                <div>Notes</div>
            </div>
            <div class="remarque">
                <textarea></textarea>
            </div>
            <div class="bt-save">
                <div>Save</div>
            </div>
        </div>


    </div>
    <div class="container-services" style="padding-bottom: 1%;">
        <div class="title">Billing information</div>
        <div class="container-belling-information">
            <div>
                <div class="title-detail" >Next belling date</div>
                <div class="details">March 21th</div>
                <div class="link">Display transactions</div>
            </div>
            <div>
                <div class="title-detail">Payment account number</div>
                <div class="details" >5555-6666-7777-444</div>
                <div class="link" >display transactions</div>
            </div>
            <div>
                <div class="title-detail">Payment profile</div>
                <div class="link">Manage billing recipients</div>
                <div class="link">Show payment settings</div>
            </div>

        </div>

    </div>
    <div class="container-services" style="padding-bottom: 1%;">
        <div class="title">Equipment </div>
        <div class="container-belling-information">
            <div>
                <div class="title-detail" >Phone</div>
                <div class="details">328 telephone activate</div>
                <div class="link">Show the details</div>
            </div>
            <div>
                <div class="title-detail">SIM card</div>
                <div class="details" >328 sim card activate</div>
                <div class="link" >Show the details</div>
            </div>
            <div>
                <div class="title-detail">Accessory</div>
                <div class="link">Display the accessories of this hotel</div>
            </div>

        </div>

    </div>



</div>