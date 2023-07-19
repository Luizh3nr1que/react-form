import './passReset.css'

import VideoSource from '../../video/video.mp4'

import Header from '../../components/header'

import { Link } from 'react-router-dom';

export default function PassReset() {
    return (
        <div>
            <video id='video-background' autoPlay muted loop>
                <source src={VideoSource} type='video/mp4' />
            </video>

            <Header />

            <div className='conteudo-home'>

                <form className='form'>
                    <h1>Reset PassWord</h1>

                    <input className='form-input' type='email' placeholder='Digite seu Email' required />
                    <input className='form-input' type='password' placeholder='Nova Senha' required />
                    <input className='form-input' type='password' placeholder='Repita nova senha' required />

                    <div className='buttons-container'>
                        <button className='submit'>Enviar</button>
                    </div>
                </form>

            </div>

        </div>
    )
}