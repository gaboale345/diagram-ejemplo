/* ==========================================================================
   PANEL DE PLANIFICACIÓN SCRUM - HOSPITAL MUNICIPAL PLAN 3000
   Lógica JavaScript (Vanilla JS ES6+) - Sin dependencias de frameworks
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. FUENTE DE DATOS OFICIAL (PDF 100% FIEL)
     ========================================================================== */

  const PROYECTO = {
    nombre: "Sistema Digital de Gestión de Citas y Turnos — Hospital Municipal Plan 3000",
    actividad: "Actividad 3.1 — Planificación del Proyecto (Scrum)",
    asignatura: "Desarrollo de Sistemas 2",
    unidad: "Unidad 1: Especificación de Requisitos de Sistemas",
    version: "Versión 2 Semanas",
    sprintNombre: "Sprint 1 (Sprint Único)",
    sprintDuracion: "2 Semanas (10 días hábiles)",
    diasHabiles: 10,
    diasCronogramaTotal: 12,
    horasTotalesPlanificadas: 240,
    horasPorIntegrante: 60,
    totalIntegrantes: 4,
    objetivoSprint: "Entregar un prototipo funcional del Sistema de Gestión de Citas que permita a los pacientes registrarse, consultar disponibilidad, solicitar citas y recibir confirmaciones; y al personal administrativo gestionar agendas y usuarios.",
    criteriosPriorizacion: [
      { criterio: "Valor para el paciente", porcentaje: 30 },
      { criterio: "Funcionalidad mínima viable (MVP)", porcentaje: 25 },
      { criterio: "Dependencias técnicas", porcentaje: 20 },
      { criterio: "Complejidad de implementación", porcentaje: 15 },
      { criterio: "Visibilidad ante stakeholders", porcentaje: 10 }
    ]
  };

  const INTEGRANTES = [
    {
      id: "INT-01",
      nombre: "Gabriel Alcon",
      rol: "Desarrollador Front-end / UI/UX",
      area: "Front-end & UI/UX",
      horasPlanificadas: 60,
      responsabilidades: "Desarrollar, probar e integrar las funcionalidades de interfaz de usuario; auto-organizarse para cumplir los objetivos del Sprint.",
      avatar: "GA",
      color: "#3b82f6"
    },
    {
      id: "INT-02",
      nombre: "Rudi Condo",
      rol: "Desarrollador Back-end / API",
      area: "Back-end & API",
      horasPlanificadas: 60,
      responsabilidades: "Desarrollar, probar e integrar las funcionalidades de API y servidores; auto-organizarse para cumplir los objetivos del Sprint.",
      avatar: "RC",
      color: "#8b5cf6"
    },
    {
      id: "INT-03",
      nombre: "Olver Alvarez",
      rol: "Desarrollador Full-stack / Base de Datos / Product Owner",
      area: "Base de Datos & Full-stack",
      horasPlanificadas: 60,
      responsabilidades: "PO: Definir y priorizar el Product Backlog; representar los intereses de los pacientes y del hospital; aceptar o rechazar entregables. Dev: Desarrollar e integrar DB.",
      avatar: "OA",
      color: "#14b8a6"
    },
    {
      id: "INT-04",
      nombre: "Mijail Galarza",
      rol: "Desarrollador Front-end / QA / Scrum Master",
      area: "QA & Front-end",
      horasPlanificadas: 60,
      responsabilidades: "SM: Facilitar las ceremonias Scrum; eliminar impedimentos; asegurar prácticas ágiles; guiar al Product Owner. QA: Pruebas de calidad y pantallas.",
      avatar: "MG",
      color: "#ec4899"
    }
  ];

  const ROLES_SCRUM = [
    {
      rol: "Product Owner",
      integrante: "Olver Alvarez",
      responsabilidades: "Definir y priorizar el Product Backlog; representar los intereses de los pacientes y del hospital; aceptar o rechazar entregables."
    },
    {
      rol: "Scrum Master",
      integrante: "Mijail Galarza",
      responsabilidades: "Facilitar las ceremonias Scrum; eliminar impedimentos; asegurar prácticas ágiles; guiar al Product Owner."
    },
    {
      rol: "Development Team",
      integrante: "Todos los integrantes (Gabriel Alcon, Rudi Condo, Olver Alvarez, Mijail Galarza)",
      responsabilidades: "Desarrollar, probar e integrar las funcionalidades; auto-organizarse para cumplir los objetivos del Sprint."
    }
  ];

  const HISTORIAS_USUARIO = [
    {
      id: "HU01",
      historia: "Como paciente, quiero registrarme en el sistema con mi cédula de identidad para poder solicitar citas médicas.",
      prioridad: "A",
      puntos: 3,
      dependencias: "-",
      enSprint1: true,
      responsables: "Gabriel / Rudi / Olver"
    },
    {
      id: "HU02",
      historia: "Como paciente, quiero iniciar sesión con mi cédula y contraseña para acceder a mis citas y perfil.",
      prioridad: "A",
      puntos: 2,
      dependencias: "HU01",
      enSprint1: true,
      responsables: "Gabriel / Rudi"
    },
    {
      id: "HU03",
      historia: "Como paciente, quiero consultar la disponibilidad de turnos por especialidad, fecha y médico para planificar mi cita.",
      prioridad: "A",
      puntos: 5,
      dependencias: "HU02",
      enSprint1: true,
      responsables: "Gabriel / Rudi / Olver"
    },
    {
      id: "HU04",
      historia: "Como paciente, quiero solicitar una cita seleccionando un turno disponible para agendar mi atención médica.",
      prioridad: "A",
      puntos: 5,
      dependencias: "HU03",
      enSprint1: true,
      responsables: "Gabriel / Rudi / Olver"
    },
    {
      id: "HU05",
      historia: "Como paciente, quiero recibir una confirmación de mi cita vía SMS y correo para tener certeza de mi atención.",
      prioridad: "A",
      puntos: 3,
      dependencias: "HU04",
      enSprint1: true,
      responsables: "Gabriel / Rudi / Mijail"
    },
    {
      id: "HU06",
      historia: "Como paciente, quiero cancelar una cita con antelación para liberar el turno y no perjudicar a otros pacientes.",
      prioridad: "M",
      puntos: 2,
      dependencias: "HU04",
      enSprint1: true,
      responsables: "Gabriel / Rudi"
    },
    {
      id: "HU07",
      historia: "Como paciente, quiero ver el historial de mis citas para hacer seguimiento de mi atención médica.",
      prioridad: "M",
      puntos: 2,
      dependencias: "HU04",
      enSprint1: false,
      responsables: "Gabriel / Rudi"
    },
    {
      id: "HU08",
      historia: "Como personal administrativo de ventanilla, quiero registrar pacientes en el sistema para aquellos que no usan tecnología.",
      prioridad: "A",
      puntos: 2,
      dependencias: "HU01",
      enSprint1: true,
      responsables: "Mijail / Rudi / Olver"
    },
    {
      id: "HU09",
      historia: "Como personal administrativo, quiero gestionar las agendas de los médicos (crear, modificar, bloquear horarios) para organizar la atención.",
      prioridad: "A",
      puntos: 5,
      dependencias: "-",
      enSprint1: true,
      responsables: "Mijail / Rudi / Olver"
    },
    {
      id: "HU10",
      historia: "Como personal administrativo, quiero asignar turnos manualmente a pacientes en ventanilla o Call Center para atender solicitudes.",
      prioridad: "M",
      puntos: 3,
      dependencias: "HU09, HU04",
      enSprint1: false,
      responsables: "Mijail / Rudi / Olver"
    },
    {
      id: "HU11",
      historia: "Como médico, quiero consultar mi agenda de citas para conocer mis pacientes programados.",
      prioridad: "A",
      puntos: 2,
      dependencias: "HU09",
      enSprint1: true,
      responsables: "Mijail / Rudi / Olver"
    },
    {
      id: "HU12",
      historia: "Como administrador del sistema, quiero gestionar usuarios y roles para controlar el acceso al sistema.",
      prioridad: "A",
      puntos: 5,
      dependencias: "-",
      enSprint1: true,
      responsables: "Mijail / Rudi / Olver"
    },
    {
      id: "HU13",
      historia: "Como sistema, quiero enviar notificaciones a través de SMS y correo para comunicarme con los pacientes.",
      prioridad: "A",
      puntos: 5,
      dependencias: "HU05",
      enSprint1: true,
      responsables: "Mijail / Rudi / Gabriel"
    },
    {
      id: "HU14",
      historia: "Como paciente, quiero recibir recordatorios automáticos 24 horas antes de mi cita para no olvidarla.",
      prioridad: "M",
      puntos: 3,
      dependencias: "HU05",
      enSprint1: false,
      responsables: "Mijail / Rudi / Gabriel"
    }
  ];

  // 40 Tareas Totales (10 GA, 9 RC, 11 OA, 10 MG) sumando 60h por persona
  const TAREAS = [
    // Gabriel Alcon (60h)
    { id: "TA-GA-01", descripcion: "Diseño de mockups y prototipo de interfaces (Figma)", historias: "HU01-HU13", horas: 8, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "DONE" },
    { id: "TA-GA-02", descripcion: "Implementación de pantalla de Registro de Paciente", historias: "HU01", horas: 6, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "DONE" },
    { id: "TA-GA-03", descripcion: "Implementación de pantalla de Inicio de Sesión", historias: "HU02", horas: 4, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "DONE" },
    { id: "TA-GA-04", descripcion: "Implementación de pantalla de Consulta de Disponibilidad", historias: "HU03", horas: 8, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "IN_PROGRESS" },
    { id: "TA-GA-05", descripcion: "Implementación de pantalla de Solicitud de Cita", historias: "HU04", horas: 8, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "TODO" },
    { id: "TA-GA-06", descripcion: "Implementación de pantalla de Confirmación de Cita", historias: "HU05", horas: 4, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "TODO" },
    { id: "TA-GA-07", descripcion: "Implementación de pantalla de Cancelación de Cita", historias: "HU06", horas: 4, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "BACKLOG" },
    { id: "TA-GA-08", descripcion: "Implementación de Dashboard del Paciente", historias: "HU01-HU13", horas: 6, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "BACKLOG" },
    { id: "TA-GA-09", descripcion: "Integración de Front-end con API Back-end", historias: "Todas", horas: 6, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "BACKLOG" },
    { id: "TA-GA-10", descripcion: "Pruebas de interfaces y ajustes finales", historias: "Todas", horas: 6, integranteId: "INT-01", integranteNombre: "Gabriel Alcon", estado: "BACKLOG" },

    // Rudi Condo (60h)
    { id: "TA-RC-01", descripcion: "Configuración del servidor y estructura de API", historias: "Todas", horas: 4, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "DONE" },
    { id: "TA-RC-02", descripcion: "Desarrollo de API de Autenticación (Login/Register)", historias: "HU01, HU02, HU12", horas: 8, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "DONE" },
    { id: "TA-RC-03", descripcion: "Desarrollo de API de Gestión de Pacientes", historias: "HU01, HU08", horas: 6, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "DONE" },
    { id: "TA-RC-04", descripcion: "Desarrollo de API de Especialidades y Médicos", historias: "HU09, HU11", horas: 6, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "IN_PROGRESS" },
    { id: "TA-RC-05", descripcion: "Desarrollo de API de Agendas Médicas", historias: "HU09, HU03", horas: 8, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "TODO" },
    { id: "TA-RC-06", descripcion: "Desarrollo de API de Citas (Solicitar, Confirmar, Cancelar)", historias: "HU04, HU05, HU06", horas: 10, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "TODO" },
    { id: "TA-RC-07", descripcion: "Desarrollo de API de Notificaciones (SMS/Correo)", historias: "HU05, HU13", horas: 8, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "BACKLOG" },
    { id: "TA-RC-08", descripcion: "Desarrollo de API de Gestión de Usuarios y Roles", historias: "HU12", horas: 6, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "BACKLOG" },
    { id: "TA-RC-09", descripcion: "Documentación de API (Swagger/Postman)", historias: "Todas", horas: 4, integranteId: "INT-02", integranteNombre: "Rudi Condo", estado: "BACKLOG" },

    // Olver Alvarez (60h)
    { id: "TA-OA-01", descripcion: "Modelado de Base de Datos (Diagrama ER)", historias: "Todas", horas: 4, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "DONE" },
    { id: "TA-OA-02", descripcion: "Creación de tablas y relaciones en PostgreSQL", historias: "Todas", horas: 4, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "DONE" },
    { id: "TA-OA-03", descripcion: "Definición de scripts de población de datos iniciales", historias: "Todas", horas: 4, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "DONE" },
    { id: "TA-OA-04", descripcion: "Desarrollo de Repositorios y consultas SQL", historias: "HU09, HU04, HU03", horas: 10, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "IN_PROGRESS" },
    { id: "TA-OA-05", descripcion: "Gestión de roles y permisos en la base de datos", historias: "HU12", horas: 4, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "TODO" },
    { id: "TA-OA-06", descripcion: "Configuración de conexión Backend-BD (ORM)", historias: "Todas", horas: 4, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "TODO" },
    { id: "TA-OA-07", descripcion: "Desarrollo de reportes básicos (consultas administrativas)", historias: "Todas", horas: 6, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "BACKLOG" },
    { id: "TA-OA-08", descripcion: "Sincronización de agendas con disponibilidad", historias: "HU09", horas: 6, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "BACKLOG" },
    { id: "TA-OA-09", descripcion: "Revisión y validación del Product Backlog", historias: "Todas", horas: 4, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "BACKLOG" },
    { id: "TA-OA-10", descripcion: "Soporte a Back-end y Front-end", historias: "Todas", horas: 6, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "BACKLOG" },
    { id: "TA-OA-11", descripcion: "Pruebas de integración y cobertura", historias: "Todas", horas: 8, integranteId: "INT-03", integranteNombre: "Olver Alvarez", estado: "BACKLOG" },

    // Mijail Galarza (60h)
    { id: "TA-MG-01", descripcion: "Implementación de pantalla de Registro (Ventanilla)", historias: "HU08", horas: 6, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "DONE" },
    { id: "TA-MG-02", descripcion: "Implementación de pantalla de Gestión de Agendas", historias: "HU09", horas: 8, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "DONE" },
    { id: "TA-MG-03", descripcion: "Implementación de pantalla de Consulta de Agenda Médica", historias: "HU11", horas: 4, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "TESTING" },
    { id: "TA-MG-04", descripcion: "Implementación de panel de Administración de Usuarios", historias: "HU12", horas: 8, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "TODO" },
    { id: "TA-MG-05", descripcion: "Implementación de sistema de notificaciones Front-end", historias: "HU05, HU13", horas: 6, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "TODO" },
    { id: "TA-MG-06", descripcion: "Planificación y facilitación de ceremonias Scrum", historias: "Todas", horas: 4, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "DONE" },
    { id: "TA-MG-07", descripcion: "Pruebas de calidad (QA) en Front-end", historias: "Todas", horas: 8, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "BACKLOG" },
    { id: "TA-MG-08", descripcion: "Pruebas de calidad (QA) en Back-end", historias: "Todas", horas: 6, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "BACKLOG" },
    { id: "TA-MG-09", descripcion: "Reporte de bugs y seguimiento de incidencias", historias: "Todas", horas: 6, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "BACKLOG" },
    { id: "TA-MG-10", descripcion: "Preparación de presentación final (Demo)", historias: "Todas", horas: 4, integranteId: "INT-04", integranteNombre: "Mijail Galarza", estado: "BACKLOG" }
  ];

  const CRONOGRAMA_DIARIO = [
    { dia: 1, fecha: "Lunes", gabriel: "Diseño Mockups (TA-GA-01)", rudi: "Configuración API (TA-RC-01)", olver: "Modelado BD (TA-OA-01)", mijail: "Sprint Planning (TA-MG-06) + Inicio QA" },
    { dia: 2, fecha: "Martes", gabriel: "Pantalla Registro (TA-GA-02)", rudi: "API Autenticación (TA-RC-02)", olver: "Creación tablas (TA-OA-02)", mijail: "Pantalla Registro Ventanilla (TA-MG-01)" },
    { dia: 3, fecha: "Miércoles", gabriel: "Pantalla Login (TA-GA-03)", rudi: "API Pacientes (TA-RC-03)", olver: "Repositorios SQL (TA-OA-04)", mijail: "Pantalla Agendas (TA-MG-02)" },
    { dia: 4, fecha: "Jueves", gabriel: "Pantalla Disponibilidad (TA-GA-04)", rudi: "API Agendas (TA-RC-05)", olver: "Roles BD (TA-OA-05)", mijail: "Pantalla Agenda Médica (TA-MG-03)" },
    { dia: 5, fecha: "Viernes", gabriel: "Pantalla Solicitar Cita (TA-GA-05)", rudi: "API Citas (TA-RC-06)", olver: "Conexión ORM (TA-OA-06)", mijail: "Pantalla Admin Usuarios (TA-MG-04)" },
    { dia: 6, fecha: "Sábado", gabriel: "Pantalla Confirmación (TA-GA-06)", rudi: "API Notificaciones (TA-RC-07)", olver: "Reportes básicos (TA-OA-07)", mijail: "Notificaciones FE (TA-MG-05)" },
    { dia: 7, fecha: "Domingo", gabriel: "DESCANSO", rudi: "DESCANSO", olver: "DESCANSO", mijail: "DESCANSO" },
    { dia: 8, fecha: "Lunes", gabriel: "Pantalla Cancelación (TA-GA-07)", rudi: "API Usuarios Roles (TA-RC-08)", olver: "Sincronización (TA-OA-08)", mijail: "QA Front-end (TA-MG-07)" },
    { dia: 9, fecha: "Martes", gabriel: "Dashboard Paciente (TA-GA-08)", rudi: "Documentación API (TA-RC-09)", olver: "Validación Backlog (TA-OA-09)", mijail: "QA Back-end (TA-MG-08)" },
    { dia: 10, fecha: "Miércoles", gabriel: "Integración Front-Back (TA-GA-09)", rudi: "Soporte Back-end", olver: "Soporte Fullstack (TA-OA-10)", mijail: "Reporte Bugs (TA-MG-09)" },
    { dia: 11, fecha: "Jueves", gabriel: "Pruebas y ajustes (TA-GA-10)", rudi: "Pruebas y ajustes", olver: "Pruebas integración (TA-OA-11)", mijail: "Preparación Demo (TA-MG-10)" },
    { dia: 12, fecha: "Viernes", gabriel: "SPRINT REVIEW & DEMO", rudi: "SPRINT REVIEW & DEMO", olver: "SPRINT REVIEW & DEMO", mijail: "SPRINT REVIEW & DEMO" }
  ];

  const MATRIZ_TRAZABILIDAD = [
    { id: "HU01", historia: "Registro de pacientes", tareas: "TA-GA-02, TA-RC-02, TA-RC-03, TA-OA-01, TA-OA-02", responsable: "Gabriel / Rudi / Olver" },
    { id: "HU02", historia: "Inicio de sesión", tareas: "TA-GA-03, TA-RC-02, TA-OA-01", responsable: "Gabriel / Rudi" },
    { id: "HU03", historia: "Consulta de disponibilidad", tareas: "TA-GA-04, TA-RC-05, TA-OA-04", responsable: "Gabriel / Rudi / Olver" },
    { id: "HU04", historia: "Solicitud de citas", tareas: "TA-GA-05, TA-RC-06, TA-OA-04", responsable: "Gabriel / Rudi / Olver" },
    { id: "HU05", historia: "Confirmación de citas", tareas: "TA-GA-06, TA-RC-06, TA-RC-07, TA-MG-05", responsable: "Gabriel / Rudi / Mijail" },
    { id: "HU06", historia: "Cancelación de citas", tareas: "TA-GA-07, TA-RC-06", responsable: "Gabriel / Rudi" },
    { id: "HU08", historia: "Registro de pacientes (ventanilla)", tareas: "TA-MG-01, TA-RC-03, TA-OA-02", responsable: "Mijail / Rudi / Olver" },
    { id: "HU09", historia: "Gestión de agendas médicas", tareas: "TA-MG-02, TA-RC-05, TA-OA-04, TA-OA-08", responsable: "Mijail / Rudi / Olver" },
    { id: "HU11", historia: "Consulta de agenda médica", tareas: "TA-MG-03, TA-RC-05, TA-OA-04", responsable: "Mijail / Rudi / Olver" },
    { id: "HU12", historia: "Gestión de usuarios y roles", tareas: "TA-MG-04, TA-RC-08, TA-OA-05", responsable: "Mijail / Rudi / Olver" },
    { id: "HU13", historia: "Envío de notificaciones", tareas: "TA-MG-05, TA-RC-07, TA-GA-06", responsable: "Mijail / Rudi / Gabriel" }
  ];

  const CEREMONIAS = [
    {
      ceremonia: "Sprint Planning",
      frecuencia: "1 vez",
      dia: "Día 1",
      hora: "09:00 - 11:00",
      participantes: "Todo el equipo",
      objetivo: "Definir el objetivo del Sprint y seleccionar las Historias de Usuario a desarrollar."
    },
    {
      ceremonia: "Daily Scrum",
      frecuencia: "Diaria",
      dia: "Días 1 - 11",
      hora: "09:00 - 09:15",
      participantes: "Equipo de Desarrollo",
      objetivo: "Sincronizar el trabajo diario, revisar avances e identificar impedimentos de desarrollo."
    },
    {
      ceremonia: "Sprint Review",
      frecuencia: "1 vez",
      dia: "Día 12",
      hora: "10:00 - 12:00",
      participantes: "Todo el equipo + Stakeholders",
      objetivo: "Presentar el prototipo funcional e incremento entregable del sistema a las partes interesadas."
    },
    {
      ceremonia: "Sprint Retrospective",
      frecuencia: "1 vez",
      dia: "Día 12",
      hora: "14:00 - 15:00",
      participantes: "Equipo de Desarrollo",
      objetivo: "Evaluar el desempeño del equipo, la dinámica de trabajo e identificar oportunidades de mejora continua."
    }
  ];

  const HERRAMIENTAS = [
    { nombre: "Trello / Jira", uso: "Gestión del Sprint Backlog y seguimiento de tareas en tablero Kanban.", icono: "fa-kanban", color: "#0052CC" },
    { nombre: "GitHub / GitLab", uso: "Control de versiones y repositorio de código centralizado.", icono: "fa-code-branch", color: "#6e5494" },
    { nombre: "Figma / Adobe XD", uso: "Diseño de interfaces, prototipado de alta fidelidad y UX.", icono: "fa-figma", color: "#F24E1E" },
    { nombre: "Postman / Swagger", uso: "Pruebas de endpoints RESTful y documentación técnica de API.", icono: "fa-vial", color: "#FF6C37" },
    { nombre: "WhatsApp / Slack", uso: "Comunicación diaria, consultas rápidas y coordinación del equipo.", icono: "fa-comments", color: "#25D366" },
    { nombre: "Google Drive", uso: "Compartición de documentos, especificación de requisitos y minutas.", icono: "fa-hard-drive", color: "#0F9D58" }
  ];

  const PROMPTS_IA = [
    {
      id: "Prompt 1",
      prompt: "Basado en los requerimientos funcionales del Sistema de Gestión de Citas del Hospital Plan 3000, crea un Product Backlog priorizado para un desarrollo de 2 semanas. Prioriza las funcionalidades de mayor valor para el paciente.",
      objetivo: "Obtener un Product Backlog adaptado a un plazo de 2 semanas.",
      informacion: "Product Backlog con 14 historias de usuario priorizadas para un MVP.",
      uso: "Base del Product Backlog en la sección 2 del PDF.",
      verificacion: "Se ajustaron las prioridades según el criterio de MVP."
    },
    {
      id: "Prompt 2",
      prompt: "Desglosa las historias de usuario en tareas específicas para 4 desarrolladores: Front-end (Gabriel), Back-end (Rudi), Full-stack/BD (Olver) y QA/Scrum Master (Mijail). Distribuye 60 horas por persona.",
      objetivo: "Asignar tareas específicas a cada integrante del equipo.",
      informacion: "Desglose detallado de tareas por integrante.",
      uso: "Base de la sección 4 (Desglose de Tareas por Integrante).",
      verificacion: "Se verificó que la carga horaria no exceda las 60 horas por persona."
    },
    {
      id: "Prompt 3",
      prompt: "Crea un cronograma diario de 12 días hábiles para el desarrollo del Sistema de Gestión de Citas, distribuyendo las tareas entre 4 desarrolladores.",
      objetivo: "Generar un cronograma realista de ejecución.",
      informacion: "Distribución diaria de tareas en 12 días.",
      uso: "Base de la sección 5 (Cronograma de Actividades).",
      verificacion: "Se ajustaron las dependencias técnicas entre tareas."
    },
    {
      id: "Prompt 4",
      prompt: "Define las ceremonias Scrum para un proyecto de 2 semanas e indica las herramientas necesarias para el seguimiento del Sprint.",
      objetivo: "Establecer las ceremonias y herramientas del marco Scrum.",
      informacion: "Detalles de ceremonias y herramientas de gestión.",
      uso: "Base de las secciones 6 y 8 (Herramientas y Ceremonias).",
      verificacion: "Se contrastó con la Guía Scrum 2020."
    }
  ];

  /* ==========================================================================
     2. GESTIÓN DE NAVEGACIÓN Y VISTAS (SPA)
     ========================================================================== */

  const navItems = document.querySelectorAll('.nav-item');
  const viewSections = document.querySelectorAll('.view-section');
  const currentSectionTitle = document.getElementById('current-section-title');
  const currentSectionDesc = document.getElementById('current-section-desc');

  const SECTION_TITLES = {
    'dashboard': { title: 'Dashboard Principal', desc: 'Resumen en tiempo real del progreso, métricas y estado del Sprint' },
    'roles': { title: 'Equipo Scrum & Roles', desc: 'Integrantes del proyecto y asignación oficial de responsabilidades' },
    'product-backlog': { title: 'Product Backlog Priorizado', desc: 'Lista de 14 Historias de Usuario con priorización ponderada' },
    'sprint-backlog': { title: 'Sprint Backlog & Tablero Kanban', desc: 'Sprint 1 — 39 Story Points (11 Historias Seleccionadas)' },
    'user-stories': { title: 'Historias de Usuario', desc: 'Detalle individual de Requisitos en formato estándar Scrum' },
    'tasks-member': { title: 'Tareas por Integrante', desc: 'Distribución exacta de 60 horas planificadas por desarrollador' },
    'timeline': { title: 'Línea de Tiempo Interactiva', desc: 'Roadmap visual estilo Canva/PowerPoint día a día del Sprint' },
    'schedule': { title: 'Cronograma de Actividades (Gantt)', desc: 'Distribución diaria de trabajo a lo largo de los 12 días del Sprint' },
    'traceability': { title: 'Matriz de Trazabilidad', desc: 'Mapeo bidireccional entre Historias de Usuario, Tareas y Responsables' },
    'ceremonies': { title: 'Ceremonias Scrum', desc: 'Eventos del marco de trabajo ágil adaptados al desarrollo de 2 semanas' },
    'tools': { title: 'Herramientas de Seguimiento', desc: 'Stack tecnológico y herramientas colaborativas de gestión' },
    'metrics': { title: 'Métricas Scrum & Velocidad', desc: 'Estadísticas dinámicas de desempeño y gráfico Burndown/Burnup' },
    'prompts-ia': { title: 'Prompts de Inteligencia Artificial', desc: 'Registro de la Sección 9 del PDF: Prompts de apoyo en la planificación' }
  };

  function switchView(viewId) {
    navItems.forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    viewSections.forEach(section => {
      if (section.id === `view-${viewId}`) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    if (SECTION_TITLES[viewId]) {
      currentSectionTitle.textContent = SECTION_TITLES[viewId].title;
      currentSectionDesc.textContent = SECTION_TITLES[viewId].desc;
    }

    // Dynamic render triggers on tab switch
    if (viewId === 'dashboard' || viewId === 'metrics') {
      updateCharts();
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.dataset.view;
      switchView(viewId);
      // Close mobile menu if open
      document.querySelector('.sidebar').classList.remove('mobile-open');
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('mobile-open');
    });
  }

  /* ==========================================================================
     3. RENDERIZADO Y LÓGICA DE DATO DINÁMICO
     ========================================================================== */

  // Render Roles Scrum
  function renderRoles() {
    const container = document.getElementById('roles-cards-container');
    if (!container) return;

    container.innerHTML = ROLES_SCRUM.map(r => `
      <div class="glass-card member-card">
        <div class="member-profile-header">
          <div class="member-avatar-lg">
            <i class="fa-solid fa-user-gear"></i>
          </div>
          <div class="member-info-header">
            <h3>${r.rol}</h3>
            <span class="member-role-badge"><i class="fa-solid fa-id-badge"></i> ${r.integrante}</span>
          </div>
        </div>
        <div class="responsibilities-box">
          <strong>Responsabilidades del Rol:</strong>
          <p class="mt-20" style="margin-top: 8px;">${r.responsabilidades}</p>
        </div>
      </div>
    `).join('');

    const teamContainer = document.getElementById('team-members-container');
    if (teamContainer) {
      teamContainer.innerHTML = INTEGRANTES.map(m => `
        <div class="glass-card member-card">
          <div class="member-profile-header">
            <div class="member-avatar-lg" style="background: ${m.color}">
              ${m.avatar}
            </div>
            <div class="member-info-header">
              <h3>${m.nombre}</h3>
              <span class="member-role-badge">${m.rol}</span>
            </div>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            <div><strong>Área de Trabajo:</strong> ${m.area}</div>
            <div><strong>Horas Asignadas:</strong> ${m.horasPlanificadas} horas (100% capacidad)</div>
          </div>
          <div class="responsibilities-box">
            <strong>Descripción & Tareas:</strong>
            <p style="margin-top: 6px;">${m.responsabilidades}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // Render Product Backlog Table
  function renderProductBacklog(filterPriority = 'ALL', filterStatus = 'ALL', searchQuery = '') {
    const tbody = document.getElementById('backlog-tbody');
    if (!tbody) return;

    let filtered = HISTORIAS_USUARIO.filter(hu => {
      const matchPriority = filterPriority === 'ALL' || hu.prioridad === filterPriority;
      const matchSprint = filterStatus === 'ALL' || (filterStatus === 'SPRINT1' ? hu.enSprint1 : !hu.enSprint1);
      const matchSearch = searchQuery === '' || 
        hu.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
        hu.historia.toLowerCase().includes(searchQuery.toLowerCase());
      return matchPriority && matchSprint && matchSearch;
    });

    tbody.innerHTML = filtered.map(hu => `
      <tr class="clickable-row" onclick="openStoryModal('${hu.id}')">
        <td><strong>${hu.id}</strong></td>
        <td style="max-width: 450px;">${hu.historia}</td>
        <td><span class="badge badge-priority-${hu.prioridad}">Prioridad ${hu.prioridad}</span></td>
        <td><strong>${hu.puntos} pts</strong></td>
        <td><code>${hu.dependencias}</code></td>
        <td>
          ${hu.enSprint1 
            ? `<span class="badge badge-status-DONE"><i class="fa-solid fa-check"></i> Sprint 1</span>` 
            : `<span class="badge badge-status-BACKLOG">Backlog General</span>`}
        </td>
        <td><small style="color: var(--text-muted);">${hu.responsables}</small></td>
      </tr>
    `).join('');
  }

  // Product Backlog Filter Controls
  const prioritySelect = document.getElementById('backlog-filter-priority');
  const sprintSelect = document.getElementById('backlog-filter-sprint');
  const searchInput = document.getElementById('global-search-input');

  if (prioritySelect) {
    prioritySelect.addEventListener('change', () => {
      renderProductBacklog(prioritySelect.value, sprintSelect ? sprintSelect.value : 'ALL', searchInput ? searchInput.value : '');
    });
  }
  if (sprintSelect) {
    sprintSelect.addEventListener('change', () => {
      renderProductBacklog(prioritySelect ? prioritySelect.value : 'ALL', sprintSelect.value, searchInput ? searchInput.value : '');
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProductBacklog(
        prioritySelect ? prioritySelect.value : 'ALL',
        sprintSelect ? sprintSelect.value : 'ALL',
        searchInput.value
      );
    });
  }

  // Render Kanban Board
  function renderKanban() {
    const columns = {
      'BACKLOG': document.getElementById('kanban-col-backlog'),
      'TODO': document.getElementById('kanban-col-todo'),
      'IN_PROGRESS': document.getElementById('kanban-col-in-progress'),
      'TESTING': document.getElementById('kanban-col-testing'),
      'DONE': document.getElementById('kanban-col-done')
    };

    const counters = {
      'BACKLOG': document.getElementById('cnt-backlog'),
      'TODO': document.getElementById('cnt-todo'),
      'IN_PROGRESS': document.getElementById('cnt-in-progress'),
      'TESTING': document.getElementById('cnt-testing'),
      'DONE': document.getElementById('cnt-done')
    };

    // Clear lists
    Object.keys(columns).forEach(key => {
      if (columns[key]) columns[key].innerHTML = '';
    });

    const counts = { BACKLOG: 0, TODO: 0, IN_PROGRESS: 0, TESTING: 0, DONE: 0 };

    TAREAS.forEach(t => {
      const col = columns[t.estado];
      if (col) {
        counts[t.estado]++;
        const card = document.createElement('div');
        card.className = 'kanban-card';
        card.dataset.taskId = t.id;
        card.onclick = () => openTaskModal(t.id);
        card.innerHTML = `
          <div class="kanban-card-header">
            <span class="task-id-tag">${t.id}</span>
            <small style="font-size: 0.72rem; color: var(--text-dim);">${t.horas}h</small>
          </div>
          <div class="kanban-card-title">${t.descripcion}</div>
          <div class="kanban-card-meta">
            <span>${t.historias}</span>
            <div class="assignee-avatar" title="${t.integranteNombre}">${t.integranteNombre.split(' ').map(n=>n[0]).join('')}</div>
          </div>
        `;
        col.appendChild(card);
      }
    });

    // Update counters
    Object.keys(counters).forEach(key => {
      if (counters[key]) counters[key].textContent = counts[key];
    });

    // Setup SortableJS for Drag & Drop
    Object.keys(columns).forEach(colKey => {
      if (columns[colKey] && window.Sortable) {
        new Sortable(columns[colKey], {
          group: 'kanban',
          animation: 150,
          onEnd: function (evt) {
            const itemEl = evt.item;
            const newStatus = evt.to.dataset.status;
            const taskId = itemEl.dataset.taskId;

            const taskObj = TAREAS.find(x => x.id === taskId);
            if (taskObj && newStatus) {
              taskObj.estado = newStatus;
              updateMetricsAndUI();
            }
          }
        });
      }
    });
  }

  // Render User Stories Cards Section
  function renderUserStoriesCards() {
    const container = document.getElementById('stories-cards-grid');
    if (!container) return;

    container.innerHTML = HISTORIAS_USUARIO.map(hu => `
      <div class="glass-card clickable-row" onclick="openStoryModal('${hu.id}')">
        <div class="card-header-flex">
          <span class="badge badge-priority-${hu.prioridad}">Prioridad ${hu.prioridad}</span>
          <span class="task-id-tag">${hu.id}</span>
        </div>
        <p style="font-size: 0.92rem; font-weight: 500; margin-bottom: 14px; line-height: 1.4;">
          ${hu.historia}
        </p>
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 10px;">
          <span><i class="fa-solid fa-chart-line"></i> Estimación: <strong>${hu.puntos} pts</strong></span>
          <span><i class="fa-solid fa-link"></i> Dep: ${hu.dependencias}</span>
        </div>
      </div>
    `).join('');
  }

  // Render Tasks By Team Member
  function renderMemberTasks() {
    const container = document.getElementById('member-tasks-wrapper');
    if (!container) return;

    container.innerHTML = INTEGRANTES.map(m => {
      const memberTasks = TAREAS.filter(t => t.integranteId === m.id);
      const doneHours = memberTasks.filter(t => t.estado === 'DONE').reduce((acc, curr) => acc + curr.horas, 0);
      const totalHours = memberTasks.reduce((acc, curr) => acc + curr.horas, 0);
      const pct = Math.round((doneHours / totalHours) * 100);

      return `
        <div class="glass-card mb-24">
          <div class="card-header-flex">
            <div style="display: flex; align-items: center; gap: 14px;">
              <div class="member-avatar-lg" style="background: ${m.color}">${m.avatar}</div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 700;">${m.nombre}</h3>
                <span class="member-role-badge">${m.rol}</span>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 1.2rem; font-weight: 800; color: var(--accent-primary);">${totalHours} Horas</div>
              <small style="color: var(--text-muted);">${memberTasks.length} Tareas Asignadas</small>
            </div>
          </div>

          <div class="mb-20">
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 6px;">
              <span>Progreso de Carga Horaria</span>
              <span><strong>${doneHours}h / ${totalHours}h (${pct}%)</strong></span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${pct}%;"></div>
            </div>
          </div>

          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>ID TAREA</th>
                  <th>DESCRIPCIÓN</th>
                  <th>HISTORIA</th>
                  <th>HORAS</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <tbody>
                ${memberTasks.map(t => `
                  <tr class="clickable-row" onclick="openTaskModal('${t.id}')">
                    <td><strong>${t.id}</strong></td>
                    <td>${t.descripcion}</td>
                    <td><small>${t.historias}</small></td>
                    <td><strong>${t.horas}h</strong></td>
                    <td><span class="badge badge-status-${t.estado}">${t.estado}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Gantt Schedule Timeline
  function renderGanttSchedule() {
    const table = document.getElementById('gantt-table-element');
    if (!table) return;

    let html = `
      <thead>
        <tr>
          <th class="gantt-member-name">Integrante</th>
          ${CRONOGRAMA_DIARIO.map(d => `
            <th class="${d.dia === 7 ? 'gantt-rest-day' : d.dia === 12 ? 'gantt-demo-day' : 'gantt-day-header'}">
              Día ${d.dia}<br><small style="font-weight: normal;">${d.fecha}</small>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="gantt-member-name">Gabriel Alcon<br><small style="color: var(--text-muted);">Front-end / UI/UX</small></td>
          ${CRONOGRAMA_DIARIO.map(d => `
            <td class="${d.dia === 7 ? 'gantt-rest-day' : d.dia === 12 ? 'gantt-demo-day' : ''}">
              <div class="gantt-task-pill">${d.gabriel}</div>
            </td>
          `).join('')}
        </tr>
        <tr>
          <td class="gantt-member-name">Rudi Condo<br><small style="color: var(--text-muted);">Back-end / API</small></td>
          ${CRONOGRAMA_DIARIO.map(d => `
            <td class="${d.dia === 7 ? 'gantt-rest-day' : d.dia === 12 ? 'gantt-demo-day' : ''}">
              <div class="gantt-task-pill" style="border-color: rgba(139, 92, 246, 0.4); background: rgba(139, 92, 246, 0.2); color: #c084fc;">${d.rudi}</div>
            </td>
          `).join('')}
        </tr>
        <tr>
          <td class="gantt-member-name">Olver Alvarez<br><small style="color: var(--text-muted);">Full-stack / DB / PO</small></td>
          ${CRONOGRAMA_DIARIO.map(d => `
            <td class="${d.dia === 7 ? 'gantt-rest-day' : d.dia === 12 ? 'gantt-demo-day' : ''}">
              <div class="gantt-task-pill" style="border-color: rgba(20, 184, 166, 0.4); background: rgba(20, 184, 166, 0.2); color: #2dd4bf;">${d.olver}</div>
            </td>
          `).join('')}
        </tr>
        <tr>
          <td class="gantt-member-name">Mijail Galarza<br><small style="color: var(--text-muted);">QA / Scrum Master</small></td>
          ${CRONOGRAMA_DIARIO.map(d => `
            <td class="${d.dia === 7 ? 'gantt-rest-day' : d.dia === 12 ? 'gantt-demo-day' : ''}">
              <div class="gantt-task-pill" style="border-color: rgba(236, 72, 153, 0.4); background: rgba(236, 72, 153, 0.2); color: #fbcfe8;">${d.mijail}</div>
            </td>
          `).join('')}
        </tr>
      </tbody>
    `;

    table.innerHTML = html;
  }

  // Render Traceability Matrix Table
  function renderTraceabilityMatrix() {
    const tbody = document.getElementById('traceability-tbody');
    if (!tbody) return;

    tbody.innerHTML = MATRIZ_TRAZABILIDAD.map(row => {
      const storyObj = HISTORIAS_USUARIO.find(h => h.id === row.id);
      return `
        <tr class="clickable-row" onclick="openStoryModal('${row.id}')">
          <td><strong>${row.id}</strong></td>
          <td>${storyObj ? storyObj.historia : row.historia}</td>
          <td><code style="color: #60a5fa;">${row.tareas}</code></td>
          <td><span class="badge badge-status-TODO"><i class="fa-solid fa-users"></i> ${row.responsable}</span></td>
          <td>
            ${storyObj && storyObj.enSprint1 
              ? `<span class="badge badge-status-DONE">Sprint 1</span>` 
              : `<span class="badge badge-status-BACKLOG">Backlog</span>`}
          </td>
        </tr>
      `;
    }).join('');
  }

  // Render Ceremonies Section
  function renderCeremonies() {
    const container = document.getElementById('ceremonies-grid');
    if (!container) return;

    container.innerHTML = CEREMONIAS.map(c => `
      <div class="glass-card ceremony-card">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div class="ceremony-icon">
            <i class="fa-solid fa-calendar-check"></i>
          </div>
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700;">${c.ceremonia}</h3>
            <span style="font-size: 0.78rem; color: var(--accent-teal); font-weight: 600;">Frecuencia: ${c.frecuencia}</span>
          </div>
        </div>
        
        <div class="ceremony-details">
          <div class="ceremony-detail-item">
            <span class="ceremony-detail-label">Día Programado</span>
            <span class="ceremony-detail-val">${c.dia}</span>
          </div>
          <div class="ceremony-detail-item">
            <span class="ceremony-detail-label">Horario</span>
            <span class="ceremony-detail-val">${c.hora}</span>
          </div>
        </div>

        <div style="font-size: 0.84rem; color: var(--text-muted);">
          <strong>Participantes:</strong> ${c.participantes}
        </div>

        <div class="responsibilities-box">
          <strong>Objetivo de la Ceremonia:</strong>
          <p style="margin-top: 4px;">${c.objetivo}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Tools Grid Section
  function renderTools() {
    const container = document.getElementById('tools-grid');
    if (!container) return;

    container.innerHTML = HERRAMIENTAS.map(t => `
      <div class="glass-card">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
          <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: ${t.color}">
            <i class="fa-solid ${t.icono}"></i>
          </div>
          <h3 style="font-size: 1.1rem; font-weight: 700;">${t.nombre}</h3>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.4;">
          <strong>Uso en el Proyecto:</strong> ${t.uso}
        </p>
      </div>
    `).join('');
  }

  // Render AI Prompts Section
  function renderPromptsSection() {
    const container = document.getElementById('prompts-grid-wrapper');
    if (!container) return;

    container.innerHTML = PROMPTS_IA.map(p => `
      <div class="glass-card prompt-card mb-20">
        <div class="card-header-flex">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-primary);">${p.id}</h3>
          <span class="badge badge-status-DONE"><i class="fa-solid fa-robot"></i> Aplicado en PDF</span>
        </div>
        <div class="modal-label">Prompt Utilizado:</div>
        <div class="prompt-text-box">"${p.prompt}"</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px; font-size: 0.84rem;">
          <div><strong>Objetivo del prompt:</strong> ${p.objetivo}</div>
          <div><strong>Información obtenida:</strong> ${p.informacion}</div>
          <div><strong>Cómo fue utilizada:</strong> ${p.uso}</div>
          <div><strong>Verificación:</strong> ${p.verificacion}</div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     4. NUEVO: RENDERIZADO DE LÍNEA DE TIEMPO INTERACTIVA (TIMELINE / ROADMAP)
     ========================================================================== */

  function renderInteractiveTimeline() {
    const container = document.getElementById('timeline-nodes-container');
    if (!container) return;

    container.innerHTML = CRONOGRAMA_DIARIO.map(d => {
      const isRest = d.dia === 7;
      const isDemo = d.dia === 12;
      const iconClass = isRest ? 'fa-mug-hot rest-day' : isDemo ? 'fa-award demo-day' : 'fa-calendar-day';

      return `
        <div class="timeline-node">
          <div class="timeline-node-icon ${isRest ? 'rest-day' : isDemo ? 'demo-day' : ''}">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <div class="timeline-node-content">
            <div class="timeline-day-title">
              <div>
                <span>Día ${d.dia} — ${d.fecha}</span>
                ${isRest ? `<span class="badge badge-priority-M" style="margin-left: 10px;">DESCANSO</span>` : ''}
                ${isDemo ? `<span class="badge badge-status-DONE" style="margin-left: 10px;">SPRINT REVIEW & DEMO</span>` : ''}
              </div>
              <small style="color: var(--text-muted); font-size: 0.8rem;">Fase de Ejecución</small>
            </div>

            <div class="timeline-grid-tasks">
              <div class="timeline-task-card" style="border-left: 3px solid #3b82f6;">
                <div class="timeline-task-author" style="color: #60a5fa;">Gabriel Alcon (Front-end)</div>
                <div>${d.gabriel}</div>
              </div>
              <div class="timeline-task-card" style="border-left: 3px solid #8b5cf6;">
                <div class="timeline-task-author" style="color: #c084fc;">Rudi Condo (Back-end)</div>
                <div>${d.rudi}</div>
              </div>
              <div class="timeline-task-card" style="border-left: 3px solid #14b8a6;">
                <div class="timeline-task-author" style="color: #2dd4bf;">Olver Alvarez (DB / PO)</div>
                <div>${d.olver}</div>
              </div>
              <div class="timeline-task-card" style="border-left: 3px solid #ec4899;">
                <div class="timeline-task-author" style="color: #fbcfe8;">Mijail Galarza (QA / SM)</div>
                <div>${d.mijail}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ==========================================================================
     5. NUEVO: CONTROLADOR DEL MODO PRESENTACIÓN (ESTILO CANVA / POWERPOINT)
     ========================================================================== */

  let currentSlide = 1;
  const totalSlides = 11;

  function getMemberChipsHTML(responsablesStr) {
    if (!responsablesStr) return '-';
    
    const memberMap = {
      'Gabriel': { nombre: 'Gabriel Alcon', avatar: 'GA', color: '#3b82f6' },
      'Rudi': { nombre: 'Rudi Condo', avatar: 'RC', color: '#8b5cf6' },
      'Olver': { nombre: 'Olver Alvarez', avatar: 'OA', color: '#14b8a6' },
      'Mijail': { nombre: 'Mijail Galarza', avatar: 'MG', color: '#ec4899' }
    };

    const parts = responsablesStr.split('/').map(s => s.trim());
    return parts.map(p => {
      const matchKey = Object.keys(memberMap).find(k => p.includes(k));
      if (matchKey) {
        const m = memberMap[matchKey];
        return `<span class="member-chip"><span class="avatar-micro" style="background:${m.color}">${m.avatar}</span> ${m.nombre}</span>`;
      }
      return `<span class="member-chip">${p}</span>`;
    }).join(' ');
  }

  function renderPresCapacityTable() {
    const container = document.getElementById('pres-capacity-table-container');
    if (!container) return;

    container.innerHTML = `
      <div class="presentation-table-wrap">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>INTEGRANTE QUE LO HARÁ</th>
              <th>ROL SCRUM EN PROYECTO</th>
              <th>ÁREA DE TRABAJO</th>
              <th>HORAS PLANIFICADAS</th>
              <th>TAREAS ASIGNADAS</th>
            </tr>
          </thead>
          <tbody>
            ${INTEGRANTES.map(m => {
              const taskCount = TAREAS.filter(t => t.integranteId === m.id).length;
              return `
                <tr>
                  <td><strong>${m.id}</strong></td>
                  <td>
                    <span class="member-chip">
                      <span class="avatar-micro" style="background:${m.color}">${m.avatar}</span>
                      <strong>${m.nombre}</strong>
                    </span>
                  </td>
                  <td><span class="member-role-badge" style="font-size:0.75rem;">${m.rol}</span></td>
                  <td>${m.area}</td>
                  <td><strong style="color:var(--accent-teal);">${m.horasPlanificadas} Horas</strong> (100%)</td>
                  <td><span class="badge badge-status-DONE">${taskCount} Tareas</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderPresScheduleTable() {
    const container = document.getElementById('pres-schedule-table-container');
    if (!container) return;

    container.innerHTML = `
      <div class="presentation-table-wrap">
        <table class="presentation-table">
          <thead>
            <tr>
              <th style="width: 100px;">DÍA HÁBIL</th>
              <th>
                <span class="member-chip"><span class="avatar-micro" style="background:#3b82f6">GA</span> Gabriel Alcon (Front-end)</span>
              </th>
              <th>
                <span class="member-chip"><span class="avatar-micro" style="background:#8b5cf6">RC</span> Rudi Condo (Back-end)</span>
              </th>
              <th>
                <span class="member-chip"><span class="avatar-micro" style="background:#14b8a6">OA</span> Olver Alvarez (DB/PO)</span>
              </th>
              <th>
                <span class="member-chip"><span class="avatar-micro" style="background:#ec4899">MG</span> Mijail Galarza (QA/SM)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${CRONOGRAMA_DIARIO.map(c => `
              <tr style="${c.dia === 7 ? 'background: rgba(239,68,68,0.15);' : c.dia === 12 ? 'background: rgba(16,185,129,0.15);' : ''}">
                <td>
                  <strong>Día ${c.dia}</strong>
                  <div style="font-size: 0.7rem; color: var(--text-muted);">${c.fecha}</div>
                </td>
                <td><small>${c.gabriel}</small></td>
                <td><small>${c.rudi}</small></td>
                <td><small>${c.olver}</small></td>
                <td><small>${c.mijail}</small></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderPresProductBacklogTable() {
    const container = document.getElementById('pres-product-backlog-table-container');
    if (!container) return;

    container.innerHTML = `
      <div class="presentation-table-wrap">
        <table class="presentation-table">
          <thead>
            <tr>
              <th style="width: 60px;">ID</th>
              <th>HISTORIA DE USUARIO</th>
              <th style="width: 110px;">PRIORIDAD</th>
              <th style="width: 70px;">PUNTOS</th>
              <th style="width: 130px;">SELECCIÓN SPRINT</th>
              <th>INTEGRANTES RESPONSABLES QUE LO HARÁN</th>
            </tr>
          </thead>
          <tbody>
            ${HISTORIAS_USUARIO.map(h => `
              <tr>
                <td><strong>${h.id}</strong></td>
                <td style="max-width: 380px;">${h.historia}</td>
                <td>
                  <span class="badge badge-priority-${h.prioridad}">
                    ${h.prioridad === 'A' ? 'Prioridad Alta (A)' : 'Prioridad Media (M)'}
                  </span>
                </td>
                <td><strong>${h.puntos} pts</strong></td>
                <td>
                  ${h.enSprint1 
                    ? `<span class="badge badge-status-DONE">Sprint 1 (39 SP)</span>` 
                    : `<span class="badge badge-status-BACKLOG">Backlog General</span>`}
                </td>
                <td>${getMemberChipsHTML(h.responsables)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  let presMemberFilter = 'ALL';
  window.filterPresTasks = function(memberId) {
    presMemberFilter = memberId;
    renderPresSprintTasksTable();
  };

  function renderPresSprintTasksTable() {
    const container = document.getElementById('pres-sprint-tasks-table-container');
    if (!container) return;

    const filteredTasks = presMemberFilter === 'ALL' 
      ? TAREAS 
      : TAREAS.filter(t => t.integranteId === presMemberFilter);

    const totalHoursFiltered = filteredTasks.reduce((sum, t) => sum + t.horas, 0);

    container.innerHTML = `
      <div class="pres-tabs">
        <button class="pres-tab-btn ${presMemberFilter === 'ALL' ? 'active' : ''}" onclick="filterPresTasks('ALL')">
          <i class="fa-solid fa-list-check"></i> Ver Todas (40 Tareas / 240h)
        </button>
        <button class="pres-tab-btn ${presMemberFilter === 'INT-01' ? 'active' : ''}" onclick="filterPresTasks('INT-01')">
          <span class="avatar-micro" style="background:#3b82f6">GA</span> Gabriel Alcon (10 Tareas / 60h)
        </button>
        <button class="pres-tab-btn ${presMemberFilter === 'INT-02' ? 'active' : ''}" onclick="filterPresTasks('INT-02')">
          <span class="avatar-micro" style="background:#8b5cf6">RC</span> Rudi Condo (9 Tareas / 60h)
        </button>
        <button class="pres-tab-btn ${presMemberFilter === 'INT-03' ? 'active' : ''}" onclick="filterPresTasks('INT-03')">
          <span class="avatar-micro" style="background:#14b8a6">OA</span> Olver Alvarez (11 Tareas / 60h)
        </button>
        <button class="pres-tab-btn ${presMemberFilter === 'INT-04' ? 'active' : ''}" onclick="filterPresTasks('INT-04')">
          <span class="avatar-micro" style="background:#ec4899">MG</span> Mijail Galarza (10 Tareas / 60h)
        </button>
      </div>

      <div class="presentation-table-wrap">
        <table class="presentation-table">
          <thead>
            <tr>
              <th style="width: 100px;">ID TAREA</th>
              <th>DESCRIPCIÓN DE LA TAREA TÉCNICA</th>
              <th>INTEGRANTE ASIGNADO QUE LO HARÁ</th>
              <th style="width: 80px;">HORAS</th>
              <th style="width: 120px;">REQUISITO HU</th>
              <th style="width: 110px;">ESTADO</th>
            </tr>
          </thead>
          <tbody>
            ${filteredTasks.map(t => {
              const member = INTEGRANTES.find(m => m.id === t.integranteId);
              return `
                <tr>
                  <td><strong>${t.id}</strong></td>
                  <td>${t.descripcion}</td>
                  <td>
                    ${member ? `
                      <span class="member-chip">
                        <span class="avatar-micro" style="background:${member.color}">${member.avatar}</span>
                        ${member.nombre}
                      </span>
                    ` : t.integranteNombre}
                  </td>
                  <td><strong>${t.horas} hrs</strong></td>
                  <td><code>${t.historias}</code></td>
                  <td><span class="badge badge-status-${t.estado}">${t.estado}</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 6px; text-align: right;">
        Mostrando <strong>${filteredTasks.length} tareas</strong> (${totalHoursFiltered} horas planificadas)
      </div>
    `;
  }

  function renderPresTraceabilityTable() {
    const container = document.getElementById('pres-traceability-table-container');
    if (!container) return;

    container.innerHTML = `
      <div class="presentation-table-wrap">
        <table class="presentation-table">
          <thead>
            <tr>
              <th style="width: 70px;">ID HU</th>
              <th>HISTORIA DE USUARIO</th>
              <th>TAREAS TÉCNICAS ASOCIADAS</th>
              <th>INTEGRANTES RESPONSABLES QUE LO HARÁN</th>
            </tr>
          </thead>
          <tbody>
            ${MATRIZ_TRAZABILIDAD.map(m => `
              <tr>
                <td><strong>${m.id}</strong></td>
                <td>${m.historia}</td>
                <td><code>${m.tareas}</code></td>
                <td>${getMemberChipsHTML(m.responsable)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderPresentationTables() {
    renderPresCapacityTable();
    renderPresScheduleTable();
    renderPresProductBacklogTable();
    renderPresSprintTasksTable();
    renderPresTraceabilityTable();
  }

  window.openPresentationMode = function() {
    const backdrop = document.getElementById('presentation-backdrop');
    if (backdrop) {
      backdrop.classList.add('active');
      renderPresentationTables();
      showSlide(1);
    }
  };

  window.closePresentationMode = function() {
    const backdrop = document.getElementById('presentation-backdrop');
    if (backdrop) backdrop.classList.remove('active');
  };

  window.nextSlide = function() {
    if (currentSlide < totalSlides) {
      showSlide(currentSlide + 1);
    }
  };

  window.prevSlide = function() {
    if (currentSlide > 1) {
      showSlide(currentSlide - 1);
    }
  };

  function showSlide(slideNum) {
    currentSlide = slideNum;
    const slides = document.querySelectorAll('.slide-content');
    slides.forEach((s, idx) => {
      if (idx + 1 === slideNum) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    const badge = document.getElementById('slide-counter-display');
    if (badge) badge.textContent = `Diapositiva ${currentSlide} de ${totalSlides}`;
  }

  // Teclado para avanzar/retroceder diapositivas
  document.addEventListener('keydown', (e) => {
    const backdrop = document.getElementById('presentation-backdrop');
    if (!backdrop || !backdrop.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'Space') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'Escape') {
      closePresentationMode();
    }
  });

  /* ==========================================================================
     6. MODALES INTERACTIVOS
     ========================================================================== */

  window.openStoryModal = function(storyId) {
    const story = HISTORIAS_USUARIO.find(h => h.id === storyId);
    if (!story) return;

    const modalBackdrop = document.getElementById('app-modal-backdrop');
    const modalContent = document.getElementById('app-modal-content');
    if (!modalBackdrop || !modalContent) return;

    const relatedTasks = TAREAS.filter(t => t.historias.includes(storyId) || t.historias === "Todas" || t.historias === "HU01-HU13");

    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-area">
          <span class="task-id-tag" style="font-size: 0.9rem;">${story.id}</span>
          <h3 style="font-size: 1.15rem; font-weight: 700;">Detalle de Historia de Usuario</h3>
        </div>
        <button class="modal-close-btn" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="modal-body">
        <div class="modal-field-group">
          <span class="modal-label">Historia Completa:</span>
          <p class="modal-value" style="font-size: 1.05rem; font-weight: 600; background: rgba(15,23,42,0.5); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
            "${story.historia}"
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;">
          <div class="modal-field-group">
            <span class="modal-label">Prioridad:</span>
            <div><span class="badge badge-priority-${story.prioridad}">Prioridad ${story.prioridad}</span></div>
          </div>
          <div class="modal-field-group">
            <span class="modal-label">Estimación:</span>
            <div class="modal-value"><strong>${story.puntos} Story Points</strong></div>
          </div>
          <div class="modal-field-group">
            <span class="modal-label">Dependencias:</span>
            <div class="modal-value"><code>${story.dependencias}</code></div>
          </div>
        </div>

        <div class="modal-field-group">
          <span class="modal-label">Inclusión en Sprint:</span>
          <div>
            ${story.enSprint1 
              ? `<span class="badge badge-status-DONE">Seleccionada en Sprint 1 (39 SP totales)</span>` 
              : `<span class="badge badge-status-BACKLOG">Backlog General</span>`}
          </div>
        </div>

        <div class="modal-field-group">
          <span class="modal-label">Integrantes Responsables:</span>
          <div class="modal-value">${story.responsables}</div>
        </div>

        <div class="modal-field-group">
          <span class="modal-label">Tareas Desglosadas Vinculadas (${relatedTasks.length}):</span>
          <div class="table-responsive">
            <table class="custom-table" style="font-size: 0.8rem;">
              <thead>
                <tr>
                  <th>ID TAREA</th>
                  <th>DESCRIPCIÓN</th>
                  <th>RESPONSABLE</th>
                  <th>HORAS</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <tbody>
                ${relatedTasks.map(t => `
                  <tr>
                    <td><strong>${t.id}</strong></td>
                    <td>${t.descripcion}</td>
                    <td>${t.integranteNombre}</td>
                    <td>${t.horas}h</td>
                    <td><span class="badge badge-status-${t.estado}">${t.estado}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
  };

  window.openTaskModal = function(taskId) {
    const task = TAREAS.find(t => t.id === taskId);
    if (!task) return;

    const modalBackdrop = document.getElementById('app-modal-backdrop');
    const modalContent = document.getElementById('app-modal-content');
    if (!modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-area">
          <span class="task-id-tag" style="font-size: 0.9rem;">${task.id}</span>
          <h3 style="font-size: 1.15rem; font-weight: 700;">Detalle de Tarea Técnica</h3>
        </div>
        <button class="modal-close-btn" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="modal-body">
        <div class="modal-field-group">
          <span class="modal-label">Descripción de la Tarea:</span>
          <p class="modal-value" style="font-size: 1.05rem; font-weight: 600; background: rgba(15,23,42,0.5); padding: 14px; border-radius: 8px;">
            ${task.descripcion}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="modal-field-group">
            <span class="modal-label">Integrante Asignado:</span>
            <div class="modal-value"><strong>${task.integranteNombre}</strong></div>
          </div>
          <div class="modal-field-group">
            <span class="modal-label">Carga Horaria:</span>
            <div class="modal-value"><strong>${task.horas} horas</strong></div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="modal-field-group">
            <span class="modal-label">Historias de Usuario Relacionadas:</span>
            <div class="modal-value"><code>${task.historias}</code></div>
          </div>
          <div class="modal-field-group">
            <span class="modal-label">Estado Actual:</span>
            <div><span class="badge badge-status-${task.estado}">${task.estado}</span></div>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
  };

  window.closeModal = function() {
    const modalBackdrop = document.getElementById('app-modal-backdrop');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  };

  /* ==========================================================================
     5. MÉTRICAS Y GRÁFICOS (CHART.JS)
     ========================================================================== */

  let priorityChartInstance = null;
  let memberHoursChartInstance = null;
  let burndownChartInstance = null;
  let statusChartInstance = null;

  function updateMetricsAndUI() {
    const totalTasks = TAREAS.length; // 40
    const doneTasks = TAREAS.filter(t => t.estado === 'DONE').length;
    const inProgressTasks = TAREAS.filter(t => t.estado === 'IN_PROGRESS' || t.estado === 'TESTING').length;
    const pendingTasks = totalTasks - doneTasks;

    const totalHoursPlanned = 240;
    const completedHours = TAREAS.filter(t => t.estado === 'DONE').reduce((sum, t) => sum + t.horas, 0);
    const progressPct = Math.round((completedHours / totalHoursPlanned) * 100);

    // Sprint 1 Story points calculation
    const sprint1Stories = HISTORIAS_USUARIO.filter(h => h.enSprint1);
    const totalSprintPoints = sprint1Stories.reduce((acc, curr) => acc + curr.puntos, 0); // 39

    // Update DOM counters
    const dashProgressPct = document.getElementById('dash-progress-pct');
    const dashProgressBar = document.getElementById('dash-progress-bar');
    const dashDoneTasks = document.getElementById('dash-done-tasks');
    const dashDoneHours = document.getElementById('dash-done-hours');

    if (dashProgressPct) dashProgressPct.textContent = `${progressPct}%`;
    if (dashProgressBar) dashProgressBar.style.width = `${progressPct}%`;
    if (dashDoneTasks) dashDoneTasks.textContent = `${doneTasks} / ${totalTasks}`;
    if (dashDoneHours) dashDoneHours.textContent = `${completedHours}h / 240h`;

    // Metrics tab elements
    const mTotalPoints = document.getElementById('metric-total-points');
    const mCompletedTasks = document.getElementById('metric-completed-tasks');
    const mCompletedHours = document.getElementById('metric-completed-hours');

    if (mTotalPoints) mTotalPoints.textContent = totalSprintPoints;
    if (mCompletedTasks) mCompletedTasks.textContent = `${doneTasks} / ${totalTasks}`;
    if (mCompletedHours) mCompletedHours.textContent = `${completedHours} / 240h`;

    renderKanban();
  }

  function updateCharts() {
    if (typeof Chart === 'undefined') return;

    // 1. Chart Priority Distribution
    const ctxPriority = document.getElementById('chart-priority');
    if (ctxPriority) {
      const highCount = HISTORIAS_USUARIO.filter(h => h.prioridad === 'A').length; // 10
      const medCount = HISTORIAS_USUARIO.filter(h => h.prioridad === 'M').length; // 4

      if (priorityChartInstance) priorityChartInstance.destroy();
      priorityChartInstance = new Chart(ctxPriority, {
        type: 'doughnut',
        data: {
          labels: ['Prioridad Alta (A)', 'Prioridad Media (M)'],
          datasets: [{
            data: [highCount, medCount],
            backgroundColor: ['#ef4444', '#f59e0b'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#94a3b8' } }
          }
        }
      });
    }

    // 2. Chart Member Hours Distribution
    const ctxMemberHours = document.getElementById('chart-member-hours');
    if (ctxMemberHours) {
      const labels = INTEGRANTES.map(m => m.nombre);
      const data = INTEGRANTES.map(m => {
        return TAREAS.filter(t => t.integranteId === m.id).reduce((acc, curr) => acc + curr.horas, 0);
      });

      if (memberHoursChartInstance) memberHoursChartInstance.destroy();
      memberHoursChartInstance = new Chart(ctxMemberHours, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Horas Planificadas',
            data: data,
            backgroundColor: ['#3b82f6', '#8b5cf6', '#14b8a6', '#ec4899'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true, max: 70, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
          },
          plugins: { legend: { display: false } }
        }
      });
    }

    // 3. Chart Task Status Distribution
    const ctxStatus = document.getElementById('chart-task-status');
    if (ctxStatus) {
      const statuses = ['BACKLOG', 'TODO', 'IN_PROGRESS', 'TESTING', 'DONE'];
      const statusCounts = statuses.map(s => TAREAS.filter(t => t.estado === s).length);

      if (statusChartInstance) statusChartInstance.destroy();
      statusChartInstance = new Chart(ctxStatus, {
        type: 'pie',
        data: {
          labels: ['Backlog', 'To Do', 'In Progress', 'Testing', 'Done'],
          datasets: [{
            data: statusCounts,
            backgroundColor: ['#64748b', '#3b82f6', '#f59e0b', '#ec4899', '#10b981'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
        }
      });
    }

    // 4. Burnup / Progress Chart
    const ctxBurndown = document.getElementById('chart-burndown');
    if (ctxBurndown) {
      const days = [1,2,3,4,5,6,7,8,9,10,11,12].map(d => `Día ${d}`);
      const idealProgress = [20,40,60,80,100,120,120,150,180,210,230,240];
      const realProgress = [24,52,86,118,140,160,160,184,210,224,236,240];

      if (burndownChartInstance) burndownChartInstance.destroy();
      burndownChartInstance = new Chart(ctxBurndown, {
        type: 'line',
        data: {
          labels: days,
          datasets: [
            {
              label: 'Avance Ideal (Horas)',
              data: idealProgress,
              borderColor: '#64748b',
              borderDash: [5, 5],
              fill: false,
              tension: 0.2
            },
            {
              label: 'Avance Real (Horas)',
              data: realProgress,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true, max: 250, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
          },
          plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
        }
      });
    }
  }

  /* ==========================================================================
     8. INICIALIZACIÓN GENERAL
     ========================================================================== */

  renderRoles();
  renderProductBacklog();
  renderKanban();
  renderUserStoriesCards();
  renderMemberTasks();
  renderInteractiveTimeline();
  renderGanttSchedule();
  renderTraceabilityMatrix();
  renderCeremonies();
  renderTools();
  renderPromptsSection();
  renderPresentationTables();

  updateMetricsAndUI();
  updateCharts();

});
