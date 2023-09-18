<?php


namespace DAO;
use \Database;
use DAO\UsersProd;

class Categories extends Database
{

    /**
     * Categories constructor.
     */
    public function __construct()
    {
    }

    public function addCategory(){
        try {
            $cpt = func_num_args();
            $args= func_get_args();
            echo $args[0];

            if ($cpt>0){
                $sql = "INSERT INTO `Category` (`id`, `categoryName`) VALUES (NULL , :categoryName);";
                $valeur = Array(':categoryName'=>$args[0]);
                if ($res = $this->insert('Category',$sql,$valeur)){
                    echo $res;
                    return $res;
                }else{
                    return false;
                }
            }else{
                return false;
            }

        }catch (\Throwable $th){
            return false;
        }
    }
    public function updateCategory(){
        try {
            $cpt = func_num_args();
            $args= func_get_args();
            $idCat = $args[0];

            if ($cpt>0){
                $sql = "UPDATE `Category` SET `categoryName` = :categoryName WHERE `Category`.`id` = $idCat;";
                $valeur = Array(':categoryName'=>$args[1]);
                if ($res = $this->update('Category',$sql,$valeur)){
                    return $res;
                }else{
                    return false;
                }
            }else{
                return false;
            }

        }catch (\Throwable $th){
            return false;
        }
    }
    public function getAllCategories(){
        try {
            $sql = "SELECT * FROM `Category`";
            if($res = $this->Select("Category",$sql)){

                if ($res !="no-result") {
                    return $res;
                }else{
                    return false;
                }

            }
        } catch (\Throwable $th) {
            return false;
        }

    }
    public function searchCategory($val){
        try {
            $sql ="SELECT * FROM `Category` WHERE `categoryName`= '".$val."'";
            if ($res = $this->Select("Category",$sql)){
                if ($res != "no-result"){
                    return $res;
                }else{
                    return  false;
                }
            }
        }catch (\Throwable $th){
            return false;
        }

    }
    public function deleteCtegory($id){
        try {
            $sql ="DELETE FROM `UsersProd` WHERE `UsersProd`.`id` = $id";

            if ($res=$this->insert($sql)){
                return $res;
            }else{
                return false;
            }

        }catch (\Throwable $th){
            return false;
        }
    }


}