let Ui_cardSer = class {
    constructor() {
        this.EVENTS_UI();
    }




    GET_LINK(type){
        switch (type) {
            case 1:
                return "Restaurant";
                break;
            case 2:
                return "Bar";
                break;
            case 3:
                return "Leisure";
                break;
            case 4:
                return "Well-being";
                break;
            case 5:
                return "Events";
                break;
            case 6:
                return "Meetings";
                break;
            case 7:
                return "ConciergePage";
                break;
            case 8:
                return "ContactUs";
                break;

        }
    }

    CART_BLOCK(id,title,bg,service_type){
        if(service_type == 1){
            var color = "rgb(116,144,75)"
        }else{
            var color = "#FFFFFF"
        }

        return  '<div class="service_card"   DATI-ID="'+id+'" style="background-image: url('+bg+');" onClick="serviceCard_ui.SETSELECTED_SER(this)">' +
            '<p class="title" style="color:'+color+'">'+title+'</p>' +
            '<div DATI-DISPLAY="flex"  DATI-LINK="'+this.GET_LINK(service_type)+'" style="display: inline-block; width: 100%; height: 100%; position: absolute; left: 0px; top: 0px"></div>' +
            '</div>';
    }

    INTERACTION(is_check,id,display,views,clicks,imgEdit, global_list){
        if(imgEdit == null){
            imgEdit = "";
        }
        if(is_check){
            return '<div class="service_action">' +
                '<img src="/assets/img/services/vue.svg"  onclick="iServiceCard.ENABLE_SERVICE('+global_list+')" alt="views" title="disable this service">'+
                '<p class="affichage">'+display+' Atteint</p>' +
                ' <p class="views">'+views+'  Views</p>' +
                '<p class="click">'+clicks+' clicks</p>' +
                imgEdit +
                '</div>';
        }else{
            return '<div class="service_action">' +
                '<img src="/assets/img/services/vueDisable.svg"  onclick="iServiceCard.ENABLE_SERVICE('+global_list+')" alt="views" title="enable  this service" >'+
                '<p class="affichage">'+display+' Atteint</p>' +
                ' <p class="views">'+views+'  Views</p>' +
                '<p class="click">'+clicks+' clicks</p>' +
                imgEdit +
                '</div>';
        }

    }

    SWITCHER(is_check,list,style, global_list){

        return '<div  class="switcherContainer"\n' +
            '  DATI-COMPOSENT="switcherContainer"\n' +
            '  DATI-ID="serviceCards'+list.id+'"\n' +
            '  DATI-UPDATE="ToggelSwitcher"\n' +
            'DATI-CHANGE="iServiceCard.ENABLE_SERVICE('+global_list+')"' +
            'DATI-DEFAULt_VALUE="'+is_check+'"' +
            '  style="display: none">\n' +
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
        var sc = $("[DATI-ID="+id+"]");
        var sw = $(sc).attr("DATI-SWITECH");
        var lists_name = $(sc).attr("DATI-LIST");
        var lists = eval(lists_name);
        if($(sc).find("[DATI-COMPOSENT=ServiceCards-icon-edit]").attr("DATI-COMPOSENT")){
            var imgEdit = '<img '+this.ATTRIBUTES($(sc).find("[DATI-COMPOSENT=ServiceCards-icon-edit]"))+' src="/assets/img/services/editService.png" alt="Info">'
        }else{
            var imgEdit = null;
        }


        $(sc).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var cardService = "";
            cardService += this.CART_BLOCK(list.id, list.name,list.Service_Type.img_dash,list.Service_Type.id);
            var s = this.SWITCHER(list.enable, list, sw, lists_name+"["+i+"]");
            $(sc).append(cardService);
            var cardBlock = $(sc).find("[DATI-ID=" + list.id + "]");
            $(cardBlock).append(s);
            dati_switcher.ADD_TO_DOM("serviceCards" + list.id);

            var inter = this.INTERACTION(list.enable, list.id, list.atteint, list.num_views, list.clicked ,imgEdit, lists_name+"["+i+"]");
            $(cardBlock).append(inter);
        }
        //document.getElementById('serviceCardContainer').innerHTML = cardService;////
    }

    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=ServiceCards]");

        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                document.addEventListener($(myComposent).attr("dati-update"), function(e){
                    setTimeout(function(){
                        dati_cardService.UPDATE($(myComposent).attr("dati-id"))
                    }, 100);
                }, false);
            }
        }
    }

};

let dati_cardService = new Ui_cardSer();