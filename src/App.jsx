import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import BackToTop from './Components/Backtop';

// Regular Pages
import Homepage from './Pages/Homepage';
import ContactUspage from './Pages/ContactUspage';
import AboutUspage from './Pages/AboutUspage';
import Timetablespage from './Pages/Timetables';
import Eventspage from './Pages/Eventspage';

// CMS Pages
import ContactUspagecms from './PagesForCMS/ContactUspagecms';
import Eventspagecms from './PagesForCMS/Eventspagecms';
import Timetablescms from './PagesForCMS/Timetablecms';
import Userpagecms from './PagesForCMS/Userpagecms';
import SignUpcms from './PagesForCMS/SignUpcms';
import Navforcms from './PagesForCMS/Navforcms';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ContactUspage" element={<ContactUspage />} />
        <Route path="/AboutUspage" element={<AboutUspage />} />
        <Route path="/Timetablespage" element={<Timetablespage />} />
        <Route path="/Eventspage" element={<Eventspage />} />
        <Route path="/BackToTop" element={<BackToTop />} />
        
        {/* CMS Pages */}
        <Route path="/ContactUspagecms" element={<ContactUspagecms />} />
        <Route path="/Eventspagecms" element={<Eventspagecms />} />
        <Route path="/Timetablescms" element={<Timetablescms />} />
        <Route path="/Userpagecms" element={<Userpagecms />} />
        <Route path="/SignUpcms" element={<SignUpcms />} />
        <Route path="/Navforcms" element={<Navforcms />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
