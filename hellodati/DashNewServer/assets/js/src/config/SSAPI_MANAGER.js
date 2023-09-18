class SS_API_Management{
    constructor() {
        this._session="new";
        this._aid="";
        this._as="";
        this._si="";
        this._sat="";
        this._srt="";
        this.wait=false;
        this.waitForpile = false;
        this.dns="";
        this.pile= new Array();
        this.lastRequest_param={};
        this.need_reopen_event = true;
        document.addEventListener('session_update', (e) => this.UPDATE_PARAMS(e));
        document.addEventListener('session_should_refresh', (e) => this.RESEND_with_REFRESH(e));
    }

    setlastRequest_param(param){
        this.lastRequest_param = JSON.stringify(param);
    }
    getlastRequest_param(){
        return JSON.parse(this.lastRequest_param);
    }

    LASTPARAM_COMPARE(param){
        if(JSON.stringify(param) == this.lastRequest_param){
            return true;
        }else{
            return false;
        }
    }
    setSI(si){
        this._si = si;
    }
    getSI(){
        return this._si;
    }

    setSAT(sat){
        this._sat = sat;
    }
    getSAT(){
        return this._sat;
    }

    setSRT(srt){
        this._srt = srt;
    }
    getSRT(){
        return this._srt;
    }


    setSESSION(session){
        this._session=session;
    }

    getSESSION(){
        return this._session;
    }


    setAID(aid){
        return this._aid=aid;
    }

    getAID(){
        return this._aid;
    }

    setAS(as){
        return this._as = as;
    }

    getAS(){
        return this._as;
    }

    isWAIT(){
        return this.wait
    }

    CONSTRUCT_HEADER(){
        if(this._session=="new"){
            this.wait=true;
            return  {"session":"new","appid":this._aid,"app_secret":this._as}
        }else if(this._session=="linked"){
            return  {"session":"linked","session_id":this._si,"session_access_token":this._sat}
        }else if(this._session=="refresh"){
            return  {"session":"refresh","session_id":this._si,"session_access_token":this._sat,"session_refresh_token":this._srt}
        }else{
            return  {}
        }
    }

    EXIST_IN_PILE(param){
        
        if(this.LASTPARAM_COMPARE(param)){
            return true;
        }
        for(var i=0;i<this.pile.length;i++){
            if(this.pile[i] == JSON.stringify(param)){
                return true;
            }
        }
        return false;
    }

    EXEC_PILE(){
        while(this.pile.length > 0){
            SSAPI.SUBMIT(JSON.parse(this.pile[0]));
            this.pile.shift();
        }
        this.lastRequest_param="";
    }

    UPDATE_PARAMS(s){
        this._si = s.id;
        this._sat = s.access_token;
        this._srt = s.refresh_token;
        this._session = "linked";
        this.wait = false;
        this.lastRequest_param="";
        SSAPI.UPDATE(this.getSESSION());
        this.EXEC_PILE();
    }

    RESEND_WITH_REFRESH(param) {
        if (this.wait == true) {
            length = this.pile.length;
            if (!this.EXIST_IN_PILE(param)){
                this.pile.push(JSON.stringify(param));
            }
        } else {
            this._session = "refresh";
            SSAPI.SUBMIT(param);
            this.wait = true;
            this.lastRequest_param = param;
        }
    }

    RESEND_WITH_NEW(param) {
        if (this.wait == true) {
            length = this.pile.length;
            if (!this.EXIST_IN_PILE(param)) {
                this.pile.push(JSON.stringify(param)); 
            }
        } else {
            this._session = "new";
            SSAPI.SUBMIT(param);
            this.wait = true;
            this.lastRequest_param = JSON.stringify(param);
        }
    }

    SESSION_ERROR(erroCode){
        if ((erroCode >= 1100) && (erroCode <= 1120)) {
            return true;
        } else {
            return false;
        }
    }

    SESSION_NEED_REFRESH(erroCode) {
        if (erroCode == 1115 || erroCode == 1120) {
            return true;
        } else {
            return false;
        }
    }


    SESSION_REOPEN(erroCode) {
        if (erroCode == 1113 || erroCode == 1114 || erroCode == 1116 || erroCode == 1119 || erroCode == 1104) {
            return true;
        } else {
            return false;
        }
    }

    SESSION_STOPED_JS(erroCode) {
        if (erroCode == 1100 || erroCode == 1101 || erroCode == 1102 || erroCode == 1103 || erroCode == 1105 || erroCode == 1109 || erroCode == 1107 || erroCode == 1112) {
            return true;
        } else {
            return false;
        }
    }

    SESSION_STOPED_SERVER(erroCode) {
        if (erroCode == 1106 || erroCode == 1108 || erroCode == 1110 || erroCode == 1119 || erroCode == 1111) {
            return true;
        } else {
            return false;
        }
    }

    FALSE_REFRESH(erroCode) {

        if (erroCode == 1117) {
            return true;
        } else {
            return false;
        }
    }

    RESOLVE_SESSION(param, erroCode) {
        //Param URl with data & onsuccess & onError & data
        if (this.SESSION_NEED_REFRESH(erroCode)) {
            // resend with refresh session
            this.RESEND_WITH_REFRESH(param);
        } else if (this.SESSION_REOPEN(erroCode)) {
            // resend with new session
            // if is auth send authentification
            this.RESEND_WITH_NEW(param);
        } else if (this.SESSION_STOPED_JS(erroCode)) {
            // stop session and block all request
            // javascript error configuration
            console.error("Error code : " + erroCode + " -> verify configuration", "Error JS");
        } else if (this.SESSION_STOPED_SERVER(erroCode)) {
            // stop session and block all request
            // javascript error configuration
            console.error("Error code : " + erroCode + " -> verify configuration", "Error Server");
        }
    }
    EVENTS(name){
        var event = new CustomEvent(name, {
            detail: {}
        });
        document.dispatchEvent(event);
    }
}
let SSAPI_MANAGER = new SS_API_Management(); 