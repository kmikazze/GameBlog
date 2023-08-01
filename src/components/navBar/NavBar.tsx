import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex '>
            <div className= 'mx-1 p-2 font-bold rounded hover:bg-indigo-800'>Postagens</div>
            <Link to='/temas' className='mx-1 p-2 font-bold rounded hover:bg-indigo-800'>Temas</Link>
            <Link to='/cadastroTema' className='mx-1 p-2 font-bold rounded hover:bg-indigo-800'>Cadastrar tema</Link>
              <div className='mx-1 p-2 font-bold rounded hover:bg-indigo-800'>Perfil</div>
              <Link to='' onClick={logout} className='mx-1 p-2 font-bold rounded hover:bg-indigo-800'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar