<body>
    <div class="login-container" >
        <img src="assets/img/login/login-logo.png" />
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <div class="login-form text-center container">
            <input required type="email" class="col-md-2 col-sm-12" id="username" placeholder="E-Mail" value="" />
            <input required class="col-md-2 col-sm-12" id="password" type="password" placeholder="Password" value="" />
            <div>

                <button class="btn_send">
                <span></span> <span></span> <span></span> <span></span>
                    <div DATI-SPINNER-LOGIN class="loadingspinner" style="display:none"></div>
                    Login

                </button>

                   <div class="msg_erreur_login" DATI-ERRRUE-MSG-LOGIN style="display:none">Retry again ! </div>
            </div>
        </div>
    </div>
    <?php
        include("Views/wireless.php");
    ?>
</body>
</html>
    