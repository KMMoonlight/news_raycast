import { useEffect, useState } from "react";
import { INews } from "./type";
import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import NewsList from "./news_list";

const Command = () => {
  const [categories, setCategories] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { push } = useNavigation();

  const queryNews = () => {
    setLoading(true);
    fetch("https://momoyu.cc/api/hot/list?type=0")
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: any) => {
        setCategories(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    queryNews();
  }, []);

  return (
    <List isLoading={loading}>
      {categories.map((cell, index) => {
        return (
          <List.Item
            key={cell.id}
            title={`${index + 1}. ${cell.name}`}
            actions={
              <ActionPanel title="category actions">
                <Action title="Open" onAction={() => push(<NewsList data={cell.data} />)} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
};

export default Command;
