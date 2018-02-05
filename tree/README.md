#### 树
###### 特性


> 右单旋转
> 说明:
<img src="http://oigzh9iic.bkt.clouddn.com/%E5%90%91%E5%B7%A6%E5%8D%95%E6%97%8B%E8%BD%AC.png">

tree的节点特性:父节点大于`子节点(左)`,小于`子节点(右)`;<br/>

简要:<br/>
[node]()为`50`<br>
[tmp(node.right)]()为`70`<br>
`70`要成为根节点,那么就要把`50`移动到`70`的left上去.<br>
原来的`70`的left值`60`,移动到`50`的right位置上去.

翻译:<br/>
而左单旋平衡节点的原理,就是根据这一发展过来的.<br/>
首先:`node`代表根节点,`tmp`为`node.right`(因为要做左单旋转,只旋转一次).<br/>
这个时候,根节点就是`tmp(70)`了,而原来的`node`的`50(子左节点)`,
是小于70.那它就要成为`70`的`子节点(左)`,
而原来`70`下面的左节点`60`,大于50并且小于70,就将它移动到`50`下面的右节点去了.

```js
// 公式:
tmp = node.right;
node.right = tmp.left;
tmp.left = node;
return tmp;
```


> 左向右双旋转

<img src="http://oigzh9iic.bkt.clouddn.com/%E5%B7%A6%E5%90%91%E5%8F%B3%E5%8F%8C%E6%97%8B%E8%BD%AC.jpg">
