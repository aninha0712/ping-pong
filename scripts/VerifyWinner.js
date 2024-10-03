class VerifyWinner{ 
    constructor(c){
        
        this.c = c;
        this.direita = this.c.canvas.width;
        this.margem = 20;
        this.margemDireita = 50;
        this.largura = 100;
   
    }


    draw(){

      if (pontoJogador1 ==3 || pontoJogador2 ==3)
      { 
        if (pontoJogador1 > pontoJogador2)
        {
            setTimeout(() => {
                textWinner= "Parabéns, você amassou!";
                this.placar.resetScore();
            },1000);
        }

        else 
        {
            setTimeout(() => {
                textWinner="A tecnologia venceu";
                this.placar.resetScore();
            },1000);
        }
      }

        this.c.font = "70px arial";
        this.c.fillStyle = "black";
        this.c.fillText (textWinner, 100,this.c.canvas.height - 100, this.c.canvas.width );

    }
   
}