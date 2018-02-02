const Topico = function(){

}

Topico.prototype.renderizar = function(){
    return `
        <div class="topico">
            <div class="perguntasRespondidas">1/5</div>
            <div class="tituloTopico">Introdução ao Javascript</div>
            <div class="rodapeTopico">1 Pergunta</div>
        </div>
    `;
}