

function IKFunction() {
    var a2 = 432;
    var d1 = 660.4;
    var d2 = 149.5;
    var d4 = 432;
    var d6 = 56.5;
//    validateth1();
    var ax = document.getElementById("a1").value;
    var ay = document.getElementById("a2").value;
    var az = document.getElementById("a3").value;

    var nx = document.getElementById("n1").value;
    var ny = document.getElementById("n2").value;
    var nz = document.getElementById("n3").value;

    var sx = document.getElementById("s1").value;
    var sy = document.getElementById("s2").value;
    var sz = document.getElementById("s3").value;

    var px = document.getElementById("p1").value;
    //trace1.x.push(px);
    // alert(pz);
    var py = document.getElementById("p2").value;
    //trace1.y.push(py);
    var pz1 = document.getElementById("p3").value;
    var pz = d1 - pz1;
    // trace1.z.push(pz);
    //  alert(pz);
    var r = Math.sqrt(Math.pow(px, 2) + Math.pow(py, 2) - Math.pow(d2, 2));
    var R = (Math.pow(px, 2) + Math.pow(py, 2) + Math.pow(pz, 2) - Math.pow(d4, 2) - Math.pow(a2, 2) - Math.pow(d2, 2));
    // alert(d2);

    var th1 = Math.atan((py * r - d2 * px) / (px * r + d2 * py));
    var th1Val = th1 * (180 / Math.PI);

    var th3 = Math.atan(R / (Math.sqrt(4 * Math.pow(d4, 2) * Math.pow(a2, 2) - Math.pow(R, 2))));
    var th3Val = th3 * (180 / Math.PI);
    //alert(th3);
    var th2 = Math.atan(-(pz * a2 + pz * d4 * Math.sin(th3) + d4 * Math.cos(th3) * r) / (pz * d4 * Math.cos(th3) - ((a2 + d4 * Math.sin(th3)) * r)));
    var th2Val = (th2 * (180 / Math.PI));

    var th4 = Math.atan((Math.cos(th1) * ay - Math.sin(th1) * ax) / Math.cos(th1) * Math.cos(th2 + th3) * ax + Math.sin(th1) * Math.cos(th2 + th3) * ay - Math.sin(th2 + th3) * az);
    var th4Val = th4 * (180 / Math.PI);
    // alert(th4);
    var th5 = Math.atan(((Math.cos(th1) * Math.cos(th2 + th3) * Math.cos(th4) - Math.sin(th1) * Math.sin(th4)) * ax + (Math.sin(th1) * Math.cos(th2 + th3) * Math.cos(th4) + Math.cos(th1) * Math.sin(th4)) * ay - Math.cos(th4) * Math.sin(th2 + th3) * az) / (Math.cos(th1) * Math.sin(th2 + th3) * ax + Math.sin(th1) * Math.sin(th2 + th3) * ay + Math.cos(th2 + th3) * az));
    var th5Val = th5 * (180 / Math.PI);
    //alert(th5 * 180 / Math.PI);
    var th6 = Math.atan(((-Math.sin(th1) * Math.cos(th4) - Math.cos(th1) * Math.cos(th2 + th3) * Math.sin(th4)) * nx + (Math.cos(th1) * Math.cos(th4) - Math.sin(th1) * Math.cos(th2 + th3) * Math.sin(th4)) * ny + (Math.sin(th4) * Math.sin(th2 + th3)) * nz) / ((-Math.sin(th1) * Math.cos(th4) - Math.cos(th1) * Math.cos(th2 + th3) * Math.sin(th4)) * sx + (Math.cos(th1) * Math.cos(th4) - Math.sin(th1) * Math.cos(th2 + th3) * Math.sin(th4)) * sy + (Math.sin(th4) * Math.sin(th2 + th3)) * sz));
    var th6Val = th6 * (180 / Math.PI);
    // 
    // 
// change due to theta 
    document.getElementById("th1").value = th1Val.toPrecision(2);
    //PUMA560.link2Mesh.rotation.y = +th1;

    document.getElementById("th2").value = th2Val.toPrecision(2);
    //PUMA560.Link3Mesh.rotation.x = +th2;

    document.getElementById("th3").value = th3Val.toPrecision(2);
    // PUMA560.Link4Mesh.rotation.x = +th3;
//
    document.getElementById("th4").value = th4Val.toPrecision(2);
    // PUMA560.BoxL5.rotation.y = +th4;
//
    document.getElementById("th5").value = th5Val.toPrecision(2);
    //PUMA560.Cylinder3L5.rotation.x = +th5;
//
    document.getElementById("th6").value = th6Val.toPrecision(2);
    //  PUMA560.CylinderL6.rotation.x = +th6;
    KGP50change();
//    
//var xval=parseFloat(px);
//var yval=parseFloat(py);
//var zval=parseFloat(pz);



//    var data = [trace1];
//    var layout = {margin: {
//            l: 0,
//            r: 0,
//            b: 0,
//            t: 0
//        }};
//    Plotly.newPlot('myDiv', data, layout);

}
