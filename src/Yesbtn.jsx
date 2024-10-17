import React from "react";

function Yesbtn() {
//   const [msg, setMsg] = useState("");
  const handelclick = () => {
    //window.location.href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFVvrV7v2pEdbtjY_kX2Ajt8WCYY3iGsN5g&s"
    alert("I also love you yarr!")
  };
  return (
    <div>
      <button
        onClick={handelclick}
        className="px-8 py-2 bg-blue-500 text-white rounded text-2xl border-2 border-black"
      >
        YES
      </button>
      {/* {msg && <p className="mt-4 text-lg text-gray-700">{msg}</p> */}
    </div>
  );
}

export default Yesbtn;
