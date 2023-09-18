<?php
    header("Content-type: application/json; charset=utf-8");
    if(!empty($route->getClassName())){
        $class = 'Business\\'.$route->getClassName();
        if(class_exists($class)){
            $sc = new $class();
        }else{
            header("HTTP/1.0 404 Not Found");
            exit();
        }

        if(!empty($route->getMethodName())){
            $method = $route->getMethodName();
            if(method_exists($sc, $method)) {
                $x = $sc->$method();
            }else{
                header("HTTP/1.0 404 Not Found");
            }
        }
        unset($class,$sc,$method,$x);
    }
    
?>