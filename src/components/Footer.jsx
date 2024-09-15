import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  
  return (
    <div className='footer'>
      <p>©Akash Kumar</p>
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/akash-shrivastava-719775111/')} />
      <GitHubIcon onClick={() => window.open('https://github.com/Akash-1301')} />
    </div>
  );
}
