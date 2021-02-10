// Scroll
$(function () {
	$('.saiba_mais a[href^="#"]').click(function () {
		var menuHeight = $(".header_height").innerHeight(),
			id = $(this).attr("href"),
			targetOffset = $(id).offset().top;

		$("html,body").animate({
				scrollTop: targetOffset - 0
			},
			800
		);
	});
});

// jquery mask plugin (Fone 9 dígitos com DDD)
jQuery("input.fone").mask("(99) 9999-99999");
var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
$('input.fone').mask(SPMaskBehavior, spOptions);


//jquery validation
$("#form").validate();

// Validação telefone com DDD
$("input.fone").rules("add", {
    required: true,
    minlength: 14,
    messages: {
        minlength: jQuery.validator.format("Por favor, insira um número de telefone válido com DDD ( _ _ )")
    }
});

// Tradução jquery validation
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "../jquery.validate"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.extend($.validator.messages, {

        // Frases Tradução
        required: "Este campo &eacute; obrigatório.",
        remote: "Por favor, corrija este campo.",
        email: "Por favor, forne&ccedil;a um endere&ccedil;o de email v&aacute;lido.",
        url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
        date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
        dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
        number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
        digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
        creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
        equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
        maxlength: $.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
        minlength: $.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
        rangelength: $.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
        range: $.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
        max: $.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
        min: $.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}."),
        step: $.validator.format("Por favor, forne&ccedil;a um valor m&uacute;ltiplo de {0}."),

        // Frases Tradução - Metodos Adicionais
        maxWords: $.validator.format("Por favor, forne&ccedil;a com {0} palavras ou menos."),
        minWords: $.validator.format("Por favor, forne&ccedil;a pelo menos {0} palavras."),
        rangeWords: $.validator.format("Por favor, forne&ccedil;a entre {0} e {1} palavras."),
        accept: "Por favor, forne&ccedil;a um tipo v&aacute;lido.",
        alphanumeric: "Por favor, forne&ccedil;a somente com letras, n&uacute;meros e sublinhados.",
        bankaccountNL: "Por favor, forne&ccedil;a com um n&uacute;mero de conta banc&aacute;ria v&aacute;lida.",
        bankorgiroaccountNL: "Por favor, forne&ccedil;a um banco v&aacute;lido ou n&uacute;mero de conta.",
        bic: "Por favor, forne&ccedil;a um c&oacute;digo BIC v&aacute;lido.",
        cifES: "Por favor, forne&ccedil;a um c&oacute;digo CIF v&aacute;lido.",
        creditcardtypes: "Por favor, forne&ccedil;a um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.",
        currency: "Por favor, forne&ccedil;a uma moeda v&aacute;lida.",
        dateFA: "Por favor, forne&ccedil;a uma data correta.",
        dateITA: "Por favor, forne&ccedil;a uma data correta.",
        dateNL: "Por favor, forne&ccedil;a uma data correta.",
        extension: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
        giroaccountNL: "Por favor, forne&ccedil;a um n&uacute;mero de conta corrente v&aacute;lido.",
        iban: "Por favor, forne&ccedil;a um c&oacute;digo IBAN v&aacute;lido.",
        integer: "Por favor, forne&ccedil;a um n&uacute;mero n&atilde;o decimal.",
        ipv4: "Por favor, forne&ccedil;a um IPv4 v&aacute;lido.",
        ipv6: "Por favor, forne&ccedil;a um IPv6 v&aacute;lido.",
        lettersonly: "Por favor, forne&ccedil;a apenas com letras.",
        letterswithbasicpunc: "Por favor, forne&ccedil;a apenas letras ou pontua&ccedil;ões.",
        mobileNL: "Por favor, fornece&ccedil;a um n&uacute;mero v&aacute;lido de telefone.",
        mobileUK: "Por favor, fornece&ccedil;a um n&uacute;mero v&aacute;lido de telefone.",
        nieES: "Por favor, forne&ccedil;a um NIE v&aacute;lido.",
        nifES: "Por favor, forne&ccedil;a um NIF v&aacute;lido.",
        nowhitespace: "Por favor, n&atilde;o utilize espa&ccedil;os em branco.",
        pattern: "O formato fornecido &eacute; inv&aacute;lido.",
        phoneNL: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.",
        phoneUK: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.",
        phoneUS: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.",
        phonesUK: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.",
        postalCodeCA: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.",
        postalcodeIT: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.",
        postalcodeNL: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.",
        postcodeUK: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.",
        postalcodeBR: "Por favor, forne&ccedil;a um CEP v&aacute;lido.",
        require_from_group: $.validator.format("Por favor, forne&ccedil;a pelo menos {0} destes campos."),
        skip_or_fill_minimum: $.validator.format("Por favor, optar entre ignorar esses campos ou preencher pelo menos {0} deles."),
        stateUS: "Por favor, forne&ccedil;a um estado v&aacute;lido.",
        strippedminlength: $.validator.format("Por favor, forne&ccedil;a pelo menos {0} caracteres."),
        time: "Por favor, forne&ccedil;a um hor&aacute;rio v&aacute;lido, no intervado de 00:00 a 23:59.",
        time12h: "Por favor, forne&ccedil;a um hor&aacute;rio v&aacute;lido, no intervado de 01:00 a 12:59 am/pm.",
        url2: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
        vinUS: "O n&uacute;mero de identifica&ccedil;&atilde;o de ve&iacute;culo informado (VIN) &eacute; inv&aacute;lido.",
        zipcodeUS: "Por favor, forne&ccedil;a um c&oacute;digo postal americano v&aacute;lido.",
        ziprange: "O c&oacute;digo postal deve estar entre 902xx-xxxx e 905xx-xxxx",
        cpfBR: "Por favor, forne&ccedil;a um CPF v&aacute;lido.",
        nisBR: "Por favor, forne&ccedil;a um NIS/PIS v&aacute;lido",
        cnhBR: "Por favor, forne&ccedil;a um CNH v&aacute;lido.",
        cnpjBR: "Por favor, forne&ccedil;a um CNPJ v&aacute;lido."
    });
    return $;
}));


// Google Maps API
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.228528, lng: -49.951865 },
        zoom: 17,
        styles:
        [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#cc1c44"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#cc1c44"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#cc1c44"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#5b4e55"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#5b4e55"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#5b4e55"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#5b4e55"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#5b4e55"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#5b4e55"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#5b4e55"}]}]
    });
    var iconBase =
        'https://acinco.eng.br/img/';
    var icons = {
        info: {
            icon: iconBase + 'icon_paineiras.png'
        },
    };
    var features = [
        {
            position: new google.maps.LatLng(-22.228528, -49.951865),
            type: 'info'
        }
    ];

    // Create markers
    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };
}