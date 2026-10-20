<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p La síntesis integra los conceptos principales desarrollados en el componente formativo:
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual de la síntesis del componente formativo «Análisis crediticio y gestión de cartera microfinanciera». El componente integra cinco temas. El primero, matemáticas financieras aplicadas al microcrédito, comprende las variables de la operación —monto, tasa, plazo y periodicidad—, los cálculos de interés y cuota periódica, y el plan de pagos. El segundo, ingresos, egresos, flujo de caja y capacidad económica, comprende la información económica de la microempresa y el hogar, las entradas y salidas de efectivo, y los recursos disponibles para atender una nueva cuota. El tercero, estados financieros y análisis del cliente, comprende el balance y el estado de pérdidas y ganancias, los indicadores financieros y el análisis cualitativo de la trayectoria, gestión, estabilidad y comportamiento del cliente. El cuarto, viabilidad, garantías e informe del crédito, comprende la evaluación cuantitativa y cualitativa, la capacidad de pago, los respaldos y riesgos, y el informe para la instancia decisoria. El quinto, gestión, seguimiento y recuperación de cartera, comprende el control de pagos, saldos y vencimientos, las alertas de cobranza y las alternativas de normalización. Como resultado integrador, calcular y analizar la información del cliente permite sustentar la viabilidad del crédito y orientar la gestión de cartera.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
