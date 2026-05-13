const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('admin-password');
const loginForm = document.getElementById('login-form');
const adminPanel = document.getElementById('admin-panel');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        if (passwordInput.value === 'admin123') {
            loginForm.style.display = 'none';
            adminPanel.style.display = 'block';
            carregarDados();
        } else {
            alert('Senha incorreta!');
        }
    });
}

function carregarDados() {
    const participantes = JSON.parse(localStorage.getItem('participantes') || '[]');
    const palestrantes = JSON.parse(localStorage.getItem('palestrantes') || '[]');
    const projetos = JSON.parse(localStorage.getItem('projetos') || '[]');

    document.getElementById('participantes-list').innerHTML = participantes.map(p => `<p>${p.nome} - ${p.ra}</p>`).join('');
    document.getElementById('palestrantes-list').innerHTML = palestrantes.map(p => `<p>${p.nome} - ${p.tema}</p>`).join('');
    document.getElementById('projetos-list').innerHTML = projetos.map(p => `<p>${p.nomeProjeto} - ${p.descProjeto}</p>`).join('');
    const presencas = JSON.parse(localStorage.getItem('presencas') || '[]');
    document.getElementById('presencas-list').innerHTML = presencas.map(p => `<p>${p.palestra} - ${p.timestamp}</p>`).join('');
}

if (window.tsParticles) {
    tsParticles.load('tsparticles-admin', {
        particles: {
            number: {
                value: 100
            },
            color: {
                value: '#ffffff'
            },
            links: {
                enable: true,
                distance: 130,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5
            },
            size: {
                value: 2
            },
            opacity: {
                value: 0.6
            }
        },
        background: {
            color: 'transparent'
        }
    });
} else {
    window.addEventListener('load', () => {
        if (window.tsParticles) {
            tsParticles.load('tsparticles-admin', {
                particles: {
                    number: {
                        value: 100
                    },
                    color: {
                        value: '#ffffff'
                    },
                    links: {
                        enable: true,
                        distance: 130,
                        color: '#ffffff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1.5
                    },
                    size: {
                        value: 2
                    },
                    opacity: {
                        value: 0.6
                    }
                },
                background: {
                    color: 'transparent'
                }
            });
        }
    });
}
