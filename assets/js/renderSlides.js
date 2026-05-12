import { slides } from './slides/index.js';

const root = document.getElementById('slides-root');

if (root) {
    const total = slides.length;
    const numberedSlides = slides.map((slide, index) => {
        const slideNum = `<div class="slide-counter">${index + 1} / ${total}</div>`;
        let finalSlide = slide;
        const lastDivIndex = slide.lastIndexOf('</div>');
        if (lastDivIndex !== -1) {
            finalSlide = slide.substring(0, lastDivIndex) + slideNum + slide.substring(lastDivIndex);
        } else {
            finalSlide = slide + slideNum;
        }
        
        // Wrap each slide in a display-controlled container
        return `<div class="slide-wrapper" data-index="${index}" style="display: ${index === 0 ? 'block' : 'none'}; width: 100%; height: 100%;">
            ${finalSlide}
        </div>`;
    });
    
    root.innerHTML = numberedSlides.join('\n');
    
    // Global Tooltip Conversion (Transforms native title to custom wrapping tooltips)
    root.querySelectorAll('[title]').forEach(el => {
        const titleText = el.getAttribute('title');
        el.setAttribute('data-tip', titleText);
        el.classList.add('has-tip');
        el.removeAttribute('title');
    });
    
    // Step-by-Step Proof Reveal Logic
    root.querySelectorAll('table').forEach(table => {
        const headers = Array.from(table.querySelectorAll('th'));
        const isProofTable = headers.some(th => th.textContent.includes('Justificación'));
        
        if (isProofTable) {
            const tbody = table.querySelector('tbody');
            if (!tbody) return;
            
            const rows = Array.from(tbody.querySelectorAll('tr'));
            let startIndex = -1;
            
            // Find the first row that is NOT a premise
            for (let i = 0; i < rows.length; i++) {
                const text = rows[i].textContent.toLowerCase();
                // We keep rows with 'premisa' or empty rows (headers) visible
                if (!text.includes('premisa') && text.trim().length > 5 && startIndex === -1) {
                    startIndex = i;
                }
            }
            
            if (startIndex !== -1 && startIndex < rows.length) {
                for (let i = startIndex; i < rows.length; i++) {
                    rows[i].classList.add('hidden-proof-step');
                }
                
                const theadTr = table.querySelector('thead tr');
                let btnContainer = null;
                
                if (theadTr) {
                    const lastTh = theadTr.lastElementChild;
                    
                    btnContainer = document.createElement('span');
                    btnContainer.className = 'inline-reveal-container';
                    btnContainer.style.float = 'right';
                    btnContainer.innerHTML = `<button class="reveal-eye-btn-mini has-tip tip-left" data-tip="Revelar siguiente paso" style="background: transparent; border: none; color: var(--ucv-accent); font-size: 20px; cursor: pointer; transition: transform 0.2s, opacity 0.2s; opacity: 0.7;"><i class="fas fa-eye"></i></button>`;
                    
                    lastTh.appendChild(btnContainer);
                    
                    const btn = btnContainer.querySelector('.reveal-eye-btn-mini');
                    btn.addEventListener('mouseover', () => { btn.style.transform = 'scale(1.2)'; btn.style.opacity = '1'; });
                    btn.addEventListener('mouseout', () => { btn.style.transform = 'scale(1)'; btn.style.opacity = '0.7'; });
                    
                    btn.addEventListener('click', () => {
                        const nextHidden = tbody.querySelector('.hidden-proof-step');
                        if (nextHidden) {
                            nextHidden.classList.remove('hidden-proof-step');
                            nextHidden.classList.add('revealed-proof-step');
                            
                            if (!tbody.querySelector('.hidden-proof-step')) {
                                btnContainer.style.opacity = '0';
                                setTimeout(() => btnContainer.remove(), 300);
                            }
                        }
                    });
                }
            }
        }
    });

    // Live Logic Sandbox Evaluator
    const updateSandbox = () => {
        const sandbox = document.getElementById('sandbox-1');
        if (!sandbox) return;

        const vars = {};
        let allAssigned = true;
        sandbox.querySelectorAll('.var-toggle').forEach(btn => {
            const val = btn.getAttribute('data-val');
            if (val === '?') {
                allAssigned = false;
                vars[btn.getAttribute('data-var')] = null;
            } else {
                vars[btn.getAttribute('data-var')] = val === 'V';
            }
        });

        // Safe logic evaluation with nulls
        const evalImplies = (a, b) => (a === null || b === null) ? null : (!a || b);
        const evalOr = (a, b) => (a === null || b === null) ? null : (a || b);
        const evalAnd = (a, b) => (a === null || b === null) ? null : (a && b);

        // Evaluate P1: t → x 
        const p1 = evalImplies(vars['t'], vars['x']);
        // Evaluate P2: p ∨ r
        const p2 = evalOr(vars['p'], vars['r']);
        // Evaluate P3: (p ∨ q) → (t ∧ m)
        const p3 = evalImplies(evalOr(vars['p'], vars['q']), evalAnd(vars['t'], vars['m']));
        // Evaluate P4: (r ∨ s) → t
        const p4 = evalImplies(evalOr(vars['r'], vars['s']), vars['t']);
        // Evaluate C: x ∧ m
        const c = evalAnd(vars['x'], vars['m']);

        const setEvalBox = (id, val) => {
            const box = document.getElementById(id);
            if (!box) return;
            box.querySelector('.res').textContent = val === null ? '?' : (val ? 'V' : 'F');
            
            box.classList.remove('is-v', 'is-f');
            if (val !== null) box.classList.add(val ? 'is-v' : 'is-f');
        };

        setEvalBox('eval-p1', p1);
        setEvalBox('eval-p2', p2);
        setEvalBox('eval-p3', p3);
        setEvalBox('eval-p4', p4);
        setEvalBox('eval-c', c);

        const msgBox = document.getElementById('sandbox-msg');
        
        if (!allAssigned) {
            msgBox.innerHTML = 'Haz clic en las variables de arriba para asignar valores.';
            msgBox.style.background = 'rgba(255, 255, 255, 0.05)';
            msgBox.style.color = 'var(--text-dim)';
            sandbox.classList.remove('success-pulse');
        } else if (p1 && p2 && p3 && p4 && !c) {
            msgBox.innerHTML = '¡Éxito! 🎉 Has encontrado el <strong>Contramodelo</strong>. Todas las premisas son V y la conclusión es F. Argumento Inválido.';
            msgBox.style.background = 'rgba(200, 240, 122, 0.2)';
            msgBox.style.color = 'var(--ucv-accent)';
            sandbox.classList.add('success-pulse');
        } else {
            msgBox.innerHTML = 'Sigue intentando... Busca que todas las premisas (P1-P4) sean V y la conclusión (C) sea F.';
            msgBox.style.background = 'rgba(255, 120, 120, 0.1)';
            msgBox.style.color = '#ff9a9a';
            sandbox.classList.remove('success-pulse');
        }
    };

    const updateSandbox2 = () => {
        const sandbox = document.getElementById('sandbox-2');
        if (!sandbox) return;

        const vars = {};
        let allAssigned = true;
        sandbox.querySelectorAll('.var-toggle').forEach(btn => {
            const val = btn.getAttribute('data-val');
            if (val === '?') {
                allAssigned = false;
                vars[btn.getAttribute('data-var')] = null;
            } else {
                vars[btn.getAttribute('data-var')] = val === 'V';
            }
        });

        const evalImplies = (a, b) => (a === null || b === null) ? null : (!a || b);
        const evalOr = (a, b) => (a === null || b === null) ? null : (a || b);
        const evalAnd = (a, b) => (a === null || b === null) ? null : (a && b);
        const evalNot = (a) => a === null ? null : !a;

        // P1: p ∧ ¬q
        const p1 = evalAnd(vars['p'], evalNot(vars['q']));
        // P2: (r ∧ s) → (p → q)
        const p2 = evalImplies(evalAnd(vars['r'], vars['s']), evalImplies(vars['p'], vars['q']));
        // P3: (t → r) ∨ (u ∧ s)
        const p3 = evalOr(evalImplies(vars['t'], vars['r']), evalAnd(vars['u'], vars['s']));
        // C: ¬t ∨ ¬u
        const c = evalOr(evalNot(vars['t']), evalNot(vars['u']));

        const setEvalBox = (id, val) => {
            const box = document.getElementById(id);
            if (!box) return;
            box.querySelector('.res').textContent = val === null ? '?' : (val ? 'V' : 'F');
            
            box.classList.remove('is-v', 'is-f');
            if (val !== null) box.classList.add(val ? 'is-v' : 'is-f');
        };

        setEvalBox('eval2-p1', p1);
        setEvalBox('eval2-p2', p2);
        setEvalBox('eval2-p3', p3);
        setEvalBox('eval2-c', c);

        const msgBox = document.getElementById('sandbox-msg-2');
        
        if (!allAssigned) {
            msgBox.innerHTML = 'Haz clic en las variables de arriba para asignar valores.';
            msgBox.style.background = 'rgba(255, 255, 255, 0.05)';
            msgBox.style.color = 'var(--text-dim)';
            sandbox.classList.remove('success-pulse');
        } else if (p1 && p2 && p3 && !c) {
            msgBox.innerHTML = '¡Éxito! 🎉 Has encontrado el <strong>Contramodelo</strong>. Todas las premisas son V y la conclusión es F.';
            msgBox.style.background = 'rgba(200, 240, 122, 0.2)';
            msgBox.style.color = 'var(--ucv-accent)';
            sandbox.classList.add('success-pulse');
        } else {
            msgBox.innerHTML = 'Sigue intentando... Busca que las premisas (P1-P3) sean V y la conclusión (C) sea F.';
            msgBox.style.background = 'rgba(255, 120, 120, 0.1)';
            msgBox.style.color = '#ff9a9a';
            sandbox.classList.remove('success-pulse');
        }
    };

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.var-toggle');
        if (btn) {
            const currentVal = btn.getAttribute('data-val');
            let newVal;
            if (currentVal === '?') newVal = 'V';
            else if (currentVal === 'V') newVal = 'F';
            else newVal = 'V';
            
            btn.setAttribute('data-val', newVal);
            btn.querySelector('.val').textContent = newVal;
            
            // Check which sandbox to update
            const sandboxParent = btn.closest('.sandbox-panel');
            if (sandboxParent && sandboxParent.id === 'sandbox-2') {
                updateSandbox2();
            } else {
                updateSandbox();
            }
        }
    });

    // Initial evaluation for Sandboxes
    setTimeout(() => {
        updateSandbox();
        updateSandbox2();
    }, 500);
    
    // Scale Logic to fit any screen
    const scaleToFit = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        let scale;
        if (windowWidth < 768) {
            // Mobile: Scale to fit width, allow vertical scrolling
            scale = (windowWidth / 1280) * 0.98;
        } else {
            // Desktop: Scale to fit both dimensions
            const scaleX = windowWidth / 1280;
            const scaleY = windowHeight / 720;
            scale = Math.min(scaleX, scaleY) * 0.95;
        }
        
        root.style.transform = `scale(${scale})`;
    };
    
    window.addEventListener('resize', scaleToFit);
    scaleToFit(); // Initial scale
    
    // Navigation Logic
    let currentIndex = 0;
    const slideWrappers = document.querySelectorAll('.slide-wrapper');
    
    const updateSlide = (newIndex) => {
        if (newIndex < 0 || newIndex >= total) return;
        slideWrappers[currentIndex].style.display = 'none';
        currentIndex = newIndex;
        slideWrappers[currentIndex].style.display = 'block';
    };
    
    // Global function for jumping to specific slides dynamically
    window.goToSlideId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const wrapper = el.closest('.slide-wrapper');
            if (wrapper) {
                const index = parseInt(wrapper.getAttribute('data-index'));
                updateSlide(index);
            }
        }
    };
    
    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
            updateSlide(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
            updateSlide(currentIndex - 1);
        }
    });

    // UI Navigation Arrows (Fade-out mode)
    const navUI = document.createElement('div');
    navUI.innerHTML = `
        <div id="nav-controls" style="position: fixed; bottom: 50px; left: 50%; transform: translateX(-50%); display: flex; gap: 20px; background: rgba(11,15,18,0.9); padding: 8px 25px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.15); z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: opacity 0.3s ease, transform 0.3s ease;">
            <button id="prev-slide" style="background: none; border: none; color: var(--ucv-accent); font-size: 20px; cursor: pointer; transition: transform 0.2s;"><i class="fas fa-chevron-left"></i></button>
            <span style="color: var(--text-dim); font-size: 14px; display: flex; align-items: center; user-select: none;">Navegación</span>
            <button id="next-slide" style="background: none; border: none; color: var(--ucv-accent); font-size: 20px; cursor: pointer; transition: transform 0.2s;"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    document.body.appendChild(navUI);
    
    // Add hover effect to the entire nav bar
    const navBar = document.getElementById('nav-controls');
    navBar.addEventListener('mouseover', () => navBar.style.opacity = '1');
    navBar.addEventListener('mouseout', () => navBar.style.opacity = '0.15');

    // Index Navigation Button (Bottom Left inside Slide Container)
    const indexUI = document.createElement('div');
    indexUI.innerHTML = `
        <button id="go-to-index" style="position: absolute; bottom: 40px; left: 80px; background: rgba(11,15,18,0.8); border: 1px solid rgba(255,255,255,0.1); color: var(--text-dim); font-size: 16px; padding: 12px 20px; border-radius: 30px; cursor: pointer; display: flex; align-items: center; gap: 8px; z-index: 1000; backdrop-filter: blur(8px); opacity: 0.15; transition: all 0.2s;">
            <i class="fas fa-home"></i> Índice
        </button>
    `;
    root.appendChild(indexUI);
    
    // Add hover effects via JS for simplicity since it's injected
    const btnPrev = document.getElementById('prev-slide');
    const btnNext = document.getElementById('next-slide');
    const btnIndex = document.getElementById('go-to-index');
    
    btnPrev.addEventListener('mouseover', () => btnPrev.style.transform = 'scale(1.2)');
    btnPrev.addEventListener('mouseout', () => btnPrev.style.transform = 'scale(1)');
    btnPrev.addEventListener('click', () => updateSlide(currentIndex - 1));
    
    btnNext.addEventListener('mouseover', () => btnNext.style.transform = 'scale(1.2)');
    btnNext.addEventListener('mouseout', () => btnNext.style.transform = 'scale(1)');
    btnNext.addEventListener('click', () => updateSlide(currentIndex + 1));

    btnIndex.addEventListener('mouseover', () => {
        btnIndex.style.color = 'var(--ucv-accent)';
        btnIndex.style.transform = 'scale(1.05)';
        btnIndex.style.borderColor = 'var(--ucv-accent)';
        btnIndex.style.opacity = '1';
    });
    btnIndex.addEventListener('mouseout', () => {
        btnIndex.style.color = 'var(--text-dim)';
        btnIndex.style.transform = 'scale(1)';
        btnIndex.style.borderColor = 'rgba(255,255,255,0.1)';
        btnIndex.style.opacity = '0.15';
    });
    // The index slide is at position 1 (0 is the cover)
    btnIndex.addEventListener('click', () => updateSlide(1));

    // Touch Support for Mobile Swiping
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    const handleSwipe = () => {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            updateSlide(currentIndex + 1); // Swipe Left -> Next
        }
        if (touchEndX > touchStartX + threshold) {
            updateSlide(currentIndex - 1); // Swipe Right -> Prev
        }
    };
}
