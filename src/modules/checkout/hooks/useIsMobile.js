import React, { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) setIsMobile(true)

    if (window.innerWidth > 600) setIsMobile(false)
  }, [window.innerWidth]);

  return [isMobile];
}
