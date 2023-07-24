import { Table } from "../components/Table";
import { Pagination } from "../components/Pagination";
import { useContext } from "react";
import { PostsContext } from "../contexts/posts";

export default function HomePage() {
  const { postObject, isLoading, page, setPage, setVariant } =
    useContext(PostsContext);

  return (
    <main className="main">
      <div className="box content">
        <form className="form"></form>
        <div className="main-data">
          <Table posts={postObject.data} setVariant={setVariant} />
          <Pagination
            page={page}
            setPage={setPage}
            numbers={postObject.numbers}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : null}
    </main>
  );
}
