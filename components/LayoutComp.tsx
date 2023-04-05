import Footer from "./Footer";
import Header from "./Header";

type PropType = {
  children: JSX.Element;
};

export default function LayoutComp(prop: PropType) {
  return (
    <>
      <Header />
      {prop.children}
      <Footer />
    </>
  );
}
