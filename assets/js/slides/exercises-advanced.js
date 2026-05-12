export const advEx1Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 2: <span>Reducción al Absurdo (10.e) (1/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∨ q) → (r ∧ s), (r ∨ t) → (¬w ∧ x), (w ∨ y) → (p ∧ z) ∴ ¬w
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento Original</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. (p ∨ q) → (r ∧ s) <br>
                    2. (r ∨ t) → (¬w ∧ x) <br>
                    3. (w ∨ y) → (p ∧ z) <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 100px;"></div>
                    ∴ <strong>¬w</strong>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; opacity: 0.9;">
                    Al observar el argumento, notamos un alto número de variables interconectadas. La conclusión es una proposición simple negada (<strong>¬w</strong>). Esto nos sugiere que el método de <em>Reducción al Absurdo</em> es la vía más directa.<br><br>
                    Si asumimos la negación (<strong>w</strong>), la aplicación de la ley de Adición permite obtener (w ∨ y), lo cual habilita la <strong>Premisa 3</strong> para derivar <strong>p ∧ z</strong>!<br><br>
                    Luego, mediante la simplificación de <strong>p</strong>, se obtiene el antecedente necesario para la <strong>Premisa 1</strong>, que a su vez permite derivar la proposición requerida para la <strong>Premisa 2</strong>. Es una secuencia lógica coherente.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const advEx1Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 2: <span>Demostración RAA (2/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∨ q) → (r ∧ s), (r ∨ t) → (¬w ∧ x), (w ∨ y) → (p ∧ z) ∴ ¬w
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Fase 1: Derivación Inicial</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 8px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 8px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 8px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>(p ∨ q) → (r ∧ s)</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>(r ∨ t) → (¬w ∧ x)</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr><td style="text-align:center;">3</td><td>(w ∨ y) → (p ∧ z)</td><td style="color:var(--text-dim);">Premisa 3</td></tr>
                    <tr style="background: rgba(255,255,255,0.05);"><td style="text-align:center;">4</td><td><strong style="color:var(--ucv-accent)">w</strong></td><td style="color:var(--ucv-accent);"><span title="Iniciamos el método de Reducción al Absurdo suponiendo lo opuesto a nuestra meta (¬w). Este supuesto 'w' nos permitirá explorar si el sistema es capaz de sostener tal afirmación sin caer en contradicciones.">Suposición RAA</span></td></tr>
                    <tr><td style="text-align:center;">5</td><td>w ∨ y</td><td style="color:var(--text-dim);"><span title="Utilizamos la regla de Adición sobre el supuesto 'w'. Esto nos permite fabricar artificialmente la estructura disyuntiva (w ∨ y) que la Premisa 3 exige como condición necesaria para liberar su información.">Adición en 4</span></td></tr>
                    <tr><td style="text-align:center;">6</td><td>p ∧ z</td><td style="color:var(--text-dim);"><span title="Aplicamos Modus Ponens aprovechando que el Paso 5 validó el antecedente de la Premisa 3. Al cumplirse la condición, el sistema nos entrega la conjunción (p ∧ z) como un nuevo hecho demostrado.">Modus ponens entre 3 y 5</span></td></tr>
                    <tr><td style="text-align:center;">7</td><td>p</td><td style="color:var(--text-dim);"><span title="Extraemos 'p' mediante Simplificación. Esta variable es fundamental porque funciona como el disparador específico que necesitamos para interactuar con la Premisa 1 en los pasos subsiguientes.">Simplificación en 6</span></td></tr>
                    <tr style="border-bottom: 1px dashed rgba(255,255,255,0.2);"><td style="text-align:center;">8</td><td>p ∨ q</td><td style="color:var(--text-dim);"><span title="Nuevamente usamos Adición, esta vez sobre 'p'. El objetivo es igualar exactamente la estructura (p ∨ q) de la Premisa 1. Esta técnica de 'preparación de antecedente' es vital para avanzar en demostraciones complejas.">Adición en 7</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; color: var(--text-dim); text-align: center;">
                <em>(Logramos extraer <strong>p ∨ q</strong>, nuestra llave para la Premisa 1)</em>
            </div>
        </div>
    </div>
</div>`;

export const advEx1Slide3 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 2: <span>Demostración RAA (3/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∨ q) → (r ∧ s), (r ∨ t) → (¬w ∧ x), (w ∨ y) → (p ∧ z) ∴ ¬w
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Fase 2: Reacción en Cadena y Contradicción</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 8px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 8px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 8px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">8</td><td>p ∨ q</td><td style="color:var(--text-dim);"><span title="Arrastramos este valor del análisis previo para usarlo como llave en la Premisa 1. Demuestra cómo una verdad construida sigue siendo válida en niveles superiores.">Adición en 7 (Paso anterior)</span></td></tr>
                    <tr><td style="text-align:center;">9</td><td>r ∧ s</td><td style="color:var(--text-dim);"><span title="Ejecutamos el Modus Ponens en la Premisa 1 usando la 'llave' (p ∨ q) que construimos. Esto nos entrega la conjunción (r ∧ s), ampliando nuestra base de verdades derivadas.">Modus ponens entre 1 y 8</span></td></tr>
                    <tr><td style="text-align:center;">10</td><td>r</td><td style="color:var(--text-dim);"><span title="Simplificamos para obtener 'r', que es el componente base necesario para, tras una adición, activar la Premisa 2 y acercarnos a la contradicción final.">Simplificación en 9</span></td></tr>
                    <tr><td style="text-align:center;">11</td><td>r ∨ t</td><td style="color:var(--text-dim);"><span title="Aplicamos Adición sobre 'r' para construir (r ∨ t). Este paso es el puente final hacia la Premisa 2, demostrando cómo una verdad simple se expande para cumplir requisitos complejos.">Adición en 10</span></td></tr>
                    <tr><td style="text-align:center;">12</td><td>¬w ∧ x</td><td style="color:var(--text-dim);"><span title="Resolvemos la Premisa 2 mediante Modus Ponens. Al haber validado su antecedente complejo en el paso anterior, el sistema libera la información (¬w ∧ x).">Modus ponens entre 2 y 11</span></td></tr>
                    <tr><td style="text-align:center;">13</td><td><strong>¬w</strong></td><td style="color:var(--text-dim);"><span title="Extraemos ¬w por Simplificación. Este es el momento crítico donde obtenemos la negación de nuestro supuesto inicial, preparando el cierre formal del Absurdo.">Simplificación en 12</span></td></tr>
                    <tr><td style="text-align:center;">14</td><td><strong style="color:#ff7878;">w ∧ ¬w</strong></td><td style="color:var(--text-dim);"><span title="Unimos el supuesto original (paso 4) con su negación derivada (paso 13) mediante la regla de Conjunción. Al afirmar que algo es V y F al mismo tiempo, formalizamos la contradicción (F).">Conjunción entre 4 y 13, contradicción</span></td></tr>
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);"><td style="text-align:center; padding: 10px 0;">15</td><td style="padding: 10px 0;">∴ <strong>¬w</strong></td><td style="color:var(--ucv-accent); padding: 10px 0;"><span title="Como suponer 'w' rompe la consistencia del sistema (Paso 14), la lógica nos obliga a aceptar que 'w' es falso, validando así la conclusión original ¬w.">RAA (Suposición en paso 4 rechazada)</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`;

export const advEx2Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 3: <span>Prueba por Casos (Examen UCV) (1/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> ¬f ∨ [(g ∧ h) ∨ ¬(g ∨ h)], (g → h) → [(h → g) → i] ∴ ¬f ∨ i
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento Original</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. ¬f ∨ [(g ∧ h) ∨ ¬(g ∨ h)] <br>
                    2. (g → h) → [(h → g) → i] <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 80px;"></div>
                    ∴ <strong>¬f ∨ i</strong>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; opacity: 0.9;">
                    Lo primero que salta a la vista es la <strong>Premisa 1</strong>: una gran disyunción masiva. Cuando nos enfrentamos a premisas principales disyuntivas, la <em>Prueba por Casos</em> suele ser la herramienta predilecta. Estimamos que lo mejor es abrir dos caminos:<br><br>
                    • <strong>Ruta A:</strong> Si asumimos <strong>¬f</strong>, la Premisa 2 ni siquiera hace falta, porque llegamos directo a la conclusión sumando la <strong>i</strong> por Adición.<br>
                    • <strong>Ruta B:</strong> Si asumimos el bloque complejo, podemos aplicarle De Morgan para transformarlo en una equivalencia (g ↔ h). Esa equivalencia es exactamente lo que pide la <strong>Premisa 2</strong> en su antecedente. Al detonarla, obtendremos finalmente la <strong>i</strong>.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const advEx2Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 3: <span>Demostración Casos (2/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> ¬f ∨ [(g ∧ h) ∨ ¬(g ∨ h)], (g → h) → [(h → g) → i] ∴ ¬f ∨ i
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Ruta A: Evaluando el primer escenario</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 8px; text-align: center; width: 6%;">Paso</th>
                        <th style="padding: 8px; text-align: left; width: 40%;">Proposición</th>
                        <th style="padding: 8px; text-align: left; width: 54%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>¬f ∨ [(g ∧ h) ∨ ¬(g ∨ h)]</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>(g → h) → [(h → g) → i]</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr style="background: rgba(255,255,255,0.05);"><td style="text-align:center; padding-top: 15px;">3</td><td style="padding-top: 15px;"><strong style="color:var(--ucv-accent);">¬f</strong></td><td style="color:var(--ucv-accent); padding-top: 15px;"><span title="Iniciamos el análisis del primer caso de la disyunción masiva en la Premisa 1. Suponemos ¬f como una de las realidades posibles para verificar si nos conduce a la meta ¬f ∨ i.">Prueba por casos en 1</span></td></tr>
                    <tr style="border-bottom: 1px dashed rgba(255,255,255,0.2);"><td style="text-align:center; padding-bottom: 15px;">4</td><td style="padding-bottom: 15px;"><strong>¬f ∨ i</strong></td><td style="color:var(--text-dim); padding-bottom: 15px;"><span title="Usamos Adición para introducir la variable 'i'. Este paso demuestra que si ¬f es verdadero, entonces (¬f ∨ i) también lo es, independientemente del valor de 'i', cumpliendo la meta de la primera ruta.">Adición en 3</span></td></tr>
                    <tr><td colspan="3" style="padding: 20px 10px; text-align: center; font-style: italic; color: var(--text-dim); line-height: 1.4;">
                        Como se observa, la primera ruta permite alcanzar la conclusión de forma directa.<br>
                        La ley de <strong>Adición</strong> introduce el conectivo disyuntivo requerido.<br>
                        A continuación, se procede con el análisis de la segunda ruta de la prueba por casos.
                    </td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`;

export const advEx2Slide3 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 3: <span>Demostración Casos (3/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> ¬f ∨ [(g ∧ h) ∨ ¬(g ∨ h)], (g → h) → [(h → g) → i] ∴ ¬f ∨ i
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 12px;">
            <strong style="color:var(--ucv-accent);">Ruta B: El lado derecho de la disyunción</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 5px; text-align: center; width: 6%;">Paso</th>
                        <th style="padding: 5px; text-align: left; width: 45%;">Proposición</th>
                        <th style="padding: 5px; text-align: left; width: 49%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: rgba(255,255,255,0.05);"><td style="text-align:center;">5</td><td><strong style="color:var(--ucv-accent);">(g ∧ h) ∨ ¬(g ∨ h)</strong></td><td style="color:var(--ucv-accent);"><span title="Iniciamos el análisis de la segunda ruta posible de la Premisa 1. Al ser una disyunción, si el primer caso (¬f) fuera falso, este bloque complejo debe ser obligatoriamente verdadero.">Prueba por casos en 1</span></td></tr>
                    <tr><td style="text-align:center;">6</td><td>(g ∧ h) ∨ (¬g ∧ ¬h)</td><td style="color:var(--text-dim);"><span title="Aplicamos la Ley de De Morgan para transformar la negación de la disyunción en una conjunción de negaciones. Esto permite 'entrar' en la estructura y trabajar con sus componentes internos.">Morgan para ∨ en 5</span></td></tr>
                    <tr><td style="text-align:center;">7</td><td>[(g ∧ h) ∨ ¬g] ∧ [(g ∧ h) ∨ ¬h]</td><td style="color:var(--text-dim);"><span title="Distribuimos la disyunción sobre la conjunción. Este movimiento estratégico busca separar las variables para poder aplicar simplificaciones en los pasos siguientes.">Distributiva para ∨ en 6</span></td></tr>
                    <tr><td style="text-align:center;">8</td><td>[(g ∨ ¬g) ∧ (h ∨ ¬g)] ∧ [(g ∨ ¬h) ∧ (h ∨ ¬h)]</td><td style="color:var(--text-dim);"><span title="Realizamos una segunda distribución profunda. El objetivo técnico es generar tautologías (g ∨ ¬g) que el sistema reconozca como verdades absolutas.">Distributiva para ∨ en 7</span></td></tr>
                    <tr><td style="text-align:center;">9</td><td>[V ∧ (¬g ∨ h)] ∧ [(¬h ∨ g) ∧ V]</td><td style="color:var(--text-dim);"><span title="Aplicamos la Ley del Tercer Excluido: (g ∨ ¬g) es siempre V. Al sustituir estas tautologías, simplificamos la fórmula eliminando el 'ruido' lógico.">Tercer excluido y conmutativa para ∨ en 8</span></td></tr>
                    <tr><td style="text-align:center;">10</td><td>(g → h) ∧ (h → g)</td><td style="color:var(--text-dim);"><span title="Transformamos las disyunciones restantes en condicionales mediante la ley EPI. Esto revela la estructura oculta de una Equivalencia Lógica (g ↔ h) fragmentada.">Ley de identidad para ∧ y EPI en 9</span></td></tr>
                    <tr><td style="text-align:center;">11</td><td>g → h</td><td style="color:var(--text-dim);"><span title="Simplificamos para obtener (g → h). Esta es la primera 'llave' necesaria para desarmar la estructura anidada de la Premisa 2 y avanzar hacia la conclusión 'i'.">Simplificación en 10</span></td></tr>
                    <tr><td style="text-align:center;">12</td><td>(h → g) → i</td><td style="color:var(--text-dim);"><span title="Ejecutamos el primer nivel de la Premisa 2 mediante Modus Ponens. Al validar el antecedente (g → h), liberamos el condicional interno para su posterior resolución.">Modus ponens entre 2 y 11</span></td></tr>
                    <tr><td style="text-align:center;">13</td><td>h → g</td><td style="color:var(--text-dim);"><span title="Simplificamos la otra mitad de nuestra equivalencia (h → g). Esta es la segunda 'llave' que necesitamos para terminar de resolver la Premisa 2.">Simplificación en 10</span></td></tr>
                    <tr><td style="text-align:center;">14</td><td>i</td><td style="color:var(--text-dim);"><span title="Aplicamos el Modus Ponens final sobre el condicional liberado en el paso 12. Al usar la llave (h → g), el sistema nos entrega finalmente la proposición 'i'.">Modus ponens entre 12 y 13</span></td></tr>
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);"><td style="text-align:center; padding: 5px 0;">15</td><td style="padding: 5px 0;">∴ <strong>¬f ∨ i</strong></td><td style="color:var(--ucv-accent); padding: 5px 0;"><span title="Como obtuvimos 'i', usamos Adición para igualar la conclusión final. Al haber llegado a la misma meta por ambos caminos, la prueba por casos queda validada.">Adición y conmutativa en 14</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 8px; text-align: center; color: var(--ucv-accent);">Ambas rutas derivaron <strong>¬f ∨ i</strong>. La prueba es válida.</div>
        </div>
    </div>
</div>`;

export const advEx3Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 4: <span>Prueba Condicional (6.d) (1/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> d → (a ∨ c), d ∧ ¬a ∴ d → c
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento</h3>
                <div class="formal-code" style="padding: 15px; margin-top: 5px;">
                    1. d → (a ∨ c)<br>
                    2. d ∧ ¬a<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0;"></div>
                    ∴ <strong>d → c</strong> 
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; opacity: 0.9;">
                    La meta ahora es un condicional (<strong>d → c</strong>), así que la herramienta correcta es la <em>Prueba Condicional</em>. Asumimos <strong>d</strong> y tratamos de derivar <strong>c</strong>.<br><br>
                    La Premisa 2 nos da simultáneamente <strong>d</strong> y <strong>¬a</strong>. Con el supuesto <strong>d</strong>, activamos la Premisa 1 y obtenemos la disyunción <strong>a ∨ c</strong>.<br><br>
                    Luego, al combinar <strong>a ∨ c</strong> con <strong>¬a</strong>, eliminamos la primera opción y llegamos a <strong>c</strong>. Con eso cerramos la prueba condicional.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const advEx3Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 4: <span>Demostración PC (2/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> d → (a ∨ c), d ∧ ¬a ∴ d → c
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Fase 1: Asumiendo el antecedente</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 8px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 8px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 8px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>d → (a ∨ c)</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>d ∧ ¬a</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr style="background: rgba(255,255,255,0.05);"><td style="text-align:center;">3</td><td><strong style="color:var(--ucv-accent);">d</strong></td><td style="color:var(--ucv-accent);"><span title="Asumimos el antecedente de la conclusión para abrir la Prueba Condicional.">Suposición PC</span></td></tr>
                    <tr><td style="text-align:center;">4</td><td>d ∧ ¬a</td><td style="color:var(--text-dim);"><span title="Reutilizamos la premisa 2 dentro del contexto de la prueba condicional.">Premisa 2</span></td></tr>
                    <tr><td style="text-align:center;">5</td><td>¬a</td><td style="color:var(--text-dim);"><span title="Simplificamos la conjunción para aislar la negación del antecedente secundario.">Simplificación en 4</span></td></tr>
                    <tr><td style="text-align:center;">6</td><td>a ∨ c</td><td style="color:var(--text-dim);"><span title="Al contar con d, activamos la Premisa 1 mediante Modus Ponens.">Modus ponens entre 1 y 3</span></td></tr>
                    <tr><td style="text-align:center;">7</td><td>c</td><td style="color:var(--text-dim);"><span title="Aplicamos Silogismo Disyuntivo: si a es falso, entonces debe valer c.">Silogismo disyuntivo entre 6 y 5</span></td></tr>
                    <tr style="border-bottom: 1px dashed rgba(255,255,255,0.2);"><td style="text-align:center;">8</td><td>∴ <strong>d → c</strong></td><td style="color:var(--text-dim);"><span title="Si asumiendo d llegamos a c, entonces el condicional queda demostrado.">Cierre de la prueba condicional</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; color: var(--text-dim); text-align: center;">
                <em>(Al asumir d, la prueba produce c y cierra el condicional)</em>
            </div>
        </div>
    </div>
</div>`;

export const advEx3Slide3 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 4: <span>Demostración PC (3/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> d → (a ∨ c), d ∧ ¬a ∴ d → c
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Fase 2: Derivación del Consecuente</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 8px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 8px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 8px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">5</td><td>¬a</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">6</td><td>a ∨ c</td><td style="color:var(--text-dim);">Modus ponens entre 1 y 3</td></tr>
                    <tr><td style="text-align:center;">7</td><td>c</td><td style="color:var(--text-dim);"><span title="Con la negación de a, el silogismo disyuntivo nos deja solo c como posibilidad válida.">Silogismo disyuntivo entre 6 y 5</span></td></tr>
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);"><td style="text-align:center; padding: 15px 0;">8</td><td style="padding: 15px 0;">∴ <strong>d → c</strong></td><td style="color:var(--ucv-accent); padding: 15px 0;"><span title="Al asumir d se deriva c, por lo que la implicación queda justificada.">Cierre de la prueba condicional</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; color: var(--text-dim); text-align: center;">
                <em>(La suposición conduce a c, por tanto el condicional queda demostrado)</em>
            </div>
        </div>
    </div>
</div>`;

export const advEx4Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 5: <span>Prueba de Invalidez (13.d) (1/1)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> p ∧ ¬q, (r ∧ s) → (p → q), (t → r) ∨ (u ∧ s) ∴ ¬t ∨ ¬u
    </div>
    <div class="content">
        <div class="case-intro" style="opacity: 0.9; padding: 15px; border-left: 4px solid var(--ucv-accent); background: rgba(255,255,255,0.02);">
            <strong>Análisis Estratégico:</strong> Antes de probar empíricamente la invalidez de un argumento, es fundamental declarar qué estamos intentando lograr:<br><br>
            <em>"Debemos buscar una única asignación de valores de verdad que haga todas las premisas verdaderas, pero que simultáneamente vuelva falsa la conclusión."</em>
        </div>
        
        <div class="validity-visual" style="margin-top: 15px;">
            <div class="argument-panel" style="display: flex; gap: 20px;">
                <div style="flex: 1;">
                    <h3 style="margin-bottom: 12px; color: var(--ucv-accent);">Argumento</h3>
                    <div class="formal-code" style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                        1. p ∧ ¬q<br>
                        2. (r ∧ s) → (p → q)<br>
                        3. (t → r) ∨ (u ∧ s)<br>
                        <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 60px;"></div>
                        ∴ ¬t ∨ ¬u
                    </div>
                </div>
            </div>
            
            <div class="sandbox-panel" id="sandbox-2" style="margin-top: 15px; background: linear-gradient(180deg, rgba(18, 24, 29, 0.98), rgba(11, 15, 18, 0.98)); border: 1px solid rgba(200, 240, 122, 0.3); border-radius: 12px; padding: 12px 15px;">
                <h3 style="color: var(--ucv-accent); margin-bottom: 8px; text-align: center; font-size: 16px;"><i class="fas fa-sliders-h"></i> Simulador Valores de Verdad</h3>
                
                <div class="var-toggles" style="display: flex; justify-content: center; gap: 6px; margin-bottom: 10px; flex-wrap: wrap;">
                    <button class="var-toggle" data-var="p" data-val="?" style="padding: 6px 12px; font-size: 15px;">p = <span class="val">?</span></button>
                    <button class="var-toggle" data-var="q" data-val="?" style="padding: 6px 12px; font-size: 15px;">q = <span class="val">?</span></button>
                    <button class="var-toggle" data-var="r" data-val="?" style="padding: 6px 12px; font-size: 15px;">r = <span class="val">?</span></button>
                    <button class="var-toggle" data-var="s" data-val="?" style="padding: 6px 12px; font-size: 15px;">s = <span class="val">?</span></button>
                    <button class="var-toggle" data-var="t" data-val="?" style="padding: 6px 12px; font-size: 15px;">t = <span class="val">?</span></button>
                    <button class="var-toggle" data-var="u" data-val="?" style="padding: 6px 12px; font-size: 15px;">u = <span class="val">?</span></button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; text-align: center;">
                    <div class="eval-box" id="eval2-p1" style="min-height:50px; padding: 5px; font-size: 13px;">P1 (p∧¬q)<br><span class="res" style="font-size: 20px;">?</span></div>
                    <div class="eval-box" id="eval2-p2" style="min-height:50px; padding: 5px; font-size: 13px;">P2 ((r∧s)→...)<br><span class="res" style="font-size: 20px;">?</span></div>
                    <div class="eval-box" id="eval2-p3" style="min-height:50px; padding: 5px; font-size: 13px;">P3 ((t→r)∨...)<br><span class="res" style="font-size: 20px;">?</span></div>
                    <div class="eval-box eval-c" id="eval2-c" style="min-height:50px; padding: 5px; font-size: 13px;">C (¬t∨¬u)<br><span class="res" style="font-size: 20px;">?</span></div>
                </div>
                
                <div id="sandbox-msg-2" style="margin-top: 10px; padding: 8px; border-radius: 8px; text-align: center; font-size: 14px; font-weight: bold; background: rgba(255, 255, 255, 0.05); color: var(--text-dim); transition: all 0.3s ease;">
                    Haz clic en las variables de arriba para asignar valores.
                </div>
            </div>
        </div>
    </div>
</div>`;

export const advEx5Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 6: <span>Desafío de Simbolización (5.e) (1/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> Si hay desidia, entonces no hay espíritu de trabajo o no hay exigencia personal o hay huelgas. Si hay huelgas y desidia, entonces hay una situación de pánico. No hay responsabilidad o hay exigencia personal. Si tenemos honestidad, entonces hay responsabilidad, aumenta la producción y hay espíritu de trabajo. Si aumenta la producción, entonces no hay situación de pánico y hay desidia. Por lo tanto, no tenemos honestidad.
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Argumento en Lenguaje Natural</h3>
                <p style="font-style: italic; line-height: 1.6; color: var(--text-dim);">
                    <span title="[P1] Premisa 1" style="cursor:help;">Si hay desidia, entonces no hay espíritu de trabajo, o no hay exigencia personal, o hay huelgas.</span>
                    <span title="[P2] Premisa 2" style="cursor:help;">Si hay huelgas y desidia, entonces hay una situación de pánico.</span>
                    <span title="[P3] Premisa 3" style="cursor:help;">No hay responsabilidad o hay exigencia personal.</span>
                    <span title="[P4] Premisa 4" style="cursor:help;">Si tenemos honestidad, entonces hay responsabilidad, aumenta la producción y hay espíritu de trabajo.</span>
                    <span title="[P5] Premisa 5" style="cursor:help;">Si aumenta la producción, entonces no hay situación de pánico y hay desidia.</span>
                    <span title="[C] Conclusión" style="cursor:help;">Por lo tanto, no tenemos honestidad.</span>
                </p>
            </div>
            
            <div class="example-card" style="margin-top: 10px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                    <div>
                        <h3 style="color:var(--ucv-accent);">Proposiciones Simples</h3>
                        <ul style="line-height: 1.4; color: var(--text-dim); list-style: none; padding: 0;">
                            <li><strong>d:</strong> desidia | <strong>e:</strong> espíritu de trabajo</li>
                            <li><strong>x:</strong> exigencia personal | <strong>h:</strong> huelgas</li>
                            <li><strong>p:</strong> pánico | <strong>r:</strong> responsabilidad</li>
                            <li><strong>o:</strong> honestidad | <strong>n:</strong> producción</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style="color:var(--ucv-accent);">Simbolización Formal</h3>
                        <div class="formal-code" style="padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                            1. d → (¬e ∨ ¬x ∨ h)<br>
                            2. (h ∧ d) → p<br>
                            3. ¬r ∨ x<br>
                            4. o → (r ∧ n ∧ e)<br>
                            5. n → (¬p ∧ d)<br>
                            <div style="border-top: 1px solid var(--ucv-accent); margin: 8px 0; width: 80px;"></div>
                            ∴ <strong>¬o</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

export const advEx5Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 6: <span>Demostración (2/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> r → ¬(p ∨ q), p ∨ t, ¬t ∧ s ∴ r → u
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Fase 1: Asumiendo el Absurdo y Extrayendo Variables</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 6px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 6px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 6px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: rgba(255,255,255,0.05);"><td style="text-align:center;">6</td><td><strong style="color:var(--ucv-accent);">o</strong></td><td style="color:var(--ucv-accent);"><span title="Iniciamos la Reducción al Absurdo suponiendo lo opuesto a la conclusión ¬o. Al suponer 'o', buscaremos demostrar que esta afirmación es lógicamente incompatible con el resto de las premisas.">Suposición RAA</span></td></tr>
                    <tr><td style="text-align:center;">7</td><td>r ∧ n ∧ e</td><td style="color:var(--text-dim);"><span title="Ejecutamos la Premisa 4 usando el supuesto de RAA 'o' como antecedente.">Modus ponens entre 4 y 6</span></td></tr>
                    <tr><td style="text-align:center;">8</td><td>n</td><td style="color:var(--text-dim);"><span title="Extraemos 'n' para poder activar la Premisa 5 en el siguiente paso.">Simplificación en 7</span></td></tr>
                    <tr><td style="text-align:center;">9</td><td>¬p ∧ d</td><td style="color:var(--text-dim);"><span title="Al tener 'n', resolvemos la Premisa 5 para obtener información sobre 'p' y 'd'.">Modus ponens entre 5 y 8</span></td></tr>
                    <tr><td style="text-align:center;">10</td><td>d</td><td style="color:var(--text-dim);"><span title="Separamos 'd' porque es un componente necesario para la Premisa 2 más adelante.">Simplificación en 9</span></td></tr>
                    <tr><td style="text-align:center;">11</td><td>¬p</td><td style="color:var(--text-dim);"><span title="Extraemos ¬p para prepararnos para la contradicción final con la Premisa 2.">Simplificación en 9</span></td></tr>
                    <tr><td style="text-align:center;">12</td><td>e</td><td style="color:var(--text-dim);"><span title="Extraemos 'e' para construir la conjunción que exige la Premisa 1 (paso 17).">Simplificación en 7</span></td></tr>
                    <tr><td style="text-align:center;">13</td><td>r</td><td style="color:var(--text-dim);"><span title="Extraemos 'r' para realizar el Silogismo Disyuntivo con la Premisa 3.">Simplificación en 7</span></td></tr>
                    <tr style="border-bottom: 1px dashed rgba(255,255,255,0.2);"><td style="text-align:center;">14</td><td>x</td><td style="color:var(--text-dim);"><span title="Como la Premisa 3 dice ¬r ∨ x y tenemos 'r', la única opción es que ocurra 'x'.">Silogismo disyuntivo entre 3 y 13</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 12px; color: var(--text-dim); text-align: center;">
                <em>(La suposición permitió la obtención de las proposiciones n, d, ¬p, e, r, x de forma aislada)</em>
            </div>
        </div>
    </div>
</div>`;

export const advEx5Slide3 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 6: <span>Demostración (3/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> r → ¬(p ∨ q), p ∨ t, ¬t ∧ s ∴ r → u
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <strong style="color:var(--ucv-accent);">Fase 2: Derivación Técnica sobre la Premisa 1</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 6px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 6px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 6px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">15</td><td>¬e ∨ ¬x ∨ h</td><td style="color:var(--text-dim);"><span title="Ejecutamos la Premisa 1 mediante Modus Ponens usando el antecedente 'd' obtenido en el paso 10. Esto nos entrega una disyunción compleja de tres términos.">Modus ponens entre 1 y 10</span></td></tr>
                    <tr><td style="text-align:center;">16</td><td>(e ∧ x) → h</td><td style="color:var(--text-dim);"><span title="Transformamos la disyunción en condicional mediante EPI y Morgan. Este paso estratégico convierte un bloque difícil de manejar en una relación de causa-efecto (e ∧ x) → h.">EPI y Morgan para ∨ en 15</span></td></tr>
                    <tr><td style="text-align:center;">17</td><td>e ∧ x</td><td style="color:var(--text-dim);"><span title="Unimos las verdades 'e' (paso 12) y 'x' (paso 14) mediante Conjunción. Al tener ambas piezas, estamos listos para 'disparar' el condicional que creamos en el paso anterior.">Conjunción entre 12 y 14</span></td></tr>
                    <tr><td style="text-align:center;">18</td><td>h</td><td style="color:var(--text-dim);"><span title="Ejecutamos el Modus Ponens sobre el condicional del paso 16. Al validar su antecedente (e ∧ x), la lógica nos entrega 'h', la pieza que faltaba para la Premisa 2.">Modus ponens entre 16 y 17</span></td></tr>
                    <tr><td style="text-align:center;">19</td><td>h ∧ d</td><td style="color:var(--text-dim);"><span title="Unimos 'h' (paso 18) con 'd' (paso 10) mediante Conjunción. Esta estructura es el antecedente exacto que la Premisa 2 exige para liberar su información.">Conjunción entre 18 y 10</span></td></tr>
                    <tr><td style="text-align:center;">20</td><td>p</td><td style="color:var(--text-dim);"><span title="Aplicamos Modus Ponens en la Premisa 2. Al haber cumplido la condición (h ∧ d), obtenemos 'p', que entra en colisión directa con nuestro derivado anterior.">Modus ponens entre 2 y 19</span></td></tr>
                    <tr><td style="text-align:center;">21</td><td><strong style="color:#ff7878;">p ∧ ¬p</strong></td><td style="color:var(--text-dim);"><span title="Unimos 'p' (paso 20) con '¬p' (paso 11) mediante Conjunción. Al afirmar la verdad y falsedad simultánea de 'p', formalizamos el Absurdo que invalida la suposición RAA.">Conjunción entre 20 y 11, contradicción</span></td></tr>
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);"><td style="text-align:center; padding: 12px 0;">22</td><td style="padding: 12px 0;">∴ <strong>¬o</strong></td><td style="color:var(--ucv-accent); padding: 12px 0;"><span title="Como suponer 'o' (paso 6) condujo a un imposible lógico (paso 21), la honestidad 'o' es falsa. Por lo tanto, queda demostrada la conclusión ¬o.">RAA (Supuesto en 6 rechazado)</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`;

export const advEx6Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 7: <span>Prueba de Inconsistencia (1/2)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Premisas:</strong> p ∧ q, p → ¬r, (¬r ∧ s) → ¬q, q → s
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. p ∧ q<br>
                    2. p → ¬r<br>
                    3. (¬r ∧ s) → ¬q<br>
                    4. q → s<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0;"></div>
                    <span style="color:#ff7878;">(No hay conclusión. Probar inconsistencia)</span>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; opacity: 0.9;">
                    Aquí no hay conclusión a la cual llegar. El mandato es probar que el conjunto de premisas es <strong>inconsistente</strong>. Para lograrlo, nuestra meta es usar las reglas de inferencia para fabricar una <strong>contradicción</strong> evidente (ej: r ∧ ¬r).<br><br>
                    Al observar el planteamiento, la <strong>Premisa 1</strong> (p ∧ q) permite, por Simplificación, obtener tanto <strong>p</strong> como <strong>q</strong> de forma aislada.<br><br>
                    Con <strong>p</strong> activamos la Premisa 2 y obtenemos <strong>¬r</strong>. Con <strong>q</strong> abrimos el camino hacia la Premisa 3 y la Premisa 4, hasta construir la contradicción final.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const advEx6Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 3: Práctica</div>
    <h2 class="slide-title">Ejercicio 7: <span>Demostración (2/2)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Premisas:</strong> p ∧ q, p → ¬r, (¬r ∧ s) → ¬q, q → s
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 15px;">
            <table class="formal-table">
                <thead>
                    <tr>
                        <th>Paso</th>
                        <th>Proposición</th>
                        <th>Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>p ∧ q</td><td>Premisa 1</td></tr>
                    <tr><td>2</td><td>p → ¬r</td><td>Premisa 2</td></tr>
                    <tr><td>3</td><td>(¬r ∧ s) → ¬q</td><td>Premisa 3</td></tr>
                    <tr><td>4</td><td>q → s</td><td>Premisa 4</td></tr>
                    
                    <tr style="background: rgba(255,255,255,0.02);"><td>5</td><td>p</td><td><span title="Separamos 'p' de la Premisa 1 porque es la llave para activar la Premisa 2.">Simplificación en 1</span></td></tr>
                    <tr><td>6</td><td><strong style="color:var(--ucv-accent);">¬r</strong></td><td><span title="Ejecutamos la Premisa 2 usando 'p' para obtener la primera parte de nuestra futura contradicción.">Modus ponens entre 5 y 2</span></td></tr>
                    <tr style="background: rgba(255,255,255,0.02);"><td>7</td><td>q</td><td><span title="Extraemos 'q' de la Premisa 1 para usarla como llave en la Premisa 3 y la Premisa 4.">Simplificación en 1</span></td></tr>
                    <tr><td>8</td><td>¬(¬r ∧ s)</td><td><span title="Desde q y la Premisa 3 aplicamos Modus Tollens para negar la conjunción interna.">Modus tollens entre 7 y 3</span></td></tr>
                    <tr><td>9</td><td>r ∨ ¬s</td><td><span title="Aplicamos De Morgan y doble negación para reescribir el paso 8 en una forma más útil.">De Morgan y doble negación en 8</span></td></tr>
                    <tr><td>10</td><td>s → r</td><td><span title="Reordenamos la disyunción y la convertimos a condicional mediante EPI.">Conmutativa para ∨ y EPI en 9</span></td></tr>
                    <tr><td>11</td><td>q → r</td><td><span title="Encadenamos la Premisa 4 con el nuevo condicional del paso 10.">Silogismo hipotético entre 4 y 10</span></td></tr>
                    <tr><td>12</td><td><strong style="color:var(--ucv-accent);">r</strong></td><td><span title="Con q y el puente q→r obtenemos r, cerrando el tramo principal de la derivación.">Modus ponens entre 7 y 11</span></td></tr>
                    
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,120,120,0.1);">
                        <td>13</td>
                        <td>∴ <strong style="color:#ff7878;">¬r ∧ r</strong></td>
                        <td style="color:#ff7878;"><span title="Unimos el ¬r (paso 6) con el r (paso 12). Al ser opuestos, demostramos que el sistema es inconsistente.">Conjunción entre 6 y 12. Contradicción (≡ F)</span></td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 15px; color: var(--text-dim); text-align: center;">
                <em>(La contradicción <strong>¬r ∧ r</strong> confirma que <strong>las premisas son inconsistentes</strong>)</em>
            </div>
        </div>
    </div>
</div>`;
