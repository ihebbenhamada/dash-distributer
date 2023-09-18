<div class="main_container" DATI-PAGE="OrderPage">

    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarOrder"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchOrder"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="OrderListPageReady"
             style="width: 100%">
            <div DATI-COMPOSENT="input"  DATI-ID="listOrders_filter_by" DATI-OPTION="orderList_ui.filterBy" DATI-INPUT-TYPE="select"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listorder_search_byroomnumber" DATI-INPUT-TYPE="text"
                 placeholder="Room Number"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listorder_search_byguestname" DATI-INPUT-TYPE="text"
                 placeholder="Guest Name" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-OPTION="orderList_ui.optionsStatus"  DATI-ID="listorder_search_byStatus" DATI-INPUT-TYPE="select" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-OPTION="orderList_ui.optionsServices"  DATI-ID="listorder_search_byService" DATI-INPUT-TYPE="select" style="display: none"></div>

            <dati-datepicker DATI-ID="OrderDateTimePicker"
                             DATI-UPDATE="GetDateTimePickerOrder"
                             ENABLE="0"
                             SHOW="0"
                             SELECTED-DATE="orderList_ui.selectedDate"
                             DATI-INPUT-TYPE="datiDatePicker"
                             DEFAULT-VALUE="oneMonth"
                             DATI_CHANGE="IOrder.GET_OREDER()"
                             style="float: right;">
            </dati-datepicker>



        </div>
    </div>

    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="orderList_ui.orders"
           DATI-ID="orderList"
           id="tableOrderList"
           DATI-UPDATE="ListOrdersReceive"
           DATI-TD-STYLE="text-align:center">

        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="id" DATI-FN="orderList_ui.getDate" align="center">DATE</th>
            <th DATI-ATTR="id" DATI-FN="orderList_ui.getGuestName" align="center">Guest</th>
            <th DATI-ATTR="id" DATI-FN="orderList_ui.getRoomNumber" align="center">ROOM NUMBER</th>
            <th DATI-ATTR="id" DATI-FN="orderList_ui.getStatut" align="center">STATUS</th>
            <th DATI-ATTR="payroll_amount" DATI-FN="orderList_ui.getPayedAmount" align="center">PAYED AMOUNT</th>
            <th DATI-ATTR="total_amount" DATI-FN="orderList_ui.getPriceItem" align="center">TOTAL AMOUNT</th>
            <th DATI-ATTR="id" DATI-FN="orderList_ui.itemsInCart" align="center">ARTICLE'S NUMBER</th>
            <th DATI-ATTR="status" DATI-FN="orderList_ui.GET_DETAIL_BUTTOM_HTML" style="display: none" align="center"></th>

            <th colspan="4"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_orderList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListOrdersReceive"
                DATI-TOTAL-PAGE="orderList_ui.total"
                DATI-FOR="orderList"
                DATI-FN="IOrder.GET_ALL_OREDER()">
            </th>
        </tr>

    </table>

    <div class="trx_bg_transparant" DATI-FORM-POPUP-DETAIL-ORDER style="display: none">

        <div class="popup_detail_order_reservation" style="position: relative">
            <div style="cursor: pointer;width: 25px;height: 25px;border-radius: 50%;background-color: #b51e00;position: absolute;top: -10px;right: -10px;text-align: center"
                 ONCLICK="orderList_ui.CLOSE_POPUP()">
                <span style="color:#ffffff;font-size:20px;">x</span>
            </div>



            <table class="dataTableStyle"
                   DATI-COMPOSENT="dataTable"
                   DATI-LIST="orderList_ui.selectedOrder.CartOrdered"
                   DATI-ID="orderDetailsList"
                   id="tableOrderList"
                   DATI-TD-STYLE="text-align:center"
            >

                <tr DATI-COMPOSENT="datatable_header">
                    <th DATI-ATTR="quantity" align="center">QUANTITY</th>
                    <th DATI-ATTR="unique_price" DATI-FN="orderList_ui.getPriceItem" align="center">PRICE</th>
                    <th DATI-ATTR="Service.title" DATI-FN="orderList_ui.getBoutique" align="center">SERVICE</th>

                    <th DATI-ATTR="Item.name" align="center">ARTICLE</th>

                    <th DATI-ATTR="id" DATI-FN="orderList_ui.getStatutItem" align="center">STATUS</th>


                    <th DATI-ATTR="id" DATI-FN="orderList_ui.GET_ACCEPT_REJECT_PROGRESS_ITEM_CART"
                        style="display: none" align="center"></th>
                    <th colspan="2"> <!--DATI-COMPOSENT="pagination"
                DATI-ID="pagination_orderReservationList"
                DATI-NBR-ROW="50"
                DATI-UPDATE="OrderReservationsReceive"
                DATI-TOTAL-PAGE="orderReservationList_ui.total"
                DATI-FOR="orderReservationList">-->
                    </th>
                </tr>
            </table>

        </div>
    </div>




</div>