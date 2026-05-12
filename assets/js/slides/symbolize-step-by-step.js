export const symbolizeStepByStepSlide = `
<div class="slide">
    <div class="section-tag">Sección 1: Fundamentos</div>
    <h2 class="slide-title">Metodología de <span>Simbolización</span></h2>
    <div class="content">
        <div class="grid-3" style="margin-bottom: 30px;">
            <div class="card">
                <i class="fa-solid fa-microscope"></i>
                <h3>1. Atomización</h3>
                <p>Identificar proposiciones simples (p, q, r...) en infinitivo, sin negaciones ni conectores.</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-list-check"></i>
                <h3>2. Identificación</h3>
                <p>Separar premisas (datos) de la conclusión. Buscar indicadores: <em>"Por lo tanto", "En consecuencia"</em>.</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-code"></i>
                <h3>3. Traducción</h3>
                <p>Asignar conectores lógicos manteniendo la jerarquía de los signos de agrupación.</p>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 30px; background: #0A0A0A; padding: 30px; border-radius: 20px; border: 1px solid #333;">
            <div>
                <h3 style="color: var(--ucv-accent); margin-bottom: 15px;">Argumento Natural</h3>
                <p style="font-style: italic; line-height: 1.6;">
                    <span title="Premisa 1" style="cursor:help;">"<span title="Conector: Condicional" style="color:var(--ucv-accent);">Si</span> estudio, <span title="Conector: Condicional" style="color:var(--ucv-accent);">entonces</span> apruebo.</span>
                    <span title="Premisa 2" style="cursor:help;"><span title="Conector: Condicional" style="color:var(--ucv-accent);">Si</span> apruebo, <span title="Conector: Condicional" style="color:var(--ucv-accent);">entonces</span> paso la materia.</span>
                    <span title="Premisa 3" style="cursor:help;">Estudio.</span>
                    <span title="Conclusión" style="cursor:help;"><span title="Indicador de Conclusión" style="color:var(--ucv-accent); border-bottom: 1px dashed;">Por lo tanto</span>, paso la materia."</span>
                </p>
            </div>
            
            <div style="border-left: 1px solid #444; padding-left: 30px;">
                <h3 style="color: var(--ucv-accent); margin-bottom: 15px;">Estructura Formal</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <p style="text-transform: uppercase; color: #888; letter-spacing: 2px;">Proposiciones Simples</p>
                        <p><strong>p:</strong> Estudiar</p>
                        <p><strong>q:</strong> Aprobar</p>
                        <p><strong>r:</strong> Pasar la materia</p>
                    </div>
                    <div>
                        <p style="text-transform: uppercase; color: #888; letter-spacing: 2px;">Simbolización</p>
                        <p>P1: p → q</p>
                        <p>P2: q → r</p>
                        <p>P3: p</p>
                        <p style="border-top: 1px solid var(--ucv-accent); margin-top: 5px; padding-top: 5px;"><strong>∴ r</strong></p>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin-top: 30px; padding: 15px; background: rgba(222, 255, 154, 0.1); border-radius: 10px; text-align: center;">
            <p><i class="fa-solid fa-circle-info" style="color: var(--ucv-accent);"></i> <strong>Nota:</strong> Un argumento es válido si y solo si la implicación de las premisas hacia la conclusión es una <strong>Tautología</strong>.</p>
        </div>
    </div>
</div>`;