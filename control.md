# Control del proyecto

## Objetivo
Documentar qué se ha hecho, qué falta y cualquier decisión importante sobre el material de la clase.

## Resumen actual
- Archivo principal: `Clase4.html` (ensamblador)
- Estado general: estructura modular implementada en CSS y contenido por módulos JS

## Pendientes (prioridad)
- [ ] Extender los tooltips de justificación a todos los pasos de demostración (explicando el "porqué" específico).
- [ ] Revisión final de consistencia visual en diferentes resoluciones.
- [ ] Verificar que todos los ejercicios de examen UCV tengan sus referencias bibliográficas exactas.

## Avances completados

### Base del proyecto
- [x] Creado archivo de control
- [x] Agregados logos institucionales en la carpeta `assets/logos`
- [x] Vinculados los logos en la portada de `Clase4.html`
- [x] Actualizada la portada con nombre, fecha y texto de clase práctica
- [x] Ajustado el texto institucional a Escuela de Computación | Facultad de Ciencias
- [x] Ajustado el texto institucional a Universidad Central de Venezuela

### Contenido didáctico
- [x] Reemplazado el contenido central por un mini resumen visual de conceptos básicos de razonamiento lógico
- [x] Agregado un ejemplo guiado para hacer el contenido más didáctico
- [x] Mejorada la paleta de colores y agregados ejemplos de simbolización lógica
- [x] Ajustado el layout para evitar que algunas diapositivas se corten
- [x] Agregada una diapositiva con cuatro casos de argumentos para comparar validez e invalidez
- [x] Corregida la explicación de premisas inconsistentes y validez vacía
- [x] Agregada una lámina guía sobre qué hacer cuando un argumento es válido o inválido
- [x] Agregado el subtítulo "Inferencia Lógica" a la lámina de portada
- [x] Agregada una lámina introductoria y 6 láminas de repaso de métodos de inferencia (ARD, Tablas de Verdad, Equivalencias, Casos, Prueba Condicional y RAA) siguiendo el formato formal de clase

### Correcciones de la lámina de casos
- [x] Reescrita la lámina de cuatro casos para que quede lógicamente precisa
- [x] Simplificada y aclarada la lámina de cuatro casos para que no se vea cargada ni confusa
- [x] Rehecha desde cero la lámina de cuatro casos con un solo caso inválido
- [x] Reemplazado 'Premisas falsas' por 'Premisas inconsistentes' y añadido definición de 'inconsistente' en `Clase4.html`
- [x] Eliminado el "Resumen corto" de la lámina de casos por solicitud del usuario

### Legibilidad
- [x] Aumentado progresivamente el tamaño de letra de los textos de cuerpo hasta 18px para mejorar legibilidad

### Modularización CSS
- [x] Extraído todo el CSS inline de `Clase4.html` a archivos modulares en `assets/css`
- [x] Creado `assets/css/base.css` para variables, reset y estilos base
- [x] Creado `assets/css/components.css` para componentes visuales y layouts de láminas
- [x] Creado `assets/css/overrides.css` para ajustes finales (incluye tipografía de cuerpo y utilidades)
- [x] Creado `assets/css/clase4.css` como archivo de entrada que importa los módulos CSS
- [x] Eliminados estilos inline de portada y convertidos a clases CSS reutilizables

### Modularización de contenido (JS)
- [x] Modularizado el contenido de las láminas en archivos JS por sección dentro de `assets/js/slides`
- [x] Creado `assets/js/slides/index.js` para definir el orden de render de las láminas
- [x] Creado `assets/js/renderSlides.js` para ensamblar e inyectar las láminas en el DOM
- [x] Simplificado `Clase4.html` para usar un contenedor raíz (`#slides-root`) y carga por módulos
- [x] Restaurado el texto en español con acentos y símbolos lógicos en los módulos de láminas
- [x] Verificada ausencia de errores de sintaxis tras la modularización
- [x] Implementada numeración dinámica de láminas (X / Y) en la esquina inferior derecha
- [x] Agregada lámina explicativa sobre la Prueba de Consistencia (al final de los métodos)
- [x] Agregada lámina sobre Prueba de Invalidez mediante el método del contraejemplo
- [x] Agregada lámina de Análisis Didáctico para el aprendizaje de reglas (Parte 1 y 2)
- [x] Agregada lámina comparativa de Conexión Triple: MP y MT como casos especiales del Silogismo Disyuntivo mediante EPI.
- [x] Agregadas láminas de "Puntos Claves en Inferencia" adaptando estrategias de equivalencia (Desensamblaje, Construcción, RAA).
- [x] Agregada tabla resumen con todas las Leyes de Inferencia (Esquema y Expresión Formal)
- [x] Añadido bloque final de "Ejercicios Prácticos" (Equivalencia y Tautologías) resolviendo 8 incisos organizados por pares en 4 láminas.
- [x] Añadido bloque de "Ejercicios Avanzados UCV" incorporando ejercicios complejos (RAA, Casos, Condicional, Invalidez, Simbolización).
- [x] Convertidas todas las variables proposicionales a minúsculas respetando el rigor académico.
- [x] Unificados todos los bloques de "Análisis Inicial/Estratégico", aumentando su legibilidad (15.5px a 16px).
- [x] Añadido bloque de "Métodos Combinados" explicando la anidación lógica (PC + RAA) y (Conclusión Parcial mediante PC).
- [x] Mejorada la visualización de la anidación en "Métodos Combinados" utilizando contenedores de alcance estilo Fitch (bordes laterales).
- [x] Extraído y añadido el "Ejercicio 9: Prueba de Inconsistencia" del Parcial I de la Prof. Monsalve.
- [x] Añadidas láminas de "Teoría Avanzada": Falacias Formales, Disyunción Implícita en Condicionales, y el Algoritmo de Decisión.
- [x] Añadida lámina "Nota de la Cátedra" detallando la formulación específica del Dilema Constructivo usada en la UCV.
- [x] Añadida lámina de "Cultura Lógica" sobre el Intuicionismo (Brouwer) y su rechazo a RAA.
- [x] Añadida lámina de "Bibliografía y Referencias" siguiendo el formato de créditos oficial del libro de la cátedra.
- [x] **Estandarización UI/UX:** Sincronizados todos los `section-tag` con el índice interactivo.
- [x] **Cambio de Terminología:** Reemplazada la palabra "Módulo" por **"Sección"** en toda la interfaz (Índice, Etiquetas y Comentarios).
- [x] **Principle of Explosion:** Implementada la secuencia exacta (p ∧ ¬p) -> F -> (q ∧ ¬q) -> q, demostrando la derivación de "lo que sea" mediante la infección del absurdo.
- [x] **Optimización Móvil:** Implementado escalado adaptativo (fit-width) y soporte para gestos táctiles (swipe) para una mejor experiencia en celulares.
- [x] **Orden Pedagógico:** Reestructurado el array maestro de diapositivas para eliminar saltos caóticos entre secciones (Flujo 1 -> 2 -> 3 -> 4).
- [x] **Corrección de Módulos:** Renombrado "Módulo 4" a "Práctica Avanzada" y corregidas inconsistencias de nombres en la Sección 2.

## Notas
- El deck actual está 100% orientado a la pedagogía, con "tips", prevenciones de errores y visualizaciones avanzadas. 
- La arquitectura modular (JS por secciones) funciona perfectamente.
- El proyecto está teóricamente completo para la unidad de Inferencia Lógica.

## Última actualización
- 2026-05-11 (Estandarización de Secciones, Navegación Sincronizada, Principio de Explosión y Ordenamiento Lógico)
