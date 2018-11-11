const url = "/nis";

function prettyJSON(obj) {
  return '<pre>'+JSON.stringify(obj,null,2)+'</pre>';
}

function doGet(icon, path, divResp) {
  document.getElementById(icon).style.display="block";
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(icon).style.display="none";
      var res = JSON.parse(xhttp.responseText)
      document.getElementById(divResp).innerHTML=prettyJSON(res);
    } else if (this.readyState == 4 && this.status != 200) {     
       document.getElementById(icon).style.display="none";
    }
  }
  xhttp.open("GET", url+path, true);
  xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhttp.send();
}

function doPost(icon, path, divResp, data)  {
  document.getElementById(icon).style.display="block";
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(icon).style.display="none";
      var res = JSON.parse(xhttp.responseText)
      document.getElementById(divResp).innerHTML=prettyJSON(res);
    }  else if  (this.readyState == 4 && this.status == 503) {
      document.getElementById(icon).style.display="none";
      var res = JSON.parse(xhttp.responseText)
      document.getElementById(divResp).innerHTML=prettyJSON(res);
    }
  }

  xhttp.open("POST", url+path, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(data);
}

function getLastBlock()  {
  const r = "/chain/height";
  doGet("working0", r, "ultimobloque");
}

function getBlockData()  {
  const r = "/block/at/public";
  let n = document.getElementById("numblock");
  let blq = n.value;
  if (blq=='' || isNaN(blq))  {
    n.focus();
    document.getElementById("working1").style.display="none";
    return false;
  }
  let blqnum = parseInt(blq);
  let data = 'datos='+n.value;
  doPost("working1", r, "datosbloque", data);  
}

function getNamespaces()  {
  const r = "/namespace/root/page";
  doGet("working2", r, "datosnamespace"); 
}

function getMosaics()  {
  var m = document.getElementById("mosaicname");
  if (m.value=='') {
    m.focus();
    document.getElementById("working3").style.display="none";
    return false;
  }
  const r = "/namespace/mosaic/definition/page?namespace="+m.value;
  doGet("working3", r, "datosmosaico");  
}

function getAccount()  {
  let m = document.getElementById("cuenta");
  if (m.value=='') {
    m.focus();
    document.getElementById("working4").style.display="none";
    return false;
  }
  let cRaw = m.value;
  let c= cRaw.replace(/-/g,'');
  let r = "/account/get?address="+c;
  doGet("working4", r, "datoscuenta");  
}