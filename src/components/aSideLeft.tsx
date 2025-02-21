import { LibraryBig, List, Pin, Play, Search } from "lucide-react";
import musicaCurtida from '../../public/image/icon-coracao.png'
import seusEpisodios from '../../public/image/icon-episode.png'

export function ASideLeft() {
    return (
        <aside className="bg-zinc-900 rounded-xl p-4 text-white/70 w-90 flex-shrink-0 overflow-y-auto">
            <a href="#" className='flex gap-2 hover:text-white items-center'>
                <LibraryBig />
                <p className='text-lg font-semibold'>Sua Biblioteca</p>
            </a>

            <nav className='flex gap-2 mt-4 text-sm'>
                <a href="#" className='p-2 bg-white/20 rounded-full hover:bg-white/30'>Playlists</a>
                <a href="#" className='p-2 bg-white/20 rounded-full hover:bg-white/30'>Podcasts</a>
                <a href="#" className='p-2 bg-white/20 rounded-full hover:bg-white/30'>Albuns</a>
                <a href="#" className='p-2 bg-white/20 rounded-full hover:bg-white/30'>Artistas</a>
            </nav>
            <div className='flex justify-between items-center mt-4 mb-4'>
                <Search className='p-2 box-content rounded-full hover:bg-white/30' />
                <a href="#" className='flex gap-1 hover:text-white'>
                    Recentes
                    <List />
                </a>
            </div>

            <div className="flex gap-2 items-center hover:bg-white/10 w-full rounded-lg p-2 group">
                <img src={musicaCurtida} alt="imagens" className='w-14 h-14 object-center rounded-lg' />
                <div className="flex flex-col gap-0.5">
                    <h2 className='font-semibold text-md'>Musicas Curtidas</h2>
                    <div className='flex gap-1 items-center'>
                        <Pin size={15} className='text-green-500' />
                        <p className='text-sm'>Playlist • 3 Musicas</p>
                    </div>
                </div>
                <Play className='ml-auto invisible group-hover:visible p-2 box-content' />
            </div>

            <div className="flex gap-2 items-center hover:bg-white/10 w-full rounded-lg p-2 group">
                <img src={seusEpisodios} alt="imagens" className='w-14 h-14 object-center rounded-lg' />
                <div className="flex flex-col gap-0.5">
                    <h2 className='font-semibold text-md'>Seus Episodios</h2>
                    <div className='flex gap-1 items-center'>
                        <Pin size={15} className='text-green-500' />
                        <p className='text-sm'>Episodios salvos e Baixados</p>
                    </div>
                </div>
                <Play className='ml-auto invisible group-hover:visible p-2 box-content' />
            </div>

            <div className="flex gap-2 items-center hover:bg-white/10 w-full rounded-lg p-2 group">
                <img src="https://rseat.pics/" alt="imagens" className='w-14 h-14 object-center rounded-lg' />
                <div className="flex flex-col gap-0.5">
                    <h2 className='font-semibold text-md'>euacm</h2>
                    <div className='flex gap-1 items-center'>
                        <p className='text-sm'>Playlist - ACM</p>
                    </div>
                </div>
                <Play className='ml-auto invisible group-hover:visible p-2 box-content' />
            </div>

            <div className="flex gap-2 items-center hover:bg-white/10 w-full rounded-lg p-2 group">
                <img src="https://rseat.pics/" alt="imagens" className='w-14 h-14 object-center rounded-lg' />
                <div className="flex flex-col gap-0.5">
                    <h2 className='font-semibold text-md text-green-500'>fds+</h2>
                    <div className='flex gap-1 items-center'>
                        <p className='text-sm'>Playlist - ACM</p>
                    </div>
                </div>
                <Play className='ml-auto invisible group-hover:visible p-2 box-content' />
            </div>

            <div className="flex gap-2 items-center hover:bg-white/10 w-full rounded-lg p-2 group">
                <img src="https://rseat.pics/" alt="imagens" className='w-14 h-14 object-center rounded-lg' />
                <div className="flex flex-col gap-0.5">
                    <h2 className='font-semibold text-md'>333</h2>
                    <div className='flex gap-1 items-center'>
                        <p className='text-sm'>Album - Matuê</p>
                    </div>
                </div>
                <Play className='ml-auto invisible group-hover:visible p-2 box-content' />
            </div>
        </aside>
    )
}