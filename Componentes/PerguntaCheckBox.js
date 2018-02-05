const PerguntaCheckBox = function(){

  this.botaoProsseguir = new BotaoProsseguir();

  this.perguntas = [
    "Cara tem que ser isso, isso faz total sentido",
    "Cara tem que ser isso, isso faz total sentido",
    "Cara tem que ser isso, isso faz total sentido",
    "Cara tem que ser isso, isso faz total sentido"
  ]
}

PerguntaCheckBox.prototype.renderizar = function(){
  return `
    <div class="caixaCheckBox">
        <div class="checkBoxTitulo">Objetos Javascript</div>
        <hr>
        <div class="enunciadoCheckBox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi inventore iusto necessitatibus sit veniam! Consequuntur culpa doloremque ea eius iste, maiores nisi nobis praesentium provident quas quis rem temporibus unde!</div>
        <div class="checkBox">
            ${this.perguntas.map((x, index) => `<input id=${`perguntaCheck-${index}`} name="perguntaCheck" type="checkbox" /><label for=${`perguntaCheck-${index}`} class="itemCheckBox"><div class="visualQuadradinho"></div><span>${x}</span></label>`).join("")}    
        </div>
        <div class="areaBotaoCheckBox">
            <div></div>${this.botaoProsseguir.renderizar()}
        </div> 
    </div>
        ${new BalaoRespostaErrada().renderizar()}
  `;
}