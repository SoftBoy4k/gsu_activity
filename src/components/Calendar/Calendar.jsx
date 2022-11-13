import { useState } from "react"
import "./Calendar.scss"
import arrowLeft from "../../img/angle-left.png"
import arrowRight from "../../img/angle-right.png"

export const Calendar = () => {

    let date = new Date()

    const [currentDay, setCurrentDay] = useState({"day": date.getDate(), "month": date.getMonth(), "year": date.getFullYear()})
    const [currentMonth, setCurrentMonth] = useState(date.getMonth())
    const [currentYear, setCurrentYear] = useState(date.getFullYear())
    const eventDays = [
        {
            "day": 1, 
            "month": 10,
            "year": 2022
        },
        {
            "day": 11, 
            "month": 10,
            "year": 2022
        },
        {
            "day": 13, 
            "month": 10,
            "year": 2022
        },
        {
            "day": 22, 
            "month": 10,
            "year": 2022
        },
        {
            "day": 30, 
            "month": 11,
            "year": 2022
        }
    ]
    
    
    date = new Date(currentYear, currentMonth)

    const month = (month = currentMonth) => {
        switch (month) {
            case 0: return "Январь"
            case 1: return "Февраль"
            case 2: return "Март"
            case 3: return "Апрель"
            case 4: return "Май"
            case 5: return "Июнь"
            case 6: return "Июль"
            case 7: return "Август"
            case 8: return "Сентябрь"
            case 9: return "Октябрь"
            case 10: return "Ноябрь"
            case 11: return "Декабрь"
            default: break;
        }
    }
    

    function getDayOfTheWeek() {
        const day = date.getDay() - 1 
        return day !== -1 ? day : 6     // starting with Monday
    }

    const dayClassCreater = (day) => {
        if (day + currentMonth * 30 + currentYear * 12 * 30 < currentDay.day + currentDay.month * 30 + currentDay.year * 12 * 30) {
            if (currentMonth === currentDay.month) {
                const a  = eventDays.filter(obj => obj.day === day && obj.month === currentMonth && obj.year === currentYear)
                return a.length !== 0 ? "calendar-pastEventDay" : "calendar-day calendar-pastDay" 
            }
            return "calendar-day calendar-pastDay"
        } else if (day === currentDay.day && currentMonth === currentDay.month && currentYear === currentDay.year) {
            const a  = eventDays.filter(obj => obj.day === day && obj.month === currentMonth && obj.year === currentYear)
            return a.length !== 0 ? "calendar-day calendar-currentDay calendar-eventDay" : "calendar-day calendar-currentDay"
        } else if (eventDays.filter(obj => obj.day === day && obj.month === currentMonth && obj.year === currentYear).length !== 0) {
            return "calendar-day calendar-eventDay"
        } else {
            return "calendar-day"
        }
    }

    const weekCreater = () => {
        const week = []
        for (let i = 0; i < 7; i++) {
            if (getDayOfTheWeek() === i && currentMonth === date.getMonth()) {
                week.push(date.getDate())
                date.setDate(date.getDate() + 1)
            } else {
                week.push(undefined)
            }
        }
        return week
    }

    const calendarCreater = () => {
        let array = []
        
        while(currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
            array.push(weekCreater(currentMonth))
        }

        return array.map(el => <tr className="calendar-week">{
                el.map(day => <td className={dayClassCreater(day)}>{day}</td>)
            }</tr>)
    }

    const nextMonth = () => {
        if (currentMonth + 1 < 12) {
            setCurrentMonth(() => currentMonth + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear(() => currentYear + 1)
        }
    }

    const lastMonth = () => {
        if (currentMonth - 1 > -1) {
            setCurrentMonth(() => currentMonth - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear(() => currentYear - 1)
        }
    }

    return (
        <div className="calendar">
            <h2>Календарь мероприятий</h2>
            <div className="calendar-container">

                <div className="calendar-title">
                    <p>{month()}</p>
                    <p>{currentYear}</p>
                </div>

                <div className="calendar-inner">

                    <img src={arrowLeft} onClick={lastMonth} alt="arrowLeft"/>

                    <table className="calendar-content">
                        <th>пн</th>
                        <th>вт</th>
                        <th>ср</th>
                        <th>чт</th>
                        <th>пт</th>
                        <th>сб</th>
                        <th>вс</th>

                        {calendarCreater()}
                        
                    </table>

                    <img src={arrowRight} onClick={nextMonth} alt="arrowRight"/>

                </div>
                
            </div>
        </div>
    )
}