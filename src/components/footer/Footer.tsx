import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-dark-blue text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-lg text-white font-family'>Copyright &copy; 2023 Kmikazze. Todos os direitos reservados. </p>
                    <div className='flex gap-2'>
                        <a href='https://www.linkedin.com/in/camilamdramos/' target='_blank' ><LinkedinLogo size={38} color='white' /></a>
                        <a href='https://github.com/kmikazze' target='_blank'><GithubLogo size={38} color='white'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer