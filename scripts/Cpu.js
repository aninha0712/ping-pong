class Cpu{ 
    constructor(c, bola){
        this.c = c;
        this.bola = bola;
        this.vel=8;
        this.largura = 50;
        this.altura = 100;
        this.x=(c.canvas.width - this.largura-5);
        this.y=(c.canvas.height/2)-(this.altura/2);
        this.inicioX = this.x;
        this.inicioY = this.y;
        this.meioY = Math.random()*this.altura;

        this.cpuImagem = new Image ();
        this.cpuImagem.width = 50;
        this.cpuImagem.height = 100;
        this.cpuImagem.src = "assets/preda1.png"
        this.cpuImagem.addEventListener('load', () =>{
            this.draw()
        })


    }
    management()
    {
        if ((this.bola.dirX > 0) && (this.bola.x > (this.c.canvas.width/2)))
            {
                if (this.bola.y + (this.bola.altura/2) > (this.y + this.meioY))
                    this.y += this.vel;
                if (this.bola.y + (this.bola.altura/2) < (this.y + this.meioY))
                    this.y -= this.vel;
            }
        else
            {
                if (this.y > this.inicioY)
                {
                    this.y -= this.vel;
                }
                if (this.y < this.inicioY)
                {
                    this.y += this.vel;
                }
    
            } 
        if((this.x <= this.bola.x + this.bola.largura) && (this.x + this.largura >= this.bola.x)
                && ((this.y + this.altura >= this.bola.y)&& (this.y <= this.bola.altura + this.bola.y)))
        {
            this.bola.dirX = -1;
            this.bola.dirY = ((this.bola.y +(this.bola.altura/2))- (this.y + (this.altura/2)))/16;
            this.meioY = Math.random() * this.altura;
        }           
    }
    draw(){
        this.management();
       // this.c.fillStyle = "red";
       // this.c.fillRect(this.x, this.y, this.largura, this.altura);
       this.c.drawImage(this.cpuImagem,this.x, this.y, this.cpuImagem.width, this.cpuImagem.height);
    }
   
}







