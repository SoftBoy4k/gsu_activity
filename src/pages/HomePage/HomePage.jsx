import { Header } from "../../components/Header/Header"
import { SVG_ARROW } from "../../const"
import "./HomePage.scss"
import { HomePageSvgSelector } from "./HomePageSvgSelector"


export const HomePage = () => {
    return (
        <>  
            <Header/>
            <h1 className="title">Добро пожаловать <br/> в <br/> GSU Activity</h1>
            <div className="swipe-down">
                <p>Узнать больше</p>
                <HomePageSvgSelector svg = { SVG_ARROW }/>
            </div>
        </>
    )
}