<div class="restaurants_container"  DATI-PAGE="NotificationHistory" DATI-DISPLAY="flex">




  <div  class="restaurant_card_container" id="restaurantCardContainer"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="notifHistory_ui.cards"
  DATI-ID="NotifList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="NotifCardReceive"
  CARDS-LINK=""
  DATI-ICON-CARD="/assets/img/serviceIcon/leisure.svg"
  DATI-SWITECH-TOGGOLE="iNotifHistory.ENABLE_NOTIF"
  >
  <div DATI-COMPOSENT="RestaurantCards-icon-detail"
      DATI-LINK="detailNotif"
      onclick="notifHistory_ui.SETSELECTED_detail(this)"
      DETAIL-TITLE="notifHistory_ui.selectedNotif.title"
      DETAIL-DESCRIPTION="notifHistory_ui.selectedNotif.description"
      DETAIL-IMAGE="notifHistory_ui.selectedNotif.image"></div>

       <div DATI-COMPOSENT="RestaurantCards-icon-edit"  DATI-LINK="EditNotification"  DATI-PATH="Push Notifications  &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   History &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Edit Form " dati-display="grid" onclick="notifHistory_ui.SETSELECTED_detail(this)"></div>
       <div DATI-COMPOSENT="RestaurantCards-icon-delete"  onclick=" notifHistory_ui.delete(this) "  ></div>

  </div>




<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="notifAlerte"
DATI-UPDATE="showAlerteNotif"
DATI-CANCEL = "notifHistory_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "notifHistory_ui.VALIDATE_ALERTE()"


>
 </div>



</div>