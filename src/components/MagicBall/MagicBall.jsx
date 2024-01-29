import './MagicBall.css';

export default function MagicBall({answer, answerNumber}) {
    return (
        <div 
        className='magic-ball'>
         { answer }
        </div>
        )
}