import React, {
  useMemo,
  useEffect,
  useState,
  Children,
  forwardRef,
  cloneElement,
  createRef
} from 'react';

import { Image } from '../../../../core/resources/widgets/image';
import { useIsMobile } from '../../hooks/useIsMobile';

export const Carrosel = ({
  responsive,
  children
}) => {
  const childrens = useMemo(() => Children.count(children), [children]);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [active, setActive] = useState(0);
  const [items, setItems] = useState(childrens || 6);
  const [isMobile] = useIsMobile();

  const refMain = createRef(null);
  const refC = createRef(null);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    responsive.map((dsize, i) => {
      if (dsize[i].device >= window.innerWidth)
       setItems(dsize[i].item)
      }
    )
  }, [isMobile])

  useEffect(() => {
    if (refC && refC.current) {
      refC.current.style.width = `${items * (isMobile ? 175 : 315)}px`;
      refC.current.style.transform = `translate3d(${ active }px, 0, 0)`;
    }
  }, [active])

  function updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    setSize({ width: windowWidth, height: windowHeight });
  }

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
        return cloneElement(child,
          i === 0 ? { ref: refMain } : {}
        );
      }
    });

    return childClone;
  };

  return (
    <div className="c-carrosel">
      <div className="container">
        <ul ref={refC} className="c-carrosel__list">
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

export const ImageCarrosel = forwardRef((props, ref) => {
  const {
    path,
    value,
    description
  } = props;

  return (
    <li className="c-carrosel__list-item" ref={ref}>
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
})
