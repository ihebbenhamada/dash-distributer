<div class="services_container" id="services_container"  DATI-PAGE="Services" dati-display="flex">
           <div class="add_button"  DATI-LINK="addService"  style="display:none;">
                    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
                    <p>Add</p>
                </div>
                <!-- end button  -->

  <div  class="service_card_container" id="serviceCardContainer"
  DATI-COMPOSENT="ServiceCards"
  DATI-LIST="serviceCard_ui.cards"
  DATI-ID="ServiceList"
  DATI-SWITECH="position:absolute;left:12px;top:12px";
  DATI-UPDATE="ServiceCardReceive"
  >
   <div     onclick=" serviceCard_ui.Edit(this) " style="z-index:10"></div>

  </div>














</div>
