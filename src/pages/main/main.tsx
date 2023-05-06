import { getDocs, collection,deleteDoc,doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

export interface Post {
  id: string;
  userId: string;
  title: string;
  user: string;
  description: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");
  const [user] = useAuthState(auth);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };
  const deletePost = async (id: string) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    getPosts();
  }, [deletePost]);

  return (
    <div className="homepage">
      {!user && <p className="login-message">Login to continue</p>}
      {user && postsList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
