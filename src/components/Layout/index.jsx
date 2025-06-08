import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <header>
        <AnnouncementBar />
        <div className="sticky top-0 left-0 w-full h-auto z-50">
          <Header />
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
