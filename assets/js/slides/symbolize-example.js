export const symbolizeExampleSlide = `
<div class="slide">
    <h2 class="slide-title">Ejemplo completo de <span>simbolización</span></h2>
    <div class="content">
        <div class="example-panel">
            <div class="example-card">
                <h3>Argumento en lenguaje natural</h3>
                <div class="example-item" title="Premisa 1">
                    <div class="step">Premisa 1</div>
                    <div class="text"><span title="Conector: Condicional" style="color:var(--ucv-accent); cursor:help;">Si</span> estudio, <span title="Conector: Condicional" style="color:var(--ucv-accent); cursor:help;">entonces</span> apruebo.</div>
                </div>
                <div class="example-item" title="Premisa 2">
                    <div class="step">Premisa 2</div>
                    <div class="text"><span title="Conector: Condicional" style="color:var(--ucv-accent); cursor:help;">Si</span> apruebo, <span title="Conector: Condicional" style="color:var(--ucv-accent); cursor:help;">entonces</span> celebro.</div>
                </div>
                <div class="example-item" title="Premisa 3">
                    <div class="step">Premisa 3</div>
                    <div class="text">Estudio.</div>
                </div>
                <div class="example-item" title="Conclusión">
                    <div class="step">Conclusión</div>
                    <div class="text">Celebro.</div>
                </div>
            </div>

            <div class="example-side">
                <div class="tag">Propocisiones Simples</div>
                <p><strong>p</strong>: estudio</p>
                <p><strong>q</strong>: apruebo</p>
                <p><strong>r</strong>: celebro</p>
                <div class="final">(p → q), (q → r), p ∴ r</div>
            </div>
        </div>

        <div class="symbol-list" aria-label="Formas equivalentes de escritura">
            <div class="symbol-pill"><strong>Con comas:</strong> (p → q), (q → r), p ∴ r</div>
            <div class="symbol-pill"><strong>Con barra:</strong> (p → q), (q → r), p / r</div>
            <div class="symbol-pill"><strong>Con doble raya:</strong> ((p → q) ∧ (q → r) ∧ p) ⇒ r</div>
        </div>

        <div class="note-bar">
            Verificación rápida: usa las mismas letras en premisas y conclusión, y revisa que no cambie el significado original.
        </div>
    </div>
</div>`;
