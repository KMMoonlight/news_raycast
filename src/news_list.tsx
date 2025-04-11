import { ActionPanel, List, Action } from "@raycast/api";
import { INewsItem } from "./type";

const NewsList = (props: { data: INewsItem[] }) => {
  return (
    <List>
      {props.data.map((cell, index) => {
        return (
          <List.Item
            key={cell.id}
            title={`${index + 1}. ${cell.title}`}
            subtitle={cell.extra}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser url={cell.link} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
};

export default NewsList;
