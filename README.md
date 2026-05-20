# Quiroflex Agenda MVP

MVP funcional para la entrega final de Sistemas de Información. La aplicación implementa un flujo básico de agendamiento online para Quiroflex, con panel administrativo, confirmación de citas, recordatorio simulado por WhatsApp, métricas operativas y backlog visual.

## Historias implementadas

- HU-01: configurar servicios y horarios visibles para el paciente.
- HU-02: agendar cita online evitando cruces de horario.
- HU-03: generar confirmación y recordatorio para WhatsApp.
- HU-04: visualizar agenda diaria en un panel administrativo.
- HU-05: calcular ingresos proyectados y exportar citas.
- HU-06: registrar canal de origen del paciente.

## Ejecución local

Desde esta carpeta:

```powershell
python -m http.server 8080
```

Luego abrir:

```text
http://localhost:8080
```

La información se guarda en `localStorage`, por lo que funciona sin base de datos externa para efectos de demostración.
