class Pad{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.vel=5;
        this.largura = 50;
        this.altura = 100;
        this.y=(c.canvas.height/2)-(this.altura/2);

        this.pedImagem = new Image ();
        this.pedImagem.width = 50;
        this.pedImagem.height = 100;
        this.pedImagem.src = "assets/preda.png"
        this.pedImagem.addEventListener('load', () =>{
            this.draw()
        })
        

    }
    management(){
        /*
        if (this.keyboard.esquerda==true) 
            if (this.x > 0)
                this.x-=this.vel; 
        if (this.keyboard.direita) 
            if (this.x < this.c.canvas.width-this.dinosaur.width){
                this.x+=this.vel;
            }
        */
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;            
    }
    draw(){
        this.management();
        //this,c.fillStyle = "green";
        //this.c.fillRect(this.x, this.y, this.largura, this.altura);
        this.c.drawImage(this.pedImagem,this.x, this.y, this.pedImagem.width, this.pedImagem.height);
    }
   
}






