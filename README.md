# Impressions-of-Acquaintances
# 熟人印象表模板
因为参与最近很多人在玩的「熟人（部分）印象表」的活动，觉得用ps或者画图填的话好麻烦，就写了个简单的`HTML`表格来实现它，大家如果会`HTML`的话可以拿去自定义，每个格子里可以放的内容也不仅限于我初始设定的这些。  
### 使用方法（太一原版）：
1. 下载 Release 就行：[熟人（部分）印象表HTML版 v1.0](https://github.com/gl14916/Impressions-of-Acquaintances/releases/download/v1.0/Impressions-of-Acquaintances-v1.0.zip)
2. 解压，用记事本或者其他文本编辑器打开 `index.html`
3. 第 86 行的 `<!--填表区开始-->` 以后是填表的部分，到初始是第 99 行的 `<!--填表区终止-->` 之前结束
4. 每行的基本结构是
    ~~~~
    <tr>
        <td><img class="avatar" src="images/[图片名].jpg" alt="头像"></td>
    		<td><img src="images/[图片名].jpg" alt="评论图片"><span></span></td>
    		<td><span></span></td>
    </tr>
    ~~~~

    * 每一对 `<td>` 与 `</td>` 之间是一格的内容，**理论上在这之间写啥都行，需要一点标记语言的知识，有兴趣的朋友可以自行研究一下**，默认采取的格式的效果是第一格装头像，第二格装图片和文字评论，第三格装文字
    * 图片放在images文件夹里，图片名字放到上图结构中对应标明 `[图片名]` 的位置，图片就会显示在对应格子里
    * 文字内容放到 `<span>` 和 `</span>` 中间，会自动换行，如果需要手动换行的话，用 `<br>` 表示换行
    * 包括了一组例子，大家可以把例子那组给删掉或者改成自己需要的内容
    * 每行的结构作为一组，可以任意复制粘贴来增加和填写
5. 第 101 行用个人微博 ID 或者昵称替换 `[微博ID / 昵称]`，作为填表人信息
6. 我是填好以后用 Chrome 的 FireShot 插件进行截图的
7. 祝大家使用愉快


### 使用方法（key麻烦版）：
-  下载 Release 就行：[熟人（部分）印象表HTML版 v1.0](https://github.com/gl14916/Impressions-of-Acquaintances/releases/download/v1.0/Impressions-of-Acquaintances-v1.0.zip)
-  解压，用记事本或者其他文本编辑器打开 `index.html`；`app.js`;`acquaintance.xml`.
	- `index.html`里面，每多加一个人就要多复制一块
```
<tr class="person">
			<td>
				<img class="avatar userid" src="" alt="...">
			</td>
			<td>
				<img class="beforeimg" src="" alt="..."><span class="before"></span>
			</td>
			<td>
				<span class="after"></span>
			</td>
</tr>  
```  

- `app.js`里面第三行；
```
var person = [1,2];  //有多少人这里就要数到多少
```
- `acquaintance.xml`里面<br>
	userid: 人物头像<br>
beforeimg: 认识前的印象图片<br>
before: 评论图片<br>
after: 认识后的印象文字描述<br>
图片要下载到images里面，将对应路径名放到对应的图片标签。<br>
有多少人就有多少个`<person>...</person>`
- 第 101 行用个人微博 ID 或者昵称替换 `[微博ID / 昵称]`，作为填表人信息
- 祝大家辛苦过后有收获