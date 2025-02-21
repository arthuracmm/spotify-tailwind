import {Bell, ChevronLeft, ChevronRight, CircleUser, Ellipsis, GalleryVerticalEnd, HomeIcon, Plus, Search, Users} from 'lucide-react'

export function Header(){
    return(
        <header className='w-full flex justify-between items-center p-4'>
          <div className='text-white/70 font-md flex gap-2'>
            <Ellipsis className='hover:text-white' />
            <ChevronLeft className='hover:text-white' />
            <ChevronRight className='text-white/50' />
          </div>

          <div className='text-white/70 font-md gap-2 flex text-center'>
            <HomeIcon className='bg-white/20 rounded-full p-2 box-content hover:bg-white/30 hover:text-white' />
            <div className='flex bg-white/20 p-2 rounded-full'>
              <div className='flex'>
                <Search className='mr-3 hover:text-white' />
                <input type="text" placeholder='O quê você quer ouvir?' className='outline-none w-80' />
              </div>
              <div className='flex text-center'>
                <div className='w-0.5 h-auto bg-white/20 mr-2' />
                <GalleryVerticalEnd className='mr-2 hover:text-white' />
              </div>
            </div>
            <Plus className='hover:text-white bg-white/20 rounded-full box-content p-2' />
          </div>

          <div className='flex text-white/70 gap-4 items-center'>
            <Bell size={15} className='hover:text-white' />
            <Users size={15} className='hover:text-white' />
            <CircleUser className='hover:text-white bg-white/20 rounded-full box-content p-2' />
          </div>
        </header>
    )
}
