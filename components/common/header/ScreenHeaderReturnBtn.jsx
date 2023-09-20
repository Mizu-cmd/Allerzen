import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderReturnBtn = ( {iconUrl, dimensions, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderReturnBtn