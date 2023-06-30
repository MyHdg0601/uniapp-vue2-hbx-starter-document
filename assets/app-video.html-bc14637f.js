import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as l,a as t,b as d,d as n,e as r}from"./app-5f31eb94.js";const c={},u=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,"本组件用于视频播放，APP-PLUS端使用iframe实现同层渲染")],-1),i=t("h3",{id:"props-全端支持",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#props-全端支持","aria-hidden":"true"},"#"),d(" Props（全端支持）")],-1),p=t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值")])],-1),h=t("td",null,"播放器id",-1),k=t("td",null,"String",-1),b=t("td",null,"-",-1),g=t("td",null,"-",-1),v=t("td",null,"要播放视频的资源地址",-1),m=t("td",null,"String",-1),_=t("td",null,"-",-1),f=t("td",null,"-",-1),P=t("tr",null,[t("td",null,"width"),t("td",null,"组件宽度"),t("td",null,"String"),t("td",null,"-"),t("td",null,"100%")],-1),y=t("tr",null,[t("td",null,"height"),t("td",null,"组件高度"),t("td",null,"String"),t("td",null,"-"),t("td",null,"100%")],-1),S=t("tr",null,[t("td",null,"border-radius"),t("td",null,"组件圆角"),t("td",null,"String"),t("td",null,"-"),t("td",null,"0")],-1),B=t("tr",null,[t("td",null,"duration"),t("td",null,"指定视频时长"),t("td",null,"Number"),t("td",null,"-"),t("td",null,"-")],-1),w=t("tr",null,[t("td",null,"autoplay"),t("td",null,"是否自动播放"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),A=t("tr",null,[t("td",null,"loop"),t("td",null,"是否循环播放"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),x=t("tr",null,[t("td",null,"muted"),t("td",null,"是否静音播放"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),L=t("tr",null,[t("td",null,"controls"),t("td",null,"是否显示默认播放控件"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"true")])],-1),U=t("tr",null,[t("td",null,"poster"),t("td",null,"视频封面的图片网络资源地址"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")],-1),V=r('<h3 id="props-非app-plus端支持" tabindex="-1"><a class="header-anchor" href="#props-非app-plus端支持" aria-hidden="true">#</a> Props（非APP-PLUS端支持）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>视频标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>direction</td><td>设置全屏时视频的方向，不指定则根据宽高比自动判断</td><td>Number</td><td><code>0</code> / <code>90</code> / <code>-90</code></td><td>-</td></tr><tr><td>initial-time</td><td>指定视频初始播放位置</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>object-fit</td><td>当视频大小与video容器大小不一致时，视频的表现形式</td><td>String</td><td>contain / fill / cover</td><td>contain</td></tr><tr><td>vslide-gesture</td><td>在非全屏模式下，是否开启亮度与音量调节手势</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>vslide-gesture-in-fullscreen</td><td>在全屏模式下，是否开启亮度与音量调节手势</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>danmu-list</td><td>弹幕列表</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>danmu-btn</td><td>是否显示弹幕按钮</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>play-btn-position</td><td>播放按钮的位置</td><td>String</td><td>bottom / center</td><td>bottom</td></tr><tr><td>ad-unit-id</td><td>视频前贴广告单元ID</td><td>String</td><td>-</td><td>-</td></tr><tr><td>poster-for-crawler</td><td>用于给搜索等场景作为视频封面展示</td><td>String</td><td>-</td><td>-</td></tr><tr><td>auto-pause-if-navigate</td><td>当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>auto-pause-if-open-native</td><td>当跳转到其它微信原生页面时，是否自动暂停本页面的视频</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>picture-in-picture-mode</td><td>设置小窗模式</td><td>String / Array</td><td>push / pop / <code>[]</code></td><td>-</td></tr><tr><td>picture-in-picture-show-progress</td><td>是否在小窗模式下显示播放进度</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>background-poster</td><td>进入后台音频播放后的通知栏图标（Android独有）</td><td>String</td><td>-</td><td>-</td></tr><tr><td>referrer-policy</td><td>referrer策略</td><td>String</td><td>origin / no-referrer</td><td>no-referrer</td></tr><tr><td>enable-danmu</td><td>是否展示弹幕</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>enable-play-gesture</td><td>是否开启播放手势，即双击切换播放/暂停</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>enable-progress-gesture</td><td>是否开启控制进度的手势</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>enable-auto-rotation</td><td>是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>show-mute-btn</td><td>是否显示静音按钮</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>show-progress</td><td>是否显示进度条</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-fullscreen-btn</td><td>是否显示全屏按钮</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-bottom-progress</td><td>是否展示底部进度条</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-play-btn</td><td>是否显示视频底部控制栏的播放按钮</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-center-play-btn</td><td>是否显示视频中间的播放按钮</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-casting-button</td><td>是否显示投屏按钮</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>show-snapshot-button</td><td>是否显示截屏按钮</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-screen-lock-button</td><td>是否显示锁屏按钮</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>show-background-playback-button</td><td>是否展示后台音频播放按钮</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr></tbody></table><h3 id="events-全端支持" tabindex="-1"><a class="header-anchor" href="#events-全端支持" aria-hidden="true">#</a> Events（全端支持）</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>play</td><td>开始/继续播放</td><td>-</td></tr><tr><td>pause</td><td>暂停播放</td><td>-</td></tr><tr><td>ended</td><td>播放到末尾</td><td>-</td></tr><tr><td>timeupdate</td><td>播放进度变化</td><td><code>event.detail = {currentTime, duration}</code></td></tr><tr><td>waiting</td><td>视频出现缓冲</td><td>-</td></tr><tr><td>progress</td><td>加载进度变化</td><td><code>event.detail = {buffered}</code></td></tr><tr><td>loadedmetadata</td><td>视频元数据加载完成</td><td><code>event.detail = {width, height, duration}</code></td></tr></tbody></table><h3 id="events-非app-plus端支持" tabindex="-1"><a class="header-anchor" href="#events-非app-plus端支持" aria-hidden="true">#</a> Events（非APP-PLUS端支持）</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>error</td><td>视频播放出错</td><td>-</td></tr><tr><td>controlstoggle</td><td>切换controls显示隐藏</td><td><code>event.detail = {show}</code></td></tr><tr><td>seekcomplete</td><td>seek完成</td><td><code>event.detail = {position}</code></td></tr><tr><td>fullscreenchange</td><td>视频进入和退出全屏</td><td><code>event.detail = {fullScreen, direction}</code></td></tr><tr><td>enterpictureinpicture</td><td>播放器进入小窗</td><td>-</td></tr><tr><td>leavepictureinpicture</td><td>播放器退出小窗</td><td>-</td></tr></tbody></table><h3 id="events-app-plus端支持" tabindex="-1"><a class="header-anchor" href="#events-app-plus端支持" aria-hidden="true">#</a> Events（APP-PLUS端支持）</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>canplay</td><td>浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容</td><td>-</td></tr><tr><td>canplaythrough</td><td>浏览器估计它可以在不停止内容缓冲的情况下播放媒体直到结束</td><td>-</td></tr><tr><td>complete</td><td>OfflineAudioContext渲染完成</td><td>-</td></tr><tr><td>durationchange</td><td>duration属性的值改变时触发</td><td>-</td></tr><tr><td>emptied</td><td>视频停止播放，因为media已经到达结束点</td><td>-</td></tr><tr><td>loadeddata</td><td>media中的首帧已经完成加载</td><td>-</td></tr><tr><td>playing</td><td>由于缺乏数据而暂停或延迟后，播放准备开始</td><td>-</td></tr><tr><td>ratechange</td><td>播放速率发生变化</td><td>-</td></tr><tr><td>seeked</td><td>seek操作完成</td><td>-</td></tr><tr><td>seeking</td><td>seek操作开始</td><td>-</td></tr><tr><td>stalled</td><td>用户代理(UserAgent)正在尝试获取媒体数据，但数据意外未出现</td><td>-</td></tr><tr><td>suspend</td><td>媒体数据加载已暂停</td><td>-</td></tr><tr><td>volumechange</td><td>音量发生变化</td><td>-</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于 <code>APP-PLUS</code> 端使用 <code>iframe</code> 实现同层渲染，故 <code>events</code> 与 <code>非APP-PLUS</code> 端有所差异，且均无回调参数，下表中回调参数仅 <code>非APP-PLUS</code> 端有效，<code>APP-PLUS</code> 端可通过组件 <code>ref</code> 的 <code>instance</code> 属性访问 <code>video</code> 元素实例以及其他 <code>video</code> 组件相关操作，若与 <code>非APP-PLUS</code> 端有差异请注意条件编译。</p></div><h3 id="相关说明" tabindex="-1"><a class="header-anchor" href="#相关说明" aria-hidden="true">#</a> 相关说明</h3>',10),N=t("ul",null,[t("li",null,[t("p",null,[t("code",null,"video"),d(" 实例的使用（"),t("code",null,"APP-PLUS"),d(" 端为 "),t("code",null,"HTMLVideoElement"),d("，"),t("code",null,"非APP-PLUS"),d(" 端为 "),t("code",null,"VideoContext"),d("）")]),t("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[t("pre",{vue:"",class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),d("template")]),t("span",{class:"token punctuation"},">")]),d(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),d("app-container")]),t("span",{class:"token punctuation"},">")]),d(`
  	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),d("app-video")]),d(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),d("video"),t("span",{class:"token punctuation"},'"')]),d(),t("span",{class:"token attr-name"},"vid"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),d("唯一的组件id"),t("span",{class:"token punctuation"},'"')]),d(),t("span",{class:"token attr-name"},"src"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),d("视频url"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),d("app-video")]),t("span",{class:"token punctuation"},">")]),d(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),d("app-container")]),t("span",{class:"token punctuation"},">")]),d(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),d("template")]),t("span",{class:"token punctuation"},">")]),d(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),d("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[d(`
  `),t("span",{class:"token keyword"},"export"),d(),t("span",{class:"token keyword"},"default"),d(),t("span",{class:"token punctuation"},"{"),d(`
    `),t("span",{class:"token comment"},"// 要确保能访问到AppVideo的ref，这里在onReady中操作仅作示例"),d(`
    `),t("span",{class:"token function"},"onReady"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),d(),t("span",{class:"token punctuation"},"{"),d(`
      `),t("span",{class:"token keyword"},"const"),d(),t("span",{class:"token punctuation"},"{"),d(" instance "),t("span",{class:"token punctuation"},"}"),d(),t("span",{class:"token operator"},"="),d(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),d("$refs"),t("span",{class:"token punctuation"},"."),d("video"),t("span",{class:"token punctuation"},";"),d(`

      `),t("span",{class:"token comment"},"// 视频全屏播放（这里APP-PLUS端和非APP-PLUS端的api相同，所以无需条件编译）"),d(`
      instance`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"requestFullScreen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),d(`
    `),t("span",{class:"token punctuation"},"}"),d(`
  `),t("span",{class:"token punctuation"},"}"),d(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),d("script")]),t("span",{class:"token punctuation"},">")]),d(`
`)])]),t("div",{class:"highlight-lines"},[t("br"),t("br"),t("div",{class:"highlight-line"}," "),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{class:"highlight-line"}," "),t("br"),t("br"),t("div",{class:"highlight-line"}," "),t("br"),t("br"),t("br")]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])])])],-1);function E(q,C){const e=o("badge");return s(),l("div",null,[u,i,t("table",null,[p,t("tbody",null,[t("tr",null,[t("td",null,[d("vid "),n(e,{text:"必传",type:"warning",vertical:"middle"})]),h,k,b,g]),t("tr",null,[t("td",null,[d("src "),n(e,{text:"必传",type:"warning",vertical:"middle"})]),v,m,_,f]),P,y,S,B,w,A,x,L,U])]),V,N])}const R=a(c,[["render",E],["__file","app-video.html.vue"]]);export{R as default};
