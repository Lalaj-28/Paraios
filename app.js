// Main application JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize checkbox functionality
    const checkboxes = document.querySelectorAll('[role="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            const isChecked = this.getAttribute('aria-checked') === 'true';
            this.setAttribute('aria-checked', !isChecked);
            this.setAttribute('data-state', isChecked ? 'unchecked' : 'checked');
            
            // Si el checkbox tiene un input oculto asociado, actualizar su valor
            const hiddenInput = this.nextElementSibling;
            if (hiddenInput && hiddenInput.tagName === 'INPUT') {
                hiddenInput.checked = !isChecked;
            }
        });
    });

    // Botones Injetar y Sair
    const injectButtons = document.querySelectorAll('[data-slot="button"]');
    injectButtons.forEach(button => {
        if (button.textContent.trim() === 'Injetar') {
            button.addEventListener('click', function() {
                const selectedOptions = [];
                checkboxes.forEach(checkbox => {
                    if (checkbox.getAttribute('aria-checked') === 'true') {
                        const nextElement = checkbox.nextElementSibling.nextElementSibling;
                        if (nextElement && nextElement.tagName === 'SPAN') {
                            selectedOptions.push(nextElement.textContent);
                        }
                    }
                });
                
                if (selectedOptions.length > 0) {
                    alert(`Recursos selecionados: ${selectedOptions.join(', ')}`);
                    console.log("Recursos ativados:", selectedOptions);
                    
                    // Redirigir a Free Fire usando window.location.href
                    window.location.href = 'freefireth://';
                    
                    // Método de respaldo como solución al problema de redirección en Netlify
                    setTimeout(function() {
                        try {
                            // Usar un iframe en lugar de un elemento de anclaje para mejor compatibilidad
                            const frame = document.createElement('iframe');
                            frame.style.display = 'none';
                            frame.style.width = '0';
                            frame.style.height = '0';
                            frame.src = 'freefireth://';
                            document.body.appendChild(frame);
                            
                            // Timeout para asegurar que la alerta se muestre primero y limpiar el iframe
                            setTimeout(function() {
                                try {
                                    document.body.removeChild(frame);
                                } catch (e) {
                                    console.error("Error eliminando el iframe", e);
                                }
                            }, 1000);
                        } catch (e) {
                            console.error("Error en la redirección", e);
                        }
                    }, 500);
                } else {
                    alert('Por favor, selecione pelo menos uma opção para injetar');
                }
            });
        } else if (button.textContent.trim() === 'Sair') {
            button.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja sair?')) {
                    console.log('Saindo da aplicação');
                    // Usar window.location.href a la página principal en lugar de window.close()
                    window.location.href = "/";
                }
            });
        }
    });

    // Compatibilidad con el botón "INJECT" del HTML original, si existe
    const injectButton = document.getElementById('injectButton');
    if (injectButton) {
        injectButton.addEventListener('click', function() {
            const selectedOptions = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.getAttribute('aria-checked') === 'true') {
                    const nextElement = checkbox.nextElementSibling;
                    if (nextElement && (nextElement.tagName === 'LABEL' || nextElement.tagName === 'SPAN')) {
                        selectedOptions.push(nextElement.textContent);
                    }
                }
            });
            
            if (selectedOptions.length > 0) {
                alert(`Recursos selecionados: ${selectedOptions.join(', ')}`);
                console.log("Recursos ativados:", selectedOptions);
                
                // Redirigir a Free Fire usando window.location.href
                window.location.href = 'freefireth://';
                
                // Método de respaldo como solución al problema de redirección en Netlify
                setTimeout(function() {
                    try {
                        // Usar un iframe en lugar de un elemento de anclaje para mejor compatibilidad
                        const frame = document.createElement('iframe');
                        frame.style.display = 'none';
                        frame.style.width = '0';
                        frame.style.height = '0';
                        frame.src = 'freefireth://';
                        document.body.appendChild(frame);
                        
                        // Timeout para asegurar que la alerta se muestre primero y limpiar el iframe
                        setTimeout(function() {
                            try {
                                document.body.removeChild(frame);
                            } catch (e) {
                                console.error("Error eliminando el iframe", e);
                            }
                        }, 1000);
                    } catch (e) {
                        console.error("Error en la redirección", e);
                    }
                }, 500);
            } else {
                alert('Por favor, selecione pelo menos uma opção para injetar');
            }
        });
    }
    
    // Verificar si los checkboxes ya tienen el estado guardado
    checkboxes.forEach(checkbox => {
        // Aplicar el estado guardado si existe
        const key = `checkbox_${checkbox.nextElementSibling?.nextElementSibling?.textContent || 'unknown'}`;
        const savedState = localStorage.getItem(key);
        
        if (savedState === 'true') {
            checkbox.setAttribute('aria-checked', 'true');
            checkbox.setAttribute('data-state', 'checked');
        }
    });
    
    // Inicializar particlesJS con configuración de telaraña
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#000000" // Bolas negras
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#ffffff"
                    }
                },
                "opacity": {
                    "value": 0.8,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff", // Líneas blancas
                    "opacity": 0.5,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5, // Velocidad más lenta para efecto telaraña
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true, // Activar atracción para efecto telaraña
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // Mantener "grab" para efecto telaraña
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 200,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.error("particlesJS no está cargado correctamente");
    }
});