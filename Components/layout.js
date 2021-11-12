import Header from './Header';
import Footer from './Footer';
import CustomCusror from './CustomCursor';
export default function Layout({ children }) {
  return (
    <>
      <CustomCusror />
      <Header />
      <main> {children} </main>
      <Footer />
    </>
  );
}
