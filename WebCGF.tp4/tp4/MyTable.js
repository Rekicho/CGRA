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

		this.tableAppearance = new CGFappearance(this.scene);
		this.tableAppearance.loadTexture("../resources/images/table.png");
		this.tableAppearance.setDiffuse(0.9,0.9,0.9,1);
		this.tableAppearance.setSpecular(0.1,0.1,0.1,1);	
		this.tableAppearance.setShininess(120);

		this.materialMetalic = new CGFappearance(this.scene);
		this.materialMetalic.setAmbient(0.3,0.3,0.3,1);
		this.materialMetalic.setDiffuse(0.58,0.63,0.67,1);
		this.materialMetalic.setSpecular(0.8,0.8,0.8,1);	
		this.materialMetalic.setShininess(10);
	};

	display()
	{
	    this.scene.pushMatrix();
	    this.tableAppearance.apply();
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