/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class myTable extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.quad=new MyUnitCubeQuad(this.scene);
		this.quad.initBuffers();
	};

	display()
	{
	    this.scene.pushMatrix();
	    this.scene.translate(0,1.75,0);
	    this.scene.scale(5,0.3,3);
	    this.quad.display();
	    this.scene.popMatrix();
	    this.scene.pushMatrix();
	    this.scene.translate(2,0,1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();
	    this.scene.pushMatrix();
	    this.scene.translate(-2,0,1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();
	    this.scene.pushMatrix();
	    this.scene.translate(2,0,-1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();
	    this.scene.pushMatrix();
	    this.scene.translate(-2,0,-1);
	    this.scene.scale(0.3,3.5,0.3);
	    this.quad.display();
	    this.scene.popMatrix();
	}
};