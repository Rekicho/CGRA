/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject
{
	constructor(scene,chassistexture,paneltexture) 
	{
		super(scene);
		this.wheel = new MyWheel(scene);
		this.chassis = new MyChassis(scene);
		this.headlight = new MyLamp(scene,20,20);
		this.sidepanel = new MyTrapthing(scene,7.2,-0.1,-0.35,0.45,1.05);
		this.backpanel = new MyTrapthing(scene,1.9,0,0,1.1,1.1);

		this.mirror = new MyTrapezoid(scene,1,0.2,0.2,0.3,0.5);
		this.placa = new MyTrapezoid(scene,2,0.35,0.35,1.6,0.1);
		this.partebaixo = new MyTrapezoid(scene,3.8,1.17,1.17,6.95,0.05);
		this.partebaixot = new MyTrapezoid(scene,4,0.95,0.95,2.59,0.05);

		this.box = new MyUnitCubeQuad(scene);

		this.paneltexture = paneltexture;
		this.chassis.setTexture(chassistexture);

		this.boxtexture = new CGFappearance(this.scene);
		this.boxtexture.loadTexture("../resources/images/box.png"); 
		this.boxtexture.setAmbient(1,1,1,1);

		this.position = 0;
		this.velocity = 0;
		this.steer = 0;
		this.wheelSteer = 0;
	};

	display()
	{	
	//WHEEL FRONT LEFT
		this.scene.pushMatrix();
 			this.scene.translate(6.5,0,-2);
 			this.scene.rotate(this.wheelSteer,0,1,0);
 			this.scene.rotate(-this.position / Math.PI,0,0,1); //Raio(0.5) * 2 * pi = Perimetro = pi 
			this.wheel.display();
		this.scene.popMatrix();

	//WHEEL FRONT RIGHT
		this.scene.pushMatrix();
 			this.scene.translate(6.5,0,2);
 			this.scene.rotate(this.wheelSteer,0,1,0);
 			this.scene.rotate(-this.position / Math.PI,0,0,1);
			this.wheel.display();
		this.scene.popMatrix();

	//WHEEL BACK LEFT
		this.scene.pushMatrix();
 		this.scene.translate(-1,0,-3.2);
 		this.scene.scale(1.5,1.5,1.5);
 		this.scene.rotate(-this.position / Math.PI,0,0,1);
		this.wheel.display();
		
		this.scene.popMatrix();

	//WHEEL BACK RIGHT
		this.scene.pushMatrix();

 		this.scene.translate(-1,0,3.2);
 		this.scene.scale(1.5,1.5,1.5);
 		this.scene.rotate(-this.position / Math.PI,0,0,1);
		this.wheel.display();
		
		this.scene.popMatrix();

	//CHASSIS
		this.scene.pushMatrix();
		this.chassis.display();

		this.scene.popMatrix();



	//HEADLIGHTS

		//FRONT LEFT
			this.scene.pushMatrix();

			this.scene.translate(7.5,0.3,-0.5);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(0.4,0.4,0.4);
			this.headlight.display();

			this.scene.popMatrix();

		//FRONT RIGHT
			this.scene.pushMatrix();

			this.scene.translate(7.5,0.3,0.5);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(0.4,0.4,0.4);
			this.headlight.display();

			this.scene.popMatrix();

		//ROOF LEFT
			this.scene.pushMatrix();

			this.scene.translate(2.9,3,-0.5);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(0.5,0.5,0.5);
			this.headlight.display();

			this.scene.popMatrix();


		//ROOF RIGHT
			this.scene.pushMatrix();

			this.scene.translate(2.9,3,0.5);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.scale(0.5,0.5,0.5);
			this.headlight.display();

			this.scene.popMatrix();



	//FLOOR
		//FRONT
			this.scene.pushMatrix();

			this.scene.translate(0,0,-1.9);
			this.scene.rotate(-Math.PI/2,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			
			this.partebaixo.display();

			this.scene.popMatrix();
			
		//BACK
			this.scene.pushMatrix();

			this.scene.translate(0,0,-2);
			this.scene.rotate(Math.PI/2,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			
			this.partebaixot.display();

			this.scene.popMatrix();



	//PANELS

			this.paneltexture.apply();
		//SIDE
			//left
			this.scene.pushMatrix();

			this.scene.translate(-0.1,0,-1.9);
			this.scene.rotate((Math.PI * -10)/180,0,1,0);
			this.scene.rotate((Math.PI * -15)/180,1,0,0);
			this.sidepanel.display();

			this.scene.popMatrix();

			//right
			this.scene.pushMatrix();

			this.scene.translate(-0.1,0,1.9);
			this.scene.rotate((Math.PI * 10)/180,0,1,0);
			this.scene.rotate((Math.PI * 15)/180,1,0,0);
			this.sidepanel.display();

			this.scene.popMatrix();


		//BACK
			this.scene.pushMatrix();
			
			this.scene.translate(-2.7,0.05,-0.95)
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.backpanel.display();

			this.scene.popMatrix();


		//ROOF
			this.scene.pushMatrix();
			this.scene.translate(0.9,2.55,-1);
			this.scene.rotate(-Math.PI/2,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.placa.display();

			this.scene.popMatrix();


	//MIRRORS
		//LEFT
			this.scene.pushMatrix();

			this.scene.translate(4.7,0.6,-2.3);
			this.scene.rotate(-Math.PI/2,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.mirror.display();

			this.scene.popMatrix();


		//RIGHT
			this.scene.pushMatrix();
			
			this.scene.translate(4.7,0.6,1.3);
			this.scene.rotate(-Math.PI/2,0,0,1);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.mirror.display();

			this.scene.popMatrix();


	//BIG BOX
			this.scene.pushMatrix();
			
			this.scene.translate(-1.5,0.5,0);
			
			this.boxtexture.apply();
			this.scene.scale(2,1,2);
			this.box.display();

			this.scene.popMatrix();
			
	//SMALL BOX
			this.scene.pushMatrix();
			
			this.scene.translate(-1.5,1.5,0);
			
			this.boxtexture.apply();
			
			this.box.display();

			this.scene.popMatrix();
	};

	setchassisTexture(texture)
	{
		this.chassis.setTexture(texture);
	};

	setpanelTexture(texture)
	{
		this.paneltexture = texture;	
	};

	getPosition()
	{
		return this.position;
	};

	move()
	{
		this.position += this.velocity;
	};

	getVelocity()
	{
		return this.velocity;
	};

	setVelocity(velocity)
	{
		this.velocity = velocity;
	};

	getSteer()
	{
		return this.steer;
	};

	addSteer(steer)
	{
		this.steer += steer;
	};

	getWheelSteer()
	{
		return this.wheelSteer;
	};

	addWheelSteer(wheelSteer)
	{
		let temp = this.wheelSteer;
		temp += wheelSteer;

		if(temp < Math.PI/4 && temp > -Math.PI/4)
			this.wheelSteer = temp;	
	};
};
