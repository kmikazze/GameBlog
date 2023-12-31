import ListaPostagens from '../../components/postagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Image from '../../assets/gif-h.gif'



function Home() {    
    return (
        <>
        <div className="bg-dark-blue flex flex-wrap jujstify-center">
          <div className='flex text-pewter text-center p-5'>
            <div className="flex flex-col gap-4 items-center py-4">
              <h2 className='text-5xl font-bold'>Bem-vindo ao GameBlog!</h2>
              <p className='text-xl'>Deixe aqui os melhores jogos que já jogou ou que pretende jogar!</p><br></br>
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded-full border border-[#37393b] bg-white text-[#37393b] hover:bg-blue-gray hover:text-white py-2 px-4'>Ver postagens</button>
            </div>
            </div>
            </div>
            <div  className='flex items-end pl-20'>
            <img src={Image}/>
            </div>
          </div>
        
        <ListaPostagens />
      </>
    );
}

export default Home;