class Ui_employee {
    constructor() {
        this.EVENTS_UI();
        this.cards=[];
        this.Authorisation=[];
        this.HeaderList=[];
        this.HistoryList=[];

    }

    DATALIST(data){
        this.cards = data.list;

    }
    DATALIST_AUTHORISATION(data){
        this.Authorisation = data.list;
        console.log(data.list,"rrrrrrrrrrrr");
    }
    DATALIST_HEADER(data){
        this.HeaderList = data.list;
        console.log(data.list,"Headerrrrr");
    }
    DATALIST_HISTORY(data){
        this.HistoryList = data.list;
        console.log(data.list,"historyList");
    }

    CARD_CONTAINER(list){
        return '<div class="emp_info">'+
            '<div class="Header_user">'+
           '<div class="image_user">'+
            '<img src='+list.img+'>'+
            '</div>'+
            '<div class="user_actions">'+
            '<div class="user_actions_button">'+
            '<i  class="fas fa-pencil-alt edit_pen" src="/assets/img/ui/editPen.svg"  DATI-LINK="EditEmpolyeeDati"></i>'+
            '<i class="fas fa-list"  DATI-LINK="HistoryEmpolyeeDati"></i>'+
            '<i  class="far fa-trash-alt delete_icon" src="/assets/img/restaurant/delete_button.png"  ></i>'+
            '</div>'+
            '<div class="opener"><i style="cursor: pointer;    color: #111f35;" class="fas fa-ellipsis-v"></i></div>'+
        '</div>'+
        '</div>'+
        '<div class="body_user">'+
            '<div class="info">'+
            '<label>Name :</label>'+
        '<span>'+list.name+'</span>'+
        '</div>'+
        '<div class="info">'+
            '<label>Date of Birth</label>'+
        '<span>'+list.date_birth+'</span>'+
        '</div>'+
        '<div class="info">'+
            '<label>CIN :</label>'+
        '<span>'+list.cin+'</span>'+
        '</div>'+



        '<div class="info">'+
            '<label>Job :</label>'+
        '<span>'+list.job+'</span>'+
        '</div>'+

        '<div class="info">'+
         '<label>Username :</label>'+
        '<span>'+list.username+'</span>'+
        '</div>'+
        '</div>'+
       '</div>'


    }
    UPDATE(id){

        var employeeList = $("[DATI-ID="+id+"]");
        var lists_name = $(employeeList).attr("DATI-LIST");
        var lists = eval(lists_name);
        $(employeeList).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var cardItem = "";
            cardItem += this.CARD_CONTAINER(list);
            $(employeeList).append(cardItem);

        }
    }
    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            console.log(777777777);
            setTimeout(function(){
                employee_ui.UPDATE(id)
            }, 100);
        }, false);
    }
    FORM_ADD_Employee(element){
        console.log("add employee testt")
            var first_name = $(element).find("[DATI-FIRST-NAME-EMPLOYEE]").val();
            var last_name = $(element).find("[DATI-LAST-NAME-EMPLOYEE]").val();
            var job = $(element).find("[DATI-JOB-EMPLOYEE]").val();
            var cin = $(element).find("[DATI-CIN-EMPLOYEE]").val();
            var date_of_birth = $(element).find("[DATI-BD-EMPLOYEE]").val();
            var username = $(element).find("[DATI-USERNAME-EMPLOYEE]").val();
            var email = $(element).find("[DATI-EMAIL-EMPLOYEE]").val();
            var password =  $(element).find("[DATI-PASSWORD-EMPLOYEE]").val();
            var emailContact= $(element).find("[DATI-EMAILCONTACT-EMPLOYEE]").val();
            var phone = $(element).find("[DATI-PHONE-EMPLOYEE]").val();

                var data = {
                    first_name: first_name,
                    last_name: last_name,
                    job:job,
                    cin: cin,
                    date_of_birth: date_of_birth,
                    username:username,
                    email:email,
                    password: password,
                    emailContact:emailContact,
                    phone: phone

                };
                 console.log(data,"data"),
                iEmployee.ADD_EMPLOYEE_API(data);

            }



    EVENTS_UI(){
        $(document).ready(function() {
            var myComposents = document.querySelectorAll("[DATI-COMPOSENT=ListCards]");
            for(var i=0; i<myComposents.length;i++){
                var myComposent = myComposents[i];
                if($(myComposent).attr("dati-update")){
                    employee_ui.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
                }
            }

        });
 //*********************************** SHOW CURRENT FORM EDIT EMPLOYEE**********************************//
        $(document).on("click", "[DATI-FIELDSET-BUTTON]", function () {
         var currentDisplay = $(this).attr("DATI-FIELDSET-BUTTON");
         $("[DATI-FIELDSET-BUTTON]").css("background-color","#fff");
         $("[DATI-FIELDSET-BUTTON]").css("color","#111f35");
         $("[DATI-FIELDSET-BUTTON="+currentDisplay+"]").css("background-color","#111f35");
         $("[DATI-FIELDSET-BUTTON="+currentDisplay+"]").css("color","#fff");
         $("[DATI-FIELDSET]").css("display","none");
         $("[DATI-FIELDSET="+currentDisplay+"]").css("display","inline-block");
        });

//***************************** ADD FORM EMPLOYEE*******************//
        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Employee]',function() {
                console.log("eeeeeeeeeeeeee");
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });
    }
};

let employee_ui = new Ui_employee();