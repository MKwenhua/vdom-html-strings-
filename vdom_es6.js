function NodeMap(appTitle = 'default') {
   this.appTitle = appTitle;
   this.domBranches = {};
   this.rootDomElement = null;
   this.domContainers = {};
   this.domContainersEvents = {};
   this.addContainer = (keyy, domElement) => {
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
   this.addBranch = (obj, containerElement) => {
      if (!(obj instanceof Array) && obj instanceof Object) {
         if (!obj["branchName"] || !obj["branchObject"]) {
            console.error("Object must have a branchName and branchObject");
            return false;
         }
         this.domBranches[obj.branchName] = obj.branchObject;
         this.addContainer(obj.branchName, containerElement);
      }

   };
   this.viewObjects = () => {
      console.log('domContainers', this.domContainers);
      console.log('domContainersEvents', this.domContainersEvents);
      console.log('domBranches', this.domBranches);

   };
   this.buildBranch = (branchName) => {
      this.domContainers[branchName].innerHTML = this.html.htmlBuild(this.domBranches[branchName], branchName);

   };


};


NodeMap.prototype.node = (type, props, ...kids) => {
   return {
      type,
      props,
      kids
   };
}

NodeMap.prototype.html = (() => {
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
      height: (vl) => {
         return ' height="' + vl + '"';
      },
      width: (vl) => {
         return ' width="' + vl + '"';
      },
      title: (vl) => {
         return ' title="' + vl + '"';
      },
      alt: (vl) => {
         return ' alt="' + vl + '"';
      },
      href: (vl) => {
         return ' href="' + vl + '"';
      },
      src: (vl) => {
         return ' src="' + vl + '"';
      },
      style: (vl) => {
         return ' style="' + vl + '"';
      },
      value: (itm) => {
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

   const getProps = (pp) => {
      let theKeys = Object.keys(pp);
      if (theKeys.length === 0) return '';

      return theKeys.reduce((ob, ii) => {
         ob.push(propHandle[ii](pp[ii]));
         return ob;
      }, []).join('');
   }


   const HT = {
      htmlBuild: (node, group) => {
         if (typeof node === 'string') {
            return node + ' ';
         }
         return HT.htmlString(node, group);
      },
      eachChild: (kids, group) => {
         if (!kids) {
            return '';
         }
         let kdArr = [];
         let trace = group ? group + '.kids' : false;
         kids.forEach((itm, i) => {
            let traceTo = trace ? trace + '.' + i : '';
            kdArr.push(HT.htmlBuild(itm, traceTo));
         });
         return kdArr.join('');
      },


      htmlString: (node, group) => {
         let traceBackKey = group ? ' data-trace="' + group + '"' : '';
         return ['<', node.type, getProps(node.props), traceBackKey, '>', HT.eachChild(node.kids, group), '</', node.type, '>'].join('');
      },

   }
   return HT;
})();




module.exports = new NodeMap('example');