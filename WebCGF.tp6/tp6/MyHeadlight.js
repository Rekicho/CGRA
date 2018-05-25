/**
 * MyHeadlight
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyHeadlight extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.back = new MyLamp(scene,20,20);
		this.front = new MyCircle(scene,20,20);

		this.texture = new CGFappearance(this.scene);
		this.texture.loadTexture("../resources/images/headlight.png");
		this.texture.setAmbient(1,1,1,1);

		this.backtexture = new CGFappearance(this.scene);
		this.backtexture.loadTexture("../resources/images/headlightback.png");
		this.backtexture.setAmbient(1,1,1,1);
	};

	display()
	{
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.backtexture.apply();
		this.back.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.texture.apply();
		this.front.display();
		this.scene.popMatrix();

	};
};