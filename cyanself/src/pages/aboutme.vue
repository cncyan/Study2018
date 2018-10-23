<template>
    <div class="aboutme">
      <div class="maincan">
        <c-myinfo class="myinfo" :datalist="baseinfos"></c-myinfo>
        <hr id="mainhr"/>
        <h2 class="h2title">教育以及工作经验</h2>
        <c-mytime :datalist="eduwork"></c-mytime>
        <h2 class="h2title">专业技能</h2>
        <c-skill :datalist="skill"></c-skill>
        <h2 class="h2title">项目经历</h2>
        <c-project :datalist="project"></c-project>
        <h2 class="h2title">兴趣爱好</h2>
        <ul>
          <li v-for="item in like" style="width: 50%; display: inline-block">
            <c-like :datalist="item"></c-like>
          </li>
        </ul>
        <c-linkme :datalist="selfs"></c-linkme>
      </div>
      <c-foot class="myfoot" :datalist="footdata"></c-foot>
    </div>
</template>

<script>
  import axios from 'axios'
  import cFoot from '@/components/cfoot'
  import cSkill from '@/components/cskills'
  import cProject from '@/components/cproject'
  import cMyinfo from '@/components/cmyinfo'
  import cMytime from '@/components/cmytime'
  import cLike from '@/components/clike'
  import cLinkme from '@/components/clinkme'
  export default {
    name: "home",
    components:{
      cFoot,
      cMyinfo,
      cSkill,
      cProject,
      cMytime,
      cLike,
      cLinkme
    },
    data(){
      return{
        footdata:[],
        baseinfos:{},
        eduwork:[],
        skill:[],
        project:[],
        like:[],
        selfs:{}
      }
    },
    methods:{
      getdata(){
        axios.get('/static/resume.json').then((res)=>{
          if(res.data){
            this.skill=res.data.data.skills
            this.footdata=res.data.data.footicon
            res.data.data.mydesc.myicon= require("../assets/images/essayicons/"+res.data.data.mydesc.myicon)
            this.baseinfos=res.data.data.mydesc
            this.project=res.data.data.projects
            this.eduwork=res.data.data.eduandwork
            res.data.data.likes.forEach((value)=>{
              value.iconurl=require("../assets/images/likes/"+value.iconurl)
            })
            this.like=res.data.data.likes
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.selfs=this.$store.state.selfdesc
      this.$store.commit('changeFoot',"aboutme")
      this.getdata();
    }
  }
</script>

<style lang="stylus" scoped>
  .aboutme
    padding 0.2rem
    .maincan
      padding-bottom 1rem
      overflow-y scroll
      .h2title
        font-size 18px
        margin-top 0.5rem
        margin-bottom 0.3rem
        display: -webkit-inline-box
        margin-left 0.2rem
      #mainhr
        height 0.05rem
        background red
        width 98%
      .myinfo
        width:90%
    .myfoot
      width 100%
      position fixed
      bottom 0
      left 0
      z-index 1
</style>
