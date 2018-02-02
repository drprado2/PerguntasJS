const Cabecalho = function(){

}

Cabecalho.prototype.renderizar = function(){
    return `
            <div class="cabecalho">
                <div class="caixaTituloCabecalho">
                  <div class="tituloSubtitulo">
                      <h1>Perguntas JS</h1>
                      <span class="subtituloCabecalho">SEU SUCESSO É AQUI</span>
                  </div>
                </div>
                <div class="levelCabecalho">
                    <div class="caixaLevel">
                        <span>Level: </span>
                        <div><span>1</span></div>
                    </div>
                    <div class="barraLevel"><div class="percentualLevel"></div></div>
                </div>
            </div>
        `;
}