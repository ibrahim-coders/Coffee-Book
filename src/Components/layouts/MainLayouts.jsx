import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { Toaster } from 'react-hot-toast';
const MainLayouts = () => {
  return (
    <div>
      <Toaster />
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
