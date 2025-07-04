import Destinations from "../components/Destinations/Destinations.html?raw";
import Unique from "../components/Unique/Unique.html?raw";
import Devis from "../components/Devis/Devis.html?raw";
import MyList from "../components/MyList/MyList.html?raw";

document.getElementById("app").innerHTML = `
  ${Destinations}
  ${Unique}
  ${Devis}
  ${MyList}
`;
