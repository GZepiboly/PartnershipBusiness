<template>
    <div class="agent">
         <div class="banner-top">
             <img src="../assets/agent/banner.png">
             <div class="banner-text">
                 <div>一起为了商家</div>
                 <p>ALL FOR BUSINESS</p>
             </div>
         </div>
         <div class="main1">
               <div class="content">
                   <div class="block-title">高收益招募入伙大吉渠道代理商</div>
                   <div class="block1">
                       <div class="block1-left">
                           <div class="block1-title">获取三重代理收益</div>
                           <p>产品高额毛利+年服务费+老客带新客，收入源源不断</p>
                           <div class="block1-title">总部培训资源</div>
                           <p>携手打造实战+运营新模式，为客户提供一站式服务获
                               得代运营增长收入</p>
                           <div class="block1-title">深耕家居装修领域做行业专家</div>
                           <p>万家成功案例，成就行业口碑，为客户提供强有力的平
                               台武器</p>
                       </div>
                        <img src="../assets/agent/main1.png" />
                   </div>
               </div>
         </div>
        <div class="main2">
            <div class="content">
                <div class="block-title">代理商五大专属保障</div>
                <div class="block2">
                    <div class="bao-list" @mousemove="mouseMove(item)" @mouseout="mouseOut(item)" v-for="item in baoList">
                        <img :src="item.src1" v-show="item.state" />
                        <img :src="item.src2" v-show="!item.state" />
                    </div>
                </div>
            </div>
        </div>
        <div class="main3">
            <div class="content">
                <div class="block-title">申请代理商</div>
                <div class="input-from">
                    <div class="input-sty">
                        <input placeholder="请输入您的公司名称（必填）" />
                    </div>
                    <div class="input-sty">
                        <input placeholder="请输入您的姓名（必填）" />
                    </div>
                    <div class="input-sty">
                        <input placeholder="请输入您的手机号码（必填）" />
                    </div>
                    <div class="input-sty" style="background-color: #a40000;">
                       提交申请
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Agent",
        data(){
            return{
                baoList:[
                    {src1:require('../assets/agent/1.png'),src2:require('../assets/agent/a1.png'),state:true},
                    {src1:require('../assets/agent/2.png'),src2:require('../assets/agent/a2.png'),state:true},
                    {src1:require('../assets/agent/3.png'),src2:require('../assets/agent/a3.png'),state:true},
                    {src1:require('../assets/agent/4.png'),src2:require('../assets/agent/a4.png'),state:true},
                    {src1:require('../assets/agent/5.png'),src2:require('../assets/agent/a5.png'),state:true},
                ],
            }
        },
        methods:{
            mouseMove(item){
                item.state = false
            },
            mouseOut(item){
                item.state=true
            }


        }
    }
</script>

<style scoped>
    .banner-top{
        width: 100%;
        height: 28vw;
        position: relative;
    }
    .banner-top img{
        width:100%;
        height: 100%;
    }
    .banner-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 480px;
    }
    .banner-text>div{
        font-size: 60px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 8px;
        color: #ffffff;
    }
    .banner-text p{
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 5px;
        color: #ffffff;
    }
    .content{
        width: 1338px;
        margin: 0 auto;
        padding: 72px 0 56px;
    }
    .block-title{
        font-size: 48px;
        font-weight: normal;
        font-stretch: normal;
        color: #313131;
    }
    .main1{
        background-color: #eeeeee;
    }
    .block1{
        margin-top:47px ;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .block1 img{
         width: 558px;
         height: 558px;
    }
    .block1-left{
        width: 710px;
        text-align: left;
    }
    .block1-title{
        font-size: 36px;
        letter-spacing: 0;
        color: #313131;
        margin-bottom: 25px;
    }
    .block1-left p{
        font-size: 26px;
        color: #666666;
        margin-bottom: 40px;
    }
    .main2{
        background-color: #ffffff;
    }
    .block2{
        margin-top:80px ;
        display: flex;
        justify-content: space-between;
    }
    .bao-list{
       margin-bottom: 20px;
    }
    .bao-list img{
        width: 255px;
        height: 390px;
    }

    .main3{
       background-color: #eeeeee;
    }
    .input-from{
        margin-top: 56px;
    }
    .input-sty{
        margin: 0 auto 34px;
        width: 801px;
        height: 88px;
        line-height: 88px;
        border-radius: 10px;
        border: solid 1px #dcdcdc;
        background-color: #ffffff;
        color: #ffffff;
    }
</style>