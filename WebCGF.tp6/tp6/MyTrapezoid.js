/**
 * MyTrapezoid
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTrapezoid extends CGFobject
{
	constructor(scene,B,offr,offl,h,depth) 
	{
		super(scene);
		
		this.B=B;
		this.h=h;
		this.offr=offr;
		this.offl=offl;
		this.depth=depth; 
		

		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [

	
				0, 0, this.depth,
				this.B, 0, this.depth,
				this.B - this.offr,this.h, this.depth,
				this.offl, this.h,this.depth,
		//back face
				0, 0,0,
				this.B, 0, 0,
				this.B - this.offr,this.h,0,
				this.offl, this.h,0
				];

		this.normals = [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1
		];

		this.indices = [

	//front face
				0, 1, 2, 
				0, 2, 3,

	//back face
				4, 6, 5,
				4, 7, 6,
	//top right
				1, 5, 2,
				2, 5, 6,
	//top
				3, 2, 6,
				6, 7, 3,
	//top left
				3, 4, 0,
				7, 4, 3,
	//bottom
				1, 0, 5,
				5, 0, 4
			];

		/*this.texCoords = [
				this.minS, this.maxT,
      			this.maxS, this.maxT,
      			this.minS, this.minT,
      			this.maxS, this.minT
		];*/
			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
