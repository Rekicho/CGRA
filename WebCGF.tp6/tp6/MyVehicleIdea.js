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
		this.bar=new MyCylinder(this.scene,12,1);
		
	};

	display()
	{
		//X GUIDE TO BUILD
			this.scene.pushMatrix();

			this.scene.translate(-2.5,0,0);
			this.scene.rotate(Math.PI/2,0,1,0);
			this.scene.scale(0.25,0.25,5);
			//this.bar.display();

			this.scene.popMatrix();


		//Z GUIDE TO BUILD BACK
			this.scene.pushMatrix();

			this.scene.translate(-1,0,1.25);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.25,0.25,2.5);
			this.bar.display();

			this.scene.popMatrix();




		//Z GUIDE TO BUILD FRONT
			this.scene.pushMatrix();

			this.scene.translate(2.5,0,0.9);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,1.8);
			this.bar.display();

			this.scene.popMatrix();


			this.scene.pushMatrix();

			this.scene.translate(2.5,0.75,0.9);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,1.8);
			this.bar.display();

			this.scene.popMatrix();



		//LEFT BAR GUIDE (should only be needed to change values in scale)
			this.scene.pushMatrix();

			this.scene.translate(-1,0,-1.25);
			this.scene.rotate(Math.PI/2 - (Math.PI * 5.711)/180,0,1,0);
			this.scene.scale(0.1,0.1,3.517);
			this.bar.display();

			this.scene.popMatrix();

			this.scene.pushMatrix();

			this.scene.translate(-1,1.75,-1.25);

			this.scene.rotate(Math.PI/2 - (Math.PI * 5.711)/180,0,1,0);
			this.scene.rotate((Math.PI * 15)/180,1,0,0);
			this.scene.scale(0.1,0.1,3.517);
			this.bar.display();

			this.scene.popMatrix();

		//RIGHT BAR GUIDE (should only be needed to change values in scale)
			this.scene.pushMatrix();

			this.scene.translate(-1,0,1.25);
			this.scene.rotate(Math.PI/2 + (Math.PI * 5.711)/180,0,1,0);
			this.scene.scale(0.1,0.1,3.517);
			this.bar.display();

			this.scene.popMatrix();


			this.scene.pushMatrix();

			this.scene.translate(-1,1.75,1.25);

			this.scene.rotate(Math.PI/2 + (Math.PI * 5.711)/180,0,1,0);
			this.scene.rotate((Math.PI * 15)/180,1,0,0);
			this.scene.scale(0.1,0.1,3.517);
			this.bar.display();

			this.scene.popMatrix();


		//Z GUIDE TO BUILD BACK BIT
			this.scene.pushMatrix();

			this.scene.translate(-2.5,0,1);
			this.scene.rotate(Math.PI,0,1,0);
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

			this.scene.popMatrix();


		//Z GUIDE TO BUILD BACK LEFT BIT
			this.scene.pushMatrix();

			this.scene.translate(-2.5,0,1);
			this.scene.rotate(Math.PI/2 - (Math.PI * 9.9462)/180,0,1,0);
			this.scene.scale(0.1,0.1,1.521);
			this.bar.display();

			this.scene.popMatrix();
		

		//Z GUIDE TO BUILD BACK RIGHT BIT
			this.scene.pushMatrix();

			this.scene.translate(-2.5,0,-1);
			this.scene.rotate(Math.PI/2 + (Math.PI * 9.9462)/180,0,1,0);
			this.scene.scale(0.1,0.1,1.521);
			this.bar.display();

			this.scene.popMatrix();





		//VERTICAL BAR LEFT
			this.scene.pushMatrix();

			this.scene.translate(-1,0,-1.25);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

			this.scene.popMatrix();


		//VERTICAL BAR RIGHT
			this.scene.pushMatrix();

			this.scene.translate(-1,0,1.25);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.scene.scale(0.1,0.1,2);
			this.bar.display();

			this.scene.popMatrix();


		//ANGLED BAR LEFT
			this.scene.pushMatrix();

			this.scene.translate(-1,1.9,-1.25);
			this.scene.rotate(-Math.PI/4,1,0,0);
			this.scene.scale(0.1,0.1,1.25);
			this.bar.display();

			this.scene.popMatrix();


		//ANGLED BAR RIGHT
			this.scene.pushMatrix();

			this.scene.translate(0,1.7,1.45);
			this.scene.translate(-1,1.06,-1.06);
			this.scene.rotate(Math.PI/4,1,0,0);
			this.scene.scale(0.1,0.1,1.25);
			this.bar.display();

			this.scene.popMatrix();


	};
};