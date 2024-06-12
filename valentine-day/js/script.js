function speak(texto) {
    // Verificar se a API de síntese de fala é suportada pelo navegador
    if ('speechSynthesis' in window) {
        // Criar um novo objeto SpeechSynthesisUtterance com o texto fornecido
        const utterance = new SpeechSynthesisUtterance(texto);

        // Configurar algumas propriedades da síntese de fala, se desejado
        utterance.pitch = 1; // Tom da voz (1 é o padrão)
        utterance.rate = 1; // Velocidade da fala (1 é o padrão)

        // Iniciar a síntese de fala
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('A API de síntese de fala não é suportada neste navegador.');
    }
}

function playAudio(){
    const audio = new Audio('images/audio.mp3');
    audio.play();
}

function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const title = document.getElementById("title").value;
    envelope.classList.add("open");
    playAudio();
}
