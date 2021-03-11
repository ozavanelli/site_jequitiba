<?php
session_start();
if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $fname = $_POST['fname'];
    $cidade = $_POST['cidade'];
    $fone = $_POST['fone'];
    $tag = $_POST['tag'];
    if(!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL) === false){
        // MailChimp API credentials
        $apiKey = '7432b1c1b8e0cef71d541f115da2028f-us1';
        $listID = 'b9de12b9d6';

        // MailChimp API URL
        $memberID = md5(strtolower($email));
        $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
        $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listID . '/members/' . $member_id;

        // member information
        $json = json_encode([
            'email_address' => $email,
            'status'        => 'subscribed',
            'merge_fields'  => [
                'FNAME'     => $fname,
                'CIDADE'    => $cidade,
                'FONE'      => $fone
            ],
            'tags'          => array($tag),
        ]);

        // send a HTTP POST request with curl
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // store the status message based on response code
        if ($httpCode == 200) {
            $_SESSION['msg'] = '<p class="feito wow fadeIn">Feito! Voce receberá um e-mail de confirmação da sua inscrição.</p>';
        } else {
            switch ($httpCode) {
                case 400:
                    $msg = 'Este e-mail já esta inscrito. Por favor, utilize outro e-mail.';
                    break;
                default:
                    $msg = 'Ocorreu um problema, tente novamente mais tarde.';
                    break;
            }
            $_SESSION['msg'] = '<p class="nao_feito wow fadeIn">'.$msg.'</p>';
        }
    }else{
        $_SESSION['msg'] = '<p style="color: #cc1c44">Insira um e-mail válido.</p>';
    }
}
// redirect to homepage
header('location:index.php#container_form');