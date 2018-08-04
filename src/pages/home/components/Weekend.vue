<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
        title: '峨眉山',
        desc: '峨眉山位于四川盆地西南部，是我国的四大佛教名山之一'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/17/45dd2dc955f6e7d993835fbb.jpg_200x200_50c0940c.jpg',
        title: '若尔盖花湖',
        desc: '若尔盖宛如一块镶嵌在川西北边界上瑰丽夺目的绿宝石，是我国三大湿地之一'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/c7/c77ffdc12cfba81d.water.jpg_200x200_3ddaebc9.jpg',
        title: '毕棚沟',
        desc: '毕棚沟位于四川省阿坝藏族羌族自治州理县境内，是国内知名的红叶观赏圣地'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      color: #ccc
</style>
