// import React, {useEffect, useState} from 'react';
// import { Dimensions, View } from "react-native";
// let {width} = Dimensions.get('window').width;

// const Banner = () => {
//   const [bannerData, setBannerData] = useState([]);
//
//   useEffect(() => {
//     setBannerData([
//       'https://source.unsplash.com/1024x768/?nature',
//       'https://source.unsplash.com/1024x768/?water',
//     ]);
//
//     return () => {
//       setBannerData([]);
//     };
//   }, []);
//
//   return(
//     <View>
//       <View>
//         <Swip
//       </View>
//     </View>
//   )
// };
import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

const BannerCarouselComponent = ({dataBanner, renderData}) => {
  let carouselRef;
  return (
    <Carousel
      ref={c => {
        carouselRef = c;
      }}
      data={dataBanner}
      renderItem={renderData}
      sliderWidth={windowWidth - 10}
      itemWidth={350}
      loop={true}
      autoplay={true}
      autoplayInterval={3000}
    />
  );
};

const BannerCarousel = React.memo(BannerCarouselComponent);

export default BannerCarousel;
