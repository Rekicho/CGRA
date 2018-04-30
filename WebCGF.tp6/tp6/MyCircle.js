/**
 * MyCircle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCircle extends CGFobject
{
	constructor(scene,slices) 
	{
		super(scene);

		this.slices = slices;
		
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [];

		this.normals = [];

		this.indices = [];

		this.texCoords = [];

		var ang = (2 * Math.PI) / this.slices;

		this.vertices.push(0,0,0);
		this.normals.push(0,0,1);
		this.texCoords.push(0.5,0.5);
	
		for(let i = 0; i < this.slices; i++)
		{
			let alpha = i * ang;

			this.vertices.push(Math.cos(alpha), Math.sin(alpha), 0);
			this.normals.push(0,0,1);
			this.texCoords.push(0.5 + Math.cos(alpha) / 2, 0.5 - Math.sin(alpha) / 2);

			if(i != this.slices - 1)
				this.indices.push(0, i+1, i+2);

			else this.indices.push(1, 0, i+1)
		}

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
