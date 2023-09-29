import { z } from 'zod'

export const formSchema = z.object({
  focusDuration: z.number().min(1).max(59).default(25),
  pomodorosCount: z.number().min(1).max(10).default(2),
  shortBreakDuration: z.number().min(1).max(59).default(25),
  longBreakDuration: z.number().min(1).max(59).default(25),
  autoResume: z.boolean().default(false), // TODO ?
  sound: z.boolean().default(true),
  notifications: z.boolean().default(true),
  timerFont: z.string(),
  timerFontSize: z.number().min(1).max(100),
  timerFontColor: z.string(),
  timerFontWeight: z.string(),
  todoFont: z.string(),
  todoFontSize: z.number().min(1).max(100),
  todoFontColor: z.string(),
  todoFontWeight: z.string(),
  iconPrimaryColor: z.string(),
  iconSecondaryColor: z.string()
})

export type FormSchema = typeof formSchema
