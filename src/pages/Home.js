import React, { useState, useEffect } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase";

function Home({ isAuth }) {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts"); //collection takes two arguement as first the db and second where you wanna update

  //we need postlist when component is loaded so here we use useEffect

  const getPosts = async () => {
    try {
      onSnapshot(postsCollectionRef, (snapshot) => {
        const postList = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setPosts(postList);
        return postList;
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    // const getPosts = async () => {
    //   const data = await getDocs(postsCollectionRef);
    //   setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  // const updatePost = async (post, id) => {
  //   const postDoc = doc(db, post, id);
  //   await updateDoc(postDoc);
  // };
  return (
    <div className="homePage">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <>
                    {/* <button onClick={() => updatePost(post, post.id)}>
                      Update Post
                    </button> */}
                    <button onClick={() => deletePost(post.id)}>X</button>
                  </>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
