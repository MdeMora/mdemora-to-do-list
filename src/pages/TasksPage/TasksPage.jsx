import React, { useState } from "react"
import { Box } from "@mui/system"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  TextField
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import TaskDialog from "components/TaskDialog"

const TasksPage = () => {
  const [openTaskDialog, setOpenTaskDialog] = useState(true)
  return (
    <Box>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <TaskDialog open={openTaskDialog} />
    </Box>
  )
}

export default TasksPage
