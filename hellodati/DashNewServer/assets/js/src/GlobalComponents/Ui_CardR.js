let Ui_cardR = class {
    constructor() {
        this.EVENTS_UI();
    }







    CART_BLOCK(id,link, blink,path){
        if(blink != null){
            return  '<div class="restaurant_card"  DATI-DISPLAY="flex" DATI-ID="'+id+'" style="position: relative">' +
                '<div DATI-LINK="'+link+'" DATI-PATH="'+path+'" DATI-BEFORE-LINK="'+blink+'" style="display: inline-block; width: 100%; z-index: 2; height: 100%; position: absolute; left: 0px; top: 0px;"></div>' +
                '</div>';
        }else{
            return  '<div class="restaurant_card"  DATI-DATI-DISPLAY="flex" DATI-ID="'+id+'" style="position: relative">' +
                '<div DATI-LINK="'+link+'" DATI-PATH="'+path+'" style="display: inline-block; width: 100%; z-index: 2; height: 100%; position: absolute; left: 0px; top: 0px;"></div>' +
                '</div>';
        }

    }
    DESCRIPTION_BLOCK(title,description,imgDetail,imgEdit,imgDelete,iconCard){
        if(imgDetail == null){
            imgDetail = "";
        }
        if(imgEdit == null){
            imgEdit = "";
        }
        if(imgDelete == null){
            imgDelete = "";
        }

        return  ' <div class="description_container">'+
            ' <img src="'+iconCard+'" alt="Dish">'+
            '<p class="title">'+title+'</p>'+
            '  <p class="description">'+description+'</p>'+
            ' <div class="restaurant_actions">'+
             imgEdit+imgDetail+imgDelete+
            '   </div>'+
            '   </div>'
            ;
    }
    IMAGE_BLOCK(image){

        return  ' <div class="image"  IMAGE-BLOCK="yes" style="background-image: url('+image+');">'+

            '  </div>'
            ;
    }
    SWITCHER(is_check,list,style, global_list,id,switch_change){

        return '<div  class="switcherContainer"\n' +
            '  DATI-COMPOSENT="switcherContainer"\n' +
            '  DATI-ID="'+id+'"\n' +
            '  DATI-UPDATE="ToggelSwitcher"\n' +
            'DATI-CHANGE="'+switch_change+'('+global_list+')"' +
            'DATI-DEFAULt_VALUE="'+is_check+'"' +
            '  style="'+style+'">\n' +
            '\n' +
            '\n' +
            '  </div>';
    }

    ATTRIBUTES(element){
        var attributs = "";
        $(element).each(function() {

            $.each(this.attributes, function() {
                // this.attributes is not a plain object, but an array
                // of attribute nodes, which contain both the name and value
                if(this.specified) {
                    attributs=attributs+' '+this.name+' = "'+this.value+'"';
                }
            });
        });
        return attributs;
    }

    UPDATE(id){

        var rc = $("[DATI-ID="+id+"]");
        var sw = $(rc).attr("DATI-SWITECH");
        var lists_name = $(rc).attr("DATI-LIST");
        if($(rc).attr("CARDS-BEFORE-LINK")){
            var before_link= $(rc).attr("CARDS-BEFORE-LINK");
        }
        var iconCard = $(rc).attr("DATI-ICON-CARD");
        if($(rc).find("[DATI-COMPOSENT=RestaurantCards-icon-detail]").attr("DATI-COMPOSENT")){
            var imgDetail = '<img '+this.ATTRIBUTES($(rc).find("[DATI-COMPOSENT=RestaurantCards-icon-detail]"))+' src="/assets/img/restaurant/info_bulle.png" alt="Info">'
        }else{
            var imgDetail = null;
        }
        if($(rc).find("[DATI-COMPOSENT=RestaurantCards-icon-edit]").attr("DATI-COMPOSENT")){
            var imgEdit = '<img '+this.ATTRIBUTES($(rc).find("[DATI-COMPOSENT=RestaurantCards-icon-edit]"))+' src="/assets/img/restaurant/edit_button.png" alt="Edit">'
        }else{
            var imgEdit = null;
        }
        if($(rc).find("[DATI-COMPOSENT=RestaurantCards-icon-delete]").attr("DATI-COMPOSENT")){
            var imgDelete = '<img '+this.ATTRIBUTES($(rc).find("[DATI-COMPOSENT=RestaurantCards-icon-delete]"))+' src="/assets/img/restaurant/delete_button.png" alt="Delete">'
        }else{
            var imgDelete= null;
        }
        var lists = eval(lists_name);
        var link = $(rc).attr("CARDS-LINK");
        var path = $(rc).attr("CARDS-PATH");
        var switch_change = $(rc).attr("DATI-SWITECH-TOGGOLE");
        $(rc).html("");
        if(lists.length <= 0) {
            if(imgDetail != null){
                var vll = $(rc).html()+imgDetail;
                $(rc).html(vll);
            }
            if(imgEdit != null){
                var vll = $(rc).html()+imgEdit;

                $(rc).html(vll);
            }
            if(imgDelete != null){
                var vll = $(rc).html()+imgDelete;
                $(rc).html(vll);
            }
            $(rc).css("display","none");
        }else{
            $(rc).css("display","contents");
        }
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            if($(rc).attr("CARDS-BEFORE-LINK")) {
                var before_linki = before_link + "(" + lists_name + "["+i+"])";
            }else {
                before_linki = null;
            }
            if($(rc).attr("CARDS-LINK")) {
                var link_to = link;
                var path_to = path+list.title;
            }else {
                link_to = "#";
            }
            var cardRestau = "";
            cardRestau += this.CART_BLOCK(list.id,link_to, before_linki,path_to);
            $(rc).append(cardRestau);
            var cardBlock = $(rc).find("[DATI-ID="+list.id+"]");

            var descriptionBlock="";
                 descriptionBlock = this.DESCRIPTION_BLOCK(list.title,list.descrip, imgDetail,imgEdit,imgDelete,iconCard);
            $(cardBlock).append(descriptionBlock);
            var imageBlock = this.IMAGE_BLOCK(list.image);
            $(cardBlock).append(imageBlock);
            var card_id = id+'_'+list.id;
            var s = this.SWITCHER(list.enable, list, sw, lists_name+"["+i+"]", card_id, switch_change);
            var blockImage = $(cardBlock).find("[IMAGE-BLOCK=yes]");
            $(cardBlock).append(s);
            dati_switcher.ADD_TO_DOM(card_id);

        }
    }

    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=RestaurantCards]");
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
                dati_cardRestaurant.UPDATE(id)
            }, 100);
        }, false);
    }

}



let dati_cardRestaurant = new Ui_cardR();