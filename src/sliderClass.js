import jQuery, { $ } from "jquery";

export class Slider {
  constructor(imgArr) {
    this.imgArr = imgArr;
    imgArr.forEach((element) => {
      // console.log(element);
      const slider = document.getElementById("slider ul");
      this.sliderUl = slider;
      const li = document.createElement("li");
      li.setAttribute("id", "slider__ul__li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      img.src = element;
      a.appendChild(img);
      li.appendChild(a);
      slider.appendChild(li);
    });
    this.sliderUlWidth = 0;
    this.imgArrCount = document.getElementById("slider ul").children.length;

    jQuery(document).ready(($) => {
      const slideCount = $("#slider ul li").length;
      const slideWidth = $("#slider ul li").width();
      const slideHeight = $("#slider ul li").height();
      const sliderUlWidth = slideCount * slideWidth;
      this.sliderUlWidth = sliderUlWidth;
      $("#slider").css({ width: slideWidth, height: slideHeight });

      $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

      $("#slider ul li:last-child").prependTo("#slider ul");

      function moveLeft() {
        $("#slider ul").animate(
          {
            left: +slideWidth,
          },
          200,
          () => {
            $("#slider ul li:last-child").prependTo("#slider ul");
            $("#slider ul").css("left", "");
          }
        );
        return $("#slider ul");
      }

      function moveRight() {
        const lc = $("#slider ul li:last-child");
        // console.clear();
        // console.log(lc);
        $("#slider ul").animate(
          {
            left: -slideWidth,
          },
          200,
          () => {
            $("#slider ul li:first-child").appendTo("#slider ul");
            $("#slider ul").css("left", "");
          }
        );
      }

      $("a.control_prev").click(() => {
        moveLeft();
        this.sliderUl = $("#slider ul");
      });

      $("a.control_next").click(() => {
        moveRight();
        this.checkNext = $("#slider ul");
      });
    });
  }
}
