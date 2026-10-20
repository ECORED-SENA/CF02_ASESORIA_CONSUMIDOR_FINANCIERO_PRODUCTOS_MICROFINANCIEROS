export default {
  global: {
    Name: 'Análisis crediticio y gestión de cartera microfinanciera',
    Description:
      'Este componente formativo aborda los fundamentos y herramientas para analizar la viabilidad del crédito mediante la matemática financiera, el flujo de caja, los estados financieros y el análisis cualitativo y cuantitativo del cliente. Asimismo, desarrolla aspectos relacionados con la gestión de informes, garantías y cartera, que permiten sustentar decisiones crediticias, presentar resultados al comité de crédito y aplicar acciones de seguimiento y cobranza de acuerdo con los procedimientos institucionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Matemáticas financieras aplicadas al microcrédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables básicas de una operación de microcrédito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tasas de interés aplicadas al crédito	',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cálculo del interés en operaciones de microcrédito',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cálculo de la cuota periódica	',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Interpretación del plan de pagos	',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ingresos, egresos, flujo de caja y capacidad económica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ingresos de la microempresa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Costos y egresos de la microempresa	',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ingresos y egresos de la unidad familiar	',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Elaboración e interpretación del flujo de caja',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Determinación de la capacidad económica y de pago',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estados financieros y análisis del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Balance de la microempresa	',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estado de pérdidas y ganancias	',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores financieros aplicados al microcrédito	',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Análisis cuantitativo del cliente',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Análisis cualitativo del cliente',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Viabilidad, garantías e informe del crédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Integración del análisis cuantitativo y cualitativo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Determinación de la viabilidad del crédito	',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Garantías y aspectos que respaldan el crédito',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Elaboración del informe de análisis crediticio',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Presentación de resultados al comité de crédito',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión, seguimiento y recuperación de cartera	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fundamentos de la gestión de cartera	',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Seguimiento y control de la cartera',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Plan y procedimiento de cobranza',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Gestión de dificultades e incumplimientos de pago',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Alternativas para la normalización y mantenimiento de una cartera sana',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis cualitativo',
      significado:
        'evaluación de aspectos no numéricos del cliente y de su actividad, como experiencia, trayectoria, comportamiento, estabilidad, referencias y gestión del negocio.',
    },
    {
      termino: 'Análisis cuantitativo',
      significado:
        'evaluación de información numérica relacionada con ingresos, egresos, activos, pasivos, flujo de caja, obligaciones e indicadores financieros.',
    },
    {
      termino: 'Capacidad de pago',
      significado:
        'disponibilidad económica del cliente para atender una obligación después de cubrir sus costos, gastos y compromisos vigentes.',
    },
    {
      termino: 'Cartera',
      significado:
        'conjunto de obligaciones crediticias que una organización administra, controla y mantiene bajo seguimiento durante su vigencia.',
    },
    {
      termino: 'Cobranza',
      significado:
        'conjunto de acciones orientadas a gestionar obligaciones vencidas o con dificultades de pago, de acuerdo con los procedimientos establecidos.',
    },
    {
      termino: 'Comité de crédito',
      significado:
        'instancia que examina los resultados del análisis y, según las facultades asignadas, adopta una decisión o formula una recomendación sobre la solicitud.',
    },
    {
      termino: 'Cuota',
      significado:
        'valor periódico que debe pagarse para atender una obligación crediticia y que puede incluir abonos a capital e intereses.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'nivel de obligaciones financieras de una persona o unidad económica en relación con sus recursos y su capacidad de generación de ingresos.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'informes que organizan la información económica de la microempresa y permiten analizar su situación patrimonial y los resultados de su actividad.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'herramienta que organiza las entradas y salidas efectivas de dinero durante un periodo para calcular el flujo neto, el saldo final y la disponibilidad de recursos.',
    },
    {
      termino: 'Garantía',
      significado:
        'mecanismo que respalda una obligación crediticia y complementa la evaluación del riesgo, sin sustituir la capacidad de pago del cliente.',
    },
    {
      termino: 'Indicador financiero',
      significado:
        'relación entre cifras económicas que permite analizar aspectos como liquidez, endeudamiento, rentabilidad y desempeño de una actividad.',
    },
    {
      termino: 'Interés',
      significado:
        'valor correspondiente al costo financiero generado por el uso de un capital durante un periodo determinado.',
    },
    {
      termino: 'Microcrédito',
      significado:
        'financiación orientada a atender necesidades de una microempresa o pequeña unidad productiva, de acuerdo con las condiciones aplicables a la operación.',
    },
    {
      termino: 'Normalización de cartera',
      significado:
        'proceso orientado a recuperar el cumplimiento de una obligación mediante acciones o alternativas autorizadas frente a dificultades de pago.',
    },
    {
      termino: 'Plan de pagos',
      significado:
        'relación organizada de las cuotas, intereses, abonos a capital y saldos de una obligación durante el plazo establecido.',
    },
    {
      termino: 'Reestructuración',
      significado:
        'alternativa aplicable cuando se ha deteriorado la capacidad de pago del deudor; ajusta las condiciones de la obligación conforme con las reglas y políticas correspondientes.',
    },
    {
      termino: 'Riesgo crediticio',
      significado:
        'posibilidad de que un deudor incumpla total o parcialmente las obligaciones financieras asumidas.',
    },
    {
      termino: 'Tasa de interés',
      significado:
        'porcentaje aplicado sobre un capital o saldo para determinar el costo financiero correspondiente a un periodo.',
    },
    {
      termino: 'Viabilidad crediticia',
      significado:
        'resultado del análisis integral que permite establecer si las condiciones económicas, financieras y cualitativas respaldan razonablemente una operación de crédito.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República. (s. f.). Sectores económicos. La Enciclopedia.',
      link: 'https://enciclopedia.banrepcultural.org/Sectores_econ%C3%B3micos',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1983, 6 de julio). Ley 14 de 1983. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=267',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995, 20 de diciembre). Ley 223 de 1995. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6968',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998, 24 de diciembre). Ley 488 de 1998. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=187',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2005, 8 de julio). Ley 962 de 2005. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17004',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009, 13 de julio). Ley 1314 de 2009. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022). Guía para la administración del riesgo y el diseño de controles en entidades públicas (Versión 6). Consultar guía de Función Pública',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2022). Clasificación Industrial Internacional Uniforme de todas las actividades económicas. Revisión 4 adaptada para Colombia (CIIU Rev. 4 A.C.).',
      link: 'https://www.dane.gov.co/files/sen/nomenclatura/ciiu/CIIU_Rev_4_AC2022.pdf',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2023). Sistema de Información de Economía Popular.',
      link: 'https://siep.dane.gov.co/medicion-de-la-economia-popular',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2025, 23 de septiembre). Resolución 000227 de 2025. Compilación Jurídica DIAN.',
      link: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0227_2025.htm',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Abecé de la actualización en el RUT.',
      link: 'https://www.dian.gov.co/Prensa/Aprendelo-en-un-DIAN-X3/Paginas/Abece-Actualizacion-RUT.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente. Consultar documento soporte en la DIAN',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Factura electrónica.',
      link: 'https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-FE-Facturador.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Impuestos.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Inicio.aspx',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971, 27 de marzo). Decreto 410 de 1971. Por el cual se expide el Código de Comercio. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1989, 30 de marzo). Decreto 624 de 1989. Por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección General de Impuestos Nacionales. Dirección de Impuestos y Aduanas Nacionales. Consultar Decreto 624 de 1989',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). Decreto 2650 de 1993. Instituto Nacional de Contadores Públicos.',
      link: 'https://incp.org.co/Site/productosyservicios/legislativa/2650.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2012, 27 de diciembre). Decreto 2706 de 2012. Por el cual se reglamenta la Ley 1314 de 2009 sobre el marco técnico normativo de información financiera para las microempresas. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=51148',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 14 de diciembre). Decreto 2420 de 2015. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Anexo 3 del Decreto 2420 de 2015. Marco técnico normativo para los preparadores de información financiera que conforman el Grupo 3. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76055',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2021, 9 de diciembre). Decreto 1670 de 2021. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=174053',
    },
    {
      referencia:
        'Sistema Estadístico Nacional. (s. f.). Sistema de consulta de conceptos estandarizados. Departamento Administrativo Nacional de Estadística.',
      link: 'https://conceptos.dane.gov.co/conceptos/conceptos/4062/ficha/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s. f.). Glosario: C.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/13140/glosario-c-13140/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s. f.). Glosario: R.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/13155/glosario-r-13155/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
