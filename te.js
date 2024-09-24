"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = [
    {
        id: '5637144900',
        localities: [
            {
                location: 'ABTAO',
                id: '5637145637',
            },
            {
                location: 'CASTRO',
                id: '5637145638',
            },
            {
                location: 'CURAHUE',
                id: '5637145639',
            },
        ],
        regionCode: '10',
        name: 'CASTRO',
    },
    {
        id: '5637144880',
        localities: [
            {
                location: 'ACHAO',
                id: '5637145774',
            },
            {
                location: 'APIAO',
                id: '5637145775',
            },
            {
                location: 'CHAULINEC',
                id: '5637145776',
            },
        ],
        regionCode: '10',
        name: 'QUINCHAO',
    },
    {
        id: '5637144707',
        localities: [
            {
                location: 'ADUANA',
                id: '5637145275',
            },
            {
                location: 'LONTUE',
                id: '5637145276',
            },
            {
                location: 'MOLINA',
                id: '5637145277',
            },
            {
                location: 'YACEL',
                id: '5637145278',
            },
        ],
        regionCode: '07',
        name: 'MOLINA',
    },
    {
        id: '5637144714',
        localities: [
            {
                location: 'ADUANA PEJERREY',
                id: '5637145260',
            },
            {
                location: 'CAMPAMENTO ANCOA',
                id: '5637145261',
            },
            {
                location: 'EL SALTO',
                id: '5637145262',
            },
            {
                location: 'LINARES',
                id: '5637145263',
            },
            {
                location: 'LLEPO',
                id: '5637145264',
            },
            {
                location: 'LOS RABONES',
                id: '5637145265',
            },
            {
                location: 'MELADO',
                id: '5637145266',
            },
            {
                location: 'ROBLERIA',
                id: '5637145267',
            },
        ],
        regionCode: '07',
        name: 'LINARES',
    },
    {
        id: '5637144681',
        localities: [
            {
                location: 'AGUA BUENA',
                id: '5637145216',
            },
            {
                location: 'LA RUFINA',
                id: '5637145217',
            },
            {
                location: 'PUENTE NEGRO',
                id: '5637145218',
            },
            {
                location: 'ROMA',
                id: '5637145219',
            },
            {
                location: 'SAN FERNANDO',
                id: '5637145220',
            },
            {
                location: 'SIERRA BELLAVISTA',
                id: '5637145221',
            },
            {
                location: 'TERMAS DE CAUQUENES',
                id: '5637145222',
            },
            {
                location: 'TERMAS DEL FLACO',
                id: '5637145223',
            },
            {
                location: 'TINGUIRIRICA',
                id: '5637145224',
            },
            {
                location: 'TROMPETILLA',
                id: '5637145225',
            },
        ],
        regionCode: '06',
        name: 'SAN FERNANDO',
    },
    {
        id: '5637144605',
        localities: [
            {
                location: 'AGUA GRANDE',
                id: '5637144882',
            },
            {
                location: 'ALMIRANTE LATORRE',
                id: '5637144883',
            },
            {
                location: 'ALTOVALSOL',
                id: '5637144884',
            },
            {
                location: 'COQUIMBITO',
                id: '5637144885',
            },
            {
                location: 'EL CHACAY',
                id: '5637144886',
            },
            {
                location: 'EL ISLON',
                id: '5637144887',
            },
            {
                location: 'EL ROMERAL',
                id: '5637144888',
            },
            {
                location: 'LA COMPANÍA',
                id: '5637144889',
            },
            {
                location: 'LA SERENA',
                id: '5637144890',
            },
            {
                location: 'LAMBERT',
                id: '5637144891',
            },
            {
                location: 'LAS ROJAS',
                id: '5637144892',
            },
            {
                location: 'SAN PABLO',
                id: '5637144893',
            },
            {
                location: 'TEATINOS',
                id: '5637144894',
            },
        ],
        regionCode: '04',
        name: 'LA SERENA',
    },
    {
        id: '5637144849',
        localities: [
            {
                location: 'AGUA SANTA',
                id: '5637145557',
            },
            {
                location: 'COLONIA LAUTARO',
                id: '5637145558',
            },
            {
                location: 'LAUTARO',
                id: '5637145559',
            },
            {
                location: 'LOS PRADOS',
                id: '5637145560',
            },
            {
                location: 'PUA',
                id: '5637145561',
            },
            {
                location: 'RETEN DOLLINCO',
                id: '5637145562',
            },
        ],
        regionCode: '09',
        name: 'LAUTARO',
    },
    {
        id: '5637144587',
        localities: [
            {
                location: 'AGUA VERDE',
                id: '5637144630',
            },
            {
                location: 'ANTOFAGASTA',
                id: '5637144631',
            },
            {
                location: 'AZUFRERA',
                id: '5637144632',
            },
            {
                location: 'AZUFRERA PLATO DE SOPA',
                id: '5637144633',
            },
            {
                location: 'BAQUEDANO',
                id: '5637144634',
            },
            {
                location: 'BLANCO ENCALADA',
                id: '5637144635',
            },
            {
                location: 'CALETA BOTIJA',
                id: '5637144636',
            },
            {
                location: 'CALETA EL COBRE',
                id: '5637144637',
            },
            {
                location: 'CARMEN ALTO',
                id: '5637144638',
            },
            {
                location: 'CERRO MORENO',
                id: '5637144639',
            },
            {
                location: 'CERRO PARANAL',
                id: '5637144640',
            },
            {
                location: 'EL GUANACO',
                id: '5637144641',
            },
            {
                location: 'EL MEDANO',
                id: '5637144642',
            },
            {
                location: 'EL WAY',
                id: '5637144643',
            },
            {
                location: 'ENSUENO',
                id: '5637144644',
            },
            {
                location: 'ESTACION AGUA BUENA',
                id: '5637144645',
            },
            {
                location: 'ESTACION AGUAS BLANCAS',
                id: '5637144646',
            },
            {
                location: 'ESTACION AUGUSTA VICTORIA',
                id: '5637144647',
            },
            {
                location: 'ESTACION CATALINA',
                id: '5637144648',
            },
            {
                location: 'ESTACION LA RIOJA',
                id: '5637144649',
            },
            {
                location: 'ESTACION LOS VIENTOS',
                id: '5637144650',
            },
            {
                location: 'ESTACION MONTURAQUI',
                id: '5637144651',
            },
            {
                location: 'ESTACION O`HIGGINS',
                id: '5637144652',
            },
            {
                location: 'ESTACION PALESTINA',
                id: '5637144653',
            },
            {
                location: 'ESTACION PAN DE AZUCAR',
                id: '5637144654',
            },
            {
                location: 'ESTACION SOCOMPA',
                id: '5637144655',
            },
            {
                location: 'ESTACION VARILLA',
                id: '5637144656',
            },
            {
                location: 'EX OFICINA ALEMANIA',
                id: '5637144657',
            },
            {
                location: 'EX OFICINA CHILE',
                id: '5637144658',
            },
            {
                location: 'EX OFICINA FLOR DE CHILE',
                id: '5637144659',
            },
            {
                location: 'ISLA SANTA MARIA',
                id: '5637144660',
            },
            {
                location: 'JUAN LOPEZ',
                id: '5637144661',
            },
            {
                location: 'LA NEGRA',
                id: '5637144662',
            },
            {
                location: 'MANTOS BLANCOS',
                id: '5637144663',
            },
            {
                location: 'MINA LOMAS BAYAS',
                id: '5637144664',
            },
            {
                location: 'PAPOSO',
                id: '5637144665',
            },
            {
                location: 'PARANAL',
                id: '5637144666',
            },
            {
                location: 'PUERTO COLOSO',
                id: '5637144667',
            },
            {
                location: 'RANCHO ANTOFAGASTA',
                id: '5637144668',
            },
            {
                location: 'SAN CRISTOBAL',
                id: '5637144669',
            },
        ],
        regionCode: '02',
        name: 'ANTOFAGASTA',
    },
    {
        id: '5637144882',
        localities: [
            {
                location: 'AGUAS  BUENAS',
                id: '5637145765',
            },
            {
                location: 'AUCAR',
                id: '5637145766',
            },
            {
                location: 'BELBEN',
                id: '5637145767',
            },
            {
                location: 'DEGAN',
                id: '5637145768',
            },
            {
                location: 'HUILLINCO',
                id: '5637145769',
            },
            {
                location: 'LINAO',
                id: '5637145770',
            },
            {
                location: 'LLIUCO',
                id: '5637145771',
            },
            {
                location: 'MANAO',
                id: '5637145772',
            },
            {
                location: 'QUEMCHI',
                id: '5637145773',
            },
        ],
        regionCode: '10',
        name: 'QUEMCHI',
    },
    {
        id: '5637144593',
        localities: [
            {
                location: 'AGUAS BLANCAS',
                id: '5637144713',
            },
            {
                location: 'ALITAR',
                id: '5637144714',
            },
            {
                location: 'CAMAR',
                id: '5637144715',
            },
            {
                location: 'PEINE',
                id: '5637144716',
            },
            {
                location: 'PURITAMA',
                id: '5637144717',
            },
            {
                location: 'RIO GRANDE',
                id: '5637144718',
            },
            {
                location: 'SAN BARTOLO',
                id: '5637144719',
            },
            {
                location: 'SOCAIRE',
                id: '5637144720',
            },
            {
                location: 'TALABRE',
                id: '5637144721',
            },
            {
                location: 'TILO POZO',
                id: '5637144722',
            },
            {
                location: 'TILOMONTE',
                id: '5637144723',
            },
            {
                location: 'TOCONAO',
                id: '5637144724',
            },
        ],
        regionCode: '02',
        name: 'SAN PEDRO DE ATACAMA',
    },
    {
        id: '5637144579',
        localities: [
            {
                location: 'AGUAS CALIENTES',
                id: '5637146128',
            },
            {
                location: 'AZUFRERA TACORA',
                id: '5637146129',
            },
            {
                location: 'COSAPILLA',
                id: '5637146130',
            },
            {
                location: 'GENERAL LAGOS',
                id: '5637146131',
            },
            {
                location: 'GUACOLLO',
                id: '5637146132',
            },
            {
                location: 'NASAHUENTO',
                id: '5637146133',
            },
            {
                location: 'VILLA INDUSTRIAL',
                id: '5637146134',
            },
            {
                location: 'VISVIRI',
                id: '5637146135',
            },
        ],
        regionCode: '15',
        name: 'GENERAL LAGOS',
    },
    {
        id: '5637144732',
        localities: [
            {
                location: 'AGUAS DE LA GLORIA',
                id: '5637145387',
            },
            {
                location: 'COPIULEMU',
                id: '5637145388',
            },
            {
                location: 'FLORIDA',
                id: '5637145389',
            },
        ],
        regionCode: '08',
        name: 'FLORIDA',
    },
    {
        id: '5637144888',
        localities: [
            {
                location: 'AHONI',
                id: '5637145754',
            },
            {
                location: 'AITUI',
                id: '5637145755',
            },
            {
                location: 'CONTAY',
                id: '5637145756',
            },
            {
                location: 'PAILDAD',
                id: '5637145757',
            },
            {
                location: 'QUEILEN',
                id: '5637145758',
            },
        ],
        regionCode: '10',
        name: 'QUEILÉN',
    },
    {
        id: '5637144718',
        localities: [
            {
                location: 'AJIAL',
                id: '5637145279',
            },
            {
                location: 'BULLILLEO',
                id: '5637145280',
            },
            {
                location: 'PARRAL',
                id: '5637145281',
            },
            {
                location: 'PERQUILAUQUEN',
                id: '5637145282',
            },
            {
                location: 'QUINCHIMAVIDA',
                id: '5637145283',
            },
            {
                location: 'TERMAS DE CATILLO',
                id: '5637145284',
            },
            {
                location: 'VILLA ROSAS',
                id: '5637145285',
            },
        ],
        regionCode: '07',
        name: 'PARRAL',
    },
    {
        id: '5637144609',
        localities: [
            {
                location: 'ALCOHUAS',
                id: '5637144950',
            },
            {
                location: 'BALALA',
                id: '5637144951',
            },
            {
                location: 'BANOS DEL TORO',
                id: '5637144952',
            },
            {
                location: 'CHAPILCA',
                id: '5637144953',
            },
            {
                location: 'COCHIGUAS',
                id: '5637144954',
            },
            {
                location: 'GUANTA',
                id: '5637144955',
            },
            {
                location: 'JUNTAS DEL TORO',
                id: '5637144956',
            },
            {
                location: 'LAS HEDIONDAS',
                id: '5637144957',
            },
            {
                location: 'LLANOS DE GUANTA',
                id: '5637144958',
            },
            {
                location: 'MINA DEL INDIO',
                id: '5637144959',
            },
            {
                location: 'MONTE GRANDE',
                id: '5637144960',
            },
            {
                location: 'NUEVA ELQUI',
                id: '5637144961',
            },
            {
                location: 'PAIHUANO',
                id: '5637144962',
            },
            {
                location: 'PISCO ELQUI',
                id: '5637144963',
            },
            {
                location: 'RIVADAVIA',
                id: '5637144964',
            },
            {
                location: 'SOL NACIENTE',
                id: '5637144965',
            },
            {
                location: 'VARILLAR',
                id: '5637144966',
            },
        ],
        regionCode: '04',
        name: 'PAIGUANO',
    },
    {
        id: '5637144678',
        localities: [
            {
                location: 'ALCONES',
                id: '5637145166',
            },
            {
                location: 'ESPERANZA',
                id: '5637145167',
            },
            {
                location: 'LAS PATAGUAS',
                id: '5637145168',
            },
            {
                location: 'MARCHANT',
                id: '5637145169',
            },
            {
                location: 'MARCHIHUE',
                id: '5637145170',
            },
            {
                location: 'SAN JOSE DE MARCHIHUE',
                id: '5637145171',
            },
        ],
        regionCode: '06',
        name: 'MARCHIHUE',
    },
    {
        id: '5637144891',
        localities: [
            {
                location: 'ALDACHILDO',
                id: '5637145735',
            },
            {
                location: 'PUQUELDON',
                id: '5637145736',
            },
        ],
        regionCode: '10',
        name: 'PUQUELDÓN',
    },
    {
        id: '5637144919',
        localities: [
            {
                location: 'ALERCE',
                id: '5637145711',
            },
            {
                location: 'CALETA LA ARENA',
                id: '5637145712',
            },
            {
                location: 'CHAMIZA',
                id: '5637145713',
            },
            {
                location: 'CORRENTOSO',
                id: '5637145714',
            },
            {
                location: 'EL TEPUAL',
                id: '5637145715',
            },
            {
                location: 'LENCA',
                id: '5637145716',
            },
            {
                location: 'PUERTO MONTT',
                id: '5637145717',
            },
            {
                location: 'QUILLAIPE',
                id: '5637145718',
            },
            {
                location: 'RANCHO PUERTO MONTT',
                id: '5637145719',
            },
        ],
        regionCode: '10',
        name: 'PUERTO MONTT',
    },
    {
        id: '5637144601',
        localities: [
            {
                location: 'ALGARROBAL',
                id: '5637144816',
            },
            {
                location: 'CACHIYUYO',
                id: '5637144817',
            },
            {
                location: 'DOMEYKO',
                id: '5637144818',
            },
            {
                location: 'EL BORATILLO',
                id: '5637144819',
            },
            {
                location: 'EL DONKEY',
                id: '5637144820',
            },
            {
                location: 'LA HOYADA',
                id: '5637144821',
            },
            {
                location: 'LOS COLORADOS',
                id: '5637144822',
            },
            {
                location: 'OBSERVATORIO LA SILLA',
                id: '5637144823',
            },
            {
                location: 'OBSERVATORIO LAS CAMPANAS',
                id: '5637144824',
            },
            {
                location: 'VALLENAR',
                id: '5637144825',
            },
        ],
        regionCode: '03',
        name: 'VALLENAR',
    },
    {
        id: '5637144615',
        localities: [
            {
                location: 'ALGARROBITO',
                id: '5637144927',
            },
            {
                location: 'BARRAZA',
                id: '5637144928',
            },
            {
                location: 'CAMARICO',
                id: '5637144929',
            },
            {
                location: 'CAMARICO VIEJO',
                id: '5637144930',
            },
            {
                location: 'CERRILLOS DE TAMAYA',
                id: '5637144931',
            },
            {
                location: 'CHALINGA',
                id: '5637144932',
            },
            {
                location: 'EL ALTAR',
                id: '5637144933',
            },
            {
                location: 'GUAMALATA',
                id: '5637144934',
            },
            {
                location: 'GUAMPULLA',
                id: '5637144935',
            },
            {
                location: 'HIGUERITAS',
                id: '5637144936',
            },
            {
                location: 'LA CHIMBA',
                id: '5637144937',
            },
            {
                location: 'LA TORRE',
                id: '5637144938',
            },
            {
                location: 'LAS CARDAS',
                id: '5637144939',
            },
            {
                location: 'LIMARI',
                id: '5637144940',
            },
            {
                location: 'OTAROLA',
                id: '5637144941',
            },
            {
                location: 'OVALLE',
                id: '5637144942',
            },
            {
                location: 'PACHINGO',
                id: '5637144943',
            },
            {
                location: 'PEJERREYES',
                id: '5637144944',
            },
            {
                location: 'QUEBRADA SECA',
                id: '5637144945',
            },
            {
                location: 'SAMO ALTO',
                id: '5637144946',
            },
            {
                location: 'SAMO BAJO',
                id: '5637144947',
            },
            {
                location: 'SOTAQUI',
                id: '5637144948',
            },
            {
                location: 'TERMAS DE SOCO',
                id: '5637144949',
            },
        ],
        regionCode: '04',
        name: 'OVALLE',
    },
    {
        id: '5637144643',
        localities: [
            {
                location: 'ALGARROBO',
                id: '5637145003',
            },
            {
                location: 'MIRASOL',
                id: '5637145004',
            },
            {
                location: 'QUINTAY',
                id: '5637145005',
            },
        ],
        regionCode: '05',
        name: 'ALGARROBO',
    },
    {
        id: '5637144733',
        localities: [
            {
                location: 'ALHUE',
                id: '5637145906',
            },
            {
                location: 'EL MEMBRILLO',
                id: '5637145907',
            },
            {
                location: 'LO CHACON',
                id: '5637145908',
            },
            {
                location: 'LONCHA',
                id: '5637145909',
            },
            {
                location: 'VILLA ALHUE',
                id: '5637145910',
            },
        ],
        regionCode: '13',
        name: 'ALHUÉ',
    },
    {
        id: '5637144633',
        localities: [
            {
                location: 'ALICAHUE',
                id: '5637145006',
            },
            {
                location: 'ARTIFICIO',
                id: '5637145007',
            },
            {
                location: 'CABILDO',
                id: '5637145008',
            },
            {
                location: 'EL GUAYACAN',
                id: '5637145009',
            },
            {
                location: 'LA MORA',
                id: '5637145010',
            },
            {
                location: 'LA VINA',
                id: '5637145011',
            },
            {
                location: 'LAS PALMAS',
                id: '5637145012',
            },
            {
                location: 'PEDEGUA',
                id: '5637145013',
            },
        ],
        regionCode: '05',
        name: 'CABILDO',
    },
    {
        id: '5637144863',
        localities: [
            {
                location: 'ALMAGRO',
                id: '5637145581',
            },
            {
                location: 'BOROA',
                id: '5637145582',
            },
            {
                location: 'NUEVA IMPERIAL',
                id: '5637145583',
            },
        ],
        regionCode: '09',
        name: 'NUEVA IMPERIAL',
    },
    {
        id: '5637144614',
        localities: [
            {
                location: 'ALMENDRALILLO',
                id: '5637144981',
            },
            {
                location: 'ARBOLEDA GRANDE',
                id: '5637144982',
            },
            {
                location: 'CHELLEPIN',
                id: '5637144983',
            },
            {
                location: 'COIRON',
                id: '5637144984',
            },
            {
                location: 'JORQUERA',
                id: '5637144985',
            },
            {
                location: 'LIMAHUIDA',
                id: '5637144986',
            },
            {
                location: 'LLIMPO',
                id: '5637144987',
            },
            {
                location: 'LOS PELADEROS',
                id: '5637144988',
            },
            {
                location: 'PALQUIAL',
                id: '5637144989',
            },
            {
                location: 'SALAMANCA',
                id: '5637144990',
            },
            {
                location: 'SAN AGUSTIN',
                id: '5637144991',
            },
        ],
        regionCode: '04',
        name: 'SALAMANCA',
    },
    {
        id: '5637144583',
        localities: [
            {
                location: 'ALPAJERES',
                id: '5637144577',
            },
            {
                location: 'ALTUZA',
                id: '5637144578',
            },
            {
                location: 'CALATAMBO',
                id: '5637144579',
            },
            {
                location: 'CAMINA',
                id: '5637144580',
            },
            {
                location: 'CARITAYA',
                id: '5637144581',
            },
            {
                location: 'CHAPIQUITA',
                id: '5637144582',
            },
            {
                location: 'CORSA',
                id: '5637144583',
            },
            {
                location: 'NAMA',
                id: '5637144584',
            },
            {
                location: 'PALCA',
                id: '5637144585',
            },
            {
                location: 'PISAGUA',
                id: '5637144586',
            },
            {
                location: 'VILAVILA',
                id: '5637144587',
            },
        ],
        regionCode: '01',
        name: 'CAMIÑA',
    },
    {
        id: '5637144590',
        localities: [
            {
                location: 'ALTAMIRA',
                id: '5637144731',
            },
            {
                location: 'CIFUNCHO',
                id: '5637144732',
            },
            {
                location: 'LA POLVORA',
                id: '5637144733',
            },
            {
                location: 'TALTAL',
                id: '5637144734',
            },
        ],
        regionCode: '02',
        name: 'TALTAL',
    },
    {
        id: '5637144782',
        localities: [
            {
                location: 'ALTO BIO BIO',
                id: '5637145498',
            },
            {
                location: 'CASA LOLCO',
                id: '5637145499',
            },
            {
                location: 'COMUNIDAD CANICU',
                id: '5637145500',
            },
            {
                location: 'ESTACION YUMBEL',
                id: '5637145501',
            },
            {
                location: 'MONTE AGUILA',
                id: '5637145502',
            },
            {
                location: 'PANGUE',
                id: '5637145503',
            },
            {
                location: 'RALCO',
                id: '5637145504',
            },
            {
                location: 'RALCO LEPOY',
                id: '5637145505',
            },
            {
                location: 'TERMAS DEL AVELLANO',
                id: '5637145506',
            },
            {
                location: 'YUMBEL',
                id: '5637145507',
            },
        ],
        regionCode: '08',
        name: 'YUMBEL',
    },
    {
        id: '5637144619',
        localities: [
            {
                location: 'ALTO BUEY',
                id: '5637144973',
            },
            {
                location: 'CHANAR',
                id: '5637144974',
            },
            {
                location: 'CORRAL QUEMADO',
                id: '5637144975',
            },
            {
                location: 'HACIENDA LOS ANDES',
                id: '5637144976',
            },
            {
                location: 'HURTADO',
                id: '5637144977',
            },
            {
                location: 'LA FUNDINA',
                id: '5637144978',
            },
            {
                location: 'PICHASCA',
                id: '5637144979',
            },
            {
                location: 'RIO HURTADO',
                id: '5637144980',
            },
        ],
        regionCode: '04',
        name: 'RÍO HURTADO',
    },
    {
        id: '5637144893',
        localities: [
            {
                location: 'ALTO BUTALCURA',
                id: '5637145659',
            },
            {
                location: 'DALCAHUE',
                id: '5637145660',
            },
            {
                location: 'MECHUQUE',
                id: '5637145661',
            },
            {
                location: 'QUICAVI',
                id: '5637145662',
            },
            {
                location: 'SAN JUAN',
                id: '5637145663',
            },
        ],
        regionCode: '10',
        name: 'DALCAHUE',
    },
    {
        id: '5637144773',
        localities: [
            {
                location: 'ALTO CALEDONIA',
                id: '5637145445',
            },
            {
                location: 'CERRO DEL PADRE',
                id: '5637145446',
            },
            {
                location: 'LONCOPANGUE',
                id: '5637145447',
            },
            {
                location: 'QUILACO',
                id: '5637145448',
            },
            {
                location: 'RUCALHUE',
                id: '5637145449',
            },
        ],
        regionCode: '08',
        name: 'QUILACO',
    },
    {
        id: '5637144675',
        localities: [
            {
                location: 'ALTO COLORADO',
                id: '5637145197',
            },
            {
                location: 'CAHUIL',
                id: '5637145198',
            },
            {
                location: 'EL PUESTO',
                id: '5637145199',
            },
            {
                location: 'PICHILEMU',
                id: '5637145200',
            },
            {
                location: 'SANTA GRACIELA DE ALCONES',
                id: '5637145201',
            },
        ],
        regionCode: '06',
        name: 'PICHILEMU',
    },
    {
        id: '5637144602',
        localities: [
            {
                location: 'ALTO DEL CARMEN',
                id: '5637144741',
            },
            {
                location: 'CONAY',
                id: '5637144742',
            },
            {
                location: 'EL NEVADO',
                id: '5637144743',
            },
            {
                location: 'EL RETAMO',
                id: '5637144744',
            },
            {
                location: 'JUNTA VALERIANO',
                id: '5637144745',
            },
            {
                location: 'LA ARENA',
                id: '5637144746',
            },
            {
                location: 'LA HIGUERITA',
                id: '5637144747',
            },
            {
                location: 'LAGUNA GRANDE',
                id: '5637144748',
            },
            {
                location: 'SAN FELIX',
                id: '5637144749',
            },
        ],
        regionCode: '03',
        name: 'ALTO DEL CARMEN',
    },
    {
        id: '5637144581',
        localities: [
            {
                location: 'ALTO HOSPICIO',
                id: '5637144576',
            },
        ],
        regionCode: '01',
        name: 'ALTO HOSPICIO',
    },
    {
        id: '5637144739',
        localities: [
            {
                location: 'ALTO JAHUEL',
                id: '5637145913',
            },
            {
                location: 'CALERA DE TANGO',
                id: '5637145914',
            },
        ],
        regionCode: '13',
        name: 'CALERA DE TANGO',
    },
    {
        id: '5637144576',
        localities: [
            {
                location: 'ALTO RAMIREZ',
                id: '5637146105',
            },
            {
                location: 'ARICA',
                id: '5637146106',
            },
            {
                location: 'AUSIPAR',
                id: '5637146107',
            },
            {
                location: 'AZAPA',
                id: '5637146108',
            },
            {
                location: 'CODPA',
                id: '5637146109',
            },
            {
                location: 'CUZ CUZ',
                id: '5637146110',
            },
            {
                location: 'ESQUINA',
                id: '5637146111',
            },
            {
                location: 'GUANACAHUA',
                id: '5637146112',
            },
            {
                location: 'MOLINOS',
                id: '5637146113',
            },
            {
                location: 'POCONCHILE',
                id: '5637146114',
            },
            {
                location: 'RANCHO ARICA',
                id: '5637146115',
            },
            {
                location: 'SOBRAYA',
                id: '5637146116',
            },
            {
                location: 'SORA',
                id: '5637146117',
            },
            {
                location: 'TIMAR',
                id: '5637146118',
            },
            {
                location: 'VILLA FRONTERA',
                id: '5637146119',
            },
        ],
        regionCode: '15',
        name: 'ARICA',
    },
    {
        id: '5637144592',
        localities: [
            {
                location: 'AMINCHA',
                id: '5637144703',
            },
            {
                location: 'ASCOTAN',
                id: '5637144704',
            },
            {
                location: 'AUCANQUILCHA',
                id: '5637144705',
            },
            {
                location: 'CALACHUZ',
                id: '5637144706',
            },
            {
                location: 'ESTACION CARCOTE',
                id: '5637144707',
            },
            {
                location: 'ESTACION CEBOLLAR',
                id: '5637144708',
            },
            {
                location: 'LEQUENA',
                id: '5637144709',
            },
            {
                location: 'OLLAGUE',
                id: '5637144710',
            },
            {
                location: 'POLAN',
                id: '5637144711',
            },
            {
                location: 'SAN PEDRO DE ATACAMA',
                id: '5637144712',
            },
        ],
        regionCode: '02',
        name: 'OLLAGÜE',
    },
    {
        id: '5637144598',
        localities: [
            {
                location: 'AMOLANAS',
                id: '5637144797',
            },
            {
                location: 'CHANARCILLO',
                id: '5637144798',
            },
            {
                location: 'EL VOLCAN',
                id: '5637144799',
            },
            {
                location: 'ELISA DE BORDO',
                id: '5637144800',
            },
            {
                location: 'LA GUARDIA',
                id: '5637144801',
            },
            {
                location: 'LA PUERTA',
                id: '5637144802',
            },
            {
                location: 'LOS AZULES',
                id: '5637144803',
            },
            {
                location: 'LOS LOROS',
                id: '5637144804',
            },
            {
                location: 'MINA CANDELARIA',
                id: '5637144805',
            },
            {
                location: 'MINA LA COIPA',
                id: '5637144806',
            },
            {
                location: 'MINA MARTE',
                id: '5637144807',
            },
            {
                location: 'NANTOCO',
                id: '5637144808',
            },
            {
                location: 'PAIPOTE',
                id: '5637144809',
            },
            {
                location: 'PASTOS LARGOS',
                id: '5637144810',
            },
            {
                location: 'PUQUIOS',
                id: '5637144811',
            },
            {
                location: 'SAN ANTONIO - COPIAPO',
                id: '5637144812',
            },
            {
                location: 'TIERRA AMARILLA',
                id: '5637144813',
            },
            {
                location: 'TOTORALILLO',
                id: '5637144814',
            },
            {
                location: 'VALLE HERMOSO',
                id: '5637144815',
            },
        ],
        regionCode: '03',
        name: 'TIERRA AMARILLA',
    },
    {
        id: '5637144584',
        localities: [
            {
                location: 'ANAGUANI',
                id: '5637144588',
            },
            {
                location: 'ANCOVINTO',
                id: '5637144589',
            },
            {
                location: 'ANCUAQUE',
                id: '5637144590',
            },
            {
                location: 'CARIQUIMA',
                id: '5637144591',
            },
            {
                location: 'CHIAPA',
                id: '5637144592',
            },
            {
                location: 'COLCHANE',
                id: '5637144593',
            },
            {
                location: 'ENQUELGA',
                id: '5637144594',
            },
            {
                location: 'ISLUGA',
                id: '5637144595',
            },
            {
                location: 'MOCOMUCANE',
                id: '5637144596',
            },
            {
                location: 'SOTOCA',
                id: '5637144597',
            },
        ],
        regionCode: '01',
        name: 'COLCHANE',
    },
    {
        id: '5637144899',
        localities: [
            {
                location: 'ANCUD',
                id: '5637145630',
            },
            {
                location: 'CAULIN',
                id: '5637145631',
            },
            {
                location: 'CHACAO',
                id: '5637145632',
            },
            {
                location: 'GUALBUN',
                id: '5637145633',
            },
            {
                location: 'QUETELMAHUE',
                id: '5637145634',
            },
        ],
        regionCode: '10',
        name: 'ANCUD',
    },
    {
        id: '5637144607',
        localities: [
            {
                location: 'ANDACOLLO',
                id: '5637144826',
            },
            {
                location: 'BARRANCAS',
                id: '5637144827',
            },
        ],
        regionCode: '04',
        name: 'ANDACOLLO',
    },
    {
        id: '5637144610',
        localities: [
            {
                location: 'ANDACOLLO HOLDING',
                id: '5637144992',
            },
            {
                location: 'CASERONES',
                id: '5637144993',
            },
            {
                location: 'CONDORIACO',
                id: '5637144994',
            },
            {
                location: 'CORTADERA',
                id: '5637144995',
            },
            {
                location: 'DIAGUITAS',
                id: '5637144996',
            },
            {
                location: 'EL TAMBO',
                id: '5637144997',
            },
            {
                location: 'LA LAJA',
                id: '5637144998',
            },
            {
                location: 'OBSERVATORIO EL TOLOLO',
                id: '5637144999',
            },
            {
                location: 'PERALILLO',
                id: '5637145000',
            },
            {
                location: 'VICUNA',
                id: '5637145001',
            },
            {
                location: 'VINITA BAJA',
                id: '5637145002',
            },
        ],
        regionCode: '04',
        name: 'VICUÑA',
    },
    {
        id: '5637144881',
        localities: [
            {
                location: 'ANGOL',
                id: '5637145513',
            },
            {
                location: 'MAITENREHUE',
                id: '5637145514',
            },
            {
                location: 'PIEDRA DEL AGUILA',
                id: '5637145515',
            },
            {
                location: 'VEGAS BLANCAS',
                id: '5637145516',
            },
        ],
        regionCode: '09',
        name: 'ANGOL',
    },
    {
        id: '5637144832',
        localities: [
            {
                location: 'ANTARTICA',
                id: '5637145851',
            },
        ],
        regionCode: '12',
        name: 'ANTÁRTICA',
    },
    {
        id: '5637144870',
        localities: [
            {
                location: 'ANTICURA',
                id: '5637145744',
            },
            {
                location: 'EL ENCANTO',
                id: '5637145745',
            },
            {
                location: 'EL ISLOTE',
                id: '5637145746',
            },
            {
                location: 'ENTRE LAGOS',
                id: '5637145747',
            },
            {
                location: 'NILQUE',
                id: '5637145748',
            },
            {
                location: 'PAJARITOS',
                id: '5637145749',
            },
            {
                location: 'PUERTO RICO',
                id: '5637145750',
            },
            {
                location: 'PUYEHUE',
                id: '5637145751',
            },
            {
                location: 'REFUGIO ANTILLANCA',
                id: '5637145752',
            },
            {
                location: 'TERMAS DE PUYEHUE',
                id: '5637145753',
            },
        ],
        regionCode: '10',
        name: 'PUYEHUE',
    },
    {
        id: '5637144758',
        localities: [
            {
                location: 'ANTIGUALA',
                id: '5637145406',
            },
            {
                location: 'LOS ALAMOS',
                id: '5637145407',
            },
            {
                location: 'PILPILCO',
                id: '5637145408',
            },
            {
                location: 'TRES PINOS',
                id: '5637145409',
            },
        ],
        regionCode: '08',
        name: 'LOS ÁLAMOS',
    },
    {
        id: '5637144911',
        localities: [
            {
                location: 'ANTILHUE',
                id: '5637146050',
            },
            {
                location: 'FOLILCO',
                id: '5637146051',
            },
            {
                location: 'HUICHACO',
                id: '5637146052',
            },
            {
                location: 'HUITE',
                id: '5637146053',
            },
            {
                location: 'LIPINGUE',
                id: '5637146054',
            },
            {
                location: 'LOS LAGOS',
                id: '5637146055',
            },
            {
                location: 'PUCARA',
                id: '5637146056',
            },
            {
                location: 'PUCONO',
                id: '5637146057',
            },
            {
                location: 'RINIHUE',
                id: '5637146058',
            },
            {
                location: 'RUNCA',
                id: '5637146059',
            },
        ],
        regionCode: '14',
        name: 'LOS LAGOS',
    },
    {
        id: '5637144753',
        localities: [
            {
                location: 'ANTIQUINA',
                id: '5637145378',
            },
            {
                location: 'CONTULMO',
                id: '5637145379',
            },
        ],
        regionCode: '08',
        name: 'CONTULMO',
    },
    {
        id: '5637144764',
        localities: [
            {
                location: 'ANTUCO',
                id: '5637145336',
            },
            {
                location: 'EL ABANICO',
                id: '5637145337',
            },
            {
                location: 'EL TORO',
                id: '5637145338',
            },
            {
                location: 'LOS BARROS',
                id: '5637145339',
            },
        ],
        regionCode: '08',
        name: 'ANTUCO',
    },
    {
        id: '5637144749',
        localities: [
            {
                location: 'ARAUCO',
                id: '5637145340',
            },
            {
                location: 'CARAMPANGUE',
                id: '5637145341',
            },
            {
                location: 'EL BOLDO',
                id: '5637145342',
            },
            {
                location: 'LARAQUETE',
                id: '5637145343',
            },
            {
                location: 'LLICO',
                id: '5637145344',
            },
            {
                location: 'QUIDICO',
                id: '5637145345',
            },
            {
                location: 'RAMADILLA',
                id: '5637145346',
            },
            {
                location: 'RAQUI',
                id: '5637145347',
            },
            {
                location: 'VILLA ALEGRE',
                id: '5637145348',
            },
        ],
        regionCode: '08',
        name: 'ARAUCO',
    },
    {
        id: '5637144722',
        localities: [
            {
                location: 'ARBOLILLO',
                id: '5637145330',
            },
            {
                location: 'LAS CAMPANAS',
                id: '5637145331',
            },
            {
                location: 'MELOZAL',
                id: '5637145332',
            },
        ],
        regionCode: '07',
        name: 'VILLA ALEGRE',
    },
    {
        id: '5637144699',
        localities: [
            {
                location: 'ARMERILLO',
                id: '5637145304',
            },
            {
                location: 'AURORA',
                id: '5637145305',
            },
            {
                location: 'CORRALONES',
                id: '5637145306',
            },
            {
                location: 'EL COLORADO',
                id: '5637145307',
            },
            {
                location: 'ENDESA',
                id: '5637145308',
            },
            {
                location: 'LA MINA',
                id: '5637145309',
            },
            {
                location: 'LAS GARZAS',
                id: '5637145310',
            },
            {
                location: 'PASO NEVADO',
                id: '5637145311',
            },
            {
                location: 'SAN CLEMENTE',
                id: '5637145312',
            },
        ],
        regionCode: '07',
        name: 'SAN CLEMENTE',
    },
    {
        id: '5637144831',
        localities: [
            {
                location: 'ARMONIA',
                id: '5637145866',
            },
            {
                location: 'ISLA DAWSON',
                id: '5637145867',
            },
            {
                location: 'PAMPA GUANACOS',
                id: '5637145868',
            },
            {
                location: 'PORVENIR',
                id: '5637145869',
            },
            {
                location: 'PUERTO PERCY',
                id: '5637145870',
            },
            {
                location: 'SECCION RUSSFIN',
                id: '5637145871',
            },
        ],
        regionCode: '12',
        name: 'PORVENIR',
    },
    {
        id: '5637144696',
        localities: [
            {
                location: 'ASTILLERO',
                id: '5637145286',
            },
            {
                location: 'PELARCO',
                id: '5637145287',
            },
        ],
        regionCode: '07',
        name: 'PELARCO',
    },
    {
        id: '5637144859',
        localities: [
            {
                location: 'AULEN',
                id: '5637145675',
            },
            {
                location: 'AYACARA',
                id: '5637145676',
            },
            {
                location: 'CALETA HUALAIHUE',
                id: '5637145677',
            },
            {
                location: 'CHAPARANO',
                id: '5637145678',
            },
            {
                location: 'CHOLGO',
                id: '5637145679',
            },
            {
                location: 'CONTAO',
                id: '5637145680',
            },
            {
                location: 'HORNOPIREN',
                id: '5637145681',
            },
            {
                location: 'HUALAIHUE',
                id: '5637145682',
            },
            {
                location: 'HUINAY',
                id: '5637145683',
            },
            {
                location: 'LLANADA GRANDE',
                id: '5637145684',
            },
            {
                location: 'PICHANCO',
                id: '5637145685',
            },
            {
                location: 'POYO',
                id: '5637145686',
            },
            {
                location: 'PRIMER CORRAL',
                id: '5637145687',
            },
            {
                location: 'SEGUNDO CORRAL',
                id: '5637145688',
            },
            {
                location: 'TERMAS DE LLANCATUE',
                id: '5637145689',
            },
        ],
        regionCode: '10',
        name: 'HUALAIHUÉ',
    },
    {
        id: '5637144682',
        localities: [
            {
                location: 'AUQUINCO',
                id: '5637145129',
            },
            {
                location: 'CHEPICA',
                id: '5637145130',
            },
        ],
        regionCode: '06',
        name: 'CHÉPICA',
    },
    {
        id: '5637144591',
        localities: [
            {
                location: 'AYQUINA',
                id: '5637144670',
            },
            {
                location: 'BANOS DE TURI',
                id: '5637144671',
            },
            {
                location: 'CALAMA',
                id: '5637144672',
            },
            {
                location: 'CASPANA',
                id: '5637144673',
            },
            {
                location: 'CHIUCHIU',
                id: '5637144674',
            },
            {
                location: 'CHUQUICAMATA',
                id: '5637144675',
            },
            {
                location: 'CONCHI',
                id: '5637144676',
            },
            {
                location: 'CONCHI VIEJO',
                id: '5637144677',
            },
            {
                location: 'CUPO',
                id: '5637144678',
            },
            {
                location: 'ESTACION CERRITOS BAYOS',
                id: '5637144679',
            },
            {
                location: 'INCACALIRI',
                id: '5637144680',
            },
            {
                location: 'LASANA',
                id: '5637144681',
            },
            {
                location: 'LINZOR',
                id: '5637144682',
            },
            {
                location: 'MINA CERRO DOMINADOR',
                id: '5637144683',
            },
            {
                location: 'MINA EL ABRA',
                id: '5637144684',
            },
            {
                location: 'MINA EL LITIO',
                id: '5637144685',
            },
            {
                location: 'MINA FARIDE',
                id: '5637144686',
            },
            {
                location: 'MINA GABY',
                id: '5637144687',
            },
            {
                location: 'MINA RADOMIRO TOMIC',
                id: '5637144688',
            },
            {
                location: 'MINERA SPENCER',
                id: '5637144689',
            },
            {
                location: 'SAN JOSE',
                id: '5637144690',
            },
            {
                location: 'SANTA ROSA',
                id: '5637144691',
            },
            {
                location: 'TOCONCE',
                id: '5637144692',
            },
            {
                location: 'TUINA',
                id: '5637144693',
            },
            {
                location: 'TURI',
                id: '5637144694',
            },
        ],
        regionCode: '02',
        name: 'CALAMA',
    },
    {
        id: '5637144597',
        localities: [
            {
                location: 'BAHIA INGLESA',
                id: '5637144750',
            },
            {
                location: 'CALDERA',
                id: '5637144751',
            },
            {
                location: 'PUERTO VIEJO',
                id: '5637144752',
            },
            {
                location: 'RANCHO CALDERA',
                id: '5637144753',
            },
        ],
        regionCode: '03',
        name: 'CALDERA',
    },
    {
        id: '5637144864',
        localities: [
            {
                location: 'BAHIA MANSA',
                id: '5637145782',
            },
            {
                location: 'CONTACO',
                id: '5637145783',
            },
            {
                location: 'MAICOLPUE',
                id: '5637145784',
            },
            {
                location: 'PUAUCHO',
                id: '5637145785',
            },
            {
                location: 'PUCATRIHUE',
                id: '5637145786',
            },
            {
                location: 'S.JUAN DE LA COSTA',
                id: '5637145787',
            },
        ],
        regionCode: '10',
        name: 'SAN JUAN DE LA COSTA',
    },
    {
        id: '5637144857',
        localities: [
            {
                location: 'BALMACEDA',
                id: '5637145819',
            },
            {
                location: 'BANO NUEVO',
                id: '5637145820',
            },
            {
                location: 'COYHAIQUE',
                id: '5637145821',
            },
            {
                location: 'COYHAIQUE ALTO',
                id: '5637145822',
            },
            {
                location: 'LAGUNA SAN RAFAEL',
                id: '5637145823',
            },
            {
                location: 'NIREGUAO',
                id: '5637145824',
            },
            {
                location: 'VILLA ORTEGA',
                id: '5637145825',
            },
        ],
        regionCode: '11',
        name: 'COYHAIQUE',
    },
    {
        id: '5637144918',
        localities: [
            {
                location: 'BANOS DE CHIHUIO',
                id: '5637146019',
            },
            {
                location: 'CHABRANCO',
                id: '5637146020',
            },
            {
                location: 'COIQUE',
                id: '5637146021',
            },
            {
                location: 'DOLLINCO',
                id: '5637146022',
            },
            {
                location: 'EL MUNDIAL',
                id: '5637146023',
            },
            {
                location: 'FUTRONO',
                id: '5637146024',
            },
            {
                location: 'HUEQUECURA',
                id: '5637146025',
            },
            {
                location: 'LLIFEN',
                id: '5637146026',
            },
            {
                location: 'LOS LLOLLES',
                id: '5637146027',
            },
            {
                location: 'MAIHUE',
                id: '5637146028',
            },
            {
                location: 'MONTUELA',
                id: '5637146029',
            },
        ],
        regionCode: '14',
        name: 'FUTRONO',
    },
    {
        id: '5637144907',
        localities: [
            {
                location: 'BANOS DE SOTOMO',
                id: '5637145650',
            },
            {
                location: 'CANUTILLAR',
                id: '5637145651',
            },
            {
                location: 'COCHAMO',
                id: '5637145652',
            },
            {
                location: 'EL BARRACO',
                id: '5637145653',
            },
            {
                location: 'PUELO',
                id: '5637145654',
            },
            {
                location: 'RALUN',
                id: '5637145655',
            },
            {
                location: 'ROLLIZO',
                id: '5637145656',
            },
        ],
        regionCode: '10',
        name: 'COCHAMÓ',
    },
    {
        id: '5637144617',
        localities: [
            {
                location: 'BANOS DEL GORDITO',
                id: '5637144908',
            },
            {
                location: 'BOCATOMA',
                id: '5637144909',
            },
            {
                location: 'CENTRAL LOS MOLLES',
                id: '5637144910',
            },
            {
                location: 'CHANARAL ALTO',
                id: '5637144911',
            },
            {
                location: 'CHILECITO',
                id: '5637144912',
            },
            {
                location: 'EL CARRIZAL',
                id: '5637144913',
            },
            {
                location: 'EL MAITEN',
                id: '5637144914',
            },
            {
                location: 'EL MAQUI',
                id: '5637144915',
            },
            {
                location: 'EL PALQUI',
                id: '5637144916',
            },
            {
                location: 'GUATULAME',
                id: '5637144917',
            },
            {
                location: 'LAS JUNTAS',
                id: '5637144918',
            },
            {
                location: 'LAS MOLLACAS',
                id: '5637144919',
            },
            {
                location: 'LAS RAMADAS',
                id: '5637144920',
            },
            {
                location: 'MONTE PATRIA',
                id: '5637144921',
            },
            {
                location: 'PEDREGAL',
                id: '5637144922',
            },
            {
                location: 'RAPEL',
                id: '5637144923',
            },
            {
                location: 'SAN LORENZO',
                id: '5637144924',
            },
            {
                location: 'SAN MARCOS',
                id: '5637144925',
            },
            {
                location: 'TULAHUEN',
                id: '5637144926',
            },
        ],
        regionCode: '04',
        name: 'MONTE PATRIA',
    },
    {
        id: '5637144596',
        localities: [
            {
                location: 'BARRANQUILLAS',
                id: '5637144763',
            },
            {
                location: 'CALETA DEL MEDIO',
                id: '5637144764',
            },
            {
                location: 'CALETA PAJONAL',
                id: '5637144765',
            },
            {
                location: 'COPIAPO',
                id: '5637144766',
            },
            {
                location: 'HACIENDA CASTILLA',
                id: '5637144767',
            },
            {
                location: 'TOTORAL',
                id: '5637144768',
            },
        ],
        regionCode: '03',
        name: 'COPIAPÓ',
    },
    {
        id: '5637144715',
        localities: [
            {
                location: 'BARRERA',
                id: '5637145241',
            },
            {
                location: 'COLBUN',
                id: '5637145242',
            },
            {
                location: 'SANTA ANA',
                id: '5637145243',
            },
        ],
        regionCode: '07',
        name: 'COLBÚN',
    },
    {
        id: '5637144872',
        localities: [
            {
                location: 'BARROS ARANA',
                id: '5637145610',
            },
            {
                location: 'PELECO',
                id: '5637145611',
            },
            {
                location: 'PUERTO DOMINGUEZ',
                id: '5637145612',
            },
            {
                location: 'TEODORO SCHMIDT',
                id: '5637145613',
            },
        ],
        regionCode: '09',
        name: 'TEODORO SCHMIDT',
    },
    {
        id: '5637144750',
        localities: [
            {
                location: 'BATUCO',
                id: '5637145938',
            },
            {
                location: 'LAMPA',
                id: '5637145939',
            },
        ],
        regionCode: '13',
        name: 'LAMPA',
    },
    {
        id: '5637144578',
        localities: [
            {
                location: 'BELEN',
                id: '5637146136',
            },
            {
                location: 'BRITANIA',
                id: '5637146137',
            },
            {
                location: 'CAQUENA',
                id: '5637146138',
            },
            {
                location: 'CHACUYO',
                id: '5637146139',
            },
            {
                location: 'CHAPIQUINA',
                id: '5637146140',
            },
            {
                location: 'CHICAYA',
                id: '5637146141',
            },
            {
                location: 'CHOQUELIMPIE',
                id: '5637146142',
            },
            {
                location: 'COPAQUILLA',
                id: '5637146143',
            },
            {
                location: 'CORONEL ALCERRECA',
                id: '5637146144',
            },
            {
                location: 'GUALLATIRI',
                id: '5637146145',
            },
            {
                location: 'ITISA',
                id: '5637146146',
            },
            {
                location: 'JURASI',
                id: '5637146147',
            },
            {
                location: 'LAGO CHUNGARA',
                id: '5637146148',
            },
            {
                location: 'MAILLKU',
                id: '5637146149',
            },
            {
                location: 'PACHAMA',
                id: '5637146150',
            },
            {
                location: 'PARINACOTA',
                id: '5637146151',
            },
            {
                location: 'PUQUISA',
                id: '5637146152',
            },
            {
                location: 'PUTRE',
                id: '5637146153',
            },
            {
                location: 'SOCOROMA',
                id: '5637146154',
            },
            {
                location: 'TARUGUIRE',
                id: '5637146155',
            },
            {
                location: 'TERMAS DE CHITUNE',
                id: '5637146156',
            },
            {
                location: 'TIGNAMAR',
                id: '5637146157',
            },
            {
                location: 'TIMALCHACA',
                id: '5637146158',
            },
        ],
        regionCode: '15',
        name: 'PUTRE',
    },
    {
        id: '5637144871',
        localities: [
            {
                location: 'BOCA BUDI',
                id: '5637145601',
            },
            {
                location: 'PUERTO SAAVEDRA',
                id: '5637145602',
            },
        ],
        regionCode: '09',
        name: 'SAAVEDRA',
    },
    {
        id: '5637144600',
        localities: [
            {
                location: 'BOCAMINA',
                id: '5637144769',
            },
            {
                location: 'DIEGO DE ALMAGRO',
                id: '5637144770',
            },
            {
                location: 'EL PINO',
                id: '5637144771',
            },
            {
                location: 'EL SALADO',
                id: '5637144772',
            },
            {
                location: 'EL SALVADOR',
                id: '5637144773',
            },
            {
                location: 'FINCA DE CHANARAL',
                id: '5637144774',
            },
            {
                location: 'INCA DE ORO',
                id: '5637144775',
            },
            {
                location: 'LA OLA',
                id: '5637144776',
            },
            {
                location: 'LLANTA',
                id: '5637144777',
            },
            {
                location: 'MINA CHIVATO',
                id: '5637144778',
            },
            {
                location: 'MONTANDON',
                id: '5637144779',
            },
            {
                location: 'POTRERILLOS',
                id: '5637144780',
            },
            {
                location: 'TERMAS DE RIO NEGRO',
                id: '5637144781',
            },
            {
                location: 'VEGAS DE CHANARAL ALTO',
                id: '5637144782',
            },
        ],
        regionCode: '03',
        name: 'DIEGO DE ALMAGRO',
    },
    {
        id: '5637144727',
        localities: [
            {
                location: 'BOLLENAR',
                id: '5637145947',
            },
            {
                location: 'CHOROMBO',
                id: '5637145948',
            },
            {
                location: 'LOLENCO',
                id: '5637145949',
            },
            {
                location: 'LOS RULOS',
                id: '5637145950',
            },
            {
                location: 'MARIA PINTO',
                id: '5637145951',
            },
            {
                location: 'SANTA INES',
                id: '5637145952',
            },
        ],
        regionCode: '13',
        name: 'MARÍA PINTO',
    },
    {
        id: '5637144691',
        localities: [
            {
                location: 'BOTALCURA',
                id: '5637145316',
            },
            {
                location: 'COLIN',
                id: '5637145317',
            },
            {
                location: 'CORINTO',
                id: '5637145318',
            },
            {
                location: 'CURTIDURIA',
                id: '5637145319',
            },
            {
                location: 'TALCA',
                id: '5637145320',
            },
        ],
        regionCode: '07',
        name: 'TALCA',
    },
    {
        id: '5637144680',
        localities: [
            {
                location: 'BOYERUCA',
                id: '5637145186',
            },
            {
                location: 'BUCALEMU',
                id: '5637145187',
            },
            {
                location: 'LO VALDIVIA',
                id: '5637145188',
            },
            {
                location: 'PAREDONES',
                id: '5637145189',
            },
        ],
        regionCode: '06',
        name: 'PAREDONES',
    },
    {
        id: '5637144790',
        localities: [
            {
                location: 'BUCHUPUREO',
                id: '5637145362',
            },
            {
                location: 'COBQUECURA',
                id: '5637145363',
            },
            {
                location: 'PULLAY',
                id: '5637145364',
            },
        ],
        regionCode: '08',
        name: 'COBQUECURA',
    },
    {
        id: '5637144777',
        localities: [
            {
                location: 'BUENURAQUI',
                id: '5637145471',
            },
            {
                location: 'SAN ROSENDO',
                id: '5637145472',
            },
        ],
        regionCode: '08',
        name: 'SAN ROSENDO',
    },
    {
        id: '5637144861',
        localities: [
            {
                location: 'BUILL',
                id: '5637145640',
            },
            {
                location: 'CALETA GONZALO',
                id: '5637145641',
            },
            {
                location: 'CALETA SANTA BARBARA',
                id: '5637145642',
            },
            {
                location: 'CHAITEN',
                id: '5637145643',
            },
            {
                location: 'PUERTO CARDENAS',
                id: '5637145644',
            },
            {
                location: 'TERMAS EL AMARILLO',
                id: '5637145645',
            },
        ],
        regionCode: '10',
        name: 'CHAITÉN',
    },
    {
        id: '5637144742',
        localities: [
            {
                location: 'BUIN',
                id: '5637145911',
            },
            {
                location: 'MAIPO',
                id: '5637145912',
            },
        ],
        regionCode: '13',
        name: 'BUIN',
    },
    {
        id: '5637144789',
        localities: [
            {
                location: 'BULNES',
                id: '5637145349',
            },
            {
                location: 'QUINCHAMALI',
                id: '5637145350',
            },
        ],
        regionCode: '08',
        name: 'BULNES',
    },
    {
        id: '5637144837',
        localities: [
            {
                location: 'CABEZA DE MAR',
                id: '5637145879',
            },
            {
                location: 'ESTANCIA SAN JUAN',
                id: '5637145880',
            },
            {
                location: 'FUERTE BULNES',
                id: '5637145881',
            },
            {
                location: 'MINA PECKET',
                id: '5637145882',
            },
            {
                location: 'PUNTA ARENAS',
                id: '5637145883',
            },
            {
                location: 'RANCHO PUNTA ARENAS',
                id: '5637145884',
            },
            {
                location: 'TERMINAL CABO NEGRO',
                id: '5637145885',
            },
        ],
        regionCode: '12',
        name: 'PUNTA ARENAS',
    },
    {
        id: '5637144833',
        localities: [
            {
                location: 'CABO DE HORNOS',
                id: '5637145852',
            },
            {
                location: 'CALETA EUGENIA',
                id: '5637145853',
            },
            {
                location: 'ISLA NAVARINO',
                id: '5637145854',
            },
            {
                location: 'LAPATAIA',
                id: '5637145855',
            },
            {
                location: 'PUERTO TORO',
                id: '5637145856',
            },
            {
                location: 'PUERTO WILLIAMS',
                id: '5637145857',
            },
            {
                location: 'YENDEGAIA',
                id: '5637145858',
            },
        ],
        regionCode: '12',
        name: 'CABO DE HORNOS',
    },
    {
        id: '5637144766',
        localities: [
            {
                location: 'CABRERO',
                id: '5637145351',
            },
            {
                location: 'LIUCURA',
                id: '5637145352',
            },
            {
                location: 'PASO HONDO',
                id: '5637145353',
            },
            {
                location: 'TOMECO',
                id: '5637145354',
            },
        ],
        regionCode: '08',
        name: 'CABRERO',
    },
    {
        id: '5637144869',
        localities: [
            {
                location: 'CABURGUA',
                id: '5637145590',
            },
            {
                location: 'HUIFE',
                id: '5637145591',
            },
            {
                location: 'PUCON',
                id: '5637145592',
            },
            {
                location: 'REFUGIO',
                id: '5637145593',
            },
            {
                location: 'TERMAS DE HUIFE',
                id: '5637145594',
            },
            {
                location: 'TERMAS DE MENETUE',
                id: '5637145595',
            },
            {
                location: 'TERMAS DE PALGUIN',
                id: '5637145596',
            },
        ],
        regionCode: '09',
        name: 'PUCÓN',
    },
    {
        id: '5637144636',
        localities: [
            {
                location: 'CACHAGUA',
                id: '5637145126',
            },
            {
                location: 'CATAPILCO',
                id: '5637145127',
            },
            {
                location: 'ZAPALLAR',
                id: '5637145128',
            },
        ],
        regionCode: '05',
        name: 'ZAPALLAR',
    },
    {
        id: '5637144813',
        localities: [
            {
                location: 'CACHAPOAL',
                id: '5637145457',
            },
            {
                location: 'EL SAUCE',
                id: '5637145458',
            },
            {
                location: 'NAHUELTORO',
                id: '5637145459',
            },
            {
                location: 'SAN CARLOS',
                id: '5637145460',
            },
            {
                location: 'SAN GREGORIO NIQUEN',
                id: '5637145461',
            },
            {
                location: 'ZEMITA',
                id: '5637145462',
            },
        ],
        regionCode: '08',
        name: 'SAN CARLOS',
    },
    {
        id: '5637144613',
        localities: [
            {
                location: 'CAIMANES',
                id: '5637144895',
            },
            {
                location: 'CASUTO',
                id: '5637144896',
            },
            {
                location: 'CHIGUALOCO',
                id: '5637144897',
            },
            {
                location: 'GUANGALI',
                id: '5637144898',
            },
            {
                location: 'LOS ERMITANOS',
                id: '5637144899',
            },
            {
                location: 'LOS MOLLES',
                id: '5637144900',
            },
            {
                location: 'LOS VILOS',
                id: '5637144901',
            },
            {
                location: 'MAURO',
                id: '5637144902',
            },
            {
                location: 'PICHIDANGUI',
                id: '5637144903',
            },
            {
                location: 'PUPIO',
                id: '5637144904',
            },
            {
                location: 'QUELON',
                id: '5637144905',
            },
            {
                location: 'QUILIMARI',
                id: '5637144906',
            },
            {
                location: 'TILAMA',
                id: '5637144907',
            },
        ],
        regionCode: '04',
        name: 'LOS VILOS',
    },
    {
        id: '5637144838',
        localities: [
            {
                location: 'CAJON',
                id: '5637145603',
            },
            {
                location: 'GENERAL LOPEZ',
                id: '5637145604',
            },
            {
                location: 'LABRANZA',
                id: '5637145605',
            },
            {
                location: 'MAQUEHUE',
                id: '5637145606',
            },
            {
                location: 'METRENCO',
                id: '5637145607',
            },
            {
                location: 'PILLANLELBUN',
                id: '5637145608',
            },
            {
                location: 'TEMUCO',
                id: '5637145609',
            },
        ],
        regionCode: '09',
        name: 'TEMUCO',
    },
    {
        id: '5637144915',
        localities: [
            {
                location: 'CALAFQUEN',
                id: '5637146078',
            },
            {
                location: 'CARIRRINGUE',
                id: '5637146079',
            },
            {
                location: 'CHOSHUENCO',
                id: '5637146080',
            },
            {
                location: 'CONARIPE',
                id: '5637146081',
            },
            {
                location: 'ENCO',
                id: '5637146082',
            },
            {
                location: 'LICAN RAY',
                id: '5637146083',
            },
            {
                location: 'LIQUINE',
                id: '5637146084',
            },
            {
                location: 'LOS TALLOS',
                id: '5637146085',
            },
            {
                location: 'NANCUL',
                id: '5637146086',
            },
            {
                location: 'NELTUME',
                id: '5637146087',
            },
            {
                location: 'PANGUIPULLI',
                id: '5637146088',
            },
            {
                location: 'PUERTO FUY',
                id: '5637146089',
            },
            {
                location: 'PUERTO PIRIHUEICO',
                id: '5637146090',
            },
            {
                location: 'PULLINGUE',
                id: '5637146091',
            },
            {
                location: 'TERMAS DE CONARIPE',
                id: '5637146092',
            },
        ],
        regionCode: '14',
        name: 'PANGUIPULLI',
    },
    {
        id: '5637144916',
        localities: [
            {
                location: 'CALBUCO',
                id: '5637145635',
            },
            {
                location: 'HUELMO',
                id: '5637145636',
            },
        ],
        regionCode: '10',
        name: 'CALBUCO',
    },
    {
        id: '5637144594',
        localities: [
            {
                location: 'CALETA BOY',
                id: '5637144735',
            },
            {
                location: 'CALETA BUENA',
                id: '5637144736',
            },
            {
                location: 'COBIJA',
                id: '5637144737',
            },
            {
                location: 'MICHILLA',
                id: '5637144738',
            },
            {
                location: 'MINA MICHILLA',
                id: '5637144739',
            },
            {
                location: 'TOCOPILLA',
                id: '5637144740',
            },
        ],
        regionCode: '02',
        name: 'TOCOPILLA',
    },
    {
        id: '5637144580',
        localities: [
            {
                location: 'CALETA BUENA',
                id: '5637144607',
            },
            {
                location: 'CHIPANA',
                id: '5637144608',
            },
            {
                location: 'IQUIQUE',
                id: '5637144609',
            },
            {
                location: 'MINA FAKIR',
                id: '5637144610',
            },
            {
                location: 'MINA LOBOS',
                id: '5637144611',
            },
            {
                location: 'PLAYA BLANCA',
                id: '5637144612',
            },
            {
                location: 'PUERTO PATILLOS',
                id: '5637144613',
            },
            {
                location: 'PUNTA LOBOS',
                id: '5637144614',
            },
            {
                location: 'RIO SECO',
                id: '5637144615',
            },
        ],
        regionCode: '01',
        name: 'IQUIQUE',
    },
    {
        id: '5637144577',
        localities: [
            {
                location: 'CALETA CAMARONES',
                id: '5637146120',
            },
            {
                location: 'CALETA CHICA',
                id: '5637146121',
            },
            {
                location: 'CAMARONES',
                id: '5637146122',
            },
            {
                location: 'CUYA',
                id: '5637146123',
            },
            {
                location: 'MINIMINE',
                id: '5637146124',
            },
            {
                location: 'MINITA',
                id: '5637146125',
            },
            {
                location: 'QUIPINTA',
                id: '5637146126',
            },
            {
                location: 'SUCA',
                id: '5637146127',
            },
        ],
        regionCode: '15',
        name: 'CAMARONES',
    },
    {
        id: '5637144603',
        localities: [
            {
                location: 'CALETA CHANARAL',
                id: '5637144783',
            },
            {
                location: 'CALETA SARCO',
                id: '5637144784',
            },
            {
                location: 'CARRIZALILLO',
                id: '5637144785',
            },
            {
                location: 'FREIRINA',
                id: '5637144786',
            },
            {
                location: 'LA FRAGUITA',
                id: '5637144787',
            },
            {
                location: 'LABRAR',
                id: '5637144788',
            },
            {
                location: 'MAITENCILLO',
                id: '5637144789',
            },
            {
                location: 'MINA ALGARROBO',
                id: '5637144790',
            },
        ],
        regionCode: '03',
        name: 'FREIRINA',
    },
    {
        id: '5637144624',
        localities: [
            {
                location: 'CALETA HORCON',
                id: '5637145080',
            },
            {
                location: 'CANELA ALTA',
                id: '5637145081',
            },
            {
                location: 'CANELA BAJA',
                id: '5637145082',
            },
            {
                location: 'EL RINCON',
                id: '5637145083',
            },
            {
                location: 'LA LAGUNA',
                id: '5637145084',
            },
            {
                location: 'LA QUEBRADA',
                id: '5637145085',
            },
            {
                location: 'PUCHUNCAVI',
                id: '5637145086',
            },
            {
                location: 'VENTANAS',
                id: '5637145087',
            },
        ],
        regionCode: '05',
        name: 'PUCHUNCAVÍ',
    },
    {
        id: '5637144612',
        localities: [
            {
                location: 'CALETA MORRITOS',
                id: '5637144828',
            },
            {
                location: 'CANELA',
                id: '5637144829',
            },
            {
                location: 'MANTOS DE HORNILLOS',
                id: '5637144830',
            },
            {
                location: 'POZA HONDA',
                id: '5637144831',
            },
            {
                location: 'PUERTO OSCURO',
                id: '5637144832',
            },
        ],
        regionCode: '04',
        name: 'CANELA',
    },
    {
        id: '5637144632',
        localities: [
            {
                location: 'CALETA POLCURA',
                id: '5637145046',
            },
            {
                location: 'EL INGENIO',
                id: '5637145047',
            },
            {
                location: 'LA LIGUA',
                id: '5637145048',
            },
            {
                location: 'LA PATAGUA',
                id: '5637145049',
            },
            {
                location: 'LONGOTOMA',
                id: '5637145050',
            },
            {
                location: 'PICHICUY',
                id: '5637145051',
            },
            {
                location: 'QUINQUIMO',
                id: '5637145052',
            },
        ],
        regionCode: '05',
        name: 'LA LIGUA',
    },
    {
        id: '5637144845',
        localities: [
            {
                location: 'CALETA TORTEL',
                id: '5637145845',
            },
            {
                location: 'ISLA CAMPANA',
                id: '5637145846',
            },
            {
                location: 'ISLA MERINO JARPA',
                id: '5637145847',
            },
            {
                location: 'ISLA PATRICIO LYNCH',
                id: '5637145848',
            },
            {
                location: 'PUERTO YUNGAY',
                id: '5637145849',
            },
            {
                location: 'TORTEL',
                id: '5637145850',
            },
        ],
        regionCode: '11',
        name: 'TORTEL',
    },
    {
        id: '5637144620',
        localities: [
            {
                location: 'CALETAS LAS DOCAS',
                id: '5637145115',
            },
            {
                location: 'LAGUNA VERDE',
                id: '5637145116',
            },
            {
                location: 'LAS TABLAS',
                id: '5637145117',
            },
            {
                location: 'PENUELAS',
                id: '5637145118',
            },
            {
                location: 'PLACILLA',
                id: '5637145119',
            },
            {
                location: 'PUNTA CURAUMILLA',
                id: '5637145120',
            },
            {
                location: 'VALPARAISO',
                id: '5637145121',
            },
        ],
        regionCode: '05',
        name: 'VALPARAÍSO',
    },
    {
        id: '5637144665',
        localities: [
            {
                location: 'CALETONES',
                id: '5637145158',
            },
            {
                location: 'CHAPA VERDE',
                id: '5637145159',
            },
            {
                location: 'COLON',
                id: '5637145160',
            },
            {
                location: 'COYA',
                id: '5637145161',
            },
            {
                location: 'MACHALI',
                id: '5637145162',
            },
            {
                location: 'MINA LA JUANITA',
                id: '5637145163',
            },
            {
                location: 'SEWELL',
                id: '5637145164',
            },
        ],
        regionCode: '06',
        name: 'MACHALÍ',
    },
    {
        id: '5637144629',
        localities: [
            {
                location: 'CALLE LARGA',
                id: '5637145015',
            },
        ],
        regionCode: '05',
        name: 'CALLE LARGA',
    },
    {
        id: '5637144829',
        localities: [
            {
                location: 'CAMERON',
                id: '5637145898',
            },
            {
                location: 'PUERTO ARTURO',
                id: '5637145899',
            },
            {
                location: 'PUERTO CONDOR',
                id: '5637145900',
            },
            {
                location: 'PUERTO YARTAU',
                id: '5637145901',
            },
            {
                location: 'TIMAUKEL',
                id: '5637145902',
            },
        ],
        regionCode: '12',
        name: 'TIMAUKEL',
    },
    {
        id: '5637144821',
        localities: [
            {
                location: 'CAMPANARIO',
                id: '5637145508',
            },
            {
                location: 'CHOLGUAN',
                id: '5637145509',
            },
            {
                location: 'EL SALTILLO',
                id: '5637145510',
            },
            {
                location: 'PANGAL',
                id: '5637145511',
            },
            {
                location: 'YUNGAY',
                id: '5637145512',
            },
        ],
        regionCode: '08',
        name: 'YUNGAY',
    },
    {
        id: '5637144883',
        localities: [
            {
                location: 'CANADA',
                id: '5637145523',
            },
            {
                location: 'COLLIPULLI',
                id: '5637145524',
            },
            {
                location: 'CURACO',
                id: '5637145525',
            },
            {
                location: 'EL AMARGO',
                id: '5637145526',
            },
            {
                location: 'NANCO',
                id: '5637145527',
            },
            {
                location: 'TERMAS DE PEMEHUE',
                id: '5637145528',
            },
            {
                location: 'TRINTRE',
                id: '5637145529',
            },
        ],
        regionCode: '09',
        name: 'COLLIPULLI',
    },
    {
        id: '5637144799',
        localities: [
            {
                location: 'CANCHA ALEGRE',
                id: '5637145429',
            },
            {
                location: 'COIPIN',
                id: '5637145430',
            },
            {
                location: 'EL PARRON',
                id: '5637145431',
            },
            {
                location: 'NINHUE',
                id: '5637145432',
            },
            {
                location: 'POCILLAS',
                id: '5637145433',
            },
            {
                location: 'TORRECILLA',
                id: '5637145434',
            },
        ],
        regionCode: '08',
        name: 'NINHUE',
    },
    {
        id: '5637144585',
        localities: [
            {
                location: 'CANCOSA',
                id: '5637144598',
            },
            {
                location: 'CHUSMISA',
                id: '5637144599',
            },
            {
                location: 'COLLACAGUA',
                id: '5637144600',
            },
            {
                location: 'HUARA',
                id: '5637144601',
            },
            {
                location: 'LIRIMA',
                id: '5637144602',
            },
            {
                location: 'MOCHA',
                id: '5637144603',
            },
            {
                location: 'PACHICA',
                id: '5637144604',
            },
            {
                location: 'POROMA',
                id: '5637144605',
            },
            {
                location: 'TARAPACA',
                id: '5637144606',
            },
        ],
        regionCode: '01',
        name: 'HUARA',
    },
    {
        id: '5637144878',
        localities: [
            {
                location: 'CANCURA',
                id: '5637145703',
            },
            {
                location: 'LAS LUMAS',
                id: '5637145704',
            },
            {
                location: 'MONTE VERDE',
                id: '5637145705',
            },
            {
                location: 'OSORNO',
                id: '5637145706',
            },
            {
                location: 'PICHI DAMAS',
                id: '5637145707',
            },
            {
                location: 'REMEHUE',
                id: '5637145708',
            },
        ],
        regionCode: '10',
        name: 'OSORNO',
    },
    {
        id: '5637144751',
        localities: [
            {
                location: 'CANETE',
                id: '5637145355',
            },
            {
                location: 'CAYUCUPIL',
                id: '5637145356',
            },
            {
                location: 'SAN ALFONSO',
                id: '5637145357',
            },
        ],
        regionCode: '08',
        name: 'CAÑETE',
    },
    {
        id: '5637144775',
        localities: [
            {
                location: 'CANICURA',
                id: '5637145450',
            },
            {
                location: 'CANTERAS',
                id: '5637145451',
            },
            {
                location: 'QUILLECO',
                id: '5637145452',
            },
            {
                location: 'VILLA MERCEDES',
                id: '5637145453',
            },
        ],
        regionCode: '08',
        name: 'QUILLECO',
    },
    {
        id: '5637144604',
        localities: [
            {
                location: 'CANTO DE AGUA',
                id: '5637144791',
            },
            {
                location: 'CARRIZAL BAJO',
                id: '5637144792',
            },
            {
                location: 'HUASCO',
                id: '5637144793',
            },
            {
                location: 'HUASCO BAJO',
                id: '5637144794',
            },
            {
                location: 'LOS TOYOS',
                id: '5637144795',
            },
            {
                location: 'MIRAFLORES',
                id: '5637144796',
            },
        ],
        regionCode: '03',
        name: 'HUASCO',
    },
    {
        id: '5637144890',
        localities: [
            {
                location: 'CAPITAN PASTENE',
                id: '5637145573',
            },
            {
                location: 'LUMACO',
                id: '5637145574',
            },
            {
                location: 'PICHIPELLAHUEN',
                id: '5637145575',
            },
            {
                location: 'RELUN',
                id: '5637145576',
            },
        ],
        regionCode: '09',
        name: 'LUMACO',
    },
    {
        id: '5637144862',
        localities: [
            {
                location: 'CARACOL',
                id: '5637145788',
            },
            {
                location: 'CHIRRE',
                id: '5637145789',
            },
            {
                location: 'FILUCO',
                id: '5637145790',
            },
            {
                location: 'PURRAPEL',
                id: '5637145791',
            },
        ],
        regionCode: '10',
        name: 'SAN PABLO',
    },
    {
        id: '5637144589',
        localities: [
            {
                location: 'CARACOLES',
                id: '5637144725',
            },
            {
                location: 'CENTINELA',
                id: '5637144726',
            },
            {
                location: 'FLOR DEL DESIERTO',
                id: '5637144727',
            },
            {
                location: 'MELLIZOS',
                id: '5637144728',
            },
            {
                location: 'MINERA ZALDIVAR',
                id: '5637144729',
            },
            {
                location: 'SIERRA GORDA',
                id: '5637144730',
            },
        ],
        regionCode: '02',
        name: 'SIERRA GORDA',
    },
    {
        id: '5637144839',
        localities: [
            {
                location: 'CARAHUE',
                id: '5637145517',
            },
            {
                location: 'LOBERIA',
                id: '5637145518',
            },
            {
                location: 'NEHUENTUE',
                id: '5637145519',
            },
            {
                location: 'TROVOLHUE',
                id: '5637145520',
            },
            {
                location: 'VILLA ARAUCANIA',
                id: '5637145521',
            },
        ],
        regionCode: '09',
        name: 'CARAHUE',
    },
    {
        id: '5637144902',
        localities: [
            {
                location: 'CARELMAPU',
                id: '5637145698',
            },
            {
                location: 'MAULLIN',
                id: '5637145699',
            },
            {
                location: 'MISQUIHUE',
                id: '5637145700',
            },
            {
                location: 'PARGUA',
                id: '5637145701',
            },
            {
                location: 'PUELPUN',
                id: '5637145702',
            },
        ],
        regionCode: '10',
        name: 'MAULLÍN',
    },
    {
        id: '5637144611',
        localities: [
            {
                location: 'CAREN',
                id: '5637144856',
            },
            {
                location: 'CHOAPA',
                id: '5637144857',
            },
            {
                location: 'COCUA',
                id: '5637144858',
            },
            {
                location: 'FARELLON SANCHEZ',
                id: '5637144859',
            },
            {
                location: 'HUENTELAUQUEN',
                id: '5637144860',
            },
            {
                location: 'HUINTIL',
                id: '5637144861',
            },
            {
                location: 'ILLAPEL',
                id: '5637144862',
            },
            {
                location: 'LAS CANAS',
                id: '5637144863',
            },
            {
                location: 'LAS PIRCAS',
                id: '5637144864',
            },
            {
                location: 'MATANCILLA',
                id: '5637144865',
            },
            {
                location: 'MINCHA',
                id: '5637144866',
            },
            {
                location: 'MINCHA SUR',
                id: '5637144867',
            },
            {
                location: 'RABANALES',
                id: '5637144868',
            },
            {
                location: 'TUNGA NORTE',
                id: '5637144869',
            },
            {
                location: 'TUNGA SUR',
                id: '5637144870',
            },
        ],
        regionCode: '04',
        name: 'ILLAPEL',
    },
    {
        id: '5637144644',
        localities: [
            {
                location: 'CARTAGENA',
                id: '5637145016',
            },
            {
                location: 'EL TURCO',
                id: '5637145017',
            },
            {
                location: 'LAS CRUCES',
                id: '5637145018',
            },
            {
                location: 'LO ABARCA',
                id: '5637145019',
            },
            {
                location: 'SAN SEBASTIAN',
                id: '5637145020',
            },
        ],
        regionCode: '05',
        name: 'CARTAGENA',
    },
    {
        id: '5637144621',
        localities: [
            {
                location: 'CASABLANCA',
                id: '5637145021',
            },
            {
                location: 'EL CARPINTERO',
                id: '5637145022',
            },
            {
                location: 'LAGUNILLAS',
                id: '5637145023',
            },
            {
                location: 'LAS DICHAS',
                id: '5637145024',
            },
            {
                location: 'LAS MERCEDES',
                id: '5637145025',
            },
            {
                location: 'LO OROZCO',
                id: '5637145026',
            },
            {
                location: 'LO VASQUEZ',
                id: '5637145027',
            },
            {
                location: 'SAN GERONIMO',
                id: '5637145028',
            },
            {
                location: 'TAPIHUE',
                id: '5637145029',
            },
        ],
        regionCode: '05',
        name: 'CASABLANCA',
    },
    {
        id: '5637144873',
        localities: [
            {
                location: 'CASMA',
                id: '5637145737',
            },
            {
                location: 'CONCORDIA',
                id: '5637145738',
            },
            {
                location: 'CORTE ALTO',
                id: '5637145739',
            },
            {
                location: 'CRUCERO',
                id: '5637145740',
            },
            {
                location: 'HUEYUSCA',
                id: '5637145741',
            },
            {
                location: 'LOS CORRALES',
                id: '5637145742',
            },
            {
                location: 'PURRANQUE',
                id: '5637145743',
            },
        ],
        regionCode: '10',
        name: 'PURRANQUE',
    },
    {
        id: '5637144649',
        localities: [
            {
                location: 'CATEMU',
                id: '5637145030',
            },
            {
                location: 'CHAGRES',
                id: '5637145031',
            },
            {
                location: 'EL CERRADO',
                id: '5637145032',
            },
            {
                location: 'EL COBRE',
                id: '5637145033',
            },
            {
                location: 'NILHUE',
                id: '5637145034',
            },
        ],
        regionCode: '05',
        name: 'CATEMU',
    },
    {
        id: '5637144701',
        localities: [
            {
                location: 'CAUQUENES',
                id: '5637145234',
            },
            {
                location: 'HUALVE',
                id: '5637145235',
            },
            {
                location: 'LOS NABOS',
                id: '5637145236',
            },
            {
                location: 'QUELLA',
                id: '5637145237',
            },
            {
                location: 'UNICAVEN',
                id: '5637145238',
            },
        ],
        regionCode: '07',
        name: 'CAUQUENES',
    },
    {
        id: '5637144921',
        localities: [
            {
                location: 'CAYURRUCA',
                id: '5637146093',
            },
            {
                location: 'CHANCHAN',
                id: '5637146094',
            },
            {
                location: 'LOS CHILCOS',
                id: '5637146095',
            },
            {
                location: 'PUERTO NUEVO',
                id: '5637146096',
            },
            {
                location: 'RIO BUENO',
                id: '5637146097',
            },
        ],
        regionCode: '14',
        name: 'RÍO BUENO',
    },
    {
        id: '5637144889',
        localities: [
            {
                location: 'CENTENARIO',
                id: '5637145570',
            },
            {
                location: 'LOS SAUCES',
                id: '5637145571',
            },
            {
                location: 'NAHUELVE',
                id: '5637145572',
            },
        ],
        regionCode: '09',
        name: 'LOS SAUCES',
    },
    {
        id: '5637144876',
        localities: [
            {
                location: 'CENTRAL RUPANCO',
                id: '5637145720',
            },
            {
                location: 'LAS CASCADAS',
                id: '5637145721',
            },
            {
                location: 'LOS BAJOS',
                id: '5637145722',
            },
            {
                location: 'PIEDRAS NEGRAS',
                id: '5637145723',
            },
            {
                location: 'PUERTO CLOCKER',
                id: '5637145724',
            },
            {
                location: 'PUERTO FONCK',
                id: '5637145725',
            },
            {
                location: 'PUERTO OCTAY',
                id: '5637145726',
            },
            {
                location: 'REFUGIO LA PICADA',
                id: '5637145727',
            },
        ],
        regionCode: '10',
        name: 'PUERTO OCTAY',
    },
    {
        id: '5637144825',
        localities: [
            {
                location: 'CERRILLOS',
                id: '5637145915',
            },
        ],
        regionCode: '13',
        name: 'CERRILLOS',
    },
    {
        id: '5637144648',
        localities: [
            {
                location: 'CERRILLOS DE SAN FELIPE',
                id: '5637145106',
            },
            {
                location: 'CURIMON',
                id: '5637145107',
            },
            {
                location: 'SAN FELIPE',
                id: '5637145108',
            },
        ],
        regionCode: '05',
        name: 'SAN FELIPE',
    },
    {
        id: '5637144746',
        localities: [
            {
                location: 'CERRO BLANCO',
                id: '5637146013',
            },
            {
                location: 'POLPAICO',
                id: '5637146014',
            },
            {
                location: 'TIL TIL',
                id: '5637146015',
            },
        ],
        regionCode: '13',
        name: 'TILTIL',
    },
    {
        id: '5637144828',
        localities: [
            {
                location: 'CERRO CASTILLO',
                id: '5637145860',
            },
            {
                location: 'LA JUNTA',
                id: '5637145861',
            },
            {
                location: 'PUERTO BORIES',
                id: '5637145862',
            },
            {
                location: 'PUERTO NATALES',
                id: '5637145863',
            },
            {
                location: 'RIO TURBIO',
                id: '5637145864',
            },
            {
                location: 'RUBENS',
                id: '5637145865',
            },
        ],
        regionCode: '12',
        name: 'NATALES',
    },
    {
        id: '5637144824',
        localities: [
            {
                location: 'CERRO NAVIA',
                id: '5637145916',
            },
        ],
        regionCode: '13',
        name: 'CERRO NAVIA',
    },
    {
        id: '5637144830',
        localities: [
            {
                location: 'CERRO SOMBRERO',
                id: '5637145872',
            },
            {
                location: 'CULLEN',
                id: '5637145873',
            },
            {
                location: 'ESTANCIA CHINA CR.',
                id: '5637145874',
            },
            {
                location: 'ESTANCIA LOS OLIVOS',
                id: '5637145875',
            },
            {
                location: 'MANANTIALES',
                id: '5637145876',
            },
            {
                location: 'ONAISIN',
                id: '5637145877',
            },
            {
                location: 'PRIMAVERA',
                id: '5637145878',
            },
        ],
        regionCode: '12',
        name: 'PRIMAVERA',
    },
    {
        id: '5637144754',
        localities: [
            {
                location: 'CHACAY',
                id: '5637145992',
            },
            {
                location: 'EL MANZANILLO',
                id: '5637145993',
            },
            {
                location: 'EL MELOCOTON',
                id: '5637145994',
            },
            {
                location: 'GUAYACAN',
                id: '5637145995',
            },
            {
                location: 'LAS MELOSAS',
                id: '5637145996',
            },
            {
                location: 'LO VALDES',
                id: '5637145997',
            },
            {
                location: 'LOS MAITENES',
                id: '5637145998',
            },
            {
                location: 'LOS QUELTEHUES',
                id: '5637145999',
            },
            {
                location: 'SAN GABRIEL',
                id: '5637146000',
            },
            {
                location: 'SAN JOSE DE MAIPO',
                id: '5637146001',
            },
            {
                location: 'VILLA DEL VALLE',
                id: '5637146002',
            },
        ],
        regionCode: '13',
        name: 'SAN JOSÉ DE MAIPO',
    },
    {
        id: '5637144898',
        localities: [
            {
                location: 'CHADMO CENTRAL',
                id: '5637145646',
            },
            {
                location: 'CHONCHI',
                id: '5637145647',
            },
            {
                location: 'CUCAO',
                id: '5637145648',
            },
            {
                location: 'TEUPA',
                id: '5637145649',
            },
        ],
        regionCode: '10',
        name: 'CHONCHI',
    },
    {
        id: '5637144868',
        localities: [
            {
                location: 'CHAHUILCO',
                id: '5637145777',
            },
            {
                location: 'EL BOLSON',
                id: '5637145778',
            },
            {
                location: 'HUILMA',
                id: '5637145779',
            },
            {
                location: 'MILLANTUE',
                id: '5637145780',
            },
            {
                location: 'RIO NEGRO',
                id: '5637145781',
            },
        ],
        regionCode: '10',
        name: 'RÍO NEGRO',
    },
    {
        id: '5637144635',
        localities: [
            {
                location: 'CHALACO',
                id: '5637145073',
            },
            {
                location: 'CHINCOLCO',
                id: '5637145074',
            },
            {
                location: 'HIERRO VIEJO',
                id: '5637145075',
            },
            {
                location: 'MANUEL MONTT',
                id: '5637145076',
            },
            {
                location: 'MINA EL ROSARIO',
                id: '5637145077',
            },
            {
                location: 'PEDERNAL',
                id: '5637145078',
            },
            {
                location: 'PETORCA',
                id: '5637145079',
            },
        ],
        regionCode: '05',
        name: 'PETORCA',
    },
    {
        id: '5637144737',
        localities: [
            {
                location: 'CHAMPA',
                id: '5637145965',
            },
            {
                location: 'EL TRANSITO',
                id: '5637145966',
            },
            {
                location: 'HOSPITAL',
                id: '5637145967',
            },
            {
                location: 'HUELQUEN',
                id: '5637145968',
            },
            {
                location: 'LINDEROS',
                id: '5637145969',
            },
            {
                location: 'PAINE',
                id: '5637145970',
            },
            {
                location: 'PINTUE',
                id: '5637145971',
            },
            {
                location: 'RANGUE',
                id: '5637145972',
            },
            {
                location: 'SANTA MARTA',
                id: '5637145973',
            },
        ],
        regionCode: '13',
        name: 'PAINE',
    },
    {
        id: '5637144599',
        localities: [
            {
                location: 'CHANARAL',
                id: '5637144754',
            },
            {
                location: 'FLAMENCO',
                id: '5637144755',
            },
            {
                location: 'MINA DICHOSA',
                id: '5637144756',
            },
            {
                location: 'MINA LA ESTRELLA',
                id: '5637144757',
            },
            {
                location: 'MINA ROSARIO',
                id: '5637144758',
            },
            {
                location: 'OBISPITO',
                id: '5637144759',
            },
            {
                location: 'PAN DE AZUCAR',
                id: '5637144760',
            },
            {
                location: 'PLAYA REFUGIO',
                id: '5637144761',
            },
            {
                location: 'PUERTO FINO',
                id: '5637144762',
            },
        ],
        regionCode: '03',
        name: 'CHAÑARAL',
    },
    {
        id: '5637144702',
        localities: [
            {
                location: 'CHANCO',
                id: '5637145239',
            },
            {
                location: 'CURANIPE',
                id: '5637145240',
            },
        ],
        regionCode: '07',
        name: 'CHANCO',
    },
    {
        id: '5637144912',
        localities: [
            {
                location: 'CHANCOYAN',
                id: '5637146060',
            },
            {
                location: 'FUNDO ALTUE',
                id: '5637146061',
            },
            {
                location: 'MAFIL',
                id: '5637146062',
            },
            {
                location: 'PUERTO PAICO',
                id: '5637146063',
            },
        ],
        regionCode: '14',
        name: 'MÁFIL',
    },
    {
        id: '5637144875',
        localities: [
            {
                location: 'CHERQUENCO',
                id: '5637145623',
            },
            {
                location: 'REFUGIO LLAIMA',
                id: '5637145624',
            },
            {
                location: 'SAN PATRICIO',
                id: '5637145625',
            },
            {
                location: 'VILCUN',
                id: '5637145626',
            },
        ],
        regionCode: '09',
        name: 'VILCÚN',
    },
    {
        id: '5637144752',
        localities: [
            {
                location: 'CHICUREO',
                id: '5637145917',
            },
            {
                location: 'COLINA',
                id: '5637145918',
            },
            {
                location: 'ESMERALDA',
                id: '5637145919',
            },
            {
                location: 'LAS CANTERAS',
                id: '5637145920',
            },
        ],
        regionCode: '13',
        name: 'COLINA',
    },
    {
        id: '5637144731',
        localities: [
            {
                location: 'CHIGUAYANTE',
                id: '5637145358',
            },
        ],
        regionCode: '08',
        name: 'CHIGUAYANTE',
    },
    {
        id: '5637144843',
        localities: [
            {
                location: 'CHILE CHICO',
                id: '5637145801',
            },
            {
                location: 'PUERTO BERTRAND',
                id: '5637145802',
            },
            {
                location: 'PUERTO FACHINAL',
                id: '5637145803',
            },
            {
                location: 'PUERTO GUADAL',
                id: '5637145804',
            },
            {
                location: 'PUERTO MURTA',
                id: '5637145805',
            },
            {
                location: 'PUERTO SANCHEZ',
                id: '5637145806',
            },
            {
                location: 'PUERTO TRANQUILO',
                id: '5637145807',
            },
        ],
        regionCode: '11',
        name: 'CHILE CHICO',
    },
    {
        id: '5637144786',
        localities: [
            {
                location: 'CHILLAN',
                id: '5637145359',
            },
        ],
        regionCode: '08',
        name: 'CHILLÁN',
    },
    {
        id: '5637144795',
        localities: [
            {
                location: 'CHILLAN VIEJO',
                id: '5637145360',
            },
            {
                location: 'RUCAPEQUEN',
                id: '5637145361',
            },
        ],
        regionCode: '08',
        name: 'CHILLÁN VIEJO',
    },
    {
        id: '5637144683',
        localities: [
            {
                location: 'CHIMBARONGO',
                id: '5637145131',
            },
            {
                location: 'CONVENTO VIEJO',
                id: '5637145132',
            },
            {
                location: 'HUEMUL',
                id: '5637145133',
            },
            {
                location: 'MORZA',
                id: '5637145134',
            },
            {
                location: 'QUINTA',
                id: '5637145135',
            },
        ],
        regionCode: '06',
        name: 'CHIMBARONGO',
    },
    {
        id: '5637144616',
        localities: [
            {
                location: 'CHINEO',
                id: '5637144833',
            },
            {
                location: 'CHINGAY',
                id: '5637144834',
            },
            {
                location: 'COGOTI',
                id: '5637144835',
            },
            {
                location: 'COMBARBALA',
                id: '5637144836',
            },
            {
                location: 'HILARICOS',
                id: '5637144837',
            },
            {
                location: 'LA LIGUA BAJO',
                id: '5637144838',
            },
            {
                location: 'LAS COLORADAS',
                id: '5637144839',
            },
            {
                location: 'LLAHUIN',
                id: '5637144840',
            },
            {
                location: 'PARMA',
                id: '5637144841',
            },
            {
                location: 'QUILITAPIA',
                id: '5637144842',
            },
            {
                location: 'SANTA CECILIA',
                id: '5637144843',
            },
        ],
        regionCode: '04',
        name: 'COMBARBALÁ',
    },
    {
        id: '5637144735',
        localities: [
            {
                location: 'CHOCALAN',
                id: '5637145953',
            },
            {
                location: 'CODIGUA',
                id: '5637145954',
            },
            {
                location: 'CULIPRAN',
                id: '5637145955',
            },
            {
                location: 'LAS MARIPOSAS',
                id: '5637145956',
            },
            {
                location: 'MANDINGA',
                id: '5637145957',
            },
            {
                location: 'MELIPILLA',
                id: '5637145958',
            },
            {
                location: 'PABELLON',
                id: '5637145959',
            },
            {
                location: 'POMAIRE',
                id: '5637145960',
            },
            {
                location: 'SAN MANUEL',
                id: '5637145961',
            },
        ],
        regionCode: '13',
        name: 'MELIPILLA',
    },
    {
        id: '5637144879',
        localities: [
            {
                location: 'CHOLCHOL',
                id: '5637145522',
            },
        ],
        regionCode: '09',
        name: 'CHOLCHOL',
    },
    {
        id: '5637144771',
        localities: [
            {
                location: 'CHOROICO',
                id: '5637145421',
            },
            {
                location: 'COIHUE',
                id: '5637145422',
            },
            {
                location: 'DIUQUIN',
                id: '5637145423',
            },
            {
                location: 'NACIMIENTO',
                id: '5637145424',
            },
            {
                location: 'PROGRESO',
                id: '5637145425',
            },
            {
                location: 'SANTA FE',
                id: '5637145426',
            },
        ],
        regionCode: '08',
        name: 'NACIMIENTO',
    },
    {
        id: '5637144608',
        localities: [
            {
                location: 'CHOROS BAJOS',
                id: '5637144871',
            },
            {
                location: 'CHUNGUNGO',
                id: '5637144872',
            },
            {
                location: 'EL OLIVO',
                id: '5637144873',
            },
            {
                location: 'EL TOFO',
                id: '5637144874',
            },
            {
                location: 'INCAGUASI',
                id: '5637144875',
            },
            {
                location: 'LA HIGUERA',
                id: '5637144876',
            },
            {
                location: 'LAS BREAS',
                id: '5637144877',
            },
            {
                location: 'LOS HORNOS',
                id: '5637144878',
            },
            {
                location: 'PUNTA CHOROS',
                id: '5637144879',
            },
            {
                location: 'TRAPICHE',
                id: '5637144880',
            },
            {
                location: 'TRES CRUCES',
                id: '5637144881',
            },
        ],
        regionCode: '04',
        name: 'LA HIGUERA',
    },
    {
        id: '5637144913',
        localities: [
            {
                location: 'CIRUELOS',
                id: '5637146064',
            },
            {
                location: 'FUERTE SAN LUIS',
                id: '5637146065',
            },
            {
                location: 'MEHUIN',
                id: '5637146066',
            },
            {
                location: 'PICHOY',
                id: '5637146067',
            },
            {
                location: 'PURINGUE',
                id: '5637146068',
            },
            {
                location: 'QUEULE',
                id: '5637146069',
            },
            {
                location: 'S.J. DE LA MARIQUINA',
                id: '5637146070',
            },
        ],
        regionCode: '14',
        name: 'MARIQUINA',
    },
    {
        id: '5637144854',
        localities: [
            {
                location: 'CISNES',
                id: '5637145808',
            },
            {
                location: 'LA TAPERA',
                id: '5637145809',
            },
            {
                location: 'PUERTO CISNES',
                id: '5637145810',
            },
            {
                location: 'PUYUHUAPI',
                id: '5637145811',
            },
            {
                location: 'RIO CISNES',
                id: '5637145812',
            },
            {
                location: 'TERMAS DE PUYUHUAPI',
                id: '5637145813',
            },
            {
                location: 'VILLA AMENGUAL',
                id: '5637145814',
            },
        ],
        regionCode: '11',
        name: 'CISNES',
    },
    {
        id: '5637144664',
        localities: [
            {
                location: 'COCALAN',
                id: '5637145147',
            },
            {
                location: 'EL CARMEN',
                id: '5637145148',
            },
            {
                location: 'EL MANZANO',
                id: '5637145149',
            },
            {
                location: 'LA CEBADA',
                id: '5637145150',
            },
            {
                location: 'LAS CABRAS',
                id: '5637145151',
            },
            {
                location: 'PUNTA VERDE',
                id: '5637145152',
            },
        ],
        regionCode: '06',
        name: 'LAS CABRAS',
    },
    {
        id: '5637144852',
        localities: [
            {
                location: 'COCHRANE',
                id: '5637145815',
            },
            {
                location: 'LAGO COCHRANE',
                id: '5637145816',
            },
            {
                location: 'PUERTO HERRADURA',
                id: '5637145817',
            },
            {
                location: 'VILLA CHACABUCO',
                id: '5637145818',
            },
        ],
        regionCode: '11',
        name: 'COCHRANE',
    },
    {
        id: '5637144659',
        localities: [
            {
                location: 'CODEGUA',
                id: '5637145136',
            },
            {
                location: 'LA LEONERA',
                id: '5637145137',
            },
            {
                location: 'LA PUNTA',
                id: '5637145138',
            },
        ],
        regionCode: '06',
        name: 'CODEGUA',
    },
    {
        id: '5637144792',
        localities: [
            {
                location: 'COELEMU',
                id: '5637145365',
            },
            {
                location: 'CONAIR',
                id: '5637145366',
            },
            {
                location: 'NIPAS',
                id: '5637145367',
            },
            {
                location: 'NUEVA ALDEA',
                id: '5637145368',
            },
            {
                location: 'RAQUIL',
                id: '5637145369',
            },
            {
                location: 'SAN IGNACIO',
                id: '5637145370',
            },
        ],
        regionCode: '08',
        name: 'COELEMU',
    },
    {
        id: '5637144793',
        localities: [
            {
                location: 'COIHUECO',
                id: '5637145371',
            },
            {
                location: 'FUNDO LOS ROBLES',
                id: '5637145372',
            },
            {
                location: 'LA CAPILLA',
                id: '5637145373',
            },
            {
                location: 'MINAS DEL PRADO',
                id: '5637145374',
            },
            {
                location: 'TANILVORO',
                id: '5637145375',
            },
        ],
        regionCode: '08',
        name: 'COIHUECO',
    },
    {
        id: '5637144660',
        localities: [
            {
                location: 'COINCO',
                id: '5637145139',
            },
        ],
        regionCode: '06',
        name: 'COINCO',
    },
    {
        id: '5637144697',
        localities: [
            {
                location: 'COIPUE',
                id: '5637145289',
            },
            {
                location: 'GUALLECO',
                id: '5637145290',
            },
            {
                location: 'PENCAHUE',
                id: '5637145291',
            },
            {
                location: 'PICHAMAN',
                id: '5637145292',
            },
        ],
        regionCode: '07',
        name: 'PENCAHUE',
    },
    {
        id: '5637144903',
        localities: [
            {
                location: 'COLEGUAL',
                id: '5637145690',
            },
            {
                location: 'LLANQUIHUE',
                id: '5637145691',
            },
            {
                location: 'LONCOTORO',
                id: '5637145692',
            },
            {
                location: 'LOS PELLINES',
                id: '5637145693',
            },
        ],
        regionCode: '10',
        name: 'LLANQUIHUE',
    },
    {
        id: '5637144586',
        localities: [
            {
                location: 'COLLAHUASI',
                id: '5637144616',
            },
            {
                location: 'COLONIA PINTADOS',
                id: '5637144617',
            },
            {
                location: 'GUATACONDO',
                id: '5637144618',
            },
            {
                location: 'LA HUAICA',
                id: '5637144619',
            },
            {
                location: 'MATILLA',
                id: '5637144620',
            },
            {
                location: 'MINERA QUEBRADA BLANCA',
                id: '5637144621',
            },
            {
                location: 'OFICINA VICTORIA',
                id: '5637144622',
            },
            {
                location: 'PICA',
                id: '5637144623',
            },
        ],
        regionCode: '01',
        name: 'PICA',
    },
    {
        id: '5637144823',
        localities: [
            {
                location: 'COLLIGUAY',
                id: '5637145922',
            },
            {
                location: 'CONCHALI',
                id: '5637145921',
            },
            {
                location: 'CURACAVI',
                id: '5637145923',
            },
            {
                location: 'EL TREBOL',
                id: '5637145924',
            },
            {
                location: 'LOS ARRAYANES',
                id: '5637145925',
            },
        ],
        regionCode: '13',
        name: 'CONCHALÍ',
    },
    {
        id: '5637144820',
        localities: [
            {
                location: 'COLMUYAO',
                id: '5637145491',
            },
            {
                location: 'MELA',
                id: '5637145492',
            },
            {
                location: 'TREHUACO',
                id: '5637145493',
            },
        ],
        regionCode: '08',
        name: 'TREGUACO',
    },
    {
        id: '5637144768',
        localities: [
            {
                location: 'COLONIA',
                id: '5637145395',
            },
            {
                location: 'LAJA',
                id: '5637145396',
            },
        ],
        regionCode: '08',
        name: 'LAJA',
    },
    {
        id: '5637144661',
        localities: [
            {
                location: 'COLTAUCO',
                id: '5637145140',
            },
            {
                location: 'ZUNIGA',
                id: '5637145141',
            },
        ],
        regionCode: '06',
        name: 'COLTAUCO',
    },
    {
        id: '5637144874',
        localities: [
            {
                location: 'COMUY',
                id: '5637145614',
            },
            {
                location: 'HUALPIN',
                id: '5637145615',
            },
            {
                location: 'QUILQUE',
                id: '5637145616',
            },
            {
                location: 'TOLTEN',
                id: '5637145617',
            },
        ],
        regionCode: '09',
        name: 'TOLTÉN',
    },
    {
        id: '5637144728',
        localities: [
            {
                location: 'CONCEPCION',
                id: '5637145376',
            },
            {
                location: 'RANGUELMO',
                id: '5637145377',
            },
        ],
        regionCode: '08',
        name: 'CONCEPCIÓN',
    },
    {
        id: '5637144622',
        localities: [
            {
                location: 'CONCON',
                id: '5637145035',
            },
        ],
        regionCode: '05',
        name: 'CONCÓN',
    },
    {
        id: '5637144806',
        localities: [
            {
                location: 'CONFLUENCIA',
                id: '5637145443',
            },
            {
                location: 'PORTEZUELO',
                id: '5637145444',
            },
        ],
        regionCode: '08',
        name: 'PORTEZUELO',
    },
    {
        id: '5637144692',
        localities: [
            {
                location: 'CONSTITUCION',
                id: '5637145244',
            },
            {
                location: 'JUNQUILLAR',
                id: '5637145245',
            },
            {
                location: 'PUTU',
                id: '5637145246',
            },
            {
                location: 'QUIVOLGO',
                id: '5637145247',
            },
        ],
        regionCode: '07',
        name: 'CONSTITUCIÓN',
    },
    {
        id: '5637144606',
        localities: [
            {
                location: 'COQUIMBO',
                id: '5637144844',
            },
            {
                location: 'EL PENON',
                id: '5637144845',
            },
            {
                location: 'GUACHALALUME',
                id: '5637144846',
            },
            {
                location: 'GUANAQUEROS',
                id: '5637144847',
            },
            {
                location: 'LA HERRADURA',
                id: '5637144848',
            },
            {
                location: 'LAS TACAS',
                id: '5637144849',
            },
            {
                location: 'PAN DE AZUCAR',
                id: '5637144850',
            },
            {
                location: 'PLACILLA',
                id: '5637144851',
            },
            {
                location: 'PUERTO VELERO',
                id: '5637144852',
            },
            {
                location: 'RETIRO',
                id: '5637144853',
            },
            {
                location: 'TIERRAS BLANCAS',
                id: '5637144854',
            },
            {
                location: 'TONGOY',
                id: '5637144855',
            },
        ],
        regionCode: '04',
        name: 'COQUIMBO',
    },
    {
        id: '5637144679',
        localities: [
            {
                location: 'CORNECHE',
                id: '5637145174',
            },
            {
                location: 'MATANZAS',
                id: '5637145175',
            },
            {
                location: 'NAVIDAD',
                id: '5637145176',
            },
            {
                location: 'PUERTECILLO',
                id: '5637145177',
            },
            {
                location: 'PUNTA BARRANCA',
                id: '5637145178',
            },
            {
                location: 'PUNTA PERRO',
                id: '5637145179',
            },
            {
                location: 'SAN ENRIQUE',
                id: '5637145180',
            },
            {
                location: 'SAN VICENTE DE PUCALAN',
                id: '5637145181',
            },
        ],
        regionCode: '06',
        name: 'NAVIDAD',
    },
    {
        id: '5637144730',
        localities: [
            {
                location: 'CORONEL',
                id: '5637145380',
            },
        ],
        regionCode: '08',
        name: 'CORONEL',
    },
    {
        id: '5637144909',
        localities: [
            {
                location: 'CORRAL',
                id: '5637146017',
            },
            {
                location: 'PUNTA CHAIHUIN',
                id: '5637146018',
            },
        ],
        regionCode: '14',
        name: 'CORRAL',
    },
    {
        id: '5637144645',
        localities: [
            {
                location: 'COSTA AZUL',
                id: '5637145036',
            },
            {
                location: 'EL QUISCO',
                id: '5637145037',
            },
            {
                location: 'ISLA NEGRA',
                id: '5637145038',
            },
            {
                location: 'PUNTA DE TRALCA',
                id: '5637145039',
            },
        ],
        regionCode: '05',
        name: 'EL QUISCO',
    },
    {
        id: '5637144725',
        localities: [
            {
                location: 'CRUCE LAS ARANAS',
                id: '5637146004',
            },
            {
                location: 'LOYCA',
                id: '5637146005',
            },
            {
                location: 'PUEBLO HUNDIDO',
                id: '5637146006',
            },
            {
                location: 'PUNTA TORO',
                id: '5637146007',
            },
            {
                location: 'QUIMCAHUE',
                id: '5637146008',
            },
            {
                location: 'SAN PEDRO',
                id: '5637146009',
            },
        ],
        regionCode: '13',
        name: 'SAN PEDRO',
    },
    {
        id: '5637144850',
        localities: [
            {
                location: 'CRUCES',
                id: '5637145563',
            },
            {
                location: 'LONCOCHE',
                id: '5637145564',
            },
        ],
        regionCode: '09',
        name: 'LONCOCHE',
    },
    {
        id: '5637144712',
        localities: [
            {
                location: 'CULENAR',
                id: '5637145321',
            },
            {
                location: 'LA MONTANA',
                id: '5637145322',
            },
            {
                location: 'REBECA',
                id: '5637145323',
            },
            {
                location: 'TENO',
                id: '5637145324',
            },
        ],
        regionCode: '07',
        name: 'TENO',
    },
    {
        id: '5637144698',
        localities: [
            {
                location: 'CUMPEO',
                id: '5637145295',
            },
            {
                location: 'ITAHUE',
                id: '5637145296',
            },
            {
                location: 'RIO CLARO',
                id: '5637145297',
            },
        ],
        regionCode: '07',
        name: 'RÍO CLARO',
    },
    {
        id: '5637144690',
        localities: [
            {
                location: 'CUNACO',
                id: '5637145228',
            },
            {
                location: 'LA LAJUELA',
                id: '5637145229',
            },
            {
                location: 'NERQUIHUE',
                id: '5637145230',
            },
            {
                location: 'PANIAHUE',
                id: '5637145231',
            },
            {
                location: 'RINCONADA DE YAQUIL',
                id: '5637145232',
            },
            {
                location: 'SANTA CRUZ',
                id: '5637145233',
            },
        ],
        regionCode: '06',
        name: 'SANTA CRUZ',
    },
    {
        id: '5637144841',
        localities: [
            {
                location: 'CUNCO',
                id: '5637145530',
            },
            {
                location: 'HELO SUR',
                id: '5637145531',
            },
            {
                location: 'LAS HORTENCIAS',
                id: '5637145532',
            },
            {
                location: 'LOS LAURELES',
                id: '5637145533',
            },
            {
                location: 'PLAYA NEGRA',
                id: '5637145534',
            },
            {
                location: 'PUERTO PUMA',
                id: '5637145535',
            },
            {
                location: 'TERMAS DE SAN SEBASTIAN',
                id: '5637145536',
            },
        ],
        regionCode: '09',
        name: 'CUNCO',
    },
    {
        id: '5637144885',
        localities: [
            {
                location: 'CURACAUTIN',
                id: '5637145537',
            },
            {
                location: 'LA SOMBRA',
                id: '5637145538',
            },
            {
                location: 'MALALCAHUELO',
                id: '5637145539',
            },
            {
                location: 'MANZANAR',
                id: '5637145540',
            },
            {
                location: 'TERMAS DE RIO BLANCO',
                id: '5637145541',
            },
        ],
        regionCode: '09',
        name: 'CURACAUTÍN',
    },
    {
        id: '5637144748',
        localities: [
            {
                location: 'CURACO',
                id: '5637145397',
            },
            {
                location: 'LEBU',
                id: '5637145398',
            },
            {
                location: 'MILLONHUE',
                id: '5637145399',
            },
            {
                location: 'PEHUEN',
                id: '5637145400',
            },
            {
                location: 'QUINAHUE',
                id: '5637145401',
            },
            {
                location: 'RANQUILCO',
                id: '5637145402',
            },
            {
                location: 'RUCARAQUIL',
                id: '5637145403',
            },
            {
                location: 'SARA DE LEBU',
                id: '5637145404',
            },
            {
                location: 'YENECO',
                id: '5637145405',
            },
        ],
        regionCode: '08',
        name: 'LEBU',
    },
    {
        id: '5637144896',
        localities: [
            {
                location: 'CURACO DE VELEZ',
                id: '5637145657',
            },
            {
                location: 'QUINCHAO',
                id: '5637145658',
            },
        ],
        regionCode: '10',
        name: 'CURACO DE VÉLEZ',
    },
    {
        id: '5637144756',
        localities: [
            {
                location: 'CURANILAHUE',
                id: '5637145381',
            },
            {
                location: 'SAN JOSE DE COLICO',
                id: '5637145382',
            },
        ],
        regionCode: '08',
        name: 'CURANILAHUE',
    },
    {
        id: '5637144842',
        localities: [
            {
                location: 'CURARREHUE',
                id: '5637145542',
            },
            {
                location: 'PUESCO',
                id: '5637145543',
            },
            {
                location: 'REIGOLIL',
                id: '5637145544',
            },
            {
                location: 'TERMAS DE PANGUI',
                id: '5637145545',
            },
            {
                location: 'TERMAS DE SAN LUIS',
                id: '5637145546',
            },
        ],
        regionCode: '09',
        name: 'CURARREHUE',
    },
    {
        id: '5637144693',
        localities: [
            {
                location: 'CUREPTO',
                id: '5637145248',
            },
            {
                location: 'LA LORA',
                id: '5637145249',
            },
        ],
        regionCode: '07',
        name: 'CUREPTO',
    },
    {
        id: '5637144704',
        localities: [
            {
                location: 'CURICO',
                id: '5637145250',
            },
            {
                location: 'LOS NICHES',
                id: '5637145251',
            },
            {
                location: 'MONTE OSCURO',
                id: '5637145252',
            },
            {
                location: 'POTRERO GRANDE',
                id: '5637145253',
            },
            {
                location: 'QUEBRADA HONDA',
                id: '5637145254',
            },
            {
                location: 'UPEO',
                id: '5637145255',
            },
        ],
        regionCode: '07',
        name: 'CURICÓ',
    },
    {
        id: '5637144908',
        localities: [
            {
                location: 'CURINANCO',
                id: '5637146098',
            },
            {
                location: 'HUEYELHUE',
                id: '5637146099',
            },
            {
                location: 'LOS MOLINOS',
                id: '5637146100',
            },
            {
                location: 'NIEBLA',
                id: '5637146101',
            },
            {
                location: 'PUNUCAPA',
                id: '5637146102',
            },
            {
                location: 'TRALCAO',
                id: '5637146103',
            },
            {
                location: 'VALDIVIA',
                id: '5637146104',
            },
        ],
        regionCode: '14',
        name: 'VALDIVIA',
    },
    {
        id: '5637144745',
        localities: [
            {
                location: 'DICHATO',
                id: '5637145486',
            },
            {
                location: 'MENQUE',
                id: '5637145487',
            },
            {
                location: 'RAFAEL',
                id: '5637145488',
            },
            {
                location: 'TOME',
                id: '5637145489',
            },
            {
                location: 'VEGAS DE ITATA',
                id: '5637145490',
            },
        ],
        regionCode: '08',
        name: 'TOMÉ',
    },
    {
        id: '5637144662',
        localities: [
            {
                location: 'DONIHUE',
                id: '5637145142',
            },
            {
                location: 'PUREN VI',
                id: '5637145143',
            },
        ],
        regionCode: '06',
        name: 'DOÑIHUE',
    },
    {
        id: '5637144695',
        localities: [
            {
                location: 'DUAO',
                id: '5637145273',
            },
            {
                location: 'MAULE',
                id: '5637145274',
            },
        ],
        regionCode: '07',
        name: 'MAULE',
    },
    {
        id: '5637144865',
        localities: [
            {
                location: 'EL ALAMBRADO',
                id: '5637145584',
            },
            {
                location: 'PADRE LAS CASAS',
                id: '5637145585',
            },
        ],
        regionCode: '09',
        name: 'PADRE LAS CASAS',
    },
    {
        id: '5637144763',
        localities: [
            {
                location: 'EL ALAMO',
                id: '5637145410',
            },
            {
                location: 'LOS ANGELES',
                id: '5637145411',
            },
            {
                location: 'SAN CARLOS PUREN',
                id: '5637145412',
            },
            {
                location: 'SANTA CLARA',
                id: '5637145413',
            },
        ],
        regionCode: '08',
        name: 'LOS ÁNGELES',
    },
    {
        id: '5637144769',
        localities: [
            {
                location: 'EL AVELLANO',
                id: '5637145415',
            },
            {
                location: 'EL MORRO',
                id: '5637145416',
            },
            {
                location: 'LOS MAICAS',
                id: '5637145417',
            },
            {
                location: 'MAITENES',
                id: '5637145418',
            },
            {
                location: 'MELICA',
                id: '5637145419',
            },
            {
                location: 'MULCHEN',
                id: '5637145420',
            },
        ],
        regionCode: '08',
        name: 'MULCHÉN',
    },
    {
        id: '5637144654',
        localities: [
            {
                location: 'EL BELLOTO',
                id: '5637145096',
            },
            {
                location: 'LA RETUCA',
                id: '5637145097',
            },
            {
                location: 'QUILPUE',
                id: '5637145098',
            },
        ],
        regionCode: '05',
        name: 'QUILPUÉ',
    },
    {
        id: '5637144822',
        localities: [
            {
                location: 'EL BOSQUE',
                id: '5637145926',
            },
        ],
        regionCode: '13',
        name: 'EL BOSQUE',
    },
    {
        id: '5637144757',
        localities: [
            {
                location: 'EL CANELO',
                id: '5637145982',
            },
            {
                location: 'LA OBRA',
                id: '5637145983',
            },
            {
                location: 'LAS VERTIENTES',
                id: '5637145984',
            },
            {
                location: 'PUENTE ALTO',
                id: '5637145985',
            },
        ],
        regionCode: '13',
        name: 'PUENTE ALTO',
    },
    {
        id: '5637144641',
        localities: [
            {
                location: 'EL COBRE',
                id: '5637145065',
            },
            {
                location: 'EL MELON',
                id: '5637145066',
            },
            {
                location: 'NOGALES',
                id: '5637145067',
            },
        ],
        regionCode: '05',
        name: 'NOGALES',
    },
    {
        id: '5637144855',
        localities: [
            {
                location: 'EL GATO',
                id: '5637145792',
            },
            {
                location: 'MANIHUALES',
                id: '5637145793',
            },
            {
                location: 'MINA EL TOQUI',
                id: '5637145794',
            },
            {
                location: 'PUERTO AGUIRRE',
                id: '5637145795',
            },
            {
                location: 'PUERTO AYSEN',
                id: '5637145796',
            },
            {
                location: 'PUERTO CHACABUCO',
                id: '5637145797',
            },
            {
                location: 'PUERTO GAVIOTA',
                id: '5637145798',
            },
            {
                location: 'SANTA MARIA DEL MAR',
                id: '5637145799',
            },
            {
                location: 'VILLA MANIHUALES',
                id: '5637145800',
            },
        ],
        regionCode: '11',
        name: 'AYSÉN',
    },
    {
        id: '5637144778',
        localities: [
            {
                location: 'EL GUACHI',
                id: '5637145473',
            },
            {
                location: 'LOLCO',
                id: '5637145474',
            },
            {
                location: 'LOS BRUJOS',
                id: '5637145475',
            },
            {
                location: 'LOS PLACERES',
                id: '5637145476',
            },
            {
                location: 'SANTA BARBARA',
                id: '5637145477',
            },
            {
                location: 'VILLUCURA',
                id: '5637145478',
            },
        ],
        regionCode: '08',
        name: 'SANTA BÁRBARA',
    },
    {
        id: '5637144684',
        localities: [
            {
                location: 'EL GUAICO',
                id: '5637145155',
            },
            {
                location: 'LOLOL',
                id: '5637145156',
            },
            {
                location: 'RANGUIL',
                id: '5637145157',
            },
        ],
        regionCode: '06',
        name: 'LOLOL',
    },
    {
        id: '5637144917',
        localities: [
            {
                location: 'EL MIRADOR',
                id: '5637146030',
            },
            {
                location: 'HUEICOLLA',
                id: '5637146031',
            },
            {
                location: 'LA BARRA',
                id: '5637146032',
            },
            {
                location: 'LA UNION',
                id: '5637146033',
            },
            {
                location: 'LAS VENTANAS',
                id: '5637146034',
            },
            {
                location: 'RAPACO',
                id: '5637146035',
            },
            {
                location: 'SANTA ELISA',
                id: '5637146036',
            },
            {
                location: 'TRINIDAD',
                id: '5637146037',
            },
            {
                location: 'TRUMAO',
                id: '5637146038',
            },
        ],
        regionCode: '14',
        name: 'LA UNIÓN',
    },
    {
        id: '5637144723',
        localities: [
            {
                location: 'EL MONTE',
                id: '5637145927',
            },
            {
                location: 'EL PAICO',
                id: '5637145928',
            },
        ],
        regionCode: '13',
        name: 'EL MONTE',
    },
    {
        id: '5637144709',
        localities: [
            {
                location: 'EL PLANCHON',
                id: '5637145298',
            },
            {
                location: 'LOS QUENES',
                id: '5637145299',
            },
            {
                location: 'POTRERO GRANDE CHICO',
                id: '5637145300',
            },
            {
                location: 'ROMERAL',
                id: '5637145301',
            },
        ],
        regionCode: '07',
        name: 'ROMERAL',
    },
    {
        id: '5637144646',
        localities: [
            {
                location: 'EL TABO',
                id: '5637145040',
            },
        ],
        regionCode: '05',
        name: 'EL TABO',
    },
    {
        id: '5637144652',
        localities: [
            {
                location: 'EL TARTARO',
                id: '5637145088',
            },
            {
                location: 'GRANALLA',
                id: '5637145089',
            },
            {
                location: 'PUTAENDO',
                id: '5637145090',
            },
            {
                location: 'RESGUARDO LOS PATOS',
                id: '5637145091',
            },
            {
                location: 'RINCONADA DE GUZMAN',
                id: '5637145092',
            },
            {
                location: 'RINCONADA DE SILVA',
                id: '5637145093',
            },
            {
                location: 'TRES FUERTES',
                id: '5637145094',
            },
        ],
        regionCode: '05',
        name: 'PUTAENDO',
    },
    {
        id: '5637144670',
        localities: [
            {
                location: 'EL TOCO',
                id: '5637145194',
            },
            {
                location: 'LARMAHUE',
                id: '5637145195',
            },
            {
                location: 'PICHIDEGUA',
                id: '5637145196',
            },
        ],
        regionCode: '06',
        name: 'PICHIDEGUA',
    },
    {
        id: '5637144694',
        localities: [
            {
                location: 'EMPEDRADO',
                id: '5637145256',
            },
            {
                location: 'NIRIVILO',
                id: '5637145257',
            },
        ],
        regionCode: '07',
        name: 'EMPEDRADO',
    },
    {
        id: '5637144901',
        localities: [
            {
                location: 'ENSENADA',
                id: '5637145728',
            },
            {
                location: 'LA POSA',
                id: '5637145729',
            },
            {
                location: 'LOS RISCOS',
                id: '5637145730',
            },
            {
                location: 'NUEVA BRAUNAU',
                id: '5637145731',
            },
            {
                location: 'PETROHUE',
                id: '5637145732',
            },
            {
                location: 'PUERTO VARAS',
                id: '5637145733',
            },
            {
                location: 'RIO SUR',
                id: '5637145734',
            },
        ],
        regionCode: '10',
        name: 'PUERTO VARAS',
    },
    {
        id: '5637144835',
        localities: [
            {
                location: 'ENTRE VIENTOS',
                id: '5637145886',
            },
            {
                location: 'MORRO CHICO',
                id: '5637145887',
            },
            {
                location: 'PUERTO ALTAMIRANO',
                id: '5637145888',
            },
            {
                location: 'RIO VERDE',
                id: '5637145889',
            },
            {
                location: 'VILLA TEHUELCHES',
                id: '5637145890',
            },
        ],
        regionCode: '12',
        name: 'RÍO VERDE',
    },
    {
        id: '5637144886',
        localities: [
            {
                location: 'ERCILLA',
                id: '5637145547',
            },
            {
                location: 'PAILAHUENQUE',
                id: '5637145548',
            },
        ],
        regionCode: '09',
        name: 'ERCILLA',
    },
    {
        id: '5637144819',
        localities: [
            {
                location: 'ESTACION CENTRAL',
                id: '5637145929',
            },
        ],
        regionCode: '13',
        name: 'ESTACIÓN CENTRAL',
    },
    {
        id: '5637144595',
        localities: [
            {
                location: 'ESTACION MIRAJE',
                id: '5637144695',
            },
            {
                location: 'MARIA ELENA',
                id: '5637144696',
            },
            {
                location: 'MARIA ELENA SOQUIMICH',
                id: '5637144697',
            },
            {
                location: 'OFICINA PEDRO DE VALDIVIA',
                id: '5637144698',
            },
            {
                location: 'OFICINA VERGARA',
                id: '5637144699',
            },
            {
                location: 'QUILLAGUA',
                id: '5637144700',
            },
        ],
        regionCode: '02',
        name: 'MARÍA ELENA',
    },
    {
        id: '5637144834',
        localities: [
            {
                location: 'ESTANCIA SN GREGORIO',
                id: '5637145891',
            },
            {
                location: 'GAIKE',
                id: '5637145892',
            },
            {
                location: 'GALLEGOS CHICOS',
                id: '5637145893',
            },
            {
                location: 'MONTE AYMOND',
                id: '5637145894',
            },
            {
                location: 'PUNTA DELGADA',
                id: '5637145895',
            },
            {
                location: 'SAN GREGORIO',
                id: '5637145896',
            },
            {
                location: 'TERMINAL SAN GREGORIO',
                id: '5637145897',
            },
        ],
        regionCode: '12',
        name: 'SAN GREGORIO',
    },
    {
        id: '5637144827',
        localities: [
            {
                location: 'ESTANCIA VICTORINA',
                id: '5637145903',
            },
            {
                location: 'PEHOE',
                id: '5637145904',
            },
            {
                location: 'TORRES DEL PAINE',
                id: '5637145905',
            },
        ],
        regionCode: '12',
        name: 'TORRES DEL PAINE',
    },
    {
        id: '5637144798',
        localities: [
            {
                location: 'FARELLONES',
                id: '5637145941',
            },
            {
                location: 'LO BARNECHEA',
                id: '5637145942',
            },
        ],
        regionCode: '13',
        name: 'LO BARNECHEA',
    },
    {
        id: '5637144844',
        localities: [
            {
                location: 'FREIRE',
                id: '5637145549',
            },
            {
                location: 'MISION BOROA',
                id: '5637145550',
            },
            {
                location: 'QUEPE',
                id: '5637145551',
            },
        ],
        regionCode: '09',
        name: 'FREIRE',
    },
    {
        id: '5637144906',
        localities: [
            {
                location: 'FRESIA',
                id: '5637145664',
            },
            {
                location: 'MAICHIHUE',
                id: '5637145665',
            },
            {
                location: 'PARGA',
                id: '5637145666',
            },
        ],
        regionCode: '10',
        name: 'FRESIA',
    },
    {
        id: '5637144905',
        localities: [
            {
                location: 'FRUTILLAR',
                id: '5637145667',
            },
            {
                location: 'PARAGUAY',
                id: '5637145668',
            },
            {
                location: 'TEGUALDA',
                id: '5637145669',
            },
        ],
        regionCode: '10',
        name: 'FRUTILLAR',
    },
    {
        id: '5637144582',
        localities: [
            {
                location: 'FUERTE BAQUEDANO',
                id: '5637144624',
            },
            {
                location: 'LA TIRANA',
                id: '5637144625',
            },
            {
                location: 'MACAYA',
                id: '5637144626',
            },
            {
                location: 'MAMINA',
                id: '5637144627',
            },
            {
                location: 'POZO ALMONTE',
                id: '5637144628',
            },
            {
                location: 'TAMBILLO',
                id: '5637144629',
            },
        ],
        regionCode: '01',
        name: 'POZO ALMONTE',
    },
    {
        id: '5637144860',
        localities: [
            {
                location: 'FUTALEUFU',
                id: '5637145670',
            },
            {
                location: 'LAGO YELCHO',
                id: '5637145671',
            },
            {
                location: 'PUERTO PIEDRA',
                id: '5637145672',
            },
            {
                location: 'PUERTO RAMIREZ',
                id: '5637145673',
            },
            {
                location: 'VILLA SANTA LUCIA',
                id: '5637145674',
            },
        ],
        regionCode: '10',
        name: 'FUTALEUFÚ',
    },
    {
        id: '5637144846',
        localities: [
            {
                location: 'GALVARINO',
                id: '5637145552',
            },
            {
                location: 'RUCATRARO',
                id: '5637145553',
            },
        ],
        regionCode: '09',
        name: 'GALVARINO',
    },
    {
        id: '5637144802',
        localities: [
            {
                location: 'GENERAL CRUZ',
                id: '5637145436',
            },
            {
                location: 'PEMUCO',
                id: '5637145437',
            },
            {
                location: 'SAN PEDRO DE ALCANTARA',
                id: '5637145438',
            },
        ],
        regionCode: '08',
        name: 'PEMUCO',
    },
    {
        id: '5637144847',
        localities: [
            {
                location: 'GORBEA',
                id: '5637145554',
            },
            {
                location: 'LASTARRIA',
                id: '5637145555',
            },
            {
                location: 'QUITRATUE',
                id: '5637145556',
            },
        ],
        regionCode: '09',
        name: 'GORBEA',
    },
    {
        id: '5637144663',
        localities: [
            {
                location: 'GRANEROS',
                id: '5637145144',
            },
        ],
        regionCode: '06',
        name: 'GRANEROS',
    },
    {
        id: '5637144656',
        localities: [
            {
                location: 'GRANIZO',
                id: '5637145068',
            },
            {
                location: 'OLMUE',
                id: '5637145069',
            },
        ],
        regionCode: '05',
        name: 'OLMUÉ',
    },
    {
        id: '5637144853',
        localities: [
            {
                location: 'GUAITECAS',
                id: '5637145826',
            },
            {
                location: 'ISLA ANGAMOS',
                id: '5637145827',
            },
            {
                location: 'ISLA BENJAMIN',
                id: '5637145828',
            },
            {
                location: 'ISLA CUPTANA',
                id: '5637145829',
            },
            {
                location: 'ISLA IPUN',
                id: '5637145830',
            },
            {
                location: 'ISLA IZAZO',
                id: '5637145831',
            },
            {
                location: 'ISLA LEVEL',
                id: '5637145832',
            },
            {
                location: 'ISLA MELCHOR',
                id: '5637145833',
            },
            {
                location: 'ISLA NALCAYEC',
                id: '5637145834',
            },
            {
                location: 'ISLA VICTORIA',
                id: '5637145835',
            },
            {
                location: 'MELINKA',
                id: '5637145836',
            },
        ],
        regionCode: '11',
        name: 'GUAITECAS',
    },
    {
        id: '5637144628',
        localities: [
            {
                location: 'GUARDIA VIEJA',
                id: '5637145058',
            },
            {
                location: 'JUNCAL',
                id: '5637145059',
            },
            {
                location: 'LOS ANDES',
                id: '5637145060',
            },
            {
                location: 'PORTILLO',
                id: '5637145061',
            },
            {
                location: 'RIO BLANCO',
                id: '5637145062',
            },
            {
                location: 'SALADILLO',
                id: '5637145063',
            },
            {
                location: 'SALTO DEL SOLDADO',
                id: '5637145064',
            },
        ],
        regionCode: '05',
        name: 'LOS ANDES',
    },
    {
        id: '5637144672',
        localities: [
            {
                location: 'HACIENDA LOS LINGUES',
                id: '5637145207',
            },
            {
                location: 'LAS NIEVES',
                id: '5637145208',
            },
            {
                location: 'LOS MAQUIS',
                id: '5637145209',
            },
            {
                location: 'PELEQUEN',
                id: '5637145210',
            },
            {
                location: 'POPETA',
                id: '5637145211',
            },
            {
                location: 'RENGO',
                id: '5637145212',
            },
        ],
        regionCode: '06',
        name: 'RENGO',
    },
    {
        id: '5637144639',
        localities: [
            {
                location: 'HIJUELAS',
                id: '5637145041',
            },
        ],
        regionCode: '05',
        name: 'HIJUELAS',
    },
    {
        id: '5637144588',
        localities: [
            {
                location: 'HORNITOS',
                id: '5637144701',
            },
            {
                location: 'MEJILLONES',
                id: '5637144702',
            },
        ],
        regionCode: '02',
        name: 'MEJILLONES',
    },
    {
        id: '5637144705',
        localities: [
            {
                location: 'HUALANE',
                id: '5637145258',
            },
        ],
        regionCode: '07',
        name: 'HUALAÑÉ',
    },
    {
        id: '5637144747',
        localities: [
            {
                location: 'HUALPEN',
                id: '5637145390',
            },
            {
                location: 'LA BOCA',
                id: '5637145391',
            },
        ],
        regionCode: '08',
        name: 'HUALPÉN',
    },
    {
        id: '5637144734',
        localities: [
            {
                location: 'HUALQUI',
                id: '5637145392',
            },
            {
                location: 'QUILACOYA',
                id: '5637145393',
            },
            {
                location: 'TALCAMAVIDA',
                id: '5637145394',
            },
        ],
        regionCode: '08',
        name: 'HUALQUI',
    },
    {
        id: '5637144817',
        localities: [
            {
                location: 'HUECHURABA',
                id: '5637145930',
            },
        ],
        regionCode: '13',
        name: 'HUECHURABA',
    },
    {
        id: '5637144780',
        localities: [
            {
                location: 'HUEPIL',
                id: '5637145494',
            },
            {
                location: 'POLCURA',
                id: '5637145495',
            },
            {
                location: 'TRUPAN',
                id: '5637145496',
            },
            {
                location: 'TUCAPEL',
                id: '5637145497',
            },
        ],
        regionCode: '08',
        name: 'TUCAPEL',
    },
    {
        id: '5637144884',
        localities: [
            {
                location: 'HUILDAD',
                id: '5637145759',
            },
            {
                location: 'QUELLON',
                id: '5637145760',
            },
            {
                location: 'QUELLON VIEJO',
                id: '5637145761',
            },
            {
                location: 'RANCHO QUELLON',
                id: '5637145762',
            },
            {
                location: 'TRINCAO',
                id: '5637145763',
            },
            {
                location: 'YALDAD',
                id: '5637145764',
            },
        ],
        regionCode: '10',
        name: 'QUELLÓN',
    },
    {
        id: '5637144877',
        localities: [
            {
                location: 'HUISCAPI',
                id: '5637145627',
            },
            {
                location: 'PEDREGOSO',
                id: '5637145628',
            },
            {
                location: 'VILLARRICA',
                id: '5637145629',
            },
        ],
        regionCode: '09',
        name: 'VILLARRICA',
    },
    {
        id: '5637144851',
        localities: [
            {
                location: 'ICALMA',
                id: '5637145577',
            },
            {
                location: 'LOMACURA',
                id: '5637145578',
            },
            {
                location: 'MELIPEUCO',
                id: '5637145579',
            },
            {
                location: 'TERMAS DE MOLULCO',
                id: '5637145580',
            },
        ],
        regionCode: '09',
        name: 'MELIPEUCO',
    },
    {
        id: '5637144920',
        localities: [
            {
                location: 'IGNAO',
                id: '5637146039',
            },
            {
                location: 'ILIHUE',
                id: '5637146040',
            },
            {
                location: 'LAGO RANCO',
                id: '5637146041',
            },
            {
                location: 'LLIHUE',
                id: '5637146042',
            },
            {
                location: 'RININAHUE',
                id: '5637146043',
            },
            {
                location: 'TRAPI',
                id: '5637146044',
            },
            {
                location: 'VIVANCO',
                id: '5637146045',
            },
        ],
        regionCode: '14',
        name: 'LAGO RANCO',
    },
    {
        id: '5637144713',
        localities: [
            {
                location: 'ILOCA',
                id: '5637145325',
            },
            {
                location: 'LA TRINCHERA',
                id: '5637145326',
            },
            {
                location: 'LIPIMAVIDA',
                id: '5637145327',
            },
            {
                location: 'PICHIBUDI',
                id: '5637145328',
            },
            {
                location: 'VICHUQUEN',
                id: '5637145329',
            },
        ],
        regionCode: '07',
        name: 'VICHUQUÉN',
    },
    {
        id: '5637144814',
        localities: [
            {
                location: 'INDEPENDENCIA',
                id: '5637145931',
            },
        ],
        regionCode: '13',
        name: 'INDEPENDENCIA',
    },
    {
        id: '5637144719',
        localities: [
            {
                location: 'ISLA DE MAIPO',
                id: '5637145932',
            },
        ],
        provinceCode: '136',
        regionCode: '13',
        name: 'ISLA DE MAIPO',
    },
    {
        id: '5637144627',
        localities: [
            {
                location: 'ISLA DE PASCUA',
                id: '5637145042',
            },
        ],
        provinceCode: '052',
        regionCode: '05',
        name: 'ISLA DE PASCUA',
    },
    {
        id: '5637144755',
        localities: [
            {
                location: 'ISLA DE PIRQUE',
                id: '5637145978',
            },
            {
                location: 'PIRQUE',
                id: '5637145979',
            },
        ],
        provinceCode: '132',
        regionCode: '13',
        name: 'PIRQUE',
    },
    {
        id: '5637144623',
        localities: [
            {
                location: 'ISLA JUAN FERNANDEZ',
                id: '5637145043',
            },
        ],
        provinceCode: '051',
        regionCode: '05',
        name: 'JUAN FERNÁNDEZ',
    },
    {
        id: '5637144743',
        localities: [
            {
                location: 'ISLA QUIRIQUINA',
                id: '5637145480',
            },
            {
                location: 'RANCHO TALCAHUANO',
                id: '5637145481',
            },
            {
                location: 'SAN VICENTE',
                id: '5637145482',
            },
            {
                location: 'TALCAHUANO',
                id: '5637145483',
            },
        ],
        provinceCode: '081',
        regionCode: '08',
        name: 'TALCAHUANO',
    },
    {
        id: '5637144653',
        localities: [
            {
                location: 'JAHUEL',
                id: '5637145109',
            },
            {
                location: 'SANTA MARIA',
                id: '5637145110',
            },
            {
                location: 'TERMAS DE JAHUEL',
                id: '5637145111',
            },
        ],
        provinceCode: '057',
        regionCode: '05',
        name: 'SANTA MARÍA',
    },
    {
        id: '5637144618',
        localities: [
            {
                location: 'LA AGUADA',
                id: '5637144967',
            },
            {
                location: 'LA PLACILLA',
                id: '5637144968',
            },
            {
                location: 'LITIPAMPA',
                id: '5637144969',
            },
            {
                location: 'LOS PERALES',
                id: '5637144970',
            },
            {
                location: 'PENA BLANCA',
                id: '5637144971',
            },
            {
                location: 'PUNITAQUI',
                id: '5637144972',
            },
        ],
        provinceCode: '043',
        regionCode: '04',
        name: 'PUNITAQUI',
    },
    {
        id: '5637144638',
        localities: [
            {
                location: 'LA CALERA',
                id: '5637145014',
            },
        ],
        provinceCode: '055',
        regionCode: '05',
        name: 'CALERA',
    },
    {
        id: '5637144812',
        localities: [
            {
                location: 'LA CISTERNA',
                id: '5637145933',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LA CISTERNA',
    },
    {
        id: '5637144640',
        localities: [
            {
                location: 'LA CRUZ',
                id: '5637145044',
            },
            {
                location: 'OCOA',
                id: '5637145045',
            },
        ],
        provinceCode: '055',
        regionCode: '05',
        name: 'LA CRUZ',
    },
    {
        id: '5637144676',
        localities: [
            {
                location: 'LA ESTRELLA',
                id: '5637145145',
            },
            {
                location: 'LAS DAMAS',
                id: '5637145146',
            },
        ],
        provinceCode: '062',
        regionCode: '06',
        name: 'LA ESTRELLA',
    },
    {
        id: '5637144810',
        localities: [
            {
                location: 'LA FLORIDA',
                id: '5637145934',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LA FLORIDA',
    },
    {
        id: '5637144808',
        localities: [
            {
                location: 'LA GRANJA',
                id: '5637145935',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LA GRANJA',
    },
    {
        id: '5637144856',
        localities: [
            {
                location: 'LA JUNTA',
                id: '5637145837',
            },
            {
                location: 'LAGO VERDE',
                id: '5637145838',
            },
        ],
        provinceCode: '111',
        regionCode: '11',
        name: 'LAGO VERDE',
    },
    {
        id: '5637144914',
        localities: [
            {
                location: 'LA PENA',
                id: '5637146071',
            },
            {
                location: 'LOS CONALES',
                id: '5637146072',
            },
            {
                location: 'LOS ULMOS',
                id: '5637146073',
            },
            {
                location: 'PAILLACO',
                id: '5637146074',
            },
            {
                location: 'PICHIRROPULLI',
                id: '5637146075',
            },
            {
                location: 'REUMEN',
                id: '5637146076',
            },
            {
                location: 'TRAITRACO',
                id: '5637146077',
            },
        ],
        provinceCode: '141',
        regionCode: '14',
        name: 'PAILLACO',
    },
    {
        id: '5637144805',
        localities: [
            {
                location: 'LA PINTANA',
                id: '5637145936',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LA PINTANA',
    },
    {
        id: '5637144815',
        localities: [
            {
                location: 'LA PUNTILLA',
                id: '5637145463',
            },
            {
                location: 'LOS PUQUIOS',
                id: '5637145464',
            },
            {
                location: 'SAN FABIAN DE ALICO',
                id: '5637145465',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'SAN FABIÁN',
    },
    {
        id: '5637144803',
        localities: [
            {
                location: 'LA REINA',
                id: '5637145937',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LA REINA',
    },
    {
        id: '5637144836',
        localities: [
            {
                location: 'LAGUNA BLANCA',
                id: '5637145859',
            },
        ],
        provinceCode: '121',
        regionCode: '12',
        name: 'LAGUNA BLANCA',
    },
    {
        id: '5637144910',
        localities: [
            {
                location: 'LANCO',
                id: '5637146046',
            },
            {
                location: 'MALALHUE',
                id: '5637146047',
            },
            {
                location: 'PURULON',
                id: '5637146048',
            },
            {
                location: 'SALTO DEL AGUA',
                id: '5637146049',
            },
        ],
        provinceCode: '141',
        regionCode: '14',
        name: 'LANCO',
    },
    {
        id: '5637144801',
        localities: [
            {
                location: 'LAS CONDES',
                id: '5637145940',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LAS CONDES',
    },
    {
        id: '5637144904',
        localities: [
            {
                location: 'LAS QUEMAS',
                id: '5637145694',
            },
            {
                location: 'LOLCURA',
                id: '5637145695',
            },
            {
                location: 'LOS MUERMOS',
                id: '5637145696',
            },
            {
                location: 'RIO FRIO',
                id: '5637145697',
            },
        ],
        provinceCode: '101',
        regionCode: '10',
        name: 'LOS MUERMOS',
    },
    {
        id: '5637144816',
        localities: [
            {
                location: 'LAS TRANCAS',
                id: '5637145466',
            },
            {
                location: 'RECINTO',
                id: '5637145467',
            },
            {
                location: 'TERMAS DE CHILLAN',
                id: '5637145468',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'SAN IGNACIO',
    },
    {
        id: '5637144840',
        localities: [
            {
                location: 'LEVICAN',
                id: '5637145841',
            },
            {
                location: 'PUERTO ING.IBANEZ',
                id: '5637145842',
            },
            {
                location: 'RIO IBANEZ',
                id: '5637145843',
            },
            {
                location: 'VILLA CERRO CASTILLO',
                id: '5637145844',
            },
        ],
        provinceCode: '114',
        regionCode: '11',
        name: 'RÍO IBÁÑEZ',
    },
    {
        id: '5637144647',
        localities: [
            {
                location: 'LEYDA',
                id: '5637145112',
            },
            {
                location: 'LO GALLARDO',
                id: '5637145113',
            },
            {
                location: 'SANTO DOMINGO',
                id: '5637145114',
            },
        ],
        provinceCode: '056',
        regionCode: '05',
        name: 'SANTO DOMINGO',
    },
    {
        id: '5637144706',
        localities: [
            {
                location: 'LICANTEN',
                id: '5637145259',
            },
        ],
        provinceCode: '073',
        regionCode: '07',
        name: 'LICANTÉN',
    },
    {
        id: '5637144687',
        localities: [
            {
                location: 'LIHUEIMO',
                id: '5637145190',
            },
            {
                location: 'POBLACION',
                id: '5637145191',
            },
        ],
        provinceCode: '063',
        regionCode: '06',
        name: 'PERALILLO',
    },
    {
        id: '5637144655',
        localities: [
            {
                location: 'LIMACHE',
                id: '5637145053',
            },
            {
                location: 'QUEBRADA ALVARADO',
                id: '5637145054',
            },
        ],
        provinceCode: '058',
        regionCode: '05',
        name: 'LIMACHE',
    },
    {
        id: '5637144738',
        localities: [
            {
                location: 'LIRQUEN',
                id: '5637145439',
            },
            {
                location: 'PENCO',
                id: '5637145440',
            },
            {
                location: 'ROA',
                id: '5637145441',
            },
        ],
        provinceCode: '081',
        regionCode: '08',
        name: 'PENCO',
    },
    {
        id: '5637144700',
        localities: [
            {
                location: 'LITU',
                id: '5637145314',
            },
            {
                location: 'SAN RAFAEL',
                id: '5637145315',
            },
        ],
        provinceCode: '071',
        regionCode: '07',
        name: 'SAN RAFAEL',
    },
    {
        id: '5637144677',
        localities: [
            {
                location: 'LITUECHE',
                id: '5637145153',
            },
            {
                location: 'TOPOCALMA',
                id: '5637145154',
            },
        ],
        provinceCode: '062',
        regionCode: '06',
        name: 'LITUECHE',
    },
    {
        id: '5637144650',
        localities: [
            {
                location: 'LLAILLAY',
                id: '5637145055',
            },
            {
                location: 'MONTENEGRO',
                id: '5637145056',
            },
            {
                location: 'RUNGUE',
                id: '5637145057',
            },
        ],
        provinceCode: '057',
        regionCode: '05',
        name: 'LLAILLAY',
    },
    {
        id: '5637144642',
        localities: [
            {
                location: 'LLO-LLEO',
                id: '5637145103',
            },
            {
                location: 'SAN ANTONIO',
                id: '5637145104',
            },
        ],
        provinceCode: '056',
        regionCode: '05',
        name: 'SAN ANTONIO',
    },
    {
        id: '5637144651',
        localities: [
            {
                location: 'LO  ERRAZURIZ',
                id: '5637145070',
            },
            {
                location: 'PANQUEHUE',
                id: '5637145071',
            },
        ],
        provinceCode: '057',
        regionCode: '05',
        name: 'PANQUEHUE',
    },
    {
        id: '5637144796',
        localities: [
            {
                location: 'LO ESPEJO',
                id: '5637145943',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LO ESPEJO',
    },
    {
        id: '5637144668',
        localities: [
            {
                location: 'LO MIRANDA',
                id: '5637145182',
            },
            {
                location: 'OLIVAR ALTO',
                id: '5637145183',
            },
            {
                location: 'OLIVAR BAJO',
                id: '5637145184',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'OLIVAR',
    },
    {
        id: '5637144794',
        localities: [
            {
                location: 'LO PRADO',
                id: '5637145944',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'LO PRADO',
    },
    {
        id: '5637144887',
        localities: [
            {
                location: 'LOLEN',
                id: '5637145565',
            },
            {
                location: 'LONQUIMAY',
                id: '5637145566',
            },
            {
                location: 'QUINQUEN',
                id: '5637145567',
            },
            {
                location: 'SIERRA NEVADA',
                id: '5637145568',
            },
            {
                location: 'TROYO',
                id: '5637145569',
            },
        ],
        provinceCode: '092',
        regionCode: '09',
        name: 'LONQUIMAY',
    },
    {
        id: '5637144716',
        localities: [
            {
                location: 'LONGAVI',
                id: '5637145268',
            },
            {
                location: 'LOS CRISTALES',
                id: '5637145269',
            },
            {
                location: 'MELAO',
                id: '5637145270',
            },
            {
                location: 'MESAMAVIDA',
                id: '5637145271',
            },
            {
                location: 'VILLA SECA',
                id: '5637145272',
            },
        ],
        provinceCode: '074',
        regionCode: '07',
        name: 'LONGAVÍ',
    },
    {
        id: '5637144717',
        localities: [
            {
                location: 'LONQUEN',
                id: '5637145963',
            },
            {
                location: 'PADRE HURTADO',
                id: '5637145964',
            },
        ],
        provinceCode: '136',
        regionCode: '13',
        name: 'PADRE HURTADO',
    },
    {
        id: '5637144797',
        localities: [
            {
                location: 'LOS CASTANOS',
                id: '5637145383',
            },
            {
                location: 'PUEBLO SECO',
                id: '5637145384',
            },
            {
                location: 'QUIRIQUINA',
                id: '5637145385',
            },
            {
                location: 'TREGUALEMU',
                id: '5637145386',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'EL CARMEN',
    },
    {
        id: '5637144736',
        localities: [
            {
                location: 'LOTA',
                id: '5637145414',
            },
        ],
        provinceCode: '081',
        regionCode: '08',
        name: 'LOTA',
    },
    {
        id: '5637144791',
        localities: [
            {
                location: 'MACUL',
                id: '5637145945',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'MACUL',
    },
    {
        id: '5637144788',
        localities: [
            {
                location: 'MAIPU',
                id: '5637145946',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'MAIPÚ',
    },
    {
        id: '5637144666',
        localities: [
            {
                location: 'MALLOA',
                id: '5637145165',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'MALLOA',
    },
    {
        id: '5637144710',
        localities: [
            {
                location: 'MALLOCO',
                id: '5637145975',
            },
            {
                location: 'PENAFLOR',
                id: '5637145976',
            },
        ],
        provinceCode: '136',
        regionCode: '13',
        name: 'PEÑAFLOR',
    },
    {
        id: '5637144674',
        localities: [
            {
                location: 'MILLAHUE',
                id: '5637145226',
            },
            {
                location: 'SAN VICENTE DE T.T',
                id: '5637145227',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'SAN VICENTE',
    },
    {
        id: '5637144894',
        localities: [
            {
                location: 'MININCO',
                id: '5637145598',
            },
            {
                location: 'RENAICO',
                id: '5637145599',
            },
            {
                location: 'TIJERAL',
                id: '5637145600',
            },
        ],
        provinceCode: '092',
        regionCode: '09',
        name: 'RENAICO',
    },
    {
        id: '5637144685',
        localities: [
            {
                location: 'NANCAGUA',
                id: '5637145173',
            },
        ],
        provinceCode: '063',
        regionCode: '06',
        name: 'NANCAGUA',
    },
    {
        id: '5637144772',
        localities: [
            {
                location: 'NEGRETE',
                id: '5637145427',
            },
            {
                location: 'RIHUE',
                id: '5637145428',
            },
        ],
        provinceCode: '083',
        regionCode: '08',
        name: 'NEGRETE',
    },
    {
        id: '5637144689',
        localities: [
            {
                location: 'NILAHUE',
                id: '5637145202',
            },
            {
                location: 'PUMANQUE',
                id: '5637145203',
            },
        ],
        provinceCode: '063',
        regionCode: '06',
        name: 'PUMANQUE',
    },
    {
        id: '5637144800',
        localities: [
            {
                location: 'NIQUEN',
                id: '5637145435',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'ÑIQUÉN',
    },
    {
        id: '5637144787',
        localities: [
            {
                location: 'NUNOA',
                id: '5637145962',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'ÑUÑOA',
    },
    {
        id: '5637144848',
        localities: [
            {
                location: 'O HIGGINS',
                id: '5637145839',
            },
            {
                location: 'VILLA OHIGGINS',
                id: '5637145840',
            },
        ],
        provinceCode: '113',
        regionCode: '11',
        name: 'O’HIGGINS',
    },
    {
        id: '5637144760',
        localities: [
            {
                location: 'PAILACO',
                id: '5637145484',
            },
            {
                location: 'TIRUA',
                id: '5637145485',
            },
        ],
        provinceCode: '082',
        regionCode: '08',
        name: 'TIRÚA',
    },
    {
        id: '5637144858',
        localities: [
            {
                location: 'PALENA',
                id: '5637145709',
            },
            {
                location: 'VILLA VANGUARDIA',
                id: '5637145710',
            },
        ],
        provinceCode: '104',
        regionCode: '10',
        name: 'PALENA',
    },
    {
        id: '5637144686',
        localities: [
            {
                location: 'PALMILLA',
                id: '5637145185',
            },
        ],
        provinceCode: '063',
        regionCode: '06',
        name: 'PALMILLA',
    },
    {
        id: '5637144708',
        localities: [
            {
                location: 'PALQUIBUDA',
                id: '5637145293',
            },
            {
                location: 'RAUCO',
                id: '5637145294',
            },
        ],
        provinceCode: '073',
        regionCode: '07',
        name: 'RAUCO',
    },
    {
        id: '5637144726',
        localities: [
            {
                location: 'PANIMAVIDA',
                id: '5637145333',
            },
            {
                location: 'QUINMAVIDA',
                id: '5637145334',
            },
            {
                location: 'YERBAS BUENAS',
                id: '5637145335',
            },
        ],
        provinceCode: '074',
        regionCode: '07',
        name: 'YERBAS BUENAS',
    },
    {
        id: '5637144634',
        localities: [
            {
                location: 'PAPUDO',
                id: '5637145072',
            },
        ],
        provinceCode: '054',
        regionCode: '05',
        name: 'PAPUDO',
    },
    {
        id: '5637144785',
        localities: [
            {
                location: 'PEDRO AGUIRRE CERDA',
                id: '5637145974',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'PEDRO AGUIRRE CERDA',
    },
    {
        id: '5637144703',
        localities: [
            {
                location: 'PELLUHUE',
                id: '5637145288',
            },
        ],
        provinceCode: '072',
        regionCode: '07',
        name: 'PELLUHUE',
    },
    {
        id: '5637144657',
        localities: [
            {
                location: 'PENABLANCA',
                id: '5637145122',
            },
            {
                location: 'VILLA ALEMANA',
                id: '5637145123',
            },
        ],
        provinceCode: '058',
        regionCode: '05',
        name: 'VILLA ALEMANA',
    },
    {
        id: '5637144784',
        localities: [
            {
                location: 'PENALOLEN',
                id: '5637145977',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'PEÑALOLÉN',
    },
    {
        id: '5637144866',
        localities: [
            {
                location: 'PERQUENCO',
                id: '5637145586',
            },
            {
                location: 'SELVA OSCURA',
                id: '5637145587',
            },
        ],
        provinceCode: '091',
        regionCode: '09',
        name: 'PERQUENCO',
    },
    {
        id: '5637144669',
        localities: [
            {
                location: 'PEUMO',
                id: '5637145192',
            },
            {
                location: 'TUNCA ARRIBA',
                id: '5637145193',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'PEUMO',
    },
    {
        id: '5637144673',
        localities: [
            {
                location: 'PIMPINELA',
                id: '5637145213',
            },
            {
                location: 'REQUINOA',
                id: '5637145214',
            },
            {
                location: 'ROSARIO',
                id: '5637145215',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'REQUÍNOA',
    },
    {
        id: '5637144804',
        localities: [
            {
                location: 'PINTO',
                id: '5637145442',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'PINTO',
    },
    {
        id: '5637144867',
        localities: [
            {
                location: 'PITRUFQUEN',
                id: '5637145588',
            },
            {
                location: 'RADAL',
                id: '5637145589',
            },
        ],
        provinceCode: '091',
        regionCode: '09',
        name: 'PITRUFQUÉN',
    },
    {
        id: '5637144781',
        localities: [
            {
                location: 'PROVIDENCIA',
                id: '5637145980',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'PROVIDENCIA',
    },
    {
        id: '5637144779',
        localities: [
            {
                location: 'PUDAHUEL',
                id: '5637145981',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'PUDAHUEL',
    },
    {
        id: '5637144658',
        localities: [
            {
                location: 'PUNTA DE CORTES',
                id: '5637145205',
            },
            {
                location: 'RANCAGUA',
                id: '5637145206',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'RANCAGUA',
    },
    {
        id: '5637145326',
        localities: [
            {
                location: 'PUREN',
                id: '5637145597',
            },
        ],
        provinceCode: '092',
        regionCode: '09',
        name: 'PUREN',
    },
    {
        id: '5637144895',
        localities: [
            {
                location: 'QUECHEREGUAS',
                id: '5637145618',
            },
            {
                location: 'TRAIGUEN',
                id: '5637145619',
            },
        ],
        provinceCode: '092',
        regionCode: '09',
        name: 'TRAIGUÉN',
    },
    {
        id: '5637144776',
        localities: [
            {
                location: 'QUILICURA',
                id: '5637145986',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'QUILICURA',
    },
    {
        id: '5637144807',
        localities: [
            {
                location: 'QUILLON',
                id: '5637145454',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'QUILLÓN',
    },
    {
        id: '5637144637',
        localities: [
            {
                location: 'QUILLOTA',
                id: '5637145095',
            },
        ],
        provinceCode: '055',
        regionCode: '05',
        name: 'QUILLOTA',
    },
    {
        id: '5637144671',
        localities: [
            {
                location: 'QUINTA DE TILCOCO',
                id: '5637145204',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'QUINTA DE TILCOCO',
    },
    {
        id: '5637144774',
        localities: [
            {
                location: 'QUINTA NORMAL',
                id: '5637145987',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'QUINTA NORMAL',
    },
    {
        id: '5637144625',
        localities: [
            {
                location: 'QUINTERO',
                id: '5637145099',
            },
            {
                location: 'RITOQUE',
                id: '5637145100',
            },
            {
                location: 'VALLE ALEGRE',
                id: '5637145101',
            },
        ],
        provinceCode: '051',
        regionCode: '05',
        name: 'QUINTERO',
    },
    {
        id: '5637144809',
        localities: [
            {
                location: 'QUIRIHUE',
                id: '5637145455',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'QUIRIHUE',
    },
    {
        id: '5637144811',
        localities: [
            {
                location: 'RANQUIL',
                id: '5637145456',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'RÁNQUIL',
    },
    {
        id: '5637144770',
        localities: [
            {
                location: 'RECOLETA',
                id: '5637145988',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'RECOLETA',
    },
    {
        id: '5637144626',
        localities: [
            {
                location: 'RENACA',
                id: '5637145124',
            },
            {
                location: 'VINA DEL MAR',
                id: '5637145125',
            },
        ],
        provinceCode: '051',
        regionCode: '05',
        name: 'VIÑA DEL MAR',
    },
    {
        id: '5637144767',
        localities: [
            {
                location: 'RENCA',
                id: '5637145989',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'RENCA',
    },
    {
        id: '5637144630',
        localities: [
            {
                location: 'RINCONADA',
                id: '5637145102',
            },
        ],
        provinceCode: '053',
        regionCode: '05',
        name: 'RINCONADA',
    },
    {
        id: '5637144711',
        localities: [
            {
                location: 'SAGRADA FAMILIA',
                id: '5637145302',
            },
            {
                location: 'VILLA PRAT',
                id: '5637145303',
            },
        ],
        provinceCode: '073',
        regionCode: '07',
        name: 'SAGRADA FAMILIA',
    },
    {
        id: '5637144744',
        localities: [
            {
                location: 'SAN BERNARDO',
                id: '5637145990',
            },
        ],
        provinceCode: '134',
        regionCode: '13',
        name: 'SAN BERNARDO',
    },
    {
        id: '5637144631',
        localities: [
            {
                location: 'SAN ESTEBAN',
                id: '5637145105',
            },
        ],
        provinceCode: '053',
        regionCode: '05',
        name: 'SAN ESTEBAN',
    },
    {
        id: '5637144667',
        localities: [
            {
                location: 'SAN FCO DE MOSTAZAL',
                id: '5637145172',
            },
        ],
        provinceCode: '061',
        regionCode: '06',
        name: 'MOSTAZAL',
    },
    {
        id: '5637144721',
        localities: [
            {
                location: 'SAN JAVIER',
                id: '5637145313',
            },
        ],
        provinceCode: '074',
        regionCode: '07',
        name: 'SAN JAVIER',
    },
    {
        id: '5637144765',
        localities: [
            {
                location: 'SAN JOAQUIN',
                id: '5637145991',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'SAN JOAQUÍN',
    },
    {
        id: '5637144762',
        localities: [
            {
                location: 'SAN MIGUEL',
                id: '5637146003',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'SAN MIGUEL',
    },
    {
        id: '5637144818',
        localities: [
            {
                location: 'SAN NICOLAS',
                id: '5637145469',
            },
        ],
        provinceCode: '084',
        regionCode: '08',
        name: 'SAN NICOLÁS',
    },
    {
        id: '5637144740',
        localities: [
            {
                location: 'SAN PEDRO DE LA PAZ',
                id: '5637145470',
            },
        ],
        provinceCode: '081',
        regionCode: '08',
        name: 'SAN PEDRO DE LA PAZ',
    },
    {
        id: '5637144761',
        localities: [
            {
                location: 'SAN RAMON',
                id: '5637146010',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'SAN RAMÓN',
    },
    {
        id: '5637144741',
        localities: [
            {
                location: 'SANTA JUANA',
                id: '5637145479',
            },
        ],
        provinceCode: '081',
        regionCode: '08',
        name: 'SANTA JUANA',
    },
    {
        id: '5637144826',
        localities: [
            {
                location: 'SANTIAGO',
                id: '5637146011',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'SANTIAGO',
    },
    {
        id: '5637144724',
        localities: [
            {
                location: 'TALAGANTE',
                id: '5637146012',
            },
        ],
        provinceCode: '136',
        regionCode: '13',
        name: 'TALAGANTE',
    },
    {
        id: '5637144897',
        localities: [
            {
                location: 'TERMAS DE TOLHUACA',
                id: '5637145620',
            },
            {
                location: 'TRES ESQUINAS',
                id: '5637145621',
            },
            {
                location: 'VICTORIA',
                id: '5637145622',
            },
        ],
        provinceCode: '092',
        regionCode: '09',
        name: 'VICTORIA',
    },
    {
        id: '5637144759',
        localities: [
            {
                location: 'VITACURA',
                id: '5637146016',
            },
        ],
        provinceCode: '131',
        regionCode: '13',
        name: 'VITACURA',
    },
    {
        id: '5637145923',
        localities: [
            {
                location: 'CURACAVI',
                id: '5637145923',
            },
        ],
        regionCode: '13',
        name: 'CURACAVI',
    },
    {
        id: '5637144720',
        localities: [],
        regionCode: '07',
        name: 'RETIRO',
    },
];
var data2 = data.reduce(function (acc, el) {
    var commune = {
        id: el.id,
        name: el.name,
        localities: el.localities.map(function (value) { return ({
            id: value.id,
            name: value.location,
        }); }),
    };
    if (acc[el.regionCode]) {
        acc[el.regionCode].subdivisions.push(commune);
    }
    else {
        acc[el.regionCode] = {
            id: el.regionCode,
            subdivisions: [commune],
        };
    }
    return acc;
}, {});
var jsonData = JSON.stringify(Object.values(data2), null, 2); // `null, 2` es para dar formato legible con indentación
fs.writeFile('localities.json', jsonData, function (err) {
    if (err) {
        console.error('Error al escribir el archivo JSON:', err);
    }
    else {
        console.log('Archivo JSON generado correctamente.');
    }
});
