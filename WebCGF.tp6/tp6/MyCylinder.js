/**
 * MyCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinder extends CGFobject
{
	constructor(scene,slices,stacks, outside) 
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;
		this.outside = outside;
		
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
				this.texCoords.push(1- i/this.slices,div);

				if(j != this.stacks)
				{
					if(this.outside)
					{
						this.indices.push(edge + i, edge + i + 1, nextedge + i);
						
						if (i == this.slices - 1)
							this.indices.push(edge, edge + i + 1, edge + i);

						else this.indices.push(nextedge + i + 1, nextedge + i, edge + i + 1);
					}

					else
					{
						this.indices.push(nextedge + i, edge + i + 1, edge + i);
				
						if (i == this.slices - 1)
							this.indices.push(edge + i, edge + i + 1, edge);
						
						else this.indices.push(edge + i + 1, nextedge + i, nextedge + i + 1);
					}
				}
			}
		}

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
