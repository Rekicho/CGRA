var FPS = 60;

class LightingScene extends CGFscene 
{
	constructor()
	{
		super();
	};

	init(application) 
	{
		super.init(application);

		this.displayAxis = false;
		this.displayObjetos = false;

		this.light1=false; 
		this.light2=false; 
		this.light3=false; 
		this.light4=false; 
		this.light5=false;

		this.enableTextures(true);

		this.initCameras();

		this.initLights();

		this.gl.clearColor(0.529412, 0.692237, 0.921569, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// Materials
		this.materialDefault = new CGFappearance(this);

		this.camo = new CGFappearance(this);
		this.camo.loadTexture("../resources/images/camo.png");
		this.camo.setAmbient(1,1,1,1);

		this.nobrega = new CGFappearance(this);
		this.nobrega.loadTexture("../resources/images/nobrega.png");
		this.nobrega.setAmbient(1,1,1,1);

		this.deadpool = new CGFappearance(this);
		this.deadpool.loadTexture("../resources/images/deadpool.png");
		this.deadpool.setAmbient(1,1,1,1);

		this.vehicleAppearances = [this.camo, this.nobrega, this.deadpool];
		this.vehicleAppearanceList = {};
		this.vehicleAppearanceList["camo"] = 0;
		this.vehicleAppearanceList["nobrega"] = 1;
		this.vehicleAppearanceList["deadpool"] = 2;

		this.currVehicleAppearance = 0;

		this.chassistexture = new CGFappearance(this);
		this.chassistexture.loadTexture("../resources/images/chassis.png");
		this.chassistexture.setAmbient(1,1,1,1);

		//Scene elements

		//Carro
		this.car = new MyVehicle(this, this.chassistexture, this.camo);
		
		//Terreno

		this.altimetry= [[ 4.3 , 4.5 , 2.8 , 2.2 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.6 , 4.9 , 9.7 , 1.1 ],
						 [ 9.0 , 4.6 , 0.7 , 0.2 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 2.5 , 1.2 , 9.1 , 4.2 ],
						 [ 3.2 , 3.5 , 1.3 , 8.5 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 2.6 , 5.9 , 8.0 , 3.2 ],
						 [ 3.9 , 3.8 , 3.4 , 3.6 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 5.0 , 1.5 , 5.4 , 7.3 ],
						 [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
						 [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
						 [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
						 [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
						 [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
						 [ 7.8 , 1.7 , 8.6 , 9.7 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.4 , 5.2 , 1.5 , 7.8 ],
						 [ 2.5 , 8.1 , 9.2 , 4.6 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.4 , 4.2 , 0.9 , 6.8 ],
						 [ 3.4 , 5.4 , 4.8 , 0.1 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 7.6 , 7.1 , 3.3 , 6.5 ],
						 [ 2.2 , 4.7 , 6.9 , 8.9 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 5.2 , 6.4 , 1.1 , 9.6 ],
						];
		this.terrain = new MyTerrain(this,12,0,5,0,5,this.altimetry);

		//Guindaste
		this.crane = new MyCrane(this);

		//Test Obejcts

		this.testAppearance = new CGFappearance(this);
		this.testAppearance.loadTexture("../resources/images/test.png");
		this.testAppearance.setAmbient(1,1,1,1);

		this.testCylinderOut = new MyCylinder(this,20,20,true);
		this.testCylinderIn = new MyCylinder(this,20,20,false);
		this.testLamp = new MyLamp(this,20,20);
		this.testTrap = new MyTrapezoid(this,5,1,2,2,3);
		this.testCube = new MyUnitCubeQuad(this);

		this.setUpdatePeriod(1000/FPS);
	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);
		
		this.lights[0].setPosition(4, 6, 1, 1);
	
		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	
		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);

		this.lights[4].setPosition(0, 4, 7.5, 1);

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1.0, 1.0, 0.0, 1.0);

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);

		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setConstantAttenuation(0);
		this.lights[2].setLinearAttenuation(1);
		this.lights[2].setQuadraticAttenuation(0);

		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setSpecular(1.0, 1.0, 0.0, 1.0);
		this.lights[3].setConstantAttenuation(0);
		this.lights[3].setLinearAttenuation(0);
		this.lights[3].setQuadraticAttenuation(1);
	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();

		if(this.light1)
			this.lights[0].enable();

		else this.lights[0].disable();

		if(this.light2)
			this.lights[1].enable();

		else this.lights[1].disable();

		if(this.light3)
			this.lights[2].enable();

		else this.lights[2].disable();

		if(this.light4)
			this.lights[3].enable();

		else this.lights[3].disable();

		if(this.light5)
			this.lights[4].enable();

		else this.lights[4].disable();
	}


	display() 
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		if(this.displayAxis)
			this.axis.display();

		this.materialDefault.apply();

		//Scene elements

		//CAR
		this.pushMatrix();
			this.translate(this.car.x,this.car.height,this.car.z);
			this.rotate(this.car.getSteer(),0,1,0);
				this.rotate(-0.07,0,0,1);
				this.translate(0,0.4,0);
				if(!this.crane.carAttached)
						this.car.display();
		this.popMatrix();

		//TERRAIN
		this.pushMatrix();
		this.terrain.display();
		this.popMatrix();

		//CRANE
		this.pushMatrix();
		this.scale(2,2,2);
		this.crane.display();
		this.popMatrix();

		//Test Objects

		if(this.displayObjetos)
		{
			//Cilindro
			this.pushMatrix();
				this.translate(-24,1,-7);
				this.rotate(-Math.PI/10,0,1,0);
				this.rotate(Math.PI/2,1,0,0);
				this.testAppearance.apply();
				this.testCylinderIn.display();
				this.testCylinderOut.display();
			this.popMatrix();

			//Semiesfera
			this.pushMatrix();
				this.translate(-24,0,-5);
				this.rotate(-Math.PI/2,0,1,0);
				this.rotate(-Math.PI/2,1,0,0);
				this.testAppearance.apply();
				this.testLamp.display();
			this.popMatrix();

			//Trapézio
			this.pushMatrix();
				this.translate(-23.5,0,-4);
				this.rotate(-Math.PI/2,0,1,0);
				this.scale(0.5,0.5,0.5);
				this.testAppearance.apply();
				this.testTrap.display();
			this.popMatrix();

			//Cubo
			this.pushMatrix();
				this.translate(-24.5,0.5,-1);
				this.testAppearance.apply();
				this.testCube.display();
			this.popMatrix();
		}

		// ---- END Scene drawing section
	};

	checkcar()
	{
		if(this.car.getVelocity() == 0 && this.car.readyforpickup() && !this.crane.active)
		{
			this.crane.setstate(this.crane.state.GO);
		}
	};

	update(currTime)
	{
		this.lastTime = this.lastTime || 0;
		this.deltaTime = currTime - this.lastTime;
		this.lastTime = currTime;
		this.checkKeys();
		this.crane.update(this.deltaTime);
		this.checkcar();
		this.car.setpanelTexture(this.vehicleAppearances[this.currVehicleAppearance]);
	};

	checkKeys()
	{
		var text="Keys pressed: ";
		var keysPressed=false;

		this.car.setVelocity(0);

		if (this.gui.isKeyPressed("KeyW"))
		{
			text+=" W ";
			keysPressed=true;
			
			this.car.setVelocity(this.deltaTime / 100);
		}else if (this.gui.isKeyPressed("KeyS"))
		{
			text+=" S ";
			keysPressed=true;

			this.car.setVelocity(-this.deltaTime / 100);
		}
		else
		{
			this.car.hold_up(this.deltaTime/1000.0);
		}

		if (this.gui.isKeyPressed("KeyA"))
		{
			text+=" A ";
			keysPressed=true;

			this.car.addWheelSteer(this.deltaTime / 1000);

			if(this.car.getVelocity() > 0)
				this.car.addSteer(this.deltaTime / 1000);

			if(this.car.getVelocity() < 0)
				this.car.addSteer(-this.deltaTime / 1000);

			
		}else if (this.gui.isKeyPressed("KeyD"))
		{
			text+=" D ";
			keysPressed=true;

			this.car.addWheelSteer(-this.deltaTime / 1000);

			if(this.car.getVelocity() > 0)
				this.car.addSteer(-this.deltaTime / 1000);

			if(this.car.getVelocity() < 0)
				this.car.addSteer(this.deltaTime / 1000);
		}
		else
		{
			this.car.reset_wheels(this.deltaTime/1000.0);
		}

		this.car.move(this.deltaTime/1000.0);
		
		if (keysPressed)
			console.log(text);
	}
};
