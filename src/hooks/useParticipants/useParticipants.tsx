import { useEffect, useState } from 'react';
import { RemoteParticipant } from 'twilio-video';
import useDominantSpeaker from '../useDominantSpeaker/useDominantSpeaker';
import useVideoContext from '../useVideoContext/useVideoContext';

export default function useParticipants() {
  const { room } = useVideoContext();
  const dominantSpeaker = useDominantSpeaker();
  const [participants, setParticipants] = useState(Array.from(room.participants.values()));

  // When the dominant speaker changes, they are moved to the front of the participants array.
  // This means that the most recent dominant speakers will always be near the top of the
  // ParticipantStrip component.
  useEffect(() => {
    if (dominantSpeaker) {
      setParticipants(prevParticipants => [
        dominantSpeaker,
        ...prevParticipants.filter(participant => participant !== dominantSpeaker),
      ]);
    }
  }, [dominantSpeaker]);

  useEffect(() => {
    const participantConnected = (participant: RemoteParticipant) => {
      fetch(window.location.pathname.replace('Room', 'RoomInfo'))
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          return data;
        })
        .then(
          data => {
            (window as any).roomInfo = data;
          },
          error => {
            // DO NOTHING
          }
        )
        .then(() => {
          setParticipants(prevParticipants => [...prevParticipants, participant]);
        });
    };
    const participantDisconnected = (participant: RemoteParticipant) =>
      setParticipants(prevParticipants => prevParticipants.filter(p => p !== participant));
    room.on('participantConnected', participantConnected);
    room.on('participantDisconnected', participantDisconnected);
    return () => {
      room.off('participantConnected', participantConnected);
      room.off('participantDisconnected', participantDisconnected);
    };
  }, [room]);

  return participants;
}
