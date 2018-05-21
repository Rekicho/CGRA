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

		this.light1=false; 
		this.light2=false; 
		this.light3=false; 
		this.light4=false; 
		this.light5=false;
		this.displayAxis = false;

		this.carposition = 0;
		this.carvelocity = 0;

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

		this.texture = new CGFappearance(this);
		this.texture.loadTexture("../resources/images/camo.png");
		this.texture.setAmbient(1,1,1,1);

		//Scene elements

		this.car = new MyVehicle(this, this.materialDefault, this.texture);
		this.terrain = new MyTerrain(this,8,0,5,0,5);

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
			this.rotate(this.car.getSteer(),0,1,0);
			this.translate(this.carposition,1,0);
				this.rotate(-0.07,0,0,1);
				this.translate(0,1.5,0);
				this.car.display();
		this.popMatrix();

		//TERRAIN
		this.pushMatrix();
		this.terrain.display();
		this.popMatrix();

		// ---- END Scene drawing section
	};

	update(currTime)
	{
		this.lastTime = this.lastTime || 0;
		this.deltaTime = currTime - this.lastTime;
		this.lastTime = currTime;
		this.checkKeys();
	};

	checkKeys()
	{
		var text="Keys pressed: ";
		var keysPressed=false;

		this.carvelocity = 0;

		if (this.gui.isKeyPressed("KeyW"))
		{
			text+=" W ";
			keysPressed=true;
			
			this.carvelocity = this.deltaTime / 100;
		}

		if (this.gui.isKeyPressed("KeyS"))
		{
			text+=" S ";
			keysPressed=true;

			this.carvelocity = -this.deltaTime / 100;
		}

		if (this.gui.isKeyPressed("KeyA"))
		{
			text+=" A ";
			keysPressed=true;

			if(this.carvelocity > 0)
				this.car.addSteer(this.deltaTime / 1000);

			if(this.carvelocity < 0)
				this.car.addSteer(-this.deltaTime / 1000);
		}

		if (this.gui.isKeyPressed("KeyD"))
		{
			text+=" D ";
			keysPressed=true;

			if(this.carvelocity > 0)
				this.car.addSteer(-this.deltaTime / 1000);

			if(this.carvelocity < 0)
				this.car.addSteer(this.deltaTime / 1000);
		}

		this.carposition += this.carvelocity;
		
		if (keysPressed)
			console.log(text);
	}
};
