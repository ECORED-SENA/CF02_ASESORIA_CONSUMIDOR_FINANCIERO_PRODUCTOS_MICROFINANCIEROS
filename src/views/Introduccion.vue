<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis crediticio en el ámbito de las microfinanzas requiere integrar información financiera, económica y cualitativa para comprender la capacidad del cliente de asumir una obligación y determinar la viabilidad del crédito. Para ello, es necesario reconocer elementos de matemática financiera aplicados al microcrédito, como el interés, la cuota y el plazo, e identificar los ingresos y egresos de la microempresa y de la unidad familiar.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
        .col-xl
          p El estudio de la situación económica del cliente se complementa con la elaboración e interpretación del flujo de caja, el balance, el estado de pérdidas y ganancias y los indicadores financieros básicos. Esta información, junto con el análisis cualitativo y cuantitativo, permite valorar integralmente las condiciones del solicitante, establecer su capacidad económica, identificar los aspectos que respaldan la operación y sustentar la decisión sobre la viabilidad del crédito.
          .caja-1(data-aos="fade-left")
            p.mb-0 La gestión microfinanciera continúa después del análisis y la aprobación de la operación mediante la presentación de resultados al comité de crédito, el seguimiento de las obligaciones y la administración de la cartera. Por esta razón, también se abordan la gestión de informes, las garantías, los procedimientos de cobranza y las acciones orientadas a mantener una cartera sana, de acuerdo con las políticas y los procedimientos establecidos por la organización.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
