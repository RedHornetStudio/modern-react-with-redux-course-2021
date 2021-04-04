import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const commentsData = [
    { author: 'Sam', avatar: faker.image.avatar(), content: 'Nice blog post', timeAgo: 'Yesterday at 4:32 PM' },
    { author: 'Mike', avatar: faker.image.avatar(), content: 'i like the subject', timeAgo: 'Yesterday at 6:10 PM' },
    { author: 'Manu', avatar: faker.image.avatar(), content: 'I like the writing', timeAgo: 'Today at 10:03 AM' },
    { author: 'Hey', avatar: faker.image.avatar(), content: 'It is good', timeAgo: 'Today at 3:52 PM' }
  ]

  const commentsList = commentsData.map(elem => {
    return <ApprovalCard key={elem.author}><CommentDetail author={elem.author} avatar={elem.avatar} content={elem.content} timeAgo={elem.timeAgo} /></ApprovalCard>
  });

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <div>Are you sure you want to do this?</div>
        </div>
      </ApprovalCard>
      {commentsList}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));