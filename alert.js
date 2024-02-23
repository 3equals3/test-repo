let selectElement = document.getElementById('vibroSwitch');
selectElement.addEventListener("change", () => {
    document.querySelector('audio').play();
  });
  onchange = (event) => {document.querySelector('audio').stop();};