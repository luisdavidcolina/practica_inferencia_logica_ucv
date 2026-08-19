// Láminas de cierre pedagógico: rúbrica, errores comunes, FAQ y autoevaluación.

export const rubricaSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 5 · Evaluación</span>
    <h2 class="slide-title">Cómo se <span>corrige</span> una demostración</h2>
    <div class="content">
        <div class="case-intro">
            En Matemática Discreta I el resultado no basta: se evalúa el <strong>método</strong>. Así se reparte una demostración de validez típica (4–5 pts).
        </div>
        <table>
            <thead><tr><th>Criterio</th><th>Excelente</th><th>Insuficiente</th><th>Peso</th></tr></thead>
            <tbody>
                <tr><td><strong>Simbolización</strong></td><td>Define el diccionario ($p$: …, $q$: …) y respeta el orden del condicional</td><td>Cambia el sentido de $\to$ o inventa conectivas</td><td>1.0</td></tr>
                <tr><td><strong>Premisas numeradas</strong></td><td>Lista las premisas y marca la conclusión con $\therefore$</td><td>Mezcla premisas y pasos sin numerar</td><td>0.5</td></tr>
                <tr><td><strong>Justificación por línea</strong></td><td>Nombre exacto de la regla y líneas usadas: "MP 1,3"</td><td>Pasos sin razón o con "por lógica"</td><td><strong>1.5</strong></td></tr>
                <tr><td><strong>Uso correcto de la regla</strong></td><td>La forma coincide exactamente con la regla invocada</td><td>Aplica MP sobre una disyunción, "niega el antecedente", etc.</td><td><strong>1.5</strong></td></tr>
                <tr><td><strong>Cierre</strong></td><td>Descarga la PC/RAA y concluye la fórmula pedida</td><td>Se queda dentro del supuesto sin descargarlo</td><td>0.5</td></tr>
            </tbody>
        </table>
        <div class="note-bar">
            <strong>Estrategia de examen:</strong> si te atascas, escribe igual la simbolización, las premisas numeradas y la estrategia elegida ("intentaré PC suponiendo el antecedente"). Eso ya recupera buena parte de los puntos aunque no cierres la prueba.
        </div>
    </div>
</div>`;

export const erroresComunesSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 5 · Evaluación</span>
    <h2 class="slide-title">Errores <span>comunes</span></h2>
    <div class="content">
        <div class="concept-grid">
            <div class="concept-card">
                <span class="concept-tag">✗ 1</span>
                <h3>Falacias del condicional</h3>
                <p><strong>Afirmar el consecuente:</strong> de $p\to q$ y $q$ <em>no</em> se sigue $p$. <strong>Negar el antecedente:</strong> de $p\to q$ y $\neg p$ <em>no</em> se sigue $\neg q$. Son las dos trampas más frecuentes del parcial.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">✗ 2</span>
                <h3>Aplicar reglas a subfórmulas</h3>
                <p>Las reglas de inferencia operan sobre la <strong>fórmula completa</strong> de una línea. No puedes usar MP "dentro" de $\neg(p\to q)$ o de una disyunción sin descomponerla antes.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">✗ 3</span>
                <h3>No descargar el supuesto</h3>
                <p>En PC hay que cerrar con $p\to q$; en RAA, tras hallar la contradicción, concluir la negación del supuesto. Dejar la prueba "abierta" invalida todo el argumento.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">✗ 4</span>
                <h3>Confundir equivalencia con inferencia</h3>
                <p>Las <strong>equivalencias</strong> ($\equiv$) valen en ambos sentidos y dentro de subfórmulas; las <strong>reglas de inferencia</strong> ($\therefore$) van en un solo sentido y solo sobre líneas completas.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">✗ 5</span>
                <h3>Simbolizar "a menos que" y "solo si"</h3>
                <p>"$p$ solo si $q$" es $p\to q$ (no $q\to p$). "$p$ a menos que $q$" es $\neg q\to p$. Un diccionario mal armado arrastra el error a toda la demostración.</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">✗ 6</span>
                <h3>Invalidez mal argumentada</h3>
                <p>Para probar que un argumento es <strong>inválido</strong> hay que exhibir una asignación concreta que haga <em>todas</em> las premisas verdaderas y la conclusión falsa — y mostrarla evaluada, no solo mencionarla.</p>
            </div>
        </div>
    </div>
</div>`;

export const faqSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 5 · Evaluación</span>
    <h2 class="slide-title">Preguntas <span>frecuentes</span></h2>
    <div class="content">
        <div class="example-panel">
            <div class="example-card">
                <h3>Del grupo de la sección</h3>
                <div class="example-item">
                    <span class="step">¿Qué método elijo?</span>
                    <span class="text">Si la conclusión es un condicional → <strong>PC</strong>. Si es una negación o el argumento parece cerrado → <strong>RAA</strong>. Si hay una disyunción entre las premisas → <strong>prueba por casos</strong>. Si nada de eso, ataque directo con reglas.</span>
                </div>
                <div class="example-item">
                    <span class="step">¿Puedo usar tablas de verdad?</span>
                    <span class="text">Sirven para <em>decidir</em> si el argumento es válido (y son prueba suficiente de invalidez con la fila testigo), pero con muchas variables son inviables: $2^n$ filas. Si el enunciado pide "demuestre la validez", se espera la derivación formal.</span>
                </div>
                <div class="example-item">
                    <span class="step">¿En qué orden aplico las reglas?</span>
                    <span class="text">Trabaja <strong>hacia atrás</strong> desde la conclusión: ¿qué regla la produciría? ¿qué me falta para aplicarla? Eso convierte la búsqueda a ciegas en un plan.</span>
                </div>
                <div class="example-item">
                    <span class="step">¿Consistencia = validez?</span>
                    <span class="text">No. Un conjunto es <strong>consistente</strong> si existe una asignación que hace todas las fórmulas verdaderas. Un argumento es <strong>válido</strong> si premisas + negación de la conclusión es <em>inconsistente</em> — esa es justamente la idea de RAA.</span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Regla de oro</span>
                <p>Toda línea de tu demostración debe poder responder dos preguntas: <strong>¿de qué líneas sale?</strong> y <strong>¿por qué regla?</strong> Si alguna no las responde, no es una demostración formal.</p>
            </div>
        </div>
    </div>
</div>`;

export const autoevaluacionSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 5 · Evaluación</span>
    <h2 class="slide-title">Autoevaluación: <span>¿estás listo?</span></h2>
    <div class="content">
        <div class="case-intro">Responde sin mirar; las respuestas están abajo.</div>
        <div class="concept-grid">
            <div class="concept-card">
                <span class="concept-tag">1</span>
                <h3>Simbolización</h3>
                <p>Simboliza: "Estudio solo si tengo tiempo; no tengo tiempo a menos que termine el proyecto."</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">2</span>
                <h3>Regla</h3>
                <p>De $p\to q$ y $\neg q$ concluyo $\neg p$. ¿Cómo se llama la regla?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">3</span>
                <h3>Falacia</h3>
                <p>De $p\to q$ y $q$, ¿puedo concluir $p$? ¿Cómo se llama ese error?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">4</span>
                <h3>Método</h3>
                <p>La conclusión es $(r\to s)$. ¿Qué método conviene y qué supones primero?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">5</span>
                <h3>Invalidez</h3>
                <p>¿Qué debes exhibir exactamente para probar que un argumento es inválido?</p>
            </div>
            <div class="concept-card">
                <span class="concept-tag">6</span>
                <h3>RAA</h3>
                <p>En una RAA llegaste a $t\wedge\neg t$. ¿Qué concluyes y de qué fórmula?</p>
            </div>
        </div>
        <div class="note-bar">
            <strong>Respuestas:</strong> 1) $e\to t$ y $\neg p\to \neg t$ (donde $p$: termino el proyecto) — "a menos que" es $\neg q\to p$. — 2) Modus Tollens. — 3) No: es la falacia de <em>afirmar el consecuente</em>. — 4) Prueba condicional: supones $r$ y derivas $s$. — 5) Una asignación concreta con todas las premisas verdaderas y la conclusión falsa, evaluada explícitamente. — 6) Que el supuesto es falso: concluyes su negación y descargas la RAA.
        </div>
    </div>
</div>`;

export const documentosSlide = String.raw`
<div class="slide">
    <span class="section-tag">Sección 5 · Evaluación</span>
    <h2 class="slide-title">Documentos <span>del tema</span></h2>
    <div class="content">
        <div class="example-panel">
            <div class="example-card">
                <h3>Material de la sección (carpeta <code>docs/</code>)</h3>
                <div class="example-item">
                    <span class="step">Práctica</span>
                    <span class="text"><a href="docs/Práctica 1 (tercera parte).pdf" target="_blank">Práctica 1 (tercera parte)</a> · <a href="docs/reglas_inferencia.pdf" target="_blank">Tabla de reglas de inferencia</a></span>
                </div>
                <div class="example-item">
                    <span class="step">Guías</span>
                    <span class="text"><a href="docs/guia_argumentacion.pdf" target="_blank">Guía de argumentación</a> · <a href="docs/guia_invalidez_argumento.pdf" target="_blank">Guía de invalidez</a> · <a href="docs/Prueba condicional (conclusion parcial).pdf" target="_blank">Prueba condicional</a></span>
                </div>
                <div class="example-item">
                    <span class="step">Equivalencias</span>
                    <span class="text"><a href="docs/Leyes de equivalencia y Reglas de Inferencia (Predicados).pdf" target="_blank">Leyes de equivalencia y reglas (incluye Predicados)</a> · <a href="docs/MDI Prof. Monsalve I.pdf" target="_blank">Guía I — Profa. Monsalve</a></span>
                </div>
                <div class="example-item">
                    <span class="step">Exámenes</span>
                    <span class="text"><a href="docs/Solución Parcial 1-II-2025 (2).pdf" target="_blank">Solución Parcial 1 (II-2025)</a> · <a href="docs/Solución del Parcial 2-II-2025.pdf" target="_blank">Solución Parcial 2 (II-2025)</a> · <a href="docs/Solucio╠ün Parcial I.pdf" target="_blank">Solución Parcial I (Monsalve)</a></span>
                </div>
            </div>
            <div class="example-side">
                <span class="tag">Sugerencia</span>
                <p>Resuelve la práctica <strong>antes</strong> de abrir las soluciones. En demostraciones, leer la respuesta da una falsa sensación de dominio: lo que se evalúa es que <em>tú</em> encuentres el camino.</p>
                <p class="final" style="font-size:18px;">10 documentos disponibles</p>
            </div>
        </div>
    </div>
</div>`;
