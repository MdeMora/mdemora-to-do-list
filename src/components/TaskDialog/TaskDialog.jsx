import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Button,
  DialogActions
} from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { taskSchema } from "constants/schemas"

const TaskDialog = ({ open, onClose, onSave, task }) => {
  const defaultValues = {
    name: task?.name ?? "",
    description: task?.description ?? "",
    date: task?.date
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(yup.object().shape(taskSchema)),
    defaultValues: { ...defaultValues } // Recommended by react-hook-form
  })

  const getId = () => (task?.id ? { id: task?.id } : "")

  useEffect(() => {
    reset({ ...defaultValues })
  }, [task, onClose])

  const onSubmit = data =>
    onSave({ ...data, date: new Date().toISOString(), ...getId() })

  const actions = []
  return (
    <Dialog open={open} actions={actions} onClose={onClose}>
      <DialogTitle>{task ? "Edit" : "Add"} To-do Task</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box mt={2} />

          <TextField
            id="name"
            label="Name"
            fullWidth
            error={Boolean(errors?.name?.message)}
            helperText={errors?.name?.message}
            {...register("name")}
          />
          <Box mt={2} />
          <TextField
            id="description"
            label="Description"
            multiline
            maxRows={4}
            fullWidth
            error={Boolean(errors?.description?.message)}
            helperText={errors?.description?.message}
            {...register("description")}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

TaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  task: PropTypes.object
}

export default TaskDialog
