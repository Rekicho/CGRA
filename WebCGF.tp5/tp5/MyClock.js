/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClock extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.cylinder = new MyCylinder(scene,12,1);
		this.circle = new MyCircle(scene,12);
		this.hour = new MyClockHand(scene,0.05,0.4,0.01);
		this.minute = new MyClockHand(scene,0.04,0.6,0.01);
		this.second = new MyClockHand(scene,0.03,0.8,0.01);
		
		this.clockAppearence = new CGFappearance(this.scene);
		this.clockAppearence.loadTexture("../resources/images/clock.png");
	};

	display()
	{
		this.cylinder.display();

		this.scene.pushMatrix();
			this.scene.translate(0,0,1);
			this.hour.display();
			this.minute.display();
			this.second.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(0,0,1);
			this.clockAppearence.apply();
			this.circle.display();
		this.scene.popMatrix();
	};

	update(currTime)
	{
		var segundos = currTime / 1000.0;
		this.second.setAngle(this.second.angle + (segundos * 360 / 60));
		this.minute.setAngle(this.minute.angle + (segundos * 360 / (60 * 60)));
		this.hour.setAngle(this.hour.angle + (segundos * 360 / (60 * 60 * 12)));
	};
};
