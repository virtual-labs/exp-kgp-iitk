/**
 * 
 *  Document     : tmat.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Khatagpur
 *  
 */
var t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0;
var t11, t22, t33, t44, t55, t66;
var trace2 = {
    x: [],
    y: [],
    z: [],
    mode: 'markers',
    marker: {
        size: 6,
        line: {
            color: 'rgba(217, 217, 217, 0.14)',
            width: 0.5
        },
        opacity: 1
    },
    type: 'scatter3d'
};
function myFunction() {
//    validateth1();
    t11 = t1;
    t22 = t2;
    t33 = t3;
    t44 = t4;
    t55 = t5;
    t66 = t6;
    t1 = document.getElementById("th1").value;
    t2 = document.getElementById("th2").value;
    t3 = document.getElementById("th3").value;
    t4 = document.getElementById("th4").value;
    t5 = document.getElementById("th5").value;
    t6 = document.getElementById("th6").value;
    if (t1 >= 161 || t1 <= -161) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 1 should be within -160 to 160";
        return;
    }
    if (t2 >= 16 || t2 <= -41) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 2 should be within -40 to 15";
        return;
    }
    if (t3 >= 41 || t3 <= -16) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -15 to 40";
        return;
    }
    if (t4 >= 181 || t4 <= -181) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -180 to 180";
        return;
    }
    if (t5 >= 101 || t5 <= -101) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -100 to 100";
        return;
    }
    if (t6 >= 227 || t6 <= -227) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -226 to 226";
        return;
    }
    tmat();
    KGP50change();
//    px = Math.cos(Math.PI / 180 * t1)(a2 * Math.cos(Math.PI / 180 * t2) + a3 * Math.cos(Math.PI / 180 * (t2 + t3)) - d4 * Math.sin(Math.PI / 180 * (t2 + t3))) - d3 * Math.sin(Math.PI / 180 * t1);
//alert('px');
}
function tmat() {
    // trans formation matrixes 
//    var T1 = ([[Math.cos(Math.PI / 180 * t1), 0, -Math.sin(Math.PI / 180 * t1), 0], [Math.sin(Math.PI / 180 * t1), 0, Math.cos(Math.PI / 180 * t1), 0], [0, -1, 0, 0.6604], [0, 0, 0, 1]]);
//    var T2 = ([[Math.cos(Math.PI / 180 * t2), -Math.sin(Math.PI / 180 * t2), 0, 0.432 * Math.cos(Math.PI / 180 * t2)], [Math.sin(Math.PI / 180 * t2), Math.cos(Math.PI / 180 * t2), 0, 0.432 * Math.sin(Math.PI / 180 * t2)], [0, 0, 1, 0.1495], [0, 0, 0, 1]]);
//    var T3 = ([[Math.cos(Math.PI / 180 * t3), 0, Math.sin(Math.PI / 180 * t3), 0], [Math.sin(Math.PI / 180 * t3), 0, -Math.cos(Math.PI / 180 * t3), 0], [0, 1, 0, 0], [0, 0, 0, 1]]);
//    var T4 = ([[Math.cos(Math.PI / 180 * t4), 0, -Math.sin(Math.PI / 180 * t4), 0], [Math.sin(Math.PI / 180 * t4), 0, Math.cos(Math.PI / 180 * t4), 0], [0, -1, 0, 0.432], [0, 0, 0, 1]]);
//    var T5 = ([[Math.cos(Math.PI / 180 * t5), 0, Math.sin(Math.PI / 180 * t5), 0], [Math.sin(Math.PI / 180 * t5), 0, -Math.cos(Math.PI / 180 * t5), 0], [0, 1, 0, 0], [0, 0, 0, 1]]);
//    var T6 = ([[Math.cos(Math.PI / 180 * t6), -Math.sin(Math.PI / 180 * t6), 0, 0], [Math.sin(Math.PI / 180 * t6), Math.cos(Math.PI / 180 * t6), 0, 0], [0, 0, 1, 0.0565], [0, 0, 0, 1]]);
//    var g = (math.multiply(T1, T2));
//    var h = (math.multiply(g, T3));
//    var i = (math.multiply(h, T4));
//    var j = (math.multiply(i, T5));
//    var l = (math.multiply(j, T6));

//M DH
    a2 = 800;
    //a3 = 0.0203;
    d4 = 420;
    d6 = 350;

    var T1 = ([[Math.cos(Math.PI / 180 * t1), -Math.sin(Math.PI / 180 * t1), 0, 0], [Math.sin(Math.PI / 180 * t1), Math.cos(Math.PI / 180 * t1), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
    var T2 = ([[Math.cos(Math.PI / 180 * t2), -Math.sin(Math.PI / 180 * t2), 0, 0], [0, 0, 1, 0], [-Math.sin(Math.PI / 180 * t2), -Math.cos(Math.PI / 180 * t2), 0, 0], [0, 0, 0, 1]]);
    var T3 = ([[Math.cos(Math.PI / 180 * t3), -Math.sin(Math.PI / 180 * t3), 0, a2], [Math.sin(Math.PI / 180 * t3), Math.cos(Math.PI / 180 * t3), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
    var T4 = ([[Math.cos(Math.PI / 180 * t4), -Math.sin(Math.PI / 180 * t4), 0, 0], [0, 0, 1, d4], [-Math.sin(Math.PI / 180 * t4), -Math.cos(Math.PI / 180 * t4), 0, 0], [0, 0, 0, 1]]);
    var T5 = ([[Math.cos(Math.PI / 180 * t5), -Math.sin(Math.PI / 180 * t5), 0, 0], [0, 0, -1, 0], [Math.sin(Math.PI / 180 * t5), Math.cos(Math.PI / 180 * t5), 0, 0], [0, 0, 0, 1]]);
    var T6 = ([[Math.cos(Math.PI / 180 * t6), -Math.sin(Math.PI / 180 * t6), 0, 0], [0, 0, 1, d6], [-Math.sin(Math.PI / 180 * t6), -Math.cos(Math.PI / 180 * t6), 0, 0], [0, 0, 0, 1]]);
    var g = (math.multiply(T1, T2));
    var h = (math.multiply(g, T3));
    var i = (math.multiply(h, T4));
    var j = (math.multiply(i, T5));
    var l = (math.multiply(j, T6));




    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    var header = table.createTHead();
    for (var p = 0; p < 4; p++) {
        var row = table.insertRow(p);
        for (var q = 0; q < 4; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = l[p][q].toFixed(3);
        }
    }


    trace2.x.push(l[0][3]);
    trace2.y.push(l[1][3]);
    trace2.z.push(l[2][3]);
    //alert(trace1.x);
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo").appendChild(table);

    var data = [trace2];
    var layout = {

        autosize: true,
        width: 340,
        height: 330,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }
        // plot_bgcolor: 'black'
    };
    Plotly.newPlot('view', data, layout, {displayModeBar: true});
}

function print(value) {
    var precision = 4;
    document.write(math.format(value, precision) + '<br>');
}




