import { useState } from "react";
import { chevron } from "../assets/icons";
import { IPost } from "../interfaces";

export function Table({
  posts,
  setVariant,
  search,
  allPosts,
}: {
  posts: IPost[];
  setVariant: (variant: "original" | "alphabetical") => void;
  search: string;
  allPosts: IPost[];
}) {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <div className="th-inner">ID</div>
          </th>
          <th>
            <button className="th-inner" onClick={() => setIsPopup(!isPopup)}>
              Заголовок {chevron}
              {isPopup ? (
                <div className="popup">
                  <button
                    className="popup-btn"
                    onClick={() => {
                      setVariant("original");
                      setIsPopup(false);
                    }}
                  >
                    Order by original
                  </button>
                  <button
                    className="popup-btn"
                    onClick={() => {
                      setVariant("alphabetical");
                      setIsPopup(false);
                    }}
                  >
                    Order by alphabet
                  </button>
                </div>
              ) : null}
            </button>
          </th>
          <th>
            <div className="th-inner">Описание</div>
          </th>
        </tr>
      </thead>
      {posts ? (
        search.length >= 1 ? (
          <tbody>
            {allPosts
              .filter((post) => {
                return search.toLowerCase() === ""
                  ? post
                  : post.title.toLowerCase().includes(search);
              })
              .map((post, idx) => {
                return (
                  <tr key={idx}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                );
              })}
          </tbody>
        ) : (
          <tbody>
            {posts.map((post, idx) => {
              return (
                <tr key={idx}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        )
      ) : null}
    </table>
  );
}
