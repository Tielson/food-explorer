import { Splide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import  './styles.css'


export function Slide({ children }: { children: any }) {
  const options = {
    perPage: 3,
    perMove: 2,
    pagination: false,
    gap: 20,
   
    breakpoints: {
      550: {
        perPage: 1,
        perMove: 1,
      },
      1024: {
        perPage: 2,
        perMove: 1,
      },
    },
  };


  return (
    
    <Splide options={options}>
      {children}

    </Splide>
  );
}
