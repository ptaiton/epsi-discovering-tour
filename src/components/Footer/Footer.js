import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import './../../App.css'

//images footer
import Yan from '../../assets/img/footer/yan.jpg'
import Pierre from '../../assets/img/footer/pierre.jpg'
import Antoine from '../../assets/img/footer/antoine.jpg'
import Baptiste from '../../assets/img/footer/baptiste.jpg'
import Alexandre from '../../assets/img/footer/alexandre.jpg'
import Antonin from '../../assets/img/footer/antonin.jpg'
import Maxence from '../../assets/img/footer/maxence.jpg'
import Marouane from '../../assets/img/footer/marouane.jpg'


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    container: {
      display: 'flex',
    },
    button: {
      minWidth:50,
      margin: '10px',
      
    },
   avatar: {
    margin: '25px 24px 0px 24px',
    color: theme.palette.text.secondary,
  },
    blackColor: {
        backgroundColor: 'black',
    },
    image_view: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    iconRed: {
      color: 'red',
      fontSize: '2em'
    },
    colorFooter: {
      backgroundColor:'#77649b',
    },
    heartBeat: {
      animation: 'heartbeat 1s infinite'
    }
  })
class Footer extends Component {
  state = {
    checked: false,
  };
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props
    const { checked } = this.state;

    return (
      <Grid container justify= 'center' className={classes.colorFooter}>
        <footer xs={12}>
        <div className={classes.root}>
          <div className={classes.container}>
            <Tooltip title="Pierre Taiton">
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/pierre-taiton-58a80313a/' target="_blank">
            <Avatar
                src={Pierre}
                className={classNames(classes.avatar, classes.bigAvatar)}/> </a>
            </Grow>
            </Tooltip>
            <Tooltip title="Antoine Durand">
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/antoine-durand-8a40b2131/' target="_blank">
            <Avatar
                src={Antoine}
                className={classNames(classes.avatar, classes.bigAvatar)}/> </a>
            </Grow>
            </Tooltip>
            <Tooltip title="Baptiste De La Faire">
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/baptiste-de-la-faire-133b72151/' target="_blank">
            <Avatar
                src={Baptiste}
                className={classNames(classes.avatar, classes.bigAvatar)}/></a>
            </Grow>
            </Tooltip>
            <Tooltip title="Yannick Jammes">
            <Grow in={checked}>
            <a rel="noopener noreferrer" href='https://www.linkedin.com/in/yannick-jammes-0ba512140/' target="_blank">
            <Avatar
                src={Yan}
                className={classNames(classes.avatar, classes.bigAvatar)}/></a>
            </Grow>
            </Tooltip>
            <Typography checked={checked} onClick={this.handleChange} aria-label="Collapse"  variant="subheading" align="center" color="textSecondary">
            <strong>Made with</strong><IconButton aria-label="Delete" className={classes.button}>
          <span role="img" aria-label="love" className={`${classes.iconRed} ${classes.heartBeat}`}>❤️</span></IconButton><strong>in Montpellier !</strong>
          </Typography>
          <Tooltip title="Marouane Ouzal">
          <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/marouane-ouzal-%F0%9F%91%93-920ab1123/' target="_blank">
              <Avatar
                src={Marouane}
                className={classNames(classes.avatar, classes.bigAvatar)}/></a>
            </Grow>
            </Tooltip>
            <Tooltip title="Antonin Piroth">
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}
            >
            <a rel="noopener noreferrer" href='https://www.linkedin.com/in/antonin-piroth-62b82b134/' target="_blank">
            <Avatar
                src={Antonin}
                className={classNames(classes.avatar, classes.bigAvatar)}/></a>
            </Grow>
            </Tooltip>
            <Tooltip title="Maxence Zini">
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/maxence-zini/' target="_blank">
            <Avatar
                src={Maxence}
                className={classNames(classes.avatar, classes.bigAvatar)}/></a>
            </Grow>
            </Tooltip>
            <Tooltip title="Alexandre Guerder">
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              <a rel="noopener noreferrer" href='https://www.linkedin.com/in/alexandre-guerder-43500a162/' target="_blank">
            <Avatar
                src={Alexandre}
                className={classNames(classes.avatar, classes.bigAvatar)}/></a>
            </Grow> 
            </Tooltip>
          </div>
        </div>
        </footer>
      </Grid>
    );
  }
}


export default withStyles(styles)(Footer);