import './error.css'

import { Link } from 'react-router-dom';
import Header from '../../components/header'

export default function Error() {
    return (
        <div className="container">
            <div className="img">
                <img src='../erro404.jpg' />
            </div>

            <div className='mensage'>
                <h2>404</h2>
                <h1>Página não encontrada</h1>

                <Link to='/'>
                    <button>Voltar Home</button>
                </Link>
            </div>

        </div>
    )
}