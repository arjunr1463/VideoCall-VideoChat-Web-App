import React from "react";
import { useParams } from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
function Room() {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 1127345891;
    const serverSecret = "c84d6bd498bd85fb368ada4d71cee92e";
    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Arjun"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };
  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
}

export default Room;
