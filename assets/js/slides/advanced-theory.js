export const fallaciesSlide = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Errores de Resolución: <span>Falacias Formales</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 20px; color: var(--text-dim);">
            En situaciones de evaluación, es fundamental evitar la aplicación de <strong>inferencias inválidas</strong>. Las siguientes son las falacias más recurrentes que invalidan un proceso de demostración formal.
        </div>
        
        <div class="grid-2">
            <div class="concept-card" style="border-top: 4px solid #ff7878;">
                <h3 style="color:#ff7878;">1. Afirmación del Consecuente</h3>
                <div class="formal-code" style="padding: 10px; text-align: center; margin: 10px 0;">
                    p → q<br>
                    q<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px auto; width: 40px;"></div>
                    ∴ <strong style="color:#ff7878;">p</strong> <em>(¡INCORRECTO!)</em>
                </div>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    <strong>Análisis:</strong> El hecho de que se cumpla el consecuente (q) no garantiza que haya sido provocado por el antecedente (p). Pueden existir otras causas para q. El <em>Modus Ponens</em> es unidireccional.
                </p>
            </div>
            
            <div class="concept-card" style="border-top: 4px solid #ff7878;">
                <h3 style="color:#ff7878;">2. Negación del Antecedente</h3>
                <div class="formal-code" style="padding: 10px; text-align: center; margin: 10px 0;">
                    p → q<br>
                    ¬p<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px auto; width: 40px;"></div>
                    ∴ <strong style="color:#ff7878;">¬q</strong> <em>(¡INCORRECTO!)</em>
                </div>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    <strong>Análisis:</strong> Negar la causa (p) no implica negar el efecto (q). La proposición q podría seguir siendo verdadera por otros motivos. La única negación válida es la del consecuente (<em>Modus Tollens</em>).
                </p>
            </div>
        </div>
    </div>
</div>`;

export const explosionSlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Principio de Explosión: <span>Ex Falso Quodlibet</span></h2>
    <div class="content">
        <div class="case-intro">
            ¿Qué sucede cuando llegamos a un <strong>Absurdo (F)</strong>? En lógica formal, una vez que has demostrado una contradicción absoluta, el sistema te otorga una "llave maestra": puedes derivar <strong>cualquier cosa</strong> de forma directa.
        </div>
        
        <div class="grid-2">
            <div class="concept-card" style="border-left: 5px solid var(--ucv-accent); grid-column: span 2;">
                <h3 style="color:var(--ucv-accent); margin-bottom: 15px;">Demostración Formal</h3>
                <div class="formal-code" style="padding: 15px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                                <th style="padding: 5px; text-align: center; width: 10%;">Paso</th>
                                <th style="padding: 5px; text-align: left; width: 30%;">Proposición</th>
                                <th style="padding: 5px; text-align: left; width: 60%;">Justificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="text-align:center;">1</td>
                                <td><strong>p ∧ ¬p</strong></td>
                                <td style="color:var(--text-dim);"><span title="Se asume una contradicción inicial (p y no p) como punto de partida. Específicamente, en un RAA esto genera el punto de quiebre donde el sistema debe demostrar su incapacidad de aceptar tal proposición, permitiendo el inicio del flujo derivativo.">Premisa / Supuesto Absurdo</span></td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">2</td>
                                <td><strong>F</strong></td>
                                <td style="color:var(--text-dim);"><span title="La conjunción de una proposición con su negación (¬p) define formalmente el valor Falso o Absurdo. Funciona como un 'atajo simbólico' que representa el colapso de la consistencia del sistema lógico tras el Paso 1.">Definición de Absurdo (1)</span></td>
                            </tr>
                            <tr style="background: rgba(var(--ucv-accent-rgb), 0.05);">
                                <td style="text-align:center;">3</td>
                                <td><strong>q ∧ ¬q</strong></td>
                                <td style="color:var(--text-dim);"><span title="En lógica clásica (Principio de Explosión), una vez alcanzado el Falso, el sistema permite construir cualquier otra contradicción arbitraria 'q'. Esto opera como un puente para 'infectar' variables que antes eran inaccesibles.">Infección Lógica (2)</span></td>
                            </tr>
                            <tr style="background: rgba(var(--ucv-accent-rgb), 0.1);">
                                <td style="text-align:center;">4</td>
                                <td><strong>q</strong></td>
                                <td style="color:var(--ucv-accent); font-weight: bold;"><span title="Aplicamos Simplificación al Paso 3 para extraer la variable deseada (q) de la contradicción infectada. Demuestra que una vez roto el sistema con un falso, cualquier afirmación q, por arbitraria que sea, puede ser formalmente validada.">Simplificación (3)</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style="font-size: 0.9rem; margin-top: 15px; opacity: 0.8; line-height: 1.5;">
                    Esta estructura demuestra que si el sistema admite un solo falso, la barrera de la verdad se rompe y permite validar <strong>cualquier</strong> proposición <em>q</em> que se nos ocurra.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const dilemmaTipSlide = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Nota de la Cátedra (UCV): <span>Dilema Constructivo</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 15px;">
            El <strong>Dilema Constructivo</strong> permite transferir una disyunción o conjunción de causas hacia sus respectivos efectos.
        </div>
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">1. Formulación Disyuntiva</h3>
                <div class="formal-code" style="margin: 10px 0; padding: 10px;">
                    [(p → q) ∧ (r → s) ∧ (p ∨ r)] ⇒ <strong>q ∨ s</strong>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.8;">
                    <strong>Escenario:</strong> Si sabemos que ocurre al menos una de las causas (p o r), garantizamos que ocurrirá al menos uno de los efectos (q o s).
                </p>
            </div>
            <div class="example-card" style="border: 1px solid var(--ucv-accent); background: rgba(var(--ucv-accent-rgb), 0.05);">
                <h3 style="color:var(--ucv-accent)">2. Formulación MDI (M. Monsalve)</h3>
                <div class="formal-code" style="margin: 10px 0; padding: 10px; color:var(--ucv-accent); background: rgba(0,0,0,0.2);">
                    [(p → q) ∧ (r → s)] ⇒ <strong>(p ∧ r) → (q ∧ s)</strong>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.9;">
                    <strong>Intuición:</strong> Si p implica q Y r implica s, entonces la ocurrencia simultánea de ambas causas (p ∧ r) implica necesariamente la ocurrencia simultánea de ambos efectos (q ∧ s).
                </p>
            </div>
        </div>
        <div class="note-bar" style="margin-top: 20px; font-style: italic;">
            <strong>Tip de examen:</strong> Esta segunda forma es vital para "empaquetar" premisas condicionales antes de una conjunción final.
        </div>
    </div>
</div>`;

export const decisionAlgorithmSlide = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Algoritmo de Selección: <span>Estrategia de Resolución</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 15px; color: var(--text-dim);">
            El mayor obstáculo en un examen no es aplicar las leyes, sino responder: <strong>"¿Qué método elijo?"</strong>. Antes de escribir el Paso 1, haz este chequeo mental sobre el argumento:
        </div>
        
        <div class="concept-grid" style="grid-template-columns: 1fr 1fr; gap: 15px;">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent); margin-bottom: 8px;">1. ¿Conclusión condicional? (p → q)</h3>
                <p style="color: var(--text-dim);">⇒ Se recomienda iniciar mediante la <strong>Prueba Condicional (PC)</strong>. Asuma el antecedente para derivar el consecuente.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent); margin-bottom: 8px;">2. ¿Premisas con disyunciones? (x ∨ y)</h3>
                <p style="color: var(--text-dim);">⇒ Aplique la <strong>Prueba por Casos</strong>. Desarrolle las rutas paralelas; si todas derivan en la conclusión, la demostración es exitosa.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent); margin-bottom: 8px;">3. ¿Bloqueo directo o conclusión ¬x?</h3>
                <p style="color: var(--text-dim);">⇒ Utilice la <strong>Reducción al Absurdo (RAA)</strong>. Niegue la conclusión para incorporarla como premisa y derive una contradicción formal.</p>
            </div>
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent); margin-bottom: 8px;">4. ¿El ejercicio NO tiene conclusión?</h3>
                <p style="color: var(--text-dim);">⇒ Te están pidiendo probar <strong>Inconsistencia</strong>. Usa las premisas entre sí hasta generar una contradicción directa (r ∧ ¬r).</p>
            </div>
        </div>
    </div>
</div>`;
