useReducer:    

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    } ...

const [tasks, dispatch] = useReducer(
    tasksReducer,  // 处理行为
    initialTasks   // 数据存放
  );
// 把状态更新逻辑从事件处理函数中移动到组件外部。

API:cache  
   1.memo 防止组件在其 props 未更改时重新渲染  【实现组件不必要的渲染】
   2.cache 应用于服务器组件以记忆化可以跨组件共享的工作  【实现不必要的重复工作，例如获取重复的数据】
   3.useMemo 用于在客户端组件跨渲染时缓存昂贵的计算。例如，可以用它来记忆化组件内部数据的转换  【实现组件内部数据不必要的计算】
