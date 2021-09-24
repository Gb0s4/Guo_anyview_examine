<template>
  <div id="app">
      <!-- logo -->
      <MyHeader/>
      <MyInput/>
      <router-view/>
      <div class="under-todos">
          <Left/>
          <div id="nav">
            <router-link class="router" :class="chooseClass.one" to="/" @click.native="all">All</router-link>
            <router-link class="router" :class="chooseClass.two" to="/active" @click.native="active">Active</router-link>
            <router-link class="router" :class="chooseClass.three" to="/Completed"  @click.native="completed">Completed</router-link>
          </div>
          <DelCompleted
            style="position:absolute;right:10px;"
          />
      </div>
      <!-- 尾部小字 -->
      <MyFooter/> 
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyInput from './components/MyInput.vue'
import MyFooter from './components/MyFooter.vue'
import Left from './components/Left.vue'
import DelCompleted from './components/DelCompleted.vue'


export default {
  name: 'App',
  components: { 
    MyFooter,
    MyInput,
    MyHeader,
    Left,
    DelCompleted,
  },
  data() {
    return {
      // chosen是选中路由导航时的出现的红色边框的一个类名
      chooseClass: {
        one: 'chosen',
        two: '',
        three: '',
      },
    }
  },
  methods: {
    // 点击路由导航时添加红色边框
    all() {
      this.chooseClass.one = 'chosen';
      this.chooseClass.two = '';
      this.chooseClass.three = '';
    },
    active() {
      this.chooseClass.one = '';
      this.chooseClass.two = 'chosen';
      this.chooseClass.three = '';
    },
    completed() {
      this.chooseClass.one = '';
      this.chooseClass.two = '';
      this.chooseClass.three = 'chosen';
    }
  }
}
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f5f5f5;
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

.under-todos {
  display: flex;
  position: relative;
  margin: 0 auto;
  border: 1px solid #ececec;
  border-top: none;
  padding: 0 10px;
  height: 58px;
  width: 568px;
  line-height: 58px;
  background-color: #fff;
}


#nav {
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
}

.router {
  margin: 10px;
  padding: 5px;
}

.chosen {
  border: 1px solid #b83f45;
  border-radius: 5px;
}
</style>


