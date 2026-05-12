export const exercise1Slide1 = `
<div id="modulo-3" class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 1: <span>Práctica 1, Parte 3, Ejercicio 2 (1/4)</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
            <div><strong>Planteamiento:</strong> Sean <em>P</em> y <em>Q</em> dos proposiciones tales que <strong>P ≡ Q</strong>. Indique cuáles de las siguientes proposiciones son verdaderas o falsas y justifique.</div>
            <div style="font-size: 0.8rem; background: rgba(200,240,122,0.1); padding: 5px 10px; border-radius: 5px; color: var(--ucv-accent); border: 1px solid rgba(200,240,122,0.2);">
                <i class="fas fa-mouse-pointer"></i> Pasa el mouse para revelar la respuesta y la justificación
            </div>
        </div>
        
        <div class="example-card" style="margin-bottom: 15px;">
            <h3 style="color:var(--ucv-accent);">a) P ⇒ Q</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">Si P ≡ Q, significa que siempre tienen el mismo valor de verdad. Por lo tanto, es imposible que P sea Verdadero y Q sea Falso. Esta imposibilidad de contraejemplo es la definición exacta de la implicación lógica (P ⇒ Q).</span>
                </p>
            </div>
        </div>

        <div class="example-card">
            <h3 style="color:var(--ucv-accent);">b) P → Q es una tautología</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">Es la consecuencia directa de (a). Decir que P implica lógicamente a Q (P ⇒ Q) es semánticamente idéntico a afirmar que la proposición condicional material (P → Q) es siempre verdadera en todos sus casos, es decir, una tautología.</span>
                </p>
            </div>
        </div>
    </div>
</div>`;

export const exercise1Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 1: <span>Práctica 1, Parte 3, Ejercicio 2 (2/4)</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 20px;">
            <strong>Planteamiento:</strong> Sean <em>P</em> y <em>Q</em> dos proposiciones tales que <strong>P ≡ Q</strong>. Indique cuáles de las siguientes proposiciones son verdaderas o falsas y justifique.
        </div>
        
        <div class="example-card" style="margin-bottom: 15px;">
            <h3 style="color:var(--ucv-accent);">c) La tabla de verdad de P es la misma que la de Q</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">Esta es, literalmente, la definición fundamental de la equivalencia lógica (P ≡ Q). Dos proposiciones son lógicamente equivalentes si y solo si arrojan exactamente la misma columna de resultados bajo todas las interpretaciones posibles en sus tablas de verdad.</span>
                </p>
            </div>
        </div>

        <div class="example-card">
            <h3 style="color:var(--ucv-accent);">d) P ↔ Q es una tautología</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">El bicondicional (↔) solo es verdadero cuando ambas partes tienen el mismo valor (ambas V o ambas F). Como sabemos que P ≡ Q, P y Q siempre son iguales. Por tanto, el bicondicional siempre arrojará 'Verdadero' en todos sus casos, siendo una tautología.</span>
                </p>
            </div>
        </div>
    </div>
</div>`;

export const exercise1Slide3 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 1: <span>Práctica 1, Parte 3, Ejercicio 2 (3/4)</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 20px;">
            <strong>Planteamiento:</strong> Sean <em>P</em> y <em>Q</em> dos proposiciones tales que <strong>P ≡ Q</strong>. Indique cuáles de las siguientes proposiciones son verdaderas o falsas y justifique.
        </div>
        
        <div class="example-card" style="margin-bottom: 15px;">
            <h3 style="color:var(--ucv-accent);">e) Las tablas de verdad de P → Q y Q → P son iguales</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">Como P ≡ Q, P y Q siempre tienen el mismo valor. Así, tanto (P → Q) como (Q → P) resultarán en tautologías (columnas de solo 'V'). Al ser ambas tautologías puras, sus tablas de verdad son idénticas.</span>
                </p>
            </div>
        </div>

        <div class="example-card">
            <h3 style="color:var(--ucv-accent);">f) Q ⇒ P</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">La equivalencia lógica es una relación bidireccional y simétrica. Si P equivale a Q (P ≡ Q), entonces Q equivale a P (Q ≡ P). Por consiguiente, si Q es verdadera, P obligatoriamente lo será, cumpliendo la definición de implicación lógica (Q ⇒ P).</span>
                </p>
            </div>
        </div>
    </div>
</div>`;

export const exercise1Slide4 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 1: <span>Práctica 1, Parte 3, Ejercicio 2 (4/4)</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 20px;">
            <strong>Planteamiento:</strong> Sean <em>P</em> y <em>Q</em> dos proposiciones tales que <strong>P ≡ Q</strong>. Indique cuáles de las siguientes proposiciones son verdaderas o falsas y justifique.
        </div>
        
        <div class="example-card" style="margin-bottom: 15px;">
            <h3 style="color:var(--ucv-accent);">g) Q → P es una tautología</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">Consecuencia directa del inciso (f). Si existe la implicación lógica (Q ⇒ P) garantizando que no hay casos de premisa V y conclusión F, el condicional material asociado (Q → P) jamás será falso, convirtiéndose matemáticamente en una tautología.</span>
                </p>
            </div>
        </div>

        <div class="example-card">
            <h3 style="color:var(--ucv-accent);">h) (P ∧ ¬Q) ∨ (¬P ∧ Q) es una contradicción</h3>
            <div style="padding: 10px;">
                <p><strong>Respuesta: <span class="interactive-answer">VERDADERA</span></strong></p>
                <p style="margin-top: 5px;">
                    <strong>Justificación:</strong> <span class="interactive-answer">Esta fórmula representa matemáticamente la Disyunción Exclusiva (P ⊕ Q). Esta operación es verdadera solo si P y Q tienen valores distintos. Al partir de la premisa de que P ≡ Q (siempre son iguales), esta fórmula nunca encontrará un caso verdadero, resultando en una contradicción absoluta.</span>
                </p>
            </div>
        </div>
    </div>
</div>`;
