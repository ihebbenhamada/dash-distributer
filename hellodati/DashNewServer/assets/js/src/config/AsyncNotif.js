class AsyncNotif {

    constructor() {
        this.EVENTS_SSAPI();
        document.addEventListener("SSAPI_READY", function (e) {
            AsyncNotification.CHECK_NOTIF();
        }, false);

    }

    CHECK_NOTIF() {
        SSAPI.SUBMIT({
            uri: "/AsynchroneNotif/check",
            onsuccess: "CheckNotificationReceive",
            onerror: "CheckNotificationReceive_error"
        });
    }

    ACK(notif_id) {
        console.log(notif_id,"id notif ack");
        SSAPI.SUBMIT({
            uri: "/AsynchroneNotif/ack",
            data: {
                id: notif_id
            },
            onsuccess: "AckSended",
            onerror: "AckSended_error"
        });
    }

    EXECUTE_ACTION(notif) {
        switch (notif.type_notif) {
            case 0:
                console.log("Guest Checked Out");
                this.ACK(notif.id);

                break;
            case 1:
                console.log("Guest Checked In");
                this.ACK(notif.id);

                break;
            case 2:
                console.log("Reset guest password");
                this.ACK(notif.id);

                break;
            case 3:
                console.log("Reset emp password");
                this.ACK(notif.id);
                SSAPI.destroy();
                break;
            case 4:
                console.log("Add guest");
                this.ACK(notif.id);

                break;
            case 5:
                console.log("Update guest");
                this.ACK(notif.id);

                break;
            case 6:
                console.log("Delete guest");
                this.ACK(notif.id);

                break;
            case 7:
                console.log("Add room");
                this.ACK(notif.id);

                break;
            case 8:
                console.log("Update Room");
                this.ACK(notif.id);

                break;
            case 9:
                console.log("Delete room");
                this.ACK(notif.id);

                break;
            case 10:
                console.log("Room not linked");
                this.ACK(notif.id);

                break;
            case 11:
                console.log("Add emp");
                this.ACK(notif.id);

                break;
            case 12:
                console.log("Update emp");
                this.ACK(notif.id);

                break;
            case 13:
                console.log("emp deleted");
                this.ACK(notif.id);
                SSAPI.destroy();
                break;
            case 14:
                console.log("Add device");
                this.ACK(notif.id);

                break;
            case 15:
                console.log("connect to device");
                this.ACK(notif.id);

                break;
            case 16:
                console.log("Update device");
                this.ACK(notif.id);

                break;
            case 17:
                console.log("Delete device");
                this.ACK(notif.id);

                break;
            case 18:
                console.log("checkout if privilege changed");
                this.ACK(notif.id);
                SSAPI.destroy();
                break;
            case 19:
                console.log("Notif all guests");
                this.ACK(notif.id);

                break;
            case 20:
                console.log("Notif for Men");
                this.ACK(notif.id);

                break;
            case 21:
                console.log("Notif for women");
                this.ACK(notif.id);

                break;
            case 22:
                console.log("promo without redirection (only visual)");
                this.ACK(notif.id);

                break;
            case 23:
                console.log("promo for a service(one of [Restaurant, bar, leisure, etc])");
                this.ACK(notif.id);

                break;
            case 24:
                console.log("promo for item(one of [food,bar_item])");
                this.ACK(notif.id);

                break;
            case 25:
                console.log("Push notification upload amk in server");
                this.ACK(notif.id);

                break;
            case 26:
                console.log("Push notification for download apk");
                this.ACK(notif.id);

                break;
            case 27:
                console.log("Push notification inform if application updated");
                this.ACK(notif.id);

                break;
            case 28:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 29:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 30:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 32:
                console.log("Emp deleted");
                this.ACK(notif.id);
                SSAPI.destroy();
                break;
            case 33:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 34:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 35:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;
            case 31:
                console.log("Emp deleted");
                this.ACK(notif.id);

                break;

        }
    }

    REQUIRED_ACTION_0(notifs){
        var list =[];
        for (var i =0;i<notifs.length;i++){
            if (notifs[i].required_action==0){
                list.push(notifs[i]);
            }
        }
        console.log(list,"22222222222222");
        return list;
    }

    PERIORITY(notifs){
        console.log("aaaaaaaa", notifs);
        var minP = -1;
        if (notifs.length>0){
            minP =0;
            for (var i=1;i<notifs.length;i++){
                minP = notifs[0]["priority"];
                if (notifs[minP]["priority"]>notifs[i]["priority"]) {
                    minP = i;
                }

            }
        }

        if (minP!=-1){
            return notifs[minP];
        }else {
            return false
        }
    }

    LUNCH(notifData) {
        console.log(notifData,"notifdata");
       if (notifData.length>0){
           var req = this.REQUIRED_ACTION_0(notifData);
           if (req.length==1){
               var event = new CustomEvent("NotificationReceive", {
                   detail:{
                       notif:req[0]
                   }
               });
               document.dispatchEvent(event);
           }else if (req.length>1){
               var per = this.PERIORITY(req);
               console.log("peeeeer",per);
               if (per){
                   var event1 = new CustomEvent("NotificationReceive", {
                       detail:{
                           notif:per
                       }
                   });
                   document.dispatchEvent(event1);
               }

           }else {
               var not = this.PERIORITY(notifData);
               if (not){
                   var event3 = new CustomEvent("NotificationReceive", {
                       detail:{
                           notif:not
                       }
                   });
                   document.dispatchEvent(event3);
               }

           }
       }
    }


    EVENTS_SSAPI() {
        document.addEventListener("CheckNotificationReceive", function (e) {
            console.log(e.detail.res, "e.detail.res");
            AsyncNotification.LUNCH(e.detail.res);
            setTimeout(function () {
                AsyncNotification.CHECK_NOTIF();
            }, 2000);
        }, false);
        document.addEventListener("NotificationReceive", function (e) {
            console.log("hobbbbbbb", e.detail.notif);
            AsyncNotification.EXECUTE_ACTION(e.detail.notif);
        }, false);

        document.addEventListener("CheckNotificationReceive_error", function (e) {
            console.log(e.detail);
        }, false);

        document.addEventListener("AckSended", function (e) {
            console.log("hahaha notification");

            /*iGuest.GET_ALL_GUESTS();
            setTimeout(function () {
                dati_table.UPDATE("guestList");
            },2000);*/
        }, false);
    }
}

let AsyncNotification = new AsyncNotif();