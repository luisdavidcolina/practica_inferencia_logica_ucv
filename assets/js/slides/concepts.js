export const conceptsIntroSlide = `
<div id="modulo-1" class="slide">
    <div class="section-tag">Sección 1: Fundamentos</div>
    <h2 class="slide-title">Conceptos Fundamentales: <span>Lógica Proposicional</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Definición de Lógica</h3>
                <p style="line-height: 1.6; opacity: 0.9;">
                    Es la disciplina que se encarga del estudio de los principios y métodos utilizados para distinguir el razonamiento correcto (válido) del incorrecto (inválido). Se centra en la estructura formal del pensamiento.
                </p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">La Proposición</h3>
                <p style="line-height: 1.6; opacity: 0.9;">
                    Es una entidad lingüística que tiene la propiedad de ser verdadera o falsa, pero no ambas simultáneamente. Es la unidad mínima del lenguaje con valor de verdad definido.
                </p>
            </div>
        </div>
        <div class="note-bar" style="margin-top: 30px;">
            <strong>Principio de Bivalencia:</strong> Toda proposición es o bien verdadera o bien falsa, excluyendo cualquier tercera posibilidad.
        </div>
    </div>
</div>`;

export const languageSlide = `
<div class="slide">
    <h2 class="slide-title">Sistemas de Lenguaje: <span>Formal vs Natural</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Lenguaje Natural</h3>
                <p style="opacity: 0.8; margin-bottom: 10px;">Caracterizado por su ambigüedad y dependencia del contexto (español, inglés, etc.).</p>
                <div class="formal-code" style="padding: 10px; font-style: italic;">
                    "Si no llueve, entonces voy a la playa y me divierto."
                </div>
            </div>
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Lenguaje Formal</h3>
                <p style="opacity: 0.8; margin-bottom: 10px;">Sistema de símbolos precisos y reglas sintácticas rigurosas que eliminan la ambigüedad semántica.</p>
                <div class="formal-code" style="padding: 10px; text-align: center; color: var(--ucv-accent);">
                    ¬p → (q ∧ r)
                </div>
            </div>
        </div>
        <p style="margin-top: 20px; font-size: 0.9rem; line-height: 1.5; opacity: 0.8;">
            El proceso de pasar del lenguaje natural al formal se denomina <strong>Simbolización</strong>, y es el primer paso crítico para el análisis de validez.
        </p>
    </div>
</div>`;

export const conceptsSlide = `
<div class="slide">
    <div class="section-tag">Sección 1: Fundamentos</div>
    <h2 class="slide-title">Fundamentos de la <span>Inferencia Lógica</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 20px;">
            <strong>Inferencia Lógica:</strong> Es el proceso formal mediante el cual se obtienen conclusiones válidas a partir de un conjunto de premisas, utilizando reglas de transformación que preservan la verdad.
        </div>
        <div class="grid-3">
            <div class="concept-card" style="border-top: 4px solid var(--ucv-accent);">
                <h3>Implicación Lógica</h3>
                <p style="font-size: 0.9rem;">Relación semántica donde la verdad de las premisas conlleva necesariamente la verdad de la conclusión.</p>
            </div>
            
            <div class="concept-card" style="border-top: 4px solid var(--ucv-accent);">
                <h3>Premisas</h3>
                <p style="font-size: 0.9rem;">Proposiciones que sirven de base para el razonamiento y que se asumen como verdaderas durante el proceso.</p>
            </div>

            <div class="concept-card" style="border-top: 4px solid var(--ucv-accent);">
                <h3>Conclusión</h3>
                <p style="font-size: 0.9rem;">Proposición derivada de forma necesaria a través de la aplicación de reglas de inferencia válidas.</p>
            </div>

            <div class="concept-card" style="border-top: 4px solid #0ecc77;">
                <h3>Validez</h3>
                <p style="font-size: 0.9rem;">Propiedad de un argumento donde es imposible que las premisas sean verdaderas y la conclusión sea falsa.</p>
            </div>

            <div class="concept-card" style="border-top: 4px solid #ff7878;">
                <h3>Contradicción</h3>
                <p style="font-size: 0.9rem;">Fórmula que resulta falsa para todas sus posibles interpretaciones (inconsistencia absoluta).</p>
            </div>

            <div class="concept-card" style="border-top: 4px solid #ffba08;">
                <h3>Consistencia</h3>
                <p style="font-size: 0.9rem;">Propiedad de un conjunto de premisas que admite al menos una interpretación donde todas son verdaderas.</p>
            </div>
        </div>

        <div class="note-bar" style="margin-top: 25px; text-align: center; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
            <strong>Criterio de Validez:</strong> Un razonamiento es válido si y solo si la estructura lógica de su argumento constituye una tautología.
        </div>
    </div>
</div>`;
