/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCrane extends CGFobject
{
	constructor(scene,slices,stacks, outside) 
	{
		super(scene);

		this.part = new MyCranePart(this.scene);
	};
	

	display()
	{
	
	//BASE
		this.scene.pushMatrix();
		
		this.scene.scale(1.5,0.75,1.5);
		this.part.display();
		
		this.scene.popMatrix();



	//FIRST BAR
		this.scene.pushMatrix();
		
		this.scene.translate(0,0.4,0);
		this.scene.rotate((Math.PI * 15)/180,1,0,0);
		this.scene.scale(0.5,10,0.5);
		this.part.display();
		
		this.scene.popMatrix();

	//AXIS
		this.scene.pushMatrix();
		
		this.scene.translate(-0.45,10.5,2.7);
		


		this.scene.pushMatrix();
		


		this.scene.pushMatrix();
		
		this.scene.translate(0.5,0.2,0.5);
		this.scene.rotate((Math.PI * 60)/180,1,0,0);
		this.scene.scale(0.5,6,0.5);
		this.part.display();

		this.scene.popMatrix();

	//STRING
		this.scene.pushMatrix();
		
		this.scene.translate(0.5,-1.3,5.3);
		this.scene.rotate((Math.PI * 5)/180,1,0,0);
		this.scene.scale(0.1,4,0.1);
		this.part.display();

		this.scene.popMatrix();


	//MAGNET PLATE
		this.scene.pushMatrix();
		
		this.scene.translate(0.5,-1.3,5.3);
		//this.scene.rotate((Math.PI * 5)/180,1,0,0);
		this.scene.scale(2,0.4,2);
		this.part.display();

		this.scene.popMatrix();











		this.scene.popMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.9,0.9,0.9);
		this.part.display();
		
		this.scene.popMatrix();



		
	};
	
};
