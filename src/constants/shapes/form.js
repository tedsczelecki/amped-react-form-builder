import PropTypes from 'prop-types';

export const formItemOptionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
});

export const formItemShape = PropTypes.shape({
  defaultValue: PropTypes.any,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.arrayOf(formItemOptionShape),
  props: PropTypes.object,
  type: PropTypes.string
});

export const formDataShape = PropTypes.shape({
  fields: PropTypes.arrayOf(
    PropTypes.arrayOf(formItemShape)
  )
});

export const formComponentMapShape = PropTypes.shape({
  [PropTypes.string]: PropTypes.shape({
    component: PropTypes.node
  })
});
