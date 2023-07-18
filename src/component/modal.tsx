import React from 'react'

interface modalAlert{
    text?:string;
    onClick?: () => void;
    header?:string; 
    onCancel?: () => void;

}

  const Modal: React.FC<modalAlert> = ({text, onClick, header, onCancel})=>{
    return(
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-50">
        <div className="bg-white w-80 h-48 rounded-lg overflow-hidden flex flex-col justify-center items-center">
          <div className="py-2">
            <h3 className="text-black text-center font-bold text-2xl">{header}</h3>
          </div>
          <p className="text-center text-black py-2">{text}</p>
          <div className="flex gap-3">
          <button className="bg-sky-600 text-white  font-bold text-lg w-28 h-8 rounded-xl mt-5 transform-gpu transition-transform duration-300 active:scale-90" onClick={onClick}>
            OK
          </button>
          {onCancel && (
            <button className="bg-amber-400 text-white font-bold text-lg w-28 h-8 rounded-xl mt-5 transform-gpu transition-transform duration-300 active:scale-90" onClick={onCancel}>
              Cancel
            </button>
          )}

          </div>
        </div>
      </div>
    );
};

export default Modal;