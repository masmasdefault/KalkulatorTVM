function calculateFV() {
    const pv = parseFloat(document.getElementById('pv1').value);
    const r = parseFloat(document.getElementById('r1').value) / 100;
    const n = parseFloat(document.getElementById('n1').value);
    const fv = pv * Math.pow(1 + r, n);
    document.getElementById('resultFV').innerText = `Future Value (FV): ${fv.toFixed(2)}`;
}

function calculatePV() {
    const fv = parseFloat(document.getElementById('fv2').value);
    const r = parseFloat(document.getElementById('r2').value) / 100;
    const n = parseFloat(document.getElementById('n2').value);
    const pv = fv / Math.pow(1 + r, n);
    document.getElementById('resultPV').innerText = `Present Value (PV): ${pv.toFixed(2)}`;
}

function calculateR() {
    const pv = parseFloat(document.getElementById('pv3').value);
    const fv = parseFloat(document.getElementById('fv3').value);
    const n = parseFloat(document.getElementById('n3').value);
    const r = Math.pow(fv / pv, 1 / n) - 1;
    document.getElementById('resultR').innerText = `Suku Bunga (r): ${(r * 100).toFixed(2)}%`;
}

function calculateN() {
    const pv = parseFloat(document.getElementById('pv4').value);
    const fv = parseFloat(document.getElementById('fv4').value);
    const r = parseFloat(document.getElementById('r4').value) / 100;
    const n = Math.log(fv / pv) / Math.log(1 + r);
    document.getElementById('resultN').innerText = `Jumlah Tahun (n): ${n.toFixed(2)}`;
}

function calculateFVA() {
    const pmt = parseFloat(document.getElementById('pmt5').value);
    const r = parseFloat(document.getElementById('r5').value) / 100;
    const n = parseFloat(document.getElementById('n5').value);
    const fva = pmt * ((Math.pow(1 + r, n) - 1) / r);
    document.getElementById('resultFVA').innerText = `Future Value Anuitas (FVA): ${fva.toFixed(2)}`;
}

function calculatePVA() {
    const pmt = parseFloat(document.getElementById('pmt6').value);
    const r = parseFloat(document.getElementById('r6').value) / 100;
    const n = parseFloat(document.getElementById('n6').value);
    const pva = pmt * ((1 - Math.pow(1 + r, -n)) / r);
    document.getElementById('resultPVA').innerText = `Present Value Anuitas (PVA): ${pva.toFixed(2)}`;
}

function calculatePMT() {
    const pva = parseFloat(document.getElementById('pva7').value);
    const r = parseFloat(document.getElementById('r7').value) / 100;
    const n = parseFloat(document.getElementById('n7').value);
    const pmt = pva / ((1 - Math.pow(1 + r, -n)) / r);
    document.getElementById('resultPMT').innerText = `Pembayaran Anuitas (PMT): ${pmt.toFixed(2)}`;
}