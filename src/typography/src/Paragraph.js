import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import useParagraphStyle from '../../theme/src/hooks/useParagraphStyle'

const Paragraph = memo(
  forwardRef(function Paragraph(props, ref) {
    const { color = 'default', marginTop, size = 400, ...restProps } = props

    const { marginTop: defaultMarginTop, ...textStyle } = useParagraphStyle(
      size,
      color
    )

    const finalMarginTop =
      marginTop === 'default' ? defaultMarginTop : marginTop

    return (
      <Box
        is="p"
        ref={ref}
        marginTop={finalMarginTop || 0}
        marginBottom={0}
        {...textStyle}
        {...restProps}
      />
    )
  })
)

Paragraph.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Paragraph
