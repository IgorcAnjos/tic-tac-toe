import React, { MouseEvent } from "react";

export interface DefaultContainerProps {
  children: React.ReactNode;
  height?: string | null;
  width?: string | null;
  display?: string | null;
  flexDirection?: string | null;
}

export interface BoardProps {
  children: React.ReactNode;
}

export interface SlotProps {
  children: React.ReactNode,
  onClick: (e: MouseEvent<HTMLButtonElement>, slotId: number) => void;
  enabled: boolean;
  canPlay?: boolean;
  slotId: number;
}


export interface PlayerSet {
  id: number;
  name: string;
  simbol: string;
  slotsList: number[];
}

export interface SlotSet {
  id: number;
  enabled: boolean;
  player: number;
  simbol: string;
}