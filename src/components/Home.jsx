import "./Home.css"
import { Outlet } from "react-router-dom"

export default function Home() {

  return (
    <>
      <div className="landing-message">
        <h2>HOME PAGE</h2>
        <h2>When you search for a video they will display here.</h2>
        <Outlet />
      </div>
    </>
  )
}