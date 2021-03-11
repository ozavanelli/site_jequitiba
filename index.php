<?php session_start(); // place it on the top of the script ?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Spot">
    <meta name="author" content="ACINCO">
    <meta name="robots" content="index,follow">
    <meta name="googlebot" content="index,follow">
    <meta name="language" content="pt-BR">

    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/avicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <meta property="og:title" content="Jequitibá | ACINCO">
    <meta property="og:site_name" content="">
    <meta property="og:url" content="https://acinco.eng.br/jequitiba">
    <meta property="og:description" content="Novo empreendimento ACINCO">
    <meta property="og:type" content="place">
    <meta property="og:image" content="https://acinco.eng.br/img/og_jequitiba.png">

    <script src="https://kit.fontawesome.com/d88b10da32.js"></script>
    <script src="js/jquery-3.4.1.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsivo.css">
    <link rel="stylesheet" href="css/all.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

    <title>Jequitibá | ACINCO</title>

    <link rel="shortcut icon" href="http://acinco.eng.br/spot/images/favicon.png">    
</head>
<body>
    <section class="introducao">
        <div class="saiba_mais desk_only">
            <a class="animate__animated animate__pulse animate__infinite" href="#container_form"><i class="fal fa-angle-double-down"></i></a>
        </div>
    </section>

    <main class="">
        <div class=" flex">
            <div class="form" id="container_form">
                <div class="container_form">
                    <?php
                    $statusMsg = !empty($_SESSION['msg'])?$_SESSION['msg']:'';
                    unset($_SESSION['msg']);
                    if ($statusMsg) {
                        echo $statusMsg;
                    } else { ?>
                    <form method="post" action="action.php" id="form">
                        <h2>Preencha o Formulário e receba informações sobre o novo Empreendimento ACINCO</h2>
                        <ul>
                            <li><input type="text" name="fname" placeholder="Nome" required /></li>
                            <li><input type="email" name="email" placeholder="E-mail" required /></li>
                            <li><input type="text" name="cidade" placeholder="Cidade" required /></li>
                            <li><input type="tel" name="fone" placeholder="Telefone" minlength="14" class="fone" required /></li>
                            <li><input type="hidden" name="tag" value="Captação Jequitiba" /></li>
                        </ul>
                        <button type="submit" name="submit" value="ENVIAR" class="btn" id="btn"><span>ENVIAR</span> <i class="far fa-paper-plane fa-lg"></i></button>
                    </form>
                    <?php } ?>
                </div>
            </div>
            <div id="map"></div>
        </div>
    </main>

    <footer>
        <img src="img/logo_acinco.svg" alt="Logo ACINCO" class="logo_acinco">
        <div class="sociais">
            <a href="https://www.facebook.com/INCORPORADORAACINCO/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/acinco_inc/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://acinco.eng.br" target="_blank"><i class="fas fa-globe"></i></a>
        </div>
    </footer>

    <script src="js/jquery.validate.js"></script>
    <script src="js/jquery.mask.js"></script>
    <script src="js/main.js"></script>
    <script src="js/wow.js"></script>
    <script>
        new WOW().init();
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBY-H9wnHnowVYbWsivRVDrm7ZwogDVW-w&callback=initMap" async defer></script>
</body>
</html>