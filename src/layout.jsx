import { Children } from "react";
import Landing from './pages/Landing'
import { Outlet } from "react-router-dom";
import {Navbar, Footer} from "./components/component";
// import {Space_Mono} from "../public/font"

// const spaceMono = Space_Mono({
//   weight: ["400","700"],
//   subsets: ["latin"],
//   variable: "--font-space-mono",
//   display: "swap",
//   style: ["normal", "italic"],
//   fallback: ["monospace"],
//   preload: true,
//   adjustFontFallback: true,
// });

export default function Layout(){
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}