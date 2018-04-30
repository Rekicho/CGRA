/**
 * MyClockHand
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene,scaleX,scaleY,scaleZ) 
	{
		super(scene);
		
		this.cylinder = new MyCylinder(scene,12,1);
		
		this.scaleX = scaleX || 1;
		this.scaleY = scaleY || 1;
		this.scaleZ = scaleZ || 1;

		this.angle = 0;

		this.handAppearence = new CGFappearance(this.scene);
		this.handAppearence.setAmbient(0,0,0,0);
		this.handAppearence.setDiffuse(0,0,0,0);
		this.handAppearence.setSpecular(0,0,0,0);	
		this.handAppearence.setShininess(0);
	};

	display()
	{
		this.scene.pushMatrix();
			this.scene.rotate(-this.angle * Math.PI / 180,0,0,1);
			this.scene.scale(this.scaleX,this.scaleY,this.scaleZ);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.handAppearence.apply();
			this.cylinder.display();
		this.scene.popMatrix();
	};

	setAngle(angle)
	{
		this.angle = angle;
	};
};
