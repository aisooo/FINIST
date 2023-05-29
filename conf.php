<?php

    define( 'DB_HOST', 'localhost' );
    define( 'DB_NAME', 'finist' );
    define( 'DB_USER', 'mysql' );
    define( 'DB_PASS', 'mysql' );

    $db_con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    mysqli_set_charset($db_con,'utf8mb4');

    function DBQuery($query) {
        $query_res = mysqli_query($GLOBALS['db_con'],$query) or die('Error: '.mysqli_error($GLOBALS['db_con']));
        return $query_res;
    }

    function fileupload($input_name) {
        if($_FILES[$input_name]['tmp_name']) {
            $file_name = $_FILES[$input_name]['name'];
            move_uploaded_file($_FILES[$input_name]['tmp_name'], 'uploads/'.$file_name);
        } else {
            $file_name = '';
        }
        return $file_name;
    }