import { SetStateAction, Dispatch, FormEvent } from "react";
import { TableContents } from "../Table/Table";

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>,
}

export default function AlertModal({useContents}: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    const event = {
      "alert":(e.target as any)[0].value,
      "status": "Unknown",
      "updates": []
    }
    useContents(content => {
      let copy = {... content}
      copy.rowContents = [...copy.rowContents, event]
      return copy
    })
  }
  
  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  )
}
