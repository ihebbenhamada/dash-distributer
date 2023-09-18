   <div class="chat_container" DATI-PAGE="chat">
        <div class="msgReceive">
            <div class="chat_container_search">
                <input type="text" value="" placeholder="Search" />
            </div>
<div class="msg_in_box">
            <div
              DATI-COMPOSENT="msgItemContainer"
              DATI-ID="msgBox"
              DATI-LIST="chat_ui.msgsReceive"
              DATI-UPDATE="showMsgReceive"
            >
            </div>
</div>
            <div class="department_agent">

                <div class="services"
             DATI-COMPOSENT="departmentInChat"
             DATI-ID="chatDepartment"
             DATI-LIST="chat_ui.departments"
             DATI-UPDATE="showDepartementChat"
                >

                </div>


            </div>

        </div>
        <div class="body_messenger">
            <div>
                <img src="/assets/img/chat/setting.svg" />
                <div class="msg_show_box">
                    <div class="message_send_receive"
                     DATI-COMPOSENT="MsgReceiverSenderByGuest"
                     DATI-ID="MsgInBox"
                     DATI-LIST="chat_ui.msgByGuest"
                     DATI-UPDATE="MsgByGuestSelected"
                    >

                    </div>
                </div>
                <div class="send_box">
                    <div class="sender">
                        <div class="sender_input">
                            <input type="text" placeholder="Write a message" DATI-SEND-MESSAGE="theSender">
                        </div>
                        <img src="/assets/img/chat/send.svg" onclick="AppendMsgToList_ui.READ_MSG_VALUE()"/>
                    </div>
                </div>
                <div class="detail_guest" DATI-SENDER_DETAIL>
                    <div class="container_guest">
                        <img src="/assets/img/chat/contact.png" />
                        <div class="guest_info">
                            <h6 >Guest Name :<span  DATI-ID="msg-sender-name"></span></h6>
                            <h6>Room :<span  DATI-ID="msg-sender-room-number"></span></h6>
                            <h6>Virtual Extension :<span DATI-ID="msg-sender-virtuel-extension"></span></h6>
                            <h6>IMEI :<span DATI-ID="msg-sender-imei"> </span></h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>






    </div>
