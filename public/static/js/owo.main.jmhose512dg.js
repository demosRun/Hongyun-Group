// Tue Sep 03 2019 09:56:20 GMT+0800 (GMT+08:00)


// 设计宽度
var deviseW = 1920

function getScale () {
  const scale = window.innerWidth / deviseW
  // console.log((screenInfo.clientWidth - 750 * scale) / 2)
  // console.log(screenInfo.clientWidth - (750 * WC), scale)
  // console.log(screenInfo.clientWidth * scale)
  // console.log(`scale(${scale}, ${scale})`)
  document.body.style.width = deviseW + 'px'
  document.body.style.transform = `scale(${scale}, ${scale})`
  // this.$el.style.left = ((screenInfo.clientWidth - 750 * scale) / 2) + 'px'
  document.body.style.transformOrigin = `0 0 0`
  setTimeout(() => {
    document.getElementsByTagName('html')[0].style.height = document.body.offsetHeight * scale + 'px'
  }, 0)
}

getScale()

let timer = null
window.onresize = () => {
  console.log(timer)
  if (!timer) {
    timer = setTimeout(() => {
      getScale()
      timer = null
    }, 1000)
  }
}

// 存储页面基本信息
var owo = {
  // 页面默认入口 如果没有设置 则取第一个页面为默认页面
  entry: "home",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "home": {
    "created": function created() {
      this.query('.roll-box .left')[0].style.height = this.query('.roll-box li').length * 176 + 'px';
    },
    "rollUp": function rollUp() {
      this.query('.roll')[0].scrollTop = this.query('.roll')[0].scrollTop - 300;
    },
    "rollDown": function rollDown() {
      this.query('.roll')[0].scrollTop = this.query('.roll')[0].scrollTop + 300;
    },
    "template": {
      "nav": {
        "data": {
          "itemLiat": [{
            "url": "http://www.people.com.cn/",
            "name": "集团介绍"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "大事记"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "焦点图新闻"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "新闻资讯"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "媒体报道"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "科普知识"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "产品服务"
          }, {
            "url": "http://www.people.com.cn/",
            "name": "社会责任"
          }]
        },
        "prop": {}
      },
      "info": {
        "created": function created() {},
        "prop": {}
      },
      "title": {
        "created": function created() {},
        "prop": {
          "title": "新闻资讯"
        }
      },
      "swiperBox": {
        "data": {
          "swiperBoxList": [{
            "src": "http://www.people.com.cn/NMediaFile/2019/0618/MAIN201906181255181321992447490.jpg",
            "text": "全省“法治进校园”巡讲团首站——晋中"
          }, {
            "src": "http://www.people.com.cn/NMediaFile/2019/0618/MAIN201906181011409383792014803.jpg",
            "text": "全省“法治进校园”巡讲团首站——晋中"
          }, {
            "src": "http://www.people.com.cn/NMediaFile/2019/0618/MAIN201906181011411060153107563.jpg",
            "text": "全省“法治进校园”巡讲团首站——晋中"
          }]
        },
        "created": function created() {
          // 轮播图展示区域swiper
          setTimeout(function () {
            new Swiper('.swiper-container-pPX8XxuUyIehAAEu', {
              pagination: '.pagination-pPX8XxuUyIehAAEu',
              paginationClickable: true
            });
          }, 0);
        },
        "prop": {}
      },
      "title1": {
        "created": function created() {},
        "prop": {
          "title": "集团领导致辞"
        }
      },
      "title2": {
        "created": function created() {},
        "prop": {
          "title": "集团大事记"
        }
      },
      "title3": {
        "created": function created() {},
        "prop": {
          "title": "健康肽 肽健康"
        }
      },
      "title4": {
        "created": function created() {},
        "prop": {
          "title": "运鸿肽家园"
        }
      },
      "morecard": {
        "created": function created() {},
        "prop": {}
      },
      "morecard1": {
        "created": function created() {},
        "prop": {
          "name": "morecard",
          "src": "./src/module/card.owo"
        }
      },
      "morecard2": {
        "created": function created() {},
        "prop": {
          "name": "morecard",
          "src": "./src/module/card.owo"
        }
      },
      "morecard3": {
        "created": function created() {},
        "prop": {
          "name": "morecard",
          "src": "./src/module/card.owo"
        }
      },
      "morecard4": {
        "created": function created() {},
        "prop": {
          "name": "morecard",
          "src": "./src/module/card.owo"
        }
      },
      "morecard5": {
        "created": function created() {},
        "prop": {
          "name": "morecard",
          "src": "./src/module/card.owo"
        }
      },
      "copyright": {
        "prop": {}
      }
    }
  }
};

/* 方法合集 */
var _owo = {
  /* 对象合并方法 */
  assign: function(a, b) {
    var newObj = {}
    for (var key in a){
      newObj[key] = a[key]
    }
    for (var key in b){
      newObj[key] = b[key]
    }
    return newObj
  },
  /* 运行页面初始化方法 */
  runCreated: function (pageFunction) {
    // console.log(pageFunction)
    // 确保created事件只被执行一次
    if (!pageFunction["_isCreated"]) {
      pageFunction["_isCreated"] = true
      if (pageFunction.created) {
        pageFunction.created.apply(_owo.assign(pageFunction, {
          data: pageFunction.data,
          activePage: window.owo.activePage
        }))
      }
    }
    // console.log(pageFunction)
    if (!pageFunction.show) return
    pageFunction.show.apply(_owo.assign(pageFunction, {
      data: pageFunction.data,
      activePage: window.owo.activePage
    }))
  }
}

// 判断是否为手机
_owo.isMobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null


_owo._run = function (eventFor, templateName, event) {
  // 复制eventFor防止污染
  var eventForCopy = eventFor
  // 判断页面是否有自己的方法
  var newPageFunction = window.owo.script[window.owo.activePage]
  // console.log(this.attributes)
  if (templateName && templateName !== owo.activePage) {
    // 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
    if (newPageFunction.template) newPageFunction = newPageFunction.template[templateName]
  }
  // 待优化可以单独提出来
  // 取出参数
  var parameterArr = []
  var parameterList = eventForCopy.match(/[^\(\)]+(?=\))/g)
  
  if (parameterList && parameterList.length > 0) {
    // 参数列表
    parameterArr = parameterList[0].split(',')
    // 进一步处理参数
    
    for (var i = 0; i < parameterArr.length; i++) {
      var parameterValue = parameterArr[i].replace(/(^\s*)|(\s*$)/g, "")
      // console.log(parameterValue)
      // 判断参数是否为一个字符串
      
      if (parameterValue.charAt(0) === '"' && parameterValue.charAt(parameterValue.length - 1) === '"') {
        parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
      }
      if (parameterValue.charAt(0) === "'" && parameterValue.charAt(parameterValue.length - 1) === "'") {
        parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
      }
      // console.log(parameterArr[i])
    }
  }
  eventForCopy = eventFor.replace(/\(.*\)/, '')
  // console.log(newPageFunction, eventForCopy)
  // 如果有方法,则运行它
  if (newPageFunction && newPageFunction[eventForCopy]) {
    // 绑定window.owo对象
    newPageFunction.$event = event
    newPageFunction[eventForCopy].apply(newPageFunction, parameterArr)
  } else {
    // 如果没有此方法则交给浏览器引擎尝试运行
    eval(eventFor)
  }
}

_owo.bindEvent = function (eventName, eventFor, tempDom, templateName) {
  // 处理事件 使用bind防止闭包
  tempDom['on' + eventName] = function(event) {
    _owo._run(eventFor, templateName, event)
  }.bind({eventFor: eventFor})
}

/* owo事件处理 */
// 参数1: 当前正在处理的dom节点
// 参数2: 当前正在处理的模块名称
// 参数3: 当前正在处理的模块根dom
_owo.handleEvent = function (tempDom, templateName) {
  var activePage = window.owo.script[owo.activePage]
  
  if (tempDom.attributes) {
    for (let ind = 0; ind < tempDom.attributes.length; ind++) {
      var attribute = tempDom.attributes[ind]
      // 判断是否为owo的事件
      // ie不支持startsWith
      if (attribute.name[0] == ':') {
        var eventName = attribute.name.slice(1)
        var eventFor = attribute.textContent
        switch (eventName) {
          case 'show' : {
            // 初步先简单处理吧
            var temp = eventFor.replace(/ /g, '')
            // 取出条件
            var condition = temp.split("==")
            if (activePage.data[condition[0]] != condition[1]) {
              tempDom.style.display = 'none'
            }
            break
          }
          case 'tap': {
            // 待优化 可合并
            // 根据手机和PC做不同处理
            if (_owo.isMobi) {
              _owo._event_tap(tempDom, function (event) {
                _owo._run(eventFor, templateName, event)
              })
            } else _owo.bindEvent('click', eventFor, tempDom, templateName)
            break
          }
          default: {
            _owo.bindEvent(eventName, eventFor, tempDom, templateName)
          }
        }
      }
    }
  }
  
  // 判断是否有子节点需要处理
  if (tempDom.children) {
    // 递归处理所有子Dom结点
    for (var i = 0; i < tempDom.children.length; i++) {
      // 获取子节点实例
      var childrenDom = tempDom.children[i]

      // 每个子节点均要判断是否为模块
      if (childrenDom.attributes['template'] && childrenDom.attributes['template'].textContent) {
        // 如果即将遍历进入模块 设置即将进入的模块为当前模块
        // 获取模块的模块名
        _owo.handleEvent(childrenDom, childrenDom.attributes['template'].textContent)
      } else {
        _owo.handleEvent(childrenDom, templateName)
      }
    }
  } else {
    console.info('元素不存在子节点!')
    console.info(tempDom)
  }
}// 单页面-页面资源加载完毕事件
_owo.showPage = function() {
  var page = owo.entry
  owo.activePage = page
  // 查找入口
  var entryDom = document.querySelector('.ox[template="' + page + '"]')
  if (entryDom) {
    _owo.handlePage(window.owo.script[page], entryDom)
    _owo.handleEvent(entryDom, null)
  } else {
    console.error('找不到页面入口! 设置的入口为: ' + page)
  }
}

/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */
_owo.ready = (function() {               //这个函数返回whenReady()函数
  var funcs = [];             //当获得事件时，要运行的函数
  
  //当文档就绪时,调用事件处理程序
  function handler(e) {
    // 确保事件处理程序只运行一次
    if(window.owo.state.isRrady) return
    window.owo.state.isRrady = true
    //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
    if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
      return
    }
    
    // 运行所有注册函数
    for(var i=0; i<funcs.length; i++) {
      funcs[i].call(document);
    }
    funcs = null;
  }
  //为接收到的任何事件注册处理程序
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false)
    document.addEventListener('readystatechange', handler, false)            //IE9+
    window.addEventListener('load', handler, false)
  } else if(document.attachEvent) {
    document.attachEvent('onreadystatechange', handler)
    window.attachEvent('onload', handler)
  }
  //返回whenReady()函数
  return function whenReady (fn) {
    if (window.owo.state.isRrady) {
      fn.call(document)
    } else {
      funcs.push(fn)
    }
  }
})()

// 执行页面加载完毕方法
_owo.ready(_owo.showPage)




/* 运行页面所属的方法 */
_owo.handlePage = function (newPageFunction, entryDom) {
  // console.log(entryDom)
  newPageFunction['$el'] = entryDom
  // 快速选择器
  newPageFunction['query'] = function (str) {
    return this.$el.querySelectorAll(str)
  }
  /* 判断页面是否有自己的方法 */
  if (!newPageFunction) return
  // console.log(newPageFunction)
  _owo.runCreated(newPageFunction)
  // debugger
  // 判断页面是否有下属模板,如果有运行所有模板的初始化方法
  for (var key in newPageFunction.template) {
    var templateScript = newPageFunction.template[key]
    // 待修复,临时获取方式,这种方式获取到的dom不准确
    var childDom = entryDom.querySelectorAll('[template="' + key +'"]')[0]
    if (!childDom) {
      continue
    }
    // 递归处理
    _owo.handlePage(templateScript, childDom)
  }
}
_owo._event_tap = function (tempDom, callBack) {
  // 变量
  var startTime = 0
  var isMove = false
  tempDom.addEventListener('touchstart', function() {
    startTime = Date.now();
  })
  tempDom.addEventListener('touchmove', function() {
    isMove = true
  })
  tempDom.addEventListener('touchend', function(e) {
    if (Date.now() - startTime < 300 && !isMove) {
      callBack(e)
    }
    // 清零
    startTime = 0;
    isMove = false
  })
}