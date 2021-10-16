import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import CarouselItem from "./CarouselItem";
import { virtualize, autoPlay } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";

function Carousel() {
  const VirtualizeSwipeableViews = autoPlay(virtualize(SwipeableViews));

  const [index, setIndex] = useState(0);

  const images = [
    "https://cdn.wealthygorilla.com/wp-content/uploads/2019/12/The-Best-Selling-Books-of-All-Time.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F07%2F15%2Fgreat-books-for-anytime-2000.jpg&q=85",
    "https://leverageedu.com/blog/wp-content/uploads/2019/09/Importance-of-Books.jpg",
    "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
  ];

  const styles = {
    root: {
      padding: "0 12%",
    },
    slideContainer: {
      padding: "0 3%",
    },
  };

  function slideRenderer(params) {
    const { index, key } = params;

    const pos = mod(index, 3);

    return <CarouselItem key={key} imgUrl={images[pos]} />;
  }

  function handleChangeIndex(index) {
    setIndex(index);
  }

  return (
    <div>
      <VirtualizeSwipeableViews
        style={styles.root}
        slideStyle={styles.slideContainer}
        slideRenderer={slideRenderer}
        index={index}
        onChangeIndex={handleChangeIndex}
      ></VirtualizeSwipeableViews>
    </div>
  );
}

export default Carousel;
