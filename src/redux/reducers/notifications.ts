import { Actions, AnyAction } from "../actions"
import { NotificationState } from "../../AppState"

export const reducer = (
  state: NotificationState,
  action: AnyAction
): NotificationState => {
  switch (action.type) {
    case Actions.NOTIFICATION_INFO:
      return { message: action.payload, type: "info", open: true }
    case Actions.NOTIFICATION_ERROR:
      return { message: action.payload, type: "error", open: true }
    case Actions.NOTIFICATION_CLOSE:
      return { message: "", type: "", open: false }
    default:
      return state
  }
}
