import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
