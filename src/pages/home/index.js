import './home.css'

import VideoSource from '../../video/video.mp4'

import Header from '../../components/header'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <video id='video-background' autoPlay muted loop>
                <source src={VideoSource} type='video/mp4' />
            </video>

            <Header />

            <div className='conteudo-home'>

                <form className='form'>
                    <h1>Login Form</h1>

                    <input className='form-input' type='email' placeholder='Digite seu Email' required />
                    <input className='form-input' type='password' placeholder='Digite sua Senha' required />

                    <div className='input-checkbox-container'>
                        <input type='checkbox' id='lembrar-me' />
                        <label for="lembrar-me">Lembrar-me</label>
                    </div>

                    <div className='buttons-container'>
                        <button className='login'>Login</button>
                        <button className='register'><Link to="/create-account">Register</Link></button>
                    </div>
                </form>

            </div>

        </div>
    )
}