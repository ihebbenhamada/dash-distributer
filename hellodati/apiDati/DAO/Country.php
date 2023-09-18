<?php

    namespace DAO;

    use \PDO ;
	use \Database ;
	
	class Country extends Database{
        public $res;
        public $error;
        private $db;
        public function __construct(){
            // $this->db = new \Database();
        }
        public function get_idTranslate($id){
            try{
                $trx = new Trx();
                if($res = $trx->get_Code(get("lan"))){
                    if($res != "no-result"){
                        if(!$res[0]->isPrimary){
                            $sql = "SELECT Country.id, Trx_country.id AS trx_id, Trx_country.content AS name, Country.code2, Country.code3, Country.latitude, Country.longitude FROM `Country`, `Trx_country` WHERE Country.id = :id AND Country.id =  Trx_country.country_id AND Trx_country.trx_id=".$res[0]->id;
                            $val= array(":id" => $id);
                            $res= $this->Select("Country",$sql,$val);
                            if($res && $res != "no-result"){
                                return $res;
                            }else{
                                return $this->get_id($id,false);
                            }
                        }else{
                            return $this->get_id($id,false);

                        }
                    }else{
                        return $this->get_id($id,false);
                    }
                }else{
                    return false;
                }
            }catch(\Throwable $th){
                return false;
            }
        }
        
		public function get_id(){
            $ctp = func_num_args();
            $args = func_get_args();
            if($ctp < 0){
                return false;
                exit();
            }
            $id = $args[0];
            if($ctp > 1){
                $lan = $args[1];
            }else{
                $lan = true;
            }
            if(get("lan") && $lan == true){
                return $this->get_idTranslate($id);
                exit();
            }
            $sql = "SELECT * FROM `Country` where id = :id";
            $valeur = array(':id' => $id);
            if($res = $this->Select("Country",$sql, $valeur)){
                $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                    FROM Trx_country tc, Trx t WHERE 
                    tc.country_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.country_id";
                
                if($res2 = $this->SelectWithOutModel($sql)){
                    if($res2 != "no-result"){
                        $res[0]->Translate = $res2;
                    }else{
                        $res[0]->Translate = false;
                    }
                    
                }else{
                    $res[0]->Translate = false;
                }

                return $res;
            }else{
                return false;
            }
        }

        public function getTranslate(){
            try {
                $trx = new Trx();
                if($res = $trx->get_Code(get("lan"))){
                    // print_r($res);
                    if($res != "no-result"){
                        if(!$res[0]->isPrimary){
                            $sql = "SELECT Country.id, Trx_country.trx_id, Trx_country.content, Country.code2, Country.code3, Country.latitude, Country.longitude FROM `Country`, Trx_country WHERE Country.id = Trx_country.country_id AND Trx_country.trx_id=".$res[0]->id;
                            $res = $this->Select("Country",$sql);
                            if($res){

                                foreach ($res as &$country) {
                                    $sdao = new State();
                                    if($states = $sdao->get_country_id($country->id)){
                                        $country->State = $states;
                                    }else{
                                        $country->State = [];
                                    }
                                    
                                    
                                }

                                return $res;
                                
                            }else{
                                return false;
                            }
                        }else{
                            $sql = "SELECT * FROM `Country`";

                            if($res = $this->Select("Country",$sql)){

                                foreach ($res as &$country) {
                                    $sdao = new State();
                                    if($states = $sdao->get_country_id($country->id)){
                                        $country->State = $states;
                                    }else{
                                        $country->State = [];
                                    }
                                    $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content FROM Trx_country tc, Trx t WHERE tc.country_id = ".$country->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.country_id";
                                    if($res2 = $this->SelectWithOutModel($sql)){
                                        if($res2 != "no-result"){
                                            $country->Translate = $res2;
                                        }else{
                                            $country->Translate = false;
                                        }
                                        
                                    }else{
                                        $country->Translate = false;
                                    }
                                    
                                }

                                return $res;
                                
                            }else{
                                return false;
                            }
                        }
                    }
                }else{

                }
            } catch (\Throwable $th) {
                return false;
            }
                
        }
        
		public function getALL(){
            if(get("lan")){
                return $this->getTranslate();
            }else{
                $sql = "SELECT * FROM `Country`";

                if($res = $this->Select("Country",$sql)){

                    foreach ($res as &$country) {
                        $sdao = new State();
                        if($states = $sdao->get_country_id($country->id)){
                            $country->State = $states;
                        }else{
                            $country->State = [];
                        }
                        $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content FROM Trx_country tc, Trx t WHERE tc.country_id = ".$country->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.country_id";
                        if($res2 = $this->SelectWithOutModel($sql)){
                            if($res2 != "no-result"){
                                $country->Translate = $res2;
                            }else{
                                $country->Translate = false;
                            }
                            
                        }else{
                            $country->Translate = false;
                        }
                        
                    }

                    return $res;
                    
                }else{
                    return false;
                }
            }
        }
    }
?>