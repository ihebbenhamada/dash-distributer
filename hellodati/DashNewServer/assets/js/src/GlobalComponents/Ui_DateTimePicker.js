let DateTimePicker = class {

    constructor() {
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.date = new Date();
        this.currentDay = this.date.getDate();
        this.currentmonth = this.date.getMonth();
        this.currentYear = this.date.getFullYear();
        this.timeFrom = null;
        this.timeTo = null;
        this.selectedDayFrom = null;
        this.selectedDayTo = null;
        this.selectedMonthFrom = null;
        this.selectedMonthTo = null;
        this.selectedYearFrom = 2030;
        this.selectedYearTo = null;
        this.selectedDateFrom = null;
        this.selectedDateTo = null;
        this.clickedDate = null;
        this.status = false;
        this.selecteddatefilter = "";
        this.functionGetBetweenTwoDates = "";
        this.optionsDefaultDate = {
            "Select Date": -1,
            "Today": "today",
            "This Month": "thisMonth",
            "One Month": "oneMonth",
            "Last Month": "lastMonth",
            "This Year": "thisYear",
            "One Year": "oneYear",
            "Last Year": "lastYear",

        };
        /*this.selectedDateTo = this.selectedDayTo+"/"+(this.selectedMonthTo+1)+"/"+this.selectedYearTo;*/
        this.EVENTS_UI();

        this.selectedDate = [];
    }


    // function onchange(dati-id, function){}
    SET_TODAY(id, day, month, year) {

        this.selectedDateFrom = day + "/" + month + "/" + year;
        this.selectedDateTo = day + "/" + month + "/" + year;
        this.selectedDayFrom = day;
        this.selectedDayTo = day;
        this.selectedMonthFrom = month;
        this.selectedMonthTo = month;
        this.selectedYearFrom = year;
        this.selectedYearTo = year;
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);
    }
    SET_THIS_MONTH(id, month, year) {
        this.selectedDateFrom = 1 + "/" + (month + 1) + "/" + year;
        this.selectedDateTo = this.currentDay + "/" + (month + 1) + "/" + year;
        this.selectedDayFrom = 1;
        this.selectedDayTo = this.currentDay;
        this.selectedMonthFrom = month;
        this.selectedMonthTo = month;
        this.selectedYearFrom = year;
        this.selectedYearTo = year;
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);
    }
    SET_ONE_MONTH(id, month, year) {
        var m = month;
        var day = this.currentDay;
        var dayfrom = null;
        var monthfrom = null;
        var yearFrom = null;
        var lastDay = this.AMAOUNT_DAYS(m, year);
        if (this.currentDay == lastDay) {
            dayfrom = 1;
            monthfrom = month;
            yearFrom = year;
        } else {
            var date = this.currentYear + "-" + month + "-" + day;
            var dt = new Date(date);
            dt.setDate(dt.getDate() - 30);
            dayfrom = dt.getDate();
            monthfrom = dt.getMonth() + 1;
            yearFrom = dt.getFullYear();
            console.log(dt);
        }
        this.selectedDateFrom = dayfrom + "/" + monthfrom + "/" + yearFrom;
        this.selectedDateTo = this.currentDay + "/" + month + "/" + year;
        this.selectedDayFrom = dayfrom;
        this.selectedDayTo = this.currentDay;
        this.selectedMonthFrom = monthfrom;
        this.selectedMonthTo = month;
        this.selectedYearFrom = yearFrom;
        this.selectedYearTo = year;
        console.log(monthfrom, "mlmlmlmlmmlll");
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);
    }
    SET_LAST_MONTH(id, month, year) {
        var m = month - 1;
        var y = year;
        if (m < 0) {
            m = 11;
            y--;
        }
        var lastDay = this.AMAOUNT_DAYS(m - 1, year);
        this.selectedDateFrom = "1/" + m + "/" + y;
        this.selectedDateTo = lastDay + "/" + m + "/" + y;
        this.selectedDayFrom = 1;
        this.selectedDayTo = lastDay;
        this.selectedMonthFrom = m;
        this.selectedMonthTo = m;
        this.selectedYearFrom = y;
        this.selectedYearTo = y;
        console.log(m, "mamamam");
        console.log(this.selectedDateTo, "22222");
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);

    }
    SET_THIS_YEAR(id, month, year) {

        this.selectedDateFrom = "1/1/" + year;
        this.selectedDateTo = this.currentDay + "/" + month + "/" + year;
        this.selectedDayFrom = 1;
        this.selectedDayTo = this.currentDay;
        this.selectedMonthFrom = 1;
        this.selectedMonthTo = month;
        this.selectedYearFrom = year;
        this.selectedYearTo = year;
        console.log(this.selectedDateFrom, "11111");
        console.log(this.selectedDateTo, "22222");
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);

    }
    SET_ONE_YEAR(id, month, year) {
        this.selectedDateFrom = this.currentDay + "/" + month + "/" + (year - 1);
        this.selectedDateTo = this.currentDay + "/" + month + "/" + year;
        this.selectedDayFrom = this.currentDay;
        this.selectedDayTo = this.currentDay;
        this.selectedMonthFrom = month;
        this.selectedMonthTo = month;
        this.selectedYearFrom = (year - 1);
        this.selectedYearTo = year;
        console.log(this.selectedDateFrom, "11111");
        console.log(this.selectedDateTo, "22222");
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);

    }
    SET_LAST_YEAR(id, month, year) {
        this.selectedDateFrom = 1 + "/1/" + (year - 1);
        this.selectedDateTo = 31 + "/12/" + (year - 1);
        this.selectedDayFrom = 1;
        this.selectedDayTo = 31;
        this.selectedMonthFrom = 1;
        this.selectedMonthTo = 12;
        this.selectedYearFrom = (year - 1);
        this.selectedYearTo = (year - 1);
        console.log(this.selectedDateFrom, "11111");
        console.log(this.selectedDateTo, "22222");
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);

    }
    SET_FROM_TO(id, month, year) {
        var datefrom = this.selectedDayFrom + "/" + (this.selectedMonthFrom + 1) + "/" + this.selectedYearFrom + " " + $("[DATI-ID=" + id + "]").find("[dati-id=Fromtime]").val();
        var dateto = this.selectedDayTo + "/" + (this.selectedMonthTo + 1) + "/" + this.selectedYearTo + " " + $("[DATI-ID=" + id + "]").find("[dati-id=Totime]").val();
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] .mth').html(this.months[this.selectedMonthFrom - 1] + ' ' + this.selectedYearFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=fromDate] [MONTH-FROM]').attr("MONTH-FROM", this.selectedMonthFrom);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] .mth').html(this.months[this.selectedMonthTo - 1] + ' ' + this.selectedYearTo);
        $("[DATI-ID=" + id + "]").find('[DATI-ID=ToDate] [MONTH-TO]').attr("MONTH-TO", this.selectedMonthTo);

    }
    SET_VALUE_SELECTED_DATE() {
        var indexDot = this.selecteddatefilter.indexOf(".");
        if (indexDot !== -1) {
            var obj = this.selecteddatefilter.substr(0, indexDot);
            var obj_attr = this.selecteddatefilter.substr(indexDot + 1, this.selecteddatefilter.length - (indexDot + 1));
            console.log(obj + "sdsq", "classname");
            eval(obj)[obj_attr]["datefrom"] = dati_date_time_picker.selectedYearFrom + "-" + (dati_date_time_picker.selectedMonthFrom) + "-" + dati_date_time_picker.selectedDayFrom;
            eval(obj)[obj_attr]["dateto"] = dati_date_time_picker.selectedYearTo + "-" + (dati_date_time_picker.selectedMonthTo) + "-" + dati_date_time_picker.selectedDayTo;
        } else {
            window[this.selecteddatefilter]["datefrom"] = null;
        }
    }
    DEFAULT_SELECTED_DATE(id, defaultValue) {
        var date = new Date();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var day = date.getDate();
        console.log(this.functionGetBetweenTwoDates, "function************");
        console.log(this.selecteddatefilter, "function************");
        if (defaultValue.toUpperCase() == "today".toUpperCase()) {
            this.SET_TODAY(id, day, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + this.selectedDayFrom + "/" + this.selectedMonthFrom + "/" + this.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px'> To: </font>" + this.selectedDayTo + "/" + this.selectedMonthTo + "/" + this.selectedYearTo);
        } else if (defaultValue.toUpperCase() == "thisMonth".toUpperCase()) {
            this.SET_THIS_MONTH(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + "01" + "/" + this.selectedMonthFrom + "/" + this.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px'> To: </font>" + this.currentDay + "/" + this.selectedMonthTo + "/" + this.selectedYearTo);
        } else if (defaultValue.toUpperCase() == "oneMonth".toUpperCase()) {
            this.SET_ONE_MONTH(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + this.selectedDayFrom + "/" + this.selectedMonthFrom + "/" + this.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px'> To: </font>" + this.currentDay + "/" + this.selectedMonthTo + "/" + this.selectedYearTo);
        } else if (defaultValue.toUpperCase() == "lastMonth".toUpperCase()) {
            this.SET_LAST_MONTH(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + 1 + "/" + this.selectedMonthFrom + "/" + this.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px'> To: </font>" + this.selectedDayTo + "/" + this.selectedMonthTo + "/" + this.selectedYearTo);
        } else if (defaultValue.toUpperCase() == "thisYear".toUpperCase()) {
            this.SET_THIS_YEAR(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + 1 + "/" + 1 + "/" + this.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px'> To: </font>" + this.currentDay + "/" + this.selectedMonthTo + "/" + this.selectedYearTo);
        } else if (defaultValue.toUpperCase() == "oneYear".toUpperCase()) {
            this.SET_ONE_YEAR(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + this.selectedDateFrom + "<font style='font-weight: bold;font-size: 14px'> To:  </font>" + this.selectedDateTo);

        } else if (defaultValue.toUpperCase() == "lastYear".toUpperCase()) {
            this.SET_LAST_YEAR(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM : </font>" + this.selectedDateFrom + "<font style='font-weight: bold;font-size: 14px'> To:  </font>" + this.selectedDateTo);
        } else {
            this.SET_FROM_TO(id, month, year);
            this.SET_VALUE_SELECTED_DATE();
            eval(this.functionGetBetweenTwoDates);
            $("[DATI-ID=" + id + "]").find('[DATI-ID=selectedDate]').html("<font style='font-weight: bold;font-size: 14px'>FROM</font> : " + this.selectedDateFrom + "<font style='font-weight: bold;font-size: 14px;margin-left: 3px'>TO</font> :" + this.selectedDateTo);

        }


    }
    UPDATE(id) {
        dati_date_time_picker.selectedDayFrom = null;
        dati_date_time_picker.selectedDayTo = null;
        dati_date_time_picker.selectedMonthFrom = null;
        dati_date_time_picker.selectedMonthTo = null;
        dati_date_time_picker.selectedYearFrom = null;
        dati_date_time_picker.selectedYearTo = null;
        dati_date_time_picker.timeFrom = null;
        dati_date_time_picker.timeTo = null;
        var dateTimePicker = $("[DATI-ID=" + id + "]");
        var default_date = $(dateTimePicker).attr("DEFAULT-VALUE");
        console.log(default_date, "rooooooooo");
        var enable = "";
        var show = "";
        if ($(dateTimePicker).attr("ENABLE")) {
            enable = $(dateTimePicker).attr("ENABLE");
        } else {
            enable = ""
        }
        if ($(dateTimePicker).attr("SHOW")) {
            show = $(dateTimePicker).attr("SHOW");
        } else {
            show = ""
        }
        $(dateTimePicker).html("");

        if (!$(dateTimePicker).attr("SELECTED-DATE")) {
            console.error("set attribute SELECTED-DATE");
        } else {
            this.selecteddatefilter = $(dateTimePicker).attr("SELECTED-DATE");
            this.functionGetBetweenTwoDates = $(dateTimePicker).attr("dati_change");
            var attr = $(dateTimePicker).attr('TIME');
            if (typeof attr !== typeof undefined && attr !== false) {
                $(dateTimePicker).append(this.CREATE_DATE_TIME_PICKER(true, enable, show));
            } else {
                $(dateTimePicker).append(this.CREATE_DATE_TIME_PICKER(false, enable, show));
            }
        }
        dati_date_time_picker.DEFAULT_SELECTED_DATE(id, default_date);
        var daysFrom = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-FROM]");
        var daysTo = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-TO]");

        $(daysFrom).append(this.populateDatesFrom(dati_date_time_picker.AMAOUNT_DAYS(dati_date_time_picker.selectedMonthFrom - 1, dati_date_time_picker.selectedYearFrom), default_date));
        $(daysTo).append(this.populateDatesTo(dati_date_time_picker.AMAOUNT_DAYS(dati_date_time_picker.selectedMonthTo - 1, dati_date_time_picker.selectedYearTo), default_date));
        dati_date_time_picker.CREATE_SELECT_DATE_FILTER(dati_date_time_picker.optionsDefaultDate);


    }
    CREATE_DATE_TIME_PICKER(time, enable, show) {
        var bodyDisplay = "inline-block";
        if (enable == "0") {
            if (show != "0") {
                bodyDisplay = "inline-block";
            } else {
                bodyDisplay = "none"
            }
        }
        if (time) {
            return '<div DATI-ID="selectedDate" class="selected-date"></div>' +
                '<div style="display:' + bodyDisplay + ';width: 550px;height: 250px;" ROLE="dati-datepicker-body"><div>' +
                '<div style="width: 20%;height: 100%;display: flex;text-align: center;float: left;flex-direction: column;align-items: center;">' +
                '<div DATI-SET-DATE="today" class="btn_dati_picker_select_date">Today</div>' +
                '<div DATI-SET-DATE="thisMonth" class="btn_dati_picker_select_date">This Month</div>' +
                '<div DATI-SET-DATE="oneMonth" class="btn_dati_picker_select_date">Thirty Days</div>' +
                '<div DATI-SET-DATE="lastMonth" class="btn_dati_picker_select_date">Last Month</div>' +
                '<div DATI-SET-DATE="thisYear" class="btn_dati_picker_select_date">This Year</div>' +
                '<div DATI-SET-DATE="oneYear" class="btn_dati_picker_select_date">One Year</div>' +
                '<div DATI-SET-DATE="lastYear" class="btn_dati_picker_select_date">Last Year</div>' +
                '</div>' +
                '<div style="display: inline-block;width: 80%;float: right;height: 100%">' +
                '<div DATI-ID="fromDate" class="dates active" style="width: 49.5%;float: left;box-shadow:inset 0 0 1em #c0c0c02e;height: 85%">' +
                '<div class="month">' +
                '<div class="arrows prev-mth" ROLE="arrow-prev-from">&lt;</div>' +
                '<div class="mth" MONTH-FROM></div>' +
                '<div class="arrows next-mth" ROLE="arrow-next-from">&gt;</div>' +
                '</div>' +
                '<div class="days" DATI-DAYS-FROM></div>' +
                '</div>' +
                '<div DATI-ID="ToDate" class="dates active" style="width: 49.5%;float: right;box-shadow:inset 0 0 1em #c0c0c02e;height: 85%">' +
                '<div class="month">' +
                '<div class="arrows prev-mth" ROLE="arrow-prev-to">&lt;</div>' +
                '<div class="mth" MONTH-TO></div>\n' +
                '<div class="arrows next-mth" ROLE="arrow-next-to">&gt;</div>' +
                '</div>' +
                '<div class="days" DATI-DAYS-TO></div>\n' +
                '</div>' +
                '<div style="display: inline-block;width: 100%;height: 15%">' +
                '<div class="input" DATI-ID="FromtimePicker" style="display:inline-block;width: 49.5%;float: left;height: 100%"><input DATI-ID="Fromtime" style="text-align: center;width: 100%;height: 100%;box-sizing: border-box;margin: 0;border: none;background-color: #f5f5f5" type="time"/></div>' +
                '<div class="input" DATI-ID="TotimePicker" style="display:inline-block;width: 49.5%;float: right;height: 100%"><input DATI-ID="Totime"  style="text-align: center;width: 100%;height: 100%;box-sizing: border-box;margin: 0;border: none;background-color: #f5f5f5" type="time"/></div>' +
                '</div>' +

                '</div>' +
                '<div DATI-ID="cancelBtnDatePicker" style="display:flex;width: 50%;height: 40px;background-color: #c0c0c0;color: #111F35;align-items: center;justify-content: center;font-size: 15px;font-family: \'CLB\';float: left;margin: 0px">Reset</div>' +
                '<div DATI-ID="validateBtnDatePicker" style="display:flex;width: 50%;height: 40px;background-color: #111F35;color: #ffffff;align-items: center;justify-content: center;font-size: 15px;font-family: \'CLB\';float: right;margin: 0px">Validate</div>' +

                '</div></div>';
        } else {
            return '<div DATI-ID="selectedDate" class="selected-date"></div>' +
                '<div style="display:' + bodyDisplay + ';width: 550px;height: 250px;" ROLE="dati-datepicker-body"><div>' +
                '<div style="width: 20%;height: 100%;display: flex;text-align: center;float: left;flex-direction: column;align-items: center;">' +
                '<div DATI-SET-DATE="today" class="btn_dati_picker_select_date">Today</div>' +
                '<div DATI-SET-DATE="thisMonth" class="btn_dati_picker_select_date">This Month</div>' +
                '<div DATI-SET-DATE="oneMonth" class="btn_dati_picker_select_date">Thirty Days</div>' +
                '<div DATI-SET-DATE="lastMonth" class="btn_dati_picker_select_date">Last Month</div>' +
                '<div DATI-SET-DATE="thisYear" class="btn_dati_picker_select_date">This Year</div>' +
                '<div DATI-SET-DATE="oneYear" class="btn_dati_picker_select_date">One Year</div>' +
                '<div DATI-SET-DATE="lastYear" class="btn_dati_picker_select_date">Last Year</div>' +
                '</div>' +
                '<div style="display: inline-block;width: 80%;float: right;height: 100%">' +
                '<div DATI-ID="fromDate" class="dates active" style="width: 49.5%;float: left;box-shadow:inset 0 0 1em #c0c0c02e;height: 100%">' +
                '<div class="month">' +
                '<div class="arrows prev-mth" ROLE="arrow-prev-from">&lt;</div>' +
                '<div class="mth" MONTH-FROM></div>' +
                '<div class="arrows next-mth" ROLE="arrow-next-from">&gt;</div>' +
                '</div>' +
                '<div class="days" DATI-DAYS-FROM></div>' +
                '</div>' +
                '<div DATI-ID="ToDate" class="dates active" style="width: 49.5%;float: right;box-shadow:inset 0 0 1em #c0c0c02e;height: 100%">' +
                '<div class="month">' +
                '<div class="arrows prev-mth" ROLE="arrow-prev-to">&lt;</div>' +
                '<div class="mth" MONTH-TO></div>\n' +
                '<div class="arrows next-mth" ROLE="arrow-next-to">&gt;</div>' +
                '</div>' +
                '<div class="days" DATI-DAYS-TO></div>\n' +
                '</div>' +
                '</div>' +
                '<div DATI-ID="cancelBtnDatePicker" style="display:flex;width: 50%;height: 40px;background-color: #c0c0c0;color: #111F35;align-items: center;justify-content: center;font-size: 15px;font-family: \'CLB\';float: left;margin: 0px">Reset</div>' +
                '<div DATI-ID="validateBtnDatePicker" style="display:flex;width: 50%;height: 40px;background-color: #111F35;color: #ffffff;align-items: center;justify-content: center;font-size: 15px;font-family: \'CLB\';float: right;margin: 0px">Validate</div>' +

                '</div></div>';
        }
    }
    SELECTED_DAY(element, day) {
        var id = $(element).parent().parent().attr("dati-id");
        var defaultValue = $(element).parent().parent().parent().parent().parent().parent().attr("default-value");
        $("[DATI-ID=" + id + "]").find("[CURRENT_DAY]").removeClass("selected");
        $("[DATI-ID=" + id + "]").find("[CURRENT_DAY=" + day + "]").addClass("selected");
        if (id == "fromDate") {
            dati_date_time_picker.selectedDayFrom = day;
            /*dati_date_time_picker.selectedMonthFrom=*/
            dati_date_time_picker.selectedDateFrom = dati_date_time_picker.selectedDayFrom + "/" + (dati_date_time_picker.selectedMonthFrom + 1) + "/" + dati_date_time_picker.selectedYearFrom;

        } else {
            dati_date_time_picker.selectedDayTo = day;
            dati_date_time_picker.selectedDateTo = dati_date_time_picker.selectedDayTo + "/" + (dati_date_time_picker.selectedMonthTo + 1) + "/" + dati_date_time_picker.selectedYearTo;
        }

        var myC = document.querySelector("[dati-set-date]");
        $(myC).css("background-color", "#e0e0e0");
        $(myC).css("color", "#000000");

        console.log(dati_date_time_picker.selectedDateFrom, "selectedDateFrom");
        console.log(dati_date_time_picker.selectedDateTo, "selectedDateTo");
        console.log(dati_date_time_picker.selectedMonthTo + 1, "selectedMonthTo");
        console.log(dati_date_time_picker.selectedMonthFrom + 1, "selectedMonthFrom");
        console.log(dati_date_time_picker.selectedDayTo, "selectedDayTo");
        console.log(dati_date_time_picker.selectedDayFrom, "selectedDayFrom");
        console.log(dati_date_time_picker.selectedYearTo, "selectedYearTo");
        console.log(dati_date_time_picker.selectedYearFrom, "selectedYearFrom");


    }

    IsBissextile(annee) {
        return (annee % 4 == 0) && ((annee % 100 != 0) || (annee % 400 == 0));
    }
    GET_DAYS(day, selected) {
        if (selected) {
            return '<div class="day selected" CURRENT_DAY="' + day + '" onclick="dati_date_time_picker.SELECTED_DAY(this,' + day + ')">' + day + '</div>'
        } else {
            return '<div class="day" CURRENT_DAY="' + day + '" onclick="dati_date_time_picker.SELECTED_DAY(this,' + day + ')">' + day + '</div>'
        }

    }
    AMAOUNT_DAYS(month, year) {
        var amount_days = 31;
        if (this.IsBissextile(year)) {
            if (month == 1) {
                amount_days = 28;
            }
        } else {
            if (month == 1) {
                amount_days = 29;
            }
        }
        if (month == 3) {
            amount_days = 30;
        }
        if (month == 5) {
            amount_days = 30;
        }
        if (month == 8) {
            amount_days = 30;
        }
        if (month == 10) {
            amount_days = 30;
        }

        return amount_days;
    }
    populateDatesFrom(nbrDays, defaultValue) {
        var days = "";
        for (var i = 0; i < nbrDays; i++) {
            if (defaultValue.toUpperCase() === "thisMonth".toUpperCase()) {
                if ((i + 1) == 1) {
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }

            } else if (defaultValue.toUpperCase() === "oneMonth".toUpperCase()) {
                if ((i + 1) == this.selectedDayFrom) {
                    //dati_date_time_picker.selectedDateFrom=dati_date_time_picker.selectedDayFrom+"/"+(dati_date_time_picker.selectedMonthFrom)+"/"+dati_date_time_picker.selectedYearFrom;
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            } else if (defaultValue.toUpperCase() === "lastMonth".toUpperCase()) {
                if ((i + 1) == 1) {
                    //dati_date_time_picker.selectedDateFrom="1/"+(dati_date_time_picker.selectedMonthFrom-1)+"/"+dati_date_time_picker.selectedYearFrom;
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            } else if (defaultValue.toUpperCase() === "thisYear".toUpperCase()) {
                if ((i + 1) == 1) {
                    //dati_date_time_picker.selectedDateFrom="1/"+(dati_date_time_picker.selectedMonthFrom-1)+"/"+dati_date_time_picker.selectedYearFrom;
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            } else {
                if ((i + 1) == dati_date_time_picker.selectedDayFrom) {
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            }

        }
        return days;
    }
    populateDatesTo(nbrDays, defaultValue) {
        var days = "";
        for (var i = 0; i < nbrDays; i++) {
            if (defaultValue.toUpperCase() === "thisMonth".toUpperCase()) {
                if ((i + 1) == this.selectedDayTo) {
                    //this.selectedDateTo=this.selectedDayTo+"/"+this.selectedMonthTo+"/"+this.selectedYearTo;
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }

            } else if (defaultValue.toUpperCase() === "lastMonth".toUpperCase()) {
                if ((i + 1) == this.selectedDayTo) {
                    //dati_date_time_picker.selectedDateFrom="1/"+(dati_date_time_picker.selectedMonthFrom-1)+"/"+dati_date_time_picker.selectedYearFrom;
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            } else if (defaultValue.toUpperCase() === "oneMonth".toUpperCase()) {
                if ((i + 1) == this.selectedDayTo) {
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            } else if (defaultValue.toUpperCase() === "thisYear".toUpperCase()) {
                if ((i + 1) == this.selectedDayTo) {
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            } else {
                if ((i + 1) == this.selectedDayTo) {
                    days += this.GET_DAYS(i + 1, true);
                } else {
                    days += this.GET_DAYS(i + 1, false);
                }
            }

        }
        return days;
    }
    formatDate(d) {
        let day = d.getDate();
        if (day < 10) {
            day = '0' + day;
        }

        let month = d.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }

        let year = d.getFullYear();

        return day + '/' + month + '/' + year;
    }
    CREATE_SELECT_DATE_FILTER(list) {
        var option = "";
        for (const [key, value] of Object.entries(list)) {
            option = option + "<option value='" + value + "'>" + key + "</option>";
        }
        $("[SELECT-DEFAULT-DATE]").append(option);
    }
    EVENTS_UI() {
        // lisner datepicker_change
        // test e.detail exit in table change_lisnet
        var myComposents = document.querySelectorAll("dati-datepicker");
        for (var i = 0; i < myComposents.length; i++) {
            var myComposent = myComposents[i];
            if ($(myComposent).attr("dati-update")) {
                this.LUNCH($(myComposent).attr("dati-id"), $(myComposent).attr("dati-update"));
            }
        }
        $(document).on('click', "[DATI-ID=selectedDate]", function(e) {
            var enable = $(this).parent().attr("ENABLE");
            if (enable == "0") {
                $(this).parent().find("[ROLE=dati-datepicker-body]").toggle();
            }
        });
        $(document).on('change', "dati-datepicker [dati-id=Fromtime]", function(e) {
            var timeFrom = $(this).val();
            dati_date_time_picker.timeFrom = timeFrom;
        });
        $(document).on('change', "dati-datepicker [dati-id=Totime]", function(e) {
            var timeTo = $(this).val();
            dati_date_time_picker.timeTo = timeTo;
        });
        $(document).on('click', "dati-datepicker [ROLE=arrow-prev-from]", function(e) {
            var element = $(this).parent().find(".mth");
            var defaultValue = $(this).parent().parent().parent().parent().parent().parent().attr("default-value");
            var id = $(this).parent().parent().parent().parent().parent().parent().attr("DATI-ID");

            console.log("monthhhhhhh", dati_date_time_picker.selectedMonthFrom);
            dati_date_time_picker.selectedMonthFrom--;
            var m = dati_date_time_picker.selectedMonthFrom;
            if ((dati_date_time_picker.selectedMonthFrom - 1) < 0) {
                dati_date_time_picker.selectedMonthFrom = 12;
                m = 12;
                dati_date_time_picker.selectedYearFrom--;
            }

            $(this).parent().find('[MONTH-FROM]').attr("MONTH-FROM", m);

            $(element).html(dati_date_time_picker.months[m - 1] + ' ' + dati_date_time_picker.selectedYearFrom);
            var daysFrom = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-FROM]");
            $(daysFrom).html("");
            $(daysFrom).append(dati_date_time_picker.populateDatesFrom(dati_date_time_picker.AMAOUNT_DAYS(m - 1, dati_date_time_picker.selectedYearFrom), "null"));

        });
        $(document).on('click', "dati-datepicker [ROLE=arrow-prev-to]", function(e) {
            var id = $(this).parent().parent().parent().parent().parent().parent().attr("DATI-ID");
            var defaultValue = $(this).parent().parent().parent().parent().parent().parent().attr("default-value");
            var element = $(this).parent().find(".mth");

            dati_date_time_picker.selectedMonthTo--;
            var m = dati_date_time_picker.selectedMonthTo;
            if ((dati_date_time_picker.selectedMonthTo - 1) < 0) {
                dati_date_time_picker.selectedMonthTo = 12;
                m = 12;
                dati_date_time_picker.selectedYearTo--;
            }
            $(this).parent().find('[MONTH-TO]').attr("MONTH-TO", m);
            $(element).html(dati_date_time_picker.months[m - 1] + ' ' + dati_date_time_picker.selectedYearTo);

            var daysTo = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-TO]");
            $(daysTo).html("");
            $(daysTo).append(dati_date_time_picker.populateDatesTo(dati_date_time_picker.AMAOUNT_DAYS(m - 1, dati_date_time_picker.selectedYearTo), "null"));


        });
        $(document).on('click', "dati-datepicker [ROLE=arrow-next-from]", function(e) {
            var element = $(this).parent().find(".mth");
            var id = $(this).parent().parent().parent().parent().parent().parent().attr("DATI-ID");
            var defaultValue = $(this).parent().parent().parent().parent().parent().parent().attr("default-value");
            console.log(dati_date_time_picker.selectedYearFrom, "yeaaaaaaar");
            dati_date_time_picker.selectedMonthFrom++;
            var m = dati_date_time_picker.selectedMonthFrom;
            if ((dati_date_time_picker.selectedMonthFrom - 1) > 11) {
                dati_date_time_picker.selectedMonthFrom = 1;
                dati_date_time_picker.selectedYearFrom++;
                m = 1;
            }
            $(this).parent().find('[MONTH-FROM]').attr("MONTH-FROM", m);
            $(element).html(dati_date_time_picker.months[m - 1] + ' ' + dati_date_time_picker.selectedYearFrom);
            var daysFrom = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-FROM]");
            $(daysFrom).html("");
            $(daysFrom).append(dati_date_time_picker.populateDatesFrom(dati_date_time_picker.AMAOUNT_DAYS(m - 1, dati_date_time_picker.selectedYearFrom), "null"));


        });
        $(document).on('click', "dati-datepicker [ROLE=arrow-next-to]", function(e) {
            var element = $(this).parent().find(".mth");
            var id = $(this).parent().parent().parent().parent().parent().parent().attr("DATI-ID");
            var defaultValue = $(this).parent().parent().parent().parent().parent().parent().attr("default-value");

            dati_date_time_picker.selectedMonthTo++;
            var m = dati_date_time_picker.selectedMonthTo;
            if ((dati_date_time_picker.selectedMonthTo - 1) > 11) {
                dati_date_time_picker.selectedMonthTo = 1;
                dati_date_time_picker.selectedYearTo++;
                m = 1;
            }
            $(this).parent().find('[MONTH-TO]').attr("MONTH-TO", m);
            $(element).html(dati_date_time_picker.months[m - 1] + ' ' + dati_date_time_picker.selectedYearTo);

            var daysTo = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-TO]");
            $(daysTo).html("");
            $(daysTo).append(dati_date_time_picker.populateDatesTo(dati_date_time_picker.AMAOUNT_DAYS(m - 1, dati_date_time_picker.selectedYearTo), "null"));

        });
        $(document).on('click', "dati-datepicker [dati-id=validateBtnDatePicker]", function(e) {


            var dateb = new Date(dati_date_time_picker.selectedYearFrom + "-" + dati_date_time_picker.selectedMonthFrom + "-" + dati_date_time_picker.selectedDayFrom);
            var datef = new Date(dati_date_time_picker.selectedYearTo + "-" + dati_date_time_picker.selectedMonthTo + "-" + dati_date_time_picker.selectedDayTo);
            if (dateb > datef) {

                $(this).parent().parent().parent().addClass("shake_error");
                setTimeout(function() {
                    console.log(555555);
                    $("[dati-id=validateBtnDatePicker]").parent().parent().parent().removeClass("shake_error");
                }, 1000);






                /* var i=false;
                 if ( $(this).parent().parent().parent().attr("class")!="shake_error"){
                     $(this).parent().parent().parent().addClass("shake_error");
                     i=true;
                     $(this).parent().parent().parent().removeClass("shake_error");
                 }
                 else{
                     $(this).parent().parent().parent().removeClass("shake_error");
                 }
                 if(i){
                     $(this).parent().parent().parent().addClass("shake_error");
                 }*/


            } else {
                //test date end > date deb
                // test time end > time deb si seulemnent si attr time est declarer
                var func = $(this).parent().parent().parent().attr("dati_change");
                var timefrom = null;
                var timeTo = null;
                try {
                    timefrom = $(this).parent().parent().find("[dati-id=Fromtime]").val();
                    timeTo = $(this).parent().parent().find("[dati-id=Totime]").val();
                } catch (e) {
                    timefrom = null;
                    timeTo = null;
                }
                console.log(timefrom, "time from");
                console.log(timeTo, "time to");

                console.log("aaaaaaaaaaaaaaa", dati_date_time_picker.selectedDayFrom + "/" + dati_date_time_picker.selectedMonthFrom);
                if (dati_date_time_picker.timeFrom == null && dati_date_time_picker.timeTo == null) {
                    $(this).parent().parent().parent().find("[dati-id=selectedDate]").html("<font style='font-weight: bold;font-size: 14px'>FROM</font> : " + dati_date_time_picker.selectedDayFrom + "/" + (dati_date_time_picker.selectedMonthFrom) + "/" + dati_date_time_picker.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px;margin-left: 3px'>TO</font> :" + dati_date_time_picker.selectedDayTo + "/" + (dati_date_time_picker.selectedMonthTo) + "/" + dati_date_time_picker.selectedYearTo);
                } else if (dati_date_time_picker.timeFrom == null && dati_date_time_picker.timeTo != null) {
                    $(this).parent().parent().parent().find("[dati-id=selectedDate]").html("<font style='font-weight: bold;font-size: 14px'>FROM</font> : " + dati_date_time_picker.selectedDayFrom + "/" + (dati_date_time_picker.selectedMonthFrom) + "/" + dati_date_time_picker.selectedYearFrom + "<font style='font-weight: bold;font-size: 14px;margin-left: 3px'>TO</font> :" + dati_date_time_picker.selectedDayTo + "/" + (dati_date_time_picker.selectedMonthTo) + "/" + dati_date_time_picker.selectedYearTo + " " + dati_date_time_picker.timeTo);
                } else if (dati_date_time_picker.timeFrom != null && dati_date_time_picker.timeTo == null) {
                    $(this).parent().parent().parent().find("[dati-id=selectedDate]").html("<font style='font-weight: bold;font-size: 14px'>FROM</font> : " + dati_date_time_picker.selectedDayFrom + "/" + (dati_date_time_picker.selectedMonthFrom) + "/" + dati_date_time_picker.selectedYearFrom + " " + dati_date_time_picker.timeFrom + "<font style='font-weight: bold;font-size: 14px;margin-left: 3px'>TO</font> :" + dati_date_time_picker.selectedDayTo + "/" + (dati_date_time_picker.selectedMonthTo) + "/" + dati_date_time_picker.selectedYearTo);
                } else {
                    $(this).parent().parent().parent().find("[dati-id=selectedDate]").html("<font style='font-weight: bold;font-size: 14px'>FROM</font> : " + dati_date_time_picker.selectedDayFrom + "/" + (dati_date_time_picker.selectedMonthFrom) + "/" + dati_date_time_picker.selectedYearFrom + " " + dati_date_time_picker.timeFrom + "<font style='font-weight: bold;font-size: 14px;margin-left: 3px'>TO</font> :" + dati_date_time_picker.selectedDayTo + "/" + (dati_date_time_picker.selectedMonthTo) + "/" + dati_date_time_picker.selectedYearTo + " " + dati_date_time_picker.timeTo);
                }



                //************************************************* Date From***********************************************************************
                var dateFrom = $(this).parent().parent().parent().attr("SELECTED-DATE");
                var indexDot = dateFrom.indexOf(".");
                if (indexDot !== -1) {
                    var obj = dateFrom.substr(0, indexDot);
                    var obj_attr = dateFrom.substr(indexDot + 1, dateFrom.length - (indexDot + 1));
                    console.log(obj + "sdsq", "classname");
                    eval(obj)[obj_attr]["datefrom"] = dati_date_time_picker.selectedYearFrom + "-" + (dati_date_time_picker.selectedMonthFrom) + "-" + dati_date_time_picker.selectedDayFrom;
                    eval(obj)[obj_attr]["dateto"] = dati_date_time_picker.selectedYearTo + "-" + (dati_date_time_picker.selectedMonthTo) + "-" + dati_date_time_picker.selectedDayTo;
                    eval(obj)[obj_attr]["timefrom"] = timefrom;
                    eval(obj)[obj_attr]["timeto"] = timeTo;
                } else {
                    window[dateFrom]["datefrom"] = dati_date_time_picker.selectedYearFrom + "-" + (dati_date_time_picker.selectedMonthFrom) + "-" + dati_date_time_picker.selectedDayFrom;
                }


                $(this).parent().parent().hide();
                // lancer evenment de type datepicker_change dont le detail dati-id
                console.log("functionChange", func);
                try {
                    eval(func);

                } catch (error) {
                    console.log(9999999999999999999999999999);
                }
            }


        });
        $(document).on('click', "dati-datepicker [dati-id=cancelBtnDatePicker]", function(e) {
            var dateFrom = $(this).parent().parent().parent().attr("SELECTED-DATE");
            var func = $(this).parent().parent().parent().attr("dati_change");
            var id = $(this).parent().parent().parent().attr("DATI-ID");
            var indexDot = dateFrom.indexOf(".");
            if (indexDot !== -1) {
                var obj = dateFrom.substr(0, indexDot);
                var obj_attr = dateFrom.substr(indexDot + 1, dateFrom.length - (indexDot + 1));
                console.log(obj + "sdsq", "classname");
                eval(obj)[obj_attr]["datefrom"] = null;
                eval(obj)[obj_attr]["dateto"] = null;
                eval(obj)[obj_attr]["timefrom"] = null;
                eval(obj)[obj_attr]["timeto"] = null;
            } else {
                window[dateFrom]["datefrom"] = null;
            }
            //$(this).parent().parent().parent().attr("show","1");
            dati_date_time_picker.UPDATE(id);
            eval(func);
            $(this).parent().parent().hide();
        });
        $(document).on('click', "dati-datepicker [DATI-SET-DATE]", function(e) {
            console.log("3232323232");
            var date = new Date();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var day = date.getDate();
            var default_value = $(this).attr("DATI-SET-DATE");
            var id = $(this).parent().parent().parent().parent().attr("dati-id");
            //$(this).parent().parent().parent().parent().attr("show","1");
            /* $(this).parent().parent().parent().parent().attr("default-value",default_value);*/
            dati_date_time_picker.clickedDate = $(this).parent().parent().parent().parent().attr("default-value");
            if (default_value.toUpperCase() == "today".toUpperCase()) {
                dati_date_time_picker.SET_TODAY(id, day, month, year);

            } else if (default_value.toUpperCase() == "thisMonth".toUpperCase()) {
                dati_date_time_picker.SET_THIS_MONTH(id, month, year);

            } else if (default_value.toUpperCase() == "oneMonth".toUpperCase()) {
                dati_date_time_picker.SET_ONE_MONTH(id, month, year);

            } else if (default_value.toUpperCase() == "lastMonth".toUpperCase()) {
                dati_date_time_picker.SET_LAST_MONTH(id, month, year);

            } else if (default_value.toUpperCase() == "thisYear".toUpperCase()) {
                dati_date_time_picker.SET_THIS_YEAR(id, month, year);

            } else if (default_value.toUpperCase() == "oneYear".toUpperCase()) {
                dati_date_time_picker.SET_ONE_YEAR(id, month, year);

            } else if (default_value.toUpperCase() == "lastYear".toUpperCase()) {
                dati_date_time_picker.SET_LAST_YEAR(id, month, year);

            } else {
                dati_date_time_picker.SET_FROM_TO(id, month, year);
            }
            var daysFrom = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-FROM]");
            var daysTo = $("[DATI-ID=" + id + "]").find("[DATI-DAYS-TO]");
            $(daysFrom).html("");
            $(daysTo).html("");
            $(daysFrom).append(dati_date_time_picker.populateDatesFrom(dati_date_time_picker.AMAOUNT_DAYS(dati_date_time_picker.selectedMonthFrom - 1, dati_date_time_picker.selectedYearFrom), default_value));
            $(daysTo).append(dati_date_time_picker.populateDatesTo(dati_date_time_picker.AMAOUNT_DAYS(dati_date_time_picker.selectedMonthTo - 1, dati_date_time_picker.selectedYearTo), default_value));
            //dati_date_time_picker.UPDATE(id);
            var myComposents = document.querySelectorAll("[DATI-SET-DATE]");
            for (var i = 0; i < myComposents.length; i++) {
                var myComposent = myComposents[i];
                if ($(this).attr("DATI-SET-DATE") != $(myComposent).attr("DATI-SET-DATE")) {

                    $(myComposent).css("background-color", "#e0e0e0");
                    $(myComposent).css("color", "#111F35");
                } else {
                    $(myComposent).css("background-color", "#111F35");
                    $(myComposent).css("color", "#e0e0e0");
                }

            }



        });
    }
    LUNCH(id, eventName) {
        document.addEventListener(eventName, function(e) {
            setTimeout(function() {
                dati_date_time_picker.UPDATE(id);
            }, 200);
        }, true);
    }
};
let dati_date_time_picker = new DateTimePicker();