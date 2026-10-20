<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Ingresos, egresos, flujo de caja y capacidad económica
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis de la viabilidad de un microcrédito requiere relacionar los recursos económicos generados por la actividad productiva y la unidad familiar con las obligaciones que debe atender el cliente. Esta información permite comprender su dinámica económica y proporciona una base para determinar posteriormente la disponibilidad de recursos frente al compromiso financiero asumido.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Ingresos de la microempresa	
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los ingresos son los recursos que recibe una microempresa por la venta de bienes, la prestación de servicios u otras actividades. Identificarlos permite analizar su dinámica económica. La Encuesta de Micronegocios (EMICRON) del DANE estudia ventas e ingresos, costos, gastos, activos e inclusión financiera de estas unidades económicas (Departamento Administrativo Nacional de Estadística [DANE], s. f.).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación y comportamiento de los ingresos
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El análisis de los ingresos requiere establecer su procedencia, frecuencia y comportamiento durante diferentes periodos. Algunas actividades generan recursos diariamente, mientras otras dependen de pedidos, temporadas o ciclos productivos; por ello, la información debe interpretarse según la dinámica real del negocio, sin asumir que todos los ingresos se generan uniformemente.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img3.png', alt='' style="width: 500px").m-auto
      p.mb-5 Para caracterizar los ingresos de la microempresa, se consideran los siguientes elementos:
      .row.justify-content-center.mb-4
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img4.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Fuente del ingreso
            p.mb-0.text-center Identifica la actividad que origina la entrada de dinero y permite establecer de dónde provienen los recursos obtenidos por el negocio.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img5.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Valor de las ventas
            p.mb-0.text-center Corresponde a los recursos obtenidos por la comercialización de bienes o servicios y permite estimar el nivel de actividad económica de la microempresa.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img6.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Periodicidad
            p.mb-0.text-center Indica la frecuencia con la que se reciben los recursos y permite organizarlos dentro del periodo establecido para realizar el análisis.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img7.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Estacionalidad
            p.mb-0.text-center Identifica variaciones ocasionadas por temporadas, ciclos o fechas específicas y evita interpretar un periodo excepcional como comportamiento permanente de la actividad.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img8.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Forma de pago
            p.mb-0.text-center Identifica el medio mediante el cual se reciben los recursos y facilita verificar valores recibidos en efectivo, mediante transferencias u otros medios.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img9.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Diversificación
            p.mb-0.text-center Permite establecer si existen una o varias fuentes de ingreso y reconocer el grado de dependencia del negocio respecto de una actividad o cliente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre ventas, ingresos y medios de pago
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img40.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Según la actividad, los ingresos pueden proceder de la venta de productos, la comercialización de mercancías, la prestación de servicios, las comisiones o las actividades agropecuarias (DANE, s. f.). Para evitar duplicidades, debe distinguirse su origen económico del medio utilizado para recibirlos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img10.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La diferencia entre el origen del ingreso y el medio de pago puede reconocerse en la siguiente situación:
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] Un comerciante registra #[b ventas mensuales por $5.000.000], dentro de las cuales se incluyen #[b $300.000 recibidos mediante transferencia]. Los $300.000 no constituyen un ingreso adicional y, por tanto, #[b no deben sumarse nuevamente] a los $5.000.000. La transferencia corresponde únicamente al medio utilizado para recibir una parte de las ventas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Determinación y verificación del ingreso mensual
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p Para comparar información económica correspondiente a diferentes momentos, los ingresos deben organizarse en un periodo común. Cuando presentan variaciones significativas, temporadas altas o ciclos productivos, es necesario considerar varios periodos para evitar que un mes excepcional se interprete como el comportamiento habitual de la actividad.
      p.mb-5 El comportamiento de varios periodos permite establecer una referencia mensual inicial de las ventas de la actividad:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-7(data-aos="zoom-in")
            .caja-8(data-aos="zoom-in").mb-3
              p.mb-0 #[b Ejemplo aplicado:] una pequeña panadería registra las ventas correspondientes a los últimos tres meses:
            .row.justify-content-center.mb-3
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 4.
                  span Ventas mensuales de una pequeña panadería
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Periodo
                        th.texto-left Ventas registradas
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Mes 1
                        td.texto-left $5.200.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Mes 2
                        td.texto-left $5.600.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Mes 3
                        td.texto-left $5.400.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Promedio mensual
                        td.texto-left.text-weight-bold $5.400.000
            .caja-8(data-aos="zoom-in")
              p.mb-0 El promedio de ventas mensuales corresponde a #[b $5.400.000] y constituye una referencia inicial del comportamiento de la actividad. Sin embargo, este valor todavía no representa el dinero disponible para atender una cuota, pues corresponde al volumen de ventas y no al recurso que finalmente permanece disponible.
      p.mb-5 La estimación de los ingresos debe complementarse con información que permita establecer la consistencia de los valores reportados:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
              h4.text-center Soportes disponibles
              .caja-5_p
                p.mb-0 La información suministrada por el cliente puede contrastarse, según las características del negocio y los procedimientos de la organización, con registros de ventas, facturas, movimientos de cuentas, comprobantes, inventarios, pedidos, visitas al establecimiento u otros soportes pertinentes.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img13.png', alt="" ).m-auto
              h4.text-center Reconstrucción de la actividad
              .caja-5_p
                p.mb-0 Cuando no existe contabilidad estructurada, la actividad económica puede reconstruirse razonablemente mediante diferentes fuentes. La información proporcionada directamente por quien conoce la operación se complementa con las verificaciones disponibles para establecer su consistencia, sin que la ausencia de registros formales determine por sí sola el resultado del análisis.
      p.mb-0 La identificación de las fuentes, el comportamiento y la frecuencia de los ingresos, junto con su organización en periodos comparables y su verificación, permite obtener una estimación razonable de los recursos generados por la microempresa y continuar con el análisis de su dinámica económica.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Costos y egresos de la microempresa	
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img14.png')})` }")
        .bloque-texto-g__texto.p-4
          p Analizar costos y egresos permite identificar recursos destinados a la operación y estimar la disponibilidad preliminar frente a los ingresos. La Encuesta de Micronegocios (EMICRON) del DANE incluye un módulo de costos, gastos y activos con conceptos de actividades comerciales, de servicios, agrícolas, pecuarias y extractivas (DANE, s. f.).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de costos y egresos
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Para el análisis microfinanciero, es necesario diferenciar los recursos directamente relacionados con la producción o comercialización de aquellos pagos requeridos para mantener el funcionamiento general del negocio. Esta separación permite comprender el destino de los ingresos y evita considerar como disponibles recursos que deben cubrir compromisos propios de la operación.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los principales conceptos se identifican según las necesidades y características particulares de cada actividad:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mercancía para la venta
                  p.mb-0.text-center Incluye los productos adquiridos para su comercialización y permite mantener disponible el inventario que el negocio ofrece a sus clientes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Materias primas e insumos
                  p.mb-0.text-center Comprende elementos como harina, telas, madera, empaques o ingredientes, utilizados directamente en la elaboración de bienes o en la prestación de servicios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mano de obra
                  p.mb-0.text-center Corresponde a los pagos realizados a las personas que participan en la actividad y apoyan la producción, comercialización o prestación del servicio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Arrendamiento
                  p.mb-0.text-center Corresponde al pago del local o espacio donde funciona el negocio y permite disponer del lugar requerido para desarrollar la actividad económica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Servicios públicos
                  p.mb-0.text-center Incluye pagos de energía, agua, gas, telefonía o internet necesarios para facilitar el funcionamiento operativo de la microempresa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Transporte
                  p.mb-0.text-center Comprende los pagos asociados al desplazamiento de mercancías, insumos o productos y permite movilizar los recursos necesarios para desarrollar la actividad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mantenimiento
                  p.mb-0.text-center Incluye la reparación de equipos, herramientas o instalaciones y contribuye a conservar los recursos utilizados durante la operación del negocio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Otros gastos operativos
                  p.mb-0.text-center Comprende conceptos como papelería, aseo, comisiones u otros pagos recurrentes que responden a necesidades complementarias del funcionamiento de la actividad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comportamiento y periodicidad de los egresos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img25.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los costos y egresos se comportan de manera distinta según el nivel de actividad. Algunos aumentan o disminuyen con la producción o las ventas, mientras otros permanecen relativamente estables durante un periodo. Identificar esa variación permite anticipar cómo cambia la disponibilidad de recursos según el funcionamiento real del negocio.
      p.mb-5 El comportamiento y la frecuencia de las salidas permiten organizarlas adecuadamente para el análisis económico:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img26.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Costos variables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Algunos costos varían de acuerdo con el volumen de producción o comercialización. Por ejemplo, un aumento en las unidades vendidas puede requerir mayores compras de mercancías, materias primas o empaques, según las características particulares del negocio.
            .row(titulo="Costos de comportamiento más estable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Algunos pagos pueden mantenerse durante un periodo aunque las ventas presenten variaciones, como puede ocurrir con el arrendamiento. Esta distinción no debe aplicarse rígidamente ni determinarse únicamente por el nombre del concepto, pues su comportamiento depende de cada actividad.
            .row(titulo="Periodicidad de los egresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los egresos pueden ser diarios, semanales, mensuales o ligados a un ciclo productivo. La EMICRON del DANE diferencia costos y gastos mensuales (DANE, s. f.). Para compararlos con los ingresos, se consideran todas las compras semanales de insumos durante el mes; los pagos menos frecuentes se ubican en los periodos en que afectan la disponibilidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estimación y verificación de la disponibilidad preliminar
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img27.png')})` }")
        .bloque-texto-g__texto.p-4
          p La comparación entre los ingresos y las salidas asociadas al funcionamiento de la microempresa permite obtener una primera estimación de los recursos que permanecen después de atender los conceptos identificados. Este resultado debe interpretarse como una referencia preliminar y no como una determinación definitiva de los recursos destinados a una obligación crediticia.
      p.mb-5 El siguiente caso permite establecer la disponibilidad preliminar a partir de los ingresos y egresos mensuales identificados:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-7(data-aos="zoom-in")
            .caja-8(data-aos="zoom-in").mb-3
              p.mb-0 #[b Ejemplo aplicado:] una pequeña unidad productiva dedicada a la elaboración de alimentos registra ingresos promedio mensuales de #[b $6.500.000] y presenta los siguientes costos y egresos:
            .row.justify-content-center.mb-3
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 5.
                  span Costos y egresos mensuales de una unidad productiva de alimentos
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor mensual
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Materias primas e insumos
                        td.texto-left $2.400.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Arrendamiento
                        td.texto-left $700.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Servicios públicos
                        td.texto-left $350.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Transporte
                        td.texto-left $300.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Mano de obra
                        td.texto-left $900.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Otros gastos operativos
                        td.texto-left $250.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total
                        td.texto-left.text-weight-bold $4.900.000
            .caja-8(data-aos="zoom-in")
              p A partir de esta información, se establece inicialmente la diferencia entre los ingresos y las salidas relacionadas con el negocio:
              h5 $6.500.000 − $4.900.000 = $1.600.000
              p.mb-0 Los #[b $1.600.000] representan una disponibilidad preliminar de la actividad después de cubrir los conceptos identificados. Este valor no constituye una capacidad definitiva de pago, pues todavía deben considerarse las necesidades de la unidad familiar, las demás obligaciones y el comportamiento del flujo de caja.
      p.mb-5 La estimación debe complementarse con la verificación de las salidas y su adecuada separación según el ámbito al que pertenecen:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img28.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Verificación de costos y egresos
          p.mb-0 Los valores informados pueden contrastarse, según la naturaleza de la actividad, con compras de mercancía, facturas, recibos, registros de proveedores, pagos de arrendamiento, servicios públicos, movimientos financieros, inventarios u otras evidencias disponibles.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img29.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Separación entre negocio y unidad familiar
          p.mb-0 Los costos y egresos propios del negocio deben diferenciarse de los gastos personales o familiares del propietario, especialmente cuando los recursos se administran conjuntamente. Esta separación evita atribuir a la actividad salidas que corresponden a la economía del hogar.
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La EMICRON registra por separado costos y gastos; analizarlos junto con las ventas o ingresos permite comprender mejor el funcionamiento económico del micronegocio (DANE, s. f.). Tras verificar sus valores y llevar sus periodicidades a un periodo común, se estima la disponibilidad preliminar, que posteriormente se integra con los egresos familiares y el flujo de caja.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Ingresos y egresos de la unidad familiar	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img30.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis de la unidad familiar permite identificar los recursos que recibe el hogar y los egresos que debe atender. En los micronegocios, esta revisión es relevante porque los recursos generados por la actividad pueden contribuir al sostenimiento familiar y, en algunos casos, administrarse conjuntamente con los recursos personales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ingresos y egresos familiares
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img31.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-3_p
            p.mb-0 El análisis de la economía familiar requiere identificar tanto los recursos recibidos por los integrantes del hogar como los pagos destinados a cubrir sus necesidades. Para representar razonablemente su situación económica, deben considerarse el origen y comportamiento de los ingresos, así como la composición y las condiciones reales de los egresos.
      p.mb-5 Los recursos y compromisos del hogar pueden organizarse a partir de las siguientes categorías:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img32.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Ingresos de la unidad familiar
          p.mb-0 Pueden provenir de aportes de la microempresa para el sostenimiento familiar, ingresos laborales, trabajos independientes, pensiones, arrendamientos, transferencias u otras fuentes. Para su análisis, se requiere comprobar su origen, valor, periodicidad, continuidad y comportamiento, según corresponda.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img33.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Egresos de la unidad familiar
          p.mb-0 Comprenden alimentación, vivienda, servicios públicos, educación, salud, transporte, obligaciones financieras y otros gastos familiares, como comunicaciones, cuidado personal o recreación. Deben estimarse según la composición y las condiciones reales del hogar, considerando que pueden existir pagos periódicos, recurrentes o extraordinarios.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Separación entre los recursos del negocio y del hogar
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img34.png')})` }")
        .bloque-texto-g__texto.p-4
          p La separación entre los recursos de la microempresa y los del hogar permite representar adecuadamente la situación económica del cliente. Los costos propios de la actividad deben diferenciarse de los gastos familiares y, cuando los recursos del negocio se destinan al sostenimiento del hogar, debe identificarse su origen para evitar duplicidades (Banca de las Oportunidades & Fundación Sparkassenstiftung Alemana, 2025).
      p.mb-5 La correcta asignación de los recursos permite evitar el doble conteo y reconocer su destino dentro de la economía del cliente:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar el origen
                p.mb-0 Se establece si el recurso procede de la actividad económica o de una fuente independiente del hogar, con el propósito de reconocer de dónde proviene realmente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img35.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img36.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar el destino
                p.mb-0 Los pagos de mercancías, materias primas o arrendamiento del establecimiento corresponden al negocio; en cambio, la alimentación, la vivienda y los gastos escolares pertenecen a la unidad familiar.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Evitar el doble conteo
                p.mb-0 Si el propietario retira #[b $1.500.000 mensuales del negocio] para atender gastos del hogar, ese valor no debe registrarse nuevamente como una fuente independiente de los recursos generados por la microempresa, pues corresponde a un traslado de recursos de la actividad hacia la familia.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img37.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Disponibilidad familiar y relación con la microempresa
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Una vez identificados los ingresos y egresos del hogar, puede estimarse la disponibilidad familiar preliminar. Este resultado permite establecer qué recursos permanecen después de atender los gastos registrados, pero debe interpretarse considerando las demás obligaciones, la estabilidad de los ingresos y la relación económica existente entre la microempresa y el hogar.
          .caja-1.color-1(data-aos="fade-right")
            p La disponibilidad familiar preliminar se determina mediante la siguiente relación:
            .caja-9.text-center(data-aos="zoom-in")
              p.mb-0 #[b Disponibilidad familiar = ingresos familiares − egresos familiares]
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img38.png', alt='' style="width: 500px").m-auto
      p.mb-5 El siguiente caso permite establecer la disponibilidad preliminar a partir de los ingresos y egresos mensuales del hogar:
      .row.justify-content-center.mb-5
        .col-xl-8
          .caja-7(data-aos="zoom-in")
            .caja-8(data-aos="zoom-in").mb-3
              p.mb-0 #[b Ejemplo aplicado:] una unidad familiar presenta la siguiente información mensual:
            .row.justify-content-center.mb-3
              .col-xl-10
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 6.
                  span Ingresos, egresos y disponibilidad preliminar de la unidad familiar
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor mensual
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos familiares
                        td.texto-left 
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Aporte proveniente del negocio
                        td.texto-left $1.800.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Ingreso laboral de otro integrante
                        td.texto-left $1.200.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total de ingresos familiares
                        td.texto-left.text-weight-bold $3.000.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Egresos familiares
                        td.texto-left 
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Alimentación
                        td.texto-left $900.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Vivienda
                        td.texto-left $650.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Servicios públicos
                        td.texto-left $300.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Educación
                        td.texto-left $250.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Transporte
                        td.texto-left $300.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Otros gastos familiares
                        td.texto-left $200.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total de egresos familiares
                        td.texto-left.text-weight-bold $2.600.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad preliminar
                        td.texto-left.text-weight-bold $400.000
            .caja-8(data-aos="zoom-in")
              p.mb-0 La operación correspondiente es: #[b $3.000.000 − $2.600.000 = $400.000.]
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Los #[b $400.000] representan una disponibilidad familiar preliminar después de atender los egresos registrados. Este resultado todavía no constituye una capacidad definitiva de pago, pues deben considerarse las demás obligaciones, la estabilidad de los ingresos y las necesidades propias de la microempresa.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img39.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img40.png', alt='' style="width: 400px").m-auto
        .col-xl
          p La relación económica entre el negocio y el hogar también puede condicionar la disponibilidad de los recursos:
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] una persona propietaria de una pequeña tienda obtiene, después de cubrir los costos del negocio, un excedente mensual de #[b $1.700.000], que constituye la principal fuente para atender la alimentación, vivienda, servicios y educación del hogar. Por ello, este valor no puede considerarse íntegramente disponible para una cuota antes de contemplar los gastos familiares y las demás obligaciones.
      p.mb-0 El análisis conjunto de la microempresa y la unidad familiar permite representar de manera más completa la situación económica del cliente, al reconocer tanto los recursos generados por la actividad como las necesidades que deben atenderse en el hogar.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Elaboración e interpretación del flujo de caja	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img41.png')})` }")
        .bloque-texto-g__texto.p-4
          p El flujo de caja organiza las entradas y salidas efectivas de dinero de una actividad económica durante un periodo determinado. En el análisis del microcrédito, permite establecer la disponibilidad de recursos después de atender las salidas correspondientes y aporta información para valorar las condiciones económicas del cliente.
      p.mb-5 Se invita a reproducir el siguiente video para conocer cómo organizar las entradas y salidas de efectivo, calcular el flujo neto y el saldo final e interpretar la disponibilidad considerando los retiros familiares y las obligaciones vigentes:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Elaboración e interpretación del flujo de caja”
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Determinación de la capacidad económica y de pago
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img42.png')})` }")
        .bloque-texto-g__texto.p-4
          p La determinación de la capacidad económica y de pago integra los recursos generados por la microempresa y la unidad familiar con sus costos, egresos y obligaciones vigentes. Este análisis permite establecer la disponibilidad económica y contrastarla con una nueva cuota, sin basar la valoración únicamente en las ventas o en un excedente aislado (Superintendencia Financiera de Colombia, s. f.-a).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Capacidad económica y capacidad de pago
      p.mb-5 Aunque están relacionadas, la capacidad económica y la capacidad de pago cumplen funciones diferentes. La primera representa la situación general de los recursos disponibles del cliente y su actividad; la segunda permite establecer qué parte de esos recursos podría destinarse periódicamente al cumplimiento de una obligación financiera. Los siguientes elementos intervienen en la determinación de la capacidad económica y de pago:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Elementos para determinar la capacidad económica y de pago
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Incidencia en el análisis
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos del negocio
                      td.ajuste-border-tabla.texto-left Recursos generados por la actividad económica.
                      td.texto-left Constituyen una fuente principal para atender costos y obligaciones.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos del negocio
                      td.ajuste-border-tabla.texto-left Salidas necesarias para mantener la operación.
                      td.texto-left Reducen los recursos disponibles de la actividad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos familiares adicionales
                      td.ajuste-border-tabla.texto-left Recursos provenientes de otras fuentes sostenibles del hogar.
                      td.texto-left Pueden complementar la capacidad económica cuando corresponda.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Egresos familiares
                      td.ajuste-border-tabla.texto-left Recursos destinados al sostenimiento del hogar.
                      td.texto-left Disminuyen la disponibilidad para asumir nuevas obligaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras vigentes
                      td.ajuste-border-tabla.texto-left Cuotas y compromisos crediticios existentes.
                      td.texto-left Deben descontarse para evitar sobreestimar la capacidad de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flujo de caja
                      td.ajuste-border-tabla.texto-left Comportamiento de entradas y salidas de efectivo.
                      td.texto-left Permite verificar si existe disponibilidad real durante el periodo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nueva cuota proyectada
                      td.ajuste-border-tabla.texto-left Pago correspondiente al crédito solicitado.
                      td.texto-left Se compara con los recursos disponibles para establecer su sostenibilidad.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Disponibilidad económica y comparación con la cuota
          p.mb-5 La disponibilidad económica puede estimarse a partir de los ingresos identificados y de las salidas que debe atender el cliente. En los micronegocios, el análisis requiere diferenciar ingresos, costos y gastos para representar razonablemente su situación económica antes de comparar los recursos disponibles con una nueva cuota (DANE, s. f.). El procedimiento integra la información del negocio, la unidad familiar y las obligaciones vigentes:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              LineaTiempoD.color-acento-contenido(data-aos="zoom-in")
                .row.align-items-center(numero="1" titulo="Establecer la relación")
                  .col-md.mb-4.mb-md-0
                    .caja-8(data-aos="zoom-in").mb-3
                      p.mb-0 Disponibilidad económica = ingresos disponibles − costos y egresos − obligaciones vigentes
                    p.mb-0 Esta relación permite consolidar los recursos y compromisos identificados durante el análisis.
                .row.align-items-center(numero="2" titulo="Determinar el excedente de la actividad")
                  .col-md.mb-4.mb-md-0
                    p.mb-0 Ingresos mensuales del negocio: #[b $7.500.000]
                    p Costos y gastos del negocio: #[b $4.800.000]
                    h5 $7.500.000 − $4.800.000 = $2.700.000
                    p.mb-0 El excedente de la actividad corresponde a #[b $2.700.000]
                .row.align-items-center(numero="3" titulo="Determinar la disponibilidad económica")
                  .col-md.mb-4.mb-md-0
                    p.mb-0 Egresos de la unidad familiar: #[b $1.500.000]
                    p Obligaciones financieras vigentes: #[b $350.000]
                    h5 $2.700.000 − $1.500.000 − $350.000 = $850.000
                    p.mb-0 La disponibilidad económica preliminar corresponde a #[b $850.000 mensuales].
                .row.align-items-center(numero="4" titulo="Comparar con la cuota proyectada")
                  .col-md.mb-4.mb-md-0
                    p Si la nueva cuota corresponde a #[b $500.000], el margen restante se determina así:
                    h5.mb-0 $850.000 − $500.000 = $350.000 
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img43.png', alt='' style="width: 320px").m-auto
      p.mb-5 Después de considerar la cuota proyectada, permanecería un margen de #[b $350.000]. Este resultado no determina por sí solo la viabilidad del crédito, pues también deben considerarse la estabilidad de los recursos y las condiciones que puedan afectar su continuidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Margen de seguridad y factores que afectan el pago
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La disponibilidad económica no debería quedar totalmente comprometida con una nueva cuota, debido a que los recursos del cliente pueden presentar variaciones durante la vigencia de la obligación. Mantener un margen permite considerar cambios en las condiciones económicas sin asumir que existe un porcentaje universal aplicable a todas las operaciones. La interpretación del margen requiere considerar las variaciones posibles y las condiciones definidas para cada operación:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img44.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Margen frente a la nueva obligación
          p.mb-0 El margen permite considerar posibles disminuciones de ingresos, aumentos de costos o gastos familiares imprevistos. La capacidad de endeudamiento debe relacionarse con los recursos que pueden destinarse al crédito sin comprometer la estabilidad financiera, y el presupuesto contribuye a estimar esa disponibilidad (Banca de las Oportunidades & Fundación Sparkassenstiftung Alemana, 2025). Las condiciones concretas deben ajustarse a las políticas institucionales vigentes.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img45.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Factores que pueden afectar el pago
          p.mb-0 La capacidad de pago puede cambiar por disminuciones en las ventas, incrementos en los costos, pérdida de clientes importantes, nuevas obligaciones, enfermedades, cambios familiares o variaciones propias del sector. En actividades estacionales, un periodo favorable no debe asumirse automáticamente como comportamiento habitual.
      p.mb-5 El siguiente caso integra la información económica del negocio y del hogar para compararla con una nueva cuota:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-7(data-aos="zoom-in")
            .caja-8(data-aos="zoom-in").mb-3
              p.mb-0 #[b Ejemplo aplicado:] una persona propietaria de un micronegocio solicita un crédito cuya cuota proyectada es de #[b $420.000 mensuales]. El análisis proporciona la siguiente información:
            .row.justify-content-center.mb-3
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 8.
                  span Disponibilidad económica antes y después de la nueva cuota
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.texto-left Valor mensual
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos del negocio
                        td.texto-left $6.800.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos del negocio
                        td.texto-left $4.300.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Excedente del negocio
                        td.texto-left $2.500.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Egresos familiares
                        td.texto-left $1.300.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras vigentes
                        td.texto-left $300.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad antes del nuevo crédito
                        td.texto-left $900.000
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Nueva cuota proyectada
                        td.texto-left $420.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad posterior
                        td.texto-left $480.000
            .caja-8(data-aos="zoom-in")
              p.mb-0 Los valores mantienen coherencia entre sí: #[b $6.800.000 − $4.300.000 = $2.500.000]; posteriormente, #[b $2.500.000 − $1.300.000 − $300.000 = $900.000] y, al considerar la nueva cuota, #[b $900.000 − $420.000 = $480.000]. Este margen debe interpretarse junto con la estabilidad de los ingresos, el comportamiento económico del negocio, el endeudamiento y las demás condiciones consideradas en el análisis.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img46.png')})` }")
        .bloque-texto-g__texto.p-4
          p La determinación de la capacidad económica y de pago articula la información del negocio, la unidad familiar y las obligaciones existentes para establecer y analizar la disponibilidad frente a una nueva cuota. De esta manera, se consolida la base económica desarrollada en el tema para continuar con la evaluación integral del cliente.

</template>

<script>
export default {
  name: 'Tema2',
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
