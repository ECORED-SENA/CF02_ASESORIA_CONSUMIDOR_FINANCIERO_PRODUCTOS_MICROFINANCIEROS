<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Gestión, seguimiento y recuperación de cartera	
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La gestión de cartera se desarrolla después del desembolso y comprende el seguimiento y control de las obligaciones para verificar su cumplimiento e identificar oportunamente situaciones que puedan afectar los pagos. Este tema aborda sus fundamentos, el seguimiento de las obligaciones y las acciones relacionadas con la recuperación y conservación de una cartera adecuada, conforme con los procedimientos institucionales.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Fundamentos de la gestión de cartera
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p La gestión de cartera comprende acciones de seguimiento, control y recuperación desde el desembolso hasta la cancelación de la obligación. Su finalidad es verificar el cumplimiento de los pagos, identificar cambios que puedan afectarlos y aplicar oportunamente las actuaciones previstas por la organización durante la vida del crédito (Superintendencia Financiera de Colombia, s. f.-a).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivos de la gestión de cartera
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p La gestión no comienza únicamente cuando se presenta un incumplimiento. El seguimiento preventivo permite identificar señales de alerta y mantener contacto oportuno con el cliente, especialmente cuando los ingresos de las pequeñas unidades económicas pueden variar por cambios en las ventas, los costos, las temporadas u otras situaciones que afecten temporalmente su capacidad de pago.
      p.mb-5 Los principales aspectos permiten orientar el seguimiento y las actuaciones relacionadas con las obligaciones crediticias:
      .row.justify-content-center.mb-4
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img4.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Seguimiento de pagos
            p.mb-0.text-center Permite verificar el cumplimiento de las cuotas y las fechas acordadas durante la vigencia de la obligación.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t5/img5.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Control de vencimientos
            p.mb-0.text-center Facilita la identificación de obligaciones próximas a vencer o que presentan atraso para realizar el seguimiento correspondiente.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img6.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Señales de alerta
            p.mb-0.text-center Permite reconocer cambios o situaciones que puedan afectar la continuidad de los pagos y requieran mayor seguimiento.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img7.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Contacto con el cliente
            p.mb-0.text-center Mantiene la comunicación para conocer oportunamente situaciones relacionadas con la obligación y su evolución durante la vida del crédito.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t5/img8.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Gestión de cobranza
            p.mb-0.text-center Comprende la aplicación de las acciones previstas por la organización cuando se presentan atrasos o incumplimientos en la obligación.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img9.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Registro de la gestión
            p.mb-0.text-center Permite documentar los contactos, compromisos, acuerdos y resultados obtenidos para conservar información sobre las actuaciones realizadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cartera sana y seguimiento durante la vida del crédito
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Una cartera sana se relaciona con el cumplimiento adecuado de las obligaciones y con una gestión que permita controlar oportunamente los riesgos de los créditos otorgados. Para ello, el seguimiento debe considerar el comportamiento de la cartera, las causas de los atrasos y la efectividad de las actuaciones realizadas (Quintero de Rivas, 2016).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img10.png', alt='' style="width: 500px").m-auto
      p.mb-5 El seguimiento durante la vida del crédito permite reconocer cambios y mantener información suficiente sobre la evolución de las obligaciones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img11.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cartera sana").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 No se limita a identificar las obligaciones que se encuentran al día. También requiere analizar el comportamiento de la cartera, las causas de los atrasos y la efectividad de las acciones realizadas para controlar oportunamente los riesgos asociados a los créditos otorgados.
            .row(titulo="Seguimiento preventivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El monitoreo de indicadores, las razones de incumplimiento, la eficacia de las gestiones de cobro y los acuerdos de pago permite adoptar medidas antes de que las dificultades se conviertan en incumplimientos prolongados (Quintero de Rivas, 2016).
            .row(titulo="Cambios y trazabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Después del desembolso pueden cambiar las condiciones económicas del cliente. Registrar contactos, fechas, compromisos, novedades y resultados permite conocer la evolución de la obligación y mantener la trazabilidad necesaria cuando se requiere una gestión posterior.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La siguiente situación permite reconocer la función preventiva del seguimiento antes de que exista un incumplimiento:
          .caja-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una microempresa ha pagado puntualmente sus primeras cuotas, pero durante el seguimiento informa una reducción temporal de ventas. Aunque todavía no existe mora, esta situación constituye una señal que debe registrarse y mantenerse en seguimiento. La gestión preventiva permite conservar el contacto con el cliente y verificar la evolución de la obligación antes de que se presente un incumplimiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img12.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Seguimiento y control de la cartera
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p El seguimiento y control de la cartera permite verificar durante la vida del crédito el cumplimiento de las condiciones pactadas y los cambios en cada obligación. Para ello, se revisan vencimientos, pagos, saldos, atrasos y señales de alerta, además de registrar las actuaciones realizadas para mantener información actualizada sobre su evolución.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control del comportamiento de pago
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El control del comportamiento de pago permite establecer si las cuotas se atienden en las fechas y condiciones acordadas e identificar oportunamente variaciones frente a lo previsto. La revisión periódica de los datos de la obligación facilita determinar su estado y conservar información suficiente sobre el cumplimiento del cliente.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img14.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los siguientes elementos permiten organizar la información necesaria para controlar el comportamiento de cada obligación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Elementos para el seguimiento y control de la cartera
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Aspecto por revisar
                      th.texto-left Finalidad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha de vencimiento
                      td.ajuste-border-tabla.texto-left Momento establecido para el pago de la cuota.
                      td.texto-left Facilitar el control oportuno de las obligaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor de la cuota
                      td.ajuste-border-tabla.texto-left Monto que corresponde pagar en cada periodo.
                      td.texto-left Verificar el cumplimiento de las condiciones pactadas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha de pago
                      td.ajuste-border-tabla.texto-left Día en que efectivamente se realizó el abono.
                      td.texto-left Identificar puntualidad o retrasos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo pendiente
                      td.ajuste-border-tabla.texto-left Capital que permanece por pagar.
                      td.texto-left Conocer la evolución de la obligación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Días de atraso
                      td.ajuste-border-tabla.texto-left Tiempo transcurrido desde el vencimiento sin pago completo.
                      td.texto-left Identificar oportunamente situaciones de mora.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestión realizada
                      td.ajuste-border-tabla.texto-left Contactos, compromisos y acciones efectuadas.
                      td.texto-left Mantener trazabilidad sobre el seguimiento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Señales de alerta y trazabilidad
          .caja-2(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-2_p
                p.mb-0 El seguimiento también requiere identificar situaciones que puedan anticipar dificultades de pago y conservar los antecedentes de las actuaciones realizadas. Esta información permite analizar la evolución de la obligación, establecer el nivel de seguimiento requerido y determinar, cuando corresponda, la necesidad de avanzar hacia una gestión de cobranza.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t5/img15.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las señales identificadas y los registros acumulados permiten valorar los cambios en el comportamiento de la obligación:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t5/img16.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Señales de alerta
          p.mb-0 Los retrasos recurrentes, pagos parciales, incumplimiento de compromisos, reducción significativa de los ingresos o cambios en la fuente principal de pago pueden anticipar dificultades. Una señal no implica que la obligación sea irrecuperable; indica la necesidad de analizar sus causas, intensificar el seguimiento y aplicar las actuaciones previstas por la organización.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t5/img16.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Registro y trazabilidad
          p.mb-0 Deben registrarse los contactos realizados, compromisos de pago, novedades informadas por el cliente y resultados de las gestiones. Estos antecedentes permiten diferenciar un atraso ocasional de un comportamiento recurrente y dar continuidad al seguimiento. Estos antecedentes pertenecen al seguimiento interno de la entidad. El Módulo Único de Reporte de Información de Cartera (MURIC) corresponde al reporte de información crediticia a la Superintendencia Financiera de Colombia (2026b).
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img17.png', alt='').m-auto
        .col-xl
          p El siguiente caso permite identificar una variación en el comportamiento de pago y determinar la actuación de seguimiento:
          .caja-1(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] un cliente mantiene una obligación con pagos mensuales. Durante los primeros #[b seis meses] realiza sus pagos en las fechas acordadas, pero posteriormente registra #[b dos cuotas con retrasos de varios días]. Aunque finalmente efectúa los pagos, esta variación debe registrarse y analizarse para establecer si corresponde a una situación temporal o al inicio de una dificultad de pago.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Plan y procedimiento de cobranza
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img18.png')})` }")
        .bloque-texto-g__texto.p-4
          p El plan de cobranza organiza las actuaciones que se aplican cuando una obligación presenta atraso o incumplimiento, de acuerdo con su evolución y los procedimientos institucionales. Su finalidad es orientar una gestión ordenada, respetuosa y sustentada en información cierta, suficiente y actualizada sobre el estado de la deuda y las condiciones aplicables a su cobro.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapas del procedimiento de cobranza
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          p El procedimiento de cobranza debe responder a la situación de cada obligación y a las políticas de la organización. Las actuaciones pueden avanzar progresivamente desde el seguimiento previo hasta otras medidas previstas institucionalmente. La cobranza prejudicial se realiza antes de una demanda, mientras que la judicial corresponde a la etapa posterior al inicio del proceso respectivo (Superintendencia Financiera de Colombia, s. f.-b).
      p.mb-5 La gestión puede organizarse progresivamente según el estado de la obligación y el resultado de las actuaciones realizadas:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Seguimiento previo e identificación de mora
                p.mb-0 El seguimiento previo permite recordar fechas y condiciones próximas de pago para prevenir atrasos y mantener una comunicación oportuna. Si se presenta mora, se verifican la cuota vencida, el saldo, los días de atraso y los antecedentes recientes para establecer la situación real de la obligación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img20.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img21.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Contacto con el cliente y definición del compromiso
                p.mb-0 El contacto permite informar el estado de la obligación y consultar alternativas de pago acordes con la situación financiera del cliente. Cuando se establece un compromiso, deben registrarse la fecha, el valor y las condiciones acordadas para concretar una acción orientada a la normalización (Congreso de la República de Colombia, 2023).
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Seguimiento del compromiso y eventual escalamiento
                p.mb-0 Se verifica el cumplimiento del compromiso registrado para determinar la evolución de la obligación. Si este no se cumple, se aplican gradualmente las acciones adicionales previstas por la organización, conforme con el procedimiento institucional y las disposiciones aplicables.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img22.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones para la gestión de cobranza
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img23.png')})` }")
        .bloque-texto-g__texto.p-4
          p La gestión de cobranza debe respetar las condiciones legales aplicables al contacto con el consumidor y garantizar información clara sobre la obligación. Por ello, las actuaciones requieren considerar los canales autorizados, los horarios y la periodicidad permitidos, las restricciones sobre visitas y el registro de las comunicaciones y compromisos establecidos.
      p.mb-5 Las siguientes condiciones orientan el contacto con el cliente y el manejo de la información durante la gestión:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img24.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Canales, horarios y periodicidad del contacto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El contacto debe realizarse mediante los canales autorizados por el consumidor. Una vez establecido contacto directo, no pueden utilizarse varios canales durante una misma semana ni realizarse más de un contacto durante el mismo día. La gestión se efectúa de lunes a viernes entre las #[b 7:00 a. m. y las 7:00 p. m.], y los sábados entre las #[b 8:00 a. m. y las 3:00 p. m.]; se excluyen domingos y festivos, salvo las condiciones expresamente previstas por la ley (Congreso de la República de Colombia, 2023). 
            .row(titulo="Visitas y excepción aplicable al microcrédito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La Ley 2300 de 2023 establece como regla que las gestiones de cobranza no se adelanten mediante visitas al domicilio o lugar de trabajo. Esta restricción admite una excepción para obligaciones adquiridas mediante microcréditos, crédito de fomento, desarrollo agropecuario o rural, siempre que exista autorización expresa del consumidor. 
            .row(titulo="Información y registro de las actuaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Durante la cobranza debe suministrarse información cierta y comprensible sobre el estado de la obligación, incluidos saldo pendiente, intereses, vencimientos, días de mora y datos de contacto de las personas autorizadas para gestionar o recibir acuerdos de pago (Superintendencia Financiera de Colombia, 2008). Asimismo, deben registrarse los contactos, compromisos adquiridos y resultados obtenidos para conservar la trazabilidad de la gestión.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img40.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso permite relacionar la verificación de la obligación, el contacto autorizado y el seguimiento del compromiso:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una obligación presenta #[b cinco días de atraso]. Después de verificar el saldo y la fecha de vencimiento, se contacta al cliente mediante el canal previamente autorizado y se informa el estado de la cuota. El cliente manifiesta que realizará el pago #[b tres días después], por lo que el compromiso debe registrarse y verificarse en la fecha acordada. Si no se cumple, se aplican las actuaciones siguientes previstas por la organización, respetando los límites legales del contacto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img25.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Gestión de dificultades e incumplimientos de pago
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img26.png')})` }")
        .bloque-texto-g__texto.p-4
          p Cuando una obligación presenta dificultades de pago, resulta necesario actualizar la información económica disponible y establecer si la afectación es temporal o persistente. Esta revisión permite valorar la capacidad actual del cliente y orientar las actuaciones previstas por la organización con base en información verificada o comunicada voluntariamente y en la evolución de la obligación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Situaciones que afectan el cumplimiento
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Durante la vida del crédito pueden presentarse cambios económicos o comportamientos de pago que requieran mayor seguimiento. Estas situaciones deben analizarse a partir de la información disponible, sin asumir por sí solas una causa determinada del incumplimiento, con el fin de establecer su posible efecto sobre la capacidad actual y orientar la gestión correspondiente.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img27.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las siguientes situaciones requieren revisar información pertinente y orientar la gestión según su posible efecto sobre el cumplimiento:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img28.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Disminución temporal de ingresos
                  p.mb-0.text-center Se revisan la duración estimada y la recuperación esperada de los ingresos para realizar seguimiento y analizar la capacidad actual de pago.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reducción sostenida de ventas
                  p.mb-0.text-center Se analiza la evolución de los ingresos y la estabilidad de la actividad para actualizar la valoración de la situación económica del cliente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Incremento de costos o gastos
                  p.mb-0.text-center Se revisan la permanencia y el impacto de estos cambios sobre el flujo de caja para determinar cómo pueden afectar la disponibilidad para pagar.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Pérdida de una fuente de ingreso
                  p.mb-0.text-center Se considera la importancia de la fuente afectada y la existencia de ingresos alternativos para evaluar la capacidad real de continuar atendiendo la obligación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aumento del endeudamiento
                  p.mb-0.text-center Se revisan las nuevas obligaciones, cuotas y compromisos adquiridos para establecer la carga financiera total y su efecto sobre la capacidad de pago.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Incumplimiento reiterado
                  p.mb-0.text-center Se consideran los antecedentes, acuerdos anteriores y el comportamiento de pago registrado para aplicar las actuaciones previstas en el procedimiento de cartera.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión de la capacidad actual y definición de la acción
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Cuando la situación económica cambia significativamente, la información utilizada al otorgar el crédito puede dejar de representar la capacidad actual del cliente. Por ello, la gestión requiere actualizar los datos pertinentes, conservar registro de las actuaciones y determinar si corresponde mantener el seguimiento o remitir el caso a la instancia facultada para evaluar otras alternativas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img35.png', alt='' style="width: 500px").m-auto
      p.mb-5 La actualización de la información permite orientar la actuación de acuerdo con la situación económica vigente y las facultades institucionales:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Actualizar la capacidad económica
                p.mb-0 Se revisan nuevamente los ingresos, egresos, obligaciones y flujo de recursos a partir de información disponible, verificada o comunicada voluntariamente. Si la disponibilidad inicial era de #[b $900.000] y posteriormente se reduce a #[b $450.000], cualquier análisis debe partir de esta nueva realidad económica (Superintendencia Financiera de Colombia, 2017).
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img36.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img37.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Mantener la comunicación y el registro
                p.mb-0 La comunicación debe ser clara y respetuosa, realizarse mediante los canales autorizados y cumplir las condiciones legales aplicables. Deben registrarse las novedades comunicadas, los contactos, los compromisos y sus resultados, sin preguntar al consumidor financiero el motivo del incumplimiento (Congreso de la República de Colombia, 2023).
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Determinar la actuación correspondiente
                p.mb-0 Si la dificultad es temporal y existe capacidad para atender los compromisos establecidos, corresponde mantener su seguimiento. Cuando la capacidad cambia significativamente, el caso debe remitirse a la instancia facultada para evaluar las alternativas autorizadas. Ninguna modificación, condonación o condición diferente se ofrece ni se concede automáticamente (Superintendencia Financiera de Colombia, 2017).
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img38.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img39.png', alt='').m-auto
        .col-xl
          p La siguiente situación permite diferenciar una dificultad temporal de un cambio persistente en la capacidad económica:
          .caja-1.color-1.mb-3(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] una microempresa presenta #[b dos cuotas atrasadas] y durante la gestión se cuenta con información sobre una reducción temporal de ventas. La actividad continúa funcionando, los ingresos comienzan a recuperarse y existe disponibilidad para retomar los pagos. La situación, los compromisos establecidos y las fechas acordadas deben registrarse y mantenerse bajo seguimiento.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Si, por el contrario, la información disponible permite establecer una disminución permanente de los ingresos que impide atender las condiciones actuales, el caso debe ser evaluado por la instancia autorizada antes de establecer cualquier modificación.
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Alternativas para la normalización y mantenimiento de una cartera sana
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img40.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-3_p
            p.mb-0 La normalización de cartera comprende alternativas que deben corresponder con la capacidad económica actual del cliente y con las políticas y facultades de la entidad. Su aplicación no constituye un derecho automático ni debe utilizarse para ocultar el deterioro de una obligación o mantenerla artificialmente al día (Superintendencia Financiera de Colombia, 2017).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alternativas de normalización
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Cuando la información actualizada indica que existe posibilidad de continuar atendiendo la obligación, pueden evaluarse alternativas para restablecer su cumplimiento. Estas opciones no son equivalentes ni proceden automáticamente: su aplicación depende de la situación particular, la capacidad de pago y las condiciones establecidas por la organización (Superintendencia Financiera de Colombia, 2017). La siguiente tabla resume algunas alternativas que pueden considerarse, siempre que estén autorizadas por la organización y correspondan con la situación económica identificada:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 16.
                span Alternativas para la normalización de la obligación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Alternativa
                      th.ajuste-border-tabla.texto-left Aplicación general
                      th.texto-left Aspecto por verificar
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acuerdo de pago
                      td.ajuste-border-tabla.texto-left Define compromisos específicos para cancelar valores pendientes.
                      td.texto-left Capacidad real para cumplir las fechas y montos acordados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Modificación de condiciones
                      td.ajuste-border-tabla.texto-left Puede ajustar determinadas condiciones originalmente pactadas.
                      td.texto-left Nueva capacidad de pago y viabilidad de las condiciones propuestas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ampliación del plazo
                      td.ajuste-border-tabla.texto-left Distribuye la obligación durante un periodo mayor.
                      td.texto-left Efecto sobre la cuota, costo financiero y capacidad del cliente.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Refinanciación
                      td.ajuste-border-tabla.texto-left Sustituye o ajusta la financiación bajo condiciones definidas por la entidad.
                      td.texto-left Procedencia, nuevas condiciones y sostenibilidad del pago.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reestructuración
                      td.ajuste-border-tabla.texto-left Modifica las condiciones de una obligación cuando existe deterioro en la capacidad de pago, de acuerdo con las reglas aplicables.
                      td.texto-left Clasificación de la operación, capacidad futura y cumplimiento del nuevo esquema.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img41.png')})` }")
            .bloque-texto-g__texto.p-4
              p La modificación de condiciones y la reestructuración no deben utilizarse como términos equivalentes. La Superintendencia Financiera distingue la modificación basada en la nueva realidad económica del deudor de la reestructuración; además, establece que determinados incumplimientos posteriores de un crédito modificado pueden llevar a reconocer la operación como reestructurada (Superintendencia Financiera de Colombia, 2017).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguimiento y mantenimiento de una cartera sana
      p.mb-5 La normalización no concluye con la definición de una alternativa. Las condiciones establecidas y su cumplimiento requieren seguimiento para determinar la evolución de la obligación y conservar información actualizada. Este control también permite reconocer nuevos incumplimientos y utilizar los antecedentes registrados para fortalecer la gestión preventiva de la cartera. El seguimiento posterior permite verificar los resultados de las actuaciones y responder oportunamente ante cambios en el comportamiento de las obligaciones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img42.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Seguimiento y registro de los compromisos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Después de establecer un compromiso o modificar las condiciones, se verifica periódicamente el cumplimiento de los pagos y se registran los resultados. Esta información permite establecer si la medida adoptada contribuye a recuperar el comportamiento esperado de la obligación (Superintendencia Financiera de Colombia, 2026a).
            .row(titulo="Actuación ante nuevos incumplimientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si se presenta un nuevo incumplimiento, la situación debe analizarse nuevamente y remitirse a la instancia correspondiente cuando sea necesario. No resulta adecuado establecer acuerdos sucesivos sin comprobar que existe capacidad económica para atender las condiciones definidas.
            .row(titulo="Prevención del deterioro de la cartera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El seguimiento permanente y la identificación temprana de dificultades contribuyen a prevenir incumplimientos prolongados. Los patrones registrados en las obligaciones pueden analizarse para fortalecer el seguimiento y reconocer situaciones recurrentes asociadas con determinados sectores, condiciones crediticias o procedimientos de originación (Superintendencia Financiera de Colombia, 2026a).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso permite relacionar la capacidad económica actual con la definición y el seguimiento de una alternativa:
          .caja-1.color-1.mb-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una microempresa presenta dificultades temporales y acumula #[b una cuota pendiente]. Después de actualizar su información, se establece que la actividad continúa generando ingresos y que existe capacidad para cumplir un compromiso ajustado a su flujo de recursos. La alternativa se documenta, se establecen fechas de seguimiento y posteriormente se verifica su cumplimiento.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Si la capacidad económica presenta un deterioro permanente, se requiere una evaluación diferente antes de definir nuevas condiciones, en lugar de aplicar automáticamente una alternativa de normalización.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img43.png', alt='').m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img44.png')})` }")
        .bloque-texto-g__texto.p-4
          p La gestión de cartera integra el control continuo de las obligaciones, el registro de las actuaciones y la adopción de medidas sustentadas en información actualizada. De esta manera, contribuye al cumplimiento sostenible de las obligaciones y al mantenimiento de una cartera administrada de forma preventiva y responsable.

</template>

<script>
export default {
  name: 'Tema5',
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
