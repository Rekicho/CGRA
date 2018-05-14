/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends Plane
{
	constructor(scene,nrDivs,minS, maxS, minT, maxT) 
	{
		super(scene,nrDivs,minS, maxS, minT, maxT);

		this.texture = new CGFappearance(this.scene);
		this.texture.setDiffuse(1,1,1,1);
		this.texture.setSpecular(1,1,1,1);
		this.texture.setAmbient(1,1,1,1);
		this.texture.loadTexture("../resources/images/sand.png");
		this.texture.setTextureWrap('REPEAT','REPEAT');
	};

	display()
	{	
		this.scene.pushMatrix();
			this.texture.apply();
			this.scene.scale(50,1,50);
			this.scene.rotate(-Math.PI/2,1,0,0);
			this.drawElements(this.primitiveType);		
		this.scene.popMatrix();

	};

	
};
