import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
        <>

            <div className="flex justify-center bg-dark-blue text-black ">
                <div className="flex flex-col items-center py-8">
                    <p className='text-lg text-white font-family'>&copy; 2023 Kmikazze.</p>
                    <div className='flex gap-1'>
                        <a href='https://www.linkedin.com/in/camilamdramos/' target='_blank' ><LinkedinLogo size={38} color='white' /></a>
                        <a href='https://github.com/kmikazze' target='_blank'><GithubLogo size={38} color='white'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer