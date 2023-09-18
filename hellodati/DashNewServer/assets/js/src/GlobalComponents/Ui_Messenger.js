let Ui_Messenger = class {
    constructor() {
        this.EVENTS_UI();
        this.selectedMsgRecieve = null;
    }
    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }


    MESSENGER(list){
        if(depInChat_ui.selectedService.id ==  list.id_sender){
            return '<div class="send">'+
                  '<div class="msg_time">'+depInChat_ui.selectedService.title+'<span>'+list.time+'</span></div>'+
                 '<div class="send_msg">'+
                 '<img src="/assets/img/chat/seen.svg" />'+list.msg+' </div>'+
                 '</div>'
        }else  if(depInChat_ui.selectedService.id ==  list.id_receiver){
            return '<div class="receive">'+
                '<div class="image_sender" style="   background-image: url(/assets/img/chat/contact.png);">'+
                '</div>'+
                '<div class="detail_msg">'+
                '<div class="msg_time">'+list.name_sender+':'+list.room_number+' <span>'+list.time+'</span></div>'+
                '<div class="receive_msg">'+list.msg+' </div>'+
                 '</div>'+
                 '</div>'
        }
    }
  selectedService(){

        //console.log(depInChat_ui.selectedService,"selected service");
    }
    UPDATE(id){
       // console.log(id,"the idddd messenger")
        var messenger = $("[DATI-ID="+id+"]");
        var lists_name = $(messenger).attr("DATI-LIST");
        var lists = eval(lists_name);
       // console.log(lists,"this my list messenger");
       // console.log(messenger,"this my id messenger");
        $(messenger).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
           var msgInBox = "";
            msgInBox += this.MESSENGER(list);
            $(messenger).append(msgInBox);
        }
//this.selectedService();



    }


    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=MsgReceiverSenderByGuest]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }
    }
    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                Messenger_ui.UPDATE(id)
            }, 100);
        }, false);
    }

};

let Messenger_ui = new Ui_Messenger();