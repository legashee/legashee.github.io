<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		const HOST = 'smtp.mail.ru';
		const LOGIN = 'sevoyan0202@mail.ru';
		const PASS = '332332123geram';
		const PORT = 465;

		// *** /SMTP *** //
    const SENDER = ('sevoyan0202@mail.ru');
    const CATCHER = ('R.inark@yandex.ru');
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    ?>