import { useCatImage } from './Hooks/useCatImage.jsx'
import { useCatFact } from './Hooks/useCatFact.jsx'
import './index.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main className='m-5 font-[Montserrat] border-2 border-gray p-3 rounded-2xl	shadow-2xl place-content-center w-[500px]'>

      <div className='flex place-content-start mb-3'>

      <h1 className='bg-slate-500 text-white text-xl flex place-content-center py-2 px-2 rounded-2xl mr-2'>App de gatitos</h1>

      <button className='bg-slate-700 text-white px-5 py-1 mt-3 hover:bg-slate-600      cursor-pointer rounded-2xl' onClick={handleClick}>Get new fact ✅</button>

      </div>
      

      {fact && <p className='italic mb-3 '>"{fact}"</p>}
      <figure className='w-[400px] h-[100%] relative left-9'>
        {imageUrl && <img className='rounded-2xl' src={imageUrl} alt={`Image extracted  using the first three words for ${fact}`} />}
      </figure>
    </main>
  )
}