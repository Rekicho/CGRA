/**
 * MyRing
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyRing extends CGFobject
{
	constructor(scene, slices, min, max, front) 
	{
		super(scene);
		this.slices = slices;
		this.min = min;
		this.max = max;
		this.front = front;

		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [];

		this.normals = [];

		this.indices = [];

		this.texCoords = [];

		var ang = (2 * Math.PI) / this.slices;
	
		for(let i = 0; i < this.slices; i++)
		{
			let alpha = i * ang;

			this.vertices.push(Math.cos(alpha) * this.min, Math.sin(alpha) * this.min, 0);
			this.normals.push(0,0,1);

			this.vertices.push(Math.cos(alpha) * this.max, Math.sin(alpha) * this.max, 0);
			this.normals.push(0,0,1);

			if(i != this.slices - 1)
			{
				if(this.front)
				{
					this.indices.push((i*2),(i*2)+1,(i*2)+3);
					this.indices.push((i*2),(i*2)+3,(i*2)+2);
				}

				else
				{
					this.indices.push((i*2)+3,(i*2)+1,(i*2));
					this.indices.push((i*2)+2,(i*2)+3,(i*2));
				}
			}
	
			else
			{
				if(this.front)
				{
					this.indices.push((i*2),(i*2)+1,1);
					this.indices.push((i*2),1,0);
				}

				else
				{
					this.indices.push(1,(i*2)+1,(i*2));
					this.indices.push(0,1,(i*2));
				}
			}
		}

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
