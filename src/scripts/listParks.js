const listNationalParks = () => {
  getAllParks().then(parksArray => {
    console.log("parksArray", parksArray)
    let nationParksFragment = document.createDocumentFragment();

    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park);
      nationParksFragment.appendChild(parkHtml);
    });

    const nationalParksSection = document.querySelector("#national--parks");
    clearElement(nationalParksSection)
    nationalParksSection.appendChild(nationParksFragment)
  });
};

const listMonuments = () => {
  getAllMonuments().then(monumentsArray => {
    let monumentsFragment = document.createDocumentFragment();

    monumentsArray.forEach(monument => {
      let monumentHTML = buildMonumentHTML(monument);
      monumentsFragment.appendChild(monumentHTML);
    })

    const monumentSection = document.querySelector("#national--monuments");
    clearElement(monumentSection);
    monumentSection.appendChild(monumentsFragment)
  })
}