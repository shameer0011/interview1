import React, { useState, useEffect } from "react";
import Slider from "react-animated-slider";
import logo from "../logo.svg";
import "react-animated-slider/build/horizontal.css";
const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
  {
    title: "Ultricies Vulputate Mollis Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    // image: "../../",
  },
  {
    title: "odo Aenean Quam Tortor Dapimodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis  purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
  },
  {
    title: "volutpat Aenean metus",
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
];

const Slides = () => {
  const [sliderRef, setSliderRef] = useState("");
  const [datas, setDatas] = useState([]);
  const [playLists, setPlayLists] = useState("");
  const [timerID, settimerID] = useState("");
  const [images, setImages] = useState([]);
  let co = [];
  let contentId = {};
  let duration = [];
  let image = [];
  let pic = [];
  let picture = [];

  datas.forEach((item, index) => {
    item.playlist.playlistContents.map(i => {
      // console.log(i,"total")
      image.push(i.fileName);
      duration.push(i.duration);
      contentId.id = i.contentId;
    });
  });
  console.log(duration, "time");
  useEffect(
    () => {
      // console.log("running")
      duration.map(time => {
        console.log(time, "time ssss");
        settimerID(setInterval(sliderRef.next, time));
      });
    },
    [sliderRef, datas]
  );

  useEffect(() => {
    imageSlider();
  }, []);
  const imageSlider = async () => {
    fetch(
      "https://staging.bfitds.com/api/default/demo-playlist/44/071DEF99-E4D8-4E29-A39B-404A2BC8B3E9"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDatas(data);
      })
      .catch(err => {
        console.log("Error Reading data " + err);
      });
  };
  // useEffect(() => {
  // setDatas(co)
  // }, [])

  useEffect(
    () => {
      return () => {
        if (timerID) {
          clearInterval(timerID);
        }
      };
    },
    [timerID]
  );

  return (
    <div>
      <Slider ref={ref => setSliderRef(ref)}>
        {image.map((item, index) => {
          return (
            <div key={index} className="slider-content">
              {image && (
                <img
                  src={item}
                  alt={item.contentId}
                  style={{
                    height: "600px",
                    width: "900px",
                    alignContent: "center",
                  }}
                />
              )}
              {!image && (
                <header>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ height: "300px", width: "400px" }}
                  />
                  <a>No Slide images Here</a>
                </header>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slides;
