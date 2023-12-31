function App() {}
    window.onload = function(event){
        var app = new app();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');

        const carruselWidth = carrusel[0].offsetWidth;

        const trackWidht = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nextAction(leftPosition, trackWidht, listWidth, carruselWidth, track);
    }
    
    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0){
            track.style.left `${-1 * (leftPosition - carruselWidth)}px`;
        }
    }

    let nextAction = (leftPosition, trackWidht, listWidth, carruselWidth, track) =>{
        if(leftPosition < (trackWidht - listWidth)){
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`
        }
    }
