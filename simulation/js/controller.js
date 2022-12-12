
function initializeSimulation() {
    KGP50.init();
    animate();
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    link5Mesh.rotation.y = +sliderVal * (Math.PI / 180);

    render();

}

function sliderChange2() {
    sliderVal2 = document.getElementById("slider2").value;
    document.getElementById("rangeValue2").value = sliderVal2;

    link7Mesh.rotation.z = sliderVal2 * (Math.PI / 180);
    link10Mesh.position.y = -(6 * sliderVal2);
    link10Mesh.position.x = -(2 * sliderVal2);
    Cylinder3.rotation.y = sliderVal2 * (Math.PI / 180);
    Cylinder5.rotation.z = -sliderVal2 * (Math.PI / 180);
    render();
}

function sliderChange3() {
    var sliderVal3 = document.getElementById("slider3").value;
    document.getElementById("rangeValue3").value = sliderVal3;
    link11Mesh.rotation.z = +sliderVal3 * (Math.PI / 180);
    link12Mesh.position.y = +(6.5 * sliderVal3);
    link12Mesh.position.x = +(2 * sliderVal3);
    Cylinder4.rotation.y = -sliderVal3 * (Math.PI / 180);
    render();
}
function sliderChange4() {

    var sliderVal4 = document.getElementById("slider4").value;
    document.getElementById("rangeValue4").value = sliderVal4;
    Cylinder6.rotation.x = +sliderVal4 * (Math.PI / 180);
    //Cylinder3.rotation.y = +sliderVal4 * (Math.PI / 180);
    //link14Mesh.rotation.y = sliderVal4 * (Math.PI / 180);
    render();
    update();
}
function sliderChange5() {

    var sliderVal5 = document.getElementById("slider5").value;
    document.getElementById("rangeValue5").value = sliderVal5;
    Sphere1.rotation.z = +sliderVal5 * (Math.PI / 180);
    //Cylinder3.rotation.y = +sliderVal4 * (Math.PI / 180);
    //link14Mesh.rotation.y = sliderVal4 * (Math.PI / 180);
    render();
    update();
}
function sliderChange6() {

    var sliderVal6 = document.getElementById("slider6").value;
    document.getElementById("rangeValue6").value = sliderVal6;
    link17Mesh.rotation.y = +sliderVal6 * (Math.PI / 180);
    //Cylinder3.rotation.y = +sliderVal4 * (Math.PI / 180);
    //link14Mesh.rotation.y = sliderVal4 * (Math.PI / 180);
    render();
    update();
}
function KGP50change() {
    var th1Val = document.getElementById("th1").value;
    link5Mesh.rotation.y = +th1Val * (Math.PI / 180);

    var th2Val = document.getElementById("th2").value;
    link7Mesh.rotation.z = th2Val * (Math.PI / 180);
    link10Mesh.position.y = -(6 * th2Val);
    link10Mesh.position.x = -(2 * th2Val);
    Cylinder3.rotation.y = th2Val * (Math.PI / 180);
    Cylinder5.rotation.z = -th2Val * (Math.PI / 180);

    var th3Val = document.getElementById("th3").value;
    link11Mesh.rotation.z = +th3Val * (Math.PI / 180);
    link12Mesh.position.y = +(6.5 * th3Val);
    link12Mesh.position.x = +(2 * th3Val);
    Cylinder4.rotation.y = -th3Val * (Math.PI / 180);

    var th4Val = document.getElementById("th4").value;
    Cylinder6.rotation.x = +th4Val * (Math.PI / 180);

    var th5Val = document.getElementById("th5").value;
    Sphere1.rotation.z = +th5Val * (Math.PI / 180);

    var th6Val = document.getElementById("th6").value;
    link17Mesh.rotation.y = +th6Val * (Math.PI / 180);
    render();
    update();
}
function getslidervalue() {

    t1 = i * document.getElementById("rangeValue1").value;
    t2 = i * document.getElementById("rangeValue2").value;
    t3 = i * document.getElementById("rangeValue3").value;
    t4 = i * document.getElementById("rangeValue4").value;
    t5 = i * document.getElementById("rangeValue5").value;
    t6 = i * document.getElementById("rangeValue6").value;
    tmat();

}
function clearslidervalue() {
    // content.reset();
    //myFunction();
    // s1=0;
    document.getElementById("slider1").value = 0;
    document.getElementById("rangeValue1").value = 0;
    document.getElementById("slider2").value = 0;
    document.getElementById("rangeValue2").value = 0;
    document.getElementById("slider3").value = 0;
    document.getElementById("rangeValue3").value = 0;
    document.getElementById("slider4").value = 0;
    document.getElementById("rangeValue4").value = 0;
    document.getElementById("slider5").value = 0;
    document.getElementById("rangeValue5").value = 0;
    document.getElementById("slider6").value = 0;
    document.getElementById("rangeValue6").value = 0;
    sliderChange();
    sliderChange2();
    sliderChange3();
    sliderChange4();
    sliderChange5();
    sliderChange6();
}
function workspace() {

    for (i = 0; i < 320; i += 10) {
        t1 = -160;
        t1 = i;
//        for (j = 0; j < 15; j += 2) {
//            t2 = -50;
//            t2 = j;
//            for (k = 0; k < 50; k += 15) {
//                t3 = -15;
//                t3 = k;
        t2 = document.getElementById("rangeValue2").value;
        t3 = document.getElementById("rangeValue3").value;
        t4 = document.getElementById("rangeValue4").value;
        t5 = document.getElementById("rangeValue5").value;
        t6 = document.getElementById("rangeValue6").value;
        tmat();
    }
    // }
    // }
}