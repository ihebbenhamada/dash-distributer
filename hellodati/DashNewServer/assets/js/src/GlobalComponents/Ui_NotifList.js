let Ui_notifList = class {
    constructor() {
        this.EVENTS_UI();
        this.selected_notif = null;
    }

    DATALIST(data){
        this.notifs = data.list;

    }

    CREATE_ITEM(logo,desc,time,id){
        var item = '<div class="block_notif_item" DATI-COMPOSENT="listNotifInfo_item" CLICK="'+id+'">' +
                        '<div class="logo_item_notif">' +
                            '<img src="'+logo+'" style="width: 30px;height: 30px"/> ' +
                        '</div> ' +
                        '<div class="notif_description">' +
                            ''+desc+' ' +
                        '</div> ' +
                        '<div class="notif_time">' +
                            ''+time+'' +
                        '</div>' +
                    ' </div>';

        return item;
    }

    UPDATE(id){
        var listItems = $("[DATI-ID="+id+"]");
        var item="";
        for(var i=0; i<this.notifs.length; i++) {
            var notif =this.notifs[i];
           item = item + this.CREATE_ITEM(notif.logo,notif.desc,notif.time,i);

            }
        $(listItems).append(item);
    }



    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=listNotifInfo]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-id"),$(myComposent).attr("dati-update"));
            }
        }


        $(document).on('click','[DATI-COMPOSENT=listNotifInfo_item]',function(){
            var i = $(this).attr("CLICK");
            notifList_ui.CHANGE_SELECTED_NOTIF(i);
        });

    }

    CHANGE_SELECTED_NOTIF(pos){
        this.selected_notif = this.notifs[pos];
        window.location.href = "http://v2.datihotel.com/";
    }
    LUNCH(id,eventName){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                notifList_ui.UPDATE(id);
            }, 100);
        },true);
    }

};

let notifList_ui = new Ui_notifList();