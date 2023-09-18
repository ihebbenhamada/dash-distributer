<?php

    namespace DAO;

    use \PDO ;
	use \Database ;
	
	class State extends Database{
        public $res;
        public $error;
        public function __construct(){
            // $this->db = new \Database();
        }

        public function get_idTranslate($id){
            try {
                $trx = new Trx();
                if($res = $trx->get_Code(get("lan"))){
                    // print_r($res);
                    if($res != "no-result"){
                        if(!$res[0]->isPrimary){
                            $sql = "SELECT s.`id`, ts.trx_id, s.`country_id`, ts.content AS name, s.`latitude`, s.`longitude`, s.`aptitude`, s.`mapData`,s.`embed` FROM `State` s, `Trx_state` ts WHERE s.id = ts.state_id AND s.id = $id AND ts.trx_id=".$res[0]->id;
                            $res = $this->Select("State",$sql);
                            return $res;
                        }else{
                            $sql = "SELECT * FROM `State` where id = :id";
                            $valeur = array(':id' => $id);
                            if($res = $this->Select("State",$sql, $valeur)){
                                $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                                    FROM Trx_state tc, Trx t WHERE 
                                    tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
                    }else{
                        $sql = "SELECT * FROM `State` where id = :id";
                        $valeur = array(':id' => $id);
                        if($res = $this->Select("State",$sql, $valeur)){
                            $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                                FROM Trx_state tc, Trx t WHERE 
                                tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
                }else{
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }
        
        public function get_id($id){
            if(get("lan")){
                return $this->get_idTranslate($id);
            }else{
                $sql = "SELECT * FROM `State` where id = :id";
                $valeur = array(':id' => $id);
                $res = $this->Select("State",$sql, $valeur);
                if($res && $res!="no-result"){
                    $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                        FROM Trx_state tc, Trx t WHERE 
                        tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
        }
        
        public function getTranslate(){
            try {
                $trx = new Trx();
                if($res = $trx->get_Code(get("lan"))){
                    // print_r($res);
                    if($res != "no-result"){
                        if(!$res[0]->isPrimary){
                            $sql = "SELECT s.`id`, ts.trx_id, s.`country_id`, ts.content AS name, s.`latitude`, s.`longitude`, s.`aptitude`, s.`mapData`,s.`embed` FROM `State` s, `Trx_state` ts WHERE s.id = ts.state_id AND ts.trx_id=".$res[0]->id;
                            $res = $this->Select("State",$sql);
                            return $res;
                        }else{
                            $sql = "SELECT * FROM `State`";

                            if($res = $this->Select("State",$sql)){
                                $cdao = new Country();
                                foreach ($res as &$state) {
                                    $state->Country = $cdao->get_id($state->country_id)[0];
                                    $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content FROM Trx_state tc, Trx t WHERE tc.state_id = ".$state->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.State_id";
                                    if($res2 = $this->SelectWithOutModel($sql)){
                                        if($res2 != "no-result"){
                                            $state->Translate = $res2;
                                        }else{
                                            $state->Translate = false;
                                        }
                                        
                                    }else{
                                        $state->Translate = false;
                                    }
                                    
                                }

                                return $res;
                                
                            }else{
                                return false;
                            }
                        }
                        
                    }else{
                        $sql = "SELECT * FROM `State`";

                        if($res = $this->Select("State",$sql)){
                            $cdao = new Country();
                            foreach ($res as &$state) {
                                $state->Country = $cdao->get_id($state->country_id)[0];
                                $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content FROM Trx_state tc, Trx t WHERE tc.state_id = ".$state->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.State_id";
                                if($res2 = $this->SelectWithOutModel($sql)){
                                    if($res2 != "no-result"){
                                        $state->Translate = $res2;
                                    }else{
                                        $state->Translate = false;
                                    }
                                    
                                }else{
                                    $state->Translate = false;
                                }
                                
                            }

                            return $res;
                            
                        }else{
                            return false;
                        }
                    }
                    
                }else{
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }


        public function get_country_idTranslate($id){
            
            try {
                $trx = new Trx();
                if($res = $trx->get_Code(get("lan"))){
                    // print_r($res);
                    if($res != "no-result"){
                        if(!$res[0]->isPrimary){
                            $sql = "SELECT s.`id`, ts.trx_id, s.`country_id`, ts.content AS name, s.`latitude`, s.`longitude`, s.`aptitude`, s.`mapData`,s.`embed` FROM `State` s, `Trx_state` ts WHERE s.id = ts.state_id AND s.country_id = :id AND ts.trx_id=".$res[0]->id;
                            $valeur = array(':id' => $id);
                            $res = $this->Select("State",$sql,$valeur);
                            return $res;
                        }else{
                            $sql = "SELECT * FROM `State` where country_id = :id";
                            $valeur = array(':id' => $id);
                            $res = $this->Select("State",$sql, $valeur);
                            if($res && $res != "no-result"){
                                $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                                    FROM Trx_state tc, Trx t WHERE 
                                    tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
                    }else{
                        $sql = "SELECT * FROM `State` where country_id = :id";
                        $valeur = array(':id' => $id);
                        $res = $this->Select("State",$sql, $valeur);
                        if($res && $res != "no-result"){
                            $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                                FROM Trx_state tc, Trx t WHERE 
                                tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
                }else{
                    $sql = "SELECT * FROM `State` where country_id = :id";
                    $valeur = array(':id' => $id);
                    $res = $this->Select("State",$sql, $valeur);
                    if($res && $res != "no-result"){
                        $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                            FROM Trx_state tc, Trx t WHERE 
                            tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
            } catch (\Throwable $th) {
                return false;
            }
        }
        public function get_country_id($id){
            if(get("lan")){
                return $this->get_country_idTranslate($id);
            }else{
                $sql = "SELECT * FROM `State` where country_id = :id";
                $valeur = array(':id' => $id);
                $res = $this->Select("State",$sql, $valeur);
                if($res && $res != "no-result"){
                    $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content 
                        FROM Trx_state tc, Trx t WHERE 
                        tc.state_id = ".$res[0]->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.state_id";
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
            
        }

		public function getALL(){
            if(get("lan")){
                return $this->getTranslate();
            }else{
                $sql = "SELECT * FROM `State`";

                if($res = $this->Select("State",$sql)){
                    $cdao = new Country();
                    foreach ($res as &$state) {
                        $state->Country = $cdao->get_id($state->country_id)[0];
                        $sql = "SELECT UPPER(t.languageName) As languageName, UPPER(t.maternalName) As maternalName, UPPER(t.code) AS code, tc.content FROM Trx_state tc, Trx t WHERE tc.state_id = ".$state->id." AND t.id = tc.trx_id AND t.isActive = 1 ORDER BY tc.State_id";
                        if($res2 = $this->SelectWithOutModel($sql)){
                            if($res2 != "no-result"){
                                $state->Translate = $res2;
                            }else{
                                $state->Translate = false;
                            }
                            
                        }else{
                            $state->Translate = false;
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