import React from 'react';
import ParticipantList from '../ParticipantList/ParticipantList';
import ParticipantGrid from '../ParticipantGrid/ParticipantGrid';
import { styled } from '@material-ui/core/styles';
import MainParticipant from '../MainParticipant/MainParticipant';

const Container = styled('div')(({ theme }) => {
  const totalMobileSidebarHeight = `${theme.sidebarMobileHeight +
    theme.sidebarMobilePadding * 2 +
    theme.participantBorderWidth}px`;

  return {
    position: 'relative',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: `1fr ${theme.sidebarWidth}px`,
    gridTemplateRows: '100%',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: `100%`,
      gridTemplateRows: `calc(100% - ${totalMobileSidebarHeight}) ${totalMobileSidebarHeight}`,
    },
  };
});

export default function Room() {
  const roomInfo = (window as any).roomInfo;
  const roomMode = Number(roomInfo.Mode);

  return (
    <Container>
      {(roomMode == 0 || roomMode == 1) && <MainParticipant />}
      {(roomMode == 0 || roomMode == 1) && <ParticipantList />}
      {roomMode == 2 && <ParticipantGrid />}
    </Container>
  );
}
