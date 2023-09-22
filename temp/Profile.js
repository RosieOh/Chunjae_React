import React from 'react';
import WithRouterData from './WithRouterSample';

const data = {
  sangmin: {
    name: '최상민',
    description: '프론트엔드를 좋아하는 개발자'
  },
  yeun: {
    name: '신예은',
    description: '백엔드를 좋아하는 개발자'
  },
  seokwang: {
    name: '서광',
    description: '챗GTP를 사랑하는 개발자'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterData />
    </div>
  );
};
export default Profile;