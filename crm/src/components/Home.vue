<template>
  <div>
    <div class="opp-home-header">
      <x-header
        :left-options="{backText: '',preventGoBack:true}"
        @on-click-back="goback">
        <span> <span>{{oppTitle}}</span> <x-icon type="ios-arrow-down" size="26" style="fill:#fff;position: relative;top: 6px"></x-icon></span>
        <a slot="right"><x-icon type="ios-plus-empty" size="30" style="margin-top: -7px;fill:#fff;font-weight: bold"  @click="addOpp"></x-icon></a>
      </x-header>
      <div class="search-bar">
        <div class="search-bar-box clearfix">
          <div class="search-input">
            <span class="search-icon"></span>
            <input type="text" placeholder="请输入商机名称／客户名称">
          </div>
        </div>
      </div>
    </div>
    <div class="opp-box">
      <ul class="opp-list">
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
        <li class="opp-item">
          <a href="">
            <div class="opp-item-header clearfix">
              <span class="opp-linkman">司马浩南</span>
              <span class="opp-part">上海瀚银征信合作</span>
            </div>
            <div class="opp-main">
              上海拍拍贷股份有限公司
            </div>
            <div class="opp-footer">
              <p>
                <span class="opp-industry">支付</span>
                <span class="opp-des">财务结账、储蓄卡、充值...</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <vue-pickers :show="showSheet"
                 :selectData="pickData1"
                 v-on:cancel="close"
                 v-on:confirm="confirmFn"></vue-pickers>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  import VuePickers from 'vue-pickers'
  export default {
    data() {
      return {
        oppTitle:'我的商机',
        showSheet:true,
        pickData1: {
          columns: 1, // picker的列数
          default: [ // 默认显示哪一个字段
            {
              text: 2002,
              value: 2002
            }
          ],
          // 第一列的数据结构
          pData1: [
            {
              text: 1999,
              value: 1999
            },
            {
              text: 2001,
              value: 2001
            },
            {
              text: 2002,
              value: 2002
            },
            {
              text: 2003,
              value: 2003
            },
            {
              text: 2004,
              value: 2004
            },
            {
              text: 2005,
              value: 2005
            },
          ]
        }
      }
    },
    components: {
      XHeader,
      VuePickers
    },
    methods:{
      goback () {
        alert('返回App')
      },
      addOpp () {
        alert('添加商机')
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/themes/crm-theme.less';
  @import '../assets/less/themes/vux-theme-config.less';
  body{
    background-color: #F4F1F1;
  }
  .opp-home-header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .search-bar{
    padding: 15px;
    .gradual-to-right(@blueStart,@blueEnd);
  }
  .search-bar-box{
    position: relative;
    padding: 0 40px 0 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.25);
    .border-radius();
    .search-icon{
      .vc();
      left:20px;
      width: 25px;
      height: 25px;
      background: url("../assets/images/search.png") no-repeat center/cover;
    }
    input{
      width: 100%;
      height: 35px;
      background-color: transparent;
      .reset-form();
      color: #fff;
      font-size: 12px;
    }
  }
  .search-input{
    width: 100%;
  }
  .search-icon{
    float: left;
  }
  .opp-box{
    margin-top: 111px;
  }
  .opp-list{
    padding:15px 10px;
  }
  .opp-item{
    margin-bottom: 15px;
    background-color: #fff;
    .border-radius(5px);
    a{
      display: block;
      padding: 20px 15px;
      width: 100%;
      height: 100%;
      color: #333;
    }
  }
  .opp-item-header{
    line-height: 1;
    font-size: 16px;
  }
  .opp-linkman{
    position: relative;
    padding-left:7px;
    float: left;
    width: 30%;
  }
  .opp-linkman:before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 16px;
    width: 4px;
    .gradual-to-bottom(@orgStart,@orgEnd);
  }
  .opp-part{
    width: 70%;
  }
  .opp-main{
    width: 100%;
    padding:12px 7px;
    .ellipsis();
  }

  .opp-industry{
    display: inline-block;
    margin-right: 20px;
    padding: 8px 12px;
    background-color: #F9F8F8;
    .border-radius();
  }
  .opp-footer{
    p{
      .ellipsis();
      color: @cTwo;
      font-size: 15px;
    }
  }
</style>
