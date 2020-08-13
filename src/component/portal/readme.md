###  Portal api
this api is designed for component mount different parent, maybe not current parent.
but provided same event process ( Event Bubbling Through Portals )

```html
 <div id="root"><div><h1>react demos</h1><br><div class="modal"><div><p> Numbers of clicks :4</p></div></div></div></div>
    <div id="modal-root"><div><div class="modal"><button>Click</button></div></div></div>
```

also try to demo `this`

when click the button
```
Parent {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
portal.jsx:31 bar1
portal.jsx:53 Parent {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
portal.jsx:31 bar1
portal.jsx:53 Parent {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
portal.jsx:31 bar1
portal.jsx:53 Parent {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
portal.jsx:31 bar1
```