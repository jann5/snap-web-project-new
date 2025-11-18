document.addEventListener('DOMContentLoaded', () => {
    // Otwieranie modala dla darmowego kursu
    document.getElementById('register-free').onclick = () => {
        document.getElementById('modal-free').classList.add('active');
    };

    // Przekierowanie dla płatnego kursu
    document.getElementById('register-paid').onclick = () => {
        window.location.href = "kurs-platny.html";
    };

    // Zamknięcie modali
    document.querySelectorAll('.close').forEach(btn => {
        btn.onclick = () => {
            document.getElementById(btn.dataset.modal).classList.remove('active');
        };
    });
    window.onclick = (e) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) modal.classList.remove('active');
        });
    };

    // Obsługa formularza darmowego kursu
    document.getElementById('form-free').onsubmit = function(e) {
        e.preventDefault();
        const email = this.elements['email'].value;
        if(email) {
            // Możesz tu dodać zapis do bazy lub wysyłkę e-maila
            window.location.href = "kurs-darmowy.html";
        }
    };

    // Obsługa formularza płatnego kursu
    document.getElementById('form-paid').onsubmit = function(e) {
        e.preventDefault();
        const email = this.elements['email'].value;
        if(email) {
            // Możesz tu dodać zapis do bazy lub wysyłkę e-maila
            window.location.href = "platnosc.html";
        }
    };

    // Animacja kliknięcia
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', e => {
            btn.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0.93)' },
                { transform: 'scale(1)' }
            ], {
                duration: 250,
                easing: 'ease'
            });
        });
    });
});