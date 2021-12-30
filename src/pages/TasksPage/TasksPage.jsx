/* eslint-disable indent */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

import { Box, Tabs, Typography, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

import TaskDialog from "components/TaskDialog"
import {
  getTasksAction,
  addTaskAction,
  editTaskAction,
  deleteTaskAction,
} from "redux/ducks/taskDuck"
import TaskCard from "components/TaskCard"
import { StyledTabs, TaskList } from "./TasksPageSC"

const TabPanel = ({ className, children, value, index, prerender }) => (
  <div
    className={className}
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
  >
    {(prerender || value === index) && children}
  </div>
)

TabPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.number,
  index: PropTypes.number,
  prerender: PropTypes.bool,
}

const TasksPage = () => {
  const dispatch = useDispatch()
  const { tasks } = useSelector(state => state.tasks)
  const { user } = useSelector(state => state.user)
  const [value, setValue] = useState(0)
  const [selectedTask, setSelectedTask] = useState(undefined)
  const [openTaskDialog, setOpenTaskDialog] = useState(false)

  const handleTabChange = (_, newValue) => setValue(newValue)

  const openDialog = () => setOpenTaskDialog(true)

  const handleClose = () => {
    setSelectedTask(undefined)
    setOpenTaskDialog(false)
  }

  const handleSave = task => {
    selectedTask
      ? editTaskAction(user, task)(dispatch)
      : addTaskAction(user, task)(dispatch)
    handleClose()
  }

  const handleEdit = task => {
    setSelectedTask(task)
    openDialog()
  }

  const handleDelete = task => {
    deleteTaskAction(user, task)(dispatch)
  }

  const handleFinish = task => {
    editTaskAction(user, { ...task, finished: true })(dispatch)
  }

  useEffect(() => {
    getTasksAction(user)(dispatch)
  }, [])

  const sortedTasks = tasks.sort(function (a, b) {
    const nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
  })

  const activeTasks = sortedTasks.filter(task => !task.finished)

  const finishedTasks = sortedTasks.filter(task => task.finished)

  return (
    <Box flex="1">
      <Box maxWidth={900} margin="120px auto">
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="tabs"
          centered
        >
          <StyledTabs label="Active Tasks" id="active" />
          <StyledTabs label="Finished Tasks" id="finished" />
        </Tabs>
        <Box mt={4} />
        <TabPanel value={value} index={0}>
          <TaskList>
            {activeTasks.length === 0 ? (
              <Box mt={4}>
                <Typography variant="h3">Create your first Task!</Typography>
              </Box>
            ) : (
              activeTasks.map((task, idx) => (
                <TaskCard
                  key={idx}
                  task={task}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onFinish={handleFinish}
                />
              ))
            )}
          </TaskList>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {activeTasks.length === 0 ? (
            <Box mt={4}>
              <Typography variant="h3">Finish a Task!</Typography>
            </Box>
          ) : (
            finishedTasks.map((task, idx) => (
              <TaskCard
                key={idx}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onFinish={handleFinish}
              />
            ))
          )}
        </TabPanel>

        <TaskDialog
          open={openTaskDialog}
          onClose={handleClose}
          onSave={handleSave}
          task={selectedTask}
        />

        <Box
          sx={{
            borderTop: "1px solid #6B705C",
            width: "100%",
            justifyContent: "left",
            display: "flex",
            alignItems: "center",
            paddingTop: "16px",
          }}
        >
          <Button onClick={openDialog} sx={{ textTransform: "capitalize" }}>
            <AddIcon />
            <Typography variant="subtitle2" color="black">
              Add
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TasksPage
