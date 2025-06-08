import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div>
      <header className="sticky top-0 left-0 right-0 z-50">
        {/* <AnnouncementBar /> */}
        <Header />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
