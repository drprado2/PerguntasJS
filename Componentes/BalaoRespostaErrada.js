const BalaoRespostaErrada = function(){

}

BalaoRespostaErrada.prototype.renderizar = function(){

  return `
    <div class="quadroRespostaErrada">
      <div class="balaoRespostaErrada">
          <div class="textoRespostaErrada">
            <div>Você Errou </div>
            <i class="far fa-frown fa-3x"></i>
          </div>
          <div class="botaoRetornar"><i class="fas fa-redo"></i></div>
      </div>
    </div>
  `;
}