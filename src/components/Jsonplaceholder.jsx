import { useEffect, useState } from "react";
import "./Jsonplaceholder.css";
export const Jsonplaceholder = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(baseURL);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <p>Jsonplaceholder</p>
      <div>
        {isLoading && (
          <section className="loader">
            <div class="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
        )}
      </div>
      {data && (
        <table className="dataTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, index) => (
              <tr key={index}>
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
