import{_ as e,r as p,o as i,c as l,b as n,a as t,e as o,d as s}from"./app.e695d3e0.js";const c={},r=o(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h1><p>Typically, one page corresponds to an oui-app-xx</p><p>The directory structure of a basic page looks like this</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oui-app-demo/
\u251C\u2500\u2500 files
\u2502   \u251C\u2500\u2500 menu.json
\u2502   \u2514\u2500\u2500 rpc
\u2502       \u2514\u2500\u2500 demo.lua
\u251C\u2500\u2500 htdoc
\u2502   \u251C\u2500\u2500 index.vue
\u2502   \u251C\u2500\u2500 locale.json
\u2502   \u251C\u2500\u2500 package.json
\u2502   \u251C\u2500\u2500 package-lock.json
\u2502   \u2514\u2500\u2500 vite.config.js
\u2514\u2500\u2500 Makefile

3 directories, 8 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To create a new page, copy the <code>oui-app-demo</code> directory and rename it.</p></div><h2 id="makefile" tabindex="-1"><a class="header-anchor" href="#makefile" aria-hidden="true">#</a> Makefile</h2><div class="language-makefile ext-makefile line-numbers-mode"><pre class="language-makefile"><code><span class="token comment">#</span>
<span class="token comment"># Copyright (C) 2022 Jianhui Zhao &lt;zhaojh329@gmail.com&gt;</span>
<span class="token comment">#</span>
<span class="token comment"># This is free software, licensed under the MIT.</span>
<span class="token comment">#</span>

<span class="token keyword">include</span> <span class="token variable">$</span><span class="token punctuation">(</span>TOPDIR<span class="token punctuation">)</span>/rules.mk

APP_TITLE<span class="token operator">:=</span>Demo
APP_NAME<span class="token operator">:=</span>demo

<span class="token keyword">include</span> ../../oui.mk

<span class="token comment"># call BuildPackage - OpenWrt buildroot signature</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>APP_TITLE</code> - Corresponds to the <code>TITLE</code> in the OpenWrt software package</li><li><code>APP_NAME</code> - During compilation, menu configuration file and packaged JS file will be named <code>APP_NAME</code></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><code>APP NAME</code> cannot be repeated</p></div><h2 id="menu-configuration" tabindex="-1"><a class="header-anchor" href="#menu-configuration" aria-hidden="true">#</a> Menu Configuration</h2><p>For the <code>login</code>, <code>layout</code>, and <code>home</code> pages, no menu configuration file are required.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;/demo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui Demo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;en-US&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui Demo&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-CN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui \u793A\u8303&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-TW&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oui \u793A\u7BC4&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;svg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-xmlns&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-xmlns:xlink&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/1999/xlink&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-viewBox&quot;</span><span class="token operator">:</span><span class="token string">&quot;0 0 512 512&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-d&quot;</span><span class="token operator">:</span><span class="token string">&quot;M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61l-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 0 1 0 .15a15.42 15.42 0 0 0-.53 1.58L15.86 352h51.78l45.45-55l96.77 2.17L135.24 464h63l133-161.75l57.77 1.54c4.29.23 16 .31 18.66.31c24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-fill&quot;</span><span class="token operator">:</span><span class="token string">&quot;currentColor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>view</code> - Same as <code>APP NAME</code> in Makefile</li><li><code>index</code> - For menu sorting</li><li><code>locales</code> - Menu Title Translation</li><li><code>svg</code> - The menu icon</li></ul>`,13),u={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"TIP",-1),k=s("How to configure menu icon: Copy the SVG code for the icon you want from "),v={href:"https://www.xicons.org/#/",target:"_blank",rel:"noopener noreferrer"},m=s("xicons"),q=s(", and then go to the "),g={href:"https://jsonformatter.org/xml-to-json",target:"_blank",rel:"noopener noreferrer"},b=s("xml2json"),h=s(" site to convert the SVG code to JSON format."),y=o(`<p>The menu is divided into primary menu and secondary menu. Oui-ui-core provides some common primary menus by default</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;/status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md-stats&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;en-US&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-CN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u72B6\u6001&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-TW&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u72C0\u614B&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;svg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-xmlns&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-xmlns:xlink&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/1999/xlink&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-viewBox&quot;</span><span class="token operator">:</span><span class="token string">&quot;0 0 24 24&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-d&quot;</span><span class="token operator">:</span><span class="token string">&quot;M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-fill&quot;</span><span class="token operator">:</span><span class="token string">&quot;currentColor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;/system&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;System&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md-settings&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;en-US&quot;</span><span class="token operator">:</span> <span class="token string">&quot;System&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-CN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u7EDF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-TW&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u7D71&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;svg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-xmlns&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-xmlns:xlink&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/1999/xlink&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-viewBox&quot;</span><span class="token operator">:</span><span class="token string">&quot;0 0 24 24&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;g&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-fill&quot;</span><span class="token operator">:</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-d&quot;</span><span class="token operator">:</span><span class="token string">&quot;M4.946 5h14.108C20.678 5 22 6.304 22 7.92v8.16c0 1.616-1.322 2.92-2.946 2.92H4.946C3.322 19 2 17.696 2 16.08V7.92C2 6.304 3.322 5 4.946 5zm0 2A.933.933 0 0 0 4 7.92v8.16c0 .505.42.92.946.92h14.108a.933.933 0 0 0 .946-.92V7.92c0-.505-.42-.92-.946-.92H4.946z&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-fill&quot;</span><span class="token operator">:</span><span class="token string">&quot;currentColor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;/network&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Network&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md-git-network&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;locales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;en-US&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Network&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-CN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7F51\u7EDC&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;zh-TW&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7DB2\u7D61&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;svg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-xmlns&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-xmlns:xlink&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.w3.org/1999/xlink&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-viewBox&quot;</span><span class="token operator">:</span><span class="token string">&quot;0 0 640 512&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;-d&quot;</span><span class="token operator">:</span><span class="token string">&quot;M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;-fill&quot;</span><span class="token operator">:</span><span class="token string">&quot;currentColor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customize-the-login-layout-home-page" tabindex="-1"><a class="header-anchor" href="#customize-the-login-layout-home-page" aria-hidden="true">#</a> Customize the <code>login</code> <code>layout</code> <code>home</code> page</h2><p>Take the custom <code>login</code> page as an example</p><ul><li>First create an app, such as <code>applications/oui-app-login-x</code>, and then modify its Makefile</li></ul><div class="language-makefile ext-makefile line-numbers-mode"><pre class="language-makefile"><code><span class="token comment">#</span>
<span class="token comment"># Copyright (C) 2022 Jianhui Zhao &lt;zhaojh329@gmail.com&gt;</span>
<span class="token comment">#</span>
<span class="token comment"># This is free software, licensed under the MIT.</span>
<span class="token comment">#</span>

<span class="token keyword">include</span> <span class="token variable">$</span><span class="token punctuation">(</span>TOPDIR<span class="token punctuation">)</span>/rules.mk

APP_TITLE<span class="token operator">:=</span>Login X
APP_NAME<span class="token operator">:=</span>login-x

<span class="token keyword">include</span> ../../oui.mk

<span class="token comment"># call BuildPackage - OpenWrt buildroot signature</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configure <code>oui-ui-core</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Oui  ---<span class="token operator">&gt;</span>
    <span class="token punctuation">(</span>login-x<span class="token punctuation">)</span> Customize the login view
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Development/Debugging</li></ul><p>Create a file: oui-ui-core/htdoc/.env.local</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VITE_OUI_LOGIN_VIEW=login-x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function x(f,w){const a=p("ExternalLinkIcon");return i(),l("div",null,[r,n("div",u,[d,n("p",null,[k,n("a",v,[m,t(a)]),q,n("a",g,[b,t(a)]),h])]),y])}const T=e(c,[["render",x],["__file","page.html.vue"]]);export{T as default};
