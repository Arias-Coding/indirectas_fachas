import React, { useState } from "react";
import "./index.css";

export default function App() {
  const frases = [
    "Cómo le escribo sin escribirle?",
    "Donde todo sea mutuo",
    "Nadie te va a querer más que yo",
    "Mi mejor amiga es mi persona favorita",
    "Un dpto, un título, un auto y un perro ese es mi sueño",
    "Te quiero abrazar pero estás lejos.",
    "Te extraño, vení a dormir conmigo.",
    "Solo deseo que las cosas me empiecen a salir bien.",
    "El problema es que te quiero ver después de verte.",
    "No tenes idea de lo mucho que te extraño.",
    "Llamame que te extraño",
    "Tengo miedo a tu respuesta, por eso no pregunto",
    "Tan facil de reemplazar soy?",
    "Cuidame y no me voy nunca",
    "Me haces re bien",
    "No te vayas nunca",
  ];
  const [SelecPhrase, setSelecPhrase] = useState(0);

  return (
    <div className="bg-slate-500 h-screen w-screen flex justify-center items-center flex-col">
      <div className="bg-black flex justify-center items-center">
        <div className="flex gap-2 pl-6 py-44">
          <img
            src="https://i.ibb.co/k9CzR8D/img.png"
            // src="https://i.ibb.co/4pFMfFD/img.jpg"
            class="h-24 w-24 rounded-full object-cover"
          />
          <div className="pt-2 w-72 mr-8">
            <div className="flex items-end gap-1.5">
              <p className="text-white text-lg italic">:)</p>
              <p className="text-gray-400 text-base">@indirectas_fachas</p>
            </div>
            <p className="text-white text-lg pl-2 font-normal leading-6 pt-0">
              {frases[SelecPhrase]}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 text-white">
        <button
          onClick={() => {
            setSelecPhrase(SelecPhrase - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setSelecPhrase(SelecPhrase + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
