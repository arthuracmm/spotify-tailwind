import { CircleCheck, GalleryVerticalEnd, MicVocal, MonitorSmartphone, PictureInPicture2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import matoseco from '../../public/image/mato-seco.png'

export function Footer(){
    return(
        <footer className=' text-white flex items-center justify-between p-3'>
          <div className='flex gap-4 items-center'>
            <img src={matoseco} alt="a" className='w-15 h-15 rounded-lg' />
            <div>
              <p className='text-white font-semibold text-md'>Navegantes da Ilusão</p>
              <p className='text-sm text-white/40'>Mato Seco</p>
            </div>
            <CircleCheck className='text-green-500' />
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className='flex gap-4 items-center text-white/70'>
              <Shuffle size={15} className='hover:text-white  cursor-pointer' />
              <SkipBack className='hover:text-white  cursor-pointer' />
              <Play className='p-2 bg-white rounded-full box-content text-black  cursor-pointer' />
              <SkipForward className='hover:text-white  cursor-pointer' />
              <Repeat size={15} className='hover:text-white  cursor-pointer' />
            </div>
            <div className='flex items-center gap-2 text-sm text-white/50'>
              <p>1:39</p>
              <div className='h-1 w-96 rounded-full bg-white/40 overflow-hidden'>
                <div className='h-2 w-20 bg-white' />
              </div>
              <p>4:08</p>
            </div>
          </div>

          <div className='flex gap-4 text-white/70 items-center'>
            <MicVocal size={20} className='hover:text-white'/>
            <GalleryVerticalEnd size={20} className='hover:text-white'/>
            <MonitorSmartphone size={20} className='hover:text-white'/>
            <Volume1 size={20} className='hover:text-white'/>
            <div className='flex items-center gap-2'>
              <div className='h-1 w-32 rounded-full bg-white/40 overflow-hidden'>
                <div className='h-2 w-20 bg-white' />
              </div>
            </div>
            <PictureInPicture2 size={20} className='hover:text-white'/>
          </div>
        </footer>
    )
}