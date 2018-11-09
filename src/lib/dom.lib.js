//禁止页面滑动
export function stop() {
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove", mo, { passive: false });
}
//禁止页面滑动
export function move() {
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='scroll';
    document.addEventListener("touchmove", mo, { passive: false });
}
