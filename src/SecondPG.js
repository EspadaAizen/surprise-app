import './AppB.css';
import{useNavigate} from 'react-router-dom';
function SecondPG(){

    const navigate2 = useNavigate();
function handleClick2(){
        navigate2("/ThirdPG");
    }
return (
<div className='SecondApp'>
    <header className='second-page'>
        <div className='blep'>
        <h2>Woopsie you have been blepped</h2>
        <h2 className='jk'>Hehehe nahh just kidding click on the button below</h2>
        </div>
        
            <button className='submit-clone' onClick={handleClick2}>Click Here To See Magic Fr tho hehehe </button>
    </header>
</div>

);
}

export default SecondPG