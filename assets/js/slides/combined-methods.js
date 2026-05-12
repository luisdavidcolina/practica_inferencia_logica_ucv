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
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∧ q) → r, (r ∨ s) → t, p ∧ ¬t ∴ ¬q
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. (p ∧ q) → r<br>
                    2. (r ∨ s) → t<br>
                    3. p ∧ ¬t<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 60px;"></div>
                    ∴ <strong>¬q</strong>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    La conclusión es una negación simple (<strong>¬q</strong>), así que el camino natural es una <em>Reducción al Absurdo</em>. Asumimos <strong>q</strong> temporalmente y tratamos de forzar una contradicción.<br><br>
                    Desde la Premisa 3 obtenemos <strong>p</strong> y <strong>¬t</strong>. Con <strong>p</strong> y la suposición <strong>q</strong> construimos <strong>p ∧ q</strong>, lo que activa la Premisa 1 y produce <strong>r</strong>.<br><br>
                    A partir de <strong>r</strong> obtenemos <strong>r ∨ s</strong>, y eso libera la Premisa 2 para derivar <strong>t</strong>. La contradicción con <strong>¬t</strong> cierra la prueba y valida <strong>¬q</strong>.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const combinedExSlide2 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 8: <span>Análisis de Cierre (2/2)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∧ q) → r, (r ∨ s) → t, p ∧ ¬t ∴ ¬q
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 10px 15px;">
            <strong style="color:var(--ucv-accent);">Observa la estructura PC + RAA en la derivación</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 5px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 5px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 5px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>(p ∧ q) → r</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>(r ∨ s) → t</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr><td style="text-align:center;">3</td><td>p ∧ ¬t</td><td style="color:var(--text-dim);">Premisa 3</td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; padding-top: 8px; border-left: 4px solid #ffba08;">4</td><td style="padding-top: 8px;"><strong style="color:#ffba08;">p</strong></td><td style="color:#ffba08; padding-top: 8px;">Simplificación en 3</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">5</td><td><strong style="color:#ffba08;">¬t</strong></td><td style="color:var(--text-dim);">Simplificación en 3</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">6</td><td>q</td><td style="color:var(--text-dim);"><span title="Abrimos la suposición opuesta a la conclusión para buscar una contradicción formal y demostrar la negación de q.">Suposición RAA</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">7</td><td>p ∧ q</td><td style="color:var(--text-dim);"><span title="Conjuntamos el hecho p con la suposición q para habilitar la Premisa 1.">Conjunción entre 4 y 6</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">8</td><td>r</td><td style="color:var(--text-dim);"><span title="Aplicamos Modus Ponens sobre la Premisa 1 con el antecedente fabricado en el paso 7.">Modus ponens entre 1 y 7</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">9</td><td>r ∨ s</td><td style="color:var(--text-dim);"><span title="Usamos Adición para preparar la Premisa 2.">Adición en 8</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; border-left: 8px solid #0ecc77;">10</td><td>t</td><td style="color:var(--text-dim);"><span title="Activamos la Premisa 2 con la disyunción recién construida.">Modus ponens entre 2 y 9</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05);"><td style="text-align:center; border-left: 8px solid #0ecc77;">11</td><td><strong style="color:#ff7878;">t ∧ ¬t</strong></td><td style="color:var(--text-dim);"><span title="La conjunción con ¬t cierra el absurdo.">Conjunción entre 10 y 5, contradicción</span></td></tr>
                    <tr style="background: rgba(14,204,119,0.05); border-bottom: 1px dashed rgba(14,204,119,0.3);"><td style="text-align:center; padding-bottom: 8px; border-left: 8px solid #0ecc77;">12</td><td style="padding-bottom: 8px;">∴ <strong style="color:#0ecc77;">¬q</strong></td><td style="color:#0ecc77; padding-bottom: 8px;"><span title="La contradicción niega la suposición q, validando la conclusión.">RAA (6-11)</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`;

export const combinedEx2Slide1 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 9: <span>Estructura Preliminar (1/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∧ q) → (r ∨ s), t → (r ∨ u), (s ∨ u) → v, p ∧ t, q ∧ ¬v ∴ r
    </div>
    <div class="content">
        <div class="grid-2">
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent)">Argumento Original</h3>
                <div class="formal-code" style="padding: 15px;">
                    1. (p ∧ q) → (r ∨ s)<br>
                    2. t → (r ∨ u)<br>
                    3. (s ∨ u) → v<br>
                    4. p ∧ t<br>
                    5. q ∧ ¬v<br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0; width: 60px;"></div>
                    ∴ <strong>r</strong>
                </div>
            </div>
            
            <div class="example-card">
                <h3 style="color:var(--ucv-accent)">Análisis Estratégico</h3>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    La conclusión es <strong>r</strong>, así que conviene intentar una <em>Reducción al Absurdo</em> suponiendo <strong>¬r</strong>. Con las premisas 4 y 5 obtenemos las piezas iniciales: <strong>p</strong>, <strong>t</strong>, <strong>q</strong> y <strong>¬v</strong>.<br><br>
                    Desde ahí, la Premisa 1 nos da <strong>r ∨ s</strong>, y la Premisa 2 nos da <strong>r ∨ u</strong>. Bajo la suposición <strong>¬r</strong>, esas dos disyunciones nos permiten aislar <strong>s</strong> y <strong>u</strong>.<br><br>
                    Finalmente, <strong>s ∨ u</strong> activa la Premisa 3 y produce <strong>v</strong>, que choca con <strong>¬v</strong>. Ese absurdo cierra la prueba y valida <strong>r</strong>.
                </p>
            </div>
        </div>
    </div>
</div>`;

export const combinedEx2Slide2 = `
<div class="slide">
    <div class="section-tag">Sección 4: Práctica Avanzada</div>
    <h2 class="slide-title">Ejercicio 9: <span>Sub-demostración (2/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∧ q) → (r ∨ s), t → (r ∨ u), (s ∨ u) → v, p ∧ t, q ∧ ¬v ∴ r
    </div>
    <div class="content">
        <div class="formal-code" style="padding: 12px;">
            <strong style="color:var(--ucv-accent);">Fase 1: Derivación por contradicción</strong>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--ucv-accent); color: var(--ucv-accent);">
                        <th style="padding: 5px; text-align: center; width: 8%;">Paso</th>
                        <th style="padding: 5px; text-align: left; width: 35%;">Proposición</th>
                        <th style="padding: 5px; text-align: left; width: 57%;">Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>(p ∧ q) → (r ∨ s)</td><td style="color:var(--text-dim);">Premisa 1</td></tr>
                    <tr><td style="text-align:center;">2</td><td>t → (r ∨ u)</td><td style="color:var(--text-dim);">Premisa 2</td></tr>
                    <tr><td style="text-align:center;">3</td><td>(s ∨ u) → v</td><td style="color:var(--text-dim);">Premisa 3</td></tr>
                    <tr><td style="text-align:center;">4</td><td>p ∧ t</td><td style="color:var(--text-dim);">Premisa 4</td></tr>
                    <tr><td style="text-align:center;">5</td><td>q ∧ ¬v</td><td style="color:var(--text-dim);">Premisa 5</td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; padding-top: 8px; border-left: 4px solid #ffba08;">6</td><td style="padding-top: 8px;"><strong style="color:#ffba08;">¬r</strong></td><td style="color:#ffba08; padding-top: 8px;">Suposición RAA</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">7</td><td>p</td><td style="color:var(--text-dim);">Simplificación en 4</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">8</td><td>t</td><td style="color:var(--text-dim);">Simplificación en 4</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">9</td><td>q</td><td style="color:var(--text-dim);">Simplificación en 5</td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">10</td><td>r ∨ s</td><td style="color:var(--text-dim);"><span title="Con p y q construimos el antecedente de la primera premisa.">Conjunción y Modus ponens entre 1, 7 y 9</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">11</td><td>r ∨ u</td><td style="color:var(--text-dim);"><span title="La Premisa 2 se activa con t.">Modus ponens entre 2 y 8</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">12</td><td>s</td><td style="color:var(--text-dim);"><span title="De la disyunción r ∨ s y la suposición ¬r aislamos s.">Silogismo disyuntivo entre 10 y 6</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">13</td><td>u</td><td style="color:var(--text-dim);"><span title="De la disyunción r ∨ u y la suposición ¬r aislamos u.">Silogismo disyuntivo entre 11 y 6</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">14</td><td>s ∨ u</td><td style="color:var(--text-dim);"><span title="Cualquiera de los dos casos permite activar la Premisa 3.">Adición en 12 o 13</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">15</td><td>v</td><td style="color:var(--text-dim);"><span title="La Premisa 3 se activa con la disyunción construida.">Modus ponens entre 3 y 14</span></td></tr>
                    <tr style="background: rgba(255,186,8,0.05);"><td style="text-align:center; border-left: 4px solid #ffba08;">16</td><td>v ∧ ¬v</td><td style="color:var(--text-dim);">Conjunción entre 15 y 5, contradicción</td></tr>
                    
                    <tr style="background: rgba(255,186,8,0.05); border-bottom: 1px dashed rgba(255,186,8,0.3);"><td style="text-align:center; padding-bottom: 8px; border-left: 4px solid #ffba08;">17</td><td style="padding-bottom: 8px;">∴ <strong style="color:#ffba08;">r</strong></td><td style="color:#ffba08; padding-bottom: 8px;"><span title="El absurdo demuestra que ¬r era imposible.">RAA (6-16)</span></td></tr>
                </tbody>
            </table>
            <div style="margin-top: 8px; font-size: 14px; color: var(--text-dim); text-align: center;">
                <em>(La contradicción confirma la conclusión que buscamos)</em>
            </div>
        </div>
    </div>
</div>`;

export const combinedEx2Slide3 = `
<div class="slide">
    <h2 class="slide-title">Ejercicio 9: <span>Conclusión Final (3/3)</span></h2>
    <div class="argument-header" style="text-align: center; font-size: 16px; font-family: monospace; color: var(--ucv-accent); background: rgba(200,240,122,0.1); padding: 8px; border-radius: 6px; margin: 10px auto 5px auto; width: 90%; border: 1px solid rgba(200,240,122,0.2);">
        <strong>Argumento:</strong> (p ∧ q) → (r ∨ s), t → (r ∨ u), (s ∨ u) → v, p ∧ t, q ∧ ¬v ∴ r
    </div>
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
                    <tr style="opacity: 0.6;"><td style="text-align:center;">4</td><td>p ∧ t</td><td style="color:var(--text-dim);">Premisa 4</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">5</td><td>q ∧ ¬v</td><td style="color:var(--text-dim);">Premisa 5</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">6</td><td>¬r</td><td style="color:var(--text-dim);">Suposición RAA</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">7</td><td>p</td><td style="color:var(--text-dim);">Simplificación en 4</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">8</td><td>t</td><td style="color:var(--text-dim);">Simplificación en 4</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">9</td><td>q</td><td style="color:var(--text-dim);">Simplificación en 5</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">10</td><td>r ∨ s</td><td style="color:var(--text-dim);">Premisa 1 con 7 y 9</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">11</td><td>r ∨ u</td><td style="color:var(--text-dim);">Premisa 2 con 8</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">12</td><td>s</td><td style="color:var(--text-dim);">Silogismo disyuntivo entre 10 y 6</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">13</td><td>u</td><td style="color:var(--text-dim);">Silogismo disyuntivo entre 11 y 6</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">14</td><td>s ∨ u</td><td style="color:var(--text-dim);">Adición en 12 o 13</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">15</td><td>v</td><td style="color:var(--text-dim);">Premisa 3 con 14</td></tr>
                    <tr style="opacity: 0.6;"><td style="text-align:center;">16</td><td>v ∧ ¬v</td><td style="color:var(--text-dim);">Conjunción entre 15 y 5</td></tr>
                    
                    <tr style="border-top: 1px dashed rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);"><td style="text-align:center; padding: 15px 0;">17</td><td style="padding: 15px 0;">∴ <strong style="color:var(--ucv-accent);">r</strong></td><td style="color:var(--ucv-accent); padding: 15px 0;"><span title="El absurdo obtenido bajo la suposición ¬r rechaza esa hipótesis y valida r.">RAA (6-16)</span></td></tr>
                </tbody>
            </table>
            
            <div style="margin-top: 25px; padding: 15px; border-left: 4px solid var(--ucv-accent); background: rgba(255,255,255,0.02); color: var(--text-dim); line-height: 1.5;">
                <strong>Nota oficial UCV:</strong> En una prueba por contradicción, la conclusión se valida cuando la suposición contraria genera un absurdo con las premisas disponibles. Aquí la contradicción final niega ¬r y deja establecido r.
            </div>
        </div>
    </div>
</div>`;
