import React, { useState } from "react"
import dayjs from "dayjs"
import PropTypes from "prop-types"

import { Box, IconButton, Typography, Tooltip } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import {
  TaskCard,
  TaskCardTitle,
  TaskCardContent,
  TaskCardActions,
  TaskCardDate,
} from "./TaskCardSC"

const TaskItem = ({ task, onEdit, onFinish, onDelete }) => {
  const [active, setActive] = useState(false)

  return (
    <TaskCard
      finished={task.finished}
      active={active}
      onClick={() => setActive(!active)}
    >
      {active && (
        <>
          <Tooltip title="Complete">
            <IconButton onClick={() => onFinish(task)} color="success">
              <CheckCircleIcon />
            </IconButton>
          </Tooltip>
          <Box mr={3} />
        </>
      )}

      <TaskCardContent>
        <TaskCardTitle>
          <Typography variant="subtitle1">{task.name}</Typography>
        </TaskCardTitle>
        <Typography>{task.description}</Typography>
      </TaskCardContent>

      {!active && (
        <TaskCardDate>{dayjs(task.date).format("MM/DD/YYYY")}</TaskCardDate>
      )}

      {active && (
        <>
          <Box flex={1} />
          <TaskCardActions>
            <Tooltip title="Edit">
              <IconButton onClick={() => onEdit(task)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => onDelete(task)} color="error">
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </TaskCardActions>
        </>
      )}
    </TaskCard>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TaskItem
