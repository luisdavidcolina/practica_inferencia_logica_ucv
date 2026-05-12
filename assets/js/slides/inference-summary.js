export const lawsSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Leyes de Inferencia: <span>Reglas Fundamentales</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Modus Ponens (MP)</h3>
                <div class="formal-code">p → q, p ∴ q</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">Si el antecedente es verdadero, el consecuente también lo es.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Modus Tollens (MT)</h3>
                <div class="formal-code">p → q, ¬q ∴ ¬p</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">Si el consecuente es falso, el antecedente debe ser falso.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Silogismo Disyuntivo (SD)</h3>
                <div class="formal-code">p ∨ q, ¬p ∴ q</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">Si uno de los dos es falso, el otro debe ser verdadero.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Silogismo Hipotético (SH)</h3>
                <div class="formal-code">p → q, q → r ∴ p → r</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">Permite encadenar relaciones de implicación.</p>
            </div>
        </div>
    </div>
</div>`;

export const didacticAnalysis1Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Análisis Didáctico 1: <span>Principios de Resolución (1/2)</span></h2>
    <div class="content">
        <div class="case-intro">
            Para resolver inferencias, el objetivo es identificar el <strong>operador principal</strong> en las premisas y aplicar su regla de derivación correspondiente.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">1. Operador Condicional (→)</h3>
                <p>Requiere la afirmación del antecedente para <strong>Modus Ponens</strong> o la negación del consecuente para <strong>Modus Tollens</strong>.</p>
                <div class="note-bar">Es el mecanismo fundamental de la deducción lineal.</div>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">2. Operador Disyuntivo (∨)</h3>
                <p>Requiere la negación de uno de sus componentes para aplicar <strong>Silogismo Disyuntivo</strong>, permitiendo la obtención del componente restante.</p>
                <div class="note-bar">Eficaz para la eliminación de alternativas.</div>
            </div>
        </div>
    </div>
</div>`;

export const didacticAnalysis1SlidePart2 = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Análisis Didáctico 1: <span>Principios de Resolución (2/2)</span></h2>
    <div class="content">
        <div class="case-intro">
            Estrategias superiores cuando los operadores principales no admiten derivación directa inmediata.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">3. Conclusiones Condicionales</h3>
                <p>Se recomienda el uso de la <strong>Prueba Condicional</strong>: asumir el antecedente como premisa adicional para derivar el consecuente.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">4. Estrategia por Contradicción</h3>
                <p>El <strong>RAA</strong> es el método más potente cuando no existe una ruta directa: negar la conclusión y buscar una inconsistencia lógica.</p>
            </div>
        </div>
    </div>
</div>`;

export const didacticAnalysis2Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Análisis Didáctico 2: <span>Reglas Secundarias (1/2)</span></h2>
    <div class="content">
        <div class="case-intro">
            Asociación técnica de reglas para la manipulación y expansión de proposiciones atómicas:
        </div>
        
        <div class="grid-3">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Adición (AD)</h3>
                <p><strong>Extensión Disyuntiva:</strong> Dada una premisa verdadera, es posible añadir cualquier proposición mediante un conector disyuntivo.</p>
                <div class="note-bar">p ∴ p ∨ q</div>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Simplificación (SIMP)</h3>
                <p><strong>Extracción de Componentes:</strong> De una conjunción verdadera se puede derivar cualquiera de sus miembros por separado.</p>
                <div class="note-bar">p ∧ q ∴ p</div>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Conjunción (CONJ)</h3>
                <p><strong>Síntesis de Verdades:</strong> Permite integrar dos verdades independientes en una sola estructura compuesta.</p>
                <div class="note-bar">p, q ∴ p ∧ q</div>
            </div>
        </div>
    </div>
</div>`;

export const didacticAnalysis2SlidePart2 = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Análisis Didáctico 2: <span>Reglas Secundarias (2/2)</span></h2>
    <div class="content">
        <div class="case-intro">
            Uso de reglas estructurales avanzadas para la resolución de escenarios con disyunciones o condicionales anidados:
        </div>
        
        <div class="grid-2" style="margin-top: 15px;">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Resolución (RES)</h3>
                <p><strong>Eliminación Cruzada:</strong> Dadas dos disyunciones con un término común en estados opuestos, se deriva la disyunción de los términos restantes.</p>
                <div class="note-bar">(p ∨ q), (¬p ∨ r) ∴ q ∨ r</div>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Dilemas (DC/DD)</h3>
                <p><strong>Análisis de Casos:</strong> Utiliza la estructura de dos condicionales y una disyunción para derivar una nueva verdad disyuntiva.</p>
                <div class="note-bar">Estructuras para derivaciones complejas.</div>
            </div>
        </div>
    </div>
</div>`;

export const inferenceTip1Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Estrategia 1: <span>Análisis Retroactivo de la Conclusión</span></h2>
    <div class="content">
        <div class="case-intro">
            La estructura de la conclusión determina la ruta más eficiente para la demostración.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Determinación de Meta</h3>
                <ul style="margin-top: 10px; padding-left: 20px; line-height: 1.6;">
                    <li><strong>Conclusión Disyuntiva (∨):</strong> Identificar o derivar uno de los términos para aplicar <em>Adición</em>.</li>
                    <li><strong>Conclusión Condicional (→):</strong> Aplicar <em>Prueba Condicional</em> de forma inmediata.</li>
                    <li><strong>Conclusión Conjuntiva (∧):</strong> Derivar cada componente por separado para su posterior <em>Conjunción</em>.</li>
                </ul>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Aplicación Estratégica</h3>
                <p style="opacity: 0.8; margin-bottom: 8px;">Meta: <strong>q ∨ r</strong></p>
                <div class="formal-code" style="padding: 15px;">
                    1. p → q <br>
                    2. p <br>
                    3. q (<span title="Utilizamos MP porque tenemos el antecedente 'p' necesario para liberar el consecuente 'q'.">Modus Ponens 1, 2</span>) <br>
                    <div style="border-top: 1px solid var(--ucv-accent); margin: 8px 0; width: 60px;"></div>
                    4. <strong>q ∨ r</strong> (<span title="Aplicamos Adición para introducir 'r' y alcanzar exactamente la forma de la conclusión pedida.">Adición en 3</span>)
                </div>
            </div>
        </div>
    </div>
</div>`;

export const inferenceTip2Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Estrategia 2: <span>Descomposición Premisaria</span></h2>
    <div class="content">
        <div class="case-intro">
            La obtención de proposiciones atómicas es prioritaria, ya que actúan como "llaves" para reglas de mayor jerarquía.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Jerarquía de Simplificación</h3>
                <p style="margin-top: 10px;">
                    Identifique premisas con conjunción (∧) como conectivo principal. La aplicación de <strong>Simplificación</strong> inmediata incrementa el arsenal de verdades disponibles para aplicaciones de MP o MT.
                </p>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Extracción de Evidencia</h3>
                <p style="opacity: 0.8; margin-bottom: 8px;">Demostrar: <strong>r</strong></p>
                <div class="formal-code" style="padding: 10px;">
                    1. <strong>p ∧ (q → r)</strong><br>
                    2. p <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px 0; width: 60px;"></div>
                    3. <strong>q → r</strong> (<span title="Simplificamos para obtener el condicional que contiene nuestra variable meta.">Simplificación en 1</span>) <br>
                    4. p (<span title="Extraemos 'p' para usarla como antecedente en pasos posteriores.">Simplificación en 1</span>) <br>
                </div>
            </div>
        </div>
    </div>
</div>`;

export const inferenceTip3Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Estrategia 3: <span>Tratamiento de Operadores Negados</span></h2>
    <div class="content">
        <div class="case-intro">
            Las reglas de inferencia solo operan sobre el conector principal. Los signos de agrupación negados deben ser transformados.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Uso de Equivalencias</h3>
                <p style="margin-top: 10px;">
                    • <strong>De Morgan:</strong> Transforma un paréntesis negado en una conjunción o disyunción de negaciones.<br><br>
                    • <strong>EPI:</strong> Convierte condicionales en disyunciones para facilitar el uso de Silogismo Disyuntivo.
                </p>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Transformación Formal</h3>
                <p style="opacity: 0.8; margin-bottom: 8px;">Demostrar: <strong>¬p</strong></p>
                <div class="formal-code" style="padding: 10px;">
                    1. ¬(p ∨ q)<br>
                    2. <strong>¬p ∧ ¬q</strong> (<span title="Aplicamos De Morgan para romper el bloqueo del paréntesis y liberar los términos internos.">Leyes de De Morgan en 1</span>) <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px 0; width: 60px;"></div>
                    3. <strong>¬p</strong> (<span title="Tras la transformación, podemos simplificar para obtener la conclusión requerida.">Simplificación en 2</span>)
                </div>
            </div>
        </div>
    </div>
</div>`;

export const inferenceTip4Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Estrategia 4: <span>Construcción de Antecedentes</span></h2>
    <div class="content">
        <div class="case-intro">
            En razonamientos complejos, la aplicación de una regla mayor requiere la síntesis previa de sus componentes.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Síntesis Conjuntiva</h3>
                <p style="margin-top: 10px;">
                    Si una premisa presenta la forma (A ∧ B) → C, es imperativo obtener A y B por separado y utilizar la regla de <strong>Conjunción</strong> para fabricar el antecedente exacto.
                </p>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Construcción de la 'Llave'</h3>
                <p style="opacity: 0.8; margin-bottom: 8px;">Demostrar: <strong>r</strong></p>
                <div class="formal-code" style="padding: 10px;">
                    1. (p ∧ q) → r <br>
                    2. p <br>
                    3. q <br>
                    4. <strong>p ∧ q</strong> (<span title="Unimos 'p' y 'q' para crear el antecedente compuesto exacto que requiere la Premisa 1.">Conjunción 2, 3</span>) <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px 0; width: 60px;"></div>
                    5. r (<span title="Con el antecedente construido, podemos aplicar Modus Ponens formalmente.">Modus Ponens 1, 4</span>)
                </div>
            </div>
        </div>
    </div>
</div>`;

export const inferenceTip5Slide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Estrategia 5: <span>Método Indirecto (RAA)</span></h2>
    <div class="content">
        <div class="case-intro">
            La Reducción al Absurdo es el recurso estratégico final ante bloqueos en la derivación directa.
        </div>
        
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Derivación por Contradicción</h3>
                <p style="margin-top: 10px;">
                    Se asume formalmente la negación de la meta. La integración de este supuesto en el sistema de premisas debe conducir inevitablemente a una contradicción formal (X ∧ ¬X).
                </p>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Ejecución del RAA</h3>
                <p style="opacity: 0.8; margin-bottom: 8px;">Demostrar: <strong>p</strong></p>
                <div class="formal-code" style="padding: 10px;">
                    1. ¬p → (q ∧ ¬q) <br>
                    2. <strong>¬p</strong> (<span title="Asumimos la negación de 'p' para iniciar el proceso de demostración por contradicción.">Suposición RAA</span>) <br>
                    3. q ∧ ¬q (<span title="El supuesto activa la Premisa 1, resultando en un absurdo explícito.">MP 1, 2</span>) <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px 0; width: 60px;"></div>
                    4. <strong>p</strong> (<span title="Dada la contradicción en el sistema, el supuesto inicial debe ser falso, validando 'p'.">Cierre RAA (2-3)</span>)
                </div>
            </div>
        </div>
    </div>
</div>`;

export const comparisonSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Unificación Teórica: <span>Isomorfismo MP, MT y SD</span></h2>
    <div class="content">
        <div class="case-intro" style="text-align: center; margin-bottom: 20px;">
            Las reglas fundamentales de inferencia son manifestaciones de una misma estructura lógica mediada por la <strong>Equivalencia de la Implicación (EPI)</strong>.
        </div>
        
        <div class="grid-3">
            <div class="concept-card" style="border-top: 4px solid var(--ucv-accent);">
                <h3 style="text-align: center;">Silogismo Disyuntivo</h3>
                <div class="formal-code" style="padding: 10px; margin: 10px 0; text-align: center;">
                    A ∨ B <br>
                    ¬A <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px auto; width: 40px;"></div>
                    ∴ B
                </div>
                <p style="font-size: 14px; opacity: 0.8;">Estructura base: la negación de un componente disyuntivo valida el componente restante.</p>
            </div>

            <div class="concept-card" style="border-top: 4px solid #0ecc77;">
                <h3 style="text-align: center;">Modus Ponens</h3>
                <div class="formal-code" style="padding: 10px; margin: 10px 0; text-align: center;">
                    p → q <span style="font-size: 12px; opacity: 0.6;">(≡ ¬p ∨ q)</span><br>
                    p <span style="font-size: 12px; opacity: 0.6;">(≡ ¬(¬p))</span><br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px auto; width: 40px;"></div>
                    ∴ q
                </div>
                <p style="font-size: 14px; opacity: 0.8;">Mediante EPI, el MP se revela como un <strong>SD</strong>: negamos el primer componente (¬p) para obtener el segundo (q).</p>
            </div>

            <div class="concept-card" style="border-top: 4px solid #ff7878;">
                <h3 style="text-align: center;">Modus Tollens</h3>
                <div class="formal-code" style="padding: 10px; margin: 10px 0; text-align: center;">
                    p → q <span style="font-size: 12px; opacity: 0.6;">(≡ ¬p ∨ q)</span><br>
                    ¬q <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px auto; width: 40px;"></div>
                    ∴ ¬p
                </div>
                <p style="font-size: 14px; opacity: 0.8;">Al negar el consecuente (segundo término de ¬p ∨ q), el <strong>SD</strong> nos obliga a aceptar el primer término (¬p).</p>
            </div>
        </div>

        <div class="note-bar" style="margin-top: 25px; text-align: center; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
            <strong>Conclusión:</strong> El razonamiento deductivo se fundamenta en la consistencia de la estructura formal, independientemente del operador utilizado.
        </div>
    </div>
</div>`;

export const inferenceLawsTableSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Catálogo de <span>Leyes de Inferencia</span></h2>
    <div class="content">
        <table class="logic-table" style="width: 100%;">
            <thead>
                <tr>
                    <th style="padding: 12px;">Nombre</th>
                    <th style="padding: 12px;">Esquema Premisario</th>
                    <th style="padding: 12px;">Expresión Formal</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><strong>Modus Ponens</strong></td><td>p → q, p ∴ q</td><td>(p → q) ∧ p ⇒ q</td></tr>
                <tr><td><strong>Modus Tollens</strong></td><td>p → q, ¬q ∴ ¬p</td><td>(p → q) ∧ ¬q ⇒ ¬p</td></tr>
                <tr><td><strong>Silogismo Hipotético</strong></td><td>p → q, q → r ∴ p → r</td><td>(p → q) ∧ (q → r) ⇒ (p → r)</td></tr>
                <tr><td><strong>Silogismo Disyuntivo</strong></td><td>p ∨ q, ¬p ∴ q</td><td>(p ∨ q) ∧ ¬p ⇒ q</td></tr>
                <tr><td><strong>Adición</strong></td><td>p ∴ p ∨ q</td><td>p ⇒ (p ∨ q)</td></tr>
                <tr><td><strong>Simplificación</strong></td><td>p ∧ q ∴ p</td><td>p ∧ q ⇒ p</td></tr>
                <tr><td><strong>Conjunción</strong></td><td>p, q ∴ p ∧ q</td><td>p, q ⇒ p ∧ q</td></tr>
                <tr><td><strong>Resolución</strong></td><td>p ∨ q, ¬p ∨ r ∴ q ∨ r</td><td>(p ∨ q) ∧ (¬p ∨ r) ⇒ q ∨ r</td></tr>
                <tr><td><strong>Dilema Constructivo</strong></td><td>(p→q),(r→s), p∨r ∴ q∨s</td><td>(p→q) ∧ (r→s) ∧ (p∨r) ⇒ q∨s</td></tr>
                <tr><td><strong>Dilema Destructivo</strong></td><td>(p→q),(r→s), ¬q∨¬s ∴ ¬p∨¬r</td><td>(p→q) ∧ (r→s) ∧ (¬q∨¬s) ⇒ ¬p∨¬r</td></tr>
            </tbody>
        </table>
        
        <div style="margin-top: 15px; text-align: center;">
            <a href="https://drive.google.com/file/d/1d9zgKfcePgdHhWv47xmkcnAcwN6VhzpJ/view?usp=sharing" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(200, 240, 122, 0.1); color: var(--ucv-accent); border: 1px solid var(--ucv-accent); padding: 10px 20px; border-radius: 8px; font-weight: bold; text-decoration: none; transition: all 0.3s ease; font-size: 14px;">
                <i class="fas fa-file-pdf"></i> Ver Guía Oficial de Leyes (PDF)
            </a>
        </div>
    </div>
</div>`;
