class Anagrammer {
  constructor() {
    this.input = document.getElementById("input");
    this.letters_wrapper = document.querySelector(".letters-wrapper");
    this.drake = window.dragula();

    this.setInputEvent();
    this.parseInput();
  }

  parseInput() {
    this.drake.destroy();

    var letters_array = this.getInput().split("");

    this.letters_wrapper.innerHTML = "";

    for(var i=0;i<letters_array.length;i++) {
      var letter_el = document.createElement("div");
      letter_el.className = "letter";
      letter_el.textContent = letters_array[i];
      this.letters_wrapper.appendChild(letter_el);
    }

    this.drake = dragula([this.letters_wrapper]);
  }

  getInput() {
    return this.input.value;
  }

  setInputEvent() {
    this.input.addEventListener("input", this.handleInput.bind(this));
  }

  handleInput() {
    this.parseInput();
  }
}

var anagrammer = new Anagrammer();