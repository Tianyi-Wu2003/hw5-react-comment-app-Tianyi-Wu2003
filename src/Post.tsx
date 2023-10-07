import React, { useState } from 'react';
import Vote from './Vote'

interface CompletePost {
  id: number,
  currName: string,
  currText: string;
}
function Post({ depth } : {depth:number}) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [replies, setReplies] = useState<CompletePost[]>([]);
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
    <div className=" p-4 container mx-auto mb-4 border-2 rounded">
      <div className=' flex flex-col'>
        <input 
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='container mx-auto mb-2 border-2 rounded'
        />
        <textarea
          placeholder="Enter your post or reply"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='container mx-auto mb-2 border-2 rounded'
        />
        <button 
          type = "button" 
          onClick={addReply}
          className=' text-white text-left bg-sky-500 mr-auto'
          >Post
        </button>
        

        {replies.map((content) => (
          <><div key={content.id} className='flex-row flow-root'>
            <div className=' float-left'>
              <p>{content.currName}</p>
              <p>{content.currText}</p>
              <button
                type="button"
                onClick={() => setWillReply(!willReply)}
              >
                {willReply ? "Hide replies" : "Reply"}
              </button>
            </div>
            <div className=' float-right'>
              <Vote />
            </div>
          </div><div>
              {willReply && canAddReply && <Post depth={depth + 1} />}
            </div></>
        ))}
      </div>
    </div>
  );
}

export default Post;
