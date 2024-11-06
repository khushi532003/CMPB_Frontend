import { useContext } from "react";
import { AdminMembersContext } from "./MembersContext/AdminMembersContext";
import { ProgrammeContext } from "./ProgrammeContext/ProgrammeContext";
import { ChurayeHuePalContext } from "./ChurayeHuePalContext/ChurayeHuePalContext";
import { HappyStoryContext } from "./HappyStoryContext/HappyStoryContext";

export { default as AdminMembersContextProvider } from "./MembersContext/AdminMembersContext";
export { default as ProgrammeContextProvider } from "./ProgrammeContext/ProgrammeContext";
export { default as ChurayeHuePalContextProvider } from "./ChurayeHuePalContext/ChurayeHuePalContext";
export { default as HappyStoryContextProvider } from "./HappyStoryContext/HappyStoryContext";


export const useAdminMemberContext = () => useContext(AdminMembersContext);
export const useProgrammeContext = () => useContext(ProgrammeContext);
export const useChurayeHuePalContext = () => useContext(ChurayeHuePalContext);
export const useHappyStroyContext = () => useContext(HappyStoryContext)