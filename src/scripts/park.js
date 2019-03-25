const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visit Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleParkVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleParkEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleParkDelete)
  return parkArticle;
};

const buildMonumentHTML = monumentObject => {
  const monumentArticle = buildElement("article", `national-monument--${monumentObject.id}`);
  monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
  monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));

  if(monumentObject.visited !== true){
    let visitedMonumentButton = buildElement("button", undefined, "Visit Monument");
    monumentArticle.appendChild(visitedMonumentButton);
    visitedMonumentButton.addEventListener("click", handleMonumentVisited)
  }

  let editMonumentButton = buildElement("button", undefined, "Edit Monument");
  monumentArticle.appendChild(editMonumentButton);
  editMonumentButton.addEventListener("click", handleMonumentEdit);

  let deleteMonumentButton = buildElement("button", undefined, "Delete Monument");
  monumentArticle.appendChild(deleteMonumentButton);
  deleteMonumentButton.addEventListener("click", handleMonumentDelete);

  return monumentArticle;
}

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude))

  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude))
  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "))

  editFormFragment.appendChild(buildElement("input", `edit-park-visited--${parkObject.id}`, "Visited: ", true, "radio", "Visited"))
  editFormFragment.appendChild(buildElement("label", undefined, "Not-Visited: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-not-visited--${parkObject.id}`, "Not Visited: ", false, "radio", "Visited"))

  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleParkUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
}

const monumentEditForm = (monumentObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-name--${monumentObject.id}`, undefined, monumentObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-state--${monumentObject.id}`, undefined, monumentObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Area: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-area--${monumentObject.id}`, undefined, monumentObject.area));

  editFormFragment.appendChild(buildElement("label", undefined, "Date Established: "));
  editFormFragment.appendChild(buildElement("input", `edit-monument-established-date--${monumentObject.id}`, undefined, monumentObject.dateEstablished));

  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "))

  editFormFragment.appendChild(buildElement("input", `edit-monument-visited--${monumentObject.id}`, "Visited: ", true, "radio", "Visited"))
  editFormFragment.appendChild(buildElement("label", undefined, "Not-Visited: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-not-visited--${monumentObject.id}`, "Not Visited: ", false, "radio", "Visited"))

  const updateMonumentButton = buildElement("button", undefined, "Update")
  updateMonumentButton.addEventListener("click", handleMonumentUpdate)
  editFormFragment.appendChild(updateMonumentButton)

  return editFormFragment
}