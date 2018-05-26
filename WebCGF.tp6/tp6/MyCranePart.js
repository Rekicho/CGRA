/**
 * MyCranePart
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCranePart extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.cylinder = new MyCylinder(this.scene,20,20,1);
		this.cover = new MyCircle(this.scene,20,20);
	};

	display()
	{	
		//SIDE
		this.scene.pushMatrix();
		
		this.scene.translate(0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cylinder.display();

		this.scene.popMatrix();
	
		//TOP COVER
		this.scene.pushMatrix();
		
		this.scene.translate(0,1,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.cover.display();

		this.scene.popMatrix();

		//BACK COVER
		this.scene.pushMatrix();
		
		this.scene.rotate(Math.PI/2,1,0,0);
		this.cover.display();

		this.scene.popMatrix();
	};
};