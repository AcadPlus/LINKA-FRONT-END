import React from 'react'

export default function CardStage() {
  return (
    <div className="flex gap-3 justify-center">
      <div className="flex flex-col items-center gap-2 mt-1">
        <div className="w-4 h-4 rounded-full block bg-[#4576ff]"></div>
        <div className="w-[2px] rounded-lg h-10 block bg-[#4576ff]"></div>
      </div>
      <div>
        <h4 className="text-sm font-semibold">
          Reunião com setor que será uniformizado
        </h4>
        <p className="text-sm"> (quarta, 28/02, 14h, PREX PICI, Estēvåo)</p>
      </div>
    </div>
  )
}
