/**
 * MyCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinder extends CGFobject
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

		this.texCoords = [];

		var ang = (2 * Math.PI) / this.slices;

		for (let j = 0; j <= this.stacks; j++) 
		{
			let div = j/this.stacks;
			let edge = this.slices * j;
			let nextedge = this.slices * (j + 1);

			for(let i = 0; i < this.slices; i++)
			{
				let alpha = i * ang;

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), div);
				this.normals.push(Math.cos(alpha), Math.sin(alpha), 0);

				if(j != this.stacks)
				{
					this.indices.push(edge + i, edge + i + 1, nextedge + i);
				
					if (i == this.slices - 1)
						this.indices.push(edge, edge + i + 1, edge + i);

					else this.indices.push(nextedge + i + 1, nextedge + i, edge + i + 1);
				}

				this.texCoords.push(i/this.slices,div);
			}
		}

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
