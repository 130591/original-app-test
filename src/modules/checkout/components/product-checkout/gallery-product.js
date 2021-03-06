import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  cloneElement,
  Children,
  createRef,
} from 'react';

import img from '../../../../core/public/prod02.png';

import { Image } from '../../../../core/resources/widgets/image';
import { Loading } from '../../../../core/resources/widgets/loading';

const HandleContext = createContext();

export const GalleryProduct = ({
  covers,
  children,
}) => {

  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState({ position: 0, photo: covers || null });

  const ref = createRef();

  useEffect(() => {
    if (covers) {
      setImages(covers)
      setActive({ position: 0, photo: covers[0] })
    }
  }, [covers]);

  function move(value) {
    if (value && current > 0) return;
    if (value && current < 0 ) return;

    if (value) setCurrent(current + value);
  }

  function show (e) {
    if (e.target.src && ref.current) {
      setActive({ photo: e.target.src });
      ref.current.className = 'c-gallery--show'
    }
  }

  function handleCarrosel(e) {
    if (e.target.id && images) {
      setActive({
        position: e.target.id,
        photo: images.filter((item, i) => {
          if (parseInt(e.target.id) === i) {
            return item
          }
          return;
         }
        )
      })
    }
  }

  return (
    <div className="c-gallery">
      <div className="c-gallery__scrollImage">
        <ul className="c-gallery__scrollContent">
          <div className="c-gallery__video">
            <span>video</span>
            <i></i>
            <img id="video" src={img} alt="video" />
          </div>
          <span
           id="prev"
           disabled={ current <= 0 ? true : false }
           onClick={() => move(-94)}
           ></span>
          <HandleContext.Provider
           value={{ show, current }}
          >
            { children }
          </HandleContext.Provider>
          <span id="next" onClick={() => move(94)}></span>
        </ul>
      </div>
        <div className="c-gallery__cover">
          { !active.photo && <Loading /> }
         <Image
            bindRef={ref}
            path={active.photo}
            legend={active.photo ? 'calçados' : null}
          />
          <div className="c-gallery__controls">
          <div className="c-gallery__video"></div>
          <ul className="c-gallery__controls-list">
            {images ? images.map((image, i) =>
              <li id={i}
                onClick={(e) =>  handleCarrosel(e)}
                style={{
                  opacity: active.position == i ? 1 : 0}}
                >
              </li>
            ) : null }
          </ul>
        </div>
      </div>
    </div>
  );
};


export const Thumbnail = ({ children }) => {
 const { show, current } = useContext(HandleContext);
 const ref = createRef(null);

 useEffect(() => {
  if (ref && ref.current) {
    ref.current.style.transform = `translate3d(0px, ${current}px, 0px)`
  }
 }, [current])

 function render () {
  const childClone = Children.map(children, child => {
    return cloneElement(child, {
      onPress: show,
    });
  });

  return childClone;
 };

  return (
    <li
      className="c-gallery__scrollImage-item"
    >
      <div ref={ref}>
       {render()}
      </div>
    </li>
  );
}
