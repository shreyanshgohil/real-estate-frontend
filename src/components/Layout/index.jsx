import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
