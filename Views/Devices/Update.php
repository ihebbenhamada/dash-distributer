<div DATI-PAGE="EditDevice" dati-display="inline-block" style="display:none" class="container_hotel_dati">
    <div style="width: 100%;display: inline-block">
    <div style="display: inline-block;width: 45%;float: right">

        <div class="textArea_header">
            <div>
                UPDATE IMEI AND SERIAL NUMBER
            </div>
        </div>
        <div  style="display: flex;align-items: center;justify-content: space-between;width: 100%;">
            <dati-input class="dati-input-container" ID="inputUpdateImeiDevice" UPDATE="showInputUpdateDevices"
                        LABEL="Imei" style="margin: 0"></dati-input>
            <dati-input class="dati-input-container" ID="inputUpdateSerialNumberDevice" UPDATE="showInputUpdateDevices"
                        LABEL="Serial Number" style="margin: 0"></dati-input>
        </div>

    </div>
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 45%;float: left">

        <dati-select class="dati-select-container" ID="inputDeviceUpdateBrand" UPDATE="showInputUpdateDevices"
                    LABEL="Brand" LIST="addDevice_ui.brands" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="inputDeviceUpdateModel" UPDATE="showInputUpdateDevices"
                    LABEL="Model" LIST="updateDevice_ui.models" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="inputDeviceUpdateColor" UPDATE="showInputUpdateDevices"
                    LABEL="Color"  LIST="updateDevice_ui.colors" OPTION="name"></dati-select>
        <dati-input class="dati-input-container" ID="inputDeviceUpdateProvider" UPDATE="showInputUpdateDevices"
                    LABEL="Provider"></dati-input>
        <dati-input class="dati-input-container" ID="inputDeviceUpdatePrice" UPDATE="showInputUpdateDevices"
                    LABEL="Price"></dati-input>

    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
    <div onclick="updateDevice_ui.Submit_form_update()" class="btn_validate" style="margin-top: 10px;width: 35%">
        UPDATE
    </div>
    </div>
</div>

