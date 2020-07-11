import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    position: 'fixed',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(171deg, #020024 0%, #323259 48%, #2f616b 100%)',
  },
  main_title: {
    color: '#953E5B',
    'text-align': 'center',
    'font-size': '75px',
    'font-family': 'Aileron'
  },
}

class Home extends Component {
  constructor() {
    super()

    this.state = {
      title: 'Theo Escriva',
    }
  }

  render() {
    const { classes } = this.props
    const { title } = this.state

    return (
      <div className={classes.root}>
        <h2 className={classes.main_title}>{title}</h2>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
