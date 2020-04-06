class Anagrammer {
  constructor() {
    this.input = document.getElementById("input");
    this.letters_wrapper = document.querySelector(".letters-wrapper");
    this.sortable = new Sortable(this.letters_wrapper, {
      animation: 100
    });

    this.setInputEvent();
    this.parseInput();
  }

  parseInput() {
    var letters_array = this.getInput().split("");

    this.letters_wrapper.innerHTML = "";

    for(var i=0;i<letters_array.length;i++) {
      var letter = letters_array[i];
      if(!letter.match(/[a-zа-яё]/ig)) {
        continue;
      }
      var letter_el = document.createElement("div");
      letter_el.className = "letter";
      letter_el.textContent = letter;
      this.letters_wrapper.appendChild(letter_el);
    }
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