<div class="form_add" FORM-ID="form_Swap_Device" DATI-PAGE="SwapDevice" dati-display="flex" style="flex-direction: column" >
    <div
            class="container_msg_erreur"
            DATI-COMPOSENT="msgErreurContainer"
            DATI-ID="SwapErreurs"
            DATI-UPDATE="showMsgSwap"
            DATI-LIST="swapDevice_ui.msgErreurSwap"
    >
    </div>
    <div style=" height: 100%; padding: 30px;border: 1px solid rgb(215, 222, 234);border-radius: 5px;background-color: #e0e0e0">
        <!--first step select-->
        <div DATI-ID="firstStepContainer" style="display: inline-block; width: 100%;height: 100%;border-radius: 5px">


            <div class="input_swap_form" style="max-width: 70%;width: 70%">
                <label>MOVE THE DEVICE FROM ROOM</label>
                <select DATI-INPUT-NAME="fromRoom" class="select">

                </select>
                <div class="info_swap">
                    <label>IMEI :</label>
                    <label style="float: right" DATI-ID="swap_imei_from_room"></label>
                </div>
                <div class="info_swap">
                    <label  DATI-ID="swap_prefixnumber_from_room">PREFIX NUMBER</label>

                </div>
            </div>

        </div>
        <div DATI-ID="firstStepReason" class="input_swap_form" style="margin-top: 20px;display: inline-block;width: 70%;max-width: 70%">
            <label>PLEASE TELL US SWAP REASON</label>
            <select DATI-INPUT-NAME="select_reason" class="select">
                <option value="">Select Reason</option>
                <option value="1">Lost</option>
                <option value="2">Damage</option>
                <option value="3">Guest change the room</option>
            </select>
        </div>
        <div DATI-ID="secondStepContainer"  style="display: none; width: 100%;height: 100%">
            <!--second step dyma mawjouda-->
            <div class="input_swap_form" style="float: left;">
                <label>BEFORE</label>
                <div class="info_swap" style="border-bottom: none; border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;background-color: white">
                    <label>ROOM</label>
                    <div DATI-ID="recap_room_number"  class="info_swap_container">258</div>
                </div>
                <div class="info_swap" style="border-bottom: none;border-top: none;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-left-radius: 0px;border-top-right-radius: 0px">
                    <label>IMEI</label>
                    <div DATI-ID="recap_imei" class="info_swap_container">258963258741</div>
                </div>
                <div class="info_swap" style="border-bottom: none;border-top: none;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-left-radius: 0px;border-top-right-radius: 0px;background-color: white">
                    <label>PREFIX NUMBER</label>
                    <div class="info_swap_container">#2585</div>
                </div>

            </div>
            <div DATI-ID="guest_change_reason_content" class="input_swap_form" style="float: right;display: none">
                <label>TO ROOM</label>
                <select DATI-INPUT-NAME="toRoom" class="select">

                </select>
                <div class="info_swap">
                    <label>IMEI :</label>
                    <label style="float: right" DATI-ID="swap_imei_to_room"></label>
                </div>
                <div class="info_swap">
                    <label  DATI-ID="swap_prefixnumber_to_room">PREFIX NUMBER</label>
                </div>
                <!--<label>AFTER</label>
                <div class="info_swap" style="border-bottom: none; border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;background-color: white">
                    <label>ROOM</label>
                    <div class="info_swap_container">258</div>
                </div>
                <div class="info_swap" style="border-bottom: none;border-top: none;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-left-radius: 0px;border-top-right-radius: 0px">
                    <label>IMEI</label>
                    <div class="info_swap_container">258963258741</div>
                </div>
                <div class="info_swap" style="border-bottom: none;border-top: none;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;border-top-left-radius: 0px;border-top-right-radius: 0px;background-color: white">
                    <label>PREFIX NUMBER</label>
                    <div class="info_swap_container">#2585</div>
                </div>
                <div class="info_swap" style="border-top: none;border-top-left-radius: 0px;border-top-right-radius: 0px">
                    <label>STATUS</label>
                    <div class="info_swap_container">Active</div>-->

            </div>
            <div DATI-ID="lost_damage_reason_content" class="input_swap_form" style="float: right;display: none">
                <label>ACTION</label>
                <select DATI-INPUT-NAME="select_after_lost_damage" class="select">
                    <option VALUE="">Choose action</option>
                    <option VALUE="1">Report</option>
                    <option VALUE="2">Swap from available device</option>
                    <option VALUE="3">Swap from device in room</option>
                </select>


            </div>
            <div DATI-ID="div_select_problem" class="input_swap_form" style="float: right;display: none">
                <label>PROBLEM</label>
                <select DATI-INPUT-NAME="select_problem_device" class="select">
                    <option value="">Select Problem</option>
                    <option value="0">Screen Damage</option>
                    <option value="1">Water Damage</option>
                    <option value="2">Battery Damage</option>
                    <option value="3">Software Damage</option>
                    <option value="4">Device Dead</option>
                </select>
            </div>
            <div DATI-ID="div_av_device" class="input_swap_form" style="float: right;display: none">
                <label>AVAILABLE DEVICE</label>
                <select DATI-INPUT-NAME="select_available_device" class="select"></select>
            </div>
            <div DATI-ID="div_from_room_not_linked" class="input_swap_form" style="float: right;display: none">
                <label>DEVICE IN ROOM NOT LINKED TO GUEST</label>
                <select DATI-INPUT-NAME="select_device_from_room_not_linked" class="select"></select>
            </div>
        </div>

        <div class="buttons_swap">
            <div style="width: 60%;float: left; display: inline-block">
                <div DATI-ID="btn_first_step_swap_device" style="float: left;">
                    <div DATI-ID="firststepNumberIcon"  class="firststep_number_icon">
                        1
                    </div>
                    <div DATI-ID="firststepText" class="firststep_text"> First Step</div>
                </div>
                <div  DATI-ID="btn_second_step_swap_device"  style="float: right">
                    <div DATI-ID="secondstepNumberIcon"  class="secondstep_number_icon">
                        2
                    </div>
                    <div DATI-ID="secondstepText" class="secondstep_text"> Second Step</div>
                </div>
            </div>

            <div DATI-ID="btnNext" class="swap_btn_next" style="display: inline-block">
                Next
            </div>
            <div DATI-ID="btnConfirm" class="swap_btn_next" style="background-color: rgb(81,185,96);display: none">
                <div style="color: white">Confirm</div>
            </div>
            <div DATI-ID="btnPrevious" class="swap_btn_next" style="margin-right: 1%;display: none">
                <div>Previous</div>
            </div>

        </div>

    </div>


</div>


