export const casesSlide = `
<div class="slide">
    <div class="section-tag">Sección 1: Fundamentos</div>
    <h2 class="slide-title">Cuatro casos de estudio de la <span>validez</span> </h2>
    <div class="content">
        <div class="case-grid">
            <div class="case-card">
                <div class="case-head">
                    <h3>Caso 1 (V → V)</h3>
                    <div class="case-badge valid">Válido</div>
                </div>
                <div class="case-formula">Premisas consistentes ⇒ Conclusión verdadera</div>
                <div class="case-desc">Ejemplo: Si estudio, apruebo. Estudio. Entonces apruebo. La forma es correcta y no aparece contraejemplo.</div>
            </div>

            <div class="case-card">
                <div class="case-head">
                    <h3>Caso 2 (F → V)</h3>
                    <div class="case-badge valid">Válido</div>
                </div>
                <div class="case-formula">Premisas inconsistentes ⇒ Conclusión V</div>
                <div class="case-desc">Ejemplo: Si "p" y "¬p" aparecen como premisas contradictorias, las premisas son inconsistentes. En lógica clásica esto puede llevar a que cualquier conclusión sea derivable (validez por vacuidad).</div>
            </div>

            <div class="case-card">
                <div class="case-head">
                    <h3>Caso 3 (F → F)</h3>
                    <div class="case-badge valid">Válido</div>
                </div>
                <div class="case-formula">Premisas inconsistentes ⇒ Conclusión falsa</div>
                <div class="case-desc">En lógica clásica, si las premisas se contradicen entre sí, no hay un caso donde todas sean verdaderas a la vez. Eso da validez por vacuidad.</div>
            </div>

            <div class="case-card">
                <div class="case-head">
                    <h3>Caso 4 (V → F)</h3>
                    <div class="case-badge invalid">Inválido</div>
                </div>
                <div class="case-formula">Premisas consistentes ⇒ Conclusión falsa</div>
                <div class="case-desc">Ejemplo: Si estudio, apruebo. Apruebo. Entonces estudio. Aquí sí hay contraejemplo: las premisas pueden cumplirse y la conclusión fallar.</div>
            </div>
        </div>

        <div class="case-def">
            <strong>Definición - Inconsistente:</strong> un conjunto de premisas es <em>inconsistente</em> cuando no existe ninguna interpretación en la que todas sean verdaderas a la vez (contienen una contradicción interna).
        </div>

    </div>
</div>`;
