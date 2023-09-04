import {
  Container,
  Text,
  Avatar,
  Board,
  PriorityBtn,
  ButtonsContainer,
  Letter,
} from './TaskColumnCard.styled';
import TaskToolbar from '../TaskToolbar';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Draggable } from 'react-beautiful-dnd';

const TaskColumnCard = ({ task, index }) => {
  const { userName, avatarURL } = useSelector(selectUser);
    const firstName = userName.split(' ')[0];
    const firstLetter = firstName[0]?.toUpperCase();

  return (
    <Draggable key={task.id} draggableId={task._id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
      <Text>{task.title}</Text>
      <Board>
        <ButtonsContainer>
          <Avatar>
            {avatarURL ? (
              <img src={avatarURL} alt={userName} />
            ) : (
              <Letter>{firstLetter}</Letter>
            )}
          </Avatar>
          <PriorityBtn priority={task.priority} type="button">
            {task.priority}
          </PriorityBtn>
        </ButtonsContainer>
        <TaskToolbar task={task} />
      </Board>
      </Container>)}
      </Draggable>
  );
};

export default TaskColumnCard;
