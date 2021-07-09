import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core';
import { Mic, Videocam } from '@material-ui/icons';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { SocketContext } from '../Context';
import '../video_styles.css';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  buttonGridContainer: {
    width: '400px',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexDirection: 'column',
    },
  },
  margin: {
    marginTop: 10,
  },
  padding: {
    padding: 10,
  },
  paper: {
    padding: '10px',
    border: '2px',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, toggleMic, toggleVideo } = useContext(SocketContext);
  const classes = useStyles();

  const [state, setState] = React.useState({
    mic: true,
    video: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            <Grid container className={classes.buttonGridContainer}>
              <Grid item xs={12} md={6} className={classes.padding}>
                <FormControlLabel control={<Switch checked={state.mic} onChange={handleChange} name="mic" color="primary"/>} label="Mic" onClick={() => toggleMic()} labelPlacement="start" />
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <FormControlLabel control={<Switch checked={state.video} onChange={handleChange} name="video" color="primary"/>} label="Video" onClick={() => toggleVideo()} labelPlacement="start" />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
