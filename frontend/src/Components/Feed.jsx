import React, { useState } from "react";

const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState("/hero.png"); // Set default image
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [visibleComments, setVisibleComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Day 1 of #30DaysOfCode – The Journey Begins!",
      image: "/hero.png", // Updated to use hero.png
      time: new Date().toLocaleString(),
      likes: 3,
      comments: ["Great start!", "Looking forward to your journey!"],
    },
    {
      id: 2,
      content: "Day 2 of #30DaysOfCode – The Journey Begins!",
      image: "/photo.jpg", // Updated to use hero.png
      time: new Date().toLocaleString(),
      likes: 3,
      comments: ["Great start!", "Looking forward to your journey!"],
    },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent("");
    setImage("/hero.png"); // Reset to default image
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handlePost = () => {
    if (postContent.trim() === "") return;

    const newPost = {
      id: Date.now(),
      content: postContent,
      image: image, // This will now always have a value (either default or uploaded)
      time: new Date().toLocaleString(),
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    closeModal();
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: likedPosts.has(id) ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );

    setLikedPosts((prevLikedPosts) => {
      const newLikedPosts = new Set(prevLikedPosts);
      if (newLikedPosts.has(id)) {
        newLikedPosts.delete(id);
      } else {
        newLikedPosts.add(id);
      }
      return newLikedPosts;
    });
  };

  const handleComment = (id) => {
    const comment = commentInputs[id]?.trim();
    if (!comment) return;
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
    setCommentInputs({ ...commentInputs, [id]: "" });
  };

  const toggleComments = (id) => {
    setVisibleComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {/* Create post card */}
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src="/hero.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <button
            onClick={openModal}
            className="bg-gray-100 hover:bg-gray-200 rounded-full py-3 px-4 w-full text-left text-gray-500 transition"
          >
            Start a post
          </button>
        </div>
        <div className="flex justify-between mt-3">
          <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-colors text-gray-600">
            <span className="text-[#42b6b5] mr-2">📷</span>
            <span className="text-sm font-medium">Media</span>
          </button>
          <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-colors text-gray-600">
            <span className="text-[#42b6b5] mr-2">💼</span>
            <span className="text-sm font-medium">Job</span>
          </button>
          <button className="flex items-center px-3 py-1 rounded-md hover:bg-gray-100 transition-colors text-gray-600">
            <span className="text-[#42b6b5] mr-2">✍️</span>
            <span className="text-sm font-medium">Write article</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <img
                src="/hero.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Arpit Joshi</h3>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>
            
            <div className="mt-3">
              <p className="text-[#1e293b] whitespace-pre-line">{post.content}</p>
            </div>
            
            {/* Image will always show now */}
            <div className="mt-3">
              <img 
                src={post.image} 
                alt="Post" 
                className="w-full rounded-md object-cover" 
              />
            </div>
            
            {/* Engagement stats */}
            <div className="flex justify-between items-center mt-3 pt-2 text-xs text-gray-500">
              <div className="flex items-center">
                <span className="bg-[#e6f5f5] text-[#42b6b5] p-1 rounded-full">👍</span>
                <span className="ml-1">{post.likes} Likes</span>
              </div>
              <button 
                onClick={() => toggleComments(post.id)} 
                className="hover:underline"
              >
                {post.comments.length} comments
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="border-t border-gray-200">
            <div className="flex justify-around">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center justify-center py-2 px-4 w-full hover:bg-gray-100 transition ${
                  likedPosts.has(post.id) ? "text-[#42b6b5]" : "text-gray-600"
                }`}
              >
                <span className="mr-1">👍</span>
                <span className="font-medium text-sm">Like</span>
              </button>

              <button
                onClick={() => toggleComments(post.id)}
                className="flex items-center justify-center py-2 px-4 w-full hover:bg-gray-100 transition text-gray-600"
              >
                <span className="mr-1">💬</span>
                <span className="font-medium text-sm">Comment</span>
              </button>

              <button
                className="flex items-center justify-center py-2 px-4 w-full hover:bg-gray-100 transition text-gray-600"
              >
                <span className="mr-1">↪️</span>
                <span className="font-medium text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* Comments section */}
          {visibleComments[post.id] && (
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              {post.comments.map((comment, index) => (
                <div key={index} className="mb-3 pb-3 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex space-x-2">
                    <img
                      src="/hero.png"
                      alt="Profile"
                      className="w-8 h-8 rounded-full mt-1"
                    />
                    <div className="flex-1">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <h4 className="font-semibold text-sm text-[#1e293b]">Arpit Joshi</h4>
                        <p className="text-sm text-gray-700">{comment}</p>
                      </div>
                      <div className="flex space-x-4 mt-1 text-xs text-gray-500">
                        <button className="font-medium hover:text-[#42b6b5]">Like</button>
                        <button className="font-medium hover:text-[#42b6b5]">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add comment */}
              <div className="flex space-x-2 mt-3">
                <img
                  src="/hero.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full py-2 px-3 pr-12 bg-gray-100 rounded-full border border-gray-300 focus:outline-none focus:border-[#42b6b5] focus:ring-1 focus:ring-[#42b6b5]"
                    value={commentInputs[post.id] || ""}
                    onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleComment(post.id);
                      }
                    }}
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    disabled={!commentInputs[post.id]?.trim()}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#42b6b5] disabled:text-gray-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Create post modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg w-full max-w-lg z-10 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-[#1e293b] text-white">
              <h2 className="text-xl font-bold">Create Post</h2>
              <button 
                onClick={closeModal}
                className="text-white hover:text-gray-300 rounded-full p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/hero.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#1e293b]">Arpit Joshi</h3>
                  <select className="text-xs border rounded px-2 py-1 bg-gray-100 text-gray-700 focus:border-[#42b6b5] focus:ring-1 focus:ring-[#42b6b5] focus:outline-none">
                    <option>🌎 Public</option>
                    <option>👥 Connections only</option>
                    <option>🔒 Private</option>
                  </select>
                </div>
              </div>
              
              <textarea
                className="w-full border-0 focus:ring-0 p-2 resize-none h-32 placeholder-gray-500"
                placeholder="What do you want to talk about?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              ></textarea>
              
              {/* Always show an image preview */}
              <div className="relative mt-2">
                <img src={image} alt="Preview" className="rounded-lg w-full max-h-60 object-cover" />
                {image !== "/hero.png" && (
                  <button 
                    className="absolute top-2 right-2 bg-[#1e293b] bg-opacity-75 rounded-full p-1 text-white hover:bg-opacity-100"
                    onClick={() => setImage("/hero.png")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <label className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer text-[#42b6b5]">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#42b6b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#42b6b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm4-7a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm4-4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <button
                  onClick={handlePost}
                  disabled={!postContent.trim()}
                  className="px-6 py-2 rounded-full bg-[#42b6b5] text-white font-medium disabled:bg-[#99d9d8] hover:bg-[#328a89] transition"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;