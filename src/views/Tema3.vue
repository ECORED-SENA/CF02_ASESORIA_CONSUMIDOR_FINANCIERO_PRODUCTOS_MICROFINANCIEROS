<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Estados financieros y análisis del cliente
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis financiero permite organizar e interpretar la información económica de la microempresa para comprender su situación y sus resultados. Esta valoración se complementa con aspectos cualitativos relacionados con la trayectoria, el comportamiento del cliente, la estabilidad del negocio y las referencias, con el fin de contextualizar las cifras obtenidas durante el análisis.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Balance de la microempresa
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-3_p
            p.mb-0 El balance organiza los recursos de la microempresa, sus obligaciones pendientes y la participación económica del propietario en una fecha determinada. En el análisis microfinanciero, permite establecer su estructura patrimonial y, cuando no existen estados financieros formalmente preparados, puede reconstruirse con información razonable y disponible (Presidencia de la República de Colombia, 2015a).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos que conforman el balance
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El balance se estructura a partir de los activos, los pasivos y el patrimonio. Estos elementos permiten identificar los recursos asociados con la actividad, las obligaciones pendientes y la participación económica del propietario. Para establecer una relación coherente entre ellos, la información debe corresponder a una misma fecha de análisis. La relación entre los tres elementos se expresa mediante la siguiente igualdad:
          .caja-1.color-1.text-center(data-aos="fade-right")
            p.mb-0 #[b Activo = Pasivo + Patrimonio]
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img3.png', alt='' style="width: 500px").m-auto
      p.mb-5 Cada elemento representa una parte específica de la estructura patrimonial de la microempresa:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
              h4.text-center Activo
              .caja-5_p
                p.mb-0 Representa los recursos y bienes asociados con la actividad económica, como efectivo, cuentas por cobrar, inventarios, maquinaria, equipos y herramientas.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
              h4.text-center Pasivo
              .caja-5_p
                p.mb-0 Corresponde a las obligaciones pendientes con terceros, entre ellas créditos, cuentas por pagar a proveedores y otras deudas relacionadas con la actividad.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
              h4.text-center Patrimonio
              .caja-5_p
                p.mb-0 Representa la diferencia entre los activos y los pasivos y permite establecer los recursos propios acumulados en la actividad económica.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación y verificación de activos y pasivos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los activos corresponden a los recursos vinculados con el funcionamiento de la microempresa, mientras que los pasivos representan sus obligaciones con terceros. Su identificación y valoración razonable permiten establecer la estructura económica del negocio y requieren contrastar la información declarada con los soportes disponibles.
      p.mb-5 Los activos pueden organizarse de manera práctica según su disponibilidad o permanencia dentro de la actividad:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img8.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Disponible").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende el efectivo y los recursos existentes en cuentas asociadas con la actividad. Permite identificar aquellos recursos que tienen disponibilidad inmediata para la microempresa.
            .row(titulo="Cuentas por cobrar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden, por ejemplo, a ventas pendientes de recaudo. Su identificación permite reconocer recursos que la microempresa espera recibir y diferenciarlos de aquellos que ya se encuentran disponibles.
            .row(titulo="Inventarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen mercancías, materias primas o productos terminados vinculados con la operación y comercialización. Su valoración debe corresponder a existencias efectivamente disponibles y evitar la incorporación de mercancía inexistente, deteriorada o de valores que no puedan sustentarse.
            .row(titulo="Bienes utilizados en la operación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden maquinaria, equipos, herramientas, muebles o vehículos empleados para desarrollar la actividad productiva o comercial y que permanecen vinculados con el funcionamiento del negocio.
      p.mb-5 La identificación de los pasivos y la comprobación de la información complementan la valoración de los recursos de la microempresa:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img9.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Obligaciones pendientes
          p.mb-0 Los pasivos pueden originarse en créditos financieros, compras de mercancía a plazo, obligaciones con proveedores u otros compromisos del negocio. Para su análisis deben identificarse el saldo pendiente, el valor de las cuotas, su periodicidad y el plazo restante.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img10.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Verificación de la información
          p.mb-0 La información puede contrastarse mediante inventarios, facturas, documentos de propiedad, extractos, comprobantes, obligaciones financieras y entrevistas con el propietario. Esta comprobación permite evitar activos sobrevalorados y procurar que las obligaciones se registren por el saldo realmente pendiente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Patrimonio e interpretación del balance
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El patrimonio permite establecer el valor residual de los recursos del negocio después de descontar las obligaciones existentes. Aunque un patrimonio positivo indica que los activos superan los pasivos, este resultado debe interpretarse junto con otras condiciones económicas, pues los activos no necesariamente se convierten con facilidad en efectivo (Presidencia de la República de Colombia, 2015a). La relación para determinar el patrimonio se expresa de la siguiente manera:
          .caja-1.color-1.text-center(data-aos="fade-right")
            p.mb-0 #[b Patrimonio = Activo − Pasivo]
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 500px").m-auto
      p.mb-5 El siguiente caso permite comprobar la relación entre los activos, los pasivos y el patrimonio:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-7(data-aos="zoom-in")
            .caja-8(data-aos="zoom-in").mb-3
              p.mb-0 #[b Ejemplo aplicado:] una microempresa dedicada a la comercialización de productos presenta la siguiente información:
            .row.justify-content-center.mb-3
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 9.
                  span Balance de una microempresa comercial
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Activos
                        td.texto-left 
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo disponible
                        td.texto-left $1.200.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                        td.texto-left $800.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                        td.texto-left $4.000.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Equipos y mobiliario
                        td.texto-left $3.000.000
                      tr
                        td.ajuste-border-tabla.texto-left Total de activos
                        td.texto-left.text-weight-bold $9.000.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Pasivos
                        td.texto-left 
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Crédito vigente
                        td.texto-left $2.000.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por pagar a proveedores
                        td.texto-left $1.500.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total de pasivos
                        td.texto-left.text-weight-bold $3.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
                        td.texto-left.text-weight-bold $5.500.000
            .caja-8(data-aos="zoom-in")
              p Los valores permiten comprobar las siguientes operaciones:
              p #[b Activos:] $1.200.000 + $800.000 + $4.000.000 + $3.000.000 = #[b $9.000.000]
              p #[b Pasivos:] $2.000.000 + $1.500.000 = #[b $3.500.000]
              p #[b Patrimonio:] $9.000.000 − $3.500.000 = #[b $5.500.000]
              p.mb-0 Por tanto, se cumple la igualdad: #[b $9.000.000 = $3.500.000 + $5.500.000]
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img12.png')})` }")
        .bloque-texto-g__texto.p-4
          p El balance permite establecer que la microempresa posee activos por #[b $9.000.000], pasivos por #[b $3.500.000] y un patrimonio de #[b $5.500.000]. Sin embargo, ni el patrimonio ni el valor de los activos demuestran por sí solos capacidad para atender una cuota, porque esta información debe relacionarse con la disponibilidad de efectivo y los resultados generados por la actividad.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Estado de pérdidas y ganancias	
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El estado de pérdidas y ganancias, también denominado estado de resultados, organiza los ingresos, costos y gastos de la microempresa durante un periodo para determinar si generó utilidad o pérdida. En el análisis microfinanciero, esta información permite comprender el desempeño económico de la actividad y complementar la evaluación del cliente (Presidencia de la República de Colombia, 2015a).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img13.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos del estado de pérdidas y ganancias
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Para determinar el resultado de la actividad, es necesario identificar los ingresos correspondientes al periodo y diferenciar los costos directamente relacionados con los bienes o servicios de los gastos requeridos para el funcionamiento general. Esta organización permite establecer progresivamente la utilidad bruta y el resultado final de la microempresa. El resultado del periodo se determina mediante una secuencia que relaciona los principales componentes de la actividad económica:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar los ingresos
                p.mb-0 Se reconocen los recursos generados durante el periodo por ventas de mercancías o productos, prestación de servicios u otras actividades ordinarias del negocio. La información debe guardar coherencia con las características y el comportamiento de la actividad (Presidencia de la República de Colombia, 2015a).
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Descontar los costos y determinar la utilidad bruta
                p Se identifican los recursos directamente asociados con los bienes vendidos o servicios prestados, como mercancías, materias primas, materiales o insumos. La diferencia entre los ingresos y estos costos permite establecer la utilidad bruta:
                p.mb-0 #[b Utilidad bruta = ingresos − costos]
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Descontar los gastos de funcionamiento
                p.mb-0 Después de establecer la utilidad bruta, se reconocen los gastos necesarios para mantener el negocio en funcionamiento, como arrendamiento, servicios públicos, transporte, mantenimiento, comunicaciones u otros pagos operativos que no forman parte directamente del costo del producto o servicio (DANE, s. f.).
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img17.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Determinar la utilidad o pérdida
                p El resultado se obtiene después de descontar de los ingresos los costos y gastos correspondientes al periodo. Un resultado positivo representa utilidad; si los costos y gastos superan los ingresos, se presenta una pérdida.
                p.mb-0 #[b Resultado del periodo = ingresos − costos − gastos]
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cálculo del resultado del periodo
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img18.png')})` }")
        .bloque-texto-g__texto.p-4
          p El cálculo del resultado requiere que los ingresos, costos y gastos correspondan al mismo periodo y se encuentren correctamente diferenciados. Esta organización permite determinar cuánto permanece después de cubrir los recursos directamente relacionados con la actividad y los gastos necesarios para mantener el funcionamiento de la microempresa.
      p.mb-5 El siguiente caso permite establecer progresivamente la utilidad obtenida durante un periodo:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-7(data-aos="zoom-in")
            .caja-8(data-aos="zoom-in").mb-3
              p.mb-0 #[b Ejemplo aplicado:] una microempresa dedicada a la comercialización de productos presenta la siguiente información mensual:
            .row.justify-content-center.mb-3
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 10.
                  span Estado de pérdidas y ganancias de una microempresa comercial
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor mensual
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Ventas del mes
                        td.texto-left $8.000.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Costo de mercancía vendida
                        td.texto-left $4.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad bruta
                        td.texto-left.text-weight-bold $3.500.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Arrendamiento
                        td.texto-left $700.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Servicios públicos
                        td.texto-left $300.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Transporte
                        td.texto-left $250.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Otros gastos operativos
                        td.texto-left $350.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total de gastos
                        td.texto-left.text-weight-bold  $1.600.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad del periodo
                        td.texto-left.text-weight-bold  $1.900.000
            .caja-8(data-aos="zoom-in")
              p Los resultados se comprueban mediante las siguientes operaciones:
              h5.mb-0 $8.000.000 − $4.500.000 = $3.500.000
              h5.mb-0 $3.500.000 − $1.600.000 = $1.900.000
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interpretación del resultado y relación con otros análisis
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una utilidad positiva indica que los ingresos del periodo superaron los costos y gastos registrados, pero no equivale automáticamente a efectivo disponible ni demuestra capacidad de pago. De igual manera, una pérdida ocasional requiere analizar sus causas y, cuando exista información suficiente, contrastar el resultado con otros periodos para determinar su comportamiento.
      p.mb-5 Cada herramienta aporta información diferente que debe interpretarse de manera complementaria:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img19.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Balance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta los recursos, las obligaciones y el patrimonio de la microempresa en una fecha determinada, por lo que permite reconocer su estructura patrimonial.
            .row(titulo="Estado de resultados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si la actividad generó utilidad o pérdida durante un periodo a partir de los ingresos, costos y gastos correspondientes.
            .row(titulo="Flujo de caja").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar las entradas y salidas efectivas de dinero. Por ello, una microempresa puede generar utilidad y disponer de poco efectivo, por ejemplo, cuando parte de sus ventas permanece pendiente de cobro (Presidencia de la República de Colombia, 2015a).
      .caja-2(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El estado de pérdidas y ganancias permite establecer el resultado económico de la actividad, pero su interpretación debe relacionarse con la estructura patrimonial, la disponibilidad de efectivo y la capacidad de pago. Esta integración evita valorar aisladamente la utilidad o pérdida y proporciona una base para continuar el análisis financiero de la microempresa.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img20.png', alt='' style="width: 500px").m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Indicadores financieros aplicados al microcrédito	
      p.mb-5 Los indicadores financieros relacionan cifras del balance y del estado de resultados para facilitar la interpretación de la situación económica de la microempresa. En el análisis del microcrédito, aportan información sobre liquidez, endeudamiento y rentabilidad, cuyos resultados deben valorarse conjuntamente y según las características de la actividad económica (Superintendencia Financiera de Colombia, 2012). Los principales indicadores aportan información complementaria para interpretar la situación financiera de la microempresa:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Liquidez y endeudamiento
                  p La liquidez permite analizar la capacidad para atender obligaciones de corto plazo con recursos del mismo horizonte. La fórmula es:
                  h5 Liquidez corriente = Activo corriente / Pasivo corriente
                  p El endeudamiento indica qué proporción de los activos se encuentra financiada mediante obligaciones con terceros y aporta información sobre la estructura financiera (Superintendencia Financiera de Colombia, 2012). La fórmula es:
                  p.mb-0 #[b Endeudamiento = Pasivo total / Activo total × 100]
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Margen neto y rentabilidad sobre activos
                  p El margen neto relaciona la utilidad obtenida con las ventas y permite establecer qué proporción permanece después de cubrir costos y gastos. La fórmula es:
                  h5 Margen neto = Utilidad neta / Ventas × 100
                  p La rentabilidad sobre activos relaciona la utilidad con los recursos económicos utilizados por la microempresa (Superintendencia Financiera de Colombia, 2012). La fórmula es:
                  p.mb-0 #[b Rentabilidad sobre activos = Utilidad neta / Activo total × 100]
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Lectura conjunta
                  p.mb-0 Los indicadores deben interpretarse conjuntamente y según las características de la actividad. Sus resultados se relacionan con el flujo de caja y la capacidad de pago, porque una cifra aislada no determina por sí misma la decisión sobre una solicitud de microcrédito.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Para profundizar en el cálculo y la interpretación conjunta de los indicadores de liquidez, endeudamiento y rentabilidad, se invita a consultar el siguiente anexo:
      .caja-6.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img38.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Indicadores financieros aplicados al microcrédito
            p.mb-0 Este anexo desarrolla las fórmulas y los ejercicios de liquidez corriente, endeudamiento, margen neto y rentabilidad sobre activos. Explica cómo interpretar conjuntamente sus resultados y relacionarlos con el flujo de caja, la capacidad de pago y las condiciones de la microempresa durante el análisis del microcrédito.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Indicadores_financieros_microcredito.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Análisis cuantitativo del cliente	
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img24.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis cuantitativo integra la información numérica obtenida sobre la actividad económica, la situación patrimonial, las obligaciones y la disponibilidad de recursos del cliente. Su finalidad es comprobar la coherencia de las cifras y establecer cómo las condiciones económicas identificadas se relacionan con el crédito solicitado (Superintendencia Financiera de Colombia, 2018).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración de la información financiera
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El análisis cuantitativo reúne el balance, el estado de pérdidas y ganancias, el flujo de caja, los indicadores financieros y las obligaciones vigentes. Su integración permite interpretar conjuntamente la información obtenida; no constituye un nuevo estado financiero.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img25.png', alt='' style="width: 500px").m-auto
      p.mb-5 Estos elementos aportan información complementaria para el análisis:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 11.
        span Información para el análisis cuantitativo del cliente
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Elemento
              th.ajuste-border-tabla.texto-left Información que aporta
              th.texto-left Utilidad en el análisis
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos
              td.ajuste-border-tabla.texto-left Recursos generados por la actividad.
              td.texto-left Permiten conocer la capacidad de generación de recursos.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos
              td.ajuste-border-tabla.texto-left Recursos utilizados para desarrollar y sostener la operación.
              td.texto-left Permiten determinar cuánto de los ingresos permanece disponible.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Flujo de caja
              td.ajuste-border-tabla.texto-left Entradas y salidas efectivas de dinero.
              td.texto-left Permite identificar la disponibilidad de efectivo durante el periodo.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Activos
              td.ajuste-border-tabla.texto-left Recursos económicos vinculados con la actividad.
              td.texto-left Facilitan conocer la estructura y respaldo económico del negocio.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Pasivos
              td.ajuste-border-tabla.texto-left Obligaciones existentes con terceros.
              td.texto-left Permiten establecer el nivel de compromisos financieros.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
              td.ajuste-border-tabla.texto-left Diferencia entre activos y pasivos.
              td.texto-left Permite observar la participación económica propia en la actividad.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad
              td.ajuste-border-tabla.texto-left Resultado después de descontar costos y gastos.
              td.texto-left Permite valorar el desempeño económico del negocio.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Cuotas vigentes
              td.ajuste-border-tabla.texto-left Pagos correspondientes a obligaciones actuales.
              td.texto-left Permiten medir la presión de las deudas existentes sobre los recursos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Nueva cuota
              td.ajuste-border-tabla.texto-left Pago proyectado del crédito solicitado.
              td.texto-left Permite establecer su impacto sobre la disponibilidad económica.
      p.mb-5 Antes de interpretar los resultados, se comprueban estos aspectos:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img26.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Periodos comparables
          p.mb-0 Antes de calcular, las cifras deben referirse al mismo periodo: las ventas mensuales no se comparan con gastos anuales sin convertirlos. La EMICRON distingue costos mensuales y anuales, además de datos de ventas e ingresos (DANE, 2023).
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img27.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Información verificable
          p.mb-0 Los datos del propietario se contrastan, según los procedimientos institucionales, con registros, documentos, inventarios, movimientos financieros o visitas. La EMICRON obtiene por entrevista directa información sobre ingresos, costos, gastos, activos e inclusión financiera; relacionar estas dimensiones ayuda a representar razonablemente el micronegocio (DANE, 2023).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis de la generación de recursos
      p.mb-5 Para establecer el resultado de la actividad, se comparan los ingresos del periodo con los costos de producción o comercialización y los demás gastos operativos. El excedente obtenido aún no representa capacidad de pago, pues faltan por considerar las necesidades familiares y las obligaciones financieras.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img28.png', alt='' style="width: 400px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente ejemplo identifica el resultado previo a esos compromisos:
          .caja-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p.mb-0 Ingresos mensuales: #[b $9.000.000]
            p Costos y gastos: #[b $6.300.000]
            h5 $9.000.000 − $6.300.000 = $2.700.000
            p.mb-0 El resultado de la actividad es de #[b $2.700.000] antes de considerar las necesidades familiares y las obligaciones financieras; por tanto, no corresponde directamente a una capacidad definitiva de pago.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis de las obligaciones existentes
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Las obligaciones vigentes comprometen parte de los recursos disponibles. De cada una se identifican el saldo pendiente, la cuota periódica y, cuando corresponda, el plazo restante. La evaluación de capacidad de pago considera ese endeudamiento antes de incorporar una nueva cuota (Superintendencia Financiera de Colombia, 2018).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img29.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img30.png', alt='' style="width: 420px").m-auto
        .col-xl
          p El siguiente ejemplo establece el efecto de las cuotas sobre la disponibilidad:
          .caja-1.color-1(data-aos="fade-left")
            p #[b Ejemplo aplicado:] si después de cubrir los costos, gastos y necesidades familiares una persona dispone de $1.200.000 mensuales y mantiene cuotas vigentes por $350.000, la disponibilidad antes de asumir el nuevo crédito 
            h5  $1.200.000 − $350.000 = $850.000
            p Si la nueva cuota proyectada asciende a $450.000, posteriormente quedarían:
            h5.mb-0 $850.000 − $450.000 = $400.000
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La nueva obligación reduciría la disponibilidad a #[b $400.000]. Este resultado permite establecer su efecto sobre los recursos, pero debe complementarse con la estabilidad de los ingresos y las políticas de análisis de la organización (Superintendencia Financiera de Colombia, 2018).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis integrado
      p.mb-5 El análisis integrado relaciona la evolución de las cifras, su coherencia con la actividad y el efecto de una nueva cuota. Estas comprobaciones dan contexto a los cálculos y preparan la valoración de la solicitud.
      .bg-1
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 La lectura de los resultados considera estas dos comprobaciones:
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-5.h-100.color-2
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img31.png', alt="" ).m-auto
                  h4.text-center Comparación de periodos
                  .caja-5_p
                    p.mb-0 Si existe información suficiente, se contrastan varios periodos para identificar tendencias. Un aumento sostenido de ventas puede indicar una evolución favorable; reducciones reiteradas de ingresos o mayores costos requieren revisar sus causas. Un diciembre excepcional no representa por sí solo la capacidad económica habitual del negocio.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-5.h-100.color-2
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img32.png', alt="" ).m-auto
                  h4.text-center Coherencia entre las cifras
                  .caja-5_p
                    p.mb-0 Se comparan los datos declarados con los estados financieros reconstruidos, los indicadores y otras evidencias. Ventas elevadas con inventarios mínimos, poca rotación y movimientos reducidos de efectivo, o gastos inusualmente bajos para la actividad, requieren verificar posibles datos incompletos. El propósito es representar razonablemente el funcionamiento del negocio.
          p.mb-5 El siguiente caso integra diferentes variables cuantitativas para establecer su relación dentro del análisis:
          .row.justify-content-center.mb-5
            .col-xl-10
              .caja-7(data-aos="zoom-in")
                .caja-8(data-aos="zoom-in").mb-3
                  p.mb-0 #[b Ejemplo aplicado:] una persona propietaria de un micronegocio presenta la siguiente información económica y financiera:
                .row.justify-content-center.mb-3
                  .col-xl-8
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Tabla 12.
                      span Información integrada para el análisis cuantitativo del cliente
                    .tabla-a(data-aos="zoom-in")
                      table
                        thead
                          tr
                            th.ajuste-border-tabla.texto-left Concepto
                            th.texto-left Valor
                        tbody
                          tr
                            td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos mensuales
                            td.texto-left $8.500.000
                          tr.ajuste-color-tabla
                            td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos del negocio
                            td.texto-left $5.300.000
                          tr
                            td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad estimada
                            td.texto-left $3.200.000
                          tr.ajuste-color-tabla
                            td.ajuste-border-tabla.texto-left.text-weight-bold Egresos de la unidad familiar
                            td.texto-left $1.500.000
                          tr
                            td.ajuste-border-tabla.texto-left.text-weight-bold Cuotas de obligaciones vigentes
                            td.texto-left $400.000
                          tr.ajuste-color-tabla
                            td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad antes del nuevo crédito
                            td.texto-left $1.300.000
                          tr
                            td.ajuste-border-tabla.texto-left.text-weight-bold Nueva cuota proyectada
                            td.texto-left $550.000
                          tr.ajuste-color-tabla
                            td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad posterior
                            td.texto-left $750.000
                          tr
                            td.ajuste-border-tabla.texto-left.text-weight-bold Activos totales
                            td.texto-left $12.000.000
                          tr.ajuste-color-tabla
                            td.ajuste-border-tabla.texto-left.text-weight-bold Pasivos totales
                            td.texto-left $4.200.000
                .caja-8(data-aos="zoom-in")
                  p.mb-0 Los valores mantienen coherencia en las operaciones principales: #[b $8.500.000 − $5.300.000 = $3.200.000]; luego, #[b $3.200.000 − $1.500.000 − $400.000 = $1.300.000] y, al incorporar la nueva cuota, #[b $1.300.000 − $550.000 = $750.000].
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img33.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las cifras indican que el negocio genera un resultado positivo, mantiene obligaciones previas y reduciría su disponibilidad al asumir la nueva cuota. La información sobre activos y pasivos complementa la lectura del cliente. Estos resultados todavía no constituyen por sí solos una decisión definitiva sobre la viabilidad del crédito.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso del análisis cuantitativo en la evaluación crediticia
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El análisis cuantitativo aporta información sobre la capacidad económica, el endeudamiento y la disponibilidad de recursos. Estos resultados apoyan la evaluación del crédito junto con las características del deudor y las condiciones de la operación; por sí solos no determinan la decisión (Superintendencia Financiera de Colombia, 2018).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img34.png', alt='' style="width: 500px").m-auto
      p.mb-5 La información cuantitativa se utiliza en la evaluación crediticia de las siguientes maneras:
      .tarjeta--container.row.justify-content-center.mb-0.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img35.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Análisis cuantitativo y decisión crediticia
          p.mb-0 La evaluación considera las fuentes de pago y las garantías, además de las condiciones financieras de la operación. Las cifras forman parte de esa valoración integral y no deben emplearse de manera aislada para decidir sobre la solicitud.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img36.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Aplicación práctica
          p.mb-0 Se integran ingresos, costos, gastos, flujo de caja, activos, pasivos, patrimonio, obligaciones vigentes e indicadores financieros. Luego se comparan periodos, se verifica la coherencia y se calcula el efecto de la nueva cuota. El análisis se complementa con información cualitativa antes de determinar la viabilidad del crédito.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Análisis cualitativo del cliente
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img37.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis cualitativo complementa la información financiera mediante aspectos relacionados con el cliente y el funcionamiento de su actividad económica. Su finalidad es aportar elementos sobre trayectoria, gestión, estabilidad y comportamiento que permitan contextualizar los resultados cuantitativos y contribuir a una valoración integral sustentada en información pertinente y verificable (Superintendencia Financiera de Colombia, 2026a).
      p.mb-5 Se invita a reproducir el pódcast «Análisis cualitativo del cliente» para profundizar en la trayectoria, gestión y estabilidad del negocio, el comportamiento frente a los compromisos, las referencias, la visita y la situación familiar, y comprender cómo esta información complementa los resultados financieros:
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-10(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img38.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Análisis cualitativo del cliente&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img39.png" style="max-width: 510px").m-auto
      p.mb-0 El análisis cuantitativo y cualitativo proporciona información complementaria para avanzar hacia una evaluación integral de la operación crediticia.

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/audio-ej.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
