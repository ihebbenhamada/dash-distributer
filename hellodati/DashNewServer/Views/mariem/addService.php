<div class="notification_container" DATI-PAGE="addService">
    <div class="service_form_add">
        <div class="service_header">
            <div>Add Service</div>
        </div>
        <div class="service_body">
            <div class="service_inputs">
                <div class="section_one_service">
                    <input type="text" placeholder="title">
                    <select>
                        <option selected disabled hidden> Services </option>
                        <option value="1">Restaurant</option>
                        <option value="2">Boisson</option>
                        <option value="3">Leisure</option>
                        <option value="4">Gallerie</option>
                        <option value="5">Meeting</option>
                        <option value="6">Contact</option>
                        <option value="7">Event</option>
                        <option value="8">Well-being</option>
                        <option value="9">weather</option>
                        <option value="10">prayer</option>
                        <option value="11">concierge</option>
                    </select>
                </div>
                <div class="section_two_service">
              <div  class="imageUploader"
                DATI-COMPOSENT="Uploader"
                DATI-ID="uploadIamgeRestau"
                DATI-UPDATE="AddServiceForm"
                UPLOAD-INPUT-NAME="RESTAU_INPUT"
                >


                </div>
                </div>
                <button>
                    <img src="/assets/img/valid.png" alt="">
                    <p>Add</p>
                </button>

            </div>
        </div>
    </div>
            </div>
