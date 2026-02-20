// Funzione principale del widget
(function() {
  const container = document.getElementById("widget-container");

  // Creiamo il form per inserire i dati
  container.innerHTML = `
    <h2>Genera il tuo Popin</h2>
    <label>Titolo: <input type="text" id="popin-title" placeholder="Titolo"></label><br><br>
    <label>Sottotitolo: <input type="text" id="popin-subtitle" placeholder="Sottotitolo"></label><br><br>
    <label>Descrizione: <textarea id="popin-desc" placeholder="Descrizione"></textarea></label><br><br>
    <label>CTA: <input type="text" id="popin-cta" placeholder="Testo bottone"></label><br><br>
    <label>Colore CTA: <input type="color" id="popin-color" value="#ff69b4"></label><br><br>
    <button id="show-popin-btn">Mostra Popin</button>
  `;

  // Creiamo l’overlay del popin
  const popinOverlay = document.createElement("div");
  popinOverlay.style.position = "fixed";
  popinOverlay.style.top = "0";
  popinOverlay.style.left = "0";
  popinOverlay.style.width = "100%";
  popinOverlay.style.height = "100%";
  popinOverlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  popinOverlay.style.justifyContent = "center";
  popinOverlay.style.alignItems = "center";
  popinOverlay.style.zIndex = "9999";
  popinOverlay.style.display = "none"; // ✅ nascosto all'inizio

  const popinBox = document.createElement("div");
  popinBox.style.backgroundColor = "#fff";
  popinBox.style.padding = "20px";
  popinBox.style.borderRadius = "8px";
  popinBox.style.maxWidth = "400px";
  popinBox.style.textAlign = "center";
  popinBox.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
  popinOverlay.appendChild(popinBox);
  document.body.appendChild(popinOverlay);

  // Funzione per aggiornare popin
  function showPopin() {
    const title = document.getElementById("popin-title").value;
    const subtitle = document.getElementById("popin-subtitle").value;
    const desc = document.getElementById("popin-desc").value;
    const cta = document.getElementById("popin-cta").value;
    const color = document.getElementById("popin-color").value;

    popinBox.innerHTML = `
      <h2>${title}</h2>
      <h4>${subtitle}</h4>
      <p>${desc}</p>
      <button id="popin-cta-btn" style="background-color:${color}; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer;">${cta}</button>
      <br><br>
      <button id="close-popin-btn" style="padding:5px 10px; cursor:pointer;">Chiudi</button>
    `;

    document.getElementById("close-popin-btn").onclick = () => {
      popinOverlay.style.display = "none";
    };

    document.getElementById("popin-cta-btn").onclick = () => {
      alert("Hai cliccato la CTA!");
    };

    popinOverlay.style.display = "flex"; // ✅ appare solo al click
  }

  document.getElementById("show-popin-btn").onclick = showPopin;

})();
