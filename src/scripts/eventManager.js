const handleParkDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  deletePark(parkId).then(() => listNationalParks());
};

const handleMonumentDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentId = event.target.parentNode.id.split("--")[1];

  deleteMonument(monumentId).then(() => listMonuments());
};

const handleParkVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject).then(() => listNationalParks());
};

const handleMonumentVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentId = event.target.parentNode.id.split("--")[1];

  let visitedMonumentObject = {
    visited: true
  };

  patchMonument(monumentId, visitedMonumentObject).then(() => listMonuments());
};

const handleParkEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};

const handleMonumentEdit = () => {
  let monumentId = event.target.parentNode.id.split("--")[1];

  const monumentArticle = document.querySelector(`#national-monument--${monumentId}`);
  clearElement(monumentArticle);

  getMonument(monumentId).then(monumentToEdit => {
    const editFormForMonument = monumentEditForm(monumentToEdit);
    monumentArticle.appendChild(editFormForMonument);
  });
};

const handleParkUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
  const editedParkLatitude = document.querySelector(`#edit-park-latitude--${parkId}`);
  const editedParkLongitude = document.querySelector(`#edit-park-longitude--${parkId}`);
  const editedParkVisited = document.querySelector(`#edit-park-visited--${parkId}`);

  console.log(editedParkName.value, editedParkState.value);

  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value,
    latitude: editedParkLatitude.value,
    longitude: editedParkLongitude.value,
    visited: editedParkVisited.checked
  };

  putPark(parkId, editedPark).then(() => listNationalParks());
};

const handleMonumentUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentId = event.target.parentNode.id.split("--")[1];
  const editedMonumentName = document.querySelector(`#edit-monument-name--${monumentId}`);
  const editedMonumentState = document.querySelector(`#edit-monument-state--${monumentId}`);
  const editedMonumentVisited = document.querySelector(`#edit-monument-visited--${monumentId}`);
  const editedMonumentArea = document.querySelector(`#edit-monument-area--${monumentId}`);
  const editedMonumentEst = document.querySelector(`#edit-monument-established-date--${monumentId}`);


  let editedMonument = {
    name: editedMonumentName.value,
    state: editedMonumentState.value,
    area: editedMonumentArea.value,
    dateEstablished: editedMonumentEst.value,
    visited: editedMonumentVisited.checked
  };

  putMonument(monumentId, editedMonument).then(() => listMonuments());
};
