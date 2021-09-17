// import MainApp from "./Haramain/MainApp";
// import React, { useState } from "react";

// function App() {
//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [StoreData, setStoreData] = useState([]);

//   const FormHandler = (event) => {
//     event.preventDefault();

//     const Data = { Email, Name };
//     return setStoreData([Data, ...StoreData]);
//   };
//   return (
//     <div>
//       <form>
//         <input
//           value={Name}
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           value={Email}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit" onClick={FormHandler}>
//           Submit
//         </button>
//       </form>
//       {/* <div>{console.log(StoreData)}</div> */}

//       {/* {StoreData.map((it) => it.Name)} */}
//       <div>
//         {StoreData.map((it) => (
//           <div>
//             <p>{it.Name}</p>
//             <p>{it.Email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import { ifStatement } from "@babel/types";
import React from "react";
import { useState } from "react";

const App = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Data, setData] = useState([]);
  const [Error, setError] = useState({
    Name: false,
    Email: false,
  });

  const FormHandler = (e) => {
    e.preventDefault();
    const NewData = { Email, Name };
    // switch (Name && Email == "" && Email && Name === "") {
    //   case "":
    //     return setError({ Name: true, Email: true });
    //     break;

    //   default:
    //     return setData([NewData, ...Data]), setName(""), setEmail("");

    //     break;
    // }
    if (Name == "") {
      return setError({ Name: true });
    }
    if (Email == "") {
      return setError({ Email: true });
    } else {
      return (
        setData([NewData, ...Data]), setName(""), setEmail(""), setError(false)
      );
    }

    // if (Name == "") {
    //   return setError(true);
    // }
    // if (Email == "") {
    //   return setError(true);
    // } else {
    //   return null;
    // }

    // Name || Email == "" ? Error : "";
    // setName("");
    // setEmail("");
  };

  return (
    <div>
      <form>
        <input
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {Error.Name ? <p style={{ color: "red" }}>Please Fill Name</p> : ""}
        {/* {Error ? <p style={{ color: "red" }}>Please Fill It</p> : ""} */}
        {/* {Name == "" ? <p style={{ color: "red" }}>Please Fill It</p> : ""} */}
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {Error.Email ? <p style={{ color: "red" }}>Please Fill Email</p> : ""}

        {/* {Email == "" ? <p style={{ color: "red" }}>Please Fill It</p> : ""} */}

        <button onClick={FormHandler} type="submit">
          Submit
        </button>
      </form>
      <div>
        {Data.map((it) => (
          <div>
            <p>{it.Name}</p>
            <p>{it.Email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
