export interface Device {
  id: string;
  type:
    | "BatchBaalMill"
    | "ContinuesBallMill"
    | "GranuleSillo"
    | "SlurryPitRight"
    | "SlurryPitLeft"
    | "SlurryPump"
    | "SprayDryer"
    | "VibratingScreen";
  status: "blue" | "red" | "grey" | "none";
  lightsConfig: {
    orientation: "horizontal" | "vertical";
    position: "top" | "bottom" | "left" | "right" | "both" | "center";
  };
  name?: string;
  startTime?: string; // Required for red and grey, optional for blue
  current?: string; // Required for blue, optional for red and grey
  temprature?: string;
  soilSurface?: string;
}

export interface StatusLightsProps {
  orientation: "horizontal" | "vertical";
  position: "top" | "bottom" | "left" | "right" | "both" | "center";
  status: "blue" | "red" | "grey" | "none";
  iconSize: number;
  startTime?: string;
  iconWidth?: number;
  iconHeight?: number;
}

// Define the Position interface for absolute positioning
export interface Position {
  top: number;
  left: number;
}

export interface DeviceState {
  devices: Device[];
  setDeviceData: (id: string, data: Partial<Device>) => void;
}


export interface BodyPrepLayoutProps {
  initialDevices?: Device[];
}