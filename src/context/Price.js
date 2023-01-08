import SideMenu from '../components/SideMenu';
import '../styles/Price.css';
import reactLogo from '../media/reactLogo.png';

function Price() {
  return (
    <div className="page Price" id="price">
      <SideMenu page="price" />
      <div className="priceContainer">
        <h1 className="title primaryColor">Leistungen</h1>
        <h4 className="text-white">somit kann ich helfen</h4>
      </div>
      <img src={reactLogo} className=" reactLogo" />
    </div>
  );
}

export default Price;
