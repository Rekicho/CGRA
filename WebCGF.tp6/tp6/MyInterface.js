class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor () {
 		super();
 	}
	
	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		super.init(application);

		this.gui = new dat.GUI();

		this.gui.add(this.scene, 'displayAxis');

		var group=this.gui.addFolder("Lights");
		group.open();

		group.add(this.scene, 'light1');
		group.add(this.scene, 'light2');
		group.add(this.scene, 'light3');
		group.add(this.scene, 'light4');
		group.add(this.scene, 'light5');

		this.gui.add(this.scene,"currVehicleAppearance",this.scene.vehicleAppearanceList);

		this.initKeys();

		return true;
	};

	initKeys() 
	{
		this.scene.gui=this;
		this.processKeyboard=function(){};
		this.activeKeys={};
	};
	
	processKeyDown(event) 
	{
		this.activeKeys[event.code]=true;
	};

	processKeyUp(event) 
	{
		this.activeKeys[event.code]=false;
	};

	isKeyPressed(keyCode) 
	{
		return this.activeKeys[keyCode] || false;
	};
};