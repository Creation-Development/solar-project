import { useEffect } from 'react';
import video from '../assets/video.mp4'
export const HomePage = (props) => {
  return (
    <header id='header'>
          <div className='banner'>
                <video autoPlay muted loop src={video} />
                <div className='content'>
                    <h1 className='text-center'>Full Screen Video Background</h1>

                    <div className="btn-grp w-100 p-4">
                        <button>EV Charger</button>
                        <button>Solar</button>
                        <button>Download APK</button>
                    </div>
                </div>
            </div>
    </header>
  )
}
