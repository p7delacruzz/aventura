const story = document.getElementById("story");
const choices = document.getElementById("choices");

function showStory(text, options) {
  story.textContent = text;
  choices.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = opt.action;
    choices.appendChild(btn);
  });
}

// Primeira cena
showStory("Você acorda em uma floresta misteriosa. Há dois caminhos à sua frente...",
  [
    { text: "Seguir pela trilha iluminada 🌟", action: pathLight },
    { text: "Entrar na caverna escura 🌑", action: pathDark }
  ]
);

function pathLight() {
  showStory("A trilha leva até um lago mágico. Você vê um barco esperando por você.",
    [
      { text: "Entrar no barco 🚤", action: lakeBoat },
      { text: "Beber a água do lago 💧", action: lakeDrink }
    ]
  );
}

function pathDark() {
  showStory("Dentro da caverna você encontra uma tocha acesa e um túnel sem fim.",
    [
      { text: "Pegar a tocha 🔥", action: torch },
      { text: "Seguir sem nada 🚶", action: emptyTunnel }
    ]
  );
}

function lakeBoat() {
  showStory("O barco começa a se mover sozinho... você segue para um castelo brilhante!",
    [{ text: "Recomeçar 🔄", action: () => location.reload() }]
  );
}

function lakeDrink() {
  showStory("A água é envenenada! Você desmaia... Fim da aventura.",
    [{ text: "Recomeçar 🔄", action: () => location.reload() }]
  );
}

function torch() {
  showStory("Com a tocha, você encontra um baú cheio de tesouros escondidos! 🎁",
    [{ text: "Recomeçar 🔄", action: () => location.reload() }]
  );
}

function emptyTunnel() {
  showStory("No escuro, você tropeça e cai em um abismo... Fim da aventura.",
    [{ text: "Recomeçar 🔄", action: () => location.reload() }]
  );
}
