import EX from "./vdom_es6"


const elm = EX.node("div", {
    id: 'theList',
    data: [{
      key: "stock",
      val: "32"
    }]
  },
  EX.node("ul", {
      id: "movieList",
      class: 'movie-list',
      data: [{
        key: "date",
        val: new Date()
      }, {
        key: "type",
        val: "top 3"
      }]
    }, 
    EX.node("li", {data: [{key:"url", val:"http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2"}]},
    EX.node("img", {
        src: "http://ia.media-imdb.com/images/M/MV5BMTU1ODQ4NjQyOV5BMl5BanBnXkFtZTgwOTQ3NDU2MTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
      }),
    EX.node("div", {}, "Alien", EX.node("span", 
    {class: "lvl-show", style:"color:#1E90FF" }, "1979"))),


    EX.node("li", {data: [{key:"url", val:"http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2"}]},
    EX.node("img", {
        src: "http://ia.media-imdb.com/images/M/MV5BMTI2ODMzODA0Ml5BMl5BanBnXkFtZTYwNTM3NzY5._V1._CR17,27,308,447_.jpg"
      }),
    EX.node("div", {}, "Predator", EX.node("span", 
    {class: "lvl-show", style:"color:#1E90FF" }, "1986"))),

    EX.node("li", {data: [{key:"url", val:"http://www.imdb.com/title/tt0090728/?ref_=nv_sr_1"}]},
    EX.node("img", {
        src: "http://ia.media-imdb.com/images/M/MV5BMTk5MjI4MzIxMl5BMl5BanBnXkFtZTYwODU1MDQ5._V1_.jpg"
      }),
    EX.node("div", {}, "Big Trouble in Little China", EX.node("span", 
    {class: "lvl-show", style:"color:#1E90FF" }, "1986")))

  ),
  EX.node("p", {
    class: "italic-blue"
  }, "加多一點味精加多一點健康的生活")
);
const elm2 = EX.node("div", {
    id: 'theList'
  },
  EX.node("ul", {
      class: "profile-list",
      id: "anId"
    },
    EX.node("li", {
        data: [{
          key: "user",
          val: "selios kantos"
        }, {
          key: "lvl",
          val: "88"
        }]
      },
      EX.node("img", {
        height: "56",
        width: "60",
        class: "a-class",
        src: "https://s3.amazonaws.com/canvasmp3/__user17.jpg"
      }),
      EX.node("div", {}, "Stelios Kantos")
    ),
    EX.node("li", {
        data: [{
          key: "user",
          val: "selena"
        }, {
          key: "lvl",
          val: "88"
        }]
      },
      EX.node("img", {
        height: "56",
        width: "60",
        class: "a-class",
        src: "https://s3.amazonaws.com/canvasmp3/__user5.jpg"
      }),
      EX.node("div", {}, "Selena G")
    )
  )
);



EX.addBranch({
  branchName: 'list1',
  branchObject: elm
}, document.getElementById('div1'));

EX.buildBranch('list1');



EX.addBranch({
  branchName: 'list2',
  branchObject: elm2
}, '#div2');

EX.buildBranch('list2');
EX.viewObjects();