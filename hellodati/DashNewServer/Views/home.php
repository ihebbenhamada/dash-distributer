 <div class="home_container" DATI-PAGE="Dashboard"  style="display:grid"  DATI-DISPLAY="grid">
                <div class="mobile_container">
                    <div class="mobile">
                        <div>
                            <img src="../assets/img/presentation/active.png" />
                        </div>
                        <div>
                            <p DATI-ID="nb_device_inactive" class="number"></p>
                            <p class="text">Available Devices</p>
                        </div>

                    </div>
                    <div class="mobile">
                        <div>
                            <img src="../assets/img/presentation/eteint.png" />
                        </div>
                        <div>
                            <p DATI-ID="nb_device_active" class="number"></p>
                            <p class="text">In use Devices </p>
                        </div>
                    </div>
                    <div class="mobile">
                        <div>
                            <img src="../assets/img/presentation/totalmobile.png" />
                        </div>
                        <div>
                            <p DATI-ID="nb_devices" class="number"></p>
                            <p class="text">Total Devices</p>
                        </div>
                    </div>
                </div>
                <div class="order_container">
                    <div class="order">
                        <div class="order_detail">
                            <p class="number" DATI-TOTAL-ORDERS>0</p>
                            <p class="text"> Orders</p>
                        </div>
                        <div class="order_chart">
                            <div class="stat_waiting">
                                <p class="pourcentage" DATI-WAITING-TAUX>0%</p>
                                <canvas id="waitingChart"></canvas>
                                <p style=" color: rgb(253, 205, 163);font-family: CLB; cursor: pointer;" DATI-LINK="OrderPage" dati-path="Requests &nbsp;&nbsp;&nbsp; >&nbsp;&nbsp;&nbsp;    Orders" onclick="orderList_ui.SELECTED_STATUS(3,0)" >Waiting</p>
                            </div>
                            <div class="stat_delivred">
                                <p class="pourcentage" DATI-DELIVRED-TAUX>0%</p>
                                <canvas id="delivredChart"></canvas>
                                <p style=" color: rgb(134, 199, 204);font-family: CLB; cursor: pointer;"  DATI-LINK="OrderPage" dati-path="Requests &nbsp;&nbsp;&nbsp; >&nbsp;&nbsp;&nbsp;    Orders" onclick="orderList_ui.SELECTED_STATUS(3,3)">In progress</p>
                            </div>
                            <div class="stat_rejected">
                                <p class="pourcentage" DATI-REJECTED-TAUX>0%</p>
                                <canvas id="rejectedChart"></canvas>
                                <p style="color: rgb(207, 110, 110);font-family: CLB; cursor: pointer;" DATI-LINK="OrderPage" dati-path="Requests &nbsp;&nbsp;&nbsp; >&nbsp;&nbsp;&nbsp;    Orders" onclick="orderList_ui.SELECTED_STATUS(3,4)">Finished</p>
                            </div>
                        </div>




                    </div>
                    <div class="order">
                        <div class="order_detail">
                            <p class="number"  DATI-TOTAL-RESERVATION>0</p>
                            <p class="text"> Reservations</p>
                        </div>
                        <div class="order_chart">

                            <div class="stat_waiting">
                                <p class="pourcentage" DATI-WAITING-TAUX-RESERVATION>0%</p>
                                <canvas id="waitingChartReservation"></canvas>
                                <p style=" color: rgb(253, 205, 163);font-family: CLB; cursor: pointer;" DATI-LINK="ReservationPage" dati-path="Requests &nbsp;&nbsp;&nbsp; >&nbsp;&nbsp;&nbsp;    Reservation" onclick="reservationList_ui.SELECTED_STATUS(3,0)">Waiting</p>
                            </div>
                            <div class="stat_delivred">
                                <p class="pourcentage" DATI-DELIVRED-TAUX-RESERVATION>0%</p>
                                <canvas id="delivredChartReservation"></canvas>
                                <p style=" color: rgb(134, 199, 204);font-family: CLB; cursor: pointer;" DATI-LINK="ReservationPage" dati-path="Requests &nbsp;&nbsp;&nbsp; >&nbsp;&nbsp;&nbsp;    Reservation" onclick="reservationList_ui.SELECTED_STATUS(3,1)">Reserved</p>
                            </div>
                            <div class="stat_rejected">
                                <p class="pourcentage"DATI-REJECTED-TAUX-RESERVATION>0%</p>
                                <canvas id="rejectedChartReservation"></canvas>
                                <p style="     color: rgb(207, 110, 110);font-family: CLB; cursor: pointer;" DATI-LINK="ReservationPage" dati-path="Requests &nbsp;&nbsp;&nbsp; >&nbsp;&nbsp;&nbsp;    Reservation" onclick="reservationList_ui.SELECTED_STATUS(3,2)">Rejected</p>
                            </div>




                        </div>
                    </div>
                </div>
                <div class="tops_container">
                    <div class="tops_orders"
                     DATI-COMPOSENT="topOrders"
                     DATI-UPDATE="TopOrdersReceive"
                     DATI-ID="topOrder"
                     DATI-LIST="dati_topOrders.Tops">

                    </div>
                    <div class="top_reservations"
                    DATI-COMPOSENT="topReservations"
                     DATI-UPDATE="TopReservationsReceive"
                    DATI-ID="topReser"
                    DATI-LIST="dati_topReservations.Tops">

                    </div>
                </div>

  <div class="container_charts_oreder_reservation">
               <div class="container_chart">
                    <canvas id="OrdersByMonth" style="width:100%;height:300px" ></canvas>
                </div>
              <div class="container_chart">
                    <canvas id="ReservationsByMonth" style="width:100%;height:300px" ></canvas>
                </div>
  </div>
            </div>