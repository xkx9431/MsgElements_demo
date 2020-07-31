import React, { } from 'react';
import Avatar from  './component/avatar'

function App() {
  return (
    <div >
      <h1>
        Message Elements using typescript
      </h1>
      <br/>
      <div className="show-panel">
      <div className="avatar">
      Size Large
        <Avatar size= { 'large'}
        src = { 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg' }
        alt = {'sample avatar'}
        onAvatarClick = {  (e:any) => e.preventDefault()}
        />
        <br/>
        Size medium
        <Avatar size= { 'medium'}
          src = { 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg' }
          alt = {'sample avatar'}
          onAvatarClick = {  (e:any) => e.preventDefault()}
          />
          <br/>
        Size small
        <Avatar size= { 'small'}
          src = { 'https://xkx9431.github.io/xkx_blog/img/xkx_eye_photo.jpg' }
          alt = {'sample avatar'}
          onAvatarClick = {  (e:any) => e.preventDefault()}
          />
      </div>

      </div>
    </div>
  );
}

export default App;
