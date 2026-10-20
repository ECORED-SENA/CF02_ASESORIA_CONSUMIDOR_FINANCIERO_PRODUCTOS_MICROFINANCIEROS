<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre análisis crediticio y gestión de cartera microfinanciera',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la capacidad para interpretar las variables financieras del microcrédito, analizar ingresos, egresos, flujo de caja, estados financieros y capacidad de pago, integrar el análisis cuantitativo y cualitativo para determinar la viabilidad del crédito, presentar resultados del análisis y reconocer procedimientos de seguimiento, cobranza y normalización de cartera.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'En una operación de microcrédito, ¿cuáles son las variables básicas que deben identificarse antes de calcular la cuota?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ingresos, patrimonio, garantía y referencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ventas, costos, activos y pasivos del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Monto, tasa de interés, plazo y periodicidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cartera, mora, cobranza y saldo de la deuda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Si un crédito tiene un saldo de capital de $2.000.000 y una tasa mensual del 2 %, ¿cuál es el interés correspondiente al periodo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$20.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$200.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$400.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$40.000',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Por qué una tasa efectiva anual no debe dividirse simplemente entre doce para obtener su equivalente mensual?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque debe considerarse la equivalencia financiera y la capitalización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque las tasas anuales solo se utilizan en créditos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque las tasas mensuales siempre son establecidas por la entidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque una tasa anual no admite conversión a otra periodicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En un plan de pagos, ¿qué representa la amortización a capital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo financiero generado durante el periodo de pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El valor que reduce directamente el saldo de la obligación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El total de intereses que se pagarán durante el crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El valor de la garantía constituida para la obligación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Durante una gestión de cobranza, ¿cuál actuación respeta las condiciones de contacto con el consumidor financiero?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contactarlo por el canal autorizado, dentro de los horarios permitidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Contactarlo por varios canales en la semana tras el contacto directo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contactarlo repetidamente durante el día para obtener un compromiso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contactarlo en domingo para recordarle la fecha de su próxima cuota.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una microempresa registra ventas mensuales de $7.000.000. ¿Por qué este valor no puede considerarse directamente como capacidad de pago?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque las ventas solamente pueden utilizarse para calcular impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque los ingresos del negocio no intervienen en el análisis crediticio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque solo el patrimonio registrado determina la capacidad de pago.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque primero deben analizarse costos, gastos y demás obligaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes conceptos corresponde principalmente a un costo directamente asociado con la actividad de una panadería?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Materias primas utilizadas en la producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuota de un crédito personal del propietario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gastos de educación escolar de la familia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pago del arrendamiento de la vivienda familiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Por qué deben diferenciarse los egresos de la microempresa de los egresos de la unidad familiar?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para excluir por completo al hogar del análisis crediticio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para aumentar artificialmente los ingresos del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para evitar duplicidades y determinar los recursos disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para eliminar los gastos familiares del cálculo crediticio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Si una microempresa registra entradas de efectivo por $6.000.000 y salidas por $4.700.000, ¿cuál es su flujo neto del periodo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$1.700.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$1.300.000',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$4.700.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$10.700.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un cliente dispone de $900.000 mensuales después de cubrir gastos y obligaciones existentes. La nueva cuota sería de $850.000. ¿Qué análisis es más adecuado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aprobar porque la disponibilidad supera matemáticamente la cuota.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ignorar la nueva cuota porque el negocio genera ventas suficientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aprobar solo con una garantía, sin revisar los recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar el reducido margen restante y la estabilidad de los ingresos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una microempresa posee activos por $12.000.000 y pasivos por $5.000.000. ¿Cuál es su patrimonio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$5.000.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$7.000.000',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$12.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$17.000.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué permite determinar principalmente el estado de pérdidas y ganancias?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La utilidad o pérdida obtenida durante un periodo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La ubicación geográfica de la actividad del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor de las garantías que presenta el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El comportamiento histórico de la cartera de crédito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Si una microempresa tiene pasivos por $3.000.000 y activos por $10.000.000, ¿cuál es aproximadamente su nivel de endeudamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '70 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '300 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '30 %',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las ventas declaradas por un cliente no coinciden con su flujo de caja ni con los soportes del negocio. ¿Qué corresponde hacer en el análisis?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aceptar las ventas declaradas sin comprobar las demás cifras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los datos por una proyección favorable del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contrastar las cifras y los soportes para verificar las diferencias identificadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Omitir la discrepancia y recomendar la aprobación del crédito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál situación corresponde al análisis cualitativo del cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Valorar trayectoria, gestión, referencias y cumplimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Calcular el margen neto a partir de la utilidad y las ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el saldo pendiente de la obligación crediticia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular el patrimonio a partir de los activos y pasivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe ocurrir antes de concluir que un crédito es viable?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exigir una garantía de alto valor sin valorar la capacidad económica del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar los análisis cuantitativo y cualitativo con las condiciones del crédito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Aprobar primero la operación y analizar después la situación económica del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Considerar solo las ventas del negocio sin revisar los gastos y obligaciones del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál afirmación describe correctamente la función de una garantía dentro del análisis crediticio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituye la verificación de los recursos del cliente para atender las cuotas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantiza la aprobación automática sin considerar las condiciones del crédito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aporta un respaldo adicional sin sustituir el análisis de capacidad de pago.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elimina el riesgo de incumplimiento durante toda la vigencia de la obligación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la finalidad principal del informe que se presenta al comité de crédito?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Repetir íntegramente los datos recopilados durante la entrevista al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir la decisión que corresponde a la instancia de crédito autorizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar exclusivamente las garantías que respaldan el crédito solicitado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar los hallazgos y sustentar técnicamente la recomendación crediticia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una obligación comienza a presentar retrasos recurrentes en sus pagos. ¿Cuál debe ser una de las primeras acciones de gestión de cartera?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Iniciar un proceso judicial de forma automática, sin revisar los antecedentes de pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar la alerta y contactar al cliente según el procedimiento y por el canal autorizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Modificar inmediatamente el plazo del crédito, sin evaluar las condiciones de la obligación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar los registros anteriores de pago y los compromisos pactados durante el seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un cliente presenta una reducción sostenida de ingresos que afecta el pago del crédito. ¿Qué debe hacerse antes de proponer una alternativa de normalización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ampliar el plazo de la obligación sin actualizar los datos económicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Suspender definitivamente todo contacto con el cliente y su seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar su información y determinar su capacidad real de pago.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ofrecer una nueva obligación para pagar la anterior sin evaluar ingresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
