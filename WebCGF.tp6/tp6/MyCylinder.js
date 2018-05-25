/**
 * MyCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinder extends CGFobject
{
	constructor(scene, slices, stacks,outside,minS, maxS, minT, maxT)
	{
		super(scene);
		this.slices = slices;
		this.stacks = stacks;
		this.outside = outside;

		this.minS = minS || 0.0;
        this.minT = minT || 0.0;
        this.maxS = maxS || 1.0;
        this.maxT = maxT || 1.0;

		this.initBuffers();
	}

	initBuffers() 
	{
		this.vertices = [];

		this.normals = [];

		this.indices = [];

		this.texCoords = [];

		var ang = (2 * Math.PI) / this.slices;

		var textureS = 0;
		var Sincrement = 1/this.slices;
		var Tincrement = 1/this.stacks;
		var previousT = 0;
		var nextT = 0;

		var alpha = 0;

		for (var j = 0; j < this.stacks; j++) 
		{
		    nextT += Tincrement;

		    for (var i = j*this.slices*4; i < (j+1)*this.slices*4; i += 4) 
		    {
		    	var z = j/this.stacks;
		    	var nextZ = (j+1)/this.stacks;
		    	
                //vertice 1 da face 0
                this.vertices.push(Math.cos(alpha), Math.sin(alpha), z);
                this.normals.push(Math.cos(alpha), Math.sin(alpha), 0);
               
                this.texCoords.push(1 - textureS, previousT);
               
                //vertice 1 da face 1
                this.vertices.push(Math.cos(alpha), Math.sin(alpha), nextZ);
                this.normals.push(Math.cos(alpha), Math.sin(alpha), 0);
            
                this.texCoords.push(1 - textureS, nextT);
        
                alpha += ang;
                textureS += Sincrement;

                //vertice 2 da face 0
                this.vertices.push(Math.cos(alpha), Math.sin(alpha), z);
                this.normals.push(Math.cos(alpha), Math.sin(alpha), 0);
               
                this.texCoords.push(1 - textureS, previousT);

                //vertice 2 da face 1
                this.vertices.push(Math.cos(alpha), Math.sin(alpha), nextZ);
                this.normals.push(Math.cos(alpha), Math.sin(alpha), 0);
       
                this.texCoords.push(1 - textureS, nextT);
				
				if(this.outside)
				{
					 this.indices.push(i + 2,i + 1,i);
               		 this.indices.push(i + 1,i + 2,i + 3);
				}
				
				else
				{
 					this.indices.push(i, i + 1 ,i + 2);
                	this.indices.push(i + 3,i + 2,i + 1);
				}
            }

            textureS = 0;
            previousT = nextT;
        }

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
