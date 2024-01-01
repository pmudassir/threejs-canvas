import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        // presetColors={[
        //   //we can add preset colors as we need eg:
        //   '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00',
        // ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker