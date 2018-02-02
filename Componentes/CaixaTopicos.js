const CaixaTopicos = function(topicos){
    this.topicos = topicos;
}

CaixaTopicos.prototype.renderizar = function(){
    let htmlTopicos = this.topicos.map(x => x.renderizar()).join("");
    return `
        <div class="caixaTopicos">
            <div class="topicos">
                ${htmlTopicos} 
            </div>
        </div>
    `;
}