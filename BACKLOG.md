# Backlog de producto - MVP SimplyBook.me para Quiroflex

Este backlog consolida las historias de usuario priorizadas para resolver el problema central de Quiroflex: gestion manual de citas, inasistencias, cruces de horario y baja trazabilidad del contacto con pacientes.

El MVP funcional se implementara sobre **SimplyBook.me Standard**, no como desarrollo propio. La decision es coherente con el tamano de la empresa, porque permite poner en operacion una solucion real de agendamiento con menor costo, menor tiempo de implementacion y menor carga tecnica.

## Historias de usuario

| ID | Historia de usuario | Criterios de aceptacion | Prioridad | Estado en SimplyBook.me Standard | Relacion con el problema |
| --- | --- | --- | --- | --- | --- |
| HU-01 | Como administrador, quiero configurar servicios, duracion, precios y horarios de atencion para que los pacientes vean disponibilidad real. | 1. Cada servicio queda creado con nombre, duracion y precio. 2. Los horarios disponibles respetan la jornada de atencion. 3. Los horarios ocupados no quedan disponibles para otros pacientes. | Alta | Implementada en el MVP SaaS | Reduce cruces de horario y elimina dependencia de Excel. |
| HU-02 | Como paciente, quiero reservar una cita online desde un enlace para no depender de llamadas o mensajes manuales. | 1. El paciente ingresa al portal de reservas. 2. Selecciona servicio, fecha y hora. 3. La reserva queda registrada en la agenda administrativa. | Alta | Implementada en el MVP SaaS | Disminuye el tiempo de respuesta y mejora la experiencia del paciente. |
| HU-03 | Como paciente, quiero recibir confirmacion y recordatorio por email, SMS o WhatsApp para no olvidar mi cita. | 1. El sistema envia confirmacion al crear la reserva. 2. El mensaje incluye servicio, fecha y hora. 3. El sistema permite configurar recordatorios previos a la cita. | Alta | Implementada con configuracion de notificaciones | Ataca la tasa de inasistencia estimada entre 15% y 20%. |
| HU-04 | Como administrador, quiero ver las reservas del dia en un panel para organizar la agenda diaria. | 1. El panel muestra citas por fecha. 2. Se visualiza el paciente, servicio y estado de la reserva. 3. El administrador puede modificar, cancelar o confirmar reservas. | Alta | Implementada en el panel de SimplyBook.me | Aumenta trazabilidad operativa y reduce carga administrativa. |
| HU-05 | Como dueno de la clinica, quiero consultar reportes basicos de reservas e ingresos para controlar la operacion sin revisar Excel. | 1. El sistema muestra reservas realizadas. 2. Permite consultar servicios agendados. 3. Si se activan pagos, permite asociar ingresos a reservas. | Media | Implementacion parcial o ampliable con pagos/reportes | Conecta agenda con control financiero basico. |
| HU-06 | Como encargado de marketing, quiero medir el origen de los pacientes para saber si llegan desde Instagram, Facebook, WhatsApp o referidos. | 1. El portal de reservas se puede enlazar desde redes sociales. 2. Se pueden usar enlaces diferenciados o campos de origen. 3. La informacion queda disponible para analisis posterior. | Media | Implementacion parcial con enlaces, formularios o UTM | Conecta captacion digital con citas reales. |
| HU-07 | Como paciente, quiero poder cancelar o reprogramar mi cita desde el enlace de reserva para liberar cupos sin intervencion administrativa. | 1. El paciente puede acceder a su reserva. 2. Puede cancelar o solicitar cambio segun la configuracion. 3. El horario liberado vuelve a la disponibilidad. | Media | Configurable en SimplyBook.me, sujeto a reglas definidas | Reduce trabajo manual y permite recuperar cupos. |
| HU-08 | Como doctor, quiero consultar una historia clinica basica con seguridad y trazabilidad. | 1. El acceso requiere permisos. 2. La informacion clinica se separa de la agenda. 3. Se cumplen reglas de tratamiento de datos de salud. | Baja | Fase futura, no cubierta por SimplyBook.me como historia clinica formal | Requiere sistema clinico especializado y mayor analisis regulatorio. |

## Historias cubiertas por el MVP

Con SimplyBook.me Standard se cubren al menos **cuatro historias de usuario prioritarias** de forma directa:

- HU-01: configuracion de servicios y horarios.
- HU-02: agendamiento online.
- HU-03: confirmaciones y recordatorios.
- HU-04: panel administrativo de reservas.

Adicionalmente, se pueden cubrir de forma parcial o ampliable:

- HU-05: reportes basicos e ingresos si se activa pagos.
- HU-06: trazabilidad de origen con enlaces, formularios o UTM.
- HU-07: cancelacion o reprogramacion segun configuracion.

HU-08 queda como fase futura porque la historia clinica requiere un sistema especializado y controles adicionales de seguridad y cumplimiento.
