<template>
    <div class="b-two-b">
        <Slideshow :img="advertisement" :content="content"></Slideshow>
        <div class="model block-com">
             <div class="block-title">从用户体验出发——模块化结构灵活搭建企业营销方案</div>
            <img src="../assets/b2b2c/model.png"/>
        </div>
        <div class="model block-com">
            <div class="block-title">入伙大吉六大核心功能亮点</div>
            <img src="../assets/b2b2c/model.png"/>
        </div>
        <div class=" block-com points">
            <div class="block-title">入伙大吉六大核心功能亮点</div>
            <div class="points-line">
                <div class="point" v-for="item in points">
                    <img :src="item.src"/>
                    <div class="point-title">{{item.title}}</div>
                    <div class="point-text">{{item.text}}</div>
                </div>
            </div>
        </div>
        <div class="block-com operate-model">
            <div class="block-title">入伙大吉支持五大商城运营模式</div>
            <div class="block-nav">
               <div class="nav-menu">
                <div
                        v-for="(item,idx) in navMenuList.list"
                        :key="idx"
                        class="tab"
                        :class="navMenuList.now === idx ? 'now':''"
                        @click="alterNow(idx)"
                >
                    {{item}}
                </div>
            </div>
            </div>
            <div class="operate" v-for="(item,index) in operateList" v-show="index===navMenuList.now">
                <img :src="item.src"/>
                <div class="operate-text" >
                    <div class="operate-title">{{item.name}}</div>
                    <div class="operate-item">
                        <img src="../assets/b2b2c/deng.png"/>
                        <div>商家通过线下门店地址的定位获取及配送半径、配送
                            范围的设置，方便系统更好的运营，节省成本</div>
                    </div>
                    <div class="operate-item">
                        <img src="../assets/b2b2c/deng.png"/>
                        <div>商家将订单精准的分配给服务范围内的门店，缩短买家
                            收货时间，为买家提供更好的售后服务，同时节省物流成本</div>
                    </div>
                </div>

            </div>

        </div>
        <div class=" block-com">
            <div class="block-title">平台化盈利优势集于一身</div>
            <div class="block-list">
                <div class="list-item" v-for="item in oneList">
                    <img src="../assets/b2b2c/block.png">
                    <div class="list-text" >{{item.text}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import advertisement from "../assets/b2b2c/advertisement.png";
    import Slideshow from "../components/Slideshow";
    import NavMenu from "../components/NavMenu";

    export default {
        components: {
            Slideshow,
            NavMenu,
        },
        data(){
            return{
                advertisement,
                content: {
                    type: 1,
                    one: '满足多种运营需求',
                    two: '支持自营+招商入驻模式<br />B2B2C企业级电商平台',
                    three: '申请演示'
                },
                points:[],
                navMenuList: {
                    now: 0,
                    list: ['自营模式', '联营模式', '招商模式', '混合模式', 'O2O模式']
                },
                operateList:[
                    {src: require('../assets/b2b2c/zi.png'),name:'自营模式'},
                    {src: require('../assets/b2b2c/lian.png'),name:'联营模式'},
                    {src: require('../assets/b2b2c/zhao.png'),name:'招商模式'},
                    {src: require('../assets/b2b2c/hun.png'),name:'混合模式'},
                    {src: require('../assets/b2b2c/O2O.png'),name:'O2O模式'},
                ],
                oneList:[
                    {text:'平台自营收入'},
                    {text:'商家入驻年费'},
                    {text:'增值服务收益'},
                    {text:'商品销售佣金'},
                    {text:'平台延伸收益'}
                    ]
            }
        },
        created() {
            this.init()
        },
        methods:{
            init(){
                this.points = [
                    {src: require('../assets/b2b2c/goods.png'),title:'商品管理',text:'商品分类、品牌、单品等管理条理分明，消费者浏览清晰方便'},
                    {src: require('../assets/b2b2c/order.png'),title:'订单管理',text:'依据电商成熟全流程标准化配套，无学习成本，管理操作简便'},
                    {src:require('../assets/b2b2c/market.png'),title:'商品管理',text:'团购、秒杀、满减、折扣、积分、商城等多种销售工具一应俱全，随配随用'},
                    {src:require('../assets/b2b2c/member.png'),title:'会员管理',text:'会员自动分级分类管理，成长值按需配置，随时把握核心客户'},
                    {src:require('../assets/b2b2c/pay.png'),title:'支付体系',text:'支持支付宝、微信、第三方支付和银行在线支付，时刻按需配置'},
                    {src:require('../assets/b2b2c/visualization.png'),title:'可视化组合',text:'PC/移动端、微信端可视化配置模板，随时根据潮流调整页面，满足运营时期需要'},
                    ]
            },
            alterNow(e){
                this.$set(this.navMenuList,'now',e)
            }
        }
    }
</script>

<style scoped  lang="scss">
    .block-com{
       padding-top: 106px;
    }
    .block-title{
        font-size: 36px;
        font-weight: normal;
        color: #434343;
    }
    .model img{
        margin-top: 46px;
        width: 1278px;
        height: 504px;
    }
    .points{
        width: 1520px;
        margin: 0 auto;
    }
    .points .points-line{
        margin-top: 90px;
        display: flex;
        justify-content: space-between;
    }
    .point{
        width: 180px;
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
    }
    .point img{
        width: 100px;
        height: 100px;
    }
    .point-title{
        /*font-size: 24px;*/
        font-weight: 600;
        color: #434343;

    }
    .point-text{
        height: 98px;
        overflow: hidden;
    }
    .block-nav{
        width:1300px;
        margin: 30px auto 0;
    }
    .nav-menu {
        width: 100%;
        height: 5vw;
        background-color: #ffffff;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        .tab {
            flex: 1;
            font-family: MicrosoftYaHei;
            font-size: 30px;
            font-weight: normal;
            letter-spacing: 0vw;
            color: #313131;
            line-height: 5vw;
            padding: 0 15px;
            cursor: pointer;
        }
        .now{
            border-bottom: 8px solid #a40000;
        }
    }
    .operate{
        width: 1320px;
        padding: 150px 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    .operate>img{
        width: 560px;
        height:456px;
    }
    .operate-text{
        width: 730px;
        height: 210px;
        margin-left: 92px;
    }
    .operate-title{
        font-size: 30px;
        color: #313131;
        line-height: 30px;
    }
    .operate-item{
        margin-top: 30px;
        display: flex;
        font-size: 24px;
    }
    .operate-item img{
        width: 53px;
        height: 60px;
        margin-right: 6px;
    }
    .block-list{
        width: 1520px;
        padding: 92px 0 130px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .list-item{
        position: relative;
    }
    .list-item img{
        width: 287px;
        height: 160px;
    }
    .list-text{
        width: 180px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        white-space: normal;
        font-size: 30px;
        line-height: 30px;
        color: #a40000;
    }
</style>