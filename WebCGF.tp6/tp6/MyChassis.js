/**
 * MyChassis
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyChassis extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.bar = new MyCylinder(this.scene,12,1);


		this.texture = new CGFappearance(this.scene);
		this.texture.setAmbient(0.3,0.3,0.3,1);

	};

	display()
	{
		this.texture.apply();
		
		//Z GUIDE TO BUILD BACK
			this.scene.pushMatrix();

			this.scene.translate(-1,0,3);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,6);
			this.bar.display();

			this.scene.popMatrix();




		//FRONT AXIS
			this.scene.pushMatrix();

			this.scene.translate(6.5,0,1.5);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,3);
			this.bar.display();

			this.scene.popMatrix();

		//FRONT PIECE 
			//down
			this.scene.pushMatrix();

			this.scene.translate(6.95,0,0.73);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,1.46);
			this.bar.display();

			this.scene.popMatrix();
			//up
			this.scene.pushMatrix();

			this.scene.translate(7.15,0.4,1);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

			this.scene.popMatrix();

			//left
			this.scene.pushMatrix();
			
			this.scene.translate(6.9,0,-0.64);
			this.scene.rotate(Math.PI/2 + (Math.PI * 45)/180,0,1,0);
			this.scene.rotate((Math.PI * -40)/180,1,0,0);
			
			this.scene.scale(0.1,0.1,0.58);
			this.bar.display();

			this.scene.popMatrix();

			//right
			this.scene.pushMatrix();
			
			this.scene.translate(6.9,0,0.64);
			this.scene.rotate(Math.PI/2 - (Math.PI * 45)/180,0,1,0);
			this.scene.rotate((Math.PI * -40)/180,1,0,0);
			
			this.scene.scale(0.1,0.1,0.58);
			this.bar.display();

			this.scene.popMatrix();
			
		//BACK
		 	
		 	//left
		 	this.scene.pushMatrix();
			
			this.scene.translate(-0.45,1.1,-2.25);
			this.scene.rotate((Math.PI * 45)/180,0,1,0);
			this.scene.rotate((Math.PI * 65)/180,1,0,0);
			
			this.scene.scale(0.1,0.1,1.3);
			this.bar.display();

			this.scene.popMatrix();
		 	
		 	//right
		 	this.scene.pushMatrix();
			
			this.scene.translate(0,0,1.9);
			this.scene.rotate((Math.PI * -45)/180,0,1,0);
			this.scene.rotate((Math.PI * -65)/180,1,0,0);
			
			this.scene.scale(0.1,0.1,1.3);
			this.bar.display();

			this.scene.popMatrix();



		//LEFT BAR GUIDE (should only be needed to change values in scale)
			this.scene.pushMatrix();

			this.scene.translate(-0.08,0,-1.9);
			this.scene.rotate(Math.PI/2 - (Math.PI * 10)/180,0,1,0);
			this.scene.scale(0.1,0.1,7.2);
			this.bar.display();

			this.scene.popMatrix();

			this.scene.pushMatrix();

			this.scene.translate(-0.5,1.1,-2.3);
			this.scene.rotate(Math.PI/2 - (Math.PI * 10)/180,0,1,0);
			this.scene.rotate((Math.PI * 5)/180,1,0,0);
			this.scene.scale(0.1,0.1,7.9);
			this.bar.display();

			this.scene.popMatrix();

		//RIGHT BAR GUIDE (should only be needed to change values in scale)
			this.scene.pushMatrix();

			this.scene.translate(-0.08,0,1.9);
			this.scene.rotate(Math.PI/2 + (Math.PI * 10)/180,0,1,0);
			this.scene.scale(0.1,0.1,7.2);
			this.bar.display();

			this.scene.popMatrix();


		this.scene.pushMatrix();

			this.scene.translate(-0.5,1.1,2.3);
			this.scene.rotate(Math.PI/2 + (Math.PI * 10)/180,0,1,0);
			this.scene.rotate((Math.PI * 5)/180,1,0,0);
			this.scene.scale(0.1,0.1,7.9);
			this.bar.display();

			this.scene.popMatrix();



		//ROOF FRONT
			this.scene.pushMatrix();

			this.scene.translate(2.5,2.55,-0.65);
		
			this.scene.scale(0.1,0.1,1.3);
			this.bar.display();

			this.scene.popMatrix();
		

		//ROOF BACK
			this.scene.pushMatrix();

			this.scene.translate(0.9,2.55,-1);
		
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

			this.scene.popMatrix();





		//UPPER BARS LEFT
			this.scene.pushMatrix();

			
			this.scene.translate(-0.4,1,-2.3);
			this.scene.rotate(Math.PI/2 - (Math.PI * 45)/180,0,1,0);
			this.scene.rotate((Math.PI * -40)/180,1,0,0);
			this.scene.scale(0.1,0.1,2.5);
			this.bar.display();

			this.scene.popMatrix();

			this.scene.pushMatrix();

			
			this.scene.translate(5,0.6,-1.3);
			this.scene.rotate(-(Math.PI * 70)/180,1,0,0);
			this.scene.rotate(-(Math.PI * 50)/180,0,1,0);
			this.scene.scale(0.09,0.09,3.3);
			this.bar.display();

			this.scene.popMatrix();


		//UPPER BARS RIGHT
			this.scene.pushMatrix();

			this.scene.translate(-0.4,1,2.3);
			this.scene.rotate(Math.PI/2 + (Math.PI * 45)/180,0,1,0);
			this.scene.rotate((Math.PI * -40)/180,1,0,0);
			this.scene.scale(0.1,0.1,2.5);
			this.bar.display();

			this.scene.popMatrix();

			this.scene.pushMatrix();

			this.scene.translate(5,0.6,1.3);
			this.scene.rotate((Math.PI * 70)/180,1,0,0);
			this.scene.rotate(-(Math.PI * 130)/180,0,1,0);
			this.scene.scale(0.09,0.09,3.3);
			this.bar.display();

			this.scene.popMatrix();


	//BACK BAR LEFT
		this.scene.pushMatrix();
			this.scene.translate(0,0,-2);
			this.scene.rotate(-(Math.PI * 70 )/180,0,1,0);
			this.scene.scale(0.1,0.1,2.9);
			this.bar.display();

		this.scene.popMatrix();


		this.scene.pushMatrix();
			this.scene.translate(-0.3,1.15,-2.3);
			this.scene.rotate(-(Math.PI * 62 )/180,0,1,0);
			this.scene.scale(0.1,0.1,2.8);
			this.bar.display();

		this.scene.popMatrix();




		//BACK BAR RIGHT
		this.scene.pushMatrix();
			this.scene.translate(0,0,2);
			this.scene.rotate(Math.PI + (Math.PI * 70 )/180,0,1,0);
			this.scene.scale(0.1,0.1,2.9);
			this.bar.display();

		this.scene.popMatrix();


		this.scene.pushMatrix();
			this.scene.translate(-0.3,1.15,2.3);
			this.scene.rotate(Math.PI + (Math.PI * 62 )/180,0,1,0);
			this.scene.scale(0.1,0.1,2.8);
			this.bar.display();

		this.scene.popMatrix();


		//BACK BAR 
  		this.scene.pushMatrix();

			this.scene.translate(-2.7,0,-1.05);
			this.scene.scale(0.1,0.1,2.1);
			this.bar.display();

		this.scene.popMatrix();

		this.scene.pushMatrix();

			this.scene.translate(-2.7,1.2,-1.05);
			this.scene.scale(0.1,0.1,2.1);
			this.bar.display();

		this.scene.popMatrix();



	


		//VERTICAL BACK BAR LEFT
  		this.scene.pushMatrix();
  		
			this.scene.translate(-2.7,0,-1);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.scene.scale(0.1,0.1,1.25);
			this.bar.display();

		this.scene.popMatrix();



		//VERTICAL BACK BAR RIGHT
  		this.scene.pushMatrix();
  		
			this.scene.translate(-2.7,0,1);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.scene.scale(0.1,0.1,1.25);
			this.bar.display();

		this.scene.popMatrix();


		//HORIZONTAL TOP BAR RIGHT
			this.scene.pushMatrix();
  		
			this.scene.translate(1,2.5,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

		this.scene.popMatrix();
		
		//HORIZONTAL TOP BAR LEFT
			this.scene.pushMatrix();
  		
			this.scene.translate(1,2.5,-1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

		this.scene.popMatrix();



		//ANGLED BAR LEFT
			this.scene.pushMatrix();
  		
			this.scene.translate(-0.9,2.55,-1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.rotate((Math.PI * 37 )/180,1,0,0);
			this.scene.scale(0.1,0.1,2.3);
			this.bar.display();

		this.scene.popMatrix();

		//ANGLED BAR RIGHT
			this.scene.pushMatrix();
  		
			this.scene.translate(-0.9,2.55,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.rotate((Math.PI * 37 )/180,1,0,0);
			this.scene.scale(0.1,0.1,2.3);
			this.bar.display();

		this.scene.popMatrix();
	
	};


	setTexture(texture)
	{
		this.texture = texture;
	}



};
