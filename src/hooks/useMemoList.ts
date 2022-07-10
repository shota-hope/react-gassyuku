import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback((text:string) => {
    const newMemos = [...memos];
    const thanks = ["ENDさん企画ありがとう！ ", "ENDさん誕生日おめでとう! ",  "けんちゃん誕生日おめでとう！ "  ]
    newMemos.push( text + "　　" + " そういえば  " + thanks[Math.floor(Math.random() * thanks.length)]);
    setMemos(newMemos);
  }, [memos]);

  const deleteTodo = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos]);

  return { memos, addTodo, deleteTodo };
};
