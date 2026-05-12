
export const consistencySlide = `
<div class="slide">
    <div class="section-tag">Sección 2: Herramientas</div>
    <h2 class="slide-title">Prueba de <span>Consistencia</span></h2>
    <div class="content">
        <div class="case-intro">
            <strong>¿En qué consiste?</strong> Buscamos determinar si las premisas pueden ser todas verdaderas a la vez. 
            Derivamos proposiciones buscando una <strong>contradicción</strong> ($X \land \neg X$). Si la hallamos, el conjunto es <strong>Inconsistente</strong>.
        </div>

        <table class="formal-table" style="margin-top: 10px;">
            <thead>
                <tr>
                    <th>Paso</th>
                    <th>Proposición</th>
                    <th>Justificación</th>
                </tr>
            </thead>
            <tbody>
                <tr title="Premisa de entrada"><td>1</td><td>p → q</td><td>Premisa 1</td></tr>
                <tr title="Premisa de entrada"><td>2</td><td>q → r</td><td>Premisa 2</td></tr>
                <tr title="Premisa de entrada"><td>3</td><td>p ∧ ¬r</td><td>Premisa 3</td></tr>
                <tr title="Extracción por Simplificación"><td>4</td><td>p</td><td>Simplificación en 3</td></tr>
                <tr title="Extracción por Simplificación"><td>5</td><td>¬r</td><td>Simplificación en 3</td></tr>
                <tr title="Deducción por Modus Ponens"><td>6</td><td>q</td><td>Modus Ponens entre 1 and 4</td></tr>
                <tr title="Deducción por Modus Ponens"><td>7</td><td>r</td><td>Modus Ponens entre 2 and 6</td></tr>
                <tr title="Evidencia de Inconsistencia" style="background: rgba(255,120,120,0.1);"><td>8</td><td><strong style="color:#ff7878;">r ∧ ¬r</strong></td><td style="color:#ff7878;">Conjunción (¡CONTRADICCIÓN!)</td></tr>
            </tbody>
        </table>
        <div class="note-bar" style="margin-top: 8px;">
            <strong>Resultado:</strong> El conjunto de premisas es <strong>Inconsistente</strong>.
        </div>
    </div>
</div>`;


