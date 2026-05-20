# Backlog de producto - Quiroflex Agenda MVP

Este backlog consolida las historias de usuario priorizadas para resolver el problema central de Quiroflex: la gestion manual de citas, la falta de recordatorios, los cruces de horario y la baja trazabilidad del contacto con pacientes.

## Historias de usuario

| ID | Historia de usuario | Criterios de aceptacion | Prioridad | Estado | Relacion con el problema |
| --- | --- | --- | --- | --- | --- |
| HU-01 | Como administrador, quiero configurar servicios y horarios disponibles para que los pacientes puedan agendar sin llamar. | 1. El sistema muestra nombre, duracion y precio del servicio. 2. Los horarios ocupados se bloquean automaticamente. 3. La disponibilidad se actualiza cuando se registra una cita. | Alta | Implementada | Reduce cruces de horario y dependencia de Excel. |
| HU-02 | Como paciente, quiero agendar una cita online seleccionando servicio, fecha y hora. | 1. El paciente registra datos basicos de contacto. 2. El sistema valida que haya un horario seleccionado. 3. La cita queda visible en el panel administrativo. | Alta | Implementada | Disminuye el tiempo de respuesta y mejora la experiencia del paciente. |
| HU-03 | Como paciente, quiero recibir confirmacion y recordatorio por WhatsApp para no olvidar mi cita. | 1. El sistema genera un mensaje con paciente, servicio, fecha, hora y direccion. 2. El boton abre WhatsApp con mensaje prellenado. 3. El administrador puede copiar el mensaje como respaldo. | Alta | Implementada | Ataca la tasa de inasistencia estimada entre 15% y 20%. |
| HU-04 | Como administrador, quiero ver las citas del dia en un panel para operar la agenda diaria. | 1. La tabla muestra hora, paciente, servicio, canal y estado. 2. Se puede filtrar por fecha. 3. Se puede cambiar el estado de cada cita. | Alta | Implementada | Aumenta trazabilidad operativa y reduce carga administrativa. |
| HU-05 | Como dueno de la clinica, quiero ver indicadores de agenda e ingresos para controlar la operacion sin revisar Excel. | 1. El panel calcula citas programadas. 2. El panel calcula ingresos proyectados. 3. El panel muestra recordatorios listos y cruces de horario. 4. La informacion se puede exportar a CSV. | Media | Implementada | Conecta agenda con control financiero basico. |
| HU-06 | Como encargado de marketing, quiero registrar el canal de origen del paciente para medir conversion desde redes sociales. | 1. Cada cita almacena Instagram, WhatsApp, Facebook o referido. 2. El canal queda visible en el panel. 3. La exportacion CSV conserva el dato de origen. | Media | Implementada | Conecta captacion digital con citas reales. |
| HU-07 | Como paciente, quiero reprogramar mi cita desde un enlace para liberar cupos sin intervencion administrativa. | 1. El enlace carga la cita existente. 2. El paciente selecciona un nuevo horario disponible. 3. El horario anterior queda libre automaticamente. | Media | Proxima fase | Reduciria trabajo manual y permitiria recuperar cupos. |
| HU-08 | Como doctor, quiero consultar una historia clinica basica con seguridad y trazabilidad. | 1. El acceso requiere autenticacion. 2. Los datos clinicos se separan de la agenda. 3. Se manejan permisos de acceso. | Baja | Futura | Escala la solucion hacia informacion clinica, fuera del MVP por complejidad regulatoria. |

## Historias implementadas en el MVP

El MVP implementa seis historias de usuario:

- HU-01: configuracion de servicios y horarios.
- HU-02: agendamiento online.
- HU-03: confirmacion y recordatorio asistido por WhatsApp.
- HU-04: panel administrativo de citas.
- HU-05: indicadores e ingresos proyectados.
- HU-06: registro del canal de origen del paciente.

## Historias para fases posteriores

- HU-07: reprogramacion autoservicio.
- HU-08: historia clinica basica.
