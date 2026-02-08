const a_els = document.getElementsByClassName('cc-click');
Array.from(a_els).forEach(
    (el) => {
        const tag = el.id.substring(6);
        const viddiv = document.getElementById('div-' + tag);
        const ifr = document.getElementById('iframe-' + tag);
        el.addEventListener(
            'click',
            (e) => {
                viddiv.classList.toggle('cc-video-active');
                el.classList.toggle('cc-open');
                if (!viddiv.classList.contains('cc-video-active')) {
                    ifr.src = ifr.src; 
                }
            },
            {passive: true});
    });
