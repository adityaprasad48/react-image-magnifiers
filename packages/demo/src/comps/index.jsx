
import GlassExample from "./GlassExample";
import MagnifierExample from "./MagnifierExample";
import PictureExample from "./PictureExample";
import SideExample from "./SideExample";
import Header from "./Header";

import "./style.css";

// const image = require("./sample-image.jpg");

const DemoApp = () => {
  let imgUrl =
    'https://plus.unsplash.com/premium_photo-1710118735364-c04ad6961401';
  return (
    <>
      <Header />
      <div style={{ paddingBottom: "100px" }} className="app">
        <MagnifierExample image={imgUrl} />
        <GlassExample image={imgUrl} />
        <PictureExample image={imgUrl} />
        <SideExample image={imgUrl} />
      </div>
    </>
  );
};


export default DemoApp
