export const implicitCasesSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Pro-Tip: <span>Casos Ocultos en Condicionales</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">La Disyunción Implícita</h3>
                <p style="line-height: 1.6; color: var(--text-dim);">
                    Normalmente usamos la <em>Prueba por Casos</em> cuando vemos una disyunción explícita (ej: p ∨ q) en las premisas. Pero hay un secreto poderoso en la lógica:<br><br>
                    <strong>¡Todo condicional esconde una disyunción!</strong><br><br>
                    Por la Ley de Equivalencia para la Implicación (EPI), sabemos que:<br>
                    <span style="display:block; text-align:center; color:var(--ucv-accent); margin: 15px 0;">p → q ≡ ¬p ∨ q</span>
                </p>
            </div>
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">¿Qué significa esto en un examen?</h3>
                <p style="line-height: 1.6; color: var(--text-dim);">
                    Significa que siempre que tengas una premisa condicional (ej: ¬s ∧ ¬m → q), <strong>es completamente factible abrir una Prueba por Casos</strong>, evaluando:<br><br>
                    1) El caso donde el antecedente es falso (ej: ¬(¬s ∧ ¬m))<br>
                    2) El caso donde el consecuente es verdadero (ej: $q$)<br><br>
                    <em>Nota: Saber ver "disyunciones ocultas" puede salvarte cuando la prueba directa se tranca.</em>
                </p>
            </div>
        </div>
    </div>
</div>`;

export const bibliographySlide = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Bibliografía y <span>Referencias</span></h2>
    <div class="content">
        <div class="concept-card" style="padding: 30px; border-left: 5px solid var(--ucv-accent);">
            <ul style="line-height: 2.2; color: var(--text-dim); list-style-type: none; padding: 0; margin: 0;">
                <li><strong style="color:var(--ucv-accent); margin-right: 10px;">[1]</strong> Monsalve Leal, M. (2018). <em>Matemáticas Discretas: Volumen I</em> (Borrador). Universidad Central de Venezuela.</li>
                <li><strong style="color:var(--ucv-accent); margin-right: 10px;">[2]</strong> Burton, David M. (1997). <em>The History of Mathematics: An Introduction, Sixth Edition</em>. Capítulo 12: Transition to the Twentieth Century.</li>
                <li><strong style="color:var(--ucv-accent); margin-right: 10px;">[3]</strong> Krantz, Steven G. (2007). <em>The History and Concept of Mathematical Proof</em>.</li>
                <li><strong style="color:var(--ucv-accent); margin-right: 10px;">[4]</strong> Walicki, Michael (1997). <em>The History of Mathematical Logic (vastly abbreviated and horribly simplified)</em>.</li>
            </ul>
        </div>
        <div style="text-align: center; margin-top: 30px; color: var(--text-dim);">
            Universidad Central de Venezuela - Facultad de Ciencias
        </div>
    </div>
</div>`;
