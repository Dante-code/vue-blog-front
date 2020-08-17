<template>
  <div>
    <!-- <div id="background" class="bkg"></div> -->
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <div id="top" class="wall"></div>
  </div>
</template>

<script>
export default {
  name: 'nightstarry'
}
</script>

<style lang="less" scoped>
    .wall{/* 全屏拉伸，覆盖整个屏幕 */
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .bkg{
        height: 47rem;
        position: absolute;
        // float: left;
        width: 100%;
        z-index: 5;

    }

    div#background{
        background: url("./images/preview.jpg") no-repeat;
        animation: dd 100s linear infinite;
        background-size: cover;
    }

    div#midground{
        background: url("./images/midground.png");
        z-index: -1;
        // position: absolute;
        /* 动画的名称、完成动画的时间 */
        animation: cc 100s  linear infinite ;
    }

    div#foreground{
        background: url("./images/foreground.png");
        /* 设置元素的堆叠，高的在低的前面（DIV之间堆叠起来） */
        z-index: -2;
        
        /* linear表示匀速、infinite表示让动画无限次播放 */
        animation: cc 153s linear infinite;
    }

    div#top{
        background: url("./images/midground.png");
        z-index: -4;
        animation: da 100s linear infinite;
    }

    div#ship{
        /* 这里我们都没有设置图片的大小，所以用的是默认是的大小(补充：拉伸后是图片铺满整个屏幕？) */
        background: url("./images/ship.png") no-repeat;
        z-index: -2; /* 一般是在absolute覆盖absolute时，才用z-index */
        animation: cc 50s linear infinite;
        opacity: 0.6;
    }

  /* 定义动画的效果，名字叫cc */
    @keyframes cc {
        0%{/* 动画的开始 */
            background-position: 0 0;  /* 动画开始时，背景的位置 */
        }
        100%{/* 动画的结束 */
            /* 为什么设置时间那么长和结束位置那么远呢。因为这样可以让水平和竖直方向的动画落差更明显 */
            background-position: 600% 0;
        }
    }

    @keyframes da {
        0%{
            background-position: 0 0;
        }
        100%{
            /* 相同的时间，不同的结束位置，动画的速度会不一样，根据公式v=s/t */
            background-position: 0 600%;
        }
    }
</style>