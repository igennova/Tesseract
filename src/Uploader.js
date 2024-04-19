import { useState, Fragment, useEffect } from "react";
import Tesseract from 'tesseract.js';
import Footer from './Footer';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [textResult, setTextResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setTextResult(event.target.value);
  };

  useEffect(() => {
    const imagetoText = async () => {
      setIsLoading(true);
      try {
        const { data: { text } } = await Tesseract.recognize(
          image,
          'eng',
          {
            logger: m => console.log(m)
          }
        );
        setTextResult(text);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    if (image) {
      imagetoText();
    }
  }, [image]);

  return (
    <Fragment>
      <div className='content'>
        <div className='container'>
          <div className='image-container'>
            <h1>Image</h1>
            <label for="upload" class="input-file">
              <input type="file" accept="image/*" id="upload" class="file-input" onChange={handleImage} />
            </label>

            {isLoading ? (
              <p>Loading...</p>
            ) : image && (
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
     
    </Fragment>
  );
}

export default Upload;
