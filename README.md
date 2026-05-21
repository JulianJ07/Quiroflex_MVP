# Quiroflex Agenda MVP

Repositorio de apoyo para la entrega final de Sistemas de Informacion. El MVP funcional de Quiroflex se implementara sobre SimplyBook.me Standard; este repositorio conserva el backlog refinado, el analisis de historias y la demo web construida como prototipo de referencia.

## URL del backlog

El backlog completo actualizado para el MVP en SimplyBook.me se encuentra en [`BACKLOG.md`](BACKLOG.md).

## Backlog de producto

| ID | Historia de usuario | Criterios de aceptacion | Prioridad | Estado | Relacion con el problema |
| --- | --- | --- | --- | --- | --- |
| HU-01 | Como administrador, quiero configurar servicios y horarios disponibles para que los pacientes puedan agendar sin llamar. | Muestra nombre, duracion y precio del servicio; bloquea horarios ocupados; actualiza disponibilidad al registrar citas. | Alta | Implementada | Reduce cruces de horario y dependencia de Excel. |
| HU-02 | Como paciente, quiero agendar una cita online seleccionando servicio, fecha y hora. | Registra datos de contacto; valida que haya un horario seleccionado; guarda la cita en el panel administrativo. | Alta | Implementada | Disminuye el tiempo de respuesta y mejora la experiencia del paciente. |
| HU-03 | Como paciente, quiero recibir confirmacion y recordatorio por WhatsApp para no olvidar mi cita. | Genera mensaje con paciente, servicio, fecha, hora y direccion; abre WhatsApp con mensaje prellenado; permite copiar el mensaje. | Alta | Implementada | Ataca la tasa de inasistencia estimada entre 15% y 20%. |
| HU-04 | Como administrador, quiero ver las citas del dia en un panel para operar la agenda diaria. | Muestra citas por hora; permite filtrar por fecha; permite cambiar estado de la cita. | Alta | Implementada | Aumenta trazabilidad operativa y reduce carga administrativa. |
| HU-05 | Como dueno, quiero ver indicadores de agenda e ingresos para controlar la operacion sin revisar Excel. | Calcula citas programadas, ingresos proyectados, recordatorios listos y cruces de horario; exporta CSV. | Media | Implementada | Conecta agenda con control financiero basico. |
| HU-06 | Como encargado de marketing, quiero registrar el canal de origen del paciente para medir conversion. | Almacena canal de origen; lo muestra en el panel; lo conserva en la exportacion CSV. | Media | Implementada | Conecta captacion digital con citas reales. |
| HU-07 | Como paciente, quiero reprogramar mi cita desde un enlace para liberar cupos sin intervencion administrativa. | Debe cargar la cita existente; elegir nuevo horario; liberar el horario anterior. | Media | Proxima fase | Reduciria trabajo manual y permitiria recuperar cupos. |
| HU-08 | Como doctor, quiero consultar una historia clinica basica con seguridad y trazabilidad. | Debe requerir autenticacion; separar datos clinicos de la agenda; manejar permisos. | Baja | Futura | Escala la solucion hacia informacion clinica, fuera del MVP por complejidad regulatoria. |

## Historias implementadas en el MVP

- HU-01: configurar servicios y horarios visibles para el paciente.
- HU-02: agendar cita online evitando cruces de horario.
- HU-03: generar confirmacion y recordatorio para WhatsApp.
- HU-04: visualizar agenda diaria en un panel administrativo.
- HU-05: calcular ingresos proyectados y exportar citas.
- HU-06: registrar canal de origen del paciente.

## Ejecucion local

Desde esta carpeta:

```powershell
python -m http.server 8081 --bind 127.0.0.1
```

Luego abrir:

```text
http://127.0.0.1:8081
```

La informacion se guarda en `localStorage`, por lo que funciona sin base de datos externa para efectos de demostracion.
