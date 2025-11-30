document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById('mobile-menu');
    const navBar = document.querySelector('.hotbar');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navBar.classList.toggle('active');

            const icon = menuBtn.querySelector('i');
            if (navBar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    const packageDetails = {
        'paket-basic': {
            title: 'Detail Paket Website Basic 🚀',
            description: `Paket ini ideal untuk portofolio pribadi, UMKM kecil, atau Landing Page sederhana. Anda akan mendapatkan desain modern 5 halaman, didukung hosting 1 tahun, dan gratis domain (.com/.net).`,
            features: ['Desain Modern 5 Halaman', 'Web Uptime Stabil (Hosting Standar 1 Tahun)', 'Gratis Domain 1 Tahun', 'Desain Responsif Mobile', 'Garansi Keamanan Dasar (SSL)']
        },
        'paket-pro': {
            title: 'Detail Paket Website PRO ⭐ (Paling Populer)',
            description: `Pilihan paling populer! Paket ini cocok untuk bisnis yang ingin berkembang. Mencakup 10 halaman, hosting cepat 2 tahun, dan fokus pada kecepatan serta Struktur SEO Ready.`,
            features: ['10 Halaman Utama Profesional', 'Hosting Premium 2 Tahun', 'Struktur SEO Ready (Siap Dioptimasi Google)', 'Formulir Kontak Kustom', 'Dukungan Prioritas Cepat (via WA/Telp)', 'Email Bisnis Profesional']
        },
        'paket-premium': {
            title: 'Detail Paket Website ENTERPRISE 👑 (Custom)',
            description: `Solusi kustom penuh tanpa batas untuk perusahaan besar atau website E-Commerce kompleks. Layanan lengkap dengan hosting 3 tahun, fitur keamanan lanjutan.`,
            features: ['Halaman Tak Terbatas (Custom)', 'Hosting High-Performance 3 Tahun', 'Keamanan Lanjutan', 'CMS Khusus', 'Perawatan & Pembaruan Sistem Bulanan', 'Optimasi Kecepatan Maksimal']
        }
    };
    

    const boxJasaElements = document.querySelectorAll('.box-jasa');
    const btnBeliElements = document.querySelectorAll('.btn-beli');
    const detailPopup = document.getElementById('detail-popup');
    const thankYouPopup = document.getElementById('thank-you-popup');
    const buyFromDetail = document.getElementById('buy-from-detail');
    const closeButtons = document.querySelectorAll('.modal .close-btn');
    const detailPopupTitle = document.querySelector('#detail-popup h3');
    const detailPopupDesc = document.querySelector('#detail-popup p');
    const detailPopupContent = document.querySelector('#detail-popup .modal-content');

    
    function showModal(modalElement) {
        modalElement.classList.add('is-active');
    }
    function hideModal(modalElement) {
        modalElement.classList.remove('is-active');
    }

    boxJasaElements.forEach(box => {
        box.addEventListener('click', (event) => {
            if (!event.target.classList.contains('btn-beli')) {
                const packageId = box.dataset.packageId;
                const data = packageDetails[packageId];

                if(data) {
                    detailPopupTitle.textContent = data.title;
                    detailPopupDesc.textContent = data.description;

                    let featuresHtml = '<h4>Fitur Utama:</h4><ul style="text-align:left; margin-top:10px;">';
                    data.features.forEach(feature => {
                        featuresHtml += `<li>${feature}</li>`;
                    });
                    featuresHtml += '</ul>';

                    const existingList = detailPopupContent.querySelector('.dynamic-features');
                    if (existingList) { existingList.remove(); }

                    const newFeaturesDiv = document.createElement('div');
                    newFeaturesDiv.className = 'dynamic-features';
                    newFeaturesDiv.innerHTML = featuresHtml;

                    detailPopupContent.insertBefore(newFeaturesDiv, buyFromDetail);
                    showModal(detailPopup);
                }
            }
        });
    });

    btnBeliElements.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            
            hideModal(detailPopup);
            showModal(thankYouPopup);
        });
    });

    if(buyFromDetail){
        buyFromDetail.addEventListener('click', () => {
            hideModal(detailPopup);
            showModal(thankYouPopup);
        });
    }

    closeButtons.forEach(btn => {
        btn.onclick = function() {
            hideModal(this.closest('.modal'));
        }
    });

    window.onclick = function(event) {
        if (event.target == detailPopup) { hideModal(detailPopup); }
        if (event.target == thankYouPopup) { hideModal(thankYouPopup); }
    }
});