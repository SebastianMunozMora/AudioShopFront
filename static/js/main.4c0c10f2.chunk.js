(this["webpackJsonpaudio-shop"]=this["webpackJsonpaudio-shop"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),i=a.n(s),c=(a(13),a(1)),l=a(2),o=a(4),u=a(3),m=a(5),h=(a(14),a(15),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("img",{src:this.props.image,className:"image",id:"case",style:this.props.style})}}]),t}(n.a.Component)),v=(a(16),a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).drivers=[{name:"Three Drivers",image:"tall_driver.svg"},{name:"Two Drivers",image:"classic_driver.svg"},{name:"Compact Drivers",image:"compact_driver.svg"},{name:"Sub Driver",image:"sub_driver.svg"}],a.cases=[{name:"Tall Style",image:"tall_case.svg",driver:"tall_driver.svg"},{name:"Classic Style",image:"monitor_case.svg",driver:"classic_driver.svg"},{name:"Compact Style",image:"tiny_case.svg",driver:"compact_driver.svg"},{name:"SubWoofer Style",image:"sub_case.svg",driver:"sub_driver.svg"}],a.colors=[{name:"Sky",filter:"invert(51%) sepia(44%) saturate(5862%) hue-rotate(203deg) brightness(104%) contrast(92%)"},{name:"Sunset",filter:"invert(63%) sepia(95%) saturate(3465%) hue-rotate(8deg) brightness(109%) contrast(82%)"},{name:"Pine",filter:"invert(43%) sepia(99%) saturate(668%) hue-rotate(83deg) brightness(92%) contrast(93%)"},{name:"Artic",filter:"invert(95%) sepia(7%) saturate(346%) hue-rotate(325deg) brightness(104%) contrast(92%)"},{name:"Crimson",filter:"invert(11%) sepia(88%) saturate(2932%) hue-rotate(350deg) brightness(94%) contrast(107%)"},{name:"Orchid",filter:"invert(9%) sepia(93%) saturate(4412%) hue-rotate(295deg) brightness(100%) contrast(97%)"},{name:"Butter",filter:"invert(97%) sepia(57%) saturate(5429%) hue-rotate(323deg) brightness(90%) contrast(90%)"},{name:"Lapis",filter:"invert(25%) sepia(80%) saturate(1919%) hue-rotate(220deg) brightness(100%) contrast(88%)"},{name:"Wood",filter:"invert(38%) sepia(8%) saturate(1957%) hue-rotate(350deg) brightness(88%) contrast(95%)"}],a.state={style:{filter:"invert(67%) sepia(40%) saturate(5895%) hue-rotate(354deg) brightness(90%) contrast(87%)"},image:a.cases[0].image,driver:a.cases[0].driver},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"color-palette"},n.a.createElement("div",null,this.colors.map((function(t,a){return n.a.createElement("button",{id:a,class:"palette",onClick:function(){e.setState({style:{filter:t.filter}})}},n.a.createElement("div",{className:"color-plate",style:t}),n.a.createElement("hr",null),n.a.createElement("div",null,t.name))}))),n.a.createElement(h,{image:0===this.props.state?this.state.image:this.state.driver,style:this.state.style}),n.a.createElement("div",null,this.cases.map((function(t,a){return n.a.createElement("button",{class:"case-button-palette",onClick:function(){e.setState({image:t.image,driver:t.driver})}},n.a.createElement("div",{className:"case-plate"},n.a.createElement("img",{className:"thumbnail",src:t.image})),n.a.createElement("hr",null),n.a.createElement("div",null,t.name))}))),n.a.createElement("br",null))}},{key:"changeColor",value:function(e,t){this.setState({style:{filter:t}})}}]),t}(n.a.Component)),d=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).step=[{name:"Case"},{name:"Drivers"},{name:"Addons"}],a.state={step:a.step[0].name},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"all-steps"},n.a.createElement("button",{onClick:this.props.onClickBack,className:"steps-button"},n.a.createElement("h2",null,"Previous")),n.a.createElement("button",{className:"steps"},n.a.createElement("h2",null,"Choose Your "+this.step[this.props.state].name)),console.log(this.props.state),n.a.createElement("button",{onClick:this.props.onClickNext,className:"steps-button"},n.a.createElement("h2",null,"Next")))}}]),t}(n.a.Component)),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={currentState:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",null,n.a.createElement("img",{className:"banner"})),n.a.createElement("h1",null," Speaker Audio System Design "),n.a.createElement("div",{className:"cases-view"},n.a.createElement(d,{onClickNext:function(){2!=e.state.currentState?e.setState({currentState:e.state.currentState+1}):e.setState({currentState:e.state.currentState})},onClickBack:function(){0!=e.state.currentState?e.setState({currentState:e.state.currentState-1}):e.setState({currentState:e.state.currentState})},state:this.state.currentState}),n.a.createElement("hr",null),n.a.createElement(v,{state:this.state.currentState}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4c0c10f2.chunk.js.map