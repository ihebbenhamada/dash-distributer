<div class="restaurants_container"  DATI-PAGE="Meetings" DATI-DISPLAY="flex">

<!-- add button  -->
<div class="add_button_restau"  DATI-LINK="addMeetingServices" DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Meeting &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Add Form" DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->


  <div  class="restaurant_card_container" id="restaurantCardContainer"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="meetingCard_ui.cards"
  DATI-ID="MeetingList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="MeetingCardReceive"
  DATI-ICON-CARD="/assets/img/serviceIcon/meeting.svg"
  DATI-SWITECH-TOGGOLE="imeetingCard.ENABLE_MEETING"
  >

     <div DATI-COMPOSENT="RestaurantCards-icon-detail"
      DATI-LINK="detailServices"
      onclick="meetingCard_ui.SETSELECTED_detail(this)"
      DETAIL-TITLE="meetingCard_ui.selectedMeeting.title"
      DETAIL-DESCRIPTION="meetingCard_ui.selectedMeeting.description"
      DETAIL-IMAGE="meetingCard_ui.selectedMeeting.image"></div>

          <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editMeetingPage"  DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Meeting &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Edit Form" dati-display="grid" onclick="meetingCard_ui.SETSELECTED_detail(this)"></div>
           <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" meetingCard_ui.delete(this) "></div>

  </div>

<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="MeetingAlerte"
DATI-UPDATE="showAlerteMeeting"
DATI-CANCEL = "meetingCard_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "meetingCard_ui.VALIDATE_ALERTE()"


>
 </div>


</div>