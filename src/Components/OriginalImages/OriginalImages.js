import Layer1 from '../../assets/Layer1.bmp'
import Layer2 from '../../assets/Layer2.bmp'

function OriginalImages() {
  return (
    <>
        <div>
            <img src={Layer1} alt="Layer 1" />
        </div>
        <div>
            <img src={Layer2} alt="Layer 2" />
        </div>
    </>
  );
}

export default OriginalImages