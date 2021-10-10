import React from "react"
import PropTypes from "prop-types"
import { IconButton, Typography } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import {
  TaskCard,
  TaskCardTitle,
  TaskCardContent,
  TaskCardActions
} from "./TaskCardStyledComponents"

const TaskItem = ({ task, onEdit, onFinish, onDelete }) => {
  return (
    <TaskCard finished={task.finished}>
      <TaskCardContent>
        <TaskCardTitle>
          <Typography variant="h6">{task.name}</Typography>
          <Typography>{new Date(task?.date).toDateString()}</Typography>
        </TaskCardTitle>
        <Typography>{task.description}</Typography>
      </TaskCardContent>
      <TaskCardActions>
        <IconButton onClick={() => onEdit(task)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(task)} color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => onFinish(task)} color="success">
          <AssignmentTurnedInIcon />
        </IconButton>
      </TaskCardActions>
    </TaskCard>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TaskItem
