(this["webpackJsonpreact-metronome"]=this["webpackJsonpreact-metronome"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/click1.7a7930a2.wav"},23:function(e,t,a){e.exports=a.p+"static/media/click2.fe0ded65.wav"},30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=a(11),s=a(12),o=a(17),m=a(15),u=a(36),p=a(47),v=a(48),b=a(49),h=a(22),g=a.n(h),d=a(23),f=a.n(d),E=a(9),k=(a(35),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleBpmChane=function(e){var t=e.target.value;n.state.playing?(clearInterval(n.timer),n.timer=setInterval(n.playClick,60/t*1e3),n.setState({count:0,bpm:t})):n.setState({bpm:t})},n.playClick=function(){var e=n.state;e.count%e.beatsPerMeasure===0?n.click2.play():n.click1.play(),n.setState((function(e){return{count:(e.count+1)%e.beatsPerMeasure}}))},n.startStop=function(){n.state.playing?(clearInterval(n.timer),n.setState({playing:!1})):(n.timer=setInterval(n.playClick,60/n.state.bpm*1e3),n.setState({count:0,playing:!0},n.playClick))},n.state={playing:!1,count:0,bpm:60,beatsPerMeasure:4},n.click1=new Audio(g.a),n.click2=new Audio(f.a),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.playing,n=t.bpm;return r.a.createElement(u.a,null,r.a.createElement("h1",{className:"text-center"},"React.js Metronome"),r.a.createElement(p.a,{className:"row"},r.a.createElement(v.a,{className:"col sgn-times"},r.a.createElement("h4",{className:"text-center"},"Time Signature:"),r.a.createElement(b.a,{vertical:!0,block:!0,size:"lg",className:"sign-times-group"},r.a.createElement(E.a,{variant:"outline-primary",className:"sgntime-btn",value:"4",onClick:function(){e.setState({beatsPerMeasure:4})}},"4/4"),r.a.createElement(E.a,{variant:"outline-primary",className:"sgntime-btn",value:"3",onClick:function(){e.setState({beatsPerMeasure:3})}},"3/4"),r.a.createElement(E.a,{variant:"outline-primary",className:"sgntime-btn",value:"2",onClick:function(){e.setState({beatsPerMeasure:2})}},"2/4"),r.a.createElement(E.a,{variant:"outline-primary",className:"sgntime-btn",value:"1",onClick:function(){e.setState({beatsPerMeasure:1})}},"1/4"))),r.a.createElement(v.a,{className:"col"},r.a.createElement("div",{className:"metronome"},r.a.createElement("div",{className:"bml-slider"},r.a.createElement("div",null,n," BPM"),r.a.createElement("input",{type:"range",min:"60",max:"240",value:n,onChange:this.handleBpmChane})),r.a.createElement(E.a,{className:"btn-dark",onClick:this.startStop},a?"Pause":"Play")))))}}]),a}(n.Component)),y=a(50),C=a(51),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{bg:"light",variant:"light"},r.a.createElement(y.a.Brand,{href:"#home"},"React Metronome"),r.a.createElement(C.a,{className:"mr-auto"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43),a(44);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null),r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d51b7c82.chunk.js.map