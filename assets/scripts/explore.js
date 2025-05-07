// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let words = document.getElementById('text-to-speak');
  let selected = document.getElementById('voice-select');
  let button = document.querySelector('#explore button');
  let face = document.querySelector('#explore img');

  let persons = window.speechSynthesis;
  let choices = [];

  function getList() {
    let unused = persons.getVoices();

    if (!unused.length || choices.length) {
      return;
    }
    let used = new Set();
  
    unused.forEach((voice, i) => {
      const item = `${voice.name} (${voice.lang})`;
      if (used.has(item)) {
        return;
      }
      let choice = document.createElement('option');
      choice.value = i;
      choice.textContent = item;
      selected.appendChild(choice);
  
      used.add(item);
    });
  
    choices = unused;
  }

  persons.onvoiceschanged = getList;
  getList();

  button.addEventListener('click', speak);
  function speak() {
    let userInput = words.value;
    let select = Number(selected.value);
    let voiceOutput = new SpeechSynthesisUtterance();
    voiceOutput.text = userInput;
    voiceOutput.voice = choices[select];

    voiceOutput.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    voiceOutput.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    persons.speak(voiceOutput);
  }
}