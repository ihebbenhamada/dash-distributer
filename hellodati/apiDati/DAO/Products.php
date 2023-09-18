<?php


namespace DAO;
use \Database;


class Products
{

    /**
     * Products constructor.
     */
    public function __construct()
    {
    }

    public function checkProdById($id){
        $sql ="SELECT * FROM `Product` WHERE `id` = :id";
        $valeur = array(':id'=>$id);

        if ($res =$this->Select("Product",$sql,$valeur)){

            return true;
        }else{
            return false;
        }
    }

    public function addProduct(){
        $cpt = func_num_args();
        $args = func_get_args();

        if ($cpt > 3){

            /*INSERT INTO `Product` (`id`, `id_cat`, `nom`, `image`, `enable`) VALUES ('1', '1', 'yaourt', 'image1', '1');*/

            $id_cat = $args[0];
            $nom = $args[1];
            $image = $args[2];
            $enable =$args[3];

        }else{
            return false;
        }

    }
}