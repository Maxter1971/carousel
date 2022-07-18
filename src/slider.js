import jQuery, { $ } from "jquery";

export function slider() {
  jQuery(document).ready(($) => {
    const slideCount = $("#slider ul li").length;
    const slideWidth = $("#slider ul li").width();
    const slideHeight = $("#slider ul li").height();
    const sliderUlWidth = slideCount * slideWidth;

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
    }

    function moveRight() {
      const lc = $("#slider ul li:last-child");
      console.clear();
      console.log(lc);
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
    });

    $("a.control_next").click(() => {
      moveRight();
    });
  });
}
