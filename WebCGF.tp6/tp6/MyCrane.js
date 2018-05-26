/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCrane extends CGFobject
{
	constructor(scene) 
	{
		super(scene);

		this.part = new MyCranePart(this.scene);
		this.platform = new Plane(this.scene);
		this.baseangle = 0;
		this.axisangle = 0;

		this.craneAppearance = new CGFappearance(this.scene);
		this.craneAppearance.loadTexture("../resources/images/crane.png");
		this.craneAppearance.setAmbient(1,1,1,1);

		this.startAppearance = new CGFappearance(this.scene);
		this.startAppearance.loadTexture("../resources/images/start.png");
		this.startAppearance.setAmbient(1,1,1,1);

		this.endAppearance = new CGFappearance(this.scene);
		this.endAppearance.loadTexture("../resources/images/end.png");
		this.endAppearance.setAmbient(1,1,1,1);

		this.state = {
			STOPPED : 0,
			GO : 1,
			GO_BACK : 2,
			PICKDOWN : 3,
			PICKUP : 4
		};

		this.event = {
			HALF : 0,
			PICKED_UP : 1,
			UP : 2,
			DEF : 3
		};

		this.activestate = this.state.STOPPED;
		this.activeevent = this.event.DEF;
		this.carAttached = false;
		this.active = true;
		this.dropped = false;
	};

	display()
	{
		this.craneAppearance.apply();
	
	//BASE
		this.scene.pushMatrix();
		this.scene.rotate(-this.baseangle * Math.PI/180,0,1,0);
		
			//FIRST BAR
				this.scene.pushMatrix();

				this.scene.translate(0,0.4,0);
				this.scene.rotate((Math.PI * 15)/180,1,0,0);
				this.scene.scale(0.45,10,0.45);
				this.part.display();

				this.scene.popMatrix();

			//AXIS
			this.scene.pushMatrix();

				this.scene.translate(-0.45,10.5,2.7);

				this.scene.rotate(this.axisangle * Math.PI/180,1,0,0);
				this.scene.rotate(Math.PI/2,0,1,0);
				this.scene.rotate(Math.PI/2,1,0,0);
				this.scene.scale(0.9,0.9,0.9);
				this.part.display();

				this.scene.pushMatrix();


						this.scene.pushMatrix();

						this.scene.translate(0,0.5,0);
						this.scene.rotate((Math.PI * 60)/180,0,1,0);
						this.scene.rotate(-Math.PI/2,1,0,0);
						this.scene.scale(0.45,7,0.45);
						this.part.display();

						this.scene.popMatrix();

					//STRING
						this.scene.pushMatrix();
						
						this.scene.translate(-6,0.5,-3);
						this.scene.rotate(-this.axisangle * Math.PI/180 ,0,1,0);
						this.scene.rotate(Math.PI/2,1,0,0);
						
						//MAGNET PLATE
							this.scene.pushMatrix();

							this.scene.translate(0,4,0);
							if(this.carAttached)
							{
							this.scene.pushMatrix();
							this.scene.translate(0,1.5,0);
								this.scene.rotate(this.scene.car.steer,0,1,0);
								this.scene.rotate(Math.PI,1,0,0);
								this.scene.scale(0.5,0.5,0.5);
								this.scene.car.display();
							this.scene.popMatrix();
							}
							this.scene.scale(2,0.4,2);
							this.craneAppearance.apply();
							this.part.display();
							

							this.scene.popMatrix();

						this.scene.scale(0.1,4,0.1);
						this.part.display();
						this.scene.popMatrix();

				this.scene.popMatrix();


			this.scene.popMatrix();

		this.scene.scale(1.5,0.75,1.5);
		this.part.display();
	
	this.scene.popMatrix();

	//START PLATFORM
	this.scene.pushMatrix();
	this.scene.translate(0,0.05,-6.5);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(5.5,3,1);
	this.startAppearance.apply();
	this.platform.display();
	this.scene.popMatrix();

	//END PLATFORM
	this.scene.pushMatrix();
	this.scene.translate(0,0.05,8);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(5.5,3,5);
	this.endAppearance.apply();
	this.platform.display();
	this.scene.popMatrix();
	
	};

	update(currTime)
	{
		var segundos = currTime/1000.0;
		this.statemachine(currTime);
		this.read_event();
	};

	eventhappens(event)
	{
		this.activeevent = event;	
	};

	setstate(state)
	{	
		this.activestate = state;
		
	};

	upaxisangle(currTime)
	{		
		this.axisangle += 0.025 * currTime;
	};
	
	downaxisangle(currTime)
	{		
	  	this.axisangle -= 0.025 * currTime;
	};

	upbaseangle(currTime)
	{		
		this.baseangle -= 1.5 * Math.PI/15 * currTime;
	};

	downbaseangle(currTime)
	{			
		this.baseangle += 1.5 * Math.PI/15 * currTime;		
	};

	read_event()
	{
		switch(this.activeevent)
		{
			case this.event.DEF:
			this.active = false;
			break;

			case this.event.HALF:
			this.setstate(this.state.PICKDOWN);
			break;

			case this.event.PICKED_UP:
			this.setstate(this.state.PICKUP);
			this.carAttached = true;
			this.scene.car.height = 15;
			this.scene.car.x = 0;
			this.scene.car.z = 17;
			break;

			case this.event.UP:
			this.setstate(this.state.GO_BACK);
			break;
		}
	};

	statemachine(currTime)
	{	

		switch(this.activestate)
		{
			case this.state.STOPPED:
			break;

			case this.state.GO:
			this.active = true;
			if(this.baseangle > -180)
			{
				this.upbaseangle(currTime);
			}
			else
			{
				this.eventhappens(this.event.HALF);
			}
			break;

			case this.state.GO_BACK:
			if(this.baseangle < 0)
				{
					this.downbaseangle(currTime);
				}
				else
				{
					this.eventhappens(this.event.DEF);
					this.carAttached = false;
					this.scene.car.drop(currTime);	
				}
				break;

			case this.state.PICKDOWN:
			if(this.axisangle < 70)
				{
					this.upaxisangle(currTime);
				}
				else
				{
					this.eventhappens(this.event.PICKED_UP);
				}
				break;
			
			case this.state.PICKUP:
			if(this.axisangle > 0)
				{
					this.downaxisangle(currTime);
				}
				else
				{
					this.eventhappens(this.event.UP);
				}
				break;			
		}
	};
};