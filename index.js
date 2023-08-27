let speech = new SpeechSynthesisUtterance(); // 1- listen butonuna tıklayınca textarea içine yazdığımız text seslendiriyoruz.

let voices = []; //2- ses değiştirmek işlemi .

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // cihazda var olan tüm sesleri sağlar.
  speech.voice = voices[0]; // var olan seslerin ilk sesini alıp başlar.

  //3-- var olan tüm sesler

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

//4-açılır menü içinden seçilecek olan konusma sesini değiştirir.

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  //-----  1- listen butonuna tıklayınca textarea içine yazdığımız text seslendiriyoruz. ---- //
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
