
let Ui_review = class {
    constructor() {

    }




    TOGGEL_REVIEW(id){

        $("[DATI-PAGE=detailServices]").find("[DATI-TOGGEL=review"+id+"]").on('click',function(){
            if( $(this).parent().find("[DATI-COMMENT=comment"+id+"]").css("display") == "none"){
                $("[DATI-PAGE=detailServices]").find("[DATI-COMMENT]").css("display", "none");
                $(this).parent().find("[DATI-COMMENT=comment"+id+"]").css("display", "block");
                $("[DATI-PAGE=detailServices]").find("[class=rate]").find("[DATI-active]").attr("src","/assets/img/sidebar/inactiveList.svg");
                $(this).find("[DATI-active]").attr("src","/assets/img/sidebar/activeList.svg");



            }else{
                $(this).parent().find("[DATI-COMMENT=comment"+id+"]").css("display", "none");
                $(this).find("[DATI-active]").attr("src","/assets/img/sidebar/inactiveList.svg");

            }

    })

    }

    REVIEW(list){
/*        var flag =list.Guest.country.code2.toLowerCase()*/
        return'<div class="review">'+
            '<div class="rate"  DATI-TOGGEL="review'+list.id+'">'+
            '<div class="guest_info" >'+
            '<img src="/assets/img/profile.png"  alt="Photo Guest">'+
            '<p class="name">'+list.Guest.f_name+" "+list.Guest.l_name+' </p>'+
         /*   '<img src="https://lipis.github.io/flag-icon-css/flags/4x3/'+flag+'.svg" style="width: 32px;">'+*/
            '<p class="date">'+list.date+'</p>'+
            '</div>'+
            '<div class="rating" style="display: flex;color: #ffde66;" >'+
            '<p repeat="'+list.note+'">  &#9733   </p>'+
            '</div>'+
            '<img DATI-active src="/assets/img/sidebar/inactiveList.svg" style="height: 6px;" alt="Dish"> </div>'+
            '<p DATI-COMMENT="comment'+list.id+'" class="comment">'+list.comment+'</p>'+
            '</div>'
    }



    UPDATE(id){



        var reviews = $("[DATI-ID="+id+"]");

        var lists_name = $(reviews).attr("DATI-LIST");

        var lists = eval(lists_name);

        $(reviews).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var item = "";
            item += this.REVIEW(list);
            $(reviews).append(item);
            $('[repeat]').each(function() {
                var toRepeat = $(this).text();
                var times = parseInt($(this).attr('repeat'));
                var repeated = Array(times+1).join(toRepeat);
                $(this).text(repeated).removeAttr('repeat');
            });
            this.TOGGEL_REVIEW(list.id);
        }



    }



/*
    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=reviews]");
        console.log(myComposents,"myComposents");

        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            console.log($(myComposent).attr("dati-update"),"update");
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }

    }
*/

/*    LUNCH(eventName,id){
        console.log(eventName,"eventName");
        console.log("dkhalet f show 3");
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_reviews.UPDATE(id);
            }, 100);
        }, false);

    }*/


}



let dati_reviews = new Ui_review();