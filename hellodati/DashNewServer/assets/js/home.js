
$(document).on('click','.dashboard_sidebar [FOR-ITIEM-LIST]',function(){
    var item = $(this).attr("FOR-ITIEM-LIST");

    var display = $("[ITIEM-LIST=" + item + "]").css("display");
    if (display == "block") {
        $("[ITIEM-LIST=" + item + "]").css("display", "none");
    } else {
        $("[ITIEM-LIST]").css("display", "none");
        $("[ITIEM-LIST=" + item + "]").css("display", "block");
    }

});





