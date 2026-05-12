export const introMethodsSlide = `
<div id="modulo-2" class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Métodos de <span>Demostración Matemática</span></h2>
    <div class="content">
        <div class="case-intro">
            A continuación, realizaremos un análisis comparativo de los <strong>6 métodos fundamentales</strong> utilizados para verificar la validez de un argumento. 
            Para una comprensión estructural, aplicaremos cada técnica al esquema del <strong>Silogismo Hipotético</strong>.
        </div>
        
        <div class="example-panel">
            <div class="example-card">
                <h3>Esquema de Inferencia</h3>
                <div class="formal-code-main" style="text-align: center; margin: 20px 0;">
                    [(p → q) ∧ (q → r)] ⇒ (p → r)
                </div>
                <div class="example-item">
                    <div class="step">P1</div>
                    <div class="text">p → q</div>
                </div>
                <div class="example-item">
                    <div class="step">P2</div>
                    <div class="text">q → r</div>
                </div>
                <div class="example-item" style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 10px; margin-top: 10px;">
                    <div class="step">C</div>
                    <div class="text">p → r</div>
                </div>
            </div>
            
            <div class="guide-card">
                <h3>Sistemas de Verificación</h3>
                <ul class="formal-list">
                    <li>1. Tablas de Verdad (Semántico)</li>
                    <li>2. Equivalencias Lógicas (Sintáctico)</li>
                    <li>3. ARD Directo (Deductivo)</li>
                    <li>4. Prueba por Casos (Exhaustivo)</li>
                    <li>5. Prueba Condicional (Suposición)</li>
                    <li>6. RAA (Contradicción)</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

export const truthTableSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Método 1: <span>Tablas de Verdad</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>Definición:</strong> Análisis semántico que verifica todas las interpretaciones posibles de las variables.
            Un argumento es válido si y solo si la conclusión es verdadera en todas las interpretaciones donde las premisas son simultáneamente verdaderas.
        </div>
        <table class="logic-table">
            <thead>
                <tr>
                    <th>p</th><th>q</th><th>r</th><th>p → q</th><th>q → r</th><th style="background: rgba(var(--ucv-accent-rgb), 0.1);">P1 ∧ P2</th><th>p → r</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>V</td><td>V</td><td>V</td><td>V</td><td>V</td><td style="color:var(--ucv-accent)">V</td><td style="color:var(--ucv-accent)">V</td></tr>
                <tr><td>V</td><td>V</td><td>F</td><td>V</td><td>F</td><td>F</td><td>F</td></tr>
                <tr><td>V</td><td>F</td><td>V</td><td>F</td><td>V</td><td>F</td><td>V</td></tr>
                <tr><td>V</td><td>F</td><td>F</td><td>F</td><td>V</td><td>F</td><td>F</td></tr>
                <tr><td>F</td><td>V</td><td>V</td><td>V</td><td>V</td><td style="color:var(--ucv-accent)">V</td><td style="color:var(--ucv-accent)">V</td></tr>
                <tr><td>F</td><td>V</td><td>F</td><td>V</td><td>F</td><td>F</td><td>V</td></tr>
                <tr><td>F</td><td>F</td><td>V</td><td>V</td><td>V</td><td style="color:var(--ucv-accent)">V</td><td style="color:var(--ucv-accent)">V</td></tr>
                <tr><td>F</td><td>F</td><td>F</td><td>V</td><td>V</td><td style="color:var(--ucv-accent)">V</td><td style="color:var(--ucv-accent)">V</td></tr>
            </tbody>
        </table>
    </div>
</div>`;

export const logicalEquivalenceSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Método 2: <span>Equivalencias Lógicas</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>Definición:</strong> Proceso de transformación sintáctica mediante leyes algebraicas para demostrar que la implicación asociada es una tautología.
        </div>
        <table class="formal-table two-cols">
            <thead>
                <tr>
                    <th>Expresión Proposicional</th>
                    <th>Justificación Técnica</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><div class="focus-formula"><span class="focus-left">[(p → q) ∧ (q → r)]</span> <span class="focus-op" title="Operador Principal">→</span> <span class="focus-right">(p → r)</span></div></td><td>Fórmula de implicación asociada</td></tr>
                <tr><td><div class="focus-formula">≡ <span class="focus-left">[(¬p ∨ q) ∧ (¬q ∨ r)]</span> <span class="focus-op" title="Operador Principal">→</span> <span class="focus-right">(¬p ∨ r)</span></div></td><td><span title="Transformamos los condicionales internos en disyunciones mediante la equivalencia del condicional (EPI). Este paso simplifica la manipulación algebraica al permitir el uso de leyes distributivas y conmutativas.">EPI (Definición de →)</span></td></tr>
                <tr><td><div class="focus-formula">≡ <span class="focus-left">¬[(¬p ∨ q) ∧ (¬q ∨ r)]</span> <span class="focus-op" title="Operador Principal">∨</span> <span class="focus-right">(¬p ∨ r)</span></div></td><td><span title="Transformamos el condicional principal en una disyunción global usando EPI. Este movimiento es fundamental para 'romper' la estructura de implicación y permitir que la negación externa interactúe con el resto de la fórmula.">EPI (Operador Principal)</span></td></tr>
                <tr><td><div class="focus-formula">≡ <span class="focus-left">[¬(¬p ∨ q) ∨ ¬(¬q ∨ r)]</span> <span class="focus-op" title="Operador Principal">∨</span> <span class="focus-right">(¬p ∨ r)</span></div></td><td><span title="Aplicamos las Leyes de De Morgan para distribuir la negación externa sobre la conjunción central. Esto invierte los valores y cambia el conector, preparándonos para la simplificación final.">Leyes de De Morgan</span></td></tr>
                <tr><td><div class="focus-formula">≡ <span class="focus-left">[(p ∧ ¬q) ∨ (q ∧ ¬r)]</span> <span class="focus-op" title="Operador Principal">∨</span> <span class="focus-right">(¬p ∨ r)</span></div></td><td><span title="Simplificamos las negaciones internas y aplicamos la ley de Doble Negación (¬¬A ≡ A). Este paso nos devuelve las variables originales en una forma que permite compararlas directamente con sus opuestos.">De Morgan y Doble Negación</span></td></tr>
                <tr><td><div class="focus-formula">≡ <span class="focus-op" title="Verdad Lógica">V</span></div></td><td><span title="Al simplificar la expresión mediante leyes de asociación y contradicción, alcanzamos una identidad tautológica (V). Esto demuestra formalmente que el argumento es una Verdad Lógica en todo escenario.">Identidad Tautológica</span></td></tr>
            </tbody>
        </table>
    </div>
</div>`;

export const ardDirectoSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Método 3: <span>ARD Directo</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>Definición:</strong> Aplicación secuencial de reglas de inferencia a partir del conjunto de premisas hasta alcanzar la conclusión requerida.
        </div>
        <table class="formal-table">
            <thead>
                <tr>
                    <th>Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>p → q</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>q → r</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>p → r</td><td><span title="Aplicamos Silogismo Hipotético directamente. Esta regla se elige porque el consecuente de la Premisa 1 es idéntico al antecedente de la Premisa 2, permitiendo 'saltar' el paso intermedio 'q' para unir 'p' con 'r' de forma válida.">Silogismo Hipotético (1, 2)</span></td></tr>
            </tbody>
        </table>
    </div>
</div>`;

export const proofByCasesSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Método 4: <span>Prueba por Casos</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>Definición:</strong> Demostración exhaustiva fundamentada en el análisis de los componentes de una disyunción (real o derivada).
        </div>
        <table class="formal-table">
            <thead>
                <tr>
                    <th>Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1-2</td><td>p→q, q→r</td><td>Premisas</td></tr>
                <tr><td>3</td><td>¬p ∨ q</td><td><span title="Transformamos la Premisa 1 en una disyunción equivalente mediante EPI. Este paso es el disparador del método de Prueba por Casos, ya que nos proporciona los dos escenarios posibles que debemos analizar.">EPI en 1</span></td></tr>
                <tr><td>4</td><td>¬p</td><td><span title="Asumimos el primer caso (¬p) proveniente de nuestra disyunción base. Iniciamos este camino para demostrar que, incluso si p es falso, la conclusión p → r se mantiene verdadera por vacuidad.">Caso 1: Supuesto de 3</span></td></tr>
                <tr><td>5-6</td><td>p → r</td><td><span title="Bajo el supuesto ¬p, aplicamos Adición para introducir 'r' y luego EPI para retornar al formato condicional. Esto demuestra que la meta se cumple exitosamente en este escenario.">Adición y EPI en 4</span></td></tr>
                <tr><td>7-8</td><td>q, q→r</td><td><span title="Asumimos el segundo caso (q) y lo relacionamos con la Premisa 2. Este escenario explora la validez cuando el antecedente del primer condicional sí se cumple.">Caso 2: Supuesto de 3 y P2</span></td></tr>
                <tr><td>9-12</td><td>p → r</td><td><span title="Derivamos la meta final mediante Modus Ponens entre el supuesto 'q' y P2 para obtener 'r', y luego aplicamos Adición y EPI. Esto confirma que el segundo camino también es exitoso.">MP, Adición y EPI</span></td></tr>
                <tr><td>13</td><td><strong>p → r</strong></td><td><span title="Validación final por Prueba por Casos. Al haber demostrado que la conclusión se alcanza tanto si ocurre ¬p como si ocurre q, queda validada la meta para el argumento global.">Prueba por casos (3-12)</span></td></tr>
            </tbody>
        </table>
    </div>
</div>`;

export const conditionalProofSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Método 5: <span>Prueba Condicional (PC)</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>Definición:</strong> Técnica específica para conclusiones condicionales. Se asume el antecedente como hipótesis temporal para derivar el consecuente.
        </div>
        <table class="formal-table">
            <thead>
                <tr>
                    <th>Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>p → q</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>q → r</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>p</td><td><span title="Asumimos el antecedente 'p' de nuestra meta condicional. Este paso abre una sub-demostración donde 'p' se trata como una verdad temporal para buscar el efecto 'r'.">Suposición PC (Antecedente)</span></td></tr>
                <tr><td>4</td><td>q</td><td><span title="Aplicamos Modus Ponens en la Premisa 1 aprovechando nuestro supuesto 'p'. Este paso 'activa' la regla y nos entrega 'q', el puente necesario hacia la meta.">Modus Ponens entre 1 y 3</span></td></tr>
                <tr><td>5</td><td>r</td><td><span title="Aplicamos Modus Ponens en la Premisa 2 usando el derivado 'q'. Este paso finaliza la cadena causal dentro de la suposición, entregándonos la meta interna 'r'.">Modus Ponens entre 2 y 4</span></td></tr>
                <tr><td>6</td><td>p → r</td><td><span title="Cerramos la Prueba Condicional (PC). Al haber demostrado formalmente que la presencia de 'p' garantiza la de 'r', validamos la estructura condicional p → r.">Cierre Prueba Condicional (3-5)</span></td></tr>
            </tbody>
        </table>
    </div>
</div>`;

export const raaSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Método 6: <span>Reducción al Absurdo (RAA)</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>Definición:</strong> Demostración por contradicción. Se asume la falsedad de la meta para evidenciar una inconsistencia en el sistema.
        </div>
        <table class="formal-table">
            <thead>
                <tr>
                    <th>Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>p → q</td><td>Premisa 1</td></tr>
                <tr><td>2</td><td>q → r</td><td>Premisa 2</td></tr>
                <tr><td>3</td><td>¬(p → r)</td><td><span title="Negamos la conclusión p → r para iniciar el RAA. Suponer que la meta es falsa nos permite buscar una contradicción en el sistema que demuestre su validez por absurdo.">Suposición RAA</span></td></tr>
                <tr><td>4</td><td>p ∧ ¬r</td><td><span title="Transformamos la negación del condicional mediante EPI y Morgan. Este paso técnico es vital para 'liberar' las variables p y ¬r para que interactúen con las premisas.">De Morgan y EPI en 3</span></td></tr>
                <tr><td>5</td><td>p</td><td><span title="Extraemos 'p' mediante Simplificación. Esta variable es la 'llave' específica necesaria para activar la cadena de condicionales de las premisas originales.">Simplificación en 4</span></td></tr>
                <tr><td>6</td><td>¬r</td><td><span title="Extraemos '¬r' mediante Simplificación. Reservamos este término para el final de la prueba, donde servirá como el componente de choque para generar la contradicción.">Simplificación en 4</span></td></tr>
                <tr><td>7</td><td>q</td><td><span title="Ejecutamos Modus Ponens en la Premisa 1 usando la llave 'p' que extrajimos, avanzando en nuestra búsqueda de una inconsistencia.">Modus Ponens entre 1 y 5</span></td></tr>
                <tr><td>8</td><td>r</td><td><span title="Ejecutamos Modus Ponens en la Premisa 2 usando 'q'. Obtenemos 'r', que es la afirmación opuesta a lo que extrajimos en el paso 6.">Modus Ponens entre 2 and 7</span></td></tr>
                <tr><td>9</td><td>r ∧ ¬r</td><td><span title="Unimos 'r' (paso 8) con su negación '¬r' (paso 6) mediante Conjunción. Al afirmar una cosa y su contraria, formalizamos el Absurdo (F) que invalida el supuesto inicial.">Conjunción (Contradicción)</span></td></tr>
                <tr><td>10</td><td>p → r</td><td><span title="Rechazamos el supuesto por ser lógicamente insostenible y validamos la meta original. Este paso cierra el RAA y confirma la validez del argumento.">Cierre RAA (3-9)</span></td></tr>
            </tbody>
        </table>
    </div>
</div>`;
