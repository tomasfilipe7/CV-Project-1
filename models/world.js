function worldModel( ) {
	
	var world = new emptyModelFeatures();
	world.name = "World";
	world.vertices = [

		// FRONT FACE
		 
		-6,  -0.25,  6,
        6,  -0.25,  6,
        6,  0.25,  6,

        6,  0.25,  6,
       -6,  0.25,  6,
       -6,  -0.25,  6,
       
       // TOP FACE
       -6,  0.25,  6,
        6,  0.25,  6,
        6,  0.25, -6,
        
        6,  0.25, -6,
       -6,  0.25,  -6,        
       -6,  0.25,  6,
       
       // BOTTOM FACE       
       -6,  -0.25, -6,       
        6,  -0.25, -6,       
        6,  -0.25,  6,

        6,  -0.25,  6,
       -6,  -0.25,  6,
       -6,  -0.25, -6,
       
       // LEFT FACE 
       -6,  0.25,  6,
       -6,  -0.25, -6,
       -6,  -0.25,  6,
        
       -6,  0.25,  6,
       -6,  0.25, -6,
       -6,  -0.25, -6,

       // RIGHT FACE 
        6,  0.25, -6,
        6,  -0.25,  6,
        6,  -0.25, -6,
        
        6,  0.25, -6,
        6,  0.25,  6,
        6,  -0.25,  6,
       
       // BACK FACE 
       -6,  0.25, -6,
        6,  -0.25, -6,
       -6,  -0.25, -6,

       -6,  0.25, -6,
        6,  0.25, -6,
        6,  -0.25, -6, 	 
	];

    world.colors = [
        // FRONT
        0, 0.7, 0.4,
        0, 0.7, 0.4,
        0, 0.7, 0.4,

        0, 0.7, 0.4,
        0, 0.7, 0.4,
        0, 0.7, 0.4,

        // TOP
        0, 0.9, 0.2,
        0, 0.9, 0.2,
        0, 0.9, 0.2,

        0, 0.9, 0.2,
        0, 0.9, 0.2,
        0, 0.9, 0.2,

        // BOTTOM
        0, 0.9, 0.2,
        0, 0.9, 0.2,
        0, 0.9, 0.2,

        0, 0.9, 0.2,
        0, 0.9, 0.2,
        0, 0.9, 0.2,

        // LEFT
        0, 0.4, 0.3,
        0, 0.4, 0.3,
        0, 0.4, 0.3,

        0, 0.4, 0.3,
        0, 0.4, 0.3,
        0, 0.4, 0.3,

        // RIGHT
        0, 0.4, 0.3,
        0, 0.4, 0.3,
        0, 0.4, 0.3,

        0, 0.4, 0.3,
        0, 0.4, 0.3,
        0, 0.4, 0.3,

        // BACK
        0, 0.7, 0.4,
        0, 0.7, 0.4,
        0, 0.7, 0.4,

        0, 0.7, 0.4,
        0, 0.7, 0.4,
        0, 0.7, 0.4,
    ];
	//computeVertexNormals( cube.vertices, cube.normals );

	return world;
}