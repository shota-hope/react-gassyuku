import React from "react";
import { ChangeEvent, useState, useCallback, FC } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";
import { Button, Input, Form, Checkbox } from "antd";
import "antd/dist/antd.css";

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をstateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>
      <h1>合宿感想リスト</h1>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label="合宿の感想" name="合宿の感想">
          <Input type="text" value={text} onChange={onChangeText} />
          <ButtonMargin>
            <Button type="primary" htmlType="submit" onClick={onClickAdd}>
              追加
            </Button>
          </ButtonMargin>
        </Form.Item>
      </Form>

      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const ButtonMargin = styled.div`
  margin-top: 16px;
`;
