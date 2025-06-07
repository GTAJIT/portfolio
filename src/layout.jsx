import { Children } from "react";
import { Outlet } from "react-router-dom";
import {Navbar, Footer, Container} from "./components/component";
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
      <div>
      <div className="h-screen flex flex-col justify-between">
      <Navbar/>
      <Container>
      <main className="flex flex-col items-center">
          <Outlet/>
      </main>
      </Container>
      <Footer/>
      </div>
      </div>
    </>
  )
}