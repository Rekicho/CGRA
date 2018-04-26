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

		var ang = (2 * Math.PI) / this.slices;

		for (let j = 0; j < this.stacks; j++) 
		{

			for(let i = 0; i < this.slices; i++)
			{
				let alpha = i * ang;
				let div = j/this.stacks;

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), div);
				this.normals.push(Math.cos(alpha), Math.sin(alpha), 0);
			}

			for(let i = 0; i < this.slices; i++)
			{
				let inicio = this.slices*2*j+2*i;

				this.indices.push(inicio);
				this.indices.push(inicio+1);
				this.indices.push(inicio+2);

				this.indices.push(inicio+3);
				this.indices.push(inicio+2);
				this.indices.push(inicio+1);
			}
		}



		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
