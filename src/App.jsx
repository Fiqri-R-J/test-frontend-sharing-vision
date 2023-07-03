import axios from "axios";
import Navbar from "./component/navbar";
import React from "react";

function App() {
  let [article, setArticle] = React.useState([]);
  let url = "http://localhost:3000/";
  React.useEffect(() => {
    axios
      .get(`${url}article`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    // const displayArticle = async () => {
    //   try {
    //     const data = await axios.get("http://localhost:3000/article");
    //     setArticle(data?.data?.data);
    //     console.log(data);
    //   } catch (error) {
    //     console.log("ini error", error);
    //   }
    // };
    // displayArticle();
  });
  return (
    <>
      <Navbar />
      <div className="bg-white h-screen text-black">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black">
                <th>No</th>
                <th>Title</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
