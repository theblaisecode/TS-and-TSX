import { FormProps } from "../types/types.tsx"

function Form(props: FormProps) {
  return (
    <form action="" {...props} >
      {props.children}
    </form>
  )
}

export default Form