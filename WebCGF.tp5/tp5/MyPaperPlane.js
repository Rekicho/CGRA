/**
 * MyPaperPlane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPaperPlane extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.part = new MyPaperPlanePart(this.scene);

		//Time in seconds since start
		this.time = 0;
	};

	display()
	{
		this.scene.pushMatrix();

		if(this.time < 2500)
			this.scene.translate(0,this.time/2000,-this.time/100);

		else if (this.time < 4250)
		{
			this.scene.translate(0,1.25 -(this.time-2500)/200,-25 + 1);
			this.scene.rotate(-Math.PI/2,1,0,0);
		}

		else
		{
			this.scene.translate(0,-6.75,-25);
			this.scene.rotate(-Math.PI,0,0,1);
		}

		//Right Main
		this.scene.pushMatrix();
			this.scene.rotate(-Math.PI/4,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.part.display();
		this.scene.popMatrix();
		
		//Right Wing
		this.scene.pushMatrix();
			this.scene.translate(0.7,0.7,0.5);
			this.scene.rotate(-3*Math.PI/4,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(1,0.5,1);
			this.part.display();
		this.scene.popMatrix();

		//Left Main
		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/4,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.part.display();
		this.scene.popMatrix();
		
		//Left Wing
		this.scene.pushMatrix();
			this.scene.translate(-0.7,0.7,0.5);
			this.scene.rotate(3*Math.PI/4,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(1,0.5,1);
			this.part.display();
		this.scene.popMatrix();

		this.scene.popMatrix();
	};

	update(currTime)
	{
		this.time += currTime;
	};
};
