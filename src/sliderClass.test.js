import "../css/style.css";
import jQuery, { $ } from "jquery";
import { Slider } from "./sliderClass";

describe("slider", () => {
  it("slider result", () => {
    document.body.innerHTML =
      '<div id="slider">' +
      '<a href="#" id="c_next" class="control_next">' +
      '<img id="img_control" src="./img/next.png" />' +
      "</a>" +
      '<a href="#" id="c_prev" class="control_prev">' +
      '<img id="img_control" src="./img/prev.png" />' +
      "</a>" +
      '<ul id="slider ul"></ul>' +
      "</div>";
    const img1 = new Image();
    img1.src = "../img/1.png";
    const img2 = new Image();
    img1.src = "../img/2.png";
    const imgArr = [img1, img2];
    const mySlider = new Slider(imgArr);

    expect(mySlider).toBeInstanceOf(Slider);
    expect(typeof mySlider).toBe("object");
    expect(mySlider.imgArrCount).toBe(2);
  });
});
