// TODO imports go here

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function rollNote(resultContainer) {
    const res = document.createElement('div');
    res.classList.add('note');
    res.innerText = NOTES[Math.floor(Math.random() * NOTES.length)];
    resultContainer.appendChild(res);
}

function rollD6(resultContainer) {
    const res = document.createElement('img');
    res.src = `../img/dice_${Math.floor(Math.random() * 5) + 1}.png`
    resultContainer.appendChild(res);
}

function clear(resultContainer) {
    resultContainer.innerHTML = '';
}

function init() {
    const result = document.getElementById('result');

    document.getElementById('note').addEventListener('click',
        () => rollNote(result)
    );
    document.getElementById('d6').addEventListener('click',
        () => rollD6(result)
    );
    document.getElementById('clear').addEventListener('click',
        () => clear(result)
    );

    document.addEventListener('keydown',
        e => {
            if (e.repeat) return;

            switch (e.key) {
                case 'n': rollNote(result); break;
                case '6': rollD6(result); break;
                case 'c': clear(result); break;
            }
        }
    );
}

init();
