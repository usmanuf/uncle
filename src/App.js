import React from "react";
import './App.css';
import Helmets from "./component/Reuseable/Halmet";
import Master from './master';
import ContextAppProvider from './ContextAPI';
function App() {
  return (<div>

      <ContextAppProvider>
          <Helmets title={' Best Handyman Services | Home Maintenance Services'} keyword={'Best Handyman Services, Home Maintenance Services, Home Repair Services, Freelance Platform, Freelancing Sites, Ac Services,\n' +
          '  Electrician Services, Plumber Services, CCTV Services, Home Appliance Repair, Solar Panel Installation Services, Car Rental Services, Cleaning Services,\n' +
          '  Travel Agent Services, Car Towing Services, Carpentry Services, Refrigerator Services, Curtain Services, Data Entry Services, Door Lock Repair Services,\n' +
          '  Furniture Polish Services, Graphic Designer Services, Building Contractors Services, Home Generator Service, Home Tailoring Service, Led repair services,\n' +
          '  Masonry Services, Mobile Repair Services, Mover and Packers Service, Networking Service, Online Tutor Services, Wall Painter Services, Pickup Services,\n' +
          '  Tank Cleaning Service'} description={'Uncle Fixer is the best Handyman service provider. We provide Electrician, CCTV, Solar Installation, Carpenter and Home Appliance services to our customers.'}/>
          <Master/>
      </ContextAppProvider>
  </div> );
}

export default App;
