<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Viabilidad, garantías e informe del crédito
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La evaluación de una operación crediticia requiere integrar la información financiera y cualitativa obtenida durante el conocimiento del cliente y de su actividad económica. Este tema aborda la articulación de estos resultados como base para valorar la operación, reconocer sus respaldos y sustentar técnicamente la información que posteriormente se presenta ante la instancia correspondiente (Superintendencia Financiera de Colombia, 2018).
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Integración del análisis cuantitativo y cualitativo	
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p La evaluación integral requiere relacionar los resultados financieros con la trayectoria, la gestión y el comportamiento del cliente y de su actividad. Ambas dimensiones se complementan para establecer la coherencia de la información, identificar fortalezas y factores de riesgo, y sustentar el análisis sin reemplazar la capacidad de pago por condiciones cualitativas favorables (Superintendencia Financiera de Colombia, 2018).
      p.mb-5 La siguiente tabla sintetiza cómo se complementan ambas dimensiones y permite organizar los principales hallazgos antes de determinar la viabilidad del crédito:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Integración del análisis cuantitativo y cualitativo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Dimensión
                      th.ajuste-border-tabla.texto-left Aspectos principales
                      th.texto-left Pregunta orientadora
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capacidad de pago
                      td.ajuste-border-tabla.texto-left Ingresos, egresos, flujo de caja y cuota proyectada.
                      td.texto-left ¿Los recursos disponibles permiten atender la nueva obligación?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento
                      td.ajuste-border-tabla.texto-left Obligaciones vigentes, cuotas y relación entre pasivos y activos.
                      td.texto-left ¿La deuda existente permite asumir un compromiso adicional?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Situación financiera
                      td.ajuste-border-tabla.texto-left Activos, pasivos, patrimonio, utilidad e indicadores.
                      td.texto-left ¿La estructura financiera es coherente con la operación solicitada?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trayectoria
                      td.ajuste-border-tabla.texto-left Experiencia, permanencia y conocimiento de la actividad.
                      td.texto-left ¿La actividad presenta continuidad y experiencia suficiente para sustentar los ingresos?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestión del negocio
                      td.ajuste-border-tabla.texto-left Manejo de ventas, compras, inventarios y recursos.
                      td.texto-left ¿La administración observada es coherente con la información financiera?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comportamiento
                      td.ajuste-border-tabla.texto-left Cumplimiento de compromisos, referencias y consistencia de la información.
                      td.texto-left ¿Existen antecedentes o situaciones que puedan afectar el cumplimiento?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Entorno de la actividad
                      td.ajuste-border-tabla.texto-left Mercado, clientes, proveedores y factores externos relevantes.
                      td.texto-left ¿Existen condiciones que puedan modificar la estabilidad de los ingresos?
          p.mb-5 La integración permite contrastar los resultados e identificar situaciones que requieren mayor atención antes de formular una conclusión:
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100.color-2
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
                  h4.text-center Coherencia entre la información
                  .caja-5_p
                    p.mb-0 Las cifras deben guardar relación con el funcionamiento de la actividad. Si existen diferencias importantes entre la información financiera y la cualitativa, se requiere profundizar la verificación. Asimismo, una trayectoria favorable y referencias consistentes no sustituyen una capacidad de pago insuficiente.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-5.h-100.color-2
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img4.png', alt="" ).m-auto
                  h4.text-center Fortalezas y factores de riesgo
                  .caja-5_p
                    p.mb-0 Entre las fortalezas pueden encontrarse ingresos estables, experiencia, flujo de caja positivo, endeudamiento manejable y referencias consistentes. Factores como dependencia de un cliente, ingresos variables, endeudamiento elevado o diferencias entre información declarada y verificada requieren valoración según su posible efecto sobre la fuente de pago y las políticas de la organización (Superintendencia Financiera de Colombia, 2018).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso permite integrar resultados financieros y cualitativos e identificar un factor que requiere valoración:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una microempresa presenta una capacidad mensual disponible de #[b $900.000] y una cuota proyectada de #[b $420.000]. El análisis financiero indica flujo de caja positivo y un nivel de endeudamiento moderado. Además, la actividad funciona desde hace varios años, mantiene proveedores estables y la información obtenida durante la visita coincide con los datos suministrados.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img5.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La información cuantitativa y cualitativa presenta coherencia y permite avanzar hacia la valoración de la viabilidad, pero no equivale a aprobar el crédito. Si se identifica que gran parte de los ingresos depende de un único comprador que dejará de adquirir los productos próximamente, esta situación debe incorporarse al análisis porque podría modificar la fuente futura de pago.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Determinación de la viabilidad del crédito	
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p La viabilidad del crédito no depende de un único indicador. La evaluación relaciona los flujos de ingresos y egresos, el flujo de caja, el endeudamiento y la composición de activos, pasivos y patrimonio con la información cualitativa y las condiciones específicas de la operación solicitada (Superintendencia Financiera de Colombia, 2018).
      p.mb-5 Los siguientes criterios permiten valorar conjuntamente la información y sustentar una conclusión técnica sobre la viabilidad:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Capacidad de pago
              p.mb-0.text-center Verifica la disponibilidad después de atender gastos y obligaciones existentes. Permite establecer si la cuota proyectada puede asumirse regularmente.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fuente de pago
              p.mb-0.text-center Identifica el origen y la estabilidad de los recursos destinados al crédito. Permite valorar la continuidad esperada de los recursos para atender la obligación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Endeudamiento
              p.mb-0.text-center Considera las deudas, cuotas vigentes y demás compromisos financieros. Permite identificar la presión que ejercen las obligaciones existentes sobre los ingresos del cliente.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Condiciones del crédito
              p.mb-0.text-center Revisa el monto, la tasa, el plazo, la periodicidad y la cuota. Estas condiciones deben guardar correspondencia con la situación económica identificada.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Análisis cualitativo
              p.mb-0.text-center Integra la trayectoria, la gestión, el comportamiento y la estabilidad de la actividad. Complementa los resultados financieros y permite identificar factores que pueden afectar el cumplimiento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Coherencia de la información
              p.mb-0.text-center Contrasta los datos declarados, la información verificada y los resultados obtenidos. Su correspondencia aporta confiabilidad a la evaluación realizada.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Respaldo de la operación
              p.mb-0.text-center Considera las garantías u otros mecanismos previstos para respaldar la operación. Estos elementos complementan el análisis del riesgo sin sustituir la capacidad de pago.
      p.mb-5 La valoración conjunta permite establecer la correspondencia entre la situación del cliente y las condiciones de la operación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img14.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Relación entre capacidad de pago y condiciones del crédito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La cuota y las demás condiciones financieras deben guardar relación con la disponibilidad y las fuentes de pago identificadas. Una diferencia matemática favorable entre disponibilidad y cuota no resulta suficiente cuando el margen restante es reducido o los ingresos pueden presentar variaciones (Superintendencia Financiera de Colombia, 2018).
            .row(titulo="Factores que afectan la viabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuciones sostenidas de ingresos, concentración de ventas en un cliente, mayor endeudamiento, flujo de caja irregular, obligaciones no informadas o inconsistencias requieren valoración. Su existencia no implica automáticamente rechazo: debe analizarse su efecto sobre la fuente de pago y las políticas de la entidad.
            .row(titulo="Conclusión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La conclusión debe integrar las condiciones económicas y cualitativas, e identificar los elementos que sustentan la recomendación y los factores que requieren atención. Cuando corresponda, las condiciones propuestas deben responder a resultados verificables y no utilizarse para compensar una capacidad de pago insuficiente.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso permite analizar la relación entre la disponibilidad económica y la cuota proyectada:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] después de cubrir los costos del negocio, los gastos familiares y las obligaciones existentes, un cliente dispone de #[b $850.000 mensuales] y la cuota proyectada asciende a #[b $780.000]. Aunque la disponibilidad supera matemáticamente la cuota, el margen restante es de solo #[b $70.000]. Por ello, deben valorarse la estabilidad de los ingresos y la posibilidad de afrontar variaciones normales de la actividad antes de formular una conclusión.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img16.png', alt='').m-auto
        .col-xl
          p El siguiente caso integra condiciones favorables para sustentar la continuación del análisis:
          .caja-1(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] un comerciante solicita #[b $6.000.000 a 18 meses]. El análisis identifica ingresos estables, flujo de caja positivo, obligaciones vigentes controladas y disponibilidad suficiente para atender la cuota proyectada. La actividad presenta continuidad, la información suministrada coincide con las verificaciones realizadas y no se identifican factores que comprometan significativamente la fuente de pago.
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Estas condiciones permiten continuar hacia la revisión de los respaldos y la elaboración del informe crediticio, pero no representan una aprobación automática. La decisión definitiva corresponde a la instancia autorizada, de acuerdo con las políticas y los procedimientos de la organización (Superintendencia Financiera de Colombia, s. f.-a).
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Garantías y aspectos que respaldan el crédito
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img17.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las garantías constituyen mecanismos adicionales para respaldar el cumplimiento de una obligación crediticia y complementar la evaluación del riesgo. Su existencia no sustituye el análisis de la capacidad de pago ni convierte automáticamente una operación en viable, por lo que deben valorarse según su naturaleza, condiciones y correspondencia con la operación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Finalidad y tipos de respaldos
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La finalidad de una garantía es proporcionar al acreedor un respaldo adicional frente a la obligación. Según las características del crédito y las políticas institucionales, este respaldo puede estar asociado con una persona, determinados bienes o derechos, mecanismos institucionales u otras alternativas admitidas para la operación.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img18.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los principales respaldos se diferencian por sus características y por las condiciones que deben verificarse:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Garantía personal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Garantía personal
              p.mb-0 Una persona diferente del deudor asume responsabilidad frente a la obligación según las condiciones pactadas. Deben verificarse su identidad, capacidad y las condiciones establecidas para el garante.
        .py-3.py-md-4(titulo="Garantía mobiliaria")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Garantía mobiliaria
              p.mb-0 Se constituye sobre bienes muebles, inventarios, cuentas por cobrar u otros derechos permitidos legalmente. Deben verificarse su existencia, titularidad, valoración y los requisitos aplicables para su constitución o registro (Congreso de la República de Colombia, 2013).
        .py-3.py-md-4(titulo="Garantía institucional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Garantía institucional
              p.mb-0 Una entidad especializada respalda parte de la obligación bajo condiciones previamente establecidas. Deben verificarse la cobertura, las condiciones de acceso y la vigencia del producto de garantía.
        .py-3.py-md-4(titulo="Otros respaldos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Otros respaldos
              p.mb-0 Comprenden mecanismos admitidos por la entidad y por la normativa aplicable. Deben verificarse su validez, suficiencia y correspondencia con las características de la operación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación y valoración del respaldo
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La identificación de una garantía no es suficiente para incorporarla al análisis de la operación. Su valoración requiere establecer las condiciones que determinan su utilización como respaldo, de acuerdo con su naturaleza y con las políticas institucionales, manteniendo la capacidad de pago como elemento fundamental de la evaluación.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img23.png', alt='' style="width: 500px").m-auto
      p.mb-5 La valoración del respaldo requiere considerar las particularidades y condiciones aplicables a cada mecanismo:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img24.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Garantías mobiliarias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La Ley 1676 de 2013 permite constituir garantías mobiliarias sobre bienes muebles y derechos con valor económico, incluidos activos circulantes, inventarios y cuentas por cobrar, entre otros. Antes de considerarlos como respaldo, deben verificarse su existencia, titularidad, valoración y las condiciones requeridas para constituir la garantía. 
            .row(titulo="Garantías institucionales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El Fondo Nacional de Garantías dispone de esquemas para respaldar créditos de microempresas, incluidos productos destinados a operaciones de microcrédito empresarial para capital de trabajo e inversión fija. Este respaldo no determina la aprobación del crédito, pues la solicitud continúa sujeta a la evaluación realizada por la entidad financiera (Fondo Nacional de Garantías, s. f.).
            .row(titulo="Valoración del respaldo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La garantía debe revisarse en cuanto a su validez, suficiencia y condiciones de utilización. También deben considerarse las restricciones, requisitos de registro u otras condiciones que puedan afectar su uso. Este respaldo complementa la evaluación y no compensa una capacidad de pago insuficiente.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso permite aplicar la verificación de los respaldos considerados para una operación:
          .caja-1.mb-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una microempresa solicita financiación para adquirir equipos. El análisis identifica capacidad de pago suficiente y estabilidad en la actividad. Como respaldo adicional, la entidad contempla una garantía mobiliaria sobre determinados equipos y, según las condiciones del producto, también podría utilizar un esquema de garantía institucional.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Antes de incorporar estos respaldos a la recomendación, deben verificarse su existencia, valoración, condiciones de constitución y correspondencia con las políticas aplicables. La conclusión sobre la operación debe continuar sustentándose principalmente en la capacidad del cliente para generar los recursos necesarios para atender la obligación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img25.png', alt='' style="width: 500px").m-auto
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Elaboración del informe de análisis crediticio
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img26.png')})` }")
        .bloque-texto-g__texto.p-4
          p El informe de análisis crediticio organiza los resultados verificados durante la evaluación del cliente y de la operación para sustentar una recomendación ante la instancia decisoria. Su elaboración prioriza la información económica, financiera y cualitativa relevante, sin repetir los cálculos desarrollados previamente, y permite comprender las razones que fundamentan la conclusión técnica.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura del informe de análisis crediticio
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img27.png')})` }")
        .bloque-texto-g__texto.p-4
          p La estructura específica del informe depende de las políticas y los procedimientos de cada organización. Sin embargo, debe organizar la información necesaria para identificar la solicitud, sintetizar los principales resultados del análisis, reconocer los factores relevantes y sustentar la conclusión técnica con datos coherentes con las verificaciones realizadas durante el proceso.
      p.mb-5 La siguiente tabla presenta una estructura práctica que puede utilizarse para organizar el informe de análisis crediticio.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 14.
            span Estructura básica del informe de análisis crediticio
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Sección
                  th.ajuste-border-tabla.texto-left Información principal
                  th.texto-left Finalidad
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Identificación de la solicitud
                  td.ajuste-border-tabla.texto-left Cliente, actividad económica, monto, destino, plazo y condiciones solicitadas.
                  td.texto-left Ubicar las características generales de la operación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Información económica
                  td.ajuste-border-tabla.texto-left Ingresos, costos, gastos, flujo de caja y capacidad de pago.
                  td.texto-left Mostrar la disponibilidad económica identificada.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Situación financiera
                  td.ajuste-border-tabla.texto-left Activos, pasivos, patrimonio, obligaciones e indicadores relevantes.
                  td.texto-left Presentar la estructura financiera del cliente.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Análisis cualitativo
                  td.ajuste-border-tabla.texto-left Trayectoria, gestión, estabilidad, referencias y comportamiento.
                  td.texto-left Incorporar factores no expresados únicamente mediante cifras.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fuentes de pago
                  td.ajuste-border-tabla.texto-left Recursos previstos para atender las cuotas.
                  td.texto-left Sustentar cómo se espera cumplir la obligación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Garantías o respaldos
                  td.ajuste-border-tabla.texto-left Garantías disponibles y condiciones verificadas.
                  td.texto-left Identificar mecanismos adicionales de respaldo.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Factores de riesgo
                  td.ajuste-border-tabla.texto-left Situaciones que pueden afectar el cumplimiento.
                  td.texto-left Permitir valorar aspectos que requieren atención.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Conclusión y recomendación
                  td.ajuste-border-tabla.texto-left Resultado del análisis y condiciones sugeridas.
                  td.texto-left Sustentar técnicamente la recomendación presentada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Presentación y calidad de la información
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La elaboración del informe requiere seleccionar y presentar información suficiente para explicar la situación del cliente y las razones que sustentan la recomendación. Su contenido debe concentrarse en los resultados relevantes, registrar los aspectos favorables y los riesgos identificados, y mantener correspondencia con las fuentes y verificaciones realizadas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img28.png', alt='' style="width: 500px").m-auto
      p.mb-5 La calidad del informe depende de la pertinencia de los resultados seleccionados y de la claridad con que se sustenta la conclusión:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img29.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Selección de resultados relevantes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El informe no debe acumular todos los datos recopilados ni repetir detalladamente los cálculos realizados. Debe sintetizar resultados como la disponibilidad económica, las obligaciones existentes, el efecto de la nueva cuota y los elementos financieros que permiten comprender el fundamento de la conclusión (Superintendencia Financiera de Colombia, 2018).
            .row(titulo="Fortalezas y factores de riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Deben registrarse tanto los aspectos favorables como aquellos que pueden afectar la operación. Entre ellos pueden encontrarse estabilidad de ingresos, experiencia y flujo de caja positivo, así como variabilidad de ingresos, concentración de ventas, endeudamiento elevado, obligaciones adicionales o inconsistencias detectadas durante la verificación (Superintendencia Financiera de Colombia, 2018).
            .row(titulo="Conclusión y recomendación técnica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La conclusión debe ser breve, objetiva y coherente con los resultados. Por ejemplo, puede indicar que la actividad presenta ingresos estables, capacidad suficiente para atender la cuota, endeudamiento moderado y coherencia entre la información suministrada y verificada, además de registrar cualquier factor que requiera seguimiento.
            .row(titulo="Precisión, coherencia y trazabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las cifras registradas deben coincidir con los cálculos realizados y las apreciaciones cualitativas sustentarse en entrevistas, visitas, referencias o verificaciones autorizadas. El informe debe conservar trazabilidad respecto de las fuentes utilizadas y excluir apreciaciones personales que no guarden relación con la evaluación crediticia.
      p.mb-0 Al finalizar el análisis, el informe consolida los resultados relevantes, los factores de riesgo, los respaldos y la conclusión técnica sustentada, como base para su posterior presentación ante el comité o instancia de crédito.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Presentación de resultados al comité de crédito
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img30.png')})` }")
        .bloque-texto-g__texto.p-4
          p La presentación ante el comité de crédito sintetiza los resultados relevantes del análisis y sustenta la recomendación formulada para apoyar la decisión de la instancia autorizada. Su contenido debe concentrarse en las condiciones de la operación, la capacidad identificada, los principales riesgos y los respaldos, sin reproducir íntegramente el informe crediticio (Quintero de Rivas, 2016).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Preparación y sustentación de la solicitud
      p.mb-5 La preparación de la solicitud requiere comprobar que la información que se sustentará sea coherente con el análisis realizado y con los soportes disponibles. La presentación debe concentrarse en los elementos que fundamentan la recomendación y proporcionar información suficiente para que la instancia autorizada adopte la decisión correspondiente.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p Antes de sustentar la solicitud, se deben comprobar los siguientes aspectos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cifras:] coinciden con los cálculos y resultados registrados en el informe.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soportes:] respaldan la información utilizada durante el análisis.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Condiciones propuestas:] corresponden con la capacidad de pago identificada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgos:] se encuentran claramente registrados y considerados en la recomendación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Evidencias:] están disponibles para sustentar la información y responder las inquietudes que puedan surgir.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img31.png', alt='' style="width: 400px").m-auto
      p.mb-5 La sustentación debe integrar los aspectos esenciales de la solicitud y explicar la función que cumplen dentro del análisis:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Solicitud y actividad económica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Solicitud y actividad económica
              p.mb-0 Se presentan el monto, destino, plazo y periodicidad propuestos para identificar las condiciones de la operación. La trayectoria, funcionamiento y estabilidad de la actividad permiten contextualizar la fuente que genera los ingresos del cliente.
        .py-3.py-md-4(titulo="Capacidad de pago y endeudamiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Capacidad de pago y endeudamiento
              p.mb-0 Se relacionan la disponibilidad económica y la cuota propuesta para sustentar la posibilidad de atender la obligación. También se presentan las obligaciones vigentes y los compromisos financieros para establecer la carga financiera existente.
        .py-3.py-md-4(titulo="Análisis cualitativo y riesgos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Análisis cualitativo y riesgos
              p.mb-0 Se sintetizan la gestión del negocio, las referencias, el comportamiento y otros factores relevantes que complementan la información financiera. Asimismo, se identifican las situaciones que pueden afectar el cumplimiento para facilitar la valoración integral de la operación.
        .py-3.py-md-4(titulo="Garantías y recomendación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img35.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Garantías y recomendación
              p.mb-0 Se presentan los respaldos disponibles y sus condiciones verificadas, junto con la propuesta resultante del análisis sobre monto, plazo, condiciones y conclusión técnica. Quien sustenta la solicitud debe responder las inquietudes con información verificable y justificar la recomendación formulada (Quintero de Rivas, 2016).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Decisión y registro
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La recomendación presentada constituye el resultado técnico del análisis, mientras que la decisión corresponde al comité o a la instancia autorizada según los procedimientos de la organización. Por ello, las actuaciones derivadas de la revisión y las condiciones finalmente autorizadas deben quedar claramente diferenciadas y registradas.
      p.mb-5 La actuación de la instancia competente y su registro permiten conservar las condiciones resultantes del proceso de decisión:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img36.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Decisión de la instancia autorizada
          p.mb-0 El comité puede solicitar información adicional, condicionar una aprobación, reducir el monto o modificar el plazo cuando los resultados del análisis lo justifiquen (Quintero de Rivas, 2016). Las aclaraciones solicitadas deben sustentarse con datos verificables y no mediante apreciaciones sin respaldo.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img37.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Registro de la decisión
          p.mb-0 La decisión debe documentarse según los procedimientos de la organización, incluyendo las condiciones autorizadas y las observaciones pertinentes. Si existen modificaciones frente a la solicitud inicial, deben registrarse claramente para conservar la trazabilidad y garantizar su correspondencia con las condiciones que posteriormente se formalicen.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img38.png')})` }")
        .bloque-texto-g__texto.p-4
          p La presentación debe sintetizar las condiciones solicitadas, los resultados financieros y cualitativos, la capacidad de pago, el endeudamiento, los riesgos y las garantías para sustentar la recomendación. Una vez adoptada la decisión y efectuado el desembolso, se inicia la etapa de seguimiento de la obligación y gestión de cartera, desarrollada en el tema 5.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
