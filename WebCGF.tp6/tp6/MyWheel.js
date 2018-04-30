/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.outside = new MyCylinder(scene,20,20,true);
		this.inside = new MyCylinder(scene,20,20,false);
		this.fronttire = new MyRing(scene,20,0.75,1,true);
		this.backtire = new MyRing(scene,20,0.75,1,false);
	};

	display()
	{
		this.outside.display();

		this.scene.pushMatrix();
			this.scene.scale(0.75,0.75,1);
			this.inside.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(0,0,1);
			this.fronttire.display();
		this.scene.popMatrix();

		this.backtire.display();
	};
};
