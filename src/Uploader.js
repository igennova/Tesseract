import {useState,Fragment,useEffect} from "react";
import NavScrollExample from './Navbar';
import Tesseract from 'tesseract.js';
import Footer from './Footer';
const Upload=()=>{
    const [image, setImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setTextResult(event.target.value);
  };

  useEffect(() => {
    const imagetoText = async () => {
      try {
        const { data: { text } } = await Tesseract.recognize(
          image,
          'eng',
          {
            logger: m => console.log(m)
          }
        );
        setTextResult(text);
      } catch (error) {
        console.error(error);
      }
    };

    if (image) {
      imagetoText();
    }
  }, [image]);

  return (
    <Fragment>
      <div className='content'>
        {/* <NavScrollExample /> */}
        <div className='container'>
          <div className='image-container'>
            <h1>Image</h1>
            <label for="upload" class="input-file">

  <input type="file" accept="image/*" id="upload" class="file-input" onChange={handleImage} />
</label>

            {image && (
              <img src={URL.createObjectURL(image)} alt="image" />
            )}
          </div>
          <div className='text-container'>
            <h1>Text</h1>
            {textResult && (
              <textarea value={textResult} className='textarea' onChange={handleTextChange} />
            )}
          </div>
        </div>
      
      </div>
      <div className='footer'>
     
      </div>
    </Fragment>

  )}
export default Upload