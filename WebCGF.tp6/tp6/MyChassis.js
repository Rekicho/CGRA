/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		//this.wheel = new MyWheel(scene);
		this.bar=new MyCylinder(this.scene,12,1);
	};

	display()
	{
		//this.wheel.display();




		//X GUIDE TO BUILD
			this.scene.pushMatrix();

			this.scene.translate(-3,0,0);
			this.scene.rotate(Math.PI/2,0,1,0);
			this.scene.scale(0.25,0.25,10);
			this.bar.display();

			this.scene.popMatrix();


		//Z GUIDE TO BUILD BACK
			this.scene.pushMatrix();

			this.scene.translate(0,0,2);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,4);
			this.bar.display();

			this.scene.popMatrix();




		//Z GUIDE TO BUILD FRONT
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


		//Z GUIDE TO BUILD BACK BIT
			this.scene.pushMatrix();

			this.scene.translate(-2.5,0,1);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,2);
			//this.bar.display();

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



		


	};
};
