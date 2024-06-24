import { useCatImage } from '../Hooks/useCatImage.jsx'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'cat' })
  console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}