/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends Plane
{

	constructor(scene,nrDivs,minS, maxS, minT, maxT,altimetry) 
	{
		super(scene,nrDivs,minS, maxS, minT, maxT);

		if(altimetry == null || nrDivs + 1 != altimetry.length || nrDivs + 1 != altimetry[0].length )
			this.defaultAltimetry(nrDivs);

		else this.altimetry = altimetry;
   		
		this.texture = new CGFappearance(this.scene);
		this.texture.loadTexture("../resources/images/sand.png");
		this.texture.setAmbient(1,1,1,1);

		this.buffers();
	};

	defaultAltimetry(nrDivs)
	{
		var alti = [];

		for(var i = 0; i <= nrDivs ; i++)
		{
			alti.push([0]);
			for(var j = 0; j <= nrDivs ; j++)
				alti[i][j] = 0;
		}	
		this.altimetry = alti;
	};

	buffers()
	{
		this.vertices = [];
		this.normals = [];
		
		this.texCoords = [];

		var yCoord = 0.5;

		for (var j = 0; j <= this.nrDivs; j++) 
		{
			var xCoord = -0.5;
			for (var i = 0; i <= this.nrDivs; i++) 
			{
				this.vertices.push(xCoord, yCoord,this.altimetry[j][i]);
				
				this.normals.push(0,0,1);
							
				this.texCoords.push(this.minS + ((this.maxS - this.minS) * (i / this.nrDivs)));
				this.texCoords.push(this.minT + ((this.maxT - this.minT) * (j / this.nrDivs)));

				xCoord += this.patchLength;
			}
			yCoord -= this.patchLength;
		}
			
		this.indices = [];
		var ind=0;

		for (var j = 0; j < this.nrDivs; j++) 
		{
			for (var i = 0; i <= this.nrDivs; i++) 
			{
				this.indices.push(ind);
				this.indices.push(ind+this.nrDivs+1);

				ind++;
			}

			if (j+1 < this.nrDivs)
			{			
				this.indices.push(ind+this.nrDivs);
				this.indices.push(ind);
			}
		}
		
		this.primitiveType = this.scene.gl.TRIANGLE_STRIP;

		this.initGLBuffers();
	};

	display()
	{	
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(50,50,1);
		this.texture.apply();
		this.drawElements(this.primitiveType);
		this.scene.popMatrix();
	};
};