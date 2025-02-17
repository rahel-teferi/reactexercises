import { useEffect, useState } from "react";
import "./Jsonplaceholder.css";
import { useNavigate } from "react-router-dom";

export const Jsonplaceholder = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw error("not found");
      }
      const result = await response.json();
      setData(result);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const navigate = useNavigate();

  // if (error) {
  //   return <p>{error}</p>;
  // }
  if (isLoading) {
    return (
      <section className="loader">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  // function handleRowClick(e)
  const handleRowClick = (id, e) => {
    // to stop event bubbling from hapenning
    // e.stopPropagation();
    // console.log(e.target);
    // console.log(e.target.parentElement.dataset.id);
    console.log("Id=" + id);
    navigate(`/json/${id}`); // json/5
  };

  // event bubbling triggers this event handler
  // const handleTableClick = () => {
  //   console.log("Clicked on the table!");
  // };

  return (
    <div>
      <p>Jsonplaceholder</p>
      {/* <div>
        {isLoading && (
          <section className="loader">
            <div class="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
        )}
      </div> */}
      {data && (
        // <table className="dataTable" onClick={handleTableClick}>
        <table className="dataTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id} onClick={(e) => handleRowClick(post.id, e)}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                Total
                <span id="total">{data.length}</span> Posts
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
