import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoSlice";

const TodoItem = (props) => {
  const { todo } = props;
  const { id, title, content, isDone } = todo;

  const dispatch = useDispatch();

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo(id));
  };

  const updateTodoItem = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <TodoItemContainer>
      <div>{title}</div>
      <div>{content}</div>
      <div
        onClick={() => {
          updateTodoItem(id);
        }}
      >
        {isDone ? "취소" : "완료"}
      </div>
      <div
        onClick={() => {
          deleteTodoItem(id);
        }}
      >
        삭제
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;
