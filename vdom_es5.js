function nodeMap(appTitle = 'default') {
  this.appTitle = appTitle;
  var self = this;
}

nodeMap.prototype.domBranches = {};
nodeMap.prototype.rootDomElement = null;
nodeMap.prototype.domContainers = {};
nodeMap.prototype.addContainer = function(keyy, domElement) {
  if (domElement instanceof HTMLElement) {
    this.domContainers[keyy] = domElement;
    return true;
  }
  var elem = document.querySelector(domElement);
  if (elem) {
    this.domContainers[keyy] = elem;
    return true;
  }
  console.error("Element: " + domElement + " not found");
  return false;
};
nodeMap.prototype.addBranch = function(obj, containerElement) {
  if (!(obj instanceof Array) && obj instanceof Object) {
    if (!obj["branchName"] || !obj["branchObject"]) {
      console.error("Object must have a branchName and branchObject");
      return false;
    }
    this.domBranches[obj.branchName] = obj.branchObject;
    this.addContainer(obj.branchName, containerElement);
  }

};
nodeMap.prototype.viewObjects = function() {
  console.log('domContainers', this.domContainers);
  console.log('domBranches', this.domBranches);
};


nodeMap.prototype.node = function(type, props, ...kids) {
  return {
    type,
    props,
    kids
  };
}

nodeMap.prototype.html = (function() {
  function dtaBuilder(oo, itm) {
    oo.push(' data-' + itm.key + '="' + itm.val + '"');
    return oo;
  };

  function eventRegistry(itm) {

  };
  var propHandle = {
    id: function(itm) {
      if (itm) {
        return ' id="' + itm + '"';
      }
      return '';
    },
    class: function(itm) {
      if (itm) {
        return ' class="' + itm + '"';
      }
      return '';
    },
    height: function(vl) {
      return ' height="' + vl + '"';
    },
    width: function(vl) {
      return ' width="' + vl + '"';
    },
    title: function(vl) {
      return ' title="' + vl + '"';
    },
    alt: function(vl) {
      return ' alt="' + vl + '"';
    },
    href: function(vl) {
      return ' href="' + vl + '"';
    },
    src: function(vl) {
      return ' src="' + vl + '"';
    },
    value: function(itm) {
      if (itm) {
        return ' value="' + itm + '"';
      }
      return '';
    },
    data: function(itm) {
      if (!itm) {
        return '';
      }
      return itm.reduce(dtaBuilder, []).join('');
    },
    event: function(itm) {
      if (!itm) {
        return '';
      }
      return eventRegistry(itm);
    }

  }

  function getProps(pp) {
    var theKeys = Object.keys(pp);
    if (theKeys.length === 0) return '';

    return theKeys.reduce(function(ob, ii) {
      ob.push(propHandle[ii](pp[ii]));
      return ob;
    }, []).join('');
  }


  var HT = {
    htmlBuild: function(node, group) {
      if (typeof node === 'string') {
        return node + ' ';
      }
      return HT.htmlString(node, group);
    },
    eachChild: function(kids, group) {
      if (!kids) {
        return '';
      }
      var kdArr = [];
      var trace = group ? group + '.kids': false;
      kids.forEach(function(itm, i) {
      	var traceTo = trace ? trace + '.' + i : '';
        kdArr.push(HT.htmlBuild(itm, traceTo));
      });
      return kdArr.join('');
    },


    htmlString: function(node, group) {
      var traceBackKey = group ?  ' data-trace="' + group + '"': '';
      return ['<', node.type, getProps(node.props), traceBackKey, '>', HT.eachChild(node.kids, group), '</', node.type, '>'].join('');
    },

  }
  return HT;
})();
nodeMap.prototype.buildBranch = function(branchName) {
  this.domContainers[branchName].innerHTML = this.html.htmlBuild(this.domBranches[branchName], branchName);

};

var EX = new nodeMap('example');
var elm = EX.node("div", {
    id: 'theList',
    class: 'has-borders  rounded-outline',
    data: [{
      key: "stock",
      val: "32"
    }]
  },
  EX.node("ul", {
      class: "list",
      id: "what",
      data: [{
        key: "thing",
        val: "stuff"
      }, {
        key: "nk",
        val: "88"
      }]
    },
    EX.node("li", {}, "item 1", EX.node("span", {
      class: "lvl-show"
    }, "lvl 2")),
    EX.node("li", {}, "item 2"),
    EX.node("li", {}, "item 3")
  ),
  EX.node("p", {
    class: "italic-blue"
  }, "加多一點味精加多一點健康的生活")
);
var elm2 = EX.node("div", {
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