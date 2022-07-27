import { useState, useContext } from 'react';
import { SettingsContext } from '../../context/settings';
import { Card, Button, Elevation } from '@blueprintjs/core';
import './list.css';

const List = ({ list, toggleComplete }) => {

  const settings = useContext(SettingsContext);

  const [page, setPage] = useState(0);

  const renderList = list.filter(item => settings.completed ? true : !item.completed);
  const start = settings.pageItems * page || 0;
  const end = start + settings.pageItems || list.length;
  const pages = new Array(Math.ceil(renderList.length / settings.pageItems)).fill('');

  const displayList = renderList ? renderList.slice(start, end) : [];

  return (
    <>
      {displayList.map(item => (
        <Card interactive={true} elevation={Elevation.TWO}>
          <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
            <hr />
          </div>
        </Card>
      ))}
      {
        pages.map((n, index) => (
          <Button key={`page-${index}`} onClick={() => setPage(index)}>{index + 1}</Button>
        ))
      }
    </>
  );
};

export default List;