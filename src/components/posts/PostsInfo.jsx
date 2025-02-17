import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const PostsInfo = () => {
  const [user, setUser] = useState([]);
  //const { postId } = useParams();

  const params = useParams();
  const postId = Number(params.postId);
  //const navigate = useNavigate();
  const fetchUsers = async () => {
    console.log(postId);
    //console.log(id);
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(`${baseURL}/${postId}`);
      if (!response.ok) {
        throw error("not found");
      }
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchUsers(postId);
  }, []);

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
      {/* <button type="button" onClick={(e) => prevUser(user.id, e)}>
        Prev
      </button>
      <button>Next</button> */}
    </div>
  );
};
