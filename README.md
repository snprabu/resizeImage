This tool is very simple to resize the image. All we need to include three attributes with the image tag.

`**class="alignimg" **`
`**data-width="200" (width of the pod) **`
`**data-height="150" (height of the pod)**`

## Sample Image Tag below:
`img src="img/test1.jpg" class="alignimg" data-width="200" data-height="150"`

## Resources Need:
**include the plugin path in the header.**

`<script src="ImgAlignment.js"></script>`

**call the below code in the end of body tag:**

`$(window).load(function(){`
`$(".alignimg").imgAlignment();`
`});`


**Css:**

`.parentimgPod{`
`position:absolute;`
`top:25%;`
`left:25%;`
`width:660px;`
`transform:-translateX(-50%);`
`transform:-translateY(-50%);`
`}`
`.childimgPod{`
`width:200px;`
`height:150px;`
`margin:0 20px 20px 0;`
`padding:0;`
`float:left;`
`position:relative;`
`}`


It can be changed based on your requirement.
