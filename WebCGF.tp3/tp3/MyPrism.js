/**
 * MyPrism
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrism extends CGFobject
{
	constructor(scene,slices,stacks) 
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;
		
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [];

		this.normals = [];

		this.indices = [];

		var ang = (2 * Math.PI) / this.slices;

		for(let i = 0; i < this.slices; i++)
		{
			let alpha = i * ang;

			this.vertices.push(Math.cos(alpha), Math.sin(alpha));
			this.vertices.push(0);
			this.vertices.push(Math.cos(alpha));
			this.vertices.push(Math.sin(alpha));
			this.vertices.push(0);

			let beta = (alpha + (ang * (i + 1))) / 2;

			this.normals.push(Math.cos(beta));
			this.normals.push(Math.sin(beta));
			this.normals.push(0);

			this.normals.push(Math.cos(beta));
			this.normals.push(Math.sin(beta));
			this.normals.push(0);
		}

		for(let i = 0; i < this.slices; i++)
		{
			let alpha = i * ang;

			this.vertices.push(Math.cos(alpha));
			this.vertices.push(Math.sin(alpha));
			this.vertices.push(1);
			this.vertices.push(Math.cos(alpha));
			this.vertices.push(Math.sin(alpha));
			this.vertices.push(1);

			let beta = (alpha + (ang * (i + 1))) / 2;

			this.normals.push(Math.cos(beta));
			this.normals.push(Math.sin(beta));
			this.normals.push(0);

			this.normals.push(Math.cos(beta));
			this.normals.push(Math.sin(beta));
			this.normals.push(0);
		}

		for(let i = 0; i < this.slices; i++)
		{
			this.indices.push(i + 1);
			this.indices.push(i + 2);
			this.indices.push(i + (2 * this.slices) + 2);
		
			this.indices.push(i + 1);
			this.indices.push(i + (2 * this.slices) + 2);
			this.indices.push(i + (2 * this.slices) + 1);
		}

		console.log(this.indices.length);

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
