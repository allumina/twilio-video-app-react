import React from 'react';
import clsx from 'clsx';
import Participant from '../Participant/Participant';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useMainParticipant from '../../hooks/useMainParticipant/useMainParticipant';
import useParticipants from '../../hooks/useParticipants/useParticipants';
import useVideoContext from '../../hooks/useVideoContext/useVideoContext';
import useSelectedParticipant from '../VideoProvider/useSelectedParticipant/useSelectedParticipant';
import useScreenShareParticipant from '../../hooks/useScreenShareParticipant/useScreenShareParticipant';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '2em',
      overflowY: 'auto',
      background: 'rgb(79, 83, 85)',
      gridArea: '1 / 2 / 1 / 3',
      zIndex: 5,
      [theme.breakpoints.down('sm')]: {
        gridArea: '2 / 1 / 3 / 3',
        overflowY: 'initial',
        overflowX: 'auto',
        display: 'flex',
        padding: `${theme.sidebarMobilePadding}px`,
      },
    },
    transparentBackground: {
      background: 'transparent',
    },
    scrollContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },
  })
);

export default function ParticipantGrid() {
  const classes = useStyles();
  const {
    room: { localParticipant },
  } = useVideoContext();
  const roomInfo = (window as any).roomInfo;
  const participants = useParticipants();
  const [selectedParticipant, setSelectedParticipant] = useSelectedParticipant();
  const screenShareParticipant = useScreenShareParticipant();
  const mainParticipant = useMainParticipant();
  const isRemoteParticipantScreenSharing = screenShareParticipant && screenShareParticipant !== localParticipant;

  // if (participants.length === 0) return null; // Don't render this component if there are no remote participants.

  return (
    <div id="Dish" className={classes.scrollContainer}>
      <Participant participant={localParticipant} isLocalParticipant={true} />
      {participants.map(participant => {
        const isSelected = participant === selectedParticipant;
        const hideParticipant =
          (participant === mainParticipant && participant !== screenShareParticipant && !isSelected) ||
          (roomInfo.Mode == 1 && roomInfo.Participant.Level != 10 && roomInfo.Participant.Level != 100);
        return (
          <Participant
            key={participant.sid}
            participant={participant}
            isSelected={participant === selectedParticipant}
            onClick={() => setSelectedParticipant(participant)}
            hideParticipant={hideParticipant}
          />
        );
      })}
    </div>
  );
}
