import React, { useState } from 'react';
import Vote from './Vote'

function Post({ depth }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [replies, setReplies] = useState([]);
  const [willReply, setWillReply] = useState(false)
  
  const canAddReply = depth < 3;


  const addReply = () => {
    if(name && text) {
      const updatedList = [...replies, {
        id : replies.length + 1,
        currName : name,
        currText : text
      }];
      setReplies(updatedList);
      setName('');
      setText('');
    }
  }

  return (
    <div className=" container mx-auto mb-7">
      <input 
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Enter your post or reply"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {canAddReply && (
        <button 
          type = "button" 
          onClick={addReply}
        >Post</button>
      )}

      {replies.map((content) => (
        <div key={content.id}>
          <div>
            <p>{content.currName}</p>
            <p>{content.currText}</p>
            <Vote/>
            <button
              type = "button"
              onClick={() => setWillReply(!willReply)}
            >
              {willReply ? "Hide replies" : "Reply"}
            </button>
          </div>
          {willReply && <Post depth={depth + 1} />}
        </div>
      ))}
    </div>
  );
}

export default Post;
