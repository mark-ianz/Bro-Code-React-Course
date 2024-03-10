
import profilePic from '../assets/my_president.png';
export default function Card (props) {
  return <>
    <div className="card">
      <img src={profilePic} className='card-image' alt="Profile Picture"/>
      <h1 className='card-title'>
        Kai Sotto
      </h1>
      <p className='card-text'>
        President of the Philippines
      </p>
    </div>
  </>
}