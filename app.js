const services = [
  { id: "consulta-inicial", name: "Consulta quiropráctica inicial", duration: 60, price: 80000 },
  { id: "tratamiento", name: "Sesión de tratamiento", duration: 45, price: 60000 },
  { id: "homeopatia", name: "Consulta homeopática", duration: 45, price: 70000 }
];

const backlogItems = [
  {
    id: "HU-01",
    title: "Configurar servicios y horarios",
    priority: "Alta",
    status: "Implementada",
    description: "Como administrador, quiero configurar servicios, duración, precio y horarios disponibles para que los pacientes puedan agendar sin llamar.",
    criteria: [
      "El sistema muestra servicios con nombre, duración y precio.",
      "Los horarios ocupados se bloquean automáticamente.",
      "La disponibilidad se actualiza al registrar una nueva cita."
    ],
    relation: "Reduce cruces de horarios y elimina dependencia de Excel."
  },
  {
    id: "HU-02",
    title: "Agendar cita online",
    priority: "Alta",
    status: "Implementada",
    description: "Como paciente, quiero seleccionar servicio, fecha y hora para reservar una cita desde un formulario web.",
    criteria: [
      "El paciente diligencia datos básicos de contacto.",
      "La cita queda registrada en el panel administrativo.",
      "El sistema evita reservar un horario ya ocupado."
    ],
    relation: "Disminuye el tiempo de respuesta y mejora la experiencia del paciente."
  },
  {
    id: "HU-03",
    title: "Confirmación y recordatorio por WhatsApp",
    priority: "Alta",
    status: "Implementada",
    description: "Como paciente, quiero recibir confirmación y recordatorio de la cita para reducir el riesgo de inasistencia.",
    criteria: [
      "Se genera un mensaje con nombre, servicio, fecha, hora y dirección.",
      "El mensaje se puede abrir en WhatsApp con un enlace directo.",
      "El administrador puede copiar un recordatorio desde el panel."
    ],
    relation: "Ataca la tasa de inasistencias estimada entre 15% y 20%."
  },
  {
    id: "HU-04",
    title: "Panel de citas del día",
    priority: "Alta",
    status: "Implementada",
    description: "Como administrador, quiero ver las citas ordenadas por hora y estado para operar la agenda diaria con claridad.",
    criteria: [
      "La tabla muestra hora, paciente, servicio, canal y estado.",
      "Se puede filtrar por fecha.",
      "El estado de la cita se actualiza desde el panel."
    ],
    relation: "Aumenta trazabilidad operativa y reduce carga administrativa del fundador."
  },
  {
    id: "HU-05",
    title: "Reporte diario de ingresos",
    priority: "Media",
    status: "Implementada",
    description: "Como dueño, quiero ver ingresos proyectados y citas atendidas para controlar la operación sin revisar Excel.",
    criteria: [
      "El panel calcula ingresos según citas registradas.",
      "Los indicadores se actualizan al cambiar estados.",
      "La información se puede exportar a CSV."
    ],
    relation: "Conecta agenda con control financiero básico."
  },
  {
    id: "HU-06",
    title: "Medición de origen del paciente",
    priority: "Media",
    status: "Implementada",
    description: "Como encargado de marketing, quiero registrar el canal de origen para medir si las campañas generan citas reales.",
    criteria: [
      "Cada cita almacena Instagram, WhatsApp, Facebook o referido.",
      "El canal queda visible en el panel administrativo.",
      "La exportación CSV conserva el dato de origen."
    ],
    relation: "Permite conectar captación digital con conversión a citas."
  },
  {
    id: "HU-07",
    title: "Reprogramación autoservicio",
    priority: "Media",
    status: "Próxima",
    description: "Como paciente, quiero reprogramar desde un enlace para liberar cupos sin intervención administrativa.",
    criteria: [
      "El enlace abre la cita existente.",
      "El paciente elige un nuevo horario disponible.",
      "El horario anterior queda disponible automáticamente."
    ],
    relation: "Reduce trabajo manual y mejora recuperación de cupos."
  },
  {
    id: "HU-08",
    title: "Historia clínica básica",
    priority: "Baja",
    status: "Futura",
    description: "Como doctor, quiero consultar antecedentes básicos del paciente con seguridad y trazabilidad.",
    criteria: [
      "El acceso requiere autenticación.",
      "La información clínica se separa de la agenda.",
      "Se definen permisos y política de tratamiento de datos."
    ],
    relation: "Queda fuera del MVP por complejidad regulatoria, pero soporta escalabilidad."
  }
];

const storageKey = "quiroflex-appointments";
const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});

const els = {
  serviceSelect: document.querySelector("#service-select"),
  dateInput: document.querySelector("#appointment-date"),
  slotGrid: document.querySelector("#slot-grid"),
  slotDateLabel: document.querySelector("#slot-date-label"),
  selectedTime: document.querySelector("#selected-time"),
  form: document.querySelector("#booking-form"),
  confirmationEmpty: document.querySelector("#confirmation-empty"),
  confirmationCard: document.querySelector("#confirmation-card"),
  confirmationText: document.querySelector("#confirmation-text"),
  whatsappLink: document.querySelector("#whatsapp-link"),
  copyConfirmation: document.querySelector("#copy-confirmation"),
  appointmentsBody: document.querySelector("#appointments-body"),
  adminDateFilter: document.querySelector("#admin-date-filter"),
  reminderMessage: document.querySelector("#reminder-message"),
  kpiTotal: document.querySelector("#kpi-total"),
  kpiRevenue: document.querySelector("#kpi-revenue"),
  kpiReminders: document.querySelector("#kpi-reminders"),
  kpiConflicts: document.querySelector("#kpi-conflicts"),
  backlogBoard: document.querySelector("#backlog-board")
};

function todayISO(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function getAppointments() {
  return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

function saveAppointments(appointments) {
  localStorage.setItem(storageKey, JSON.stringify(appointments));
}

function seedDemoData() {
  const demo = [
    {
      id: crypto.randomUUID(),
      patientName: "Laura Gómez",
      phone: "3001234567",
      email: "laura.gomez@example.com",
      channel: "Instagram",
      serviceId: "consulta-inicial",
      date: todayISO(),
      time: "09:00",
      status: "Confirmada",
      createdAt: new Date().toISOString()
    },
    {
      id: crypto.randomUUID(),
      patientName: "Andrés Restrepo",
      phone: "3109876543",
      email: "andres.restrepo@example.com",
      channel: "WhatsApp",
      serviceId: "tratamiento",
      date: todayISO(),
      time: "11:15",
      status: "Confirmada",
      createdAt: new Date().toISOString()
    },
    {
      id: crypto.randomUUID(),
      patientName: "Mónica Serna",
      phone: "3015558888",
      email: "monica.serna@example.com",
      channel: "Referido",
      serviceId: "homeopatia",
      date: todayISO(1),
      time: "15:00",
      status: "Pendiente",
      createdAt: new Date().toISOString()
    }
  ];
  saveAppointments(demo);
  renderAll();
}

function getService(serviceId) {
  return services.find((service) => service.id === serviceId) || services[0];
}

function formatDate(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Intl.DateTimeFormat("es-CO", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(year, month - 1, day));
}

function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("57")) return digits;
  return `57${digits}`;
}

function buildMessage(appointment, reminder = false) {
  const service = getService(appointment.serviceId);
  const intro = reminder ? "Recordatorio de cita Quiroflex" : "Confirmación de cita Quiroflex";
  return `${intro}: Hola ${appointment.patientName}, tienes ${service.name} el ${formatDate(appointment.date)} a las ${appointment.time}. Dirección: Quiroflex Medellín. Si necesitas reprogramar, responde este mensaje.`;
}

function getSlots() {
  return ["08:00", "08:45", "09:00", "10:00", "10:45", "11:15", "14:00", "15:00", "15:45", "16:30", "17:15"];
}

function renderServices() {
  els.serviceSelect.innerHTML = services
    .map((service) => `<option value="${service.id}">${service.name} - ${currency.format(service.price)}</option>`)
    .join("");
}

function renderSlots() {
  const date = els.dateInput.value;
  const appointments = getAppointments().filter((appointment) => appointment.date === date);
  els.slotDateLabel.textContent = date ? formatDate(date) : "";
  els.slotGrid.innerHTML = getSlots()
    .map((slot) => {
      const booked = appointments.some((appointment) => appointment.time === slot && appointment.status !== "Cancelada");
      const selected = els.selectedTime.value === slot;
      return `<button class="slot${selected ? " selected" : ""}" type="button" data-time="${slot}" ${booked ? "disabled" : ""}>${slot}</button>`;
    })
    .join("");
}

function renderAdmin() {
  const appointments = getAppointments();
  const filterDate = els.adminDateFilter.value || todayISO();
  const filtered = appointments
    .filter((appointment) => appointment.date === filterDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  els.appointmentsBody.innerHTML =
    filtered.length === 0
      ? `<tr><td colspan="6">No hay citas registradas para esta fecha.</td></tr>`
      : filtered
          .map((appointment) => {
            const service = getService(appointment.serviceId);
            return `<tr>
              <td>${appointment.time}</td>
              <td>${appointment.patientName}</td>
              <td>${service.name}<br><span class="muted">${currency.format(service.price)}</span></td>
              <td>${appointment.channel}</td>
              <td>
                <select class="status-select" data-id="${appointment.id}" aria-label="Estado de ${appointment.patientName}">
                  ${["Pendiente", "Confirmada", "Completada", "Cancelada", "No asistió"]
                    .map((status) => `<option value="${status}" ${appointment.status === status ? "selected" : ""}>${status}</option>`)
                    .join("")}
                </select>
              </td>
              <td><button class="small-button" type="button" data-reminder="${appointment.id}">Recordar</button></td>
            </tr>`;
          })
          .join("");

  const active = filtered.filter((appointment) => appointment.status !== "Cancelada");
  const revenue = filtered
    .filter((appointment) => appointment.status === "Confirmada" || appointment.status === "Completada")
    .reduce((sum, appointment) => sum + getService(appointment.serviceId).price, 0);

  const conflicts = countConflicts(appointments);
  els.kpiTotal.textContent = active.length;
  els.kpiRevenue.textContent = currency.format(revenue);
  els.kpiReminders.textContent = active.filter((appointment) => appointment.status !== "Completada").length;
  els.kpiConflicts.textContent = conflicts;
}

function countConflicts(appointments) {
  const seen = new Set();
  let conflicts = 0;
  appointments
    .filter((appointment) => appointment.status !== "Cancelada")
    .forEach((appointment) => {
      const key = `${appointment.date}-${appointment.time}`;
      if (seen.has(key)) conflicts += 1;
      seen.add(key);
    });
  return conflicts;
}

function renderBacklog() {
  els.backlogBoard.innerHTML = backlogItems
    .map((item) => {
      const statusClass =
        item.status === "Implementada" ? "done" : item.status === "Próxima" ? "progress" : "future";
      return `<article class="backlog-card">
        <div class="backlog-meta">
          <span>${item.id}</span>
          <span class="priority">${item.priority}</span>
        </div>
        <h3><b class="dot ${statusClass}"></b>${item.title}</h3>
        <p>${item.description}</p>
        <ul>${item.criteria.map((criterion) => `<li>${criterion}</li>`).join("")}</ul>
        <p class="relation"><strong>Relación con el problema:</strong> ${item.relation}</p>
      </article>`;
    })
    .join("");
}

function renderAll() {
  renderSlots();
  renderAdmin();
  renderBacklog();
  if (window.lucide) window.lucide.createIcons();
}

function createAppointment(formData) {
  const appointment = {
    id: crypto.randomUUID(),
    patientName: formData.get("patientName").trim(),
    phone: formData.get("phone").trim(),
    email: formData.get("email").trim(),
    channel: formData.get("channel"),
    serviceId: formData.get("service"),
    date: formData.get("date"),
    time: formData.get("time"),
    status: "Confirmada",
    createdAt: new Date().toISOString()
  };

  const appointments = getAppointments();
  const duplicate = appointments.some(
    (item) => item.date === appointment.date && item.time === appointment.time && item.status !== "Cancelada"
  );

  if (duplicate) {
    alert("Ese horario acaba de ocuparse. Selecciona otro espacio disponible.");
    return null;
  }

  appointments.push(appointment);
  saveAppointments(appointments);
  return appointment;
}

function showConfirmation(appointment) {
  const service = getService(appointment.serviceId);
  const message = buildMessage(appointment);
  els.confirmationText.textContent = `${appointment.patientName}, ${service.name}, ${formatDate(appointment.date)} a las ${appointment.time}.`;
  els.whatsappLink.href = `https://wa.me/${normalizePhone(appointment.phone)}?text=${encodeURIComponent(message)}`;
  els.whatsappLink.dataset.message = message;
  els.confirmationEmpty.classList.add("hidden");
  els.confirmationCard.classList.remove("hidden");
}

function exportCsv() {
  const header = ["fecha", "hora", "paciente", "telefono", "correo", "servicio", "canal", "estado", "precio"];
  const rows = getAppointments().map((appointment) => {
    const service = getService(appointment.serviceId);
    return [
      appointment.date,
      appointment.time,
      appointment.patientName,
      appointment.phone,
      appointment.email,
      service.name,
      appointment.channel,
      appointment.status,
      service.price
    ];
  });
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "citas-quiroflex.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      activateView(button.dataset.view);
    });
  });

  els.dateInput.addEventListener("change", () => {
    els.selectedTime.value = "";
    renderSlots();
  });

  els.slotGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".slot");
    if (!button || button.disabled) return;
    els.selectedTime.value = button.dataset.time;
    renderSlots();
  });

  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!els.selectedTime.value) {
      alert("Selecciona un horario disponible.");
      return;
    }
    const appointment = createAppointment(new FormData(els.form));
    if (!appointment) return;
    showConfirmation(appointment);
    els.form.reset();
    els.dateInput.value = todayISO();
    els.selectedTime.value = "";
    renderAll();
  });

  els.form.addEventListener("reset", () => {
    window.setTimeout(() => {
      els.dateInput.value = todayISO();
      els.selectedTime.value = "";
      renderSlots();
    }, 0);
  });

  document.querySelector("#load-demo").addEventListener("click", seedDemoData);

  els.adminDateFilter.addEventListener("change", renderAdmin);

  els.appointmentsBody.addEventListener("change", (event) => {
    if (!event.target.matches(".status-select")) return;
    const appointments = getAppointments().map((appointment) =>
      appointment.id === event.target.dataset.id ? { ...appointment, status: event.target.value } : appointment
    );
    saveAppointments(appointments);
    renderAdmin();
    renderSlots();
  });

  els.appointmentsBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-reminder]");
    if (!button) return;
    const appointment = getAppointments().find((item) => item.id === button.dataset.reminder);
    if (appointment) els.reminderMessage.value = buildMessage(appointment, true);
  });

  document.querySelector("#copy-reminder").addEventListener("click", async () => {
    await navigator.clipboard.writeText(els.reminderMessage.value);
  });

  els.copyConfirmation.addEventListener("click", async () => {
    await navigator.clipboard.writeText(els.whatsappLink.dataset.message || "");
  });

  document.querySelector("#reset-data").addEventListener("click", () => {
    if (!confirm("¿Reiniciar los datos de demostración?")) return;
    saveAppointments([]);
    els.reminderMessage.value = "Selecciona una cita para generar el mensaje.";
    renderAll();
  });

  document.querySelector("#export-csv").addEventListener("click", exportCsv);
}

function activateView(target) {
  const selected = document.querySelector(`.tab-button[data-view="${target}"]`) || document.querySelector(".tab-button");
  const viewId = selected.dataset.view;
  document.querySelectorAll(".tab-button").forEach((item) => item.classList.toggle("active", item === selected));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  renderAll();
}

function init() {
  renderServices();
  els.dateInput.value = todayISO();
  els.adminDateFilter.value = todayISO();
  if (getAppointments().length === 0) seedDemoData();
  bindEvents();
  const params = new URLSearchParams(window.location.search);
  activateView(params.get("view") || "booking");
}

init();
