let Ui_Shifts = class {
    constructor() {
        this.Shifts = {};

        this.Shifts["mon"] = [];
        this.Shifts["tue"] = [];
        this.Shifts["wed"] = [];
        this.Shifts["thu"] = [];
        this.Shifts["fri"] = [];
        this.Shifts["sat"] = [];
        this.Shifts["sun"] = [];

    }

    GET_LIST_CHECKED_DAYS(id){
        var elem = $("[DATI-ID="+id+"]");

        var list=[];
        if ($(elem).find("[DATI-OPENING-DAY=mon]").is(':checked')){
            list.push('mon');
        }
        if ($(elem).find("[DATI-OPENING-DAY=tue]").is(':checked')){
            list.push('tue');
        }
        if ($(elem).find("[DATI-OPENING-DAY=wed]").is(':checked')){
            list.push('wed');
        }
        if ($(elem).find("[DATI-OPENING-DAY=thu]").is(':checked')){
            list.push('thu');
        }
        if ($(elem).find("[DATI-OPENING-DAY=fri]").is(':checked')){
            list.push('fri');
        }
        if ($(elem).find("[DATI-OPENING-DAY=sat]").is(':checked')){
            list.push('sat');
        }
        if ($(elem).find("[DATI-OPENING-DAY=sun]").is(':checked')){
            list.push('sun');
        }
        return list;
    }

    IS_VALID_TIME(time) {
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
        return isValid;
    }

    IS_VALID_SHIFT(open, close) {
        var time1 = Date.parse("01/01/2011 " + open);
        var time2 = Date.parse("01/01/2011 " + close);
        return time1 < time2;
    }

    COMPARE_SHIFTS(shift1, shift2) {
        if (shift2[0] > shift1[1]) {
            //shift2 > shift1 i++
            return 1;
        } else if (shift2[1] < shift1[0]) {
            //shift2 < shift1 return i and break
            return 2;
        } else if (shift2[0] < shift1[0] && shift2[1] > shift1[1]) {
            //shift1 inclus dans shift2 alert1
            return 3;
        } else if (shift2[0] > shift1[0] && shift2[1] < shift1[1]) {
            //shift2 inclus dans shift1 alert2
            return 4;
        } else {
            //error alert 3
            return 5;
        }
    }

    POS_INSERT_SHIFT(shifts, shift) {

        var pos;
        var i = 0;
        while (i < shifts.length) {
            var cmp = this.COMPARE_SHIFTS(shifts[i], shift);
            if (cmp === 1) {
                i++;
            }

            if (cmp === 2) {
                pos = i;
                break;
            }
            if (cmp === 3) {
                pos = -1;
                break;
            }
            if (cmp === 4) {
                pos = -2;
                break;
            }
            if (cmp === 5) {
                pos = -3;
                break;
            }
        }
        if (i == Object.keys(shifts).length) {
            return i;
        } else {
            return pos;
        }
    }

    SHIFT_PLACE(shifts, shift,alreadyExist1,alreadyExist2,alreadyExist3,day) {
        if (shifts.length === 0) {
            shifts[0] = shift;
        } else {
            var pos = this.POS_INSERT_SHIFT(shifts, shift);
            if (pos > -1) {
                //insert
                shifts.splice(pos, 0, shift);
            }
            if (pos === -1) {
                /*   alert("Shift already exist1");*/
                $("main").animate({ scrollTop: 0 }, '200');
                alreadyExist1.push(day);

            }
            if (pos === -2) {
                /*alert("Shift already exist2");*/
                $("main").animate({ scrollTop: 0 }, '200');
                alreadyExist2.push(day);

            }
            if (pos === -3) {
                /*  alert("Shift already exist3");*/
                $("main").animate({ scrollTop: 0 }, '200');
                alreadyExist3.push(day);

            }
        }

    }

    RESET_TABLE(id) {
        var elem = $("[DATI-ID="+id+"]");
        $(elem).find("[FIRST_SHIFT_MONDAY]").html("");
        $(elem).find("[SECOND_SHIFT_MONDAY]").html("");
        $(elem).find("[THIRD_SHIFT_MONDAY]").html("");

        $(elem).find("[FIRST_SHIFT_TUESDAY]").html("");
        $(elem).find("[SECOND_SHIFT_TUESDAY]").html("");
        $(elem).find("[THIRD_SHIFT_TUESDAY]").html("");

        $(elem).find("[FIRST_SHIFT_WEDNESDAY]").html("");
        $(elem).find("[SECOND_SHIFT_WEDNESDAY]").html("");
        $(elem).find("[THIRD_SHIFT_WEDNESDAY]").html("");

        $(elem).find("[FIRST_SHIFT_THURSDAY]").html("");
        $(elem).find("[SECOND_SHIFT_THURSDAY]").html("");
        $(elem).find("[THIRD_SHIFT_THURSDAY]").html("");

        $(elem).find("[FIRST_SHIFT_FRYDAY]").html("");
        $(elem).find("[SECOND_SHIFT_FRYDAY]").html("");
        $(elem).find("[THIRD_SHIFT_FRYDAY]").html("");

        $(elem).find("[FIRST_SHIFT_SATURDAY]").html("");
        $(elem).find("[SECOND_SHIFT_SATURDAY]").html("");
        $(elem).find("[THIRD_SHIFT_SATURDAY]").html("");

        $(elem).find("[FIRST_SHIFT_SUNDAY]").html("");
        $(elem).find("[SECOND_SHIFT_SUNDAY]").html("");
        $(elem).find("[THIRD_SHIFT_SUNDAY]").html("");

        $(elem).find("[dati-opening-time]").val("");
        $(elem).find("[dati-closing-time]").val("");

        $(elem).find("[dati-opening-day=mon]").prop('checked', false);
        $(elem).find("[dati-opening-day=tue]").prop('checked', false);
        $(elem).find("[dati-opening-day=wed]").prop('checked', false);
        $(elem).find("[dati-opening-day=thu]").prop('checked', false);
        $(elem).find("[dati-opening-day=fri]").prop('checked', false);
        $(elem).find("[dati-opening-day=sat]").prop('checked', false);
        $(elem).find("[dati-opening-day=sun]").prop('checked', false);






    }

    RESET_TABLE_DAY(day) {
        $("[FIRST_SHIFT_"+day+"_UPDATE]").html("");
        $("[SECOND_SHIFT_"+day+"_UPDATE]").html("");
        $("[THIRD_SHIFT_"+day+"_UPDATE]").html("");
    }

    ADD_SHIFT(id,listError,idError) {
        var closeTime = [];
        var formatTime = [];
        var fillShifts = [];
        var numShift = [];
        var alreadyExist1 = [];
        var alreadyExist2 = [];
        var alreadyExist3 = [];
        var obj;
        var obj_attr;
        var varname = listError;
        var indexDot = varname.indexOf(".") ;
        if(indexDot !== -1) {
             obj = varname.substr(0, indexDot);
             obj_attr = varname.substr(indexDot + 1, varname.length - (indexDot + 1));
           /* eval(obj)[obj_attr] = e.detail.res[0];*/
        }

        eval(obj)[obj_attr] =[];
        dati_Erreurs.UPDATE(idError);
        var listCheck = this.GET_LIST_CHECKED_DAYS(id);
        var elem = $("[DATI-ID="+id+"]");

        for (var i = 0; i < listCheck.length; i++) {
            var length = this.Shifts[listCheck[i]].length;

            if (length < 3) {
                if ($(elem).find("[DATI-OPENING-TIME]").val() != "" && $(elem).find("[DATI-CLOSING-TIME]").val() != "") {
                    if (this.IS_VALID_TIME($(elem).find("[DATI-OPENING-TIME]").val()) && this.IS_VALID_TIME($(elem).find("[DATI-CLOSING-TIME]").val())) {
                        if (this.IS_VALID_SHIFT($(elem).find("[DATI-OPENING-TIME]").val(), $(elem).find("[DATI-CLOSING-TIME]").val())) {

                            this.SHIFT_PLACE(this.Shifts[listCheck[i]], [$(elem).find("[DATI-OPENING-TIME]").val(), $(elem).find("[DATI-CLOSING-TIME]").val()],alreadyExist1,alreadyExist2,alreadyExist3,listCheck[i])

                        } else {
                            /* alert("closing time should be bigger than opening time ");*/
                            $("main").animate({ scrollTop: 0 }, '200');
                            closeTime.push(listCheck[i]);

                        }
                    } else {
                        /*  alert("time format not valid");*/
                        $("main").animate({ scrollTop: 0 }, '200');
                        formatTime.push(listCheck[i]);


                    }
                } else {
                    /* alert("fill the opening time shifts");*/
                    $("main").animate({ scrollTop: 0 }, '200');
                    fillShifts.push(listCheck[i]);

                }
            } else {
                $("main").animate({ scrollTop: 0 }, '200');
                numShift.push(listCheck[i]);
                /*   alert("you can't add more than 3 shifts per day");*/

            }

            if (this.Shifts["mon"][0]!= null){
                $(elem).find("[FIRST_SHIFT_MONDAY]").html("1.Opening : "+this.Shifts["mon"][0][0]+" Closing :"+this.Shifts["mon"][0][1]);
            }

            if (this.Shifts["mon"][1]!= null){
                $(elem).find("[SECOND_SHIFT_MONDAY]").html("1.Opening : "+this.Shifts["mon"][1][0]+" Closing :"+this.Shifts["mon"][1][1]);
            }

            if (this.Shifts["mon"][2]!= null){
                $(elem).find("[THIRD_SHIFT_MONDAY]").html("1.Opening : "+this.Shifts["mon"][2][0]+" Closing :"+this.Shifts["mon"][2][1]);
            }


            if (this.Shifts["tue"][0]!= null){
                $(elem).find("[FIRST_SHIFT_TUESDAY]").html("1.Opening : "+this.Shifts["tue"][0][0]+" Closing :"+this.Shifts["tue"][0][1]);
            }

            if (this.Shifts["tue"][1]!= null){
                $(elem).find("[SECOND_SHIFT_TUESDAY]").html("1.Opening : "+this.Shifts["tue"][1][0]+" Closing :"+this.Shifts["tue"][1][1]);
            }

            if (this.Shifts["tue"][2]!= null){
                $(elem).find("[THIRD_SHIFT_TUESDAY]").html("1.Opening : "+this.Shifts["tue"][2][0]+" Closing :"+this.Shifts["tue"][2][1]);
            }


            if (this.Shifts["wed"][0]!= null){
                $(elem).find("[FIRST_SHIFT_WEDNESDAY]").html("1.Opening : "+this.Shifts["wed"][0][0]+" Closing :"+this.Shifts["wed"][0][1]);
            }

            if (this.Shifts["wed"][1]!= null){
                $(elem).find("[SECOND_SHIFT_WEDNESDAY]").html("1.Opening : "+this.Shifts["wed"][1][0]+" Closing :"+this.Shifts["wed"][1][1]);
            }

            if (this.Shifts["wed"][2]!= null){
                $(elem).find("[THIRD_SHIFT_WEDNESDAY]").html("1.Opening : "+this.Shifts["wed"][2][0]+" Closing :"+this.Shifts["wed"][2][1]);
            }


            if (this.Shifts["thu"][0]!= null){
                $(elem).find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : "+this.Shifts["thu"][0][0]+" Closing :"+this.Shifts["thu"][0][1]);
            }

            if (this.Shifts["thu"][1]!= null){
                $(elem).find("[SECOND_SHIFT_THURSDAY]").html("1.Opening : "+this.Shifts["thu"][1][0]+" Closing :"+this.Shifts["thu"][1][1]);
            }

            if (this.Shifts["thu"][2]!= null){
                $(elem).find("[THIRD_SHIFT_THURSDAY]").html("1.Opening : "+this.Shifts["thu"][2][0]+" Closing :"+this.Shifts["thu"][2][1]);
            }


            if (this.Shifts["fri"][0]!= null){
                $(elem).find("[FIRST_SHIFT_FRYDAY]").html("1.Opening : "+this.Shifts["fri"][0][0]+" Closing :"+this.Shifts["fri"][0][1]);
            }

            if (this.Shifts["fri"][1]!= null){
                $(elem).find("[SECOND_SHIFT_FRYDAY]").html("1.Opening : "+this.Shifts["fri"][1][0]+" Closing :"+this.Shifts["fri"][1][1]);
            }

            if (this.Shifts["fri"][2]!= null){
                $(elem).find("[THIRD_SHIFT_FRYDAY]").html("1.Opening : "+this.Shifts["fri"][2][0]+" Closing :"+this.Shifts["fri"][2][1]);
            }


            if (this.Shifts["sat"][0]!= null){
                $(elem).find("[FIRST_SHIFT_SATURDAY]").html("1.Opening : "+this.Shifts["sat"][0][0]+" Closing :"+this.Shifts["sat"][0][1]);
            }

            if (this.Shifts["sat"][1]!= null){
                $(elem).find("[SECOND_SHIFT_SATURDAY]").html("1.Opening : "+this.Shifts["sat"][1][0]+" Closing :"+this.Shifts["sat"][1][1]);
            }

            if (this.Shifts["sat"][2]!= null){
                $(elem).find("[THIRD_SHIFT_SATURDAY]").html("1.Opening : "+this.Shifts["sat"][2][0]+" Closing :"+this.Shifts["sat"][2][1]);
            }


            if (this.Shifts["sun"][0]!= null){
                $(elem).find("[FIRST_SHIFT_SUNDAY]").html("1.Opening : "+this.Shifts["sun"][0][0]+" Closing :"+this.Shifts["sun"][0][1]);
            }

            if (this.Shifts["sun"][1]!= null){
                $(elem).find("[SECOND_SHIFT_SUNDAY]").html("1.Opening : "+this.Shifts["sun"][1][0]+" Closing :"+this.Shifts["sun"][1][1]);
            }

            if (this.Shifts["sun"][2]!= null){
                $(elem).find("[THIRD_SHIFT_SUNDAY]").html("1.Opening : "+this.Shifts["sun"][2][0]+" Closing :"+this.Shifts["sun"][2][1]);
            }


        }
        //erreur msg
        if(closeTime.length > 0){
            eval(obj)[obj_attr].push("closing time should be bigger than opening time");
            dati_Erreurs.UPDATE(idError);
        }
        if(formatTime.length > 0){
            eval(obj)[obj_attr].push("time format not valid");
            dati_Erreurs.UPDATE(idError);
        }
        if(fillShifts.length > 0){
            eval(obj)[obj_attr].push("fill the opening time shifts");
            dati_Erreurs.UPDATE(idError);
        }
        if(numShift.length > 0){
            eval(obj)[obj_attr].push("you can't add more than 3 shifts per day");
            dati_Erreurs.UPDATE(idError);
        }
        if(alreadyExist1.length > 0){
            eval(obj)[obj_attr].push("Shift already exist1");
            dati_Erreurs.UPDATE(idError);
        }
        if(alreadyExist2.length > 0){
            eval(obj)[obj_attr].push("Shift already exist2");
            dati_Erreurs.UPDATE(idError);
        }
        if(alreadyExist3.length > 0){
            eval(obj)[obj_attr].push("Shift already exist3");
            dati_Erreurs.UPDATE(idError);
        }
        //end erreur msg
    }

    UPDATE_SHIFT(id,selectedS,listErrorUp,idErrorUp) {
        var closeTimeUp = [];
        var formatTimeUp = [];
        var fillShiftsUp = [];
        var numShiftUp = [];
        var alreadyExist1Up = [];
        var alreadyExist2Up= [];
        var alreadyExist3Up = [];


        var obj;
        var obj_attr;
        var varname = listErrorUp;
        var indexDot = varname.indexOf(".") ;
        if(indexDot !== -1) {
            obj = varname.substr(0, indexDot);
            obj_attr = varname.substr(indexDot + 1, varname.length - (indexDot + 1));

        }

        eval(obj)[obj_attr] =[];
        dati_Erreurs.UPDATE(idErrorUp);
        var selectedService = eval(selectedS);


       if (selectedService.time_shift==null || selectedService.time_shift==""){

           var elem = $("[DATI-ID=" + id + "]");
           var listCheck = this.GET_LIST_CHECKED_DAYS(id);
           for (var i = 0; i < listCheck.length; i++) {
               var length = this.Shifts[listCheck[i]].length;
               if (length < 3) {
                   if ($(elem).find("[DATI-OPENING-TIME]").val() != "" && $(elem).find("[DATI-CLOSING-TIME]").val() != "") {
                       if (this.IS_VALID_TIME($(elem).find("[DATI-OPENING-TIME]").val()) && this.IS_VALID_TIME($(elem).find("[DATI-CLOSING-TIME]").val())) {
                           if (this.IS_VALID_SHIFT($(elem).find("[DATI-OPENING-TIME]").val(), $(elem).find("[DATI-CLOSING-TIME]").val())) {

                               this.SHIFT_PLACE(this.Shifts[listCheck[i]], [$(elem).find("[DATI-OPENING-TIME]").val(), $(elem).find("[DATI-CLOSING-TIME]").val()],alreadyExist1Up,alreadyExist2Up,alreadyExist3Up,listCheck[i])

                           } else {
                              /* alert("closing time should be bigger than opening time ");*/
                               $("main").animate({ scrollTop: 0 }, '200');
                               closeTimeUp.push(listCheck[i]);

                           }
                       } else {
                         /*  alert("time format not valid");*/
                           $("main").animate({ scrollTop: 0 }, '200');
                           formatTimeUp.push(listCheck[i]);


                       }
                   } else {
                      /* alert("fill the opening time shifts");*/
                       $("main").animate({ scrollTop: 0 }, '200');
                       fillShiftsUp.push(listCheck[i]);

                   }
               } else {
                   $("main").animate({ scrollTop: 0 }, '200');
                   numShiftUp.push(listCheck[i]);
                /*   alert("you can't add more than 3 shifts per day");*/

               }

               try {
                   if (this.Shifts["mon"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_MONDAY]").html("1.Opening : " + this.Shifts["mon"][0][0] + " Closing :" + this.Shifts["mon"][0][1]);
                   }
                   if (this.Shifts["mon"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_MONDAY]").html("1.Opening : " + this.Shifts["mon"][1][0] + " Closing :" + this.Shifts["mon"][1][1]);
                   }

                   if (this.Shifts["mon"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_MONDAY]").html("1.Opening : " + this.Shifts["mon"][2][0] + " Closing :" + this.Shifts["mon"][2][1]);
                   }


                   if (this.Shifts["tue"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_TUESDAY]").html("1.Opening : " + this.Shifts["tue"][0][0] + " Closing :" + this.Shifts["tue"][0][1]);
                   }

                   if (this.Shifts["tue"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_TUESDAY]").html("1.Opening : " + this.Shifts["tue"][1][0] + " Closing :" + this.Shifts["tue"][1][1]);
                   }

                   if (this.Shifts["tue"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_TUESDAY]").html("1.Opening : " + this.Shifts["tue"][2][0] + " Closing :" + this.Shifts["tue"][2][1]);
                   }


                   if (this.Shifts["wed"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_WEDNESDAY]").html("1.Opening : " + this.Shifts["wed"][0][0] + " Closing :" + this.Shifts["wed"][0][1]);
                   }

                   if (this.Shifts["wed"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_WEDNESDAY]").html("1.Opening : " + this.Shifts["wed"][1][0] + " Closing :" + this.Shifts["wed"][1][1]);
                   }

                   if (this.Shifts["wed"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_WEDNESDAY]").html("1.Opening : " + this.Shifts["wed"][2][0] + " Closing :" + this.Shifts["wed"][2][1]);
                   }


                   if (this.Shifts["thu"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + this.Shifts["thu"][0][0] + " Closing :" + this.Shifts["thu"][0][1]);
                   }

                   if (this.Shifts["thu"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_THURSDAY]").html("1.Opening : " + this.Shifts["thu"][1][0] + " Closing :" + this.Shifts["thu"][1][1]);
                   }

                   if (this.Shifts["thu"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_THURSDAY]").html("1.Opening : " + this.Shifts["thu"][2][0] + " Closing :" + this.Shifts["thu"][2][1]);
                   }


                   if (this.Shifts["fri"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_FRYDAY]").html("1.Opening : " + this.Shifts["fri"][0][0] + " Closing :" + this.Shifts["fri"][0][1]);
                   }

                   if (this.Shifts["fri"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_FRYDAY]").html("1.Opening : " + this.Shifts["fri"][1][0] + " Closing :" + this.Shifts["fri"][1][1]);
                   }

                   if (this.Shifts["fri"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_FRYDAY]").html("1.Opening : " + this.Shifts["fri"][2][0] + " Closing :" + this.Shifts["fri"][2][1]);
                   }


                   if (this.Shifts["sat"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_SATURDAY]").html("1.Opening : " + this.Shifts["sat"][0][0] + " Closing :" + this.Shifts["sat"][0][1]);
                   }

                   if (this.Shifts["sat"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_SATURDAY]").html("1.Opening : " + this.Shifts["sat"][1][0] + " Closing :" + this.Shifts["sat"][1][1]);
                   }

                   if (this.Shifts["sat"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_SATURDAY]").html("1.Opening : " + this.Shifts["sat"][2][0] + " Closing :" + this.Shifts["sat"][2][1]);
                   }


                   if (this.Shifts["sun"][0] != null) {
                       $(elem).find("[FIRST_SHIFT_SUNDAY]").html("1.Opening : " + this.Shifts["sun"][0][0] + " Closing :" + this.Shifts["sun"][0][1]);
                   }

                   if (this.Shifts["sun"][1] != null) {
                       $(elem).find("[SECOND_SHIFT_SUNDAY]").html("1.Opening : " + this.Shifts["sun"][1][0] + " Closing :" + this.Shifts["sun"][1][1]);
                   }

                   if (this.Shifts["sun"][2] != null) {
                       $(elem).find("[THIRD_SHIFT_SUNDAY]").html("1.Opening : " + this.Shifts["sun"][2][0] + " Closing :" + this.Shifts["sun"][2][1]);
                   }
               }catch (e) {

               }

           }

           //erreur msg
           if(closeTimeUp.length > 0){
                 eval(obj)[obj_attr].push("closing time should be bigger than opening time");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(formatTimeUp.length > 0){
                 eval(obj)[obj_attr].push("time format not valid");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(fillShiftsUp.length > 0){
                 eval(obj)[obj_attr].push("fill the opening time shifts");
               dati_Erreurs.UPDATE(idErrorUp);

           }
           if(numShiftUp.length > 0){
                 eval(obj)[obj_attr].push("you can't add more than 3 shifts per day");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(alreadyExist1Up.length > 0){
                 eval(obj)[obj_attr].push("Shift already exist1");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(alreadyExist2Up.length > 0){
                 eval(obj)[obj_attr].push("Shift already exist2");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(alreadyExist3Up.length > 0){
                 eval(obj)[obj_attr].push("Shift already exist3");
               dati_Erreurs.UPDATE(idErrorUp);

           }
           //end erreur msg
       }
       else {
           if(selectedService.time_shift["mon"]!=null){
               this.Shifts["mon"] = selectedService.time_shift["mon"];
           }else {
               this.Shifts["mon"]=[];
           }

           if(selectedService.time_shift["tue"]!=null){
               this.Shifts["tue"] = selectedService.time_shift["tue"];
           }else {
               this.Shifts["tue"]=[];
           }

           if(selectedService.time_shift["wed"]!=null){
               this.Shifts["wed"] = selectedService.time_shift["wed"];
           }else {
               this.Shifts["wed"]=[];
           }

           if(selectedService.time_shift["thu"]!=null){
               this.Shifts["thu"] = selectedService.time_shift["thu"];
           }else {
               this.Shifts["thu"]=[];
           }

           if(selectedService.time_shift["fri"]!=null){
               this.Shifts["fri"] = selectedService.time_shift["fri"];
           }else {
               this.Shifts["fri"]=[];
           }

           if(selectedService.time_shift["sat"]!=null){
               this.Shifts["sat"] = selectedService.time_shift["sat"];
           }else {
               this.Shifts["sat"]=[];
           }

           if(selectedService.time_shift["sun"]!=null){
               this.Shifts["sun"] = selectedService.time_shift["sun"];
           }else {
               this.Shifts["sun"]=[];
           }


           var elem = $("[DATI-ID=" + id + "]");
           var listCheck = this.GET_LIST_CHECKED_DAYS(id);
           for (var i = 0; i < listCheck.length; i++) {
               var length = this.Shifts[listCheck[i]].length;
               if (length < 3) {
                   if ($(elem).find("[DATI-OPENING-TIME]").val() != "" && $(elem).find("[DATI-CLOSING-TIME]").val() != "") {
                       if (this.IS_VALID_TIME($(elem).find("[DATI-OPENING-TIME]").val()) && this.IS_VALID_TIME($(elem).find("[DATI-CLOSING-TIME]").val())) {
                           if (this.IS_VALID_SHIFT($(elem).find("[DATI-OPENING-TIME]").val(), $(elem).find("[DATI-CLOSING-TIME]").val())) {

                               this.SHIFT_PLACE(this.Shifts[listCheck[i]], [$(elem).find("[DATI-OPENING-TIME]").val(), $(elem).find("[DATI-CLOSING-TIME]").val()],alreadyExist1Up,alreadyExist2Up,alreadyExist3Up,listCheck[i])

                           } else {
                               /* alert("closing time should be bigger than opening time ");*/
                               $("main").animate({ scrollTop: 0 }, '200');
                               closeTimeUp.push(listCheck[i]);

                           }
                       } else {
                           /*  alert("time format not valid");*/
                           $("main").animate({ scrollTop: 0 }, '200');
                           formatTimeUp.push(listCheck[i]);


                       }
                   } else {
                       /* alert("fill the opening time shifts");*/
                       $("main").animate({ scrollTop: 0 }, '200');
                       fillShiftsUp.push(listCheck[i]);

                   }
               } else {
                   $("main").animate({ scrollTop: 0 }, '200');
                   numShiftUp.push(listCheck[i]);
                   /*   alert("you can't add more than 3 shifts per day");*/

               }

               if (this.Shifts["mon"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_MONDAY]").html("1.Opening : " + this.Shifts["mon"][0][0] + " Closing :" + this.Shifts["mon"][0][1]);
               }

               if (this.Shifts["mon"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_MONDAY]").html("1.Opening : " + this.Shifts["mon"][1][0] + " Closing :" + this.Shifts["mon"][1][1]);
               }

               if (this.Shifts["mon"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_MONDAY]").html("1.Opening : " + this.Shifts["mon"][2][0] + " Closing :" + this.Shifts["mon"][2][1]);
               }


               if (this.Shifts["tue"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_TUESDAY]").html("1.Opening : " + this.Shifts["tue"][0][0] + " Closing :" + this.Shifts["tue"][0][1]);
               }

               if (this.Shifts["tue"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_TUESDAY]").html("1.Opening : " + this.Shifts["tue"][1][0] + " Closing :" + this.Shifts["tue"][1][1]);
               }

               if (this.Shifts["tue"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_TUESDAY]").html("1.Opening : " + this.Shifts["tue"][2][0] + " Closing :" + this.Shifts["tue"][2][1]);
               }


               if (this.Shifts["wed"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_WEDNESDAY]").html("1.Opening : " + this.Shifts["wed"][0][0] + " Closing :" + this.Shifts["wed"][0][1]);
               }

               if (this.Shifts["wed"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_WEDNESDAY]").html("1.Opening : " + this.Shifts["wed"][1][0] + " Closing :" + this.Shifts["wed"][1][1]);
               }

               if (this.Shifts["wed"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_WEDNESDAY]").html("1.Opening : " + this.Shifts["wed"][2][0] + " Closing :" + this.Shifts["wed"][2][1]);
               }


               if (this.Shifts["thu"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + this.Shifts["thu"][0][0] + " Closing :" + this.Shifts["thu"][0][1]);
               }

               if (this.Shifts["thu"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_THURSDAY]").html("1.Opening : " + this.Shifts["thu"][1][0] + " Closing :" + this.Shifts["thu"][1][1]);
               }

               if (this.Shifts["thu"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_THURSDAY]").html("1.Opening : " + this.Shifts["thu"][2][0] + " Closing :" + this.Shifts["thu"][2][1]);
               }


               if (this.Shifts["fri"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_FRYDAY]").html("1.Opening : " + this.Shifts["fri"][0][0] + " Closing :" + this.Shifts["fri"][0][1]);
               }

               if (this.Shifts["fri"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_FRYDAY]").html("1.Opening : " + this.Shifts["fri"][1][0] + " Closing :" + this.Shifts["fri"][1][1]);
               }

               if (this.Shifts["fri"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_FRYDAY]").html("1.Opening : " + this.Shifts["fri"][2][0] + " Closing :" + this.Shifts["fri"][2][1]);
               }


               if (this.Shifts["sat"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_SATURDAY]").html("1.Opening : " + this.Shifts["sat"][0][0] + " Closing :" + this.Shifts["sat"][0][1]);
               }

               if (this.Shifts["sat"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_SATURDAY]").html("1.Opening : " + this.Shifts["sat"][1][0] + " Closing :" + this.Shifts["sat"][1][1]);
               }

               if (this.Shifts["sat"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_SATURDAY]").html("1.Opening : " + this.Shifts["sat"][2][0] + " Closing :" + this.Shifts["sat"][2][1]);
               }


               if (this.Shifts["sun"][0] != null) {
                   $(elem).find("[FIRST_SHIFT_SUNDAY]").html("1.Opening : " + this.Shifts["sun"][0][0] + " Closing :" + this.Shifts["sun"][0][1]);
               }

               if (this.Shifts["sun"][1] != null) {
                   $(elem).find("[SECOND_SHIFT_SUNDAY]").html("1.Opening : " + this.Shifts["sun"][1][0] + " Closing :" + this.Shifts["sun"][1][1]);
               }

               if (this.Shifts["sun"][2] != null) {
                   $(elem).find("[THIRD_SHIFT_SUNDAY]").html("1.Opening : " + this.Shifts["sun"][2][0] + " Closing :" + this.Shifts["sun"][2][1]);
               }

           }

           //erreur msg
           if(closeTimeUp.length > 0){
                 eval(obj)[obj_attr].push("closing time should be bigger than opening time");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(formatTimeUp.length > 0){
                 eval(obj)[obj_attr].push("time format not valid");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(fillShiftsUp.length > 0){
                 eval(obj)[obj_attr].push("fill the opening time shifts");
               dati_Erreurs.UPDATE(idErrorUp);

           }
           if(numShiftUp.length > 0){
                 eval(obj)[obj_attr].push("you can't add more than 3 shifts per day");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(alreadyExist1Up.length > 0){
                 eval(obj)[obj_attr].push("Shift already exist1");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(alreadyExist2Up.length > 0){
                 eval(obj)[obj_attr].push("Shift already exist2");
               dati_Erreurs.UPDATE(idErrorUp);
           }
           if(alreadyExist3Up.length > 0){
                 eval(obj)[obj_attr].push("Shift already exist3");
               dati_Erreurs.UPDATE(idErrorUp);

           }
           //end erreur msg
       }

    }

    DELETE_SHIFT(datiId,sh1,sh2,sh3,day){
        $("[DATI-ID="+datiId+"]").find("["+sh1+"]").html("");
        $("[DATI-ID="+datiId+"]").find("["+sh2+"]").html("");
        $("[DATI-ID="+datiId+"]").find("["+sh3+"]").html("");
        this.Shifts[day] = []
    }
};

let Shifts_ui = new Ui_Shifts();