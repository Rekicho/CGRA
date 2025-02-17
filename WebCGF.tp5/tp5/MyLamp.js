/**
 * MyLamp
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyLamp extends CGFobject
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

		for (let j = 0; j <= this.stacks; j++) 
		{
			let div = j/this.stacks;
			let edge = this.slices * j;
			let nextedge = this.slices * (j + 1);

			for(let i = 0; i < this.slices; i++)
			{
				let alpha = i * ang;
				let raiz = Math.sqrt(1-Math.pow(div,2));

				this.vertices.push(raiz * Math.cos(alpha), raiz * Math.sin(alpha), div);
				this.normals.push(raiz * Math.cos(alpha), raiz * Math.sin(alpha), div);

				if(j != this.stacks)
				{
					this.indices.push(edge + i, edge + i + 1, nextedge + i);
				
					if (i == this.slices - 1)
						this.indices.push(edge, edge + i + 1, edge + i);

					else this.indices.push(nextedge + i + 1, nextedge + i, edge + i + 1);
				}
			}
		}

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
