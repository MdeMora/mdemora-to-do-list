import React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Box
} from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { taskSchema } from "constants/schemas"

// eslint-disable-next-line react/prop-types
const TaskDialog = ({ open }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(yup.object().shape(taskSchema))
  })
  const onSubmit = data => console.log(data)
  return (
    <Dialog open={open}>
      <DialogTitle>Add To-do Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={2} />

          <TextField
            id="name"
            label="Name"
            inputRef={register("name")}
            fullWidth
            error={Boolean(errors?.length?.message)}
            helperText={errors?.length?.message}
          />
          <Box mt={2} />
          <TextField
            id="description"
            label="Description"
            multiline
            maxRows={4}
            inputRef={register("description")}
            fullWidth
            error={Boolean(errors?.length?.message)}
            helperText={errors?.length?.message}
          />
          <button type="submit">save</button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog
