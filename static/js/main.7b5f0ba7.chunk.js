(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a.n(r),c=(a(12),a(3)),u=a(4),s=a(5),i=a(6),d=function(e){var t=e.option,a=e.onLeaveFeedback;return o.a.createElement("button",{type:"button",name:t,onClick:function(e){return a(t)}},t)},p=function(e){var t=e.options,a=e.onLeaveFeedback;return o.a.createElement(n.Fragment,null,o.a.createElement(d,{option:t.good,onLeaveFeedback:a}),o.a.createElement(d,{option:t.neutral,onLeaveFeedback:a}),o.a.createElement(d,{option:t.bad,onLeaveFeedback:a}))},b=function(e){var t=e.title,a=e.onLeaveFeedback,n=e.options;return o.a.createElement("div",null,t,o.a.createElement("br",null),o.a.createElement(p,{onLeaveFeedback:a,options:n}))},m=function(e){var t=e.message;return o.a.createElement("div",null,t)},v=function(e){var t=e.isOpen,a=e.good,r=e.neutral,l=e.bad,c=e.total,u=e.positivePercentage;return o.a.createElement(n.Fragment,null,t?o.a.createElement(n.Fragment,null,o.a.createElement("h2",null,"Statictics"),o.a.createElement("span",null,"Good:",a),o.a.createElement("br",null),o.a.createElement("span",null,"Neutral:",r),o.a.createElement("br",null),o.a.createElement("span",null,"Bad:",l),o.a.createElement("br",null),o.a.createElement("span",null,"Total:",c),o.a.createElement("br",null),o.a.createElement("span",null,"Positive feedbak:",u,"%")):o.a.createElement("div",null,o.a.createElement(m,{message:"No feedback given"})))},E=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0,isOpen:!1},e.handleFeedbackIncrement=function(t){"Good"===t?e.setState((function(t){return{good:t.good+e.props.step,isOpen:!0}})):"Neutral"===t?e.setState((function(t){return{neutral:t.neutral+e.props.step,isOpen:!0}})):"Bad"===t&&e.setState((function(t){return{bad:t.bad+e.props.step,isOpen:!0}}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return 0!==e.state.good?(e.state.good/(e.state.good+e.state.neutral+e.state.bad)*100).toFixed(2):"0"},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.neutral,t=this.state.good,r=this.state.bad,l=this.state.isOpen,c=this.countTotalFeedback(),u=this.countPositiveFeedbackPercentage();return o.a.createElement(n.Fragment,null,o.a.createElement(b,{title:"Please leave feedback",onLeaveFeedback:this.handleFeedbackIncrement,options:a.options}),o.a.createElement(v,{good:t,neutral:e,bad:r,total:c,isOpen:l,positivePercentage:u}))}}]),a}(n.Component);E.defaultProps={step:1,positiveFeedback:0},E.options={good:"Good",neutral:"Neutral",bad:"Bad"},l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7b5f0ba7.chunk.js.map