###  深入react的setState机制

> ref : https://juejin.im/post/6844904084323958798

代码：
``` jsx
import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return <button onClick={()=> {
      this.setState({count: this.state.count + 1});
      console.log(this.state.count);
      this.setState({count: this.state.count + 1});
      console.log(this.state.count);
      this.setState({count: this.state.count + 1});
      console.log(this.state.count);
      }}>{this.state.count}</button>
  }

  componentDidMount() {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
  }
}

export default Count;

```
结果是componentDidMount执行后，按钮上的数字是1，控制台打印：
```bash
0
0
0
```

接着click按钮，按钮数字在原来的基础上增加1，变为2，控制台打印：
```bash
1
1
1
```


setState 源代码

```jsx
/**
   * Sets a subset of the state. Always use this or `replaceState` to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  setState: function(partialState, callback) {
    // Merge with `_pendingState` if it exists, otherwise with existing state.
    this.replaceState(
      merge(this._pendingState || this.state, partialState),
      callback
    );
  }

```

它先把传进来的partialState跟正在处理中的state（_pendingState）或者当前state进行一个对象的浅合并（shallow merges,即对象最外层的key的覆盖）。然后就把它传给了replaceState方法。而replaceState方法的实现又是这样的：

```jsx
 /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {object} completeState Next state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  replaceState: function(completeState, callback) {
    validateLifeCycleOnReplaceState(this);
    this._pendingState = completeState;
    ReactUpdates.enqueueUpdate(this, callback);
  },

```

其中 validateLifeCycleOnReplaceState 用来验证并给出一些警告信息，
主要更新代码为
```js
ReactUpdates.enqueueUpdate(this, callback);
```

"enqueueUpdate"  will  update this *dirtyComponents*.
sourceCode for enqueueUpdate
```jsx
/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function enqueueUpdate(component, callback) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !callback || typeof callback === "function",
    'enqueueUpdate(...): You called `setProps`, `replaceProps`, ' +
    '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
    'is not callable.'
  ) : invariant(!callback || typeof callback === "function"));

  ensureBatchingStrategy();

  if (!batchingStrategy.isBatchingUpdates) {
    component.performUpdateIfNecessary();
    callback && callback();
    return;
  }

  dirtyComponents.push(component);

  if (callback) {
    if (component._pendingCallbacks) {
      component._pendingCallbacks.push(callback);
    } else {
      component._pendingCallbacks = [callback];
    }
  }
}
```
如果batchingStrategy对象的isBatchingUpdates标志位为false的话，那么我们就直接进入界面更新流程：其中 react就把当前调用了setState方法的组件实例放入到dirtyComponents中，并且把setState方法的callback函数保存在组件实例的_pendingCallbacks字段上：
```jsx
dirtyComponents.push(component);

  if (callback) {
    if (component._pendingCallbacks) {
      component._pendingCallbacks.push(callback);
    } else {
      component._pendingCallbacks = [callback];
    }
  }

```
其中dirtyComponents表示为
>  /**
>  * Mark a component as needing a rerender, adding an optional callback to a
>
>  * list of functions which will be executed once the > rerender occurs.
>  */
