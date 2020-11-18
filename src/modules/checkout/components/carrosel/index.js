import React, {
  useMemo,
  useEffect,
  useState,
  Children,
} from 'react';

import img from '../../../../core/public/prod02.png';
import { Image } from '../../../../core/resources/widgets/image';

export const Carrosel = ({
  responsive,
  children
}) => {
  const childrens = useMemo(() => Children.count(children), [children]);

  const [active, setActive] = useState(0);
  const [items, setItems] = useState(childrens || 6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    responsive.map((dsize, i) => {
      if (dsize[i].device >= window.innerWidth)
       setItems(dsize[i].item)

       if (window.innerWidth <= 600) setIsMobile(true)
      }
    )
  }, [window.innerWidth])

  function movieLeft(value) {
    if (active <= (items * 300) && active >= (`-${items * 300}`)) {
     setActive(active + value)
    }
  }

  function movieRight(value) {
    if (active <= (items - 2) * 300) {
     setActive(active + value)
    }
  }

  function render() {
    const childClone = Children.map(children, (child, i) => {
      if (i <= items) {
        return React.cloneElement(child, {
          tabindex: items === i ? 0 : -1
        });
      }
    });

    return childClone;
  };

  return (
    <div className="c-carrosel">
      <div className="container">
        <ul
          className="c-carrosel__list"
          style={{
            width: `${items * (isMobile ? 175 : 315)}px`,
            transform: `translate3d(${ active }px, 0, 0)` }
          }
        >
          {render()}
        </ul>
        <ol className="c-carrosel__controls">
          <li id="prev" onClick={() => movieRight(300)}></li>
          <li> 1 de 10</li>
          <li id="next" onClick={() => movieLeft(-300)}></li>
        </ol>
      </div>
    </div>
  );
};

export const ImageCarrosel = ({
  path,
  value,
  description
}) => {
  return (
    <li className="c-carrosel__list-item">
      <Image path={path} name={description} legend={description} />
      <div className="c-carrosel__desc">
        <label className="c-carrosel__price">
          {`R$: ${value}`}
          <span>Ou 6x de R$: 34.15</span>
        </label>
        <ol className="c-carrosel__color-control">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </li>
  );
}
