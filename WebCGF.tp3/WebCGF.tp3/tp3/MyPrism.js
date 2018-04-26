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

		for (let j = 0; j < this.stacks; j++) 
		{

			for(let i = 0; i < this.slices; i++)
			{
				let alpha = i * ang;
				let beta = (i + 1) * ang;
				let div = j/this.stacks;

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), div);
				this.vertices.push(Math.cos(beta), Math.sin(beta), div);

				div = (j + 1) / this.stacks;

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), div);
				this.vertices.push(Math.cos(beta), Math.sin(beta), div);
			}

			for(let i = 0; i < this.slices; i++)
			{
				let teta = (i + 0.5) * ang;

				for(let k = 0; k < 4; k++)
					this.normals.push(Math.cos(teta), Math.sin(teta), 0);
			}

			for(let i = 0; i < this.slices; i++)
			{
				let inicio = this.slices*4*j+4*i;

				this.indices.push(inicio);
				this.indices.push(inicio+1);
				this.indices.push(inicio+2);

				this.indices.push(inicio+3);
				this.indices.push(inicio+2);
				this.indices.push(inicio+1);
			}
		}

		console.log(this.vertices.length);
		console.log(this.normals.length);
		console.log(this.indices.length);

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
