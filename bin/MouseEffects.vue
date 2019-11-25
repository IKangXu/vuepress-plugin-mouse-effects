<template>
  <div class="mouse-effects-wrapper">
  </div>
</template>
<script>
export default {
  name: 'MouseEffects',
  data() {
    return {
     balls: []
    };
  },
  created() {
    let _self=this;
    document.onmousemove = function(e){
      _self.createBall(e.clientX, e.clientY);
      _self.createBall(e.clientX, e.clientY);
    }
    setInterval(function (){
      var mouseBalls = document.getElementsByClassName('mouse-ball');
      if(mouseBalls){
        for(var i=0;i<mouseBalls.length;i++){
          mouseBalls[i].remove();
        }
      }
      for(let i=0;i<_self.balls.length;i++) {
        let ball = _self.balls[i];
        ball.update();
        ball.render();
      }
    }, 50);
  },
  methods: {
    createBall(x, y){
      let _self=this;
      let ball = {};
      ball.id = this.GUID();
      ball.x = x;
      ball.y = y;
      ball.r = this.random(define_r_min, define_r_max);
      ball.color = this.randomColor(define_colors);
      ball.dx = this.random(define_dx_min, define_dx_max);
      ball.dy = this.random(define_dy_min, define_dy_max);

      ball.update = function() {
          this.x += this.dx;
          this.y += this.dy;
          this.r -= 1;
          if(this.r <= 0){
            _self.balls.splice(_self.findIndex(_self.balls, this), 1);
          }
      }

      ball.render = function (){
        let _self=this;
        if(this.r <= 0){
          return;
        }
      
        let ball = document.createElement("div");
        ball.style.width = this.r + "px";
        ball.style.height = this.r + "px";
        ball.style.position = "absolute";
        ball.style.top = this.y + "px";
        ball.style.left = this.x + "px";
        ball.style.left = this.x + "px";
        ball.style.borderRadius = define_border_radius;
        ball.style.backgroundColor = this.color;
        ball.style.zIndex=define_z_index;
        ball.className='mouse-ball';
        
        document.querySelector("body").append(ball);
      }
      _self.balls.push(ball);
    },
    random(start, end) {
      if (!end) {
        end = start;
        start = 0;
      }
      return start + Math.floor(Math.random() * (end - start + 1));
    },
    randomColor(colors) {
      if(colors && colors.length > 0) {
         let selected = this.random(0, colors.length - 1);
         return colors[selected];
      }
      // 默认红色
      return "red";
    },
    findIndex(balls, ball){
      if(!balls || !ball) {
        return -1;
      }
      for(let i=0;i<balls.length;i++) {
          if(balls[i].id == ball.id) {
            return i;
          }
      }
      return -1;
    },
    GUID() {
      function S4() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      }
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>