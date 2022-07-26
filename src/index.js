import "../css/style.css";
import jQuery, { $ } from "jquery";
import { Slider } from "./sliderClass";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";

const imgArr = [img1, img2, img3, img4];
const mySlider = new Slider(imgArr);
console.log(mySlider.sliderUl);
