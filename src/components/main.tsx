import { Play } from "lucide-react";

export function Main(){
    return(
        <main className="text-white/70 flex-1 h-full overflow-y-auto">
            <div className="flex flex-col gap-2 bg-zinc-900 rounded-xl p-4 overflow-y-auto h-full">
              <nav className='flex gap-2 mb-2'>
                <a href="#" className='p-2 box-content bg-white rounded-full text-black text-sm'>Tudo</a>
                <a href="#" className='p-2 box-content bg-white/20 rounded-full text-sm'>Musica</a>
                <a href="#" className='p-2 box-content bg-white/20 rounded-full text-sm'>Podcasts</a>
              </nav>
              <div className="grid grid-cols-4 gap-2 w-auto">
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 1</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 2</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 3</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 4</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 5</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 6</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 7</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
                <a href="#" className='bg-white/10 flex items-center gap-2 rounded-md overflow-hidden shadow hover:bg-white/20 group h-12 w-auto'>
                  <img src="https://rseat.pics/" alt="a" className='w-12 h-12' />
                  <p className='font-bold'>Playlist 8</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black mr-2 invisible group-hover:visible' />
                </a>
              </div>

              <div className="flex justify-between mt-4">
                <h1 className='text-xl font-bold hover:underline'>Feito para ACM</h1>
                <a href="#" className='text-sm font-bold hover:underline'>Mostrar tudo</a>
              </div>

              <div className="flex justify-between">
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-45 h-45 rounded-md' />
                  <p className='text-sm text text-white/40 w-45 break-words'>Recayd Mob, Matuê Adi e mais</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-16 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-45 h-45 rounded-md' />
                  <p className='text-sm text text-white/40 w-45 break-words'>Recayd Mob, Matuê Adi e mais</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-16 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-45 h-45 rounded-md' />
                  <p className='text-sm text text-white/40 w-45 break-words'>Recayd Mob, Matuê Adi e mais</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-16 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-45 h-45 rounded-md' />
                  <p className='text-sm text text-white/40 w-45 break-words'>Recayd Mob, Matuê Adi e mais</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-16 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-45 h-45 rounded-md' />
                  <p className='text-sm text text-white/40 w-45 break-words'>Recayd Mob, Matuê Adi e mais</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-16 right-4 invisible group-hover:visible' />
                </a>

              </div>

              <div className="flex justify-between mt-4">
                <h1 className='text-xl font-bold hover:underline'>Tocados Recentemente</h1>
                <a href="#" className='text-sm font-bold hover:underline'>Mostrar tudo</a>
              </div>

              <div className="flex justify-between">
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-full' />
                  <p className='text-md font-bold mr-auto'>Artista</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-boldmr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-full' />
                  <p className='text-md font-bold mr-auto'>Artista</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
              </div>

              <div className="flex justify-between mt-4">
                <h1 className='text-xl font-bold hover:underline'>Recomendados Para Hoje</h1>
                <a href="#" className='text-sm font-bold hover:underline'>Mostrar tudo</a>
              </div>

              <div className="flex justify-between">
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
                <a href="#" className='flex flex-col items-center gap-2 rounded-md overflow-hidden hover:bg-white/5 group p-2 relative group'>
                  <img src="https://rseat.pics/" alt="a" className='w-30 h-30 rounded-md' />
                  <p className='text-md font-bold mr-auto'>Prata</p>
                  <Play className='ml-auto p-1.5 box-content bg-green-500 rounded-full shadow text-black absolute bottom-12 right-4 invisible group-hover:visible' />
                </a>
              </div>
            </div>
          </main>
    )
}