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
		this.outside = new MyCylinder(scene,20,1,true);
		this.inside = new MyCylinder(scene,20,1,false);
		this.fronttire = new MyRing(scene,20,0.75,1,true);
		this.backtire = new MyRing(scene,20,0.75,1,false);

		this.bar = new MyCylinder(scene,20,1,true);

		this.wheelAppearence = new CGFappearance(this.scene);
		this.wheelAppearence.loadTexture("../resources/images/wheel.png");

		this.tireAppearence = new CGFappearance(this.scene);
		this.tireAppearence.setAmbient(0.3,0.3,0.3,1);

	};

	display()
	{

		this.tireAppearence.apply();

		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,1,1,0);
			this.scene.scale(0.15,0.15,1.75);
			this.scene.translate(0,0,-0.5);
			this.bar.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(-0.55,-0.55,0);
			this.scene.rotate(-Math.PI/4,0,0,1);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.scene.scale(0.15,0.15,1.75);
			this.bar.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.scene.translate(0,0,-0.5);
			this.scene.pushMatrix();
				this.scene.scale(0.75,0.75,1);
				this.inside.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,0,1);
				this.fronttire.display();
			this.scene.popMatrix();

			this.backtire.display();

			this.wheelAppearence.apply();
			this.outside.display();
		this.scene.popMatrix();
	};
};
