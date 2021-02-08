import React from 'react';
import { makeStyles, Typography, Grid, Button, Theme, Hidden } from '@material-ui/core';
import LocalVideoPreview from './LocalVideoPreview/LocalVideoPreview';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import { Steps } from '../PreJoinScreens';
import ToggleAudioButton from '../../Buttons/ToggleAudioButton/ToggleAudioButton';
import ToggleVideoButton from '../../Buttons/ToggleVideoButton/ToggleVideoButton';
import { useAppState } from '../../../state';
import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';
import { useHasVideoInputDevices } from '../../../hooks/deviceHooks/deviceHooks';
import useLocalVideoToggle from '../../../hooks/useLocalVideoToggle/useLocalVideoToggle';
import useLocalAudioToggle from '../../../hooks/useLocalAudioToggle/useLocalAudioToggle';
import { LocalAudioTrack, LocalVideoTrack } from 'twilio-video';

const useStyles = makeStyles((theme: Theme) => ({
  gutterBottom: {
    marginBottom: '1em',
  },
  marginTop: {
    marginTop: '1em',
  },
  deviceButton: {
    width: '100%',
    border: '2px solid #aaa',
    margin: '1em 0',
  },
  localPreviewContainer: {
    paddingRight: '2em',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2.5em',
    },
  },
  joinButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      width: '100%',
      '& button': {
        margin: '0.5em 0',
      },
    },
  },
  mobileButtonBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1.5em 0 1em',
    },
  },
  mobileButton: {
    padding: '0.8em 0',
    margin: 0,
  },
}));

interface DeviceSelectionScreenProps {
  name: string;
  roomName: string;
  setStep: (step: Steps) => void;
}

export default function DeviceSelectionScreen({ name, roomName, setStep }: DeviceSelectionScreenProps) {
  const classes = useStyles();
  const roomInfo = (window as any).roomInfo;
  const { getToken, isFetching } = useAppState();
  const { connect, isAcquiringLocalTracks, isConnecting } = useVideoContext();
  const disableButtons =
    isFetching ||
    isAcquiringLocalTracks ||
    isConnecting ||
    (roomInfo.Mode == 1 && roomInfo.Participant.Level != 10 && roomInfo.Participant.Level != 100);
  const disableButtonsStart = isFetching || isAcquiringLocalTracks || isConnecting;
  const [isAudioEnabled, toggleAudioEnabled] = useLocalAudioToggle();
  const { localTracks } = useVideoContext();
  const hasAudioTrack = localTracks.some(track => track.kind === 'audio');
  const audioTrack = localTracks.find(track => track.kind === 'audio') as LocalAudioTrack;
  const videoTrack = localTracks.find(track => track.name.includes('camera')) as LocalVideoTrack;
  const [isVideoEnabled, toggleVideoEnabled] = useLocalVideoToggle();
  const hasVideoDevices = useHasVideoInputDevices();

  const handleJoin = () => {
    getToken(name, roomName).then(token => connect(token));
  };

  if (roomInfo.Mode == 1 && roomInfo.Participant.Level != 10 && roomInfo.Participant.Level != 100) {
    if (hasAudioTrack && isAudioEnabled) {
      audioTrack.disable();
    }
    if (hasVideoDevices && isVideoEnabled) {
      videoTrack.disable();
    }
  }

  return (
    <>
      <Typography variant="h5" className={classes.gutterBottom}>
        Accedi alla stanza {roomInfo.Name}
      </Typography>

      <Grid container justify="center">
        <Grid item md={7} sm={12} xs={12}>
          <div className={classes.localPreviewContainer}>
            {((roomInfo.Participant.Info.FirstName != null && roomInfo.Participant.Info.FirstName != '') ||
              (roomInfo.Participant.Info.LastName != null && roomInfo.Participant.Info.LastName != '')) && (
              <LocalVideoPreview
                identity={roomInfo.Participant.Info.FirstName + ' ' + roomInfo.Participant.Info.LastName}
                jobtitle={roomInfo.Participant.Info.JobTitle}
              />
            )}

            {(roomInfo.Participant.Info.FirstName == null ||
              roomInfo.Participant.Info.FirstName == '' ||
              roomInfo.Participant.Info.LastName == null ||
              roomInfo.Participant.Info.LastName == '') && (
              <LocalVideoPreview
                identity={roomInfo.Participant.PublicName}
                jobtitle={roomInfo.Participant.Info.JobTitle}
              />
            )}
          </div>
          <div className={classes.mobileButtonBar}>
            <Hidden mdUp>
              <ToggleAudioButton className={classes.mobileButton} disabled={disableButtons} />
              <ToggleVideoButton className={classes.mobileButton} disabled={disableButtons} />
            </Hidden>
            <SettingsMenu mobileButtonClass={classes.mobileButton} />
          </div>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Grid container direction="column" justify="space-between" style={{ height: '100%' }}>
            <div>
              <Hidden smDown>
                <ToggleAudioButton className={classes.deviceButton} disabled={disableButtons} />
                <ToggleVideoButton className={classes.deviceButton} disabled={disableButtons} />
              </Hidden>
            </div>
            <div className={classes.joinButtons}>
              <Button
                variant="contained"
                color="primary"
                data-cy-join-now
                onClick={handleJoin}
                disabled={disableButtonsStart}
              >
                Accedi
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
