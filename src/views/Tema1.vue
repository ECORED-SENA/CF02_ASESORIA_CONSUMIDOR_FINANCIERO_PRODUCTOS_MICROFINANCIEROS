<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Matemáticas financieras aplicadas al microcrédito	
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El análisis de una operación de microcrédito requiere comprender la relación entre el monto solicitado, la tasa de interés, el plazo y la periodicidad de los pagos. Estas variables permiten interpretar las condiciones económicas de la financiación, estimar el valor de los pagos y reconocer cómo evoluciona la obligación durante su vigencia.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 500px").m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Variables básicas de una operación de microcrédito
      p.mb-5 Una operación de microcrédito se estructura mediante variables que determinan el valor financiado, el costo asociado, el tiempo para cancelar la obligación y la frecuencia de los pagos. Su adecuada comprensión permite establecer las condiciones básicas de la financiación antes de realizar cálculos de intereses o cuotas. Las principales variables cumplen una función específica y, en conjunto, permiten establecer las condiciones financieras de la operación:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Monto o capital
                  p.mb-0.text-center Es el valor financiado al cliente. Sirve como base para determinar la obligación y realizar los cálculos financieros correspondientes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tasa de interés
                  p.mb-0.text-center Es el porcentaje que representa el costo del dinero durante un periodo. Permite calcular los intereses asociados a la financiación (Banco de la República, s. f.).
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Plazo
                  p.mb-0.text-center Es el tiempo acordado para cancelar la obligación y puede expresarse en meses, semanas u otros periodos. Determina la duración total del crédito.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Periodicidad
                  p.mb-0.text-center Es la frecuencia con la que se realizan los pagos. Define si las cuotas serán semanales, quincenales, mensuales o tendrán otra periodicidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Número de cuotas
                  p.mb-0.text-center Corresponde a la cantidad de pagos establecidos durante el plazo. Su identificación facilita la construcción y el seguimiento del plan de pagos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cuota
                  p.mb-0.text-center Es el valor que debe pagarse en cada periodo establecido. Integra los componentes definidos en las condiciones financieras de la operación.
      p.mb-5 Las variables se relacionan entre sí, por lo que sus modificaciones pueden cambiar las condiciones financieras de la obligación:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img9.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Efecto de las variaciones
          p.mb-0 Si se mantienen el monto y la tasa de interés, pero se amplía el plazo, cada cuota puede disminuir, aunque la obligación permanezca durante más tiempo. Asimismo, una variación en la tasa puede modificar el costo de la financiación y afectar las cuotas.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img10.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Interés Bancario Corriente
          p.mb-0 En Colombia, la Superintendencia Financiera certifica periódicamente el Interés Bancario Corriente para distintas modalidades, incluidas las de crédito productivo. Como estas referencias cambian según su periodo de vigencia, en operaciones reales debe consultarse la certificación correspondiente a la fecha del análisis (Superintendencia Financiera de Colombia, 2026c).
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img11.png', alt='').m-auto
        .col-xl
          p La identificación de las variables puede reconocerse en una situación básica de financiación:
          .caja-1.mb-3(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] una persona solicita $3.000.000 para fortalecer el inventario de su unidad productiva y la entidad plantea un plazo de 12 meses, con pagos mensuales. Antes de calcular cada cuota, deben identificarse el capital financiado ($3.000.000), la tasa aplicable, el plazo (12 meses) y la periodicidad (mensual). Como el caso no proporciona la tasa de interés, aún no es posible calcular los intereses ni el valor de la cuota.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La identificación correcta del monto, la tasa, el plazo y la periodicidad facilita los cálculos y la comprensión de las condiciones del microcrédito.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Tasas de interés aplicadas al crédito	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p La tasa de interés expresa porcentualmente el costo asociado al uso del dinero durante un periodo y constituye una variable fundamental del microcrédito. Para interpretar correctamente las condiciones de una obligación, es necesario identificar cómo se expresa la tasa, su periodicidad y las equivalencias requeridas antes de realizar comparaciones o cálculos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Formas de expresión de la tasa de interés
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 En una operación crediticia no basta con identificar el porcentaje de la tasa; también se debe establecer el periodo al que corresponde y la modalidad en que se expresa. Esta precisión es necesaria porque una tasa anual no puede aplicarse directamente como si fuera mensual y las distintas expresiones cumplen funciones específicas. Las principales formas de expresión se diferencian por su periodicidad, momento de causación y aplicación en el análisis financiero:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Formas de expresión de las tasas de interés
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Tipo de tasa
              th.ajuste-border-tabla.texto-left Descripción
              th.texto-left Aplicación
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tasa nominal
              td.ajuste-border-tabla.texto-left Expresa una tasa de referencia asociada a una periodicidad determinada.
              td.texto-left Requiere identificar su periodicidad y condiciones antes de utilizarla en los cálculos.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Tasa efectiva anual (EA)
              td.ajuste-border-tabla.texto-left Expresa el efecto financiero equivalente de la tasa durante un año, considerando la capitalización correspondiente.
              td.texto-left Facilita la comparación entre diferentes alternativas de financiación.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tasa efectiva periódica
              td.ajuste-border-tabla.texto-left Corresponde a la tasa aplicable durante un periodo específico, por ejemplo, un mes.
              td.texto-left Permite calcular los intereses correspondientes al periodo de pago.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Tasa vencida
              td.ajuste-border-tabla.texto-left El interés se causa al finalizar el periodo establecido.
              td.texto-left Se utiliza en operaciones en las que el pago se realiza al cierre de cada periodo.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tasa anticipada
              td.ajuste-border-tabla.texto-left El interés se cobra o reconoce al inicio del periodo establecido.
              td.texto-left Requiere una interpretación diferente de la correspondiente a una tasa vencida.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img16.png')})` }")
        .bloque-texto-g__texto.p-4
          p La tasa efectiva anual facilita la comparación de alternativas financieras al expresar en una misma base anual tasas con diferentes periodicidades. La Superintendencia Financiera de Colombia dispone de un simulador para convertir tasas efectivas anuales en tasas mensuales o diarias y efectuar conversiones en sentido contrario (Superintendencia Financiera de Colombia, s. f.-c).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conversión de una tasa efectiva anual a una tasa mensual
      p.mb-5 Cuando una operación presenta una tasa efectiva anual y los pagos tienen periodicidad mensual, es necesario determinar la tasa equivalente para ese periodo. Para efectuar la conversión, la tasa debe expresarse en forma decimal y aplicarse una relación que conserve la equivalencia financiera entre la tasa anual y la mensual. La conversión de una tasa del 24 % efectivo anual permite aplicar la relación correspondiente sin alterar su equivalencia financiera:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Fórmula
                p Tasa efectiva mensual = (1 + tasa efectiva anual)^(1/12) − 1
                p.mb-0 En palabras: la tasa efectiva mensual es igual a uno más la tasa efectiva anual, elevado a la potencia de un doceavo, menos uno.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Sustitución
                p Para una tasa del #[b 24 % efectivo anual], se expresa el porcentaje en forma decimal y se sustituye en la fórmula:
                p.mb-0 Tasa efectiva mensual = (1 + 0,24)^(1/12) − 1
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Resultado e interpretación
                p.mb-0 Tasa efectiva mensual ≈ 0,01809 = 1,81 %
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 300px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img20.png')})` }")
        .bloque-texto-g__texto.p-4
          p El 24 % efectivo anual no equivale a dividir 24 entre 12, porque la equivalencia entre ambas tasas debe considerar la capitalización. Este principio también se aplica en las herramientas de conversión de la Superintendencia Financiera de Colombia (Superintendencia Financiera de Colombia, s. f.-c).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tasa de interés y condiciones del microcrédito
      p.mb-5 La tasa de interés debe analizarse como parte de las condiciones generales de la operación y no de manera aislada. Su interpretación requiere considerar el monto financiado, el plazo, la periodicidad y el número de cuotas, así como las referencias y los límites aplicables al crédito en el momento del análisis. Para interpretar adecuadamente la tasa, es necesario relacionarla con las demás condiciones de la financiación y con las referencias aplicables:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img21.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Condiciones de la operación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Dos créditos con el mismo monto financiado pueden generar pagos diferentes cuando presentan tasas o plazos distintos. Por ello, la tasa debe analizarse junto con el monto, el plazo, la periodicidad y el número de cuotas establecidos para la obligación.
            .row(titulo="Interés Bancario Corriente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La Superintendencia Financiera de Colombia certifica el Interés Bancario Corriente para diferentes modalidades de crédito y lo expresa en términos efectivos anuales. Estas certificaciones tienen periodos específicos de vigencia, por lo que debe consultarse la correspondiente a la fecha y modalidad de la operación analizada (Superintendencia Financiera de Colombia, 2026c).
            .row(titulo="Tasa pactada y límite legal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La tasa pactada para una operación debe diferenciarse de los límites legales aplicables. La tasa de usura se determina a partir del Interés Bancario Corriente certificado para la modalidad correspondiente; por ello, el análisis debe considerar la información vigente y aplicable al tipo de crédito evaluado.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La comparación entre alternativas requiere que las tasas se expresen sobre una misma base:
          .caja-1.mb-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una microempresa solicita financiación y recibe dos alternativas con tasas expresadas de manera diferente: la primera presenta una tasa efectiva anual y la segunda, una tasa mensual. Antes de establecer cuál representa un menor costo financiero, ambas tasas deben llevarse a una misma base de comparación. Comparar directamente porcentajes correspondientes a periodos diferentes puede conducir a una interpretación equivocada.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Antes de calcular intereses o cuotas de un microcrédito, se debe identificar cómo está expresada la tasa, cuál es su periodicidad y si requiere conversión. Este procedimiento favorece cálculos consistentes, una interpretación adecuada de las condiciones de financiación y una explicación clara al cliente sobre el costo asociado a la operación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 500px").m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Cálculo del interés en operaciones de microcrédito
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img23.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-3_p
            p.mb-0 El cálculo del interés permite determinar el costo financiero generado durante cada periodo de una operación de microcrédito. Para realizarlo, se requiere identificar el saldo de capital y utilizar una tasa equivalente a la periodicidad evaluada, de manera que pueda diferenciarse el interés generado del valor total que debe pagarse.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cálculo del interés de un periodo
      p.mb-5 El interés de un periodo se obtiene al relacionar el saldo de capital con la tasa de interés periódica correspondiente. Para efectuar el cálculo correctamente, la tasa expresada como porcentaje debe convertirse a su forma decimal; por ejemplo, #[b 1,81 % equivale a 0,0181]. El procedimiento integra las variables necesarias y permite reconocer la función que cumple cada una en el cálculo:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          LineaTiempoD.color-acento-contenido(data-aos="zoom-in")
            .row.align-items-center(numero="1" titulo="Identificar el saldo de capital")
              .col-md.mb-4.mb-md-0
                p.mb-0 El saldo de capital representa el valor sobre el cual se calcula el interés del periodo. Para este ejercicio, corresponde a #[b $3.000.000].
            .row.align-items-center(numero="2" titulo="Identificar y expresar la tasa")
              .col-md.mb-4.mb-md-0
                p.mb-0 La tasa periódica indica el porcentaje aplicable durante el periodo evaluado. La tasa del #[b 1,81 % mensual] debe expresarse en forma decimal para realizar la operación: #[b 1,81 ÷ 100 = 0,0181].
            .row.align-items-center(numero="3" titulo="Aplicar la fórmula")
              .col-md.mb-4.mb-md-0
                p El interés se determina mediante la siguiente relación:
                p #[b Interés del periodo = saldo de capital × tasa de interés periódica]
                p Al sustituir los datos:
                p.mb-0 Interés = $3.000.000 × 0,0181
                p.mb-0 Interés = $54.300
            .row.align-items-center(numero="4" titulo="Interpretar el resultado")
              .col-md.mb-4.mb-md-0
                p.mb-0 Durante ese periodo se generan #[b $54.300 de intereses] sobre el saldo utilizado para el cálculo. Este valor no corresponde por sí solo a la cuota total, pues el pago puede incluir también amortización a capital y otros conceptos autorizados que deben identificarse por separado
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Capital, tasa e interés
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El interés depende principalmente de la base sobre la cual se calcula y de la tasa aplicada. Cuando disminuye el saldo de capital y se conserva la misma tasa periódica, también disminuye el valor del interés generado en el periodo. Por esta razón, es importante diferenciar entre el monto inicialmente desembolsado y el saldo de capital pendiente, especialmente en créditos que se amortizan mediante pagos periódicos. La siguiente tabla relaciona las variables que intervienen en el cálculo del interés:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Variables que intervienen en el cálculo del interés
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Variable
                      th.ajuste-border-tabla.texto-left Función en el cálculo
                      th.texto-left Ejemplo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Saldo de capital
                      td.ajuste-border-tabla.texto-left Representa el valor sobre el cual se calcula el interés del periodo.
                      td.texto-left $3.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tasa periódica
                      td.ajuste-border-tabla.texto-left Indica el porcentaje aplicable durante el periodo evaluado.
                      td.texto-left 1,81 % mensual
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tasa en decimal
                      td.ajuste-border-tabla.texto-left Permite utilizar el porcentaje matemáticamente.
                      td.texto-left 0,0181
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Interés del periodo
                      td.ajuste-border-tabla.texto-left Corresponde al resultado de multiplicar el saldo por la tasa periódica.
                      td.texto-left $54.300
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interés sobre el saldo pendiente
          .caja-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-3_p
                p.mb-0 Cuando los pagos disminuyen progresivamente el capital, el interés puede calcularse sobre el saldo pendiente de cada periodo. Por esta razón, debe diferenciarse el monto inicialmente desembolsado del capital aún adeudado: si el saldo disminuye y se conserva la misma tasa periódica, el interés generado también disminuye.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-4(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La variación del saldo permite identificar su efecto sobre el interés del periodo siguiente:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Nuevo saldo de capital
                p.mb-0 Después del primer pago, el saldo de capital disminuye de #[b $3.000.000 a $2.770.000]. Este nuevo valor constituye la base para efectuar el siguiente cálculo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Aplicación de la tasa periódica
                p Si se mantiene la tasa del #[b 1,81 % mensual], equivalente a #[b 0,0181], el interés del siguiente periodo se calcula así:
                h5.mb-0 Interés = $2.770.000 × 0,0181
                h5.mb-0 Interés = $50.137
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Interpretación de la variación
                p.mb-0 El interés disminuye de #[b $54.300 a $50.137] porque la misma tasa se aplica sobre un saldo de capital menor. El resultado corresponde únicamente al interés generado en el periodo y no al valor total de la cuota.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img29.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interpretación del interés
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img30.png')})` }")
        .bloque-texto-g__texto.p-4
          p El valor del interés debe interpretarse en relación con las condiciones de la operación, ya que un resultado aislado no representa por sí mismo el costo completo de la financiación. Para su análisis se consideran el monto financiado, la tasa aplicada, el plazo, la periodicidad y la forma de amortización del capital.
      p.mb-5 La interpretación del interés requiere considerar tanto su significado financiero como las referencias aplicables a la operación:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img31.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Significado financiero
          p.mb-0 El Banco de la República explica que la tasa de interés representa, en términos generales, el precio asociado al uso del dinero a través del tiempo. Por ello, el interés calculado debe comprenderse como parte del costo financiero de la operación y no como equivalente a la cuota total (Banco de la República, 2026).
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img32.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Referencia para operaciones de crédito
          p.mb-0 En Colombia, las tasas deben analizarse según la modalidad correspondiente y las certificaciones vigentes. La Superintendencia Financiera de Colombia certifica periódicamente el Interés Bancario Corriente para diferentes modalidades, incluidas las relacionadas con crédito productivo; por ello, debe verificarse la certificación aplicable a la fecha y al tipo de operación analizada (Superintendencia Financiera de Colombia, 2026c).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso ejemplifica el cálculo del interés periódico y el efecto que tendría posteriormente una reducción del saldo:
          .caja-1.mb-3(data-aos="fade-right")
            p #[b Ejemplo aplicado:] una unidad productiva solicita un microcrédito de #[b $4.000.000]. Para efectos del ejercicio, se establece una tasa periódica del #[b 1,5 % mensual], equivalente a #[b 0,015]. El interés correspondiente al primer periodo se determina así:
            h5.mb-0 Interés = $4.000.000 × 0,015
            h5 Interés = $60.000
            p.mb-0 Si posteriormente el saldo de capital se reduce, el interés del siguiente periodo deberá calcularse sobre el nuevo saldo, siempre que esta sea la metodología establecida para la operación. Así, puede distinguirse el costo financiero generado de la reducción efectiva de la deuda.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img33.png', alt='' style="width: 400px").m-auto
      p.mb-0 Al analizar un microcrédito, se debe verificar que la tasa corresponda a la periodicidad utilizada e identificar el saldo de capital sobre el cual se calculará el interés. La aplicación correcta de estas variables permite interpretar el costo financiero de cada periodo y evitar errores en los cálculos posteriores.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Cálculo de la cuota periódica	
      p.mb-5 El cálculo de la cuota permite establecer el valor que debe pagarse periódicamente para atender una obligación crediticia. Para comprender este valor, es necesario identificar las condiciones financieras de la operación, diferenciar los componentes de la cuota y relacionar el resultado con la capacidad económica del cliente.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los elementos esenciales permiten comprender cómo se determina e interpreta la cuota dentro de una operación de microcrédito:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img35.png', alt="" ).m-auto
              h4.text-center Datos para el cálculo
              .caja-5_p
                p.mb-0 Para calcular la cuota se requiere identificar el monto financiado, la tasa correspondiente al periodo de pago, el plazo, el número de cuotas y la periodicidad. Estas variables deben expresarse en periodos equivalentes antes de efectuar el cálculo.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img36.png', alt="" ).m-auto
              h4.text-center Composición de la cuota
              .caja-5_p
                p.mb-0 La cuota corresponde al pago periódico de la obligación y puede incluir intereses y amortización a capital. El interés representa el costo financiero, mientras que la amortización reduce el capital pendiente. Su distribución depende del sistema de amortización utilizado por la entidad.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img37.png', alt="" ).m-auto
              h4.text-center Interpretación de la cuota
              .caja-5_p
                p.mb-0 El valor de la cuota debe relacionarse con la capacidad económica del cliente y no interpretarse únicamente como un resultado matemático. Su análisis requiere considerar la tasa, el plazo y las demás condiciones de la obligación para valorar adecuadamente el compromiso financiero.
      p.mb-5 Para profundizar en el cálculo de la cuota periódica y la distribución del pago, se invita a consultar el siguiente documento:
      .caja-6.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img38.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Cálculo de la cuota periódica
            p.mb-0 Desarrolla el cálculo de la cuota constante mediante una fórmula de anualidad y determina los intereses, el abono a capital y el saldo pendiente.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Calculo_cuota_periodica.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Interpretación del plan de pagos	
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img39.png')})` }")
        .bloque-texto-g__texto.p-4
          p El plan de pagos organiza la evolución de una obligación durante el plazo acordado y permite identificar cómo se distribuyen los pagos entre intereses y capital. Su interpretación facilita reconocer el saldo pendiente después de cada periodo y comprender el comportamiento financiero del crédito según el sistema de amortización utilizado (Superintendencia Bancaria de Colombia, 2003).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos y distribución de la cuota en el plan de pagos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img40.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El plan de pagos organiza por periodos los componentes necesarios para hacer seguimiento a la obligación. Aunque su presentación puede variar entre entidades, permite relacionar el valor de cada pago con el saldo inicial, los intereses generados, el abono destinado a reducir el capital y el saldo resultante.
      p.mb-5 Cada elemento cumple una función específica para interpretar la evolución de la obligación durante el plazo establecido:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 N.º de cuota
                  p.mb-0 Identifica el orden de cada pago dentro del plazo y permite ubicar el periodo correspondiente de la obligación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Saldo inicial
                  p.mb-0 Corresponde al capital pendiente antes de efectuar el pago del periodo y sirve como base para determinar los intereses cuando estos se calculan sobre el saldo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interés
                  p.mb-0 Identifica la parte del pago correspondiente al costo financiero generado durante el periodo sobre el saldo de capital establecido para el cálculo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Abono a capital
                  p.mb-0 Corresponde a la parte de la cuota destinada a disminuir directamente la deuda y permite reconocer la reducción progresiva del capital pendiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valor de la cuota
                  p.mb-0 Representa el pago establecido para el periodo y permite identificar el compromiso periódico asumido durante la vigencia de la obligación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Saldo final
                  p.mb-0 Corresponde al capital pendiente después de aplicar el abono del periodo y facilita el seguimiento de la obligación a medida que se realizan los pagos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img46.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 En un sistema de cuota constante, el valor del pago puede mantenerse igual mientras cambia su distribución interna: al disminuir el saldo, pueden reducirse los intereses calculados sobre este y aumentar la proporción destinada a amortizar capital (Superintendencia Bancaria de Colombia, 2003).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lectura del saldo y utilidad para el análisis microfinanciero
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img47.png')})` }")
        .bloque-texto-g__texto.p-4
          p El saldo permite establecer cuánto capital permanece pendiente después de cada pago y hacer seguimiento a la obligación. Su evolución depende del monto financiado, la tasa, el plazo, los pagos realizados y el sistema de amortización; por ello, debe contrastarse con la información registrada por la entidad durante la vigencia del crédito.
      p.mb-5 El siguiente caso ejemplifica cómo cambia la distribución de la cuota y disminuye el saldo durante el plazo:
      .caja-7(data-aos="zoom-in").mb-5
        p #[b Ejemplo aplicado:] se considera un crédito con un monto financiado de #[b $3.000.000], una tasa periódica del #[b 1,5 % mensual], un plazo de #[b 12 meses] y una cuota aproximada de #[b $275.040]. Algunos periodos del plan de pagos se distribuyen de la siguiente manera:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Ejemplo parcial de un plan de pagos
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left N.º de cuota
                th.ajuste-border-tabla.texto-left Saldo inicial
                th.ajuste-border-tabla.texto-left Interés
                th.ajuste-border-tabla.texto-left Abono a capital
                th.ajuste-border-tabla.texto-left Valor de la cuota
                th.texto-left Saldo final
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 1
                td.ajuste-border-tabla.texto-left $3.000.000
                td.ajuste-border-tabla.texto-left $45.000
                td.ajuste-border-tabla.texto-left $230.040
                td.ajuste-border-tabla.texto-left $275.040
                td.texto-left $2.769.960
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold 2
                td.ajuste-border-tabla.texto-left $2.769.960
                td.ajuste-border-tabla.texto-left $41.549
                td.ajuste-border-tabla.texto-left $233.491
                td.ajuste-border-tabla.texto-left $275.040
                td.texto-left $2.536.469
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 3
                td.ajuste-border-tabla.texto-left $2.536.469
                td.ajuste-border-tabla.texto-left $38.047
                td.ajuste-border-tabla.texto-left $236.993
                td.ajuste-border-tabla.texto-left $275.040
                td.texto-left $2.299.476
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold 12
                td.ajuste-border-tabla.texto-left $270.975
                td.ajuste-border-tabla.texto-left $4.065
                td.ajuste-border-tabla.texto-left $270.975
                td.ajuste-border-tabla.texto-left $275.040
                td.texto-left $0 aprox.
        .caja-8(data-aos="zoom-in")
          p.mb-0 En el ejemplo, la cuota permanece aproximadamente constante, mientras cambia su composición. A medida que disminuye el saldo pendiente, el interés es menor y aumenta la parte destinada a reducir el capital, hasta alcanzar aproximadamente un saldo de cero al finalizar el plazo.
      p.mb-5 Antes de recomendar o interpretar una operación, se revisan las cuotas, los intereses, los abonos a capital y el saldo pendiente:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img48.png', alt="" ).m-auto
              h4.text-center Capacidad económica del cliente
              .caja-5_p
                p.mb-0 El plan de pagos permite anticipar el compromiso periódico y contrastarlo posteriormente con los ingresos, egresos y recursos disponibles del cliente. Que las condiciones del crédito sean matemáticamente correctas no garantiza, por sí solo, que la cuota sea adecuada para su situación económica.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img49.png', alt="" ).m-auto
              h4.text-center Seguimiento de la obligación
              .caja-5_p
                p.mb-0 La revisión periódica permite identificar cuánto capital permanece pendiente y cómo se aplican los pagos. Una mora, un pago diferente del previsto o una modificación de las condiciones puede alterar la evolución proyectada, por lo que el plan debe contrastarse con la información registrada por la entidad.
      p.mb-0 La interpretación conjunta de las variables financieras, los intereses, las cuotas y el plan de pagos permite comprender la estructura y evolución de la obligación. Esta base cuantitativa facilita posteriormente relacionar el compromiso periódico con la realidad económica del cliente.

</template>

<script>
export default {
  name: 'Tema1',
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
