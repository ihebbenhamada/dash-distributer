 <div class="home_container" DATI-PAGE="Dashboard"  style="display:grid">
                <div class="mobile_container">
                    <div class="mobile">
                        <div>
                            <img src="assets/img/presentation/eteint.png" />
                        </div>
                        <div>
                            <p DATI-ID="nb_device_inactive" class="number"></p>
                            <p class="text">Inactive Mobiles</p>
                        </div>

                    </div>
                    <div class="mobile">
                        <div>
                            <img src="assets/img/presentation/active.png" />
                        </div>
                        <div>
                            <p DATI-ID="nb_device_active" class="number"></p>
                            <p class="text">Active Mobiles</p>
                        </div>
                    </div>
                    <div class="mobile">
                        <div>
                            <img src="assets/img/presentation/totalmobile.png" />
                        </div>
                        <div>
                            <p DATI-ID="nb_devices" class="number"></p>
                            <p class="text">Total Mobiles</p>
                        </div>
                    </div>
                </div>
                <div class="order_container">
                    <div class="order">
                        <div class="order_detail">
                            <p class="number">10</p>
                            <p class="text">Total Orders</p>
                        </div>
                        <div class="order_chart">
                            <div class="stat_waiting">
                                <p class="pourcentage">30%</p>
                                <canvas id="waitingChart"></canvas>
                                <p style=" color: rgb(253, 205, 163);font-family: CLB;">Waiting</p>
                            </div>
                            <div class="stat_delivred">
                                <p class="pourcentage">10%</p>
                                <canvas id="delivredChart"></canvas>
                                <p style=" color: rgb(134, 199, 204);font-family: CLB;">delivred</p>
                            </div>
                            <div class="stat_rejected">
                                <p class="pourcentage">30%</p>
                                <canvas id="rejectedChart"></canvas>
                                <p style="     color: rgb(207, 110, 110);font-family: CLB;">rejected</p>
                            </div>
                        </div>




                    </div>
                    <div class="order">
                        <div class="order_detail">
                            <p class="number">10</p>
                            <p class="text">Total Reservations</p>
                        </div>
                        <div class="order_chart">

                            <div class="stat_waiting">
                                <p class="pourcentage">90%</p>
                                <canvas id="waitingChartReservation"></canvas>
                                <p style=" color: rgb(253, 205, 163);font-family: CLB;">Waiting</p>
                            </div>
                            <div class="stat_delivred">
                                <p class="pourcentage">50%</p>
                                <canvas id="delivredChartReservation"></canvas>
                                <p style=" color: rgb(134, 199, 204);font-family: CLB;">delivred</p>
                            </div>
                            <div class="stat_rejected">
                                <p class="pourcentage">30%</p>
                                <canvas id="rejectedChartReservation"></canvas>
                                <p style="     color: rgb(207, 110, 110);font-family: CLB;">rejected</p>
                            </div>




                        </div>
                    </div>
                </div>
                <div class="tops_container">
                    <div class="tops_orders">
                        <table>
                            <thead>
                                <th> Top orders </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1. order one</td>
                                </tr>
                                <tr>
                                    <td>2. order Two</td>
                                </tr>
                                <tr>
                                    <td>3. order Three</td>
                                </tr>
                                <tr>
                                    <td>4. order Four</td>
                                </tr>
                                <tr>
                                    <td>5. order five</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div class="top_reservations">
                        <table>
                            <thead>
                                <th> Top Reservations </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1. reservation one</td>
                                </tr>
                                <tr>
                                    <td>2. reservation Two</td>
                                </tr>
                                <tr>
                                    <td>3. reservation Three</td>
                                </tr>
                                <tr>
                                    <td>4. reservation Four</td>
                                </tr>
                                <tr>
                                    <td>5. reservation five</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>