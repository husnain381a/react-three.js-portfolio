import React from 'react';

const LOGO_SRC = '/assets/favicon.png';

function LogoPreloader() {
  return (
    <div className='logo-preloader' role='status' aria-live='polite' aria-label='Loading site'>
      <div className='logo-preloader__stage'>
        <img
          src={LOGO_SRC}
          alt='Site logo loading'
          className='logo-preloader__logo logo-preloader__logo--base'
          draggable='false'
        />
        <img
          src={LOGO_SRC}
          alt=''
          aria-hidden='true'
          className='logo-preloader__logo logo-preloader__logo--fill'
          draggable='false'
        />
      </div>
    </div>
  );
}

export default LogoPreloader;
