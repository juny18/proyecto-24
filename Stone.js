class Stone{
    constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		
		'friction': 0.9,
		'restitution':0.8,
		'density':12
	  };
		
		
	  this.body = Bodies.rectangle(x,y,width,height,options);
		//Especificar que el diseño del cuerpo lleva ancho y alto
		this.width =width;
		this.height =height;
		World.add(world, this.body);
	}
	display()
	{
			//var stonepos=this.body.position;	
			//var angle=this.body.angle//angle	
			push()
			//translate(stonepos.x, stonepos.y);
			
			rectMode(CENTER)
			rect(0,0,this.width,this.height);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			/*Dices que la clase va a mostrar un rectángulo
			pero no das nums. porque solo es el diseño*/
  			 rect(0,0,this.width,this.height)
			pop()
	}

}


