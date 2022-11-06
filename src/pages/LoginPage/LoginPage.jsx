import { Header } from "../../components/Header/Header"
import { Link } from 'react-router-dom'
import "./LoginPage.css"


export const LoginPage = () => {
    return (
        <>
            <Header/>
            <div className="login">
                <h2>Вход</h2>
                <form className="login-form">
                    <div className="login-form__field">
                        <label>
                            телефон:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            пароль:
                            <input type="text" name="name" />
                        </label>
                    </div>
                    <div className="login-form__btns">
                        <input type="submit" value="Войти" />
                        <Link to = '/registration'>Регистрация</Link>
                    </div>
                </form>
            </div>
        </>
        
    )
}