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
