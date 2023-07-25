import { Table } from "../components/Table";
import { Pagination } from "../components/Pagination";
import { useContext, useState } from "react";
import { PostsContext } from "../contexts/posts";
import { lupa } from "../assets/icons";

export default function HomePage() {
  const { postObject, isLoading, page, setPage, setVariant, allPosts } =
    useContext(PostsContext);

  const [search, setSearch] = useState<string>("");

  return (
    <main className="main">
      <div className="box content">
        <form className="form">
          <input
            type="text"
            placeholder="Поиск"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">{lupa}</button>
        </form>
        <div className="main-data">
          <Table
            posts={postObject.data}
            setVariant={setVariant}
            search={search}
            allPosts={allPosts}
          />
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
