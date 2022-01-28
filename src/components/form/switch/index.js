import { HiddenInput, Toggle, Circle } from "./style";

const Switch = ({ icon, ...props }) => {
  return (
    <label>
      <HiddenInput type='checkbox' {...props} />

      <Toggle>
        <Circle>
          {icon}
        </Circle>
      </Toggle>
    </label>
  )
}

export { Switch, HiddenInput }
