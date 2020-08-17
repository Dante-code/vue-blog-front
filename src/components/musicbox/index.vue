<template>
  <div class="boarder">
    <aplayer 
    class="player"
    :music="songList" 
    :showLrc="true" 
    :mini="true"
    :float=true 
    theme="#b7daff" 
    mode="circulation" 
    listMaxHeight='15rem' 
    ref="player"
    :list="list"></aplayer>
    <el-divider class="divider" />
    <div class="words">MUSIC BOX</div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  name: 'musicbox',
data() {
    return{
      dat: [],
      hours: '',
      minutes: '',
      seconds: '',
      ismuted: true,
      list: [
        {
          src: 'http://localhost:4000/April.mp3',
          title: 'Brave Shine',
          pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1997582927,1779943610&fm=26&gp=0.jpg',
          artist: 'Aimer'
        }, {
          src: 'https://win-web-ri01-sycdn.kuwo.cn/37403b8db7f801eb9e16eb95e9e1373c/5f218a5f/resource/n2/78/43/1587378019.mp3',
          title: 'だんご大家族',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595694396376&di=9d115fa2264d3b5d7963b615d38201dc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F18%2F20141218150459_8wrBd.thumb.700_0.jpeg',
          artist: '麻枝准'
        }, {
          src: 'https://rz01-sycdn.kuwo.cn/5653a6ba82c1fc39b4253f8f3bfe387d/5f218aa4/resource/n3/16/45/371170369.mp3',
          title: '时を刻む呗',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595694698031&di=ed81fd23ba0c46ab23852ddbca40f159&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F22545da10c5e9f965c9cf845fd93ab738712c1001b97b5-VBeEUu_fw658',
          artist: '麻枝准'
        }, {
          src: 'https://rz01-sycdn.kuwo.cn/104cdc09f4f831daaba6e670bcaa59e7/5f218b00/resource/n3/57/11/2510049228.mp3',
          title: 'βίος',
          artist: '泽野弘之 Rie',
          pic: 'https://pic1.zhimg.com/80/v2-5b27e3bd0f833e116dd7c863236d527d_1440w.jpg'
        }, {
          src: 'https://win-web-nf01-sycdn.kuwo.cn/5233807169088a612c23f9c55ac8c62c/5f218b2b/resource/n2/61/19/2208747108.mp3',
          title: 'aLIEz',
          artist: '泽野弘之',
          pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595695573750&di=12045934d03dd5ad8d007e55b6720865&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2016%2F02%2F07%2F26267180861167751_320x320.png'
        }, {
          src: 'https://np01-sycdn.kuwo.cn/502e06269f5496057585ab8141ed5b74/5f218b57/resource/n3/82/51/978645411.mp3',
          title: 'Last Stardust',
          artist: 'Aimer',
          pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1606371993,3491225015&fm=26&gp=0.jpg'
        }, {
          title: 'Perfect Time',
          src: 'https://si-sycdn.kuwo.cn/52681b3874a1121c5bf240ae2994cc23/5f218b85/resource/n3/16/76/559039701.mp3',
          artist: 'mpi，Mika Kobayashi',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595697464547&di=1609d92e81665d66222e21dfdc7d3a0d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F25%2F20170825112549_3nw8f.thumb.700_0.jpeg'
        }, {
          src: 'https://win-web-ra01-sycdn.kuwo.cn/511c64c938090510492214bbaa0c5e80/5f218ba4/resource/n1/128/8/46/4270375883.mp3',
          title: 'ブルーバード',
          artist: 'いきものがかり',
          pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3115884322,2434683042&fm=26&gp=0.jpg'
        }, {
          src: 'https://nc01-sycdn.kuwo.cn/3fdc0d553f2544e94f05616f12ada652/5f218bcc/resource/n1/90/23/240175067.mp3',
          title: '鳥の詩 ~',
          artist: '車谷浩司',
          pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2391855033,706594499&fm=26&gp=0.jpg'
        }, {
          src: 'https://win-web-rh01-sycdn.kuwo.cn/906896bc1464ee0aaa2f71e77bff63e0/5f218be9/resource/n1/6/35/4169263295.mp3',
          title: '夏影',
          artist: '麻枝准',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595698200443&di=c269169427e41e84069b98e5f99aaa2e&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3600802677%2C2208689364%26fm%3D193'

        }
      ],
      songList:{
         src:'http://localhost:4000/April.mp3',
         pic: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595693537815&di=86055422c0261225e7dd875c175d5a21&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D450%2C600%2Fsign%3Debfd6dd1ccfcc3ceb495c137a775fabe%2F37d12f2eb9389b50e32f01a18135e5dde6116e75.jpg`,
         title: ' 光るなら',
         artist:'Goose house'
      },
    }
  },
  components: {
    Aplayer
  },
}
</script>

<style lang="less" scoped>
  @media screen and (min-width: 700px) {
      .boarder{
      font-size: 2rem;
      font-family: 'Times New Roman', Times, serif;
      text-align: center;
      border-radius: 5px;
      left: 2rem;
      position: absolute;
      height: 25rem;
      top: 30%;
      background-color: rgb(255, 255, 255);
      .divider{
        margin-top: 1rem;
        margin-bottom: 0;
      }
      .player{
        width: 20rem;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .boarder{
      position: fixed;
      // height: 4rem;
      // display: none;
      // top: 0;
      bottom: 0;
      .words{
        display: none;
      }
      .divider{
        display: none;
      }
      .player{
        // width: 3rem;
        // position: fixed;
        // z-index: 10000;
      }
      // display: none;
    }
  }
</style>