import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { LocalAudioTrack, LocalVideoTrack, Participant, RemoteAudioTrack, RemoteVideoTrack } from 'twilio-video';

import AvatarIcon from '../../icons/AvatarIcon';
import Typography from '@material-ui/core/Typography';
import Logo from '../Logo/Logo';

import useIsTrackSwitchedOff from '../../hooks/useIsTrackSwitchedOff/useIsTrackSwitchedOff';
import usePublications from '../../hooks/usePublications/usePublications';
import useScreenShareParticipant from '../../hooks/useScreenShareParticipant/useScreenShareParticipant';
import useTrack from '../../hooks/useTrack/useTrack';
import useVideoContext from '../../hooks/useVideoContext/useVideoContext';
import useParticipantIsReconnecting from '../../hooks/useParticipantIsReconnecting/useParticipantIsReconnecting';
import AudioLevelIndicator from '../AudioLevelIndicator/AudioLevelIndicator';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  identity: {
    background: '#224E80',
    color: 'white',
    padding: '0.1em 0.3em 0.1em 0',
    fontSize: '0.7em',
    display: 'inline-block',
    top: '85px',
    width: '300px',
    height: 'auto',
    position: 'absolute',
    '& svg': {
      marginLeft: '0.3em',
      width: '24px',
      height: '24px',
      display: 'inline-block',
      position: 'relative',
      top: '2px',
    },
    '& p': {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      top: '-24px',
      position: 'relative',
      left: '30px',
      width: 'calc(100% - 36px)',
      lineHeight: '1.5',
      display: 'block',
    },
    '& span': {
      fontSize: '0.7rem',
      fontWeight: 'normal',
      display: 'block',
      top: '-22px',
      position: 'relative',
      left: '26px',
      width: 'calc(100% - 36px)',
      lineHeight: '1.5',
    },
  },
  jobtitle: {
    color: 'white',
    padding: 0,
    paddingLeft: '4px',
    margin: 0,
    // display: 'flex',
    alignItems: 'center',
    fontWeight: 'normal',
    fontSize: '0.7rem',
    lineHeight: '2.2',
  },
  infoContainer: {
    position: 'absolute',
    zIndex: 2,
    height: '100%',
    width: '100%',
  },
  reconnectingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(40, 42, 43, 0.75)',
    zIndex: 1,
  },
  fullWidth: {
    gridArea: '1 / 1 / 2 / 3',
    [theme.breakpoints.down('sm')]: {
      gridArea: '1 / 1 / 3 / 3',
    },
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    '& svg': {
      transform: 'scale(2)',
    },
  },
  azLogoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '8px',
    margin: '16px 0',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    width: '300px',
    height: 'auto',
    '& img': {
      height: '46px',
      width: 'auto',
    },
  },
}));

interface MainParticipantInfoProps {
  participant: Participant;
  children: React.ReactNode;
}

export default function MainParticipantInfo({ participant, children }: MainParticipantInfoProps) {
  const classes = useStyles();
  const roomInfo = (window as any).roomInfo;
  const {
    room: { localParticipant },
  } = useVideoContext();
  const isLocal = localParticipant === participant;
  const isInternal = roomInfo.ParticipantsInfo[participant.identity].External === false;
  const screenShareParticipant = useScreenShareParticipant();
  const isRemoteParticipantScreenSharing = screenShareParticipant && screenShareParticipant !== localParticipant;

  const publications = usePublications(participant);
  const videoPublication = publications.find(p => p.trackName.includes('camera'));
  const screenSharePublication = publications.find(p => p.trackName.includes('screen'));

  const videoTrack = useTrack(screenSharePublication || videoPublication);
  const isVideoEnabled = Boolean(videoTrack);

  const audioPublication = publications.find(p => p.kind === 'audio');
  const audioTrack = useTrack(audioPublication) as LocalAudioTrack | RemoteAudioTrack | undefined;

  const isVideoSwitchedOff = useIsTrackSwitchedOff(videoTrack as LocalVideoTrack | RemoteVideoTrack);
  const isParticipantReconnecting = useParticipantIsReconnecting(participant);

  return (
    <div
      data-cy-main-participant
      data-cy-participant={participant.identity}
      className={clsx(classes.container, {
        [classes.fullWidth]: !isRemoteParticipantScreenSharing,
      })}
    >
      <div className={classes.infoContainer}>
        {isInternal && <Logo className={classes.azLogoContainer} />}

        <div className={classes.identity}>
          {<AudioLevelIndicator audioTrack={audioTrack} />}

          {((roomInfo.ParticipantsInfo[participant.identity].Info.FirstName != null &&
            roomInfo.ParticipantsInfo[participant.identity].Info.FirstName != '') ||
            (roomInfo.ParticipantsInfo[participant.identity].Info.LastName != null &&
              roomInfo.ParticipantsInfo[participant.identity].Info.LastName != '')) && (
            <Typography variant="body1" color="inherit">
              {roomInfo.ParticipantsInfo[participant.identity].Info.FirstName +
                ' ' +
                roomInfo.ParticipantsInfo[participant.identity].Info.LastName}
              {/*
            {isLocal && ' (Tu)'}
            {screenSharePublication && ' - Condivisione Schermo'}
            */}
            </Typography>
          )}

          {(roomInfo.ParticipantsInfo[participant.identity].Info.FirstName == null ||
            roomInfo.ParticipantsInfo[participant.identity].Info.FirstName == '' ||
            roomInfo.ParticipantsInfo[participant.identity].Info.LastName == null ||
            roomInfo.ParticipantsInfo[participant.identity].Info.LastName == '') && (
            <Typography variant="body1" color="inherit">
              {roomInfo.ParticipantsInfo[participant.identity].PublicName}
              {/*
              {isLocal && ' (Tu)'}
              {screenSharePublication && ' - Condivisione Schermo'}
              */}
            </Typography>
          )}

          {roomInfo.ParticipantsInfo[participant.identity].Info.JobTitle != null &&
            roomInfo.ParticipantsInfo[participant.identity].Info.JobTitle != '' && (
              <Typography variant="body2" className={classes.jobtitle} color="inherit" component="span">
                {roomInfo.ParticipantsInfo[participant.identity].Info.JobTitle}
              </Typography>
            )}
        </div>
      </div>
      {(!isVideoEnabled || isVideoSwitchedOff) && (
        <div className={classes.avatarContainer}>
          <AvatarIcon />
        </div>
      )}
      {isParticipantReconnecting && (
        <div className={classes.reconnectingContainer}>
          <Typography variant="body1" style={{ color: 'white' }}>
            Reconnecting...
          </Typography>
        </div>
      )}
      {children}
    </div>
  );
}
