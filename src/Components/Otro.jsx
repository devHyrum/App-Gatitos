import { useCatImage } from "../Hooks/useCatImage.jsx";

export function Otro() {
  const { imageUrl } = useCatImage({ fact: "cat" });

  return <>{imageUrl && <img src={imageUrl} />}</>;
}
