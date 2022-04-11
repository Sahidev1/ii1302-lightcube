import Login from '../View/login';
import { useNavigate } from 'react-router-dom';

function LoginPresenter (){
    const navigator = useNavigate();

    /**
     * function that navigates to register page
     * @returns void
     */
    const navRegisterPage = () => navigator('/register');

    return <Login navRegPage={navRegisterPage} />;
}

export default LoginPresenter;