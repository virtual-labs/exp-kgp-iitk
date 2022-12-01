var KGP50 = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    l1mesh: null,
    link5Mesh: null,
    link6Mesh: null,
    Cylinder1: null,
    Cylinder2: null,
    Cylinder3: null,
    Cylinder4: null,
    Cylinder7: null,
    BoxL5: null,
    Cylinder1L1: null,
    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.container = document.getElementById("canvas3d-view");
        this.scene.position.set(-200, -900, 0);
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;

//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(600, 300, -2800);   //
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);
//        
        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 1.5;
        this.controls.zoomSpeed = 1.5;
        this.controls.panSpeed = 1.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.7;
        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);
// Stats preparing
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '60px';
        this.container.appendChild(this.stats.domElement);

// create scene

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        axes = buildAxes(200);
        //axes.position = mesh.position;
        this.scene.add(axes);

        gridX = new THREE.GridHelper(600, 10);    //green
        gridX.setColors(new THREE.Color(0x660000), new THREE.Color(0x660000));
        gridX.position.set(0, 0, 0);
        //this.scene.add(gridX);

        gridZ = new THREE.GridHelper(600, 10);
        gridZ.position.set(0, 600, -600);
        gridZ.rotation.x = Math.PI / 2;
        gridZ.setColors(new THREE.Color(0x000066), new THREE.Color(0x000066));
        //this.scene.add(gridZ);

        gridY = new THREE.GridHelper(600, 10);
        gridY.position.set(-600, 600, 0);
        gridY.rotation.z = Math.PI / 2;
        gridY.setColors(new THREE.Color(0x006600), new THREE.Color(0x006600));
        //this.scene.add(gridY);

        this.loader = new THREE.STLLoader();
        this.loader.load('kgp1.STL', function (geometry) {
            l1material = new THREE.MeshNormalMaterial( );
            l1mesh = new THREE.Mesh(geometry, l1material);
            l1mesh.rotation.x = -Math.PI / 2;
//l1mesh.postition.set(0,0,0);
            KGP50.scene.add(l1mesh);

        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp2.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-74, -59, 0));
            l2material = new THREE.MeshNormalMaterial( );
            link2Mesh = new THREE.Mesh(geometry, l2material);
            link2Mesh.rotation.x = Math.PI / 2;
            link2Mesh.rotation.y = 0.1;
            l1mesh.add(link2Mesh);
            link2Mesh.position.set(195, 538, 600);

        });
//geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp3.STL', function (geometry) {
            // geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-160, -160, -500));
            l3material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link3Mesh = new THREE.Mesh(geometry, l3material);
            link2Mesh.add(link3Mesh);
            link3Mesh.position.set(-35, 10, 35);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp4.STL', function (geometry) {
            // geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-160, -160, -500));
            l4material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link4Mesh = new THREE.Mesh(geometry, l4material);
            link4Mesh.rotation.x = -Math.PI / 2;
            link3Mesh.add(link4Mesh);
            link4Mesh.position.set(50, 180, 315);
            //Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 60, 100), new THREE.MeshNormalMaterial());
            // link3Mesh.add(Cylinder1);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp6.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-110.6, 0, -100));
            l5material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link5Mesh = new THREE.Mesh(geometry, l5material);
            link5Mesh.rotation.x = Math.PI / 2;
            link4Mesh.add(link5Mesh);
            link5Mesh.position.set(130, 127, -20);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp7.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-55, -55, 0));
            l6material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link6Mesh = new THREE.Mesh(geometry, l6material);
            link6Mesh.rotation.y = Math.PI;
            link5Mesh.add(link6Mesh);
            link6Mesh.position.set(250, -100, 100);//dont change y i,e blue; last
        //});
        //this.loader = new THREE.STLLoader();
       // this.loader.load('kgp25.STL', function (geometry) {
          //  geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-15, -15, 0));
           // l7material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link7Mesh = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 300, 1), new THREE.MeshNormalMaterial());
            link6Mesh.add(link7Mesh);
            link7Mesh.position.set(445, 195, -60);
            Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 300, 100), new THREE.MeshNormalMaterial());
            Cylinder1.rotation.x = Math.PI / 2;
            //Cylinder1.rotation.y = Math.PI / 6;
            Cylinder1.position.set(-20, -15, 70);
            link6Mesh.add(Cylinder1);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp23.STL', function (geometry) {
            //geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-55, -55, 0));
            l8material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link8Mesh = new THREE.Mesh(geometry, l8material);
            link7Mesh.add(link8Mesh);
            link8Mesh.position.set(-440, -60, 10);
            Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 300, 100), new THREE.MeshNormalMaterial());
            Cylinder2.rotation.x = Math.PI / 2;
            //Cylinder1.rotation.y = Math.PI / 6;
            Cylinder2.position.set(-20, -15, 70);
            link6Mesh.add(Cylinder2);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp50assem.STL', function (geometry) {
            //  geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-420, -420, -430));
            l9material = new THREE.MeshNormalMaterial( );
            link9Mesh = new THREE.Mesh(geometry, l9material);
            link9Mesh.rotation.x = Math.PI;
            link9Mesh.rotation.z = Math.PI / 3;
            Cylinder1.add(link9Mesh);
            link9Mesh.position.set(195, 470, 595);
            // link9Mesh.position.set(0, -100, 250);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp50assem2.STL', function (geometry) {
            //  geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-420, -420, -430));
            l9_2material = new THREE.MeshNormalMaterial( );
            link9_2Mesh = new THREE.Mesh(geometry, l9_2material);
            link9_2Mesh.rotation.x = Math.PI;
            link9_2Mesh.rotation.z = Math.PI / 3;
            Cylinder2.add(link9_2Mesh);
            link9_2Mesh.position.set(75, 230, 595);
            // link9Mesh.position.set(0, -100, 250);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp29.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-80, -220, 25));
            l10material = new THREE.MeshNormalMaterial( );
            link10Mesh = new THREE.Mesh(geometry, l10material);
            link10Mesh.rotation.x = -Math.PI;
            link10Mesh.rotation.z = Math.PI / 10;

            link6Mesh.add(link10Mesh);
            link10Mesh.position.set(0, 0, 0);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp24.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-40, -48, 0));
            l11material = new THREE.MeshNormalMaterial( );
            link11Mesh = new THREE.Mesh(geometry, l11material);
            link11Mesh.rotation.y = -Math.PI;
            //link11Mesh.rotation.z = Math.PI /20;

            link6Mesh.add(link11Mesh);
            link11Mesh.position.set(450, 190, 260);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp29.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-70, 180, 205));
            l12material = new THREE.MeshNormalMaterial( );
            link12Mesh = new THREE.Mesh(geometry, l12material);
            //link12Mesh.rotation.y = -Math.PI;
            // link12Mesh.rotation.y = -Math.PI/2;
            link12Mesh.rotation.z = -Math.PI / 12; //red
            //link12Mesh.rotation.z = -Math.PI/1.5;

            link6Mesh.add(link12Mesh);
            link12Mesh.position.set(0, 0, 0);
        });
        this.loader = new THREE.STLLoader();
        this.loader.load('kgp26.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-50, -50, 220)); //x,y,z
            l13material = new THREE.MeshNormalMaterial( );
            link13Mesh = new THREE.Mesh(geometry, l13material);
            Cylinder3 = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 50, 100), new THREE.MeshNormalMaterial());
            Cylinder3.rotation.x = Math.PI / 2;
            //Cylinder3.rotation.y = 17*Math.PI / 180;
            Cylinder3.position.set(0, 200, 230);
            link12Mesh.add(Cylinder3);
            //link13Mesh.rotation.set = (0,0,-Math.PI / 2);
            link13Mesh.rotation.x = Math.PI / 2;
            link13Mesh.rotation.z = -107 * Math.PI / 180;
            // link13Mesh.rotation.z = 17*Math.PI / 180;
            Cylinder3.add(link13Mesh);
            link13Mesh.position.set(-20, 220, 0);
        });
        this.loader.load('kgp50assem3.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -680, -705));
            l14material = new THREE.MeshNormalMaterial( );
            link14Mesh = new THREE.Mesh(geometry, l14material);
            link14Mesh.rotation.y = -Math.PI;
            // link14Mesh.rotation.x = -Math.PI/2;
            //link14Mesh.rotation.z = Math.PI / 2; //red
            link14Mesh.rotation.z = -122 * Math.PI / 180;
            //link12Mesh.rotation.z = -Math.PI/1.5;
            Cylinder4 = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 300, 100), new THREE.MeshNormalMaterial());
            Cylinder4.rotation.x = Math.PI / 2;
            // Cylinder4.rotation.y = ath.PI ;
            Cylinder4.position.set(0, 0, 0);

            Cylinder5 = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 100), new THREE.MeshNormalMaterial());
            // Cylinder5.rotation.x = Math.PI / 2;
            // Cylinder4.rotation.y = Math.PI ;
            Cylinder5.position.set(450, 855, 135);
            link8Mesh.add(Cylinder5);
            Cylinder5.add(Cylinder4);

            Cylinder4.add(link14Mesh);
            link14Mesh.position.set(-630, 20, 890);
            link8Mesh.add(Cylinder5);

            Cylinder6 = new THREE.Mesh(new THREE.CylinderGeometry(50, 50, 100, 100), new THREE.MeshNormalMaterial());
            Cylinder6.rotation.z = Math.PI / 2;
            Cylinder4.add(Cylinder6);
            Cylinder6.position.set(110, 0, -120);

        });
        this.loader.load('kgp50assemLast.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI));
            //geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 6));
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(410, 60, -170)); //x,y,z

            // geometry.applyMatrix(new THREE.Matrix4().makeRotation(Math.PI));
            //Matrix4.makeRotationAxis(new THREE.Vector3(1, 0, 0), Math.PI);
            l15material = new THREE.MeshNormalMaterial( );
            link15Mesh = new THREE.Mesh(geometry, l15material);
            //link15Mesh.rotation.z = Math.PI / 6;
            link15Mesh.rotation.z = -Math.PI / 6;
            Cylinder6.add(link15Mesh);

            //  link15Mesh.position.set(-300, -920, 800);


        });

        this.loader.load('kgp50assemLast2.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI));
            //geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 6));
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(220, 195, -1666)); //x,y,z

            l16material = new THREE.MeshNormalMaterial( );
            link16Mesh = new THREE.Mesh(geometry, l16material);
            //link15Mesh.rotation.z = Math.PI / 6;
            link16Mesh.rotation.z = -Math.PI / 7;
            link16Mesh.rotation.x = -Math.PI / 75;
            //link16Mesh.position.set(280, 90, -1660);
            Sphere1 = new THREE.Mesh(new THREE.SphereGeometry(8, 8, 8, 100), new THREE.MeshNormalMaterial());
            Sphere1.rotation.x = Math.PI;
            Cylinder6.add(Sphere1);
            Sphere1.position.set(0, -565, 60);
            Sphere1.add(link16Mesh);

            //  link15Mesh.position.set(-300, -920, 800);

            Cylinder7 = new THREE.Mesh(new THREE.CylinderGeometry(27, 27, 60, 100), new THREE.MeshNormalMaterial());
            //Cylinder7.rotation.z = Math.PI / 7;
            Sphere1.add(Cylinder7);
            Cylinder7.position.set(10, 175, 60);
        });

        this.loader.load('kgp8.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 2));
            //geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 7));
            //geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 50));
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-75, 25, -75)); //x,y,z

            l17material = new THREE.MeshNormalMaterial( );
            link17Mesh = new THREE.Mesh(geometry, l17material);
            // link17Mesh.rotation.x = Math.PI / 6;
            // link17Mesh.rotation.z = -Math.PI / 7;
            // link17Mesh.rotation.y = Math.PI / 50;
            // link17Mesh.position.set(280, 90, -1660);

            Cylinder7.add(link17Mesh);

            //  link15Mesh.position.set(-300, -920, 800);


        });
        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    KGP50.controls.enabled = true;
}
function onContainerMouseOut() {
    KGP50.controls.enabled = false;
}
// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    KGP50.renderer.render(KGP50.scene, KGP50.camera);
    update();
    render();
}

// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    KGP50.controls.update();
    KGP50.stats.update();
}
// Render the scene
function render() {
    if (KGP50.renderer) {
        KGP50.renderer.render(KGP50.scene, KGP50.camera);
    }

}
var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(-5, 15, 0),
        new THREE.Vector3(20, 15, 0),
        new THREE.Vector3(10, 0, 0)
        );

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints(50);

var material = new THREE.LineBasicMaterial({color: 0xff0000});

// Create the final Object3d to add to the scene
var curveObject = new THREE.Line(geometry, material);