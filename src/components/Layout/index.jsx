import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* <AnnouncementBar /> */}
        <Header />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
