import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IPost, IPostObject, IPostsContext } from "../interfaces";

const url = "https://jsonplaceholder.typicode.com/posts";

async function handlePosts(
  currentPage: number,
  variant: "original" | "alphabetical"
) {
  const limit = 10;

  if (variant === "original") {
    const response = await axios.get(url);
    const data: IPost[] | [] = await response.data;
    const lastIndex = currentPage * limit;
    const firstIndex = lastIndex - limit;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / limit);
    const numbers = [...Array(npage).keys()].slice(1);

    return {
      data: records,
      numbers,
      allPosts: data,
    };
  } else {
    const response = await axios.get(url);
    const data: IPost[] | [] = await response.data;
    const sortedData = data.sort((a: IPost, b: IPost) => {
      const post1 = a.title.toLowerCase();
      const post2 = b.title.toLowerCase();

      if (post1 < post2) return -1;
      else if (post1 > post2) return 1;

      return 0;
    });
    const lastIndex = currentPage * limit;
    const firstIndex = lastIndex - limit;
    const records = sortedData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(sortedData.length / limit);
    const numbers = [...Array(npage).keys()].slice(1);

    return {
      data: records,
      numbers,
      allPosts: data,
    };
  }
}

export const PostsContext = createContext<IPostsContext>({
  postObject: {
    data: [],
    numbers: [],
  },
  isLoading: true,
  page: 1,
  setPage: () => {},
  setVariant: () => {},
  allPosts: [],
});

export default function PostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [postObject, setPostObject] = useState<IPostObject>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [variant, setVariant] = useState<"original" | "alphabetical">(
    "original"
  );
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setIsLoading(true);
    handlePosts(page, variant)
      .then((r) => {
        setPostObject(r);
        setAllPosts(r.allPosts);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [page, variant]);

  const value = {
    postObject,
    isLoading,
    page,
    setPage,
    setVariant,
    allPosts,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
