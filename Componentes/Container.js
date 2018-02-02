const Container = function(filhos){
    this.filhos = filhos;
}

Container.prototype.renderizar = function(){
    let htmlFilhos = this.filhos.map(x => x.renderizar()).join("");
    return `
            <div class="container">
                ${htmlFilhos}
            </div> 
        `;
}