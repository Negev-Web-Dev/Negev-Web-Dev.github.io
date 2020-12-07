import { useEffect } from 'react'
import React from 'react';

const commentNodeId = 'comments';

const Comment = () => {
  useEffect(() => {
    // docs - https://utteranc.es/
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'Negev-Web-Dev/Negev-Web-Dev.github.io')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('id', 'utterances')
    script.setAttribute('label', 'comment :speech_balloon:')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')

    const scriptParentNode = document.getElementById(commentNodeId);
    scriptParentNode.appendChild(script);

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, []);

  return <div id={commentNodeId} />;
};

export default Comment;
