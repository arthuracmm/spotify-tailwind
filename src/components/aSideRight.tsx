import { CircleCheck } from "lucide-react";
import matoseco from '../../public/image/mato-seco.png'
import matosecomembros from '../../public/image/mato-seco-membros.jpg'

export function ASideRight(){
    return(
        <aside className="bg-zinc-900 rounded-xl p-4 text-white/70 w-90 flex-shrink-0 overflow-y-auto">
            <h3 className='font-bold text-lg'>fds+</h3>
            <img src={matoseco} alt="a" className='mt-4' />

            <div className="flex justify-between items-center">
              <div>
                <h1 className='font-bold text-2xl mt-4 text-white'>Navegantes da Ilusão</h1>
                <p>Mato Seco, Circuito Reggae</p>
              </div>
              <div>
                <CircleCheck className='text-green-500' />
              </div>
            </div>

            <div className="flex flex-col bg-white/5 mt-4 rounded-lg overflow-hidden">
              <img src={matosecomembros} alt="a" />
              <div className="flex justify-between p-2 items-center">
                <div>
                  <p className='font-bold text-xl'>Mato Seco</p>
                  <p>393.450 Ouvintes Mensais</p>
                </div>
                <a href="#" className='border p-2 rounded-lg font-bold hover:bg-white/20'>Seguir</a>
              </div>
              <p className='p-2 text-sm text-white/40'>Formado por Rodrigo Piccolo (vocal e guitarra), Eric Oliveira (guitarra), Osvaldo Ciziniaukas Jr. (contrabaixo), João Paz (órgão e piano), Tiago Rezende (bateria),...</p>
            </div>
          </aside>
    )
}