
import { useState } from "react";
import { FaThumbsUp, FaCommentDots, FaPaperPlane, FaUser, FaCode, FaBookOpen } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";



const Forums = () => {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      author: "Aryan Sharma", 
      authorRole: "Frontend Developer",
      avatar: "A",
      content: "How to prepare for tech interviews at FAANG companies? Looking for structured resources and advice from those who've been through the process.", 
      likes: 42, 
      comments: [
        { author: "Neha Patel", avatar: "N", content: "Practice DSA daily on LeetCode! Focus on medium difficulty problems." },
        { author: "Raj Mehta", avatar: "R", content: "Check out 'Cracking the Coding Interview' book and AlgoExpert. They were game-changers for me." }
      ], 
      showComments: false, 
      liked: false,
      tags: ["Interviews", "Career", "DSA"]
    },
    { 
      id: 2, 
      author: "Neha Patel", 
      authorRole: "Full Stack Developer",
      avatar: "N",
      content: "What are the best resources to learn React in 2025? I've been using Angular but want to switch to React for better job prospects.", 
      likes: 28, 
      comments: [
        { author: "Aryan Sharma", avatar: "A", content: "React Docs are great after their recent redesign! Very beginner-friendly." },
        { author: "Maya Singh", avatar: "M", content: "Try Fullstackopen.com - it's free and comprehensive. The React section is excellent." }
      ], 
      showComments: false, 
      liked: false,
      tags: ["React", "Frontend", "Learning"]
    },
    { 
      id: 3, 
      author: "Vikram Yadav", 
      authorRole: "DevOps Engineer",
      avatar: "V",
      content: "Has anyone implemented CI/CD pipelines with GitHub Actions for a microservices architecture? Looking for best practices and common pitfalls to avoid.", 
      likes: 18, 
      comments: [], 
      showComments: false, 
      liked: false,
      tags: ["DevOps", "CI/CD", "GitHub"]
    }
  ]);
  
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "DevOps", "Career", "AI/ML"];

  const addPost = (e) => {
    e && e.preventDefault();
    
    if (newPost.trim()) {
      setPosts([
        { 
          id: Date.now(),
          author: "You", 
          authorRole: "Tech Enthusiast",
          avatar: "Y",
          content: newPost, 
          likes: 0, 
          comments: [], 
          showComments: false, 
          liked: false,
          tags: ["General"] 
        },
        ...posts
      ]);
      setNewPost("");
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
    ));
  };

  const toggleComments = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, showComments: !post.showComments } : post
    ));
  };

  const addComment = (id, e) => {
    e && e.preventDefault();
    
    if (newComment[id]?.trim()) {
      setPosts(posts.map(post => {
        if (post.id === id) {
          return { 
            ...post, 
            comments: [...post.comments, {
              author: "You",
              avatar: "Y",
              content: newComment[id]
            }], 
            showComments: true 
          };
        }
        return post;
      }));
      
      setNewComment(prev => ({ ...prev, [id]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
      <div className=" mx-auto">
       <Navbar/>
        
        <div className="flex flex-col md:flex-row my-4 gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden mb-6">
              <div className="p-4 bg-gradient-to-r from-[#42b6b5] to-[#3a9e9d] text-white font-bold">
                Categories
              </div>
              <div className="p-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`w-full text-left p-3 rounded-md transition mb-1 ${activeCategory === category ? 'bg-[#42b6b5] text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-[#42b6b5] to-[#3a9e9d] text-white font-bold">
                Trending Topics
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition cursor-pointer">
                  <FaCode className="text-[#42b6b5]" />
                  <span>React 19 Features</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition cursor-pointer">
                  <FaBookOpen className="text-[#42b6b5]" />
                  <span>System Design Basics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition cursor-pointer">
                  <FaCode className="text-[#42b6b5]" />
                  <span>AI in Web Development</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:w-3/4">
            <h1 className="text-3xl font-bold text-white mb-6 border-b-2 border-[#42b6b5] pb-2 inline-block">Tech Discussions</h1>
            
            {/* Post creation area */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl mb-8 border border-gray-700 overflow-hidden">
              <form onSubmit={addPost} className="p-6">
                <textarea 
                  className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#42b6b5] focus:ring-1 focus:ring-[#42b6b5] focus:outline-none transition"
                  placeholder="Start a technical discussion..." 
                  rows="3"
                  value={newPost} 
                  onChange={(e) => setNewPost(e.target.value)}
                />
                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="mt-3 px-5 py-2 bg-gradient-to-r from-[#42b6b5] to-[#3a9e9d] text-white font-medium rounded-md hover:opacity-90 transition-all flex items-center shadow-lg"
                  >
                    <FaPaperPlane className="mr-2" /> Post
                  </button>
                </div>
              </form>
            </div>
            
            {/* Posts list */}
            {posts.map(post => (
              <div key={post.id} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl mb-6 border border-gray-700 overflow-hidden transform transition hover:translate-y-[-2px]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#42b6b5] to-[#3a9e9d] flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {post.avatar}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-white text-lg">{post.author}</h3>
                      <p className="text-gray-400 text-sm">{post.authorRole}</p>
                    </div>
                  </div>
                  
                  <p className="text-white mb-4 text-lg">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-700 text-[#42b6b5] rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 border-t border-gray-700 pt-4">
                    <button 
                      type="button"
                      className={`flex items-center ${post.liked ? "text-[#42b6b5]" : "text-gray-300"} hover:text-[#42b6b5] transition`} 
                      onClick={() => likePost(post.id)}
                    >
                      <FaThumbsUp className="mr-2" /> {post.likes}
                    </button>
                    <button 
                      type="button"
                      className={`flex items-center ${post.showComments ? "text-[#42b6b5]" : "text-gray-300"} hover:text-[#42b6b5] transition`} 
                      onClick={() => toggleComments(post.id)}
                    >
                      <FaCommentDots className="mr-2" /> {post.comments.length}
                    </button>
                  </div>
                </div>

                {/* Comment Section */}
                {post.showComments && (
                  <div className="bg-gray-800 p-5 border-t border-gray-700">
                    {post.comments.length > 0 ? (
                      <div className="mb-5 space-y-4">
                        {post.comments.map((comment, index) => (
                          <div key={`${post.id}-comment-${index}`} className="flex">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#42b6b5] to-[#3a9e9d] flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-md">
                              {comment.avatar}
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md text-white text-sm flex-1 relative">
                              <div className="font-medium mb-1">{comment.author}</div>
                              {comment.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm mb-4">No comments yet. Be the first to comment!</p>
                    )}
                    
                    <form onSubmit={(e) => addComment(post.id, e)} className="flex items-center">
                    <input 
                      type="text" 
                      className="flex-1 h-12 p-4 bg-gray-700 text-white rounded-l-lg border border-gray-600 focus:border-[#42b6b5] focus:ring-1 focus:ring-[#42b6b5] focus:outline-none transition" 
                      placeholder="Write a comment..."
                      value={newComment[post.id] || ""}
                      onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                    />
                    <button 
                      type="submit"
                      className="h-12 px-4 bg-gradient-to-r from-[#42b6b5] to-[#3a9e9d] text-white font-semibold rounded-r-lg hover:opacity-90 transition-all flex items-center justify-center"
                     >
                      <FaPaperPlane />
                    </button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Forums;