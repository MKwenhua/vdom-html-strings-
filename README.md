# vdom-html-strings-

## JSBIN
example here: https://output.jsbin.com/nixuca

## Synopsis

This is a simple Virtual Dom experiment I made for fun. In order to better understand React, I decided to build something similar myself in order to get deeper insight into Reacts internals. I called this Repo vdom-html-strings because instead of creating elements directly using document.create, I decided to build html content using strings for batch updates. The HTML string constructor would be able to work within a webworker.

## Code Example Input
```javascript
var elm = EX.node("div", { id: 'theList', data: [{key: "stock", val: "32" }]},
  EX.node("ul", { id: "movieList", class: 'movie-list', data: [{ key: "date", val: new Date()}, { key: "type", val: "top 3"}]
    },
    EX.node("li", {data: [{ key: "url", val: "http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" }]
      },
      EX.node("img", {
        src: "http://ia.media-imdb.com/images/M/MV5BMTU1ODQ4NjQyOV5BMl5BanBnXkFtZTgwOTQ3NDU2MTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
      }),
      EX.node("div", {}, "Alien", EX.node("span", {class: "lvl-show", style: "color:#1E90FF"
      }, "1979"))),
    EX.node("li", {
        data: [{ key: "url", val: "http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" }]
      },
      EX.node("img", {
        src: "http://ia.media-imdb.com/images/M/MV5BMTI2ODMzODA0Ml5BMl5BanBnXkFtZTYwNTM3NzY5._V1._CR17,27,308,447_.jpg"
      }),
      EX.node("div", {}, "Predator", EX.node("span", {class: "lvl-show", style: "color:#1E90FF"
      }, "1986"))),
    EX.node("li", {data: [{ key: "url", val: "http://www.imdb.com/title/tt0090728/?ref_=nv_sr_1"}]
      },
      EX.node("img", {
        src: "http://ia.media-imdb.com/images/M/MV5BMTk5MjI4MzIxMl5BMl5BanBnXkFtZTYwODU1MDQ5._V1_.jpg"
      }),
      EX.node("div", {}, "Big Trouble in Little China", EX.node("span", {class: "lvl-show", style: "color:#1E90FF"
      }, "1986")))
  )
);
```
Output:
```html
<div id="theList" data-stock="32" data-trace="list1">
  <ul id="movieList" class="movie-list" data-date="Mon Jul 11 2016 19:06:12 GMT-0400 (EDT)" data-type="top 3" data-trace="list1.kids.0">
    <li data-url="http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" data-trace="list1.kids.0.kids.0"><img src="http://ia.media-imdb.com/images/M/MV5BMTU1ODQ4NjQyOV5BMl5BanBnXkFtZTgwOTQ3NDU2MTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg" data-trace="list1.kids.0.kids.0.kids.0">
      <div data-trace="list1.kids.0.kids.0.kids.1">Alien <span class="lvl-show" style="color:#1E90FF" data-trace="list1.kids.0.kids.0.kids.1.kids.1">1979 </span></div>
    </li>
    <li data-url="http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" data-trace="list1.kids.0.kids.1"><img src="http://ia.media-imdb.com/images/M/MV5BMTI2ODMzODA0Ml5BMl5BanBnXkFtZTYwNTM3NzY5._V1._CR17,27,308,447_.jpg" data-trace="list1.kids.0.kids.1.kids.0">
      <div data-trace="list1.kids.0.kids.1.kids.1">Predator <span class="lvl-show" style="color:#1E90FF" data-trace="list1.kids.0.kids.1.kids.1.kids.1">1986 </span></div>
    </li>
    <li data-url="http://www.imdb.com/title/tt0090728/?ref_=nv_sr_1" data-trace="list1.kids.0.kids.2"><img src="http://ia.media-imdb.com/images/M/MV5BMTk5MjI4MzIxMl5BMl5BanBnXkFtZTYwODU1MDQ5._V1_.jpg" data-trace="list1.kids.0.kids.2.kids.0">
      <div data-trace="list1.kids.0.kids.2.kids.1">Big Trouble in Little China <span class="lvl-show" style="color:#1E90FF" data-trace="list1.kids.0.kids.2.kids.1.kids.1">1986 </span></div>
    </li>
  </ul>
</div>
```
