function nodeMap(appTitle = 'default') {
  this.appTitle = appTitle;
}

nodeMap.prototype.domBranches = {};
nodeMap.prototype.rootDomElement = null;
nodeMap.prototype.domContainers = {};
nodeMap.prototype.domContainersEvents = {};
nodeMap.prototype.addContainer = (keyy, domElement)  => {
  if (domElement instanceof HTMLElement) {
    this.domContainers[keyy] = domElement;
    this.domContainersEvents[keyy] = {};
    return true;
  }
  let elem = document.querySelector(domElement);
  if (elem) {
    this.domContainers[keyy] = elem;
    return true;
  }
  console.error("Element: " + domElement + " not found");
  return false;
};
nodeMap.prototype.addBranch = (obj, containerElement) => {
  if (!(obj instanceof Array) && obj instanceof Object) {
    if (!obj["branchName"] || !obj["branchObject"]) {
      console.error("Object must have a branchName and branchObject");
      return false;
    }
    this.domBranches[obj.branchName] = obj.branchObject;
    this.addContainer(obj.branchName, containerElement);
  }

};
nodeMap.prototype.viewObjects = () => {
  console.log('domContainers', this.domContainers);
  console.log('domContainersEvents', this.domContainersEvents);
  console.log('domBranches', this.domBranches);

};


nodeMap.prototype.node = (type, props, ...kids) => {
  return {
    type,
    props,
    kids
  };
}

nodeMap.prototype.html = (() => {
  function dtaBuilder(oo, itm) {
    oo.push(' data-' + itm.key + '="' + itm.val + '"');
    return oo;
  };

  function eventRegistry(itm) {

  };
  var propHandle = {
    id: (itm) => {
      if (itm) {
        return ' id="' + itm + '"';
      }
      return '';
    },
    class: (itm) => {
      if (itm) {
        return ' class="' + itm + '"';
      }
      return '';
    },
    height:  (vl) => {
      return ' height="' + vl + '"';
    },
    width:  (vl) => {
      return ' width="' + vl + '"';
    },
    title: (vl) => {
      return ' title="' + vl + '"';
    },
    alt: (vl) => {
      return ' alt="' + vl + '"';
    },
    href:  (vl) => {
      return ' href="' + vl + '"';
    },
    src:  (vl) => {
      return ' src="' + vl + '"';
    },
    style:  (vl) => {
      return ' style="' + vl + '"';
    },
    value:  (itm) => {
      if (itm) {
        return ' value="' + itm + '"';
      }
      return '';
    },
    data: (itm) => {
      if (!itm) {
        return '';
      }
      return itm.reduce(dtaBuilder, []).join('');
    },
    event: (itm) => {
      if (!itm) {
        return '';
      }
      return eventRegistry(itm);
    }

  }

 const getProps  = (pp) => {
    let theKeys = Object.keys(pp);
    if (theKeys.length === 0) return '';

    return theKeys.reduce((ob, ii) => {
      ob.push(propHandle[ii](pp[ii]));
      return ob;
    }, []).join('');
  }


  const HT = {
    htmlBuild:  (node, group) => {
      if (typeof node === 'string') {
        return node + ' ';
      }
      return HT.htmlString(node, group);
    },
    eachChild:  (kids, group) => {
      if (!kids) {
        return '';
      }
      let kdArr = [];
      let trace = group ? group + '.kids': false;
      kids.forEach((itm, i) => {
      	let traceTo = trace ? trace + '.' + i : '';
        kdArr.push(HT.htmlBuild(itm, traceTo));
      });
      return kdArr.join('');
    },


    htmlString:  (node, group) => {
      let traceBackKey = group ?  ' data-trace="' + group + '"': '';
      return ['<', node.type, getProps(node.props), traceBackKey, '>', HT.eachChild(node.kids, group), '</', node.type, '>'].join('');
    },

  }
  return HT;
})();
nodeMap.prototype.buildBranch =  (branchName) => {
  this.domContainers[branchName].innerHTML = this.html.htmlBuild(this.domBranches[branchName], branchName);

};

const EX = new nodeMap('example');
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
