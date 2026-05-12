export const formalFormsSlide = `
<div class="slide">
    <div class="section-tag">Sección 1: Fundamentos</div>
    <h2 class="slide-title">Notación Formal: <span>Representación de Argumentos</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 15px;">
            En la lógica formal, un mismo razonamiento puede expresarse mediante diferentes convenciones sintácticas. Es fundamental reconocer estas variantes para la resolución de exámenes.
        </div>

        <div class="grid-2">
            <!-- Columna 1: Notación Estándar -->
            <div class="concept-card" style="border-left: 5px solid var(--ucv-accent);">
                <h3>Notaciones de Uso Frecuente</h3>
                <div class="formal-list" style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                        <span style="font-size: 13px; opacity: 0.6; display: block; margin-bottom: 3px;">SIGNO DE CONCLUSIÓN (∴)</span>
                        <code class="logic-symbol" style="font-size: 18px;">p → q, p ∴ q</code>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                        <span style="font-size: 13px; opacity: 0.6; display: block; margin-bottom: 3px;">BARRA DE INFERENCIA (/)</span>
                        <code class="logic-symbol" style="font-size: 18px;">p → q, p / q</code>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                        <span style="font-size: 13px; opacity: 0.6; display: block; margin-bottom: 3px;">CONDICIONAL ASOCIADO (⇒)</span>
                        <code class="logic-symbol" style="font-size: 18px;">((p → q) ∧ p) ⇒ q</code>
                    </div>
                </div>
            </div>

            <!-- Columna 2: Notación Avanzada -->
            <div class="concept-card" style="border-left: 5px solid #0ecc77;">
                <h3>Notaciones Meta-lógicas</h3>
                <div class="formal-list" style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                        <span style="font-size: 13px; opacity: 0.6; display: block; margin-bottom: 3px;">SECUENTE SINTÁCTICO (⊢)</span>
                        <code class="logic-symbol" style="font-size: 18px; color:#0ecc77;">P₁, P₂, ... Pₙ ⊢ C</code>
                        <p style="font-size: 12px; margin-top: 4px; opacity: 0.7;">Indica que C es demostrable mecánicamente.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                        <span style="font-size: 13px; opacity: 0.6; display: block; margin-bottom: 3px;">CONSECUENCIA SEMÁNTICA (⊨)</span>
                        <code class="logic-symbol" style="font-size: 18px; color:#0ecc77;">Γ ⊨ C</code>
                        <p style="font-size: 12px; margin-top: 4px; opacity: 0.7;">Indica que C es verdadera en toda interpretación de Γ.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-card" style="margin-top: 15px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0; font-size: 18px;">En la <strong>Escuela de Computación (UCV)</strong>, se emplea frecuentemente la letra <strong>Γ (Gamma)</strong> para denotar el conjunto de premisas. La expresión <code style="color:var(--ucv-accent)">Γ ⊢ C</code> es la forma estándar de solicitar la validez de una conclusión dada.</p>
        </div>
    </div>
</div>`;
