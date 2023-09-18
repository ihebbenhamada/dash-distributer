<div class="hotelContainer" DATI-PAGE="AddHotels">


    <div class="form_add ">

        <div class="header_add_form">
            <img src="/assets/img/add_room.png">
            <label style="margin-left: 5px"> Add Hotel</label>
        </div>
        <div class="add_form_container" FORM-ACTION="/Hotel/Add" DATI-FORM="add-hotel">
            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form" style="position: relative">
                    <label>CHAIN</label>
                    <div class="select_with_add">
                        <select DATI-ID="select_chain" class="select">
                            <option value="">Man</option>
                        </select>
                        <div class="object_add" DATI-ID="btnAddChain">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>

                    <div class="pupup_up_add_chain" style="display: none">
                        <div class="title_popup_chain">Add Chain
                        </div>
                        <div class="form_body_popup_chain">
                            <p>Chain Name</p>
                            <input id="chain_name" type="text"/>
                            <div class="btn_add_chain" DATI-ID="add_chain">
                                <span>+</span>
                                <p>Add</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input_add_form">
                    <label>HOTEL NAME</label>
                    <input type="text">
                </div>

                <div class="input_add_form">
                    <label>STARS</label>
                    <select class="select">
                        <option value="0">*</option>
                        <option value="1">**</option>
                        <option value="2">***</option>
                        <option value="3">****</option>
                        <option value="4">*****</option>
                    </select>
                </div>
            </div>
            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form">
                    <label>HOTEL IMAGE</label>
                    <input type="file" class="file">
                </div>
                <div class="input_add_form">
                    <label>HOTEL LOGO</label>
                    <input type="file" class="file">
                </div>

                <div class="input_add_form">
                    <label>CONTINENT</label>
                    <select class="select">
                        <option value="">Man</option>
                    </select>
                </div>
            </div>
            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form">
                    <label>COUNTRY</label>
                    <select class="select">
                        <option value="">Man</option>
                    </select>
                </div>

                <div class="input_add_form">
                    <label>REGION</label>
                    <input type="text">
                </div>


                <div class="input_add_form">
                    <label>CITY</label>
                    <input type="text">
                </div>
            </div>
            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form">
                    <label>ADDRESS</label>
                    <input type="text">
                </div>
                <div class="input_add_form">
                    <label>EMAIL</label>
                    <input type="text">
                </div>
                <div class="input_add_form">
                    <label>FACEBOOK</label>
                    <input type="text">
                </div>
            </div>
            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form">
                    <label>TWITTER</label>
                    <input type="text">
                </div>
                <div class="input_add_form">
                    <label>YOUTUBE</label>
                    <input type="text">
                </div>
                <div class="input_add_form">
                    <label>TRIP ADVISOR URL</label>
                    <input type="text">
                </div>
            </div>

        </div>


        <div class="div_btn_add">
            <input style="width:300px" type="submit" class="btn_valid" value="ADD">
        </div>

    </div>


</div>