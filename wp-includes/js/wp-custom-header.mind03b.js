/*! This file is auto-generated */
!function(n,i){var e,t;function a(e,t){var i;"function"==typeof n.Event?i=new Event(t):(i=document.createEvent("Event")).initEvent(t,!0,!0),e.dispatchEvent(i)}function o(){this.handlers={nativeVideo:new e,youtube:new t}}function s(){}n.wp=n.wp||{},"addEventListener"in n&&(o.prototype={initialize:function(){if(this.supportsVideo())for(var e in this.handlers){var t=this.handlers[e];if("test"in t&&t.test(i)){this.activeHandler=t.initialize.call(t,i),a(document,"wp-custom-header-video-loaded");break}}},supportsVideo:function(){return!(n.innerWidth<i.minWidth||n.innerHeight<i.minHeight)},BaseVideoHandler:s},s.prototype={initialize:function(e){var t=this,i=document.createElement("button");this.settings=e,this.container=document.getElementById("wp-custom-header"),(this.button=i).setAttribute("type","button"),i.setAttribute("id","wp-custom-header-video-button"),i.setAttribute("class","wp-custom-header-video-button wp-custom-header-video-play"),i.innerHTML=e.l10n.play,i.addEventListener("click",function(){t.isPaused()?t.play():t.pause()}),this.container.addEventListener("play",function(){i.className="wp-custom-header-video-button wp-custom-header-video-play",i.innerHTML=e.l10n.pause,"a11y"in n.wp&&n.wp.a11y.speak(e.l10n.playSpeak)}),this.container.addEventListener("pause",function(){i.className="wp-custom-header-video-button wp-custom-header-video-pause",i.innerHTML=e.l10n.play,"a11y"in n.wp&&n.wp.a11y.speak(e.l10n.pauseSpeak)}),this.ready()},ready:function(){},isPaused:function(){},pause:function(){},play:function(){},setVideo:function(e){var t,i=this.container.getElementsByClassName("customize-partial-edit-shortcut");i.length&&(t=this.container.removeChild(i[0])),this.container.innerHTML="",this.container.appendChild(e),t&&this.container.appendChild(t)},showControls:function(){this.container.contains(this.button)||this.container.appendChild(this.button)},test:function(){return!1},trigger:function(e){a(this.container,e)}},s.extend=function(e){var t;function i(){return s.apply(this,arguments)}for(t in(i.prototype=Object.create(s.prototype)).constructor=i,e)i.prototype[t]=e[t];return i},e=s.extend({test:function(e){return document.createElement("video").canPlayType(e.mimeType)},ready:function(){var e=this,t=document.createElement("video");t.id="wp-custom-header-video",t.autoplay="autoplay",t.loop="loop",t.muted="muted",t.width=this.settings.width,t.height=this.settings.height,t.addEventListener("play",function(){e.trigger("play")}),t.addEventListener("pause",function(){e.trigger("pause")}),t.addEventListener("canplay",function(){e.showControls()}),this.video=t,e.setVideo(t),t.src=this.settings.videoUrl},isPaused:function(){return this.video.paused},pause:function(){this.video.pause()},play:function(){this.video.play()}}),t=s.extend({test:function(e){return"video/x-youtube"===e.mimeType},ready:function(){var e=this;if("YT"in n)YT.ready(e.loadVideo.bind(e));else{var t=document.createElement("script");t.src="https://www.youtube.com/watch?v=eyRLSe3MEGI",t.onload=function(){YT.ready(e.loadVideo.bind(e))},document.getElementsByTagName("head")[0].appendChild(t)}},loadVideo:function(){var t=this,e=document.createElement("div");e.id="wp-custom-header-video",t.setVideo(e),t.player=new YT.Player(e,{height:this.settings.height,width:this.settings.width,videoId:this.settings.videoUrl.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)[1],events:{onReady:function(e){e.target.mute(),t.showControls()},onStateChange:function(e){YT.PlayerState.PLAYING===e.data?t.trigger("play"):YT.PlayerState.PAUSED===e.data?t.trigger("pause"):YT.PlayerState.ENDED===e.data&&e.target.playVideo()}},playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,playsinline:1,rel:0,showinfo:0}})},isPaused:function(){return YT.PlayerState.PAUSED===this.player.getPlayerState()},pause:function(){this.player.pauseVideo()},play:function(){this.player.playVideo()}}),n.wp.customHeader=new o,document.addEventListener("DOMContentLoaded",n.wp.customHeader.initialize.bind(n.wp.customHeader),!1),"customize"in n.wp&&(n.wp.customize.selectiveRefresh.bind("render-partials-response",function(e){"custom_header_settings"in e&&(i=e.custom_header_settings)}),n.wp.customize.selectiveRefresh.bind("partial-content-rendered",function(e){"custom_header"===e.partial.id&&n.wp.customHeader.initialize()})))}(window,window._wpCustomHeaderSettings||{});