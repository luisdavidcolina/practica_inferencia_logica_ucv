export const indexSlide = `
<div class="slide">
    <h2 class="slide-title" style="margin-bottom: 10px;">Índice <span>Temático</span></h2>
    <div class="content" style="justify-content: center; padding-top: 5px;">
        <div class="grid-2" style="gap: 15px;">
            <div class="concept-card" style="border-left: 5px solid var(--ucv-accent); cursor: pointer; transition: transform 0.2s; padding: 15px;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" onclick="window.goToSlideId('modulo-1')">
                <h3 style="color:var(--ucv-accent); margin-bottom: 10px;"><i class="fas fa-play-circle" style="opacity: 0.8; margin-right: 8px;"></i> Sección 1: Fundamentos</h3>
                <ul style="list-style: none; line-height: 1.5; opacity: 0.9;">
                    <li><i class="fas fa-arrow-right" style="color:var(--ucv-accent); margin-right: 10px;"></i>Conceptos Básicos</li>
                    <li><i class="fas fa-arrow-right" style="color:var(--ucv-accent); margin-right: 10px;"></i>Argumentos y Validez</li>
                    <li><i class="fas fa-arrow-right" style="color:var(--ucv-accent); margin-right: 10px;"></i>Guía para Resolver Ejercicios</li>
                </ul>
            </div>
            
            <div class="concept-card" style="border-left: 5px solid #0ecc77; cursor: pointer; transition: transform 0.2s; padding: 15px;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" onclick="window.goToSlideId('modulo-2')">
                <h3 style="color:#0ecc77; margin-bottom: 10px;"><i class="fas fa-play-circle" style="opacity: 0.8; margin-right: 8px;"></i> Sección 2: Herramientas</h3>
                <ul style="list-style: none; line-height: 1.5; opacity: 0.9;">
                    <li><i class="fas fa-arrow-right" style="color:#0ecc77; margin-right: 10px;"></i>Métodos de Demostración Clásicos</li>
                    <li><i class="fas fa-arrow-right" style="color:#0ecc77; margin-right: 10px;"></i>Demostración de Invalidez e Inconsistencia</li>
                    <li><i class="fas fa-arrow-right" style="color:#0ecc77; margin-right: 10px;"></i>Tips de Inferencia y Tabla de Leyes</li>
                </ul>
            </div>
            
            <div class="concept-card" style="border-left: 5px solid #ffba08; cursor: pointer; transition: transform 0.2s; padding: 15px;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" onclick="window.goToSlideId('modulo-3')">
                <h3 style="color:#ffba08; margin-bottom: 10px;"><i class="fas fa-play-circle" style="opacity: 0.8; margin-right: 8px;"></i> Sección 3: Práctica</h3>
                <ul style="list-style: none; line-height: 1.5; opacity: 0.9;">
                    <li><i class="fas fa-arrow-right" style="color:#ffba08; margin-right: 10px;"></i>Ejercicios Prácticos (Tautologías y Equivalencias)</li>
                    <li><i class="fas fa-arrow-right" style="color:#ffba08; margin-right: 10px;"></i>Ejercicios Desafiantes (Exámenes UCV)</li>
                    <li><i class="fas fa-arrow-right" style="color:#ffba08; margin-right: 10px;"></i>Simbolización Avanzada</li>
                </ul>
            </div>
            
            <div class="concept-card" style="border-left: 5px solid #ff7878; cursor: pointer; transition: transform 0.2s; padding: 15px;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" onclick="window.goToSlideId('modulo-4')">
                <h3 style="color:#ff7878; margin-bottom: 10px;"><i class="fas fa-play-circle" style="opacity: 0.8; margin-right: 8px;"></i> Sección 4: Práctica Avanzada</h3>
                <ul style="list-style: none; line-height: 1.5; opacity: 0.9;">
                    <li><i class="fas fa-arrow-right" style="color:#ff7878; margin-right: 10px;"></i>Métodos Combinados y Anidación (PC + RAA)</li>
                    <li><i class="fas fa-arrow-right" style="color:#ff7878; margin-right: 10px;"></i>Teoría Avanzada y Cultura Lógica</li>
                    <li><i class="fas fa-arrow-right" style="color:#ff7878; margin-right: 10px;"></i>Bibliografía Oficial</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
