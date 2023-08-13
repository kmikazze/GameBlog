import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import animation from '../../assets/gif-l.gif'


function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

  return (
    <>
      <div className="flex flex-wrap border justify-center items-center font-bold font-dark-blue bg-blue-gray pb-14">
        <div>
          <img src={animation} className='mr-44 '/>
        </div>
        <form className="flex flex-col bg-yellow rounded-lg shadow-xl gap-4 mt-9 rounded px-10 py-9 items-center" onSubmit={login}>
          <h2 className="text-dark-blue text-5xl mb-3">Entrar</h2>
          <div className="flex flex-col w-full text-dark-blue font-semibold">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Email"
              className="border border-blue-gray focus:ring-1 focus:outline-none ring-blue-gray rounded p-2"
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full text-dark-blue font-semibold">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border border-blue-gray focus:ring-1 focus:outline-none ring-blue-gray rounded p-2"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button  type='submit' className="rounded-full bg-dark-blue hover:bg-blue-gray hover:text-dark-blue text-white w-1/2 py-2 flex justify-center">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>

          <hr className="border-slate-800 w-full" />

          <p className='text-dark-blue font-semibold'>
            Ainda não tem uma conta?{' '}
          </p>
          <Link
                to="/cadastro"
                className="text-verde_escuro font-bold    hover:underline dark:text-verde_claro2"
              >
                Cadastre-se
              </Link>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;