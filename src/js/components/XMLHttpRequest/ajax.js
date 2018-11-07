
const loadXMLDoc = () => {
  let xmlhttp;
  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP'); // eslint-disable-line
  }
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      console.log(xmlhttp.responseText);
    }
  };
  xmlhttp.open('GET', 'http://mockbin.org/request', true);
  xmlhttp.setRequestHeader('Content-type', 'application/xml');
  xmlhttp.send(null);
};

// loadXMLDoc();

export default loadXMLDoc;
