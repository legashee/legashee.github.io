<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		  require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		   const HOST = 'smtp.yandex.ru';
		   const LOGIN = 'geramsevoyan@yandex.ru';
		  const PASS = '332332123g';
		   const PORT = '465';

		// *** /SMTP *** //
   
    const SENDER = 'geramsevoyan@yandex.ru';
    const CATCHER = 'R.inark@yandex.ru';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    