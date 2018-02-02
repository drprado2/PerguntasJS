const PerguntaRadioBox = function(){
  this.opcoes = [
    "É isso mesmo pode acreditar não duvide de mim.",
    "É isso mesmo pode acreditar não duvide de mim.",
    "É isso mesmo pode acreditar não duvide de mim.",
    "É isso mesmo pode acreditar não duvide de mim.",
  ];
}

PerguntaRadioBox.prototype.renderizar = function(){

  return `
    <div class="caixaRadioBox">
        <div class="radioBoxTitulo">Objetos Javascript</div>
        <hr>
        <div class="enunciadoRadioBox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi inventore iusto necessitatibus sit veniam! Consequuntur culpa doloremque ea eius iste, maiores nisi nobis praesentium provident quas quis rem temporibus unde!</div>
        <div class="radioBox">
            ${this.opcoes.map((x, index) => `<input id=${`perguntaRadio-${index}`} name="perguntaRadio" type="radio" /><label for=${`perguntaRadio-${index}`} class="itemRadioBox"><div class="visualBolinha"></div><span>${x}</span></label>`).join("")}    
        </div>
    </div>
  `;
}