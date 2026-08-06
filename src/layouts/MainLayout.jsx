import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />

      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}

export default MainLayout;