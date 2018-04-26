/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTable extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.quad=new MyUnitCubeQuad(this.scene);
		this.quad.initBuffers();

		this.materialWood = new CGFappearance(this.scene);
		this.materialWood.setAmbient(0.3,0.3,0.3,1);
		this.materialWood.setDiffuse(0.87,0.72,0.53,1);
		this.materialWood.setSpecular(0.2,0.2,0.2,1);	
		this.materialWood.setShininess(120);

		this.materialMetalic = new CGFappearance(this.scene);
		this.materialMetalic.setAmbient(0.3,0.3,0.3,1);
		this.materialMetalic.setDiffuse(0.58,0.63,0.67,1);
		this.materialMetalic.setSpecular(0.8,0.8,0.8,1);	
		this.materialMetalic.setShininess(120);
	};

	display()
	{
	    this.scene.pushMatrix();
	    this.materialWood.apply();
	    this.scene.translate(0,3.5,0);
	    this.scene.scale(5,0.3,3);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.materialMetalic.apply();
	    this.scene.translate(2,1.75,1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.materialMetalic.apply();
	    this.scene.translate(-2,1.75,1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.materialMetalic.apply();
	    this.scene.translate(2,1.75,-1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.materialMetalic.apply();
	    this.scene.translate(-2,1.75,-1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();
	}
};