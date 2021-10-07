import * as yup from "yup"
import { TASK_FIELDS } from "constants/fields"

export const taskSchema = {
  [TASK_FIELDS.NAME]: yup.string().required(),
  [TASK_FIELDS.DESCRIPTION]: yup.string(),
  [TASK_FIELDS.ARCHIVED]: yup.bool()
}
