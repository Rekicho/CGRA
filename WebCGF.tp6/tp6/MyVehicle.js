/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.wheel = new MyWheel(scene);
	};

	display()
	{
		this.wheel.display();
	};
};
