<?

    if( $_POST['signup_go'] ) {
        // print_r( $_POST );
        require_once( 'conf.php' );
        $curator_fio = $_POST['curator_fio'];
        $msg_theme = $_POST['msg_theme'];
        $parent_email = $_POST['parent_email'];
        $member_fio = $_POST['member_fio'];
        $region = $_POST['region'];
        $project_name = $_POST['project_name'];
        $project_desc = $_POST['project_desc'];
        $file = fileupload( 'file' );
        DBQuery(" INSERT INTO `signups` 
            (`curator_fio`,`msg_theme`,`parent_email`,`member_fio`,`region`,`project_name`,`project_desc`,`file`)
            VALUES
            ('$curator_fio','$msg_theme','$parent_email','$member_fio','$region','$project_name','$project_desc','$file')
         ");
        header('Location: index.php?note=s');
    } else {
        header('Location: index.php');
    }