export const relationSlide = `
<div class="slide">
    <div class="section-tag">Sección 1: Fundamentos</div>
    <h2 class="slide-title">Estructura del <span>Razonamiento Lógico</span></h2>
    <div class="content">
        <!-- Flujo Lógico -->
        <div class="grid-3" style="margin-bottom: 20px;">
            <div class="concept-card" style="text-align: center; border-bottom: 3px solid var(--ucv-accent);">
                <h3 style="margin-bottom: 5px;">Premisas</h3>
                <p style="font-size: 14px; opacity: 0.8;">Punto de partida y base de la argumentación.</p>
            </div>
            <div class="concept-card" style="text-align: center; border-bottom: 3px solid #0ecc77;">
                <h3 style="margin-bottom: 5px;">Inferencia</h3>
                <p style="font-size: 14px; opacity: 0.8;">Proceso de derivación mediante leyes lógicas.</p>
            </div>
            <div class="concept-card" style="text-align: center; border-bottom: 3px solid #ffba08;">
                <h3 style="margin-bottom: 5px;">Conclusión</h3>
                <p style="font-size: 14px; opacity: 0.8;">Proposición final derivada del conjunto Γ.</p>
            </div>
        </div>

        <div class="grid-2">
            <div class="example-card">
                <h3>Ejemplo de Aplicación</h3>
                <div class="formal-code" style="padding: 15px; background: rgba(255,255,255,0.02);">
                    <div style="margin-bottom: 8px;"><strong>P1:</strong> p → q (Si estudio, comprendo)</div>
                    <div style="margin-bottom: 8px;"><strong>P2:</strong> p (Estudio)</div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); margin: 8px 0; width: 60px;"></div>
                    <div><strong>∴ C:</strong> q (Comprendo)</div>
                </div>
            </div>
            
            <div class="example-card">
                <h3>Análisis de Validez</h3>
                <p>En este ejemplo, la estructura garantiza que si las premisas son verdaderas, la conclusión es necesariamente verdadera. Decimos que el razonamiento es <strong>Válido</strong> por la regla del <em>Modus Ponens</em>.</p>
                <div style="margin-top: 10px; padding: 10px; border-left: 3px solid var(--ucv-accent); background: rgba(200, 240, 122, 0.05); font-size: 15px;">
                    <strong>Simbolización:</strong> {p → q, p} ⊢ q
                </div>
            </div>
        </div>

        <div class="note-bar" style="margin-top: 20px; text-align: center;">
            <strong>Nota Técnica:</strong> Un razonamiento es válido si y solo si su condicional asociado es una <strong>Tautología</strong>.
        </div>
    </div>
</div>`;
