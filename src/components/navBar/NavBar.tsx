import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toastAlerta } from '../../util/toastAlert'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  let navigate = useNavigate()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'success')
        navigate('/login')
    }

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        
<nav className="bg-dark-blue">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/home' className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GameBlog</Link> 

  <div className="flex md:order-2">
      <button type="button" 
      className="text-dark-blue bg-yellow hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-yellow font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:yellow dark:hover:bg-pewter dark:focus:ring-pewter" 
      onClick={logout}>Sair</button>
      
      <button data-collapse-toggle="navbar-cta" 
        type="button" 
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        onClick={toggleDropdown}>

        <svg className="w-5 h-5" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 17 14">
            
            <path stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
              <Link
                to="/home"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}>Postagens</Link>
              
              <Link
                to="/postagens"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}>Temas</Link>

              <Link
                to="/temas"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}>Cadastro do tema</Link>
              
              <Link
                to="/cadastroTema"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}>Cadastro do tema</Link>
              
              <Link
                to="/perfil"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}>Perfil</Link>
            </div>
          )}
    </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
      <Link to='/postagens' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Postagens</Link>
      
      <Link to='/temas' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Temas</Link>
      
      <Link to='/cadastroTema' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cadastrar Tema</Link>
      
      <Link to='/perfil' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Perfil</Link>
    </ul>
  </div>
  </div>
</nav>

      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar