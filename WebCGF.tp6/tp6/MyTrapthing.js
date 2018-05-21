/**
 * MyTrapthing
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTrapthing extends CGFobject
{
	constructor(scene,B,offr,offl,hr,hl) 
	{
		super(scene);
		
		this.B=B;
		this.offr=offr;
		this.offl=offl;
		this.hr=hr;
		this.hl=hl;

		this.initBuffers();


		
	};

	initBuffers() 
	{
		this.vertices = [

		   0, 0, 0,
		   this.B, 0, 0,
		   this.B - this.offr, this.hr, 0,
		   this.offl, this.hl,0, 

		   //para fazer a face de tras
		    0, 0, 0,
		   this.B, 0, 0,
		   this.B - this.offr, this.hr, 0,
		   this.offl, this.hl,0

				];

		this.normals = [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,

				0, 0, -1,
				0, 0, -1,
				0, 0, -1,
				0, 0, -1,
			
		];

		this.indices = [

			//front face
				0,1,2,
				0,2,3,

			//back face
				5,4,6,
				6,4,7
				


			];

		this.texCoords = [

				0,1,
				1,1,
				1,0,
				0,0,

				1,1,
				0,1,
				0,0,
				1,0,


      			
		];
			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

	

};
