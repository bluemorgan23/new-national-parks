const buildElement = (elementType, elementId, elementTextContent, elementValue, eType, eName) => {
  let htmlElement = document.createElement(elementType);
  
  if (elementId) {
    htmlElement.setAttribute("id", elementId);
  }

  if (elementValue) {
    htmlElement.setAttribute("value", elementValue);
  }
  htmlElement.textContent = elementTextContent;
 

  if (eType) {
    htmlElement.setAttribute("type", eType);
  }

  if(eName) {
    htmlElement.setAttribute("name", eName);
  }

 return htmlElement;

};
const clearElement = domElement => {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
};

const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "national--parks"));
displayContainer.appendChild(buildElement("section", "national--monuments"));

//This is a test