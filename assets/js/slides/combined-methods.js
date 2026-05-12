export const combinedIntroSlide = `
<div id="modulo-4" class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Práctica Avanzada: <span>Métodos Combinados</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">¿Qué es la anidación lógica?</h3>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    Existen estructuras argumentativas complejas donde la aplicación de un único método de demostración resulta ineficiente. En estos escenarios formales, se requiere <strong>anidar</strong> métodos, es decir, desarrollar una sub-demostración dentro de otra.<br><br>
                    <strong>La sinergia metodológica más frecuente:</strong><br>
                    <span style="color: var(--ucv-accent);">Prueba Condicional (PC) + Reducción al Absurdo (RAA)</span>.<br><br>
                    Esto ocurre al demostrar un condicional formal (A → B). Tras asumir el antecedente (A) mediante PC, la vía más expedita y rigurosa para derivar el consecuente (B) suele ser la aplicación de un RAA, asumiendo temporalmente su negación (¬B).
                </p>
            </div>
            <div class="example-card" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <h3 style="color:var(--ucv-accent); margin-bottom: 15px;">Estructura de Anidación Visual</h3>
                <div class="formal-code" style="width: 85%; padding: 15px; border-left: 4px solid #ffba08; background: rgba(255,186,8,0.05); border-radius: 0 8px 8px 0;">
                    <strong style="color:#ffba08;">[A]</strong> <span style="opacity:0.7;">(Abre Suposición PC)</span><br>
                    
                    <div style="margin: 12px 0 12px 20px; padding: 12px; border-left: 4px solid #0ecc77; background: rgba(14,204,119,0.1); border-radius: 0 8px 8px 0;">
                        <strong style="color:#0ecc77;">[¬B]</strong> <span style="opacity:0.7;">(Abre Suposición RAA)</span><br>
                        <div style="margin: 10px 0 10px 15px; opacity:0.8; font-style: italic;">... derivamos contradicción ...</div>
                        ∴ <strong style="color:#0ecc77;">B</strong> <span style="opacity:0.7;">(Cierre de RAA)</span>
                    </div>
                    
                    ∴ <strong style="color:#ffba08;">A → B</strong> <span style="opacity:0.7;">(Cierre de PC)</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

export const combinedExSlide1 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 8: <span>Métodos Combinados (1/2)</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. p → (q ∨ r)<br>
                    2. q → s<br>
                    3. r → s<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 60px;"></div>
                    ∴ <strong>p → s</strong>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    Nuestra conclusión es un condicional (<strong>p → s</strong>). Esto nos obliga automáticamente a iniciar una <em>Prueba Condicional</em>, asumiendo <strong>p</strong>.<br><br>
                    Al analizar las premisas, se observa que la <strong>Premisa 4</strong> requiere el valor de "h" para su ejecución. Al derivarla, se obtienen las proposiciones <strong>t</strong> y <strong>a</strong>. Para optimizar la demostración, se procede con la aplicación de un RAA anidado asumiendo <strong>¬s</strong>.<br><br>
                    Esa <strong>¬s</strong> destruirá la Premisa 2 (dándonos ¬q) y destruirá la Premisa 3 (dándonos ¬r). Eso aniquilará nuestra disyunción (q ∨ r) generando una contradicción perfecta. ¡Doble método anidado!
                </p>
            </div>
        </div>
    </div>
</div>`;

export const combinedExSlide2 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 8: <span>Análisis de Cierre (2/2)</span></h2>
    <div class="content">
        <div class="formal-code" style="padding: 10px 15px;">
            <strong style="color:var(--ucv-accent);">Observa los "niveles" de profundidad en los colores</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 5px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 5px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 5px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>p → (q ∨ r)</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>q → s</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr><td style="text-align:center;">3</td><td>r → s</td><td style="color:var(--text-dim);">Premisa 3</td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; padding-top: 8px; border-left: 4px solid #ffba08;">4</td><td style="padding-top: 8px;"><strong style="color:#ffba08;">p</strong></td><td style="color:#ffba08; padding-top: 8px;">Suposición PC (Abriendo Nivel 1)</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">5</td><td>q ∨ r</td><td style="color:var(--text-dim);"><span title="Se utiliza Modus Ponens porque el supuesto 'p' es el antecedente exacto de la Premisa 1. Esto nos permite extraer la información contenida en el condicional (q ∨ r) para usarla como una proposición simple en los pasos siguientes.">Modus ponens entre 1 y 4</span></td></tr>
                    
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; padding-top: 8px; border-left: 8px solid #0ecc77;">6</td><td style="padding-top: 8px;"><strong style="color:#0ecc77;">¬s</strong></td><td style="color:#0ecc77; padding-top: 8px;"><span title="Iniciamos RAA para demostrar 's' por contradicción dentro de la prueba condicional. Suponer lo contrario permite buscar un punto de ruptura en el sistema lógico.">Suposición RAA (Abriendo Nivel 2)</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; border-left: 8px solid #0ecc77;">7</td><td>¬q</td><td style="color:var(--text-dim);"><span title="Usamos Modus Tollens en la Premisa 2 porque ¬s niega su consecuente. Según esta regla, si el efecto es falso, la causa también debe serlo. Esto genera ¬q, una pieza clave para eliminar opciones en nuestra disyunción principal.">Modus tollens entre 2 y 6</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; border-left: 8px solid #0ecc77;">8</td><td>¬r</td><td style="color:var(--text-dim);"><span title="Usamos Modus Tollens en la Premisa 3 siguiendo la misma lógica: ¬s niega el consecuente de r → s. Esto genera ¬r, permitiéndonos cercar los valores posibles de las variables en juego.">Modus tollens entre 3 y 6</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; border-left: 8px solid #0ecc77;">9</td><td>r</td><td style="color:var(--text-dim);"><span title="Aplicamos Silogismo Disyuntivo a la disyunción (q ∨ r) del paso 5. Como el paso 7 demostró que 'q' es falso (¬q), la lógica nos obliga a aceptar que el otro componente 'r' debe ser necesariamente verdadero para que la premisa inicial se mantenga.">Silogismo disyuntivo entre 5 y 7</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; border-left: 8px solid #0ecc77;">10</td><td><strong style="color:#ff7878;">r ∧ ¬r</strong></td><td style="color:var(--text-dim);"><span title="Unimos 'r' (paso 9) con su negación (paso 8) mediante la regla de Conjunción. Al afirmar una cosa y su contraria al mismo tiempo, formalizamos el absurdo (contradicción) necesario para invalidar el supuesto inicial ¬s.">Conjunción entre 9 y 8, contradicción</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05); border-bottom: 1px dashed rgba(14,204,119,0.3);"><td style="text-align:center; padding-bottom: 8px; border-left: 8px solid #0ecc77;">11</td><td style="padding-bottom: 8px;">∴ <strong style="color:#0ecc77;">s</strong></td><td style="color:#0ecc77; padding-bottom: 8px;"><span title="Al alcanzar un absurdo lógico derivado del supuesto ¬s, aplicamos la regla de Reducción al Absurdo. Esto demuestra que ¬s es imposible bajo estas premisas, por lo cual 's' queda validado como conclusión necesaria.">Cierre RAA (6-10)</span></td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05); border-top: 2px solid rgba(255,186,8,0.2);"><td style="text-align:center; padding: 10px 0; border-left: 4px solid #ffba08;">12</td><td style="padding: 10px 0;">∴ <strong style="color:#ffba08;">p → s</strong></td><td style="color:#ffba08; padding: 10px 0;"><span title="Cerramos la Prueba Condicional. Al haber demostrado que asumiendo 'p' (antecedente) llegamos inevitablemente a 's' (consecuente), queda validada la estructura p → s para todo el argumento global.">Cierre Prueba Condicional (4-11)</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`;

export const combinedEx2Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 9: <span>Estructura Preliminar (1/3)</span></h2>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento Original</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. p → q<br>
                    2. p ∧ q → r ∨ s<br>
                    3. r ∨ s → ¬t<br>
                    4. (p → ¬t) → u<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 60px;"></div>
                    ∴ <strong>u</strong>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    La conclusión requerida es <strong>u</strong>. Al analizar las premisas, se observa que la <strong>Premisa 4</strong> contiene dicha proposición. Para su obtención mediante Modus Ponens, se requiere el antecedente: <strong>(p → ¬t)</strong>.<br><br>
                    Dado que esa "conclusión parcial" que necesitamos es un condicional, podemos abrir una <em>Prueba Condicional</em> como sub-demostración asumiendo <strong>p</strong>.<br><br>
                    El objetivo es emplear la proposición <strong>p</strong> para derivar <strong>¬t</strong> a través de las Premisas 1, 2 y 3. Una vez alcanzado este paso, se completa la sub-demostración del condicional: <strong>(p → ¬t)</strong>.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const combinedEx2Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 9: <span>Sub-demostración (2/3)</span></h2>
    <div class="content">
        <div class="formal-code" style="padding: 12px;">
            <strong style="color:var(--ucv-accent);">Fase 1: Derivación del Condicional Auxiliar</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 5px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 5px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 5px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>p → q</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>p ∧ q → r ∨ s</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr><td style="text-align:center;">3</td><td>r ∨ s → ¬t</td><td style="color:var(--text-dim);">Premisa 3</td></tr>
                    <tr><td style="text-align:center;">4</td><td>(p → ¬t) → u</td><td style="color:var(--text-dim);">Premisa 4</td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; padding-top: 8px; border-left: 4px solid #ffba08;">5</td><td style="padding-top: 8px;"><strong style="color:#ffba08;">p</strong></td><td style="color:#ffba08; padding-top: 8px;">Premisa condicional (Abre Suposición)</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">6</td><td>q</td><td style="color:var(--text-dim);"><span title="Usamos el supuesto 'p' (nuestro antecedente temporal) para activar la Premisa 1. Al cumplirse la condición p, se genera automáticamente q, ampliando nuestro conjunto de información disponible para la sub-demostración.">Modus ponens entre 1 y 5</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">7</td><td>p ∧ q → ¬t</td><td style="color:var(--text-dim);"><span title="Encadenamos la Premisa 2 y 3 mediante Silogismo Hipotético. Si (p ∧ q) implica (r ∨ s) y esto a su vez implica ¬t, podemos omitir el paso intermedio y afirmar directamente que (p ∧ q) implica ¬t.">Silogismo hipotético entre 2 y 3</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">8</td><td>p ∧ q</td><td style="color:var(--text-dim);"><span title="Unimos el antecedente original 'p' y el derivado 'q' mediante Conjunción. Este paso es fundamental para 'fabricar' la estructura exacta que requiere el condicional de la línea 7 para poder ejecutarse.">Conjunción entre 5 y 6</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">9</td><td>¬t</td><td style="color:var(--text-dim);"><span title="Ejecutamos el condicional de la línea 7 usando la conjunción fabricada. Funciona como un Modus Ponens donde la causa compleja (p ∧ q) nos entrega el efecto ¬t, que es la meta de nuestra sub-prueba condicional.">Modus ponens entre 7 y 8</span></td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05); border-bottom: 1px dashed rgba(255,186,8,0.3);"><td style="text-align:center; padding-bottom: 8px; border-left: 4px solid #ffba08;">10</td><td style="padding-bottom: 8px;">∴ <strong style="color:#ffba08;">p → ¬t</strong></td><td style="color:#ffba08; padding-bottom: 8px;"><span title="Concluimos la sub-demostración: asumiendo 'p' derivamos ¬t. Este cierre formaliza que la existencia de 'p' garantiza la de '¬t', permitiéndonos usar este condicional en el nivel superior de la demostración.">Cierre PC (5-9)</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 8px; font-size: 14px; color: var(--text-dim); text-align: center;">
                <em>(Hemos fabricado exitosamente la conclusión parcial que necesitábamos)</em>
            </div>
        </div>
    </div>
</div>`;

export const combinedEx2Slide3 = `
<div class="slide">
    <h2 class="slide-title">Ejercicio 9: <span>Conclusión Final (3/3)</span></h2>
    <div class="content">
        <div class="formal-code" style="padding: 15px; font-size: 16px;">
            <strong style="color:var(--ucv-accent);">Fase 2: Conclusión del Argumento</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 8px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 8px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 8px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">4</td><td>(p → ¬t) → u</td><td style="color:var(--text-dim);">Premisa 4</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">10</td><td>p → ¬t</td><td style="color:var(--text-dim);">Conclusión Parcial (Paso anterior)</td></tr>
                    
                    <tr><td style="text-align:center;">11</td><td>((p → ¬t) → u) ∧ (p → ¬t)</td><td style="color:var(--text-dim);"><span title="Unimos la Premisa 4 con la conclusión parcial fabricada en el paso 10. Según la convención rigurosa de la cátedra UCV, esto prepara el terreno para el Modus Ponens final, asegurando que tengamos tanto la regla como su disparador en una sola línea.">Conjunción entre 4 y 10</span></td></tr>
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);"><td style="text-align:center; padding: 15px 0;">12</td><td style="padding: 15px 0;">∴ <strong style="color:var(--ucv-accent);">u</strong></td><td style="color:var(--ucv-accent); padding: 15px 0;"><span title="Aplicamos el Modus Ponens final. Al tener validado el antecedente (p → ¬t) en el paso anterior, la Premisa 4 nos entrega la conclusión definitiva 'u'. Este paso cierra exitosamente el ejercicio al alcanzar la meta propuesta.">Modus ponens en 11</span></td></tr>
                </tbody>
            </table>
            
            <div style="margin-top: 25px; padding: 15px; border-left: 4px solid var(--ucv-accent); background: rgba(255,255,255,0.02); color: var(--text-dim); line-height: 1.5;">
                <strong>Nota oficial UCV:</strong> Como se observa en el Paso 11, algunas convenciones de la escuela sugieren unir la premisa y el antecedente mediante una Conjunción antes de aplicar el Modus Ponens formalmente, aunque muchos autores lo aplican directo entre las líneas 4 y 10. Ambas vías son correctas.
            </div>
        </div>
    </div>
</div>`;
