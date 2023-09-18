<div DATI-PAGE="detailsGuest" DATI-PAGE-TYPE="pop-up">
    <div style="width:90%;">
        <div class="header_popup">
            <p DATI-ID="guest_name"></p>
            <span style="font-size:40px" DATI-COMPOSENT="close-pop-up">x</span>
        </div>

        <div class="body_popup">

            <div class="item_popup">
                <label>COUNTRY :</label><br/>
                <p DATI-ID="country"></p>
            </div>
            <div class="item_popup">
                <label>DATE OF BIRTH :</label><br/>
                <p DATI-ID="born"></p>
            </div>

            <div class="item_popup">
                <label>IDENTITY-PASSPORT :</label><br/>
                <p DATI-ID="id_passport"></p>
            </div>

            <div class="item_popup">
                <label>EMAIL :</label><br/>
                <p DATI-ID="email"></p>
            </div>


            <div class="item_popup">
                <label>PHONE-NUMBER :</label><br/>
                <p DATI-ID="phone_number"></p>
            </div>

            <div class="item_popup">
                <label>SHORT-NUMBER :</label><br/>
                <p DATI-ID="short_number"></p>
            </div>

            <div class="item_popup">
                <label>ROOM :</label><br/>
                <p DATI-ID="room"></p>
            </div>
            <div class="item_popup">
                <label>CHECK-IN :</label><br/>
                <p DATI-ID="check_in"></p>
            </div>
            <div class="item_popup">
                <label>CHECK-OUT :</label><br/>
                <p DATI-ID="check_out"></p>
            </div>

        </div>
        <div style="height: 60px;width: 100%;display: flex;justify-content: space-between">
            <div style="cursor: pointer;width: 32%;height: 100%;background-color: #111f35;border-radius: 5px;position: relative" onclick="guestList_ui.DELETE_CHECKOUT()">
                <div style="height: 100%;position: absolute;left: 0;display: flex;align-items: center;justify-content: center">
                    <i style="padding-left: 10px;" class="fas fa-sign-out-alt fa-lg"></i>
                </div>
                <div style="letter-spacing: 1px;font-weight: bold;color:#E0CD08;height: 100%;display: flex;justify-content: center;align-items: center">
                    CHECK-OUT
                </div>
            </div>
            <div style="cursor: pointer;width: 32%;height: 100%;background-color: #111f35;border-radius: 5px;position: relative" onclick="guestList_ui.DELETE_RESET_PASSWORD()">
                <div style="height: 100%;position: absolute;left: 0;display: flex;align-items: center;justify-content: center">
                    <i style="padding-left: 10px;" class="fas fa-unlock-alt fa-lg"></i>
                </div>
                <div style="letter-spacing: 1px;font-weight: bold;color:#E0CD08;height: 100%;display: flex;justify-content: center;align-items: center">
                    RESET PASSWORD
                </div>
            </div>
            <div style="cursor: pointer;width: 32%;height: 100%;background-color: #111f35;border-radius: 5px;position: relative" onclick="guestList_ui.CLEAR_DATA()">
                <div style="height: 100%;position: absolute;left: 0;display: flex;align-items: center;justify-content: center">
                    <i style="padding-left: 10px;" class="fas fa-recycle fa-lg"></i>
                </div>
                <div style="letter-spacing: 1px;font-weight: bold;color:#E0CD08;height: 100%;display: flex;justify-content: center;align-items: center">
                    CLEAR DATA
                </div>
            </div>
        </div>
    </div>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="GuestCheckOutAlerte"
            DATI-UPDATE="showAlerteCheckOutGuest"
            DATI-CANCEL="guestList_ui.CANCEL_ALERTE_CHECKOUT()"
            DATI-VALIDATE="guestList_ui.VALIDATE_ALERTE_CHECKOUT()"
    >
    </div>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="GuestResetPasswordAlerte"
            DATI-UPDATE="showAlerteResetPasswordGuest"
            DATI-CANCEL="guestList_ui.CANCEL_ALERTE_RESET_PASSWORD()"
            DATI-VALIDATE="guestList_ui.VALIDATE_ALERTE_RESET_PASSWORD()"
    >
    </div>
</div>