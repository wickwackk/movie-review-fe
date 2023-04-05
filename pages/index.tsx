// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

import LayoutComp from "@/components/LayoutComp";
import Home from "../components/Home";

export default function App(): JSX.Element {
  return (
    <div className="main">
      <LayoutComp>
        <Home />
      </LayoutComp>
    </div>
  );
}
