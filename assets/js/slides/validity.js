
export const validitySlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Prueba de <span>Invalidez</span></h2>
    <div class="content">
        <div class="case-intro">
            Demostramos que un argumento es <strong>inválido</strong> hallando un <strong>contraejemplo</strong> (Premisas verdaderas y Conclusión falsa).
        </div>
        
        <div class="validity-container" style="display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 15px; margin-top: 5px;">
            <div class="example-card" style="padding: 12px 15px;">
                <h3 style="font-size: 18px; margin-bottom: 8px;">Argumento Original</h3>
                <div class="formal-code" style="line-height: 1.4; padding: 10px; font-size: 18px;">
                    P1: t → x <br>
                    P2: p ∨ r <br>
                    P3: (p ∨ q) → (t ∧ m) <br>
                    P4: (r ∨ s) → t <br>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 5px 0; width: 120px;"></div>
                    ∴ x ∧ m
                </div>
            </div>

            <div class="example-card" style="padding: 12px 15px;">
                <h3 style="font-size: 18px; margin-bottom: 8px;">Asignación de Valores</h3>
                <div class="validity-visual" style="margin: 0; padding: 5px; font-size: 16px;">
                    <!-- P1 -->
                    <div class="logic-row" title="Premisa 1">
                        <span class="premise-tag">P1:</span>
                        <div class="logic-cell" title="Variable t = Verdadero"><span class="sym">t</span><span class="val">V</span></div>
                        <span class="op" title="Conector: Condicional">→</span>
                        <div class="logic-cell" title="Variable x = Verdadero"><span class="sym">x</span><span class="val">V</span></div>
                    </div>
                    
                    <!-- P2 -->
                    <div class="logic-row" title="Premisa 2">
                        <span class="premise-tag">P2:</span>
                        <div class="logic-cell" title="Variable p = Falso"><span class="sym">p</span><span class="val">F</span></div>
                        <span class="op" title="Conector: Disyunción">∨</span>
                        <div class="logic-cell" title="Variable r = Verdadero"><span class="sym">r</span><span class="val">V</span></div>
                    </div>

                    <!-- P3 -->
                    <div class="logic-row">
                        <span class="premise-tag">P3:</span>
                        <span class="paren">(</span>
                        <div class="logic-cell"><span class="sym">p</span><span class="val">F</span></div>
                        <span class="op">∨</span>
                        <div class="logic-cell"><span class="sym">q</span><span class="val">F</span></div>
                        <span class="paren">)</span>
                        <span class="op">→</span>
                        <span class="paren">(</span>
                        <div class="logic-cell"><span class="sym">t</span><span class="val">V</span></div>
                        <span class="op">∧</span>
                        <div class="logic-cell"><span class="sym">m</span><span class="val">F</span></div>
                        <span class="paren">)</span>
                    </div>

                    <!-- P4 -->
                    <div class="logic-row">
                        <span class="premise-tag">P4:</span>
                        <span class="paren">(</span>
                        <div class="logic-cell"><span class="sym">r</span><span class="val">V</span></div>
                        <span class="op">∨</span>
                        <div class="logic-cell"><span class="sym">s</span><span class="val">V</span></div>
                        <span class="paren">)</span>
                        <span class="op">→</span>
                        <div class="logic-cell"><span class="sym">t</span><span class="val">V</span></div>
                    </div>

                    <!-- Conclusion -->
                    <div class="logic-row is-conclusion" style="margin-top: 5px; padding-top: 5px;">
                        <span class="premise-tag">C:</span>
                        <span class="sym" style="margin-right: 8px;">∴</span>
                        <div class="logic-cell"><span class="sym">x</span><span class="val">V</span></div>
                        <span class="op">∧</span>
                        <div class="logic-cell"><span class="sym">m</span><span class="val">F</span></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sandbox-panel" id="sandbox-1" style="margin-top: 10px; background: linear-gradient(180deg, rgba(18, 24, 29, 0.98), rgba(11, 15, 18, 0.98)); border: 1px solid rgba(200, 240, 122, 0.3); border-radius: 12px; padding: 12px 15px;">
            <h3 style="color: var(--ucv-accent); margin-bottom: 8px; text-align: center; font-size: 16px;"><i class="fas fa-sliders-h"></i> Simulador Valores de Verdad</h3>
            
            <div class="var-toggles" style="display: flex; justify-content: center; gap: 6px; margin-bottom: 10px; flex-wrap: wrap;">
                <button class="var-toggle" data-var="p" data-val="?" style="padding: 6px 12px; font-size: 15px;">p = <span class="val">?</span></button>
                <button class="var-toggle" data-var="q" data-val="?" style="padding: 6px 12px; font-size: 15px;">q = <span class="val">?</span></button>
                <button class="var-toggle" data-var="r" data-val="?" style="padding: 6px 12px; font-size: 15px;">r = <span class="val">?</span></button>
                <button class="var-toggle" data-var="s" data-val="?" style="padding: 6px 12px; font-size: 15px;">s = <span class="val">?</span></button>
                <button class="var-toggle" data-var="t" data-val="?" style="padding: 6px 12px; font-size: 15px;">t = <span class="val">?</span></button>
                <button class="var-toggle" data-var="m" data-val="?" style="padding: 6px 12px; font-size: 15px;">m = <span class="val">?</span></button>
                <button class="var-toggle" data-var="x" data-val="?" style="padding: 6px 12px; font-size: 15px;">x = <span class="val">?</span></button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; text-align: center;">
                <div class="eval-box" id="eval-p1" style="min-height:50px; padding: 5px; font-size: 13px;">P1 (t→x)<br><span class="res" style="font-size: 20px;">?</span></div>
                <div class="eval-box" id="eval-p2" style="min-height:50px; padding: 5px; font-size: 13px;">P2 (p∨r)<br><span class="res" style="font-size: 20px;">?</span></div>
                <div class="eval-box" id="eval-p3" style="min-height:50px; padding: 5px; font-size: 13px;">P3 ((p∨q)→...)<br><span class="res" style="font-size: 20px;">?</span></div>
                <div class="eval-box" id="eval-p4" style="min-height:50px; padding: 5px; font-size: 13px;">P4 ((r∨s)→t)<br><span class="res" style="font-size: 20px;">?</span></div>
                <div class="eval-box eval-c" id="eval-c" style="min-height:50px; padding: 5px; font-size: 13px;">C (x∧m)<br><span class="res" style="font-size: 20px;">?</span></div>
            </div>
            
            <div id="sandbox-msg" style="margin-top: 10px; padding: 8px; border-radius: 8px; text-align: center; font-size: 14px; font-weight: bold; background: rgba(255, 255, 255, 0.05); color: var(--text-dim); transition: all 0.3s ease;">
                Haz clic en las variables de arriba para asignar valores.
            </div>
        </div>
    </div>
</div>`;



export const validityStrategySlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Estrategia de Invalidez: <span>El Punto de Quiebre</span></h2>
    <div class="content">
        <div class="case-intro" style="margin-bottom: 25px;">
            Para demostrar que un argumento es inválido, no asignamos valores al azar. Seguimos una <strong>jerarquía de restricciones</strong>.
        </div>
        
        <div class="grid-2">
            <div class="concept-card" style="border-left: 5px solid #ff7878;">
                <h3 style="color:#ff7878;">1. El Objetivo: C = F</h3>
                <p style="line-height: 1.5; color: var(--text-dim);">
                    Siempre comenzamos por la <strong>Conclusión</strong>. Nuestra meta es forzarla a ser Falsa. Al hacerlo, fijamos los valores de varias variables, lo que nos da la "llave" para testear las premisas.
                </p>
            </div>
            
            <div class="concept-card">
                <h3 style="color:var(--ucv-accent);">2. Dificultad por Conector</h3>
                <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
                    <div style="padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <strong style="color:var(--ucv-accent);">Conclusión Disyuntiva (A ∨ B):</strong><br>
                        <span style="font-size: 0.9rem;">Es la más <strong>difícil</strong> de negar. Nos obliga a que AMBAS sean F (A=F y B=F). Restringe mucho el sistema.</span>
                    </div>
                    <div style="padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <strong style="color:var(--ucv-accent);">Conclusión Conjuntiva (A ∧ B):</strong><br>
                        <span style="font-size: 0.9rem;">Es más <strong>flexible</strong>. Basta con que una sea F para que la conclusión caiga. Tienes más rutas de ataque.</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="note-bar" style="margin-top: 25px;">
            <strong>Regla de Oro:</strong> Si logras que la Conclusión sea F y, con esos valores, TODAS las premisas resultan V, has demostrado matemáticamente que el argumento <strong>no es válido</strong>.
        </div>
    </div>
</div>`;
