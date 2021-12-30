import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {
  Dialog,
  DialogContent,
  Box,
  Button,
  Input,
  Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import ClearIcon from "@mui/icons-material/Clear"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { taskSchema } from "constants/schemas"
import { StyledPaper, DeleteButton } from "./TaskDialogSC"

const TaskDialog = ({ open, onClose, onSave, task }) => {
  const defaultValues = {
    name: task?.name ?? "",
    description: task?.description ?? "",
    date: task?.date,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yup.object().shape(taskSchema)),
    defaultValues: { ...defaultValues }, // Recommended by react-hook-form
  })

  const getId = () => (task?.id ? { id: task?.id } : "")

  useEffect(() => {
    reset({ ...defaultValues })
  }, [task, onClose])

  const onSubmit = data =>
    onSave({ ...data, date: new Date().toISOString(), ...getId() })

  const actions = []
  return (
    <Dialog
      open={open}
      actions={actions}
      onClose={onClose}
      PaperComponent={StyledPaper}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Input
            id="name"
            placeholder="Task Title"
            fullWidth
            error={Boolean(errors?.name?.message)}
            helperText={errors?.name?.message}
            disableUnderline
            {...register("name")}
          />
          <Box mt={2} />
          <Input
            id="description"
            placeholder="Description"
            multiline
            minRows={6}
            fullWidth
            disableUnderline
            error={Boolean(errors?.description?.message)}
            helperText={errors?.description?.message}
            {...register("description")}
          />
          <Button type="submit" sx={{ textTransform: "capitalize" }}>
            <AddIcon />
            <Typography variant="body1" color="black">
              Add
            </Typography>
          </Button>
          <DeleteButton onClick={onClose} color="error">
            <ClearIcon />
          </DeleteButton>
        </DialogContent>
        {/* <DialogActions>
          <Button type="submit">Save</Button>
        </DialogActions> */}
      </form>
    </Dialog>
  )
}

TaskDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  task: PropTypes.object,
}

export default TaskDialog
