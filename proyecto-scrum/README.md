# Panel de Planificación Scrum — Hospital Municipal Plan 3000

Aplicación Web Interactiva y Profesional para la representación completa de la **Planificación del Proyecto Mediante Scrum (Versión 2 Semanas)** del *Sistema Digital de Gestión de Citas y Turnos — Hospital Municipal Plan 3000*, desarrollada en estricta conformidad con el documento oficial en PDF del proyecto.

---

## 🚀 Cómo Ejecutar el Proyecto

No se requiere ningún servidor backend o proceso de compilación previo. La aplicación está desarrollada con tecnologías web estándar (Vanilla JavaScript, HTML5 y CSS3).

### Pasos:
1. Navega hasta la carpeta del proyecto: `proyecto-scrum/` o la raíz del repositorio.
2. Abre directamente el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave, Safari).
3. O bien, puedes utilizar una extensión como *Live Server* en VS Code o servir los archivos con cualquier servidor local simple (ej. `npx serve` o `python -m http.server 8000`).

---

## 📁 Estructura del Proyecto

La estructura de archivos cumple exactamente con los requisitos solicitados:

```
proyecto-scrum/
│
├── index.html          # Estructura principal HTML5 semántica y contenedores SPA
│
├── css/
│   └── styles.css      # Sistema de diseño CSS3 moderno, Dark Theme, Glassmorphism y Responsive Grid
│
├── js/
│   └── app.js          # Datos del PDF en objetos JS, ruteo SPA, Chart.js, Drag & Drop y Modales
│
└── README.md           # Documentación del proyecto, guía de uso y stack tecnológico
```

---

## 🛠️ Tecnologías y Librerías CDN Utilizadas

### Core:
- **HTML5:** Marcado semántico y accesible.
- **CSS3:** Estilos avanzados con variables CSS, Flexbox, CSS Grid, animaciones y diseño *Dark Glassmorphism*.
- **JavaScript (ES6+ Vanilla):** Lógica desacoplada, manipulaciones dinámicas del DOM y persistencia en memoria sin frameworks pesados.

### Librerías CDN:
- **Chart.js v4.4.1 (`chart.umd.min.js`):** Gráficos interactivos de donuts, barras horizontales, distribución por estado y quemado/proyección (*Burnup Chart*).
- **SortableJS v1.15.2 (`Sortable.min.js`):** Arrastrar y soltar (*Drag & Drop*) para mover tareas entre columnas en el tablero Kanban.
- **FontAwesome v6.5.1:** Iconografía profesional para navegación, badges y estados.
- **Google Fonts (Inter):** Tipografía empresarial moderna de alta legibilidad.

---

## ✨ Funcionalidades Implementadas

1. **Dashboard Principal Interactivo:**
   - Tarjetas de resumen con indicadores en vivo (Nombre del proyecto, Duración, Integrantes, Total HUs, Story Points, Horas planificadas, Estado del Sprint y % de avance).
   - 4 Gráficos interactivos con Chart.js (Historias por prioridad, Horas por integrante, Distribución de tareas y Proyección Burnup).

2. **Roles Scrum:**
   - Representación de los roles oficiales del PDF (Product Owner: Olver Alvarez, Scrum Master: Mijail Galarza, Development Team: 4 integrantes).
   - Tarjetas de perfil con responsabilidad, área y horas (60h c/u = 240h totales).

3. **Product Backlog Interactivo:**
   - Tabla con las 14 Historias de Usuario oficiales.
   - Búsqueda global en tiempo real y filtros dinámicos por Prioridad (A/M) y Estado del Sprint (Sprint 1 vs Backlog General).

4. **Sprint Backlog & Tablero Kanban Drag & Drop:**
   - Detalle del Sprint 1 (2 Semanas, 39 Story Points en 11 HUs seleccionadas).
   - Columnas Kanban: `BACKLOG` → `TO DO` → `IN PROGRESS` → `TESTING` → `DONE`.
   - Permite arrastrar y soltar tareas entre columnas actualizando contadores y métricas en vivo.

5. **Modales de Detalle (Historias y Tareas):**
   - Al hacer clic en cualquier Historia de Usuario o Tarea Técnica, abre un modal responsivo con el formato estándar *"Como [usuario], quiero [acción], para [beneficio]"*, estimación, dependencias y tareas vinculadas.

6. **Tareas por Integrante:**
   - Desglose individual de las 40 tareas técnicas distribuidas exactamente en 60 horas por integrante.
   - Barras de progreso de carga horaria por desarrollador.

7. **Cronograma Gantt (12 Días):**
   - Vista de calendario de los 12 días del proyecto (10 días hábiles de desarrollo + Día 7 de descanso + Día 12 de Review & Demo).

8. **Matriz de Trazabilidad:**
   - Mapeo bidireccional entre Historias de Usuario, Tareas Asociadas y Desarrolladores Responsables.

9. **Ceremonias Scrum & Herramientas:**
   - Fichas informativas de las 4 ceremonias (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) y las 6 herramientas colaborativas (Trello/Jira, GitHub, Figma, Postman, WhatsApp/Slack, Google Drive).

10. **Registro de Prompts de IA:**
    - Visualización de la Sección 9 del PDF con los 4 prompts utilizados en la planificación.

---

## 📌 Correspondencia con el PDF Original

- **Integrantes:** Gabriel Alcon (60h), Rudi Condo (60h), Olver Alvarez (60h), Mijail Galarza (60h). Total = 240h.
- **Backlog:** 14 Historias (11 seleccionadas en Sprint 1 con 39 Story Points).
- **Tareas:** 40 tareas técnicas con sus códigos oficiales (`TA-GA-*`, `TA-RC-*`, `TA-OA-*`, `TA-MG-*`).
- **Cronograma:** Matriz exacta de los días 1 al 12.
