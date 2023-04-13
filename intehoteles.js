cadenaDeHoteles.addEventListener('change', function() {

    const cadenaDeHoteles = document.getElementById('cadenaDeHoteles');
    const marriottI = document.getElementById('marriottI');
    const marriottD = document.getElementById('marriottD');
    const marriottT = document.getElementById('marriottT');
    const marriottC = document.getElementById('marriottC');
    const hwhI = document.getElementById('hwhI');
    const hwhD = document.getElementById('hwhD');
    const hwhT = document.getElementById('hwhT');
    const hwhC = document.getElementById('hwhC');
    const ihgI = document.getElementById('ihgI');
    const ihgD = document.getElementById('ihgD');
    const ihgT = document.getElementById('ihgT');
    const ihgC = document.getElementById('ihgC');
    const WHGI = document.getElementById('WHGI');
    const WHGD = document.getElementById('WHGD');
    const WHGT = document.getElementById('WHGT');
    const WHGC = document.getElementById('WHGC');
    const jjiI = document.getElementById('jjiI');
    const jjiD = document.getElementById('jjiD');
    const jjiT = document.getElementById('jjiT');
    const jjiC = document.getElementById('jjiC');
  
  
    if (cadenaDeHoteles.value === 'marriott') {
        marriottI.style.display = 'block';
        marriottD.style.display = 'block';
        marriottT.style.display = 'block';
        marriottC.style.display = 'block';
        hwhI.style.display = 'none';
        hwhD.style.display = 'none';
        hwhT.style.display = 'none';
        hwhC.style.display = 'none';
        ihgI.style.display = 'none';
        ihgD.style.display = 'none';
        ihgT.style.display = 'none';
        ihgC.style.display = 'none';
        WHGI.style.display = 'none';
        WHGD.style.display = 'none';
        WHGT.style.display = 'none';
        WHGC.style.display = 'none';
        jjiI.style.display = 'none';
        jjiD.style.display = 'none';
        jjiT.style.display = 'none';
        jjiC.style.display = 'none';
  
  
  
    }
    
    else if (cadenaDeHoteles.value === 'HWH') {
        marriottI.style.display = 'none';
        marriottD.style.display = 'none';
        marriottT.style.display = 'none';
        marriottC.style.display = 'none';
        hwhI.style.display = 'block';
        hwhD.style.display = 'block';
        hwhT.style.display = 'block';
        hwhC.style.display = 'block';
        ihgI.style.display = 'none';
        ihgD.style.display = 'none';
        ihgT.style.display = 'none';
        ihgC.style.display = 'none';
        WHGI.style.display = 'none';
        WHGD.style.display = 'none';
        WHGT.style.display = 'none';
        WHGC.style.display = 'none';
        jjiI.style.display = 'none';
        jjiD.style.display = 'none';
        jjiT.style.display = 'none';
        jjiC.style.display = 'none';
    }
    
    
    else if (cadenaDeHoteles.value === 'IHG') {
        marriottI.style.display = 'none';
        marriottD.style.display = 'none';
        marriottT.style.display = 'none';
        marriottC.style.display = 'none';
        hwhI.style.display = 'none';
        hwhD.style.display = 'none';
        hwhT.style.display = 'none';
        hwhC.style.display = 'none';
        ihgI.style.display = 'block';
        ihgD.style.display = 'block';
        ihgT.style.display = 'block';
        ihgC.style.display = 'block';
        WHGI.style.display = 'none';
        WHGD.style.display = 'none';
        WHGT.style.display = 'none';
        WHGC.style.display = 'none';
        jjiI.style.display = 'none';
        jjiD.style.display = 'none';
        jjiT.style.display = 'none';
        jjiC.style.display = 'none';
    } 
  
    else if (cadenaDeHoteles.value === 'WHG') {
        marriottI.style.display = 'none';
        marriottD.style.display = 'none';
        marriottT.style.display = 'none';
        marriottC.style.display = 'none';
        hwhI.style.display = 'none';
        hwhD.style.display = 'none';
        hwhT.style.display = 'none';
        hwhC.style.display = 'none';
        ihgI.style.display = 'none';
        ihgD.style.display = 'none';
        ihgT.style.display = 'none';
        ihgC.style.display = 'none';
        WHGI.style.display = 'block';
        WHGD.style.display = 'block';
        WHGT.style.display = 'block';
        WHGC.style.display = 'block';
        jjiI.style.display = 'none';
        jjiD.style.display = 'none';
        jjiT.style.display = 'none';
        jjiC.style.display = 'none';
  
  }
  
  else if (cadenaDeHoteles.value === 'JinJiang') {
    marriottI.style.display = 'none';
    marriottD.style.display = 'none';
    marriottT.style.display = 'none';
    marriottC.style.display = 'none';
    hwhI.style.display = 'none';
    hwhD.style.display = 'none';
    hwhT.style.display = 'none';
    hwhC.style.display = 'none';
    ihgI.style.display = 'none';
    ihgD.style.display = 'none';
    ihgT.style.display = 'none';
    ihgC.style.display = 'none';
    WHGI.style.display = 'none';
    WHGD.style.display = 'none';
    WHGT.style.display = 'none';
    WHGC.style.display = 'none';
    jjiI.style.display = 'block';
    jjiD.style.display = 'block';
    jjiT.style.display = 'block';
    jjiC.style.display = 'block';
  
  }
  else{
    marriottI.style.display = 'none';
    marriottD.style.display = 'none';
    marriottT.style.display = 'none';
    marriottC.style.display = 'none';
    hwhI.style.display = 'none';
    hwhD.style.display = 'none';
    hwhT.style.display = 'none';
    hwhC.style.display = 'none';
    ihgI.style.display = 'none';
    ihgD.style.display = 'none';
    ihgT.style.display = 'none';
    ihgC.style.display = 'none';
    WHGI.style.display = 'none';
    WHGD.style.display = 'none';
    WHGT.style.display = 'none';
    WHGC.style.display = 'none';
    jjiI.style.display = 'none';
    jjiD.style.display = 'none';
    jjiT.style.display = 'none';
    jjiC.style.display = 'none';
  
  }
  
  
  });
  