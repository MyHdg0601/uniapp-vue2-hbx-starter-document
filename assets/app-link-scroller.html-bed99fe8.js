import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as p,a as n,b as t,d as s,e as u}from"./app-69f8464e.js";const i={},r=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"本组件用于联动滚动，左侧点击可控制右侧滚动，右侧滚动可自动定位并高亮左侧位置")],-1),d=n("h3",{id:"props",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),t(" Props")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"可选值"),n("th",null,"默认值")])],-1),h=n("td",null,"当前左侧选中位置索引",-1),b=n("td",null,"Number",-1),m=n("td",null,"-",-1),v=n("td",null,[n("code",null,"0")],-1),_=n("td",null,"左侧元素id前缀",-1),g=n("td",null,"String",-1),y=n("td",null,"-",-1),x=n("td",null,"-",-1),f=n("td",null,"右侧元素id前缀",-1),q=n("td",null,"String",-1),w=n("td",null,"-",-1),I=n("td",null,"-",-1),N=n("td",null,"右侧元素class",-1),C=n("td",null,"String",-1),S=n("td",null,"-",-1),E=n("td",null,"-",-1),P=n("tr",null,[n("td",null,"threshold"),n("td",null,"当前组件距离容器顶部高度 (若组件所在页面采用自定义导航栏则需要额外加上自定义导航栏的高度)"),n("td",null,"Number"),n("td",null,"-"),n("td",null,[n("code",null,"0")])],-1),V=n("tr",null,[n("td",null,"persist"),n("td",null,"右侧滚动自动定位左侧位置时预留高度"),n("td",null,"Number"),n("td",null,"-"),n("td",null,[n("code",null,"uni.upx2px(300)")])],-1),B=n("tr",null,[n("td",null,"tolerant"),n("td",null,"右侧滚动自动定位左侧位置时容错高度 (防止左侧定位选中到上一个位置)"),n("td",null,"Number"),n("td",null,"-"),n("td",null,[n("code",null,"uni.upx2px(4)")])],-1),T=n("td",null,"enablePassive",-1),L={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#enablePassiveEvent",target:"_blank",rel:"noopener noreferrer"},$=n("td",null,"Boolean",-1),j=n("td",null,"-",-1),M=n("td",null,[n("code",null,"true")],-1),z=u('<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:current</td><td>当前左侧选中位置变化</td><td><code>value</code>：当前左侧选中位置索引</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>categories</td><td>左侧内容</td></tr><tr><td>contents</td><td>右侧内容</td></tr></tbody></table><h3 id="cssvars-样式定制" tabindex="-1"><a class="header-anchor" href="#cssvars-样式定制" aria-hidden="true">#</a> CssVars（样式定制）</h3><table><thead><tr><th>名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>--app-link-scroller__scroll_width--categories</td><td>左侧宽度</td><td>210rpx</td></tr></tbody></table><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>scrollToCategoryIndex</td><td>控制左侧滚动至指定位置</td><td>index: <code>number</code> 目标位置</td></tr><tr><td>scrollToContentIndex</td><td>控制右侧滚动至指定位置 (当点击左侧item后，需通过ref手动调用该方法，详细请查看下方示例)</td><td>index: <code>number</code> 目标位置</td></tr></tbody></table><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3>',9),A=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{vue:"",class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("app-link-scroller")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scroller"),n("span",{class:"token punctuation"},'"')]),t(`
                     `),n("span",{class:"token attr-name"},":current.sync"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("current"),n("span",{class:"token punctuation"},'"')]),t(`
                     `),n("span",{class:"token attr-name"},"category-item-id-prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("category-"),n("span",{class:"token punctuation"},'"')]),t(`
                     `),n("span",{class:"token attr-name"},"content-item-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("content-item"),n("span",{class:"token punctuation"},'"')]),t(`
                     `),n("span",{class:"token attr-name"},"content-item-id-prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("content-"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("view")]),t(),n("span",{class:"token attr-name"},"slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("categories"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("view")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in contents"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.id"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`category-${index}`"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("category-item"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{'current': current === index}"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"@tap"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("$refs.scroller.scrollToContentIndex(index)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token comment"},"<!-- 内容 -->"),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("view")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("view")]),n("span",{class:"token punctuation"},">")]),t(`
  
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("view")]),t(),n("span",{class:"token attr-name"},"slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contents"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("view")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in contents"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.id"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`content-${index}`"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("content-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token comment"},"<!-- 内容 -->"),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("view")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("view")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("app-link-scroller")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token comment"},"// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"contents"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"list"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"list"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"list"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function D(F,G){const a=e("badge"),l=e("ExternalLinkIcon");return c(),p("div",null,[r,d,n("table",null,[k,n("tbody",null,[n("tr",null,[n("td",null,[t("current "),s(a,{text:"sync",type:"tip"})]),h,b,m,v]),n("tr",null,[n("td",null,[t("categoryItemIdPrefix "),s(a,{text:"必传",type:"danger"})]),_,g,y,x]),n("tr",null,[n("td",null,[t("contentItemIdPrefix "),s(a,{text:"必传",type:"danger"})]),f,q,w,I]),n("tr",null,[n("td",null,[t("contentItemClass "),s(a,{text:"必传",type:"danger"})]),N,C,S,E]),P,V,B,n("tr",null,[T,n("td",null,[t("开启passive特性 (能优化一定的滚动性能，注意查看"),n("a",L,[t("微信官方文档"),s(l)]),t("相关问题)")]),$,j,M])])]),z,A])}const K=o(i,[["render",D],["__file","app-link-scroller.html.vue"]]);export{K as default};
