let Ui_topReservations = class {
    constructor() {
        this.EVENTS_UI();
        this.Tops=[];
    }


    DATALIST(data){
        this.Tops = data.res;
    }



    TOP(){
        return '<table>'+
            '<thead>'+
            '<th> Top Reservations</th>'+
            '</thead>'+
            '<tbody DATI-TABLE="RESERVATIONS">'+
            '</tbody>'+
            '</table>'
    }

    TOPITEM(i , name){
        return  '<tr>'+
            '<td> '+(i+1)+' . '+name+' </td>'+
            '</tr>'
    }
    UPDATE(id){
        var topReservations = $("[DATI-ID="+id+"]");
        $(topReservations).html("");
        var containeReservation = this.TOP();
        $(topReservations).append(containeReservation);
        var lists_name = $(topReservations).attr("DATI-LIST");
        var lists = eval(lists_name);
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var item = "";
            try {
                item += this.TOPITEM( i , list.Reserved_item.title);
            }catch (e) {

            }

            var itemContainer = $(topReservations).find("[DATI-TABLE=RESERVATIONS]");
            $(itemContainer).append(item);
        }


    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=topReservations]");
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
                dati_topReservations.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_topReservations = new Ui_topReservations();