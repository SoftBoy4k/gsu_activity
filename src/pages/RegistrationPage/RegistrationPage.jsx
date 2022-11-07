import { useState } from "react"
import { FormField } from "../../components/FormField/FormField"
import { Header } from "../../components/Header/Header"
import "./RegistrationPage.css"


export const RegistrationPage = () => {
    const [regPage, setRegPage] = useState(1)
    console.log(regPage)
    return (
        <>
            <Header/>
            <div className="registration">
                <h2>Регистрация</h2>
                <ul className="registration-pages">
                    <li className={ regPage === 1 ? "registration-page registration-page__active" : "registration-page"} onClick={() => {setRegPage(1)}}>1</li>
                    <li className={ regPage === 2 ? "registration-page registration-page__active" : "registration-page"} onClick={() => {setRegPage(2)}}>2</li>
                    <li className={ regPage === 3 ? "registration-page registration-page__active" : "registration-page"} onClick={() => {setRegPage(3)}}>3</li>
                </ul>
                <form className="registration-form">
                    <div className="registration-form__field">
                        {regPage === 1 ? 
                            (<>
                                <FormField text = "Имя" name="name"/>
                                <FormField text = "Фамилия" name="lastname"/>
                                <FormField text = "Отчество" name="midname"/>
                                <FormField text = "Телефон" name="phone"/>
                            </>)
                        : regPage === 2 ?
                            (<>
                                <FormField text = "email" name="email"/>
                                <FormField text = "факультет" name="faculty"/>
                                <FormField text = "курс" name="course"/>
                                <FormField text = "группа" name="group"/>
                            </>)
                        :
                            (<>
                                <FormField text = "пароль" name="password"/>
                                <FormField text = "ещё раз" name="passwordOneMore"/>
                            </>)
                        }
                        
                    </div>
                    { regPage < 3 ? 
                        <button className="registration-form__btn" onClick={(event) => {
                            event.preventDefault()
                            setRegPage(regPage + 1)
                            }}>
                                Далее
                        </button> :
                        <button className="registration-form__btn">
                                Далее
                        </button>
                    }
                </form>
            </div>
        </>
        
    )
}