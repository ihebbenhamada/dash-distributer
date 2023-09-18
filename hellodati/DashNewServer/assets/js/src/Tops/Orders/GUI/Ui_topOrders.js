let Ui_topOrders = class {
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
        '<th> Top orders </th>'+
        '</thead>'+
        '<tbody DATI-TABLE="ORDERS">'+
        '</tbody>'+
        '</table>'
    }

    TOPITEM(i , name){
        return  '<tr>'+
        '<td> '+(i+1)+' . '+name+' </td>'+
        '</tr>'
    }
    UPDATE(id){
        var topOrders = $("[DATI-ID="+id+"]");
        $(topOrders).html("");
        var containeOrder = this.TOP();
        $(topOrders).append(containeOrder);
        var lists_name = $(topOrders).attr("DATI-LIST");
        var lists = eval(lists_name);
       for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var item = "";
            item += this.TOPITEM( i , list.item.name);
            var itemContainer = $(topOrders).find("[DATI-TABLE=ORDERS]");
           $(itemContainer).append(item);
        }


    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=topOrders]");
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
                dati_topOrders.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_topOrders = new Ui_topOrders();