# Backlog de producto - MVP SimplyBook.me para Quiroflex

Este backlog consolida las historias de usuario priorizadas para resolver el problema central de Quiroflex: la gestion manual de citas, las inasistencias, los cruces de horario y la baja trazabilidad del contacto con pacientes.

El MVP funcional se implementa sobre **SimplyBook.me Standard**. Esta decision es coherente con el tamano de la empresa, porque permite operar una solucion real de agendamiento con menor costo, menor tiempo de implementacion y menor carga tecnica que un desarrollo propio o un ERP completo.

## URL del MVP

- Portal publico de reservas: https://quiroflexcitas.simplybook.me/v2/
- Evidencia revisada en el portal: servicios "Cita terapia" y "Consulta diagnostica", duracion de 1 hora, profesionales Sergio/Nikol/Alex, disponibilidad horaria y formulario de datos del paciente.

## Resumen de cumplimiento

| Estado | Historias | Comentario |
| --- | --- | --- |
| Implementadas y demostrables en la pagina publica | HU-01, HU-02, HU-03 | Se pueden mostrar directamente desde el portal de reservas. |
| Implementada, pero requiere evidencia del panel administrador | HU-04 | SimplyBook registra la cita en el panel interno; se debe mostrar durante la sustentacion. |
| Parciales o configurables | HU-05, HU-06 | Requieren activar/configurar reportes, campos personalizados o enlaces de trazabilidad. |
| Fases posteriores | HU-07, HU-08 | No son necesarias para cumplir el MVP minimo y pueden dejarse como evolucion futura. |

Con el estado actual, el MVP cumple **4 historias de usuario principales** para la sustentacion: HU-01, HU-02, HU-03 y HU-04. La rubrica exige minimo 3 historias implementadas, por lo que el alcance queda cubierto.

## Historias de usuario priorizadas

| ID | Historia de usuario | Criterios de aceptacion | Prioridad | Estado real en el MVP | Relacion con el problema |
| --- | --- | --- | --- | --- | --- |
| HU-01 | Como administrador, quiero configurar servicios, duracion y horarios de atencion para que los pacientes vean disponibilidad real. | 1. El portal muestra los servicios disponibles. 2. Cada servicio tiene duracion definida. 3. La disponibilidad respeta la jornada de atencion. | Alta | Implementada y verificable en la pagina publica. Se observan "Cita terapia" y "Consulta diagnostica", ambas de 1 hora. | Reduce cruces de horario y dependencia de agenda manual en Excel. |
| HU-02 | Como paciente, quiero reservar una cita online desde un enlace para no depender de llamadas o mensajes manuales. | 1. El paciente entra al portal publico. 2. Selecciona servicio. 3. Selecciona profesional. 4. Selecciona fecha y hora disponible. 5. Avanza al formulario de datos. | Alta | Implementada y verificable en la pagina publica. El flujo permite seleccionar servicio, profesional, fecha y hora. | Disminuye el tiempo de respuesta y mejora la experiencia del paciente. |
| HU-03 | Como paciente, quiero registrar mis datos de contacto para recibir confirmacion de la cita. | 1. El formulario solicita nombre. 2. Solicita correo. 3. Solicita telefono. 4. Muestra el resumen de servicio, fecha, hora y profesional antes de confirmar. | Alta | Implementada y verificable en la pagina publica. El formulario solicita nombre, email y celular. | Permite trazabilidad de la reserva y habilita confirmaciones/recordatorios posteriores. |
| HU-04 | Como administrador, quiero ver las reservas en un panel interno para organizar la agenda diaria. | 1. La cita confirmada queda registrada en SimplyBook. 2. El administrador puede consultar reservas por fecha. 3. El administrador puede gestionar el estado de la cita desde la cuenta. | Alta | Implementada por funcionalidad propia de SimplyBook, pero debe evidenciarse con captura o demostracion del panel administrador. | Mejora el control operativo y reduce errores de agenda. |
| HU-05 | Como dueno de la clinica, quiero consultar reportes basicos de reservas para revisar la actividad del periodo. | 1. Se puede consultar el numero de reservas. 2. Se pueden revisar clientes y servicios agendados. 3. Si se activan pagos, se puede relacionar informacion financiera. | Media | Parcial. SimplyBook ofrece reportes/panel, pero se debe mostrar evidencia desde la cuenta admin. Pagos no estan incluidos como historia obligatoria del MVP. | Aporta visibilidad operativa y reemplaza parte del seguimiento manual. |
| HU-06 | Como encargado de marketing, quiero identificar el origen del paciente para saber si llego desde Instagram, WhatsApp, Facebook o referido. | 1. El formulario incluye un campo de origen o se usan enlaces diferenciados. 2. El dato queda asociado a la reserva. 3. El equipo puede revisar el origen posteriormente. | Media | Pendiente de configuracion. En la pagina publica actual no se observa el campo "origen del paciente". | Conecta la captacion digital con citas reales y permite medir conversion. |
| HU-07 | Como paciente, quiero cancelar o reprogramar mi cita desde un enlace para liberar cupos sin intervencion administrativa. | 1. El paciente puede acceder a su reserva. 2. Puede cancelar o solicitar cambio segun reglas definidas. 3. El horario liberado vuelve a la disponibilidad. | Baja | Fase posterior. Puede configurarse en SimplyBook, pero no es necesaria para el MVP minimo. | Reduce trabajo manual y ayuda a recuperar cupos. |
| HU-08 | Como doctor, quiero consultar una historia clinica basica con seguridad y trazabilidad. | 1. El acceso requiere permisos. 2. La informacion clinica se separa de la agenda. 3. Se cumplen reglas de tratamiento de datos de salud. | Baja | Fuera del MVP. SimplyBook se usa como agenda; la historia clinica requiere una solucion especializada. | Escala futura hacia gestion clinica, no critica para validar el proceso de citas. |

## Historias implementadas para sustentar

Para la exposicion final se recomienda sustentar estas historias:

| Historia | Que mostrar en vivo | Evidencia sugerida |
| --- | --- | --- |
| HU-01 Servicios y horarios | Abrir el portal y mostrar servicios de 1 hora y horarios disponibles. | Captura del listado de servicios y calendario. |
| HU-02 Reserva online | Hacer una reserva de prueba hasta antes de confirmar o confirmar con un paciente de prueba. | Captura del flujo servicio -> profesional -> fecha/hora. |
| HU-03 Datos y confirmacion | Mostrar formulario con nombre, email, telefono y resumen de la cita. | Captura del formulario de confirmacion. |
| HU-04 Panel administrativo | Entrar a SimplyBook como administrador y mostrar la cita creada en la agenda. | Captura del calendario/panel de reservas. |

## Ajustes recomendados antes de entregar

- Activar o evidenciar las notificaciones de confirmacion por correo. Si van a mencionar WhatsApp/SMS, deben mostrar una prueba real o aclarar que queda como configuracion posterior con creditos.
- Agregar un campo personalizado "Como nos conociste?" con opciones: Instagram, WhatsApp, Facebook, referido y otro. Con esto HU-06 pasaria de pendiente a implementada.
- Guardar capturas del panel administrador para demostrar HU-04 y HU-05, porque esas historias no se pueden verificar solo desde la pagina publica.
- Mantener HU-08 como fase futura para no mezclar el MVP de agenda con historia clinica, que tiene mayor complejidad legal y tecnica.
