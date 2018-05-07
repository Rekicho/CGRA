/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends Plane
{



	//this.terrain = new MyTerrain(this,9,0,50,0,50); e a chamada a por no lighting scene, also
	//comentar o apply do default material

	constructor(scene,nrDivs,minS, maxS, minT, maxT) 
	{
		super(scene,nrDivs,minS, maxS, minT, maxT);
		//this.texture = new CGFappearance(this.scene);
		//this.texture.setAmbient(1,1,1,1);

		this.texture = new CGFappearance(this.scene);
		this.texture.loadTexture("../resources/images/floor.png");
	};

	display()
	{	

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		
		
	
		this.drawElements(this.primitiveType);

		this.texture.apply();
		this.scene.popMatrix();

	};

	
};
