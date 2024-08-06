import { useCatImage } from "./Hooks/useCatImage.jsx";
import { useCatFact } from "./Hooks/useCatFact.jsx";
import "./index.css";
import { useState, useEffect } from "react";
import { Button, Spinner, Datepicker, Tooltip } from "flowbite-react";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Espera pelo menos 2 segundos antes de remover o carregamento
    const timer = setTimeout(() => {
      if (fact && imageUrl) {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [fact, imageUrl]);

  const handleClick = async () => {
    setLoading(true);
    refreshFact();
  };

  return (
    <main className="m-5 font-[Montserrat] p-3 rounded-2xl shadow-2xl place-content-center w-[340px] lg:w-[500px] bg-white">
      <Datepicker className="absolute top-6 left-6 w-[170px]" />
      <div className="flex flex-col place-content-center items-center mb-3 relative">
        <h1 className="bg-slate-500 text-white text-xl flex w-[100%] place-content-center py-2 px-4 rounded-2xl mr-2 mb-4">
          App de gatitos
        </h1>
        <Tooltip content="Warning! Cute Cats..." className="">
          <Button color="dark" onClick={handleClick} className="">
            Get new fact!
          </Button>
        </Tooltip>
      </div>
      {loading ? (
        <div className="flex justify-center my-20">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : (
        <>
          <p className="italic mb-3 text-center">{fact}</p>

          <figure className="w-full flex justify-center">
            <img
              className="rounded-2xl w-[100%] lg:w-[80%] h-[100%]"
              src={imageUrl}
              alt={`Image extracted using the first three words for ${fact}`}
            />
          </figure>
        </>
      )}
    </main>
  );
}
