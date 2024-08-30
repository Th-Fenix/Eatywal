
import logo from '../assets/img/logoWall.png'
import arrow from '../assets/img/arrow.png'

function Header() {

  return (
    <>
        <header className='flex px-4 py-3 border-b border-black'>
            {/* Logotipo y name */}
            <div className='flex items-center gap-3 mr-10'>
                <img className='size-10' src={logo} alt="logotipo" />
                <h1 className='text-2xl font-semibold'>EatyWall</h1>
            </div>

               {/* Boton Espacio de trabajo */}
            <div className='flex items-center gap-4'>

                <div className='flex items-center cursor-pointer transition-all hover:bg-slate-200 p-2'>
                    <p className='mr-2 text-sm'>Espacio de trabajo</p>
                    <img className='size-4 object-contain' src={arrow} alt="flecha" />
                </div>

                <div className='flex items-center cursor-pointer transition-all hover:bg-slate-200 p-2'>
                    <p className='mr-2 text-sm'>Recientes</p>
                    <img className='size-4 object-contain' src={arrow} alt="flecha" />
                </div>

                <div className='flex items-center cursor-pointer transition-all hover:bg-slate-200 p-2'>
                    <p className='mr-2 text-sm'>Marcado</p>
                    <img className='size-4 object-contain' src={arrow} alt="flecha" />
                </div>

                <div className='flex items-center cursor-pointer transition-all hover:bg-slate-200 p-2'>
                    <p className='mr-2 text-sm'>Plantilla</p>
                    <img className='size-4 object-contain' src={arrow} alt="flecha" />
                </div>

            </div>

            <div>
                <button className='px-4 py-2 ml-4 text-white bg-blue-500 rounded-md hover:bg-blue-400'>
                    Crear
                </button>
            </div>

        </header>
    </>
  )
}

export default Header
