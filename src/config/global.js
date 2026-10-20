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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
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
