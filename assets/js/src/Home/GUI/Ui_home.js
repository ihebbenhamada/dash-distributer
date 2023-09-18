class Ui_home {
    constructor() {
        this.EVENTS_UI();
        this.cards=[];

    }

    DATALIST(data){
        console.log(888888888);
        console.log(data.list,"myyList hotel");
        this.cards = data.list;

    }

    CARD_CONTAINER(list){
        return    '<div class="card_item" DATI-LINK='+list.link+'>'+
            '<div class="card_item_cover" style="background-image: url('+list.img+');"></div>'+
            '</div>'


    }
    UPDATE(id){
console.log(id,"ahawaaaaaaaaaaaaaaaaaa");
        var sectionList = $("[DATI-ID="+id+"]");
        var lists_name = $(sectionList).attr("DATI-LIST");
        var lists = eval(lists_name);
        $(sectionList).html("");
        console.log(lists,"sectionList");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var cardItem = "";
            cardItem += this.CARD_CONTAINER(list);
            $(sectionList).append(cardItem);

        }
    }

    EVENTS_UI(){

    }
}

let home_ui = new Ui_home();