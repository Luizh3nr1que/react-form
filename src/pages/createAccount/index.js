import './create.css'

import VideoSource from '../../video/video.mp4'

import Header from '../../components/header'

import { Link } from 'react-router-dom';

export default function CreateAccount() {
    return (
        <div>
            <video id='video-background' autoPlay muted loop>
                <source src={VideoSource} type='video/mp4' />
            </video>

            <Header />

            <div className='conteudo-home'>

                <form className='form'>
                    <h1>Create an account</h1>

                    <input className='form-input' type='text' placeholder='Nome completo' required />
                    <input className='form-input' type='email' placeholder='Digite seu Email' required />
                    <input className='form-input' type='password' placeholder='Digite sua Senha' required />

                    <div className='input-checkbox-container'>
                        <input type='checkbox' id='lembrar-me' />
                        <label for="lembrar-me">Concordo com os termos de serviço e politica de privacidade</label>
                    </div>

                    <div className='buttons-container'>
                        <button className='submit'>Enviar</button>
                        <button className='avisoLogin'>Já tem uma conta? <Link to="/">login</Link></button>
                    </div>
                </form>

            </div>

        </div>
    )
}