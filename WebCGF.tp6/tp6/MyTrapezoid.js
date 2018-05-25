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
		        0, 0, this.depth,
		        0, 0, this.depth,
		        
				this.B, 0, this.depth,
				this.B, 0, this.depth,
				this.B, 0, this.depth,

				this.B - this.offr,this.h, this.depth,
				this.B - this.offr,this.h, this.depth,
				this.B - this.offr,this.h, this.depth,

				this.offl, this.h,this.depth,
				this.offl, this.h,this.depth,
				this.offl, this.h,this.depth,
		
				0, 0,0,
				0, 0,0,
				0, 0,0,

				this.B, 0, 0,
				this.B, 0, 0,
				this.B, 0, 0,

				this.B - this.offr,this.h,0,
				this.B - this.offr,this.h,0,
				this.B - this.offr,this.h,0,

				this.offl, this.h,0,
				this.offl, this.h,0,
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
				0, 0, 1,

				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,

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
				0, 3, 6,
				0, 6, 9,


		//back face
				15, 12, 21,
				15, 21, 18,

		//right
				4, 16, 19,
				4, 19, 7,

		//left
				13, 1, 10,
				13, 10, 22,

		//top
				8, 20, 23,
				8, 23, 11,

		//bottom
				14, 17, 5,
				14, 5, 2
				

		



			];

		this.texCoords = [

			//vertice 0
				0,1,
				1,1,
				0,0,
			//vertice 1
				1,1,
				0,1,
				1,0,
			//vertice 2
				1 - this.offr/this.B,0,
				0,0,
				1,1,
			//vertice 3
				this.offl/this.B,0,
				1,0,
				0,1,
			//vertice 4
				1,1,
				0,1,
				0,1,
			//vertice 5
				0,1,
				1,1,
				1,1,
			//vertice 6
				this.offl/this.B,0,
				1,0,
				1,0,
			//vertice 7
				1 - this.offr/this.B,0,
				0,0,
				0,0




      			
		];
			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

	

};