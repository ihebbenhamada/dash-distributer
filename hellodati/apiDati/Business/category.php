<?php


namespace Business;


use Models\JsonCode;

class category
{

    private $dao;
    private $json;

    public function __construct(){
        if (class_exists('\DAO\Categories')){
            $this->dao = new \DAO\Categories();
        }else{
            header("HTTP/1.0 404 Not Found");
            exit();
        }
    }

    public function addCategory(){
        try {
            if (required_posts("categoryName")){

                $categoryName = post("categoryName");

                if ($res = $this->dao->addCategory($categoryName)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"You must subscribe");
                    echo json_encode($json);
                }
            }else {
                $json = new JsonCode(0,"Parameters not receive");
                echo json_encode($json);
                return false;
            }
        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }

    public function updateCategory(){
        try {
            if (required_posts("categoryName")){

                $categoryName = post("categoryName");
                if ($res = $this->dao->updateCategory($categoryName)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"Opération non effectué");
                    echo json_encode($json);
                }
            }else {
                $json = new JsonCode(0,"Parameters not receive");
                echo json_encode($json);
                return false;
            }
        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }

    public function getAllCategory(){
        try {
                if ($res = $this->dao->getAllCategories()){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"(0) Category found");
                    echo json_encode($json);
                }

        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }

    public function SearchCategory(){
        try {
            if (required_posts("categoryName")){

                $categoryName = post("categoryName");
                if ($res = $this->dao->searchCategory($categoryName)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"Not found");
                    echo json_encode($json);
                }
            }else {
                $json = new JsonCode(0,"Parameters not receive");
                echo json_encode($json);
                return false;
            }
        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }

    public function DeleteCategory(){
        try {
            if (required_posts("id")){

                $id = post("id");
                if ($res = $this->dao->deleteCtegory($id)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"Opération non effectué");
                    echo json_encode($json);
                }
            }else {
                $json = new JsonCode(0,"Parameters not receive");
                echo json_encode($json);
                return false;
            }
        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }

}